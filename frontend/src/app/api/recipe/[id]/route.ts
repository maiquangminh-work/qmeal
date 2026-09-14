import { NextResponse, NextRequest } from 'next/server';
import { vietnameseRecipes } from '@/data/vietnameseRecipes';

export async function GET(request: NextRequest, context: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await context.params;
    const lang = (request.nextUrl.searchParams.get('lang') || 'vi') as 'vi' | 'en';

    // Map legacy / mock IDs to master recipes
    const legacyMap: Record<string, string> = {
      '1': 'vn-pho-bo',
      '53238': 'vn-pho-bo',
      '2': 'vn-bun-cha',
      '52828': 'vn-bun-cha',
      '3': 'vn-banh-mi',
      '53249': 'vn-banh-mi',
      '4': 'vn-goi-cuon',
      '53227': 'vn-goi-cuon',
    };

    const targetId = legacyMap[id] || id;

    // 1. Check Master Vietnamese Database First (Authoritative Data from NIN)
    const masterRecipe = vietnameseRecipes.find(r => r.id === targetId);
    if (masterRecipe) {
      const formattedRecipe = {
        id: masterRecipe.id,
        title: masterRecipe.title[lang] || masterRecipe.title.vi,
        image: masterRecipe.image,
        category: masterRecipe.category[lang] || masterRecipe.category.vi,
        area: 'Vietnam',
        tags: masterRecipe.dietaryTags[lang] || masterRecipe.dietaryTags.vi,
        youtube: null,
        ingredients: masterRecipe.ingredients.map(ing => ({
          name: ing.name[lang] || ing.name.vi,
          measure: ing.amount
        })),
        instructions: masterRecipe.instructions[lang] || masterRecipe.instructions.vi,
        time: masterRecipe.time,
        rating: 4.9,
        calories: masterRecipe.calories,
        protein: masterRecipe.protein,
        fat: masterRecipe.fat,
        carbs: masterRecipe.carbs,
        servingSize: masterRecipe.servingSize[lang] || masterRecipe.servingSize.vi,
        nutritionSource: masterRecipe.nutritionSource[lang] || masterRecipe.nutritionSource.vi,
        recipeSource: masterRecipe.recipeSource[lang] || masterRecipe.recipeSource.vi,
        servings: masterRecipe.servings || 4,
        region: masterRecipe.region,
        diningType: masterRecipe.diningType,
        verified: true
      };

      return NextResponse.json({ success: true, data: formattedRecipe });
    }

    // 2. Fallback to TheMealDB (for international recipes)
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
    const data = await response.json();

    if (!data.meals || data.meals.length === 0) {
      return NextResponse.json({ success: false, error: 'Không tìm thấy món ăn' }, { status: 404 });
    }

    const meal = data.meals[0];

    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
      if (meal[`strIngredient${i}`] && meal[`strIngredient${i}`].trim() !== '') {
        ingredients.push({
          name: meal[`strIngredient${i}`].trim(),
          measure: meal[`strMeasure${i}`] ? meal[`strMeasure${i}`].trim() : ''
        });
      }
    }

    const instructions = meal.strInstructions
      .split('\n')
      .map((s: string) => s.trim())
      .filter((step: string) => step.length > 5 && !/^step\s*\d+$/i.test(step));

    let translatedInstructions = instructions;
    let translatedIngredients = ingredients;
    let translatedTitle = meal.strMeal;

    if (lang === 'vi') {
      try {
        const translate = require('translate-google');
        translatedTitle = await translate(meal.strMeal, { to: 'vi' });
        if (instructions.length > 0) {
          translatedInstructions = await translate(instructions, { to: 'vi' });
        }
        if (ingredients.length > 0) {
          const ingredientNames = ingredients.map(i => i.name);
          const translatedNames = await translate(ingredientNames, { to: 'vi' });
          translatedIngredients = ingredients.map((ing, i) => ({
            name: translatedNames[i] || ing.name,
            measure: ing.measure
          }));
        }
      } catch (err) {
        console.log('Translation failed, fallback to English', err);
      }
    }

    const formattedRecipe = {
      id: meal.idMeal,
      title: translatedTitle,
      image: meal.strMealThumb,
      category: meal.strCategory,
      area: meal.strArea,
      tags: meal.strTags ? meal.strTags.split(',') : [meal.strCategory],
      youtube: meal.strYoutube,
      ingredients: translatedIngredients,
      instructions: translatedInstructions,
      time: '45 min', 
      rating: 4.8,
      calories: 520,
      protein: 22,
      fat: 16,
      carbs: 55,
      servingSize: lang === 'vi' ? '1 phần ăn tiêu chuẩn' : '1 standard serving',
      nutritionSource: 'TheMealDB Global Reference API',
      recipeSource: meal.strSource || 'TheMealDB International Database',
      verified: false
    };

    return NextResponse.json({ success: true, data: formattedRecipe });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
