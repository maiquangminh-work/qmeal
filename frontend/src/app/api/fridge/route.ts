import { NextResponse, NextRequest } from 'next/server';
import { vietnameseRecipes } from '@/data/vietnameseRecipes';
import { MASTER_INGREDIENTS, matchRecipeIngredient, removeVietnameseDiacritics } from '@/data/masterIngredients';

const BASIC_STAPLES_VI = [
  'nước mắm', 'muối', 'đường', 'tiêu', 'hạt nêm', 'bột ngọt', 'dầu ăn', 'tỏi', 'hành khô', 'hành tím'
];

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const ingredientsStr = searchParams.get('i');
    const lang = (searchParams.get('lang') || 'vi') as 'vi' | 'en';
    const includeStaples = searchParams.get('staples') !== 'false'; // Default to true
    
    if (!ingredientsStr || ingredientsStr.trim() === '') {
      return NextResponse.json({ success: true, data: [] });
    }

    const rawUserIngredients = ingredientsStr
      .split(',')
      .map(s => s.trim())
      .filter(s => s.length > 0);

    // If staples included, add them to user's virtual pantry
    const effectiveUserIngredients = [...rawUserIngredients];
    if (includeStaples) {
      for (const staple of BASIC_STAPLES_VI) {
        if (!effectiveUserIngredients.some(ui => removeVietnameseDiacritics(ui) === removeVietnameseDiacritics(staple))) {
          effectiveUserIngredients.push(staple);
        }
      }
    }

    // 1. Match against Curated Vietnamese Master Database (123 recipes)
    const vnMatches: any[] = [];

    for (const recipe of vietnameseRecipes) {
      const matchedIngredients: { name: string; amount: string }[] = [];
      const missingIngredients: { name: string; amount: string }[] = [];

      for (const ing of recipe.ingredients) {
        const ingNameVi = ing.name.vi;
        const ingNameEn = ing.name.en;

        const isMatched = effectiveUserIngredients.some(userIng => {
          return matchRecipeIngredient(ingNameVi, userIng) || matchRecipeIngredient(ingNameEn, userIng);
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
          missingCount: missingIngredients.length,
          totalIngredients: total,
          matchPercentage: percentage,
          isComplete: missingIngredients.length === 0,
          isVietnamese: true,
          verified: true
        });
      }
    }

    // Sort: 0 missing first, then highest percentage, then highest count
    vnMatches.sort((a, b) => {
      if (a.missingCount !== b.missingCount) {
        return a.missingCount - b.missingCount;
      }
      if (b.matchPercentage !== a.matchPercentage) {
        return b.matchPercentage - a.matchPercentage;
      }
      return b.matchCount - a.matchCount;
    });

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