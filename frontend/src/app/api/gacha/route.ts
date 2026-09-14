import { NextResponse, NextRequest } from 'next/server';
import { vietnameseRecipes } from '@/data/vietnameseRecipes';

export async function GET(request: NextRequest) {
  try {
    const lang = (request.nextUrl.searchParams.get('lang') || 'vi') as 'vi' | 'en';

    // Randomly pick a dish from the curated Master Vietnamese Database
    const randomIndex = Math.floor(Math.random() * vietnameseRecipes.length);
    const selected = vietnameseRecipes[randomIndex];

    const formattedRecipe = {
      id: selected.id,
      title: selected.title[lang] || selected.title.vi,
      image: selected.image,
      category: selected.category[lang] || selected.category.vi,
      tags: selected.dietaryTags[lang] || selected.dietaryTags.vi,
      time: selected.time,
      rating: 4.9,
      calories: selected.calories,
      servingSize: selected.servingSize[lang] || selected.servingSize.vi,
      nutritionSource: selected.nutritionSource[lang] || selected.nutritionSource.vi,
      verified: true
    };

    return NextResponse.json({ success: true, data: formattedRecipe });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}