import { NextResponse, NextRequest } from 'next/server';
import { vietnameseRecipes } from '@/data/vietnameseRecipes';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const query = searchParams.get('q')?.trim().toLowerCase();
    const lang = (searchParams.get('lang') || 'vi') as 'vi' | 'en';

    if (!query) {
      return NextResponse.json({ success: true, data: [] });
    }

    // 1. Search in Master Vietnamese Database first
    const matchedVn = vietnameseRecipes.filter(r => {
      const titleVi = r.title.vi.toLowerCase();
      const titleEn = r.title.en.toLowerCase();
      const catVi = r.category.vi.toLowerCase();
      const catEn = r.category.en.toLowerCase();
      const tags = [...r.dietaryTags.vi, ...r.dietaryTags.en].map(t => t.toLowerCase());

      return (
        titleVi.includes(query) ||
        titleEn.includes(query) ||
        catVi.includes(query) ||
        catEn.includes(query) ||
        tags.some(t => t.includes(query))
      );
    }).map(r => ({
      id: r.id,
      title: r.title[lang] || r.title.vi,
      image: r.image,
      category: r.category[lang] || r.category.vi,
      tags: r.dietaryTags[lang] || r.dietaryTags.vi,
      time: r.time,
      rating: 4.9,
      calories: r.calories,
      region: r.region,
      diningType: r.diningType,
      verified: true,
      nutritionSource: r.nutritionSource[lang] || r.nutritionSource.vi,
      recipeSource: r.recipeSource[lang] || r.recipeSource.vi
    }));

    // 2. Also search TheMealDB for global recipes
    let globalResults: any[] = [];
    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${encodeURIComponent(query)}`);
      const data = await response.json();

      if (data.meals && data.meals.length > 0) {
        let translate = null;
        if (lang === 'vi') {
          try {
            translate = require('translate-google');
          } catch (e) {}
        }

        globalResults = await Promise.all(data.meals.slice(0, 8).map(async (meal: any) => {
          let translatedTitle = meal.strMeal;
          if (translate) {
            try {
              translatedTitle = await translate(meal.strMeal, { to: 'vi' });
            } catch (e) {}
          }

          return {
            id: meal.idMeal,
            title: translatedTitle,
            image: meal.strMealThumb,
            category: meal.strCategory,
            tags: meal.strTags ? meal.strTags.split(',').slice(0, 2) : [meal.strCategory],
            time: `${Math.floor(Math.random() * 30) + 15} min`,
            rating: (Math.random() * (5.0 - 4.2) + 4.2).toFixed(1),
            verified: false
          };
        }));
      }
    } catch (e) {
      console.log('Global search fallback error:', e);
    }

    // Combine results: Vietnamese curated dishes first, followed by global dishes
    const combined = [...matchedVn, ...globalResults];

    return NextResponse.json({ success: true, data: combined });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
