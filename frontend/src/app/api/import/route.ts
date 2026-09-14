import { NextResponse } from 'next/server';
import * as cheerio from 'cheerio';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(request: Request) {
  try {
    const { url } = await request.json();
    if (!url) return NextResponse.json({ error: 'Missing URL' }, { status: 400 });

    const response = await fetch(url, {
      headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' }
    });
    
    if (!response.ok) throw new Error('Failed to fetch the website');
    
    const html = await response.text();
    const $ = cheerio.load(html);
    
    // Tìm thẻ script chứa JSON-LD (Chuẩn SEO của Google cho món ăn)
    let recipeData: any = null;
    $('script[type="application/ld+json"]').each((_, el) => {
      try {
        const json = JSON.parse($(el).html() || '{}');
        // JSON-LD có thể là mảng hoặc object
        const graph = Array.isArray(json) ? json : json['@graph'] || [json];
        
        for (const item of graph) {
          if (item['@type'] === 'Recipe' || (Array.isArray(item['@type']) && item['@type'].includes('Recipe'))) {
            recipeData = item;
            break;
          }
        }
      } catch (e) {
        // Ignore parse error for non-json
      }
    });

    if (!recipeData) {
      return NextResponse.json({ error: 'Không tìm thấy dữ liệu chuẩn Recipe (JSON-LD) trên website này.' }, { status: 404 });
    }

    // Parse data
    const title = recipeData.name;
    const description = recipeData.description || '';
    const imageUrl = Array.isArray(recipeData.image) ? recipeData.image[0] : (recipeData.image?.url || recipeData.image || null);
    
    // Parse ISO 8601 duration
    const parseDuration = (isoStr: string) => {
      if (!isoStr) return 0;
      const match = isoStr.match(/PT(?:(\d+)H)?(?:(\d+)M)?/);
      if (!match) return 0;
      return (parseInt(match[1] || '0') * 60) + parseInt(match[2] || '0');
    };

    const prepTime = parseDuration(recipeData.prepTime);
    const cookTime = parseDuration(recipeData.cookTime);
    const servings = parseInt(recipeData.recipeYield) || 4;

    // Lưu vào database
    const savedRecipe = await prisma.recipe.create({
      data: {
        title,
        description,
        imageUrl,
        sourceUrl: url,
        sourceName: new URL(url).hostname.replace('www.', ''),
        prepTime,
        cookTime,
        servings,
        // Lưu nguyên liệu thô
        ingredients: {
          create: (recipeData.recipeIngredient || []).map((ing: string) => ({
            originalText: ing,
            amount: 1, // Để demo, mặc định 1
            // Cần thuật toán bóc tách amount, unit, name phức tạp hơn cho Phase 3
            ingredient: {
              connectOrCreate: {
                where: { name: ing.substring(0, 50) },
                create: { name: ing.substring(0, 50) }
              }
            }
          }))
        }
      }
    });

    return NextResponse.json({ 
      success: true, 
      message: 'Cào dữ liệu thành công!', 
      data: savedRecipe 
    });

  } catch (error: any) {
    console.error(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
