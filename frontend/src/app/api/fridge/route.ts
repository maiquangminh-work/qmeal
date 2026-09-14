import { NextResponse, NextRequest } from 'next/server';
import { vietnameseRecipes } from '@/data/vietnameseRecipes';

function normalize(str: string): string {
  return (str || '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/đ/g, 'd')
    .replace(/Đ/g, 'd')
    .trim();
}

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const ingredientsStr = searchParams.get('i');
    const lang = (searchParams.get('lang') || 'vi') as 'vi' | 'en';
    
    if (!ingredientsStr || ingredientsStr.trim() === '') {
      return NextResponse.json({ success: true, data: [] });
    }

    const rawUserIngredients = ingredientsStr
      .split(',')
      .map(s => s.trim())
      .filter(s => s.length > 0);

    const normalizedUserIngredients = rawUserIngredients.map(normalize);

    // 1. Match against Curated Vietnamese Master Database (NIN Verified)
    const vnMatches: any[] = [];

    for (const recipe of vietnameseRecipes) {
      const matchedIngredients: { name: string; amount: string }[] = [];
      const missingIngredients: { name: string; amount: string }[] = [];

      for (const ing of recipe.ingredients) {
        const ingViNorm = normalize(ing.name.vi);
        const ingEnNorm = normalize(ing.name.en);

        const isMatched = normalizedUserIngredients.some(userNorm => {
          if (!userNorm) return false;
          // Check substring inclusion both ways, or single-word token inclusion
          if (ingViNorm.includes(userNorm) || ingEnNorm.includes(userNorm) || userNorm.includes(ingViNorm)) {
            return true;
          }
          // Split multi-word user ingredient (e.g. "thit bo" -> check "bo")
          const userTokens = userNorm.split(/\s+/).filter(t => t.length >= 2);
          return userTokens.some(token => ingViNorm.includes(token) || ingEnNorm.includes(token));
        });

        const ingData = {
          name: ing.name[lang] || ing.name.vi,
          amount: ing.amount
        };

        if (isMatched) {
          matchedIngredients.push(ingData);
        } else {
          missingIngredients.push(ingData);
        }
      }

      if (matchedIngredients.length > 0) {
        const total = recipe.ingredients.length;
        const count = matchedIngredients.length;
        const percentage = Math.round((count / total) * 100);

        vnMatches.push({
          id: recipe.id,
          title: recipe.title[lang] || recipe.title.vi,
          image: recipe.image,
          category: recipe.category[lang] || recipe.category.vi,
          tags: recipe.dietaryTags[lang] || recipe.dietaryTags.vi,
          time: recipe.time,
          rating: 4.9,
          calories: recipe.calories,
          servingSize: recipe.servingSize[lang] || recipe.servingSize.vi,
          matchedIngredients,
          missingIngredients,
          matchCount: count,
          totalIngredients: total,
          matchPercentage: percentage,
          isVietnamese: true,
          verified: true
        });
      }
    }

    // Sort Vietnamese matches: highest match count first, then highest percentage
    vnMatches.sort((a, b) => {
      if (b.matchCount !== a.matchCount) {
        return b.matchCount - a.matchCount;
      }
      return b.matchPercentage - a.matchPercentage;
    });

    // 2. If we found Vietnamese matches, return them immediately
    if (vnMatches.length > 0) {
      return NextResponse.json({ success: true, data: vnMatches, total: vnMatches.length });
    }

    // 3. Fallback to TheMealDB if no Vietnamese dishes matched (e.g., purely Western ingredients like 'parmesan', 'pasta')
    const firstIngredient = rawUserIngredients[0].replace(/\s+/g, '_');
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${encodeURIComponent(firstIngredient)}`);
    const data = await response.json();

    if (!data.meals || data.meals.length === 0) {
      return NextResponse.json({ success: true, data: [] });
    }

    let translate = null;
    if (lang === 'vi') {
      try {
        translate = require('translate-google');
      } catch (e) {}
    }

    const internationalResults = await Promise.all(data.meals.slice(0, 8).map(async (meal: any) => {
      let translatedTitle = meal.strMeal;
      if (translate) {
        try {
          translatedTitle = await translate(meal.strMeal, { to: 'vi' });
        } catch(e) {}
      }
      return {
        id: meal.idMeal,
        title: translatedTitle,
        image: meal.strMealThumb,
        category: 'Quốc tế',
        tags: lang === 'vi' ? ['Món quốc tế'] : ['International'],
        time: '35 min',
        rating: 4.8,
        calories: 500,
        matchedIngredients: [{ name: rawUserIngredients[0], amount: 'Có sẵn' }],
        missingIngredients: [],
        matchCount: 1,
        totalIngredients: 4,
        matchPercentage: 25,
        isVietnamese: false,
        verified: false
      };
    }));

    return NextResponse.json({ success: true, data: internationalResults, total: internationalResults.length });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}