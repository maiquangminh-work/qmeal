export interface MasterRecipe {
  id: string;
  title: {
    vi: string;
    en: string;
  };
  image: string;
  category: {
    vi: string;
    en: string;
  };
  mealType: ('breakfast' | 'lunch' | 'dinner' | 'snack')[];
  region: 'north' | 'central' | 'south' | 'national';
  diningType: ('home_cook' | 'eat_out')[];
  dietaryTags: {
    vi: string[];
    en: string[];
  };
  time: string;
  servings: number;
  calories: number; // kcal
  protein: number;  // g
  fat: number;      // g
  carbs: number;    // g
  servingSize: {
    vi: string;
    en: string;
  };
  nutritionSource: {
    vi: string;
    en: string;
  };
  recipeSource: {
    vi: string;
    en: string;
  };
  ingredients: {
    name: {
      vi: string;
      en: string;
    };
    amount: string;
  }[];
  instructions: {
    vi: string[];
    en: string[];
  };
}

export const vietnameseRecipes: MasterRecipe[] = [
  {
    "id": "vn-pho-bo",
    "title": {
      "vi": "Phở Bò Tái Chín Hà Nội",
      "en": "Traditional Hanoi Beef Pho"
    },
    "image": "https://images.unsplash.com/photo-1548946526-f69e2424cf45?auto=format&fit=crop&w=800&q=80",
    "category": {
      "vi": "Món Nước",
      "en": "Noodle Soup"
    },
    "mealType": [
      "breakfast",
      "lunch",
      "dinner"
    ],
    "dietaryTags": {
      "vi": [
        "Truyền thống",
        "Giàu đạm",
        "Bữa sáng"
      ],
      "en": [
        "Traditional",
        "High Protein",
        "Breakfast"
      ]
    },
    "time": "1h 30m",
    "servings": 4,
    "calories": 450,
    "protein": 24,
    "fat": 12,
    "carbs": 62,
    "servingSize": {
      "vi": "1 tô tiêu chuẩn (~650g)",
      "en": "1 standard bowl (~650g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia (NIN) - Bảng Thành Phần Thực Phẩm Việt Nam",
      "en": "National Institute of Nutrition (NIN Vietnam) - Food Composition Table"
    },
    "recipeSource": {
      "vi": "Ẩm thực Thăng Long - Cẩm nang Ẩm thực Truyền thống",
      "en": "Traditional Hanoi Culinary Heritage"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Bánh phở tươi",
          "en": "Fresh flat rice noodles"
        },
        "amount": "500g"
      },
      {
        "name": {
          "vi": "Thịt thăn bò tươi (thái lát mỏng)",
          "en": "Fresh beef sirloin (thinly sliced)"
        },
        "amount": "300g"
      },
      {
        "name": {
          "vi": "Xương ống bò (ninh nước dùng)",
          "en": "Beef marrow bones (for broth)"
        },
        "amount": "1kg"
      },
      {
        "name": {
          "vi": "Hành tây",
          "en": "Yellow onion"
        },
        "amount": "2 củ"
      },
      {
        "name": {
          "vi": "Gừng nướng",
          "en": "Charred fresh ginger"
        },
        "amount": "1 củ"
      },
      {
        "name": {
          "vi": "Gói gia vị thảo mộc (Hoa hồi, quế, thảo quả, hạt mùi)",
          "en": "Spice sachet (Star anise, cinnamon stick, black cardamom, coriander seeds)"
        },
        "amount": "1 gói"
      },
      {
        "name": {
          "vi": "Nước mắm truyền thống",
          "en": "Pure fish sauce"
        },
        "amount": "3 thìa canh"
      },
      {
        "name": {
          "vi": "Hành lá, rau mùi, chanh ớt ăn kèm",
          "en": "Scallions, cilantro, lime & chili"
        },
        "amount": "100g"
      }
    ],
    "instructions": {
      "vi": [
        "Rửa sạch xương bò với nước muối loãng, luộc sơ 5 phút rồi rửa lại để nước dùng trong và không hôi.",
        "Nướng thơm gừng và hành tây trên lửa, cạo sạch vỏ cháy rồi đập dập.",
        "Rang thơm các loại thảo quả, hoa hồi, thanh quế và hạt mùi cho vào túi lọc gia vị.",
        "Cho xương, gừng, hành nướng và túi gia vị vào nồi 3 lít nước, hầm nhỏ lửa trong 1.5 - 2 tiếng. Vớt bọt thường xuyên.",
        "Nêm nếm nước dùng với nước mắm ngon, muối tinh và một chút đường phèn cho thanh ngọt.",
        "Trần bánh phở qua nước sôi xếp vào tô, xếp thịt bò thái mỏng lên trên, rắc hành lá thái nhỏ rồi chan nước dùng sôi sùng sục vào."
      ],
      "en": [
        "Rinse beef bones in salted water, parboil for 5 minutes, then wash clean to keep the broth crystal clear.",
        "Char whole onions and unpeeled ginger over open flame until fragrant, scrape charred skins and lightly crush.",
        "Lightly toast star anise, cinnamon, black cardamom, and coriander seeds in a dry pan, then place into a spice sachet.",
        "Simmer bones, charred aromatics, and spice bag in 3 liters of water over low heat for 1.5 - 2 hours. Skim off foam frequently.",
        "Season broth with premium fish sauce, sea salt, and rock sugar for natural balanced sweetness.",
        "Blanch rice noodles in hot water, place into bowls, top with thinly sliced fresh beef and scallions, then ladle boiling aromatic broth over."
      ]
    },
    "region": "north",
    "diningType": [
      "eat_out"
    ]
  },
  {
    "id": "vn-bun-bo-hue",
    "title": {
      "vi": "Bún Bò Huế Đậm Vị Cố Đô",
      "en": "Hue Style Spicy Beef Noodle Soup"
    },
    "image": "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?auto=format&fit=crop&w=800&q=80",
    "category": {
      "vi": "Món Nước",
      "en": "Noodle Soup"
    },
    "mealType": [
      "breakfast",
      "lunch"
    ],
    "dietaryTags": {
      "vi": [
        "Cay nồng",
        "Hương sả mắm ruốc",
        "Giàu đạm"
      ],
      "en": [
        "Spicy",
        "Lemongrass Aroma",
        "High Protein"
      ]
    },
    "time": "1h 45m",
    "servings": 4,
    "calories": 580,
    "protein": 28,
    "fat": 18,
    "carbs": 64,
    "servingSize": {
      "vi": "1 tô đầy đặn (~650g)",
      "en": "1 full bowl (~650g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia (NIN) - Bảng Thành Phần Thực Phẩm Việt Nam",
      "en": "National Institute of Nutrition (NIN Vietnam) - Food Composition Table"
    },
    "recipeSource": {
      "vi": "Ẩm thực Cố Đô Huế - Nghệ thuật Nấu ăn Dân gian",
      "en": "Traditional Hue Imperial Cuisine Archives"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Bún sợi to Huế",
          "en": "Thick round rice noodles"
        },
        "amount": "500g"
      },
      {
        "name": {
          "vi": "Bắp bò hoa",
          "en": "Beef shank"
        },
        "amount": "400g"
      },
      {
        "name": {
          "vi": "Giò heo (móng giò chặt khúc)",
          "en": "Pork hock (cut into chunks)"
        },
        "amount": "400g"
      },
      {
        "name": {
          "vi": "Mắm ruốc Huế nguyên chất",
          "en": "Authentic Hue fermented shrimp paste"
        },
        "amount": "2 thìa canh"
      },
      {
        "name": {
          "vi": "Sả cây đập dập",
          "en": "Fresh lemongrass stalks (bruised)"
        },
        "amount": "6 cây"
      },
      {
        "name": {
          "vi": "Hạt điều màu (tạo màu dầu điều)",
          "en": "Annatto seeds (for red color)"
        },
        "amount": "2 thìa canh"
      },
      {
        "name": {
          "vi": "Chả cua hoặc chả lụa",
          "en": "Crab meatballs or pork ham"
        },
        "amount": "150g"
      },
      {
        "name": {
          "vi": "Rau muống chẻ, hoa chuối, giá đỗ",
          "en": "Shredded morning glory, banana flower, bean sprouts"
        },
        "amount": "200g"
      }
    ],
    "instructions": {
      "vi": [
        "Chần bắp bò và giò heo qua nước sôi gừng để làm sạch hoàn toàn.",
        "Hòa mắm ruốc Huế với nửa bát nước lạnh, khuấy đều để lắng rồi chỉ lấy phần nước trong bên trên.",
        "Đun sôi 3 lít nước, cho sả đập dập, nước mắm ruốc lắng trong và bắp bò, giò heo vào hầm nhỏ lửa.",
        "Thắng hạt điều màu với dầu ăn để lấy dầu màu điều đỏ óng, cho tỏi băm và ớt bột vào phi thơm rồi đổ vào nồi nước dùng.",
        "Khi bắp bò chín mềm vừa tới, vớt ra ngâm nước lạnh cho giòn rồi thái lát mỏng.",
        "Trần bún xếp vào tô, thêm bắp bò, giò heo, chả cua, chan nước dùng thơm lừng hương sả ruốc cay nồng."
      ],
      "en": [
        "Parboil beef shank and pork hock with ginger slices to clean thoroughly.",
        "Dilute Hue shrimp paste in cold water, let solids settle to the bottom, and carefully reserve the clear top liquid.",
        "Bring 3L of water to a boil, add bruised lemongrass, reserved shrimp paste broth, beef shank, and pork hock to simmer.",
        "Heat annatto seeds in oil to extract vibrant red color, sauté minced garlic and chili flakes, then pour into the simmering pot.",
        "Once beef shank is tender, remove and plunge into cold water to firm up before slicing thin.",
        "Assemble thick noodles in bowls with beef shank, pork hock, crab balls, and ladle the fiery, fragrant lemongrass broth over."
      ]
    },
    "region": "central",
    "diningType": [
      "eat_out"
    ]
  },
  {
    "id": "vn-com-tam",
    "title": {
      "vi": "Cơm Tấm Sườn Bì Chả Sài Gòn",
      "en": "Saigon Broken Rice with Grilled Pork Chop"
    },
    "image": "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=80",
    "category": {
      "vi": "Cơm Gia Đình",
      "en": "Rice Dishes"
    },
    "mealType": [
      "lunch",
      "dinner"
    ],
    "dietaryTags": {
      "vi": [
        "Đặc sản Sài Gòn",
        "Giàu năng lượng",
        "Đồ nướng"
      ],
      "en": [
        "Saigon Specialty",
        "High Energy",
        "Grilled"
      ]
    },
    "time": "50 min",
    "servings": 4,
    "calories": 720,
    "protein": 34,
    "fat": 26,
    "carbs": 86,
    "servingSize": {
      "vi": "1 đĩa đầy đủ (~450g)",
      "en": "1 full platter (~450g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia (NIN) - Bảng Thành Phần Thực Phẩm Việt Nam",
      "en": "National Institute of Nutrition (NIN Vietnam) - Food Composition Table"
    },
    "recipeSource": {
      "vi": "Văn hóa Ẩm thực Nam Bộ - Món Ăn Đường Phố Sài Gòn",
      "en": "Southern Vietnamese Culinary Heritage"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Gạo tấm thơm",
          "en": "Fragrant broken rice"
        },
        "amount": "350g"
      },
      {
        "name": {
          "vi": "Sườn cốt lết heo tươi",
          "en": "Pork chops with bone"
        },
        "amount": "4 miếng (500g)"
      },
      {
        "name": {
          "vi": "Thịt nạc vai băm & trứng vịt (làm chả trứng)",
          "en": "Minced pork & duck eggs (for steamed egg meatloaf)"
        },
        "amount": "200g"
      },
      {
        "name": {
          "vi": "Bì heo luộc thái sợi & thính gạo",
          "en": "Shredded pork skin & roasted rice powder"
        },
        "amount": "100g"
      },
      {
        "name": {
          "vi": "Sả, tỏi, hành tím băm, mật ong, nước tương",
          "en": "Lemongrass, garlic, shallots, honey, soy sauce"
        },
        "amount": "Gia vị ướp"
      },
      {
        "name": {
          "vi": "Mỡ hành lá phi thơm",
          "en": "Scallion oil"
        },
        "amount": "4 thìa"
      },
      {
        "name": {
          "vi": "Nước mắm chua ngọt, dưa leo, cà chua, đồ chua",
          "en": "Sweet-sour fish sauce dipping, pickled daikon & carrots"
        },
        "amount": "Ăn kèm"
      }
    ],
    "instructions": {
      "vi": [
        "Dùng búa dần thịt đập nhẹ hai mặt miếng sườn để sườn mềm và ngấm gia vị.",
        "Ướp sườn với sả băm, tỏi, hành tím, mật ong, nước tương, dầu hào và chút tiêu trong ít nhất 1 tiếng (ngon nhất qua đêm).",
        "Nấu chín gạo tấm với lượng nước vừa phải để hạt cơm tơi xốp.",
        "Trộn thịt băm, mộc nhĩ, miến, trứng vịt, hấp chín trong 25 phút rồi quét lòng đỏ trứng lên bề mặt hấp thêm 5 phút làm chả trứng.",
        "Nướng sườn trên than hoa đến khi vàng thơm cánh gián và xém cạnh.",
        "Bới cơm tấm ra đĩa, đặt miếng sườn nướng, miếng chả trứng, ít bì heo, rưới mỡ hành bóng bẩy và thưởng thức cùng nước mắm chua ngọt."
      ],
      "en": [
        "Tenderize pork chops gently with a meat mallet so marinade penetrates deeply.",
        "Marinate pork chops with minced lemongrass, garlic, shallots, honey, soy sauce, oyster sauce, and pepper for at least 1 hour.",
        "Steam broken rice with careful water ratio until grains are fluffy and separate.",
        "Combine minced pork, wood-ear mushrooms, glass noodles, and eggs; steam for 25 mins, then glaze with egg yolk for steamed egg meatloaf.",
        "Grill pork chops over hot coals until caramelized, golden-brown, and slightly charred at edges.",
        "Plate broken rice, place savory pork chop, egg meatloaf slice, shredded pork skin, drizzle scallion oil, and serve with sweet-sour fish sauce."
      ]
    },
    "region": "south",
    "diningType": [
      "eat_out"
    ]
  },
  {
    "id": "vn-bun-cha",
    "title": {
      "vi": "Bún Chả Nướng Than Hoa Hà Nội",
      "en": "Hanoi Charcoal Grilled Pork Patties with Rice Noodles"
    },
    "image": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
    "category": {
      "vi": "Đồ Nướng",
      "en": "Grilled Dishes"
    },
    "mealType": [
      "lunch",
      "dinner"
    ],
    "dietaryTags": {
      "vi": [
        "Đặc sản Thủ đô",
        "Nướng than hoa",
        "Mát lành"
      ],
      "en": [
        "Hanoi Specialty",
        "Charcoal Grilled",
        "Fresh Herbs"
      ]
    },
    "time": "45 min",
    "servings": 4,
    "calories": 560,
    "protein": 27,
    "fat": 22,
    "carbs": 65,
    "servingSize": {
      "vi": "1 suất đầy đủ (~400g)",
      "en": "1 full serving (~400g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia (NIN) - Bảng Thành Phần Thực Phẩm Việt Nam",
      "en": "National Institute of Nutrition (NIN Vietnam) - Food Composition Table"
    },
    "recipeSource": {
      "vi": "Di sản Ẩm thực Hà Nội - Tinh hoa Bún Chả Phố Cổ",
      "en": "Hanoi Culinary Heritage Archive"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Bún sợi nhỏ trắng",
          "en": "Thin vermicelli rice noodles"
        },
        "amount": "500g"
      },
      {
        "name": {
          "vi": "Thịt ba chỉ heo thái mỏng (chả miếng)",
          "en": "Pork belly thinly sliced (pork pieces)"
        },
        "amount": "300g"
      },
      {
        "name": {
          "vi": "Thịt nạc vai băm nhuyễn (chả viên)",
          "en": "Minced pork shoulder (pork patties)"
        },
        "amount": "300g"
      },
      {
        "name": {
          "vi": "Hành tím, tỏi băm, nước hàng thắng đường",
          "en": "Minced shallots, garlic, caramelized sugar syrup"
        },
        "amount": "Gia vị ướp"
      },
      {
        "name": {
          "vi": "Đu đủ xanh, cà rốt tỉa hoa làm dưa góp",
          "en": "Green papaya, carrot flowers for pickles"
        },
        "amount": "1 bát nhỏ"
      },
      {
        "name": {
          "vi": "Nước mắm pha ấm chua ngọt thanh vị giấm bỗng",
          "en": "Warm sweet-sour fish sauce broth"
        },
        "amount": "500ml"
      },
      {
        "name": {
          "vi": "Rau sống (xà lách, tía tô, kinh giới, húng láng)",
          "en": "Fresh herb platter (lettuce, perilla, Vietnamese balm, mint)"
        },
        "amount": "200g"
      }
    ],
    "instructions": {
      "vi": [
        "Ướp chả miếng và chả viên riêng với hành tỏi băm, nước mắm, đường, dầu hào và nước hàng tạo màu cánh gián trong 30 phút.",
        "Viên thịt băm thành từng viên dẹt tròn vừa ăn.",
        "Kẹp chả miếng và chả viên vào vỉ sắt, nướng trên than hoa đỏ rực đến khi xém cạnh, mỡ chảy xèo xèo và dậy mùi thơm nức.",
        "Pha nước mắm chấm ấm theo tỉ lệ vàng: 1 nước mắm - 1 giấm thanh - 1 đường - 5 nước ấm, cho tỏi ớt băm và dưa góp đu đủ giòn sần sật vào.",
        "Thả chả nướng nóng hổi ngập vào bát nước chấm ấm, ăn kèm đĩa bún tươi và rau thơm tươi non."
      ],
      "en": [
        "Marinate sliced pork belly and minced pork patties with shallots, garlic, fish sauce, oyster sauce, and caramel syrup for 30 mins.",
        "Shape seasoned minced pork into small rounded flat patties.",
        "Clamp meat onto grilling racks, grill over glowing charcoal until beautifully caramelized and sizzling.",
        "Whisk warm dipping sauce: 1 fish sauce : 1 mild vinegar : 1 sugar : 5 warm water; add minced garlic, chili, and crunchy green papaya pickles.",
        "Drop sizzling hot grilled pork into the warm dipping sauce bowl, served alongside fresh vermicelli and garden herbs."
      ]
    },
    "region": "north",
    "diningType": [
      "eat_out"
    ]
  },
  {
    "id": "vn-banh-mi",
    "title": {
      "vi": "Bánh Mì Thịt Nguội Pâté Giòn Rụm",
      "en": "Vietnamese Crispy Baguette with Pâté & Ham"
    },
    "image": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80",
    "category": {
      "vi": "Ăn Nhanh",
      "en": "Street Food"
    },
    "mealType": [
      "breakfast",
      "lunch",
      "snack"
    ],
    "dietaryTags": {
      "vi": [
        "Tiện lợi",
        "Giòn rụm",
        "Đặc sản quốc tế"
      ],
      "en": [
        "Convenient",
        "Crispy",
        "World Renowned"
      ]
    },
    "time": "15 min",
    "servings": 2,
    "calories": 420,
    "protein": 16,
    "fat": 14,
    "carbs": 48,
    "servingSize": {
      "vi": "1 ổ tiêu chuẩn (~150g)",
      "en": "1 standard baguette (~150g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia (NIN) - Bảng Thành Phần Thực Phẩm Việt Nam",
      "en": "National Institute of Nutrition (NIN Vietnam) - Food Composition Table"
    },
    "recipeSource": {
      "vi": "Bánh Mì Sài Gòn - Di sản Văn hóa Ẩm thực Đường phố",
      "en": "Saigon Street Food Culture"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Bánh mì vỏ giòn ruột xốp",
          "en": "Crispy Vietnamese baguettes"
        },
        "amount": "2 ổ"
      },
      {
        "name": {
          "vi": "Pâté gan heo béo ngậy",
          "en": "Creamy pork liver pâté"
        },
        "amount": "60g"
      },
      {
        "name": {
          "vi": "Bơ trứng gà nhà làm",
          "en": "Homemade mayonnaise / egg butter"
        },
        "amount": "30g"
      },
      {
        "name": {
          "vi": "Chả lụa & thịt nguội / xá xíu thái lát",
          "en": "Vietnamese ham & sliced char siu pork"
        },
        "amount": "120g"
      },
      {
        "name": {
          "vi": "Đồ chua củ cải & cà rốt giòn ngọt",
          "en": "Pickled daikon & carrots"
        },
        "amount": "50g"
      },
      {
        "name": {
          "vi": "Dưa leo thái lát mỏng, ngò rí, ớt tươi",
          "en": "Cucumber spears, fresh cilantro, sliced fresh chilies"
        },
        "amount": "Vừa đủ"
      },
      {
        "name": {
          "vi": "Nước sốt tương hoặc nước tương ớt cay",
          "en": "Savory bread sauce or soy sauce"
        },
        "amount": "2 thìa"
      }
    ],
    "instructions": {
      "vi": [
        "Làm nóng bánh mì trong lò nướng hoặc nồi chiên không dầu ở 180°C trong 2 phút để vỏ ngoài giòn tan.",
        "Dùng dao rạch một đường dọc theo thân bánh mì.",
        "Quét một lớp bơ trứng gà béo ngậy và một lớp pâté gan đậm đà đều khắp lòng bánh.",
        "Xếp lần lượt các lát chả lụa, thịt xá xíu, dưa leo tươi mát và đồ chua giòn rụm vào giữa.",
        "Rắc ngò rí, vài lát ớt đỏ cay nhẹ và rưới một thìa sốt thịt đậm đà lên trên, kẹp lại và thưởng thức khi còn giòn rụm."
      ],
      "en": [
        "Toast baguettes at 180°C for 2 minutes to achieve an ultra-crispy crust with soft, airy crumb.",
        "Slice baguette lengthwise along one side.",
        "Spread creamy egg butter and rich liver pâté generously along the interior.",
        "Layer in Vietnamese ham, savory roast pork slices, refreshing cucumber spears, and tangy pickled vegetables.",
        "Top with fresh cilantro sprigs, chili slices, and a dash of savory seasoning sauce before serving hot and crispy."
      ]
    },
    "region": "south",
    "diningType": [
      "eat_out"
    ]
  },
  {
    "id": "vn-goi-cuon",
    "title": {
      "vi": "Gỏi Cuốn Tôm Thịt Thanh Mát",
      "en": "Fresh Summer Rolls with Shrimp & Pork"
    },
    "image": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
    "category": {
      "vi": "Khai Vị",
      "en": "Appetizers"
    },
    "mealType": [
      "lunch",
      "dinner",
      "snack"
    ],
    "dietaryTags": {
      "vi": [
        "Healthy",
        "Ít béo",
        "Nhiều rau xanh",
        "Thanh lọc"
      ],
      "en": [
        "Healthy",
        "Low Fat",
        "Vegetable Rich",
        "Light"
      ]
    },
    "time": "25 min",
    "servings": 3,
    "calories": 165,
    "protein": 13,
    "fat": 4,
    "carbs": 22,
    "servingSize": {
      "vi": "Suất 3 cuốn kèm tương (~240g)",
      "en": "3 rolls with dipping sauce (~240g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia (NIN) - Bảng Thành Phần Thực Phẩm Việt Nam",
      "en": "National Institute of Nutrition (NIN Vietnam) - Food Composition Table"
    },
    "recipeSource": {
      "vi": "Ẩm thực Miền Tây Nam Bộ - Thanh Tao Mộc Mạc",
      "en": "Mekong Delta Fresh Culinary Traditions"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Bánh tráng dẻo mềm",
          "en": "Vietnamese rice paper wrappers"
        },
        "amount": "9 lá"
      },
      {
        "name": {
          "vi": "Tôm tươi luộc bóc vỏ chẻ đôi",
          "en": "Fresh prawns, boiled & halved"
        },
        "amount": "18 con"
      },
      {
        "name": {
          "vi": "Thịt ba chỉ heo luộc thái mỏng",
          "en": "Pork belly, boiled & thinly sliced"
        },
        "amount": "200g"
      },
      {
        "name": {
          "vi": "Bún tươi sợi nhỏ",
          "en": "Thin vermicelli noodles"
        },
        "amount": "150g"
      },
      {
        "name": {
          "vi": "Rau sống (Xà lách, rau thơm, hẹ lá, giá đỗ)",
          "en": "Fresh herbs (lettuce, mint, chives, bean sprouts)"
        },
        "amount": "150g"
      },
      {
        "name": {
          "vi": "Tương bơ đậu phộng pha sền sệt rắc đậu phộng rang",
          "en": "Hoisin peanut dipping sauce with crushed peanuts"
        },
        "amount": "1 bát nhỏ"
      }
    ],
    "instructions": {
      "vi": [
        "Luộc tôm với chút giấm cho đỏ đẹp, bóc vỏ, bỏ chỉ lưng rồi dùng dao bén chẻ đôi theo chiều dọc.",
        "Luộc thịt ba chỉ với chút hành tím đập dập đến khi chín tới, vớt ra ngâm nước đá cho giòn rồi thái lát mỏng.",
        "Làm ẩm bánh tráng bằng khăn ướt sạch hoặc nhúng nhẹ qua nước ấm cho vừa dẻo mềm.",
        "Xếp rau xà lách, rau thơm, giá đỗ và một lọn bún nhỏ lên 1/3 bánh tráng. Xếp thịt ba chỉ bên cạnh.",
        "Cuộn một vòng chặt tay, đặt các miếng tôm màu đỏ hướng xuống dưới mặt bánh tráng cùng một cọng hẹ thò ra ngoài.",
        "Gấp hai bên mép bánh lại và cuộn tròn thật chặt. Chấm cùng tương đen xào bơ đậu phộng béo bùi rắc ớt."
      ],
      "en": [
        "Boil fresh prawns with a drop of vinegar until vibrant pink; peel, devein, and slice in half lengthwise.",
        "Simmer pork belly with shallots until tender, plunge into ice water, then slice thinly.",
        "Gently dampen a sheet of rice paper until pliable.",
        "Layer lettuce leaves, fresh herbs, bean sprouts, and a small portion of vermicelli along the lower third. Lay pork slices adjacent.",
        "Roll upward firmly once, then place shrimp halves pink-side down with a fresh chive blade protruding.",
        "Fold in both sides and roll tightly until sealed. Serve with warm, savory hoisin-peanut dipping sauce topped with roasted crushed peanuts."
      ]
    },
    "region": "south",
    "diningType": [
      "home_cook",
      "eat_out"
    ]
  },
  {
    "id": "vn-canh-chua-ca",
    "title": {
      "vi": "Canh Chua Cá Lóc Đồng Miền Tây",
      "en": "Mekong Delta Sour Fish Soup with Snakehead Fish"
    },
    "image": "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=800&q=80",
    "category": {
      "vi": "Món Nước",
      "en": "Soup"
    },
    "mealType": [
      "lunch",
      "dinner"
    ],
    "dietaryTags": {
      "vi": [
        "Thanh nhiệt",
        "Ít calo",
        "Giàu Omega-3",
        "Cơm gia đình"
      ],
      "en": [
        "Refreshing",
        "Low Calorie",
        "Omega-3 Rich",
        "Family Meal"
      ]
    },
    "time": "35 min",
    "servings": 4,
    "calories": 160,
    "protein": 19,
    "fat": 5,
    "carbs": 12,
    "servingSize": {
      "vi": "1 bát canh tiêu chuẩn (~350g)",
      "en": "1 standard bowl (~350g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia (NIN) - Bảng Thành Phần Thực Phẩm Việt Nam",
      "en": "National Institute of Nutrition (NIN Vietnam) - Food Composition Table"
    },
    "recipeSource": {
      "vi": "Hương Vị Miền Tây - Cẩm nang Ẩm thực Nam Bộ",
      "en": "Southern Mekong Culinary Encyclopedia"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Cá lóc đồng làm sạch cắt khứa",
          "en": "Fresh snakehead fish steaks"
        },
        "amount": "500g"
      },
      {
        "name": {
          "vi": "Me chín lọc lấy nước cốt chua",
          "en": "Ripe tamarind pulp (for sour broth)"
        },
        "amount": "50g"
      },
      {
        "name": {
          "vi": "Dứa (thơm) gọt vỏ thái lát",
          "en": "Fresh pineapple wedges"
        },
        "amount": "1/4 quả"
      },
      {
        "name": {
          "vi": "Cà chua chín bổ múi cau",
          "en": "Tomatoes cut into wedges"
        },
        "amount": "2 quả"
      },
      {
        "name": {
          "vi": "Đậu bắp, bạc hà (dọc mùng), giá đỗ",
          "en": "Okra, elephant ear stalks, fresh bean sprouts"
        },
        "amount": "250g"
      },
      {
        "name": {
          "vi": "Rau ngò ôm (ngổ), ngò gai (mùi tàu)",
          "en": "Rice paddy herbs & saw-tooth coriander"
        },
        "amount": "1 nắm"
      },
      {
        "name": {
          "vi": "Tỏi phi vàng thơm giòn",
          "en": "Crispy fried golden garlic"
        },
        "amount": "2 thìa"
      }
    ],
    "instructions": {
      "vi": [
        "Ướp cá lóc với 1 thìa nước mắm ngon, tiêu và củ hành băm trong 15 phút.",
        "Đun sôi 1.2 lít nước, lọc nước cốt me chua vào nồi.",
        "Cho khứa cá lóc vào nấu chín sôi khoảng 5-7 phút, vớt bọt liên tục để nước trong, sau đó vớt cá ra đĩa riêng tránh nát.",
        "Cho dứa và cà chua vào nấu sôi để tạo vị chua ngọt thanh mát tự nhiên.",
        "Tiếp tục cho dọc mùng, đậu bắp và giá đỗ vào đun sôi bùng lên trong 1 phút rồi tắt bếp.",
        "Múc canh ra tô, đặt khứa cá lên trên, rắc rau ngò ôm, ngò gai thái nhỏ và rưới tỏi phi vàng thơm lừng."
      ],
      "en": [
        "Marinate fish steaks with 1 tbsp fish sauce, crushed shallots, and cracked black pepper for 15 mins.",
        "Bring 1.2L of water to a boil, dissolve tamarind pulp with hot water, and strain the tangy juice into the pot.",
        "Gently drop fish steaks into the boiling broth; simmer for 5-7 mins while skimming foam, then remove fish onto a plate to keep whole.",
        "Add pineapple wedges and tomato wedges into the broth, simmering to release sweet and sour notes.",
        "Add elephant ear stalks, okra, and bean sprouts; boil rapidly for 1 minute, then turn off heat.",
        "Ladle fragrant soup into bowls, place tender fish on top, garnish with rice paddy herbs, saw-tooth coriander, and crispy golden garlic."
      ]
    },
    "region": "south",
    "diningType": [
      "home_cook",
      "eat_out"
    ]
  },
  {
    "id": "vn-ca-kho-to",
    "title": {
      "vi": "Cá Kho Tộ Đậm Đà Cơm Mẹ Nấu",
      "en": "Caramelized Catfish in Clay Pot"
    },
    "image": "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80",
    "category": {
      "vi": "Cơm Gia Đình",
      "en": "Home Cooking"
    },
    "mealType": [
      "lunch",
      "dinner"
    ],
    "dietaryTags": {
      "vi": [
        "Đậm vị",
        "Mặn ngọt",
        "Tốn cơm",
        "Truyền thống"
      ],
      "en": [
        "Savory & Sweet",
        "Comfort Food",
        "Traditional"
      ]
    },
    "time": "40 min",
    "servings": 4,
    "calories": 260,
    "protein": 28,
    "fat": 11,
    "carbs": 8,
    "servingSize": {
      "vi": "1 phần cá kho tiêu chuẩn (~150g)",
      "en": "1 standard serving (~150g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia (NIN) - Bảng Thành Phần Thực Phẩm Việt Nam",
      "en": "National Institute of Nutrition (NIN Vietnam) - Food Composition Table"
    },
    "recipeSource": {
      "vi": "Cơm Nhà Nam Bộ - Tinh Hoa Ẩm Thực Gia Đình",
      "en": "Vietnamese Family Home Cooking Heritage"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Cá hú / cá bông lau hoặc cá lóc cắt khúc",
          "en": "Fresh catfish or snakehead steaks"
        },
        "amount": "500g"
      },
      {
        "name": {
          "vi": "Thịt ba chỉ heo thái con chì",
          "en": "Pork belly cut into strips"
        },
        "amount": "100g"
      },
      {
        "name": {
          "vi": "Nước màu dừa Bến Tre (hoặc đường thắng)",
          "en": "Coconut caramel syrup"
        },
        "amount": "2 thìa canh"
      },
      {
        "name": {
          "vi": "Nước mắm cá cơm truyền thống hảo hạng",
          "en": "Premium pure anchovy fish sauce"
        },
        "amount": "4 thìa canh"
      },
      {
        "name": {
          "vi": "Hành tím, tỏi, ớt hiểm nguyên trái, tiêu sọ đập dập",
          "en": "Shallots, garlic, bird-eye chilies, crushed black pepper"
        },
        "amount": "Vừa đủ"
      },
      {
        "name": {
          "vi": "Hành lá cắt khúc",
          "en": "Green scallion batons"
        },
        "amount": "3 nhánh"
      }
    ],
    "instructions": {
      "vi": [
        "Rửa cá với nước cốt chanh và muối để khử sạch nhớt và mùi tanh, để ráo nước.",
        "Ướp cá với nước mắm, nước màu dừa, đường, hạt tiêu, hành tỏi băm trong tộ đất ít nhất 20 phút.",
        "Xào sơ thịt ba chỉ cho tứa mỡ béo ngậy dưới đáy tộ đất, sau đó xếp các khứa cá lên trên.",
        "Bắc tộ đất lên bếp đun lửa lớn cho thịt cá săn lại và ngấm màu cánh gián đậm đà.",
        "Thêm nửa chén nước sôi hoặc nước dừa tươi vào, hạ nhỏ lửa liu riu kho trong 25-30 phút đến khi nước kho sánh kẹo lại bao quanh từng khứa cá.",
        "Rắc ớt hiểm, tiêu sọ cay nồng và hành lá lên trên, ăn cùng cơm trắng nóng hổi và dưa leo rau luộc."
      ],
      "en": [
        "Clean fish with lime juice and sea salt to remove all slime and fishiness, then pat dry.",
        "Marinate fish steaks with fish sauce, coconut caramel, sugar, shallots, garlic, and cracked pepper in a clay pot for 20 mins.",
        "Pan-fry pork belly directly in the clay pot until the savory pork fat renders out, then arrange fish steaks on top.",
        "Place clay pot over medium-high heat for 5 minutes until the fish firms up and absorbs the glossy caramel hue.",
        "Pour in half a cup of hot water or fresh coconut water; lower heat to a gentle simmer for 25-30 minutes until sauce reduces to a rich, glossy glaze.",
        "Garnish with bird-eye chilies, generous coarse black pepper, and fresh scallions; best served piping hot with steamed jasmine rice."
      ]
    },
    "region": "south",
    "diningType": [
      "home_cook",
      "eat_out"
    ]
  },
  {
    "id": "vn-banh-xeo",
    "title": {
      "vi": "Bánh Xèo Miền Tây Giòn Tan Vàng Ruộm",
      "en": "Crispy Vietnamese Turmeric Crepe"
    },
    "image": "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=800&q=80",
    "category": {
      "vi": "Ăn Vặt",
      "en": "Crispy Crepes"
    },
    "mealType": [
      "lunch",
      "dinner"
    ],
    "dietaryTags": {
      "vi": [
        "Giòn rụm",
        "Rau rừng",
        "Món cuốn"
      ],
      "en": [
        "Crispy",
        "Fresh Herbs",
        "Wraps"
      ]
    },
    "time": "45 min",
    "servings": 4,
    "calories": 380,
    "protein": 15,
    "fat": 17,
    "carbs": 42,
    "servingSize": {
      "vi": "1 cái cỡ vừa kèm rau (~250g)",
      "en": "1 medium crepe with herbs (~250g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia (NIN) - Bảng Thành Phần Thực Phẩm Việt Nam",
      "en": "National Institute of Nutrition (NIN Vietnam) - Food Composition Table"
    },
    "recipeSource": {
      "vi": "Ẩm thực Nam Bộ - Bánh Xèo Chảo Vàng Giòn",
      "en": "Traditional Southern Vietnamese Crepe Mastery"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Bột gạo pha cốt dừa & bột nghệ vàng",
          "en": "Rice flour with coconut milk & turmeric"
        },
        "amount": "300g"
      },
      {
        "name": {
          "vi": "Tôm đất tươi làm sạch",
          "en": "Small fresh wild river shrimp"
        },
        "amount": "200g"
      },
      {
        "name": {
          "vi": "Thịt ba chỉ heo thái mỏng",
          "en": "Pork belly thinly sliced"
        },
        "amount": "200g"
      },
      {
        "name": {
          "vi": "Giá đỗ tươi giòn",
          "en": "Fresh crunchy bean sprouts"
        },
        "amount": "150g"
      },
      {
        "name": {
          "vi": "Đậu xanh đãi vỏ hấp chín",
          "en": "Steamed yellow mung beans"
        },
        "amount": "50g"
      },
      {
        "name": {
          "vi": "Hành lá thái nhỏ",
          "en": "Scallions finely chopped"
        },
        "amount": "1 nắm"
      },
      {
        "name": {
          "vi": "Rau cải bẹ xanh, xà lách, rau diếp cá, lá cóc non",
          "en": "Mustard greens, lettuce, wild herbs platter"
        },
        "amount": "300g"
      }
    ],
    "instructions": {
      "vi": [
        "Khuấy đều bột gạo, bột nghệ, nước cốt dừa béo ngậy, nước lọc và hành lá thái nhỏ. Để bột nghỉ 30 phút.",
        "Xào sơ thịt ba chỉ và tôm với chút gia vị cho chín tới.",
        "Đun nóng chảo lớn với dầu ăn, tráng một lớp bột mỏng xèo xèo quanh vành chảo.",
        "Rải tôm, thịt, đậu xanh hấp chín và một nắm giá đỗ vào giữa chảo, đậy vung lại 2-3 phút.",
        "Mở vung rưới thêm chút dầu ăn quanh viền chảo, chiên lửa nhỏ đến khi viền bánh giòn tan tách khỏi mặt chảo.",
        "Gập đôi bánh lại tạo hình bán nguyệt vàng ruộm, cuộn cùng rau cải bẹ xanh tươi non và chấm nước mắm tỏi ớt chua ngọt."
      ],
      "en": [
        "Whisk rice flour, turmeric powder, rich coconut milk, water, and scallions into a smooth batter; rest for 30 minutes.",
        "Sauté shrimp and pork belly briefly in a skillet until just cooked through.",
        "Heat a large wok with oil until smoking hot; pour in a ladle of batter, swirling quickly to form an ultra-thin, sizzling golden crepe.",
        "Scatter shrimp, pork, steamed mung beans, and a generous handful of bean sprouts over one half; cover for 2 minutes.",
        "Uncover, drizzle oil around the edges, and crisp over low heat until the rim turns lacy and paper-crisp.",
        "Fold in half into a golden crescent; wrap in fresh mustard greens and herbs, dipping into zesty sweet-sour garlic fish sauce."
      ]
    },
    "region": "south",
    "diningType": [
      "home_cook",
      "eat_out"
    ]
  },
  {
    "id": "vn-thit-kho-tau",
    "title": {
      "vi": "Thịt Kho Tàu Trứng Cút Nước Dừa",
      "en": "Vietnamese Caramelized Pork with Quail Eggs & Coconut Water"
    },
    "image": "https://images.unsplash.com/photo-1606787366850-de6330128bfc?auto=format&fit=crop&w=800&q=80",
    "category": {
      "vi": "Cơm Gia Đình",
      "en": "Home Cooking"
    },
    "mealType": [
      "lunch",
      "dinner"
    ],
    "dietaryTags": {
      "vi": [
        "Món Tết",
        "Đậm đà",
        "Béo ngậy",
        "Tốn cơm"
      ],
      "en": [
        "Lunar New Year",
        "Rich & Savory",
        "Comfort Food"
      ]
    },
    "time": "1h 15m",
    "servings": 4,
    "calories": 540,
    "protein": 28,
    "fat": 34,
    "carbs": 8,
    "servingSize": {
      "vi": "1 phần tiêu chuẩn (~200g)",
      "en": "1 standard serving (~200g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia (NIN) - Bảng Thành Phần Thực Phẩm Việt Nam",
      "en": "National Institute of Nutrition (NIN Vietnam) - Food Composition Table"
    },
    "recipeSource": {
      "vi": "Văn hóa Ẩm thực Nam Bộ - Mâm Cơm Ngày Tết Cổ Truyền",
      "en": "Southern Vietnamese Lunar New Year Traditions"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Thịt ba chỉ heo hoặc nạc dăm cắt miếng vuông lớn",
          "en": "Pork belly cut into large cubes"
        },
        "amount": "600g"
      },
      {
        "name": {
          "vi": "Trứng cút hoặc trứng vịt luộc bóc vỏ",
          "en": "Hard-boiled quail eggs or duck eggs"
        },
        "amount": "12 quả"
      },
      {
        "name": {
          "vi": "Nước dừa tươi xiêm ngọt thanh",
          "en": "Fresh young coconut water"
        },
        "amount": "500ml"
      },
      {
        "name": {
          "vi": "Nước mắm cá cơm truyền thống hảo hạng",
          "en": "Pure anchovy fish sauce"
        },
        "amount": "4 thìa canh"
      },
      {
        "name": {
          "vi": "Nước hàng (nước màu dừa Bến Tre)",
          "en": "Coconut caramel syrup"
        },
        "amount": "2 thìa canh"
      },
      {
        "name": {
          "vi": "Hành tím, tỏi đập dập, ớt sừng nguyên trái",
          "en": "Shallots, smashed garlic cloves, whole red chilies"
        },
        "amount": "Vừa đủ"
      }
    ],
    "instructions": {
      "vi": [
        "Trần thịt ba chỉ qua nước sôi có gừng đập dập trong 2 phút để làm sạch và khử mùi hôi, sau đó cắt miếng vuông cạnh 3-4cm.",
        "Ướp thịt với nước mắm ngon, hành tím băm, tỏi băm, đường và hạt tiêu trong ít nhất 30 phút cho ngấm sâu.",
        "Cho thịt vào nồi xào săn các mặt để mỡ trong lại và thịt ngấm màu caramen cánh gián óng ả.",
        "Đổ ngập nước dừa tươi vào nồi thịt, đun lửa lớn đến khi sôi bùng rồi hạ lửa nhỏ liu riu, hớt sạch bọt.",
        "Cho trứng đã bóc vỏ vào nồi, đun mở hé vung trong 45-60 phút cho thịt mềm rục, mỡ trong veo và nước kho sánh lại.",
        "Múc thịt và trứng ra đĩa sâu lòng, rưới nước sốt óng ánh và ăn kèm cơm trắng nóng, dưa giá hoặc cải chua muối giòn."
      ],
      "en": [
        "Parboil pork belly in simmering water with smashed ginger for 2 minutes to clean, then cut into 4cm square chunks.",
        "Marinate pork with fish sauce, shallots, garlic, sugar, and cracked pepper for 30 minutes.",
        "Sear pork in a heavy pot until the edges are nicely browned and fat begins to render.",
        "Pour fresh coconut water over the pork, bring to a gentle boil, then lower heat to a simmer and skim foam.",
        "Add boiled peeled eggs into the pot; simmer uncovered for 45-60 minutes until pork is fork-tender and the broth turns golden-brown.",
        "Serve hot with steamed rice and tangy pickled bean sprouts to balance the rich savory sauce."
      ]
    },
    "region": "south",
    "diningType": [
      "home_cook",
      "eat_out"
    ]
  },
  {
    "id": "vn-bun-rieu",
    "title": {
      "vi": "Bún Riêu Cua Đồng Đậm Đà",
      "en": "Traditional Vietnamese Crab Paste Noodle Soup"
    },
    "image": "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=800&q=80",
    "category": {
      "vi": "Món Nước",
      "en": "Noodle Soup"
    },
    "mealType": [
      "breakfast",
      "lunch"
    ],
    "dietaryTags": {
      "vi": [
        "Truyền thống",
        "Thanh mát",
        "Canxi dồi dào",
        "Hương vị đồng quê"
      ],
      "en": [
        "Traditional",
        "Refreshing",
        "Calcium Rich",
        "Country Flavor"
      ]
    },
    "time": "50 min",
    "servings": 4,
    "calories": 420,
    "protein": 22,
    "fat": 14,
    "carbs": 52,
    "servingSize": {
      "vi": "1 tô tiêu chuẩn (~600g)",
      "en": "1 standard bowl (~600g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia (NIN) - Bảng Thành Phần Thực Phẩm Việt Nam",
      "en": "National Institute of Nutrition (NIN Vietnam) - Food Composition Table"
    },
    "recipeSource": {
      "vi": "Ẩm thực Bắc Bộ - Tinh Hoa Món Ăn Dân Gian Đồng Bằng Sông Hồng",
      "en": "Northern Red River Delta Traditional Cuisine"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Bún sợi nhỏ trắng tươi",
          "en": "Fresh thin rice vermicelli"
        },
        "amount": "500g"
      },
      {
        "name": {
          "vi": "Cua đồng giã nhuyễn lọc lấy nước thịt",
          "en": "Fresh field crab paste & broth"
        },
        "amount": "400g"
      },
      {
        "name": {
          "vi": "Đậu phụ rán vàng giòn cắt khối vuông",
          "en": "Crispy fried tofu cubes"
        },
        "amount": "3 bìa"
      },
      {
        "name": {
          "vi": "Cà chua chín bổ múi cau",
          "en": "Fresh tomatoes cut into wedges"
        },
        "amount": "3 quả"
      },
      {
        "name": {
          "vi": "Giấm bỗng nếp lên men tự nhiên",
          "en": "Natural fermented rice vinegar (giấm bỗng)"
        },
        "amount": "3 thìa canh"
      },
      {
        "name": {
          "vi": "Mắm tôm Bắc nguyên chất",
          "en": "Premium Northern shrimp paste"
        },
        "amount": "1 thìa canh"
      },
      {
        "name": {
          "vi": "Huyết heo luộc cắt miếng vuông & chả lụa",
          "en": "Cooked blood jelly & Vietnamese ham"
        },
        "amount": "150g"
      },
      {
        "name": {
          "vi": "Rau sống (rau muống chẻ, hoa chuối, kinh giới, xà lách)",
          "en": "Herb platter (split water spinach, banana blossom, perilla)"
        },
        "amount": "200g"
      }
    ],
    "instructions": {
      "vi": [
        "Hòa thịt cua đồng xay với 1.5 lít nước lạnh cùng chút muối, khuấy đều rồi lọc qua rây sạch 2-3 lần để lấy nước cua ngọt.",
        "Đun nồi nước cua trên lửa vừa, khuấy nhẹ theo chiều kim đồng hồ để thịt cua kết mảng nổi bồng bềnh lên mặt nước, vớt riêu cua ra bát riêng.",
        "Phi thơm hành khô với dầu màu điều, cho cà chua vào xào chín tới rồi đổ vào nồi nước dùng cua.",
        "Nêm giấm bỗng chua thanh, nước mắm, chút đường và mắm tôm tạo vị đậm đà đặc trưng.",
        "Thả đậu phụ rán giòn và huyết heo vào nồi đun sôi lăn tăn giữ nóng.",
        "Trần bún xếp vào tô, múc riêu cua, đậu rán, huyết lên trên rồi chan nước dùng nóng hổi, ăn kèm đĩa rau ghém hoa chuối tươi non."
      ],
      "en": [
        "Mix pulverized field crab with 1.5L cold water and salt, strain through fine mesh to collect sweet crab broth.",
        "Heat crab broth gently over medium flame; as it heats, luscious crab soufflé will float to surface. Gently scoop riêu into a bowl.",
        "Sauté shallots and annatto oil, add tomato wedges and stir until tender, then add into the crab broth.",
        "Season broth with tangy fermented rice wine vinegar, fish sauce, and savory shrimp paste for distinct umami flavor.",
        "Add crispy fried tofu cubes and blood pudding cubes; simmer gently to keep piping hot.",
        "Assemble vermicelli in bowls, top with fluffy crab soufflé, tofu, and ladle simmering tangy broth over, served with crisp herb platter."
      ]
    },
    "region": "north",
    "diningType": [
      "eat_out"
    ]
  },
  {
    "id": "vn-bo-kho",
    "title": {
      "vi": "Bò Kho Tiêu Thảo Mộc Bánh Mì",
      "en": "Vietnamese Lemongrass Beef Stew with Baguette"
    },
    "image": "https://images.unsplash.com/photo-1548946526-f69e2424cf45?auto=format&fit=crop&w=800&q=80",
    "category": {
      "vi": "Món Hầm",
      "en": "Stew"
    },
    "mealType": [
      "breakfast",
      "lunch",
      "dinner"
    ],
    "dietaryTags": {
      "vi": [
        "Giàu đạm",
        "Hương thảo mộc",
        "Ấm nồng",
        "Món bánh mì"
      ],
      "en": [
        "High Protein",
        "Herb Infused",
        "Warming Stew",
        "Baguette Combo"
      ]
    },
    "time": "1h 20m",
    "servings": 4,
    "calories": 480,
    "protein": 34,
    "fat": 18,
    "carbs": 26,
    "servingSize": {
      "vi": "1 tô bò kho kèm bánh mì (~350g)",
      "en": "1 bowl with baguette (~350g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia (NIN) - Bảng Thành Phần Thực Phẩm Việt Nam",
      "en": "National Institute of Nutrition (NIN Vietnam) - Food Composition Table"
    },
    "recipeSource": {
      "vi": "Văn hóa Bếp Nam Bộ - Hương Vị Bò Kho Sài Gòn",
      "en": "Saigon Street Stew Heritage"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Nạm bò hoặc bắp bò tươi gân dẻo",
          "en": "Beef brisket or beef shank with gelatinous tendon"
        },
        "amount": "600g"
      },
      {
        "name": {
          "vi": "Cà rốt gọt vỏ tỉa hoa cắt khúc",
          "en": "Carrots sliced into thick rounds"
        },
        "amount": "2 củ"
      },
      {
        "name": {
          "vi": "Sả cây đập dập cắt khúc",
          "en": "Fresh lemongrass stalks bruised & cut"
        },
        "amount": "5 cây"
      },
      {
        "name": {
          "vi": "Gia vị thảo mộc bò kho (Hoa hồi, quế, đinh hương)",
          "en": "Spices (Star anise, cinnamon stick, cloves)"
        },
        "amount": "1 gói nhỏ"
      },
      {
        "name": {
          "vi": "Bột màu điều & bột ớt tạo màu đỏ cam óng ả",
          "en": "Annatto powder & mild chili powder"
        },
        "amount": "1 thìa canh"
      },
      {
        "name": {
          "vi": "Nước dừa tươi ngọt lành",
          "en": "Fresh coconut water"
        },
        "amount": "500ml"
      },
      {
        "name": {
          "vi": "Rau húng quế, ngò gai, chanh ớt ăn kèm",
          "en": "Thai basil, saw-tooth coriander, lime & chili"
        },
        "amount": "Vừa đủ"
      }
    ],
    "instructions": {
      "vi": [
        "Rửa sạch bắp bò với rượu trắng và gừng đập dập để khử sạch mùi tanh, thái miếng vuông vừa ăn.",
        "Ướp thịt với bột bò kho, hoa hồi, quế, sả băm, tỏi, gừng, nước tương, dầu hào và chút đường trong 40 phút.",
        "Phi thơm tỏi và sả cây đập dập với dầu điều đỏ, trút thịt bò vào xào lửa lớn cho săn chắc lại.",
        "Đổ nước dừa tươi và nước lọc ngập thịt bò, đun sôi rồi hạ nhỏ lửa hầm liu riu trong 50 phút đến khi thịt bò mềm nhừ mà gân vẫn giòn dai.",
        "Cho cà rốt cắt khúc vào hầm thêm 15 phút cho chín mềm ngọt thanh, có thể hòa chút bột năng tạo độ sánh sánh nhẹ.",
        "Múc bò kho nóng hổi ra tô, rắc rau húng quế ngò gai thái nhỏ, ăn cùng bánh mì giòn tan hoặc hủ tiếu."
      ],
      "en": [
        "Wash beef brisket with ginger wine to freshen, then cut into bite-sized cubes.",
        "Marinate beef with lemongrass, garlic, ginger, star anise, cinnamon, soy sauce, and oyster sauce for 40 mins.",
        "Heat annatto oil in a pot, sauté bruised lemongrass stalks, add beef and sear over high flame until browned.",
        "Pour fresh coconut water over meat, bring to boil, then simmer gently for 50 mins until beef is meltingly tender.",
        "Add carrot chunks and simmer another 15 minutes until carrots are sweet and tender.",
        "Garnish with Thai basil and saw-tooth coriander; serve steaming hot with crusty baguettes or rice noodles."
      ]
    },
    "region": "south",
    "diningType": [
      "home_cook",
      "eat_out"
    ]
  },
  {
    "id": "vn-nem-ran",
    "title": {
      "vi": "Nem Rán Hà Nội (Chả Giò Giòn Rụm)",
      "en": "Crispy Traditional Vietnamese Fried Spring Rolls"
    },
    "image": "https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=800&q=80",
    "category": {
      "vi": "Khai Vị",
      "en": "Appetizers"
    },
    "mealType": [
      "lunch",
      "dinner"
    ],
    "dietaryTags": {
      "vi": [
        "Giòn rụm",
        "Món cỗ",
        "Đặc sản truyền thống"
      ],
      "en": [
        "Crispy",
        "Festive Banquet",
        "Traditional Favorite"
      ]
    },
    "time": "45 min",
    "servings": 4,
    "calories": 360,
    "protein": 16,
    "fat": 18,
    "carbs": 32,
    "servingSize": {
      "vi": "Suất 4 chiếc nem vừa (~160g)",
      "en": "4 medium spring rolls (~160g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia (NIN) - Bảng Thành Phần Thực Phẩm Việt Nam",
      "en": "National Institute of Nutrition (NIN Vietnam) - Food Composition Table"
    },
    "recipeSource": {
      "vi": "Ẩm thực Thăng Long - Mâm Cỗ Truyền Thống Tết Hà Nội",
      "en": "Traditional Hanoi Festive Culinary Heritage"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Bánh đa nem (bánh tráng nem giòn)",
          "en": "Vietnamese crispy spring roll wrappers"
        },
        "amount": "20 lá"
      },
      {
        "name": {
          "vi": "Thịt nạc vai heo xay nhuyễn",
          "en": "Minced pork shoulder"
        },
        "amount": "300g"
      },
      {
        "name": {
          "vi": "Tôm tươi băm nhỏ hoặc thịt cua",
          "en": "Fresh minced prawns or crab meat"
        },
        "amount": "100g"
      },
      {
        "name": {
          "vi": "Mộc nhĩ, nấm hương ngâm nở thái chỉ",
          "en": "Wood-ear mushrooms & shiitake finely shredded"
        },
        "amount": "50g"
      },
      {
        "name": {
          "vi": "Miến dong ngâm mềm cắt ngắn",
          "en": "Glass cellophane noodles soaked & cut"
        },
        "amount": "50g"
      },
      {
        "name": {
          "vi": "Cà rốt & củ đậu (hoặc su hào) bào sợi vắt ráo",
          "en": "Shredded carrots & jicama (squeezed dry)"
        },
        "amount": "1 củ"
      },
      {
        "name": {
          "vi": "Trứng gà tươi lấy lòng đỏ",
          "en": "Fresh farm eggs"
        },
        "amount": "2 quả"
      },
      {
        "name": {
          "vi": "Hành lá, giá đỗ, tiêu sọ đập giập",
          "en": "Scallions, bean sprouts, cracked white pepper"
        },
        "amount": "Vừa đủ"
      }
    ],
    "instructions": {
      "vi": [
        "Trộn đều thịt băm, tôm, mộc nhĩ, nấm hương, miến, cà rốt, củ đậu và lòng đỏ trứng gà cùng chút hạt tiêu xay thơm.",
        "Trải bánh đa nem ra mặt phẳng, quết nhẹ chút nước giấm pha loãng để vỏ nem mềm dai dễ cuốn và chiên cực giòn.",
        "Xúc lượng nhân vừa phải đặt vào 1/3 bánh, gấp hai mép bên hông lại rồi cuộn tròn chặt vừa tay.",
        "Đun nóng dầu ăn ngập chảo, chiên nem ở lửa vừa theo phương pháp 2 lần lửa: Lần 1 chiên sơ chín tới rồi vớt ra ráo dầu; Lần 2 chiên lửa lớn đến khi vỏ nem vàng ươm giòn tan.",
        "Gắp nem ra đĩa có lót giấy thấm dầu, cắt khúc vừa ăn.",
        "Thưởng thức nem nóng hổi chấm cùng nước mắm chua ngọt pha tỏi ớt hạt tiêu và đĩa dưa góp đu đủ giòn sần sật."
      ],
      "en": [
        "Thoroughly combine minced pork, prawns, wood-ear, glass noodles, carrots, jicama, and egg yolks with cracked pepper.",
        "Lay spring roll wrapper flat, brush lightly with vinegar water to ensure ultra-crispy frying texture.",
        "Place filling onto the bottom third, fold side edges inward, and roll tightly into a cylinder.",
        "Heat oil until shimmering; fry spring rolls using the double-fry technique: first fry until pale-set, then second flash-fry on high until shattering crisp and golden.",
        "Drain on paper towels, slice into bite-sized segments.",
        "Serve hot with authentic sweet-sour dipping sauce with pickled green papaya and fresh lettuce."
      ]
    },
    "region": "north",
    "diningType": [
      "home_cook",
      "eat_out"
    ]
  },
  {
    "id": "vn-banh-cuon",
    "title": {
      "vi": "Bánh Cuốn Nóng Hành Phi Nhân Thịt",
      "en": "Steamed Vietnamese Rice Rolls with Minced Pork & Crispy Shallots"
    },
    "image": "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?auto=format&fit=crop&w=800&q=80",
    "category": {
      "vi": "Bữa Sáng",
      "en": "Breakfast"
    },
    "mealType": [
      "breakfast",
      "lunch"
    ],
    "dietaryTags": {
      "vi": [
        "Mềm mướt",
        "Thanh đạm",
        "Bữa sáng quen thuộc"
      ],
      "en": [
        "Delicate & Silky",
        "Light & Fresh",
        "Breakfast Classic"
      ]
    },
    "time": "30 min",
    "servings": 3,
    "calories": 340,
    "protein": 12,
    "fat": 9,
    "carbs": 52,
    "servingSize": {
      "vi": "1 đĩa bánh kèm chả lụa (~250g)",
      "en": "1 plate with pork ham (~250g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia (NIN) - Bảng Thành Phần Thực Phẩm Việt Nam",
      "en": "National Institute of Nutrition (NIN Vietnam) - Food Composition Table"
    },
    "recipeSource": {
      "vi": "Làng nghề Bánh Cuốn Thanh Trì - Di Sản Ẩm Thực Hà Nội",
      "en": "Historic Thanh Tri Steamed Rice Crepe Artisans"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Bột gạo tẻ pha bột năng theo tỉ lệ vàng",
          "en": "Rice flour & tapioca starch blend"
        },
        "amount": "250g"
      },
      {
        "name": {
          "vi": "Thịt nạc vai heo băm nhuyễn",
          "en": "Minced pork shoulder"
        },
        "amount": "200g"
      },
      {
        "name": {
          "vi": "Mộc nhĩ ngâm nở băm nhỏ",
          "en": "Finely minced wood-ear mushrooms"
        },
        "amount": "40g"
      },
      {
        "name": {
          "vi": "Hành tím thái mỏng phi vàng giòn rụm",
          "en": "Crispy fried golden shallots"
        },
        "amount": "1/2 bát"
      },
      {
        "name": {
          "vi": "Chả lụa hoặc chả quế thơm lừng thái lát",
          "en": "Vietnamese pork ham / cinnamon pork ham sliced"
        },
        "amount": "150g"
      },
      {
        "name": {
          "vi": "Nước mắm pha ấm chua ngọt thanh tao",
          "en": "Warm mild sweet-sour dipping broth"
        },
        "amount": "1 bát"
      },
      {
        "name": {
          "vi": "Rau thơm (rau mùi, húng bạc hà, giá đỗ chần)",
          "en": "Fresh herbs (cilantro, mint, blanched bean sprouts)"
        },
        "amount": "100g"
      }
    ],
    "instructions": {
      "vi": [
        "Hòa tan bột gạo, bột năng với 600ml nước lọc và 1 thìa cà phê muối, để bột nghỉ 1-2 tiếng cho trong bánh.",
        "Xào thơm hành tím băm, trút thịt nạc vai và mộc nhĩ băm vào xào săn chín tới, nêm chút hạt nêm và hạt tiêu thơm lừng làm nhân.",
        "Quét một lớp dầu mỏng lên chảo chống dính nóng vừa, múc một muôi bột láng thật mỏng đều mặt chảo, đậy nắp trong 30 giây cho bột trong chín mềm.",
        "Úp bánh ra mâm có xoa dầu, rải nhân thịt mộc nhĩ vào giữa rồi khéo léo cuộn tròn lại thành thanh bánh mướt mịn.",
        "Xếp bánh cuốn ra đĩa, rắc thật nhiều hành phi vàng giòn thơm nức lên trên.",
        "Ăn kèm chả quế, rau thơm tươi mát và bát nước mắm chấm pha ấm chua ngọt có thả vài lát ớt tươi cay nhẹ."
      ],
      "en": [
        "Mix rice flour, tapioca starch, and water with pinch of salt; rest batter 1-2 hours for silky translucency.",
        "Sauté minced shallots, minced pork, and wood-ear mushrooms until fragrant and savory for the filling.",
        "Lightly brush a nonstick pan with oil, swirl a thin layer of batter, cover for 30 seconds until transparently steamed.",
        "Slide crepe onto oiled flat tray, spoon savory filling across, and roll gently into an elegant cylinder.",
        "Plate steaming rolls, generously top with fragrant crunchy fried shallots.",
        "Serve with cinnamon pork ham, fresh herbs, and warm zesty sweet-sour dipping fish sauce."
      ]
    },
    "region": "north",
    "diningType": [
      "eat_out"
    ]
  },
  {
    "id": "vn-mi-quang",
    "title": {
      "vi": "Mì Quảng Tôm Thịt Đậm Đà Xứ Quảng",
      "en": "Quang Style Turmeric Rice Noodles with Shrimp & Pork"
    },
    "image": "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=800&q=80",
    "category": {
      "vi": "Món Nước",
      "en": "Noodle Soup"
    },
    "mealType": [
      "breakfast",
      "lunch",
      "dinner"
    ],
    "dietaryTags": {
      "vi": [
        "Đặc sản Miền Trung",
        "Đậm đà",
        "Bánh tráng nướng",
        "Đậu phộng rang"
      ],
      "en": [
        "Central Heritage",
        "Savory Broth",
        "Rice Crackers",
        "Roasted Peanuts"
      ]
    },
    "time": "45 min",
    "servings": 4,
    "calories": 490,
    "protein": 24,
    "fat": 15,
    "carbs": 58,
    "servingSize": {
      "vi": "1 tô đầy đủ bánh tráng nướng (~500g)",
      "en": "1 full bowl with sesame rice crackers (~500g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia (NIN) - Bảng Thành Phần Thực Phẩm Việt Nam",
      "en": "National Institute of Nutrition (NIN Vietnam) - Food Composition Table"
    },
    "recipeSource": {
      "vi": "Di Sản Ẩm Thực Xứ Quảng - Tinh Hoa Ẩm Thực Đà Nẵng Quảng Nam",
      "en": "Quang Nam & Da Nang Culinary Heritage"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Sợi mì Quảng vàng óng màu nghệ tươi hoặc trắng mềm",
          "en": "Thick Quang turmeric rice noodles"
        },
        "amount": "500g"
      },
      {
        "name": {
          "vi": "Tôm đất tươi lột vỏ chừa đuôi",
          "en": "Fresh wild shrimp"
        },
        "amount": "250g"
      },
      {
        "name": {
          "vi": "Thịt ba chỉ heo thái lát mỏng",
          "en": "Pork belly thinly sliced"
        },
        "amount": "250g"
      },
      {
        "name": {
          "vi": "Trứng cút luộc chín bóc vỏ",
          "en": "Hard-boiled quail eggs"
        },
        "amount": "8 quả"
      },
      {
        "name": {
          "vi": "Củ nén (hành tăm) giã nhỏ & dầu đậu phộng",
          "en": "Crushed shallot bulbs (củ nén) & peanut oil"
        },
        "amount": "3 thìa canh"
      },
      {
        "name": {
          "vi": "Đậu phộng rang vàng giã dập",
          "en": "Crushed roasted peanuts"
        },
        "amount": "1/2 bát"
      },
      {
        "name": {
          "vi": "Bánh tráng mè nướng giòn rụm",
          "en": "Crispy toasted sesame rice crackers"
        },
        "amount": "2 cái"
      },
      {
        "name": {
          "vi": "Rau sống búp chuối thái mỏng, cải non, húng lủi",
          "en": "Banana blossom, baby mustard greens, fresh mint"
        },
        "amount": "200g"
      }
    ],
    "instructions": {
      "vi": [
        "Ướp tôm và thịt ba chỉ với củ nén giã nhỏ, ớt bột, nước mắm, tiêu và dầu màu điều trong 20 phút.",
        "Đun nóng dầu đậu phộng trong nồi, phi củ nén thơm lừng rồi trút thịt và tôm vào xào săn đậm đà.",
        "Đổ thêm nước xương hầm hoặc nước dừa vừa ngập mặt thịt, nêm nếm đậm đà rồi đun nhỏ lửa 15 phút làm nước nhưn sền sệt.",
        "Cho trứng cút vào om cùng nước nhưn cho ngấm gia vị vàng óng.",
        "Xếp rau sống dưới đáy tô, cho sợi mì Quảng lên trên, gắp tôm, thịt, trứng cút bày lên mặt rồi chan một muôi nước nhưn đậm đà chỉ vừa xăm xắp chân sợi mì.",
        "Rắc đậu phộng rang giòn thơm, hành lá thái nhỏ và bẻ bánh tráng mè nướng giòn rụm vào trộn đều thưởng thức."
      ],
      "en": [
        "Marinate shrimp and pork belly with crushed native allium (củ nén), fish sauce, pepper, and annatto oil for 20 mins.",
        "Heat peanut oil in a wok, sauté crushed alliums until intensely aromatic, then sear pork and shrimp.",
        "Add concentrated pork bone broth to just cover meat; simmer gently to create a rich, shallow concentrated broth (nước nhưn).",
        "Drop quail eggs in to simmer with savory sauce until golden-hued.",
        "Layer crisp herbs in bowl, top with golden turmeric noodles, arrange shrimp, pork, quail eggs, and ladle shallow rich broth over noodles.",
        "Garnish with toasted crushed peanuts, scallions, and break crispy sesame crackers over before tossing."
      ]
    },
    "region": "central",
    "diningType": [
      "eat_out"
    ]
  },
  {
    "id": "vn-pho-ga",
    "title": {
      "vi": "Phở Gà Ta Hà Nội Lá Chanh",
      "en": "Traditional Hanoi Free-Range Chicken Pho with Kaffir Lime Leaves"
    },
    "image": "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=800&q=80",
    "category": {
      "vi": "Món Nước",
      "en": "Noodle Soup"
    },
    "mealType": [
      "breakfast",
      "lunch",
      "dinner"
    ],
    "dietaryTags": {
      "vi": [
        "Gà ta thả vườn",
        "Nước dùng trong ngọt",
        "Lá chanh thơm nức"
      ],
      "en": [
        "Free-Range Chicken",
        "Crystal Clear Broth",
        "Fragrant Lime Leaf"
      ]
    },
    "time": "1h 00m",
    "servings": 4,
    "calories": 410,
    "protein": 28,
    "fat": 9,
    "carbs": 55,
    "servingSize": {
      "vi": "1 tô tiêu chuẩn (~600g)",
      "en": "1 standard bowl (~600g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia (NIN) - Bảng Thành Phần Thực Phẩm Việt Nam",
      "en": "National Institute of Nutrition (NIN Vietnam) - Food Composition Table"
    },
    "recipeSource": {
      "vi": "Hương Vị Phố Phường Hà Nội - Tinh Hoa Phở Gà Thăng Long",
      "en": "Hanoi Street Food Heritage"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Gà ta thả vườn làm sạch nguyên con",
          "en": "Fresh free-range whole chicken"
        },
        "amount": "1.2kg"
      },
      {
        "name": {
          "vi": "Bánh phở tươi mềm mướt",
          "en": "Fresh flat rice noodles"
        },
        "amount": "500g"
      },
      {
        "name": {
          "vi": "Gừng tươi & hành tím nướng thơm đập dập",
          "en": "Charred ginger & grilled shallots"
        },
        "amount": "1 củ"
      },
      {
        "name": {
          "vi": "Hạt mùi rang thơm & rễ rau mùi (ngò)",
          "en": "Toasted coriander seeds & fresh cilantro roots"
        },
        "amount": "1 nắm"
      },
      {
        "name": {
          "vi": "Lá chanh bánh tẻ thái chỉ siêu mỏng",
          "en": "Lime leaves cut into hairline shreds"
        },
        "amount": "5 lá"
      },
      {
        "name": {
          "vi": "Nước mắm ngon, muối tinh, đường phèn",
          "en": "Fish sauce, sea salt, rock sugar"
        },
        "amount": "Gia vị nêm"
      },
      {
        "name": {
          "vi": "Hành lá chẻ sợi, rau mùi, chanh ớt tươi",
          "en": "Scallion curls, fresh cilantro, lime wedges & chili"
        },
        "amount": "Vừa đủ"
      }
    ],
    "instructions": {
      "vi": [
        "Xát muối và gừng lên thân gà để làm sạch hoàn toàn da gà, luộc gà cùng nước lạnh ngập con gà với hành gừng nướng và rễ mùi.",
        "Khi nước sôi, hớt sạch bọt, hạ nhỏ lửa luộc trong 20 phút rồi tắt bếp ủ thêm 10 phút để gà chín mọng nước không bị khô.",
        "Vớt gà ngâm ngay vào thau nước đá lạnh để da gà giòn sần sật và bóng vàng đẹp mắt.",
        "Lọc lấy thịt ức và đùi gà xé hoặc chặt miếng vừa ăn; xương gà cho lại vào nồi nước dùng ninh nhỏ lửa cho ngọt nước cốt.",
        "Nêm nếm nước dùng thanh trong với nước mắm truyền thống và chút đường phèn cho thanh vị.",
        "Trần bánh phở xếp vào bát, xếp thịt gà da vàng óng lên trên, rắc lá chanh thái chỉ, hành hoa chẻ rồi chan nước dùng sôi sùng sục vào."
      ],
      "en": [
        "Rub chicken skin with salt and ginger; submerge in cold water pot with charred ginger, shallots, and cilantro roots.",
        "Bring gently to a boil, skim scum cleanly, simmer on low for 20 minutes, then rest in pot off heat for 10 mins to keep chicken juicy.",
        "Plunge cooked chicken directly into an ice bath to create snap-crisp, golden skin.",
        "Carve succulent chicken meat into bite-sized cuts; return bones to the broth pot to simmer for deep natural sweetness.",
        "Season clear aromatic broth with pure fish sauce and a hint of rock sugar.",
        "Blanch noodles in bowls, arrange golden chicken slices on top, sprinkle whisper-thin lime leaf shreds and scallions, then ladle boiling broth over."
      ]
    },
    "region": "north",
    "diningType": [
      "eat_out"
    ]
  },
  {
    "id": "vn-cao-lau",
    "title": {
      "vi": "Cao Lầu Phố Cổ Hội An",
      "en": "Hoi An Signature Cao Lau Pork Noodles"
    },
    "image": "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=800&q=80",
    "category": {
      "vi": "Món Trộn",
      "en": "Dry Noodles"
    },
    "mealType": [
      "lunch",
      "dinner"
    ],
    "dietaryTags": {
      "vi": [
        "Di sản Hội An",
        "Sợi mì dai giòn",
        "Xá xíu đậm vị"
      ],
      "en": [
        "Hoi An Heritage",
        "Chewy Texture",
        "Savory Char Siu"
      ]
    },
    "time": "45 min",
    "servings": 4,
    "calories": 460,
    "protein": 23,
    "fat": 14,
    "carbs": 60,
    "servingSize": {
      "vi": "1 tô tiêu chuẩn (~450g)",
      "en": "1 standard bowl (~450g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia (NIN) - Bảng Thành Phần Thực Phẩm Việt Nam",
      "en": "National Institute of Nutrition (NIN Vietnam) - Food Composition Table"
    },
    "recipeSource": {
      "vi": "Di Sản Ẩm Thực Phố Cổ Hội An - Quảng Nam",
      "en": "Hoi An Ancient Town Culinary Preservation"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Sợi mì Cao Lầu khô ngâm mềm hấp nóng",
          "en": "Traditional Cao Lau ash-steeped noodles"
        },
        "amount": "400g"
      },
      {
        "name": {
          "vi": "Thịt nạc vai heo tươi (làm xá xíu)",
          "en": "Pork shoulder steaks (for char siu)"
        },
        "amount": "400g"
      },
      {
        "name": {
          "vi": "Bột ngũ vị hương & mật ong rừng",
          "en": "Five-spice powder & wild honey"
        },
        "amount": "2 thìa"
      },
      {
        "name": {
          "vi": "Tỏi, hành tím băm, nước tương cốt, nước mắm",
          "en": "Minced garlic, shallots, premium soy sauce, fish sauce"
        },
        "amount": "Gia vị ướp"
      },
      {
        "name": {
          "vi": "Miếng da heo (hoặc vuông mì cao lầu) chiên phồng giòn rụm (tép mỡ)",
          "en": "Crispy fried Cao Lau croutons"
        },
        "amount": "1 bát nhỏ"
      },
      {
        "name": {
          "vi": "Rau sống Trà Quế (rau đắng, húng lủi, cải non, giá đỗ)",
          "en": "Tra Que fresh garden greens & herbs"
        },
        "amount": "200g"
      }
    ],
    "instructions": {
      "vi": [
        "Ướp thịt nạc vai với ngũ vị hương, tỏi băm, nước tương, nước mắm, mật ong và tiêu trong ít nhất 40 phút cho ngấm sâu thớ thịt.",
        "Đun nóng chảo dầu, chiên xém hai mặt miếng thịt cho vàng cánh gián.",
        "Đổ phần nước ướp thịt cùng 1 chén nước sôi vào om nhỏ lửa đến khi nước sốt sánh keo lại đậm đà và thịt mềm thơm.",
        "Vớt thịt ra để nguội bớt rồi thái lát mỏng vừa ăn. Phần nước sốt rim thịt giữ lại thật nóng làm sốt chan mì.",
        "Trần giá đỗ lót dưới đáy tô, xếp sợi mì Cao Lầu đã hấp nóng dẻo dai lên trên, xếp các lát xá xíu đậm đà và tép mỡ giòn rụm.",
        "Chan 2-3 thìa nước sốt rim xá xíu đậm đà, ăn kèm rau sống thơm nồng của làng rau Trà Quế."
      ],
      "en": [
        "Marinate pork steaks with five-spice powder, minced garlic, soy sauce, fish sauce, and honey for 40 mins.",
        "Sear both sides of pork in skillet until deeply caramelized.",
        "Pour marinade and hot water into pan; simmer gently until liquid thickens into a savory, glossy glaze.",
        "Rest pork briefly before slicing into thin char siu medallions. Keep simmering pork glaze hot.",
        "Layer crisp bean sprouts in bowl, add warm chewy Cao Lau noodles, top with char siu slices and crispy croutons.",
        "Drizzle a few spoonfuls of concentrated savory pork sauce over, tossed with crisp Tra Que herb greens."
      ]
    },
    "region": "north",
    "diningType": [
      "eat_out"
    ]
  },
  {
    "id": "vn-hu-tieu",
    "title": {
      "vi": "Hủ Tiếu Nam Vang Tôm Thịt Đậm Đà",
      "en": "Nam Vang Clear Pork & Seafood Noodle Soup"
    },
    "image": "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=800&q=80",
    "category": {
      "vi": "Món Nước",
      "en": "Noodle Soup"
    },
    "mealType": [
      "breakfast",
      "lunch",
      "dinner"
    ],
    "dietaryTags": {
      "vi": [
        "Đặc sản Phương Nam",
        "Nước dùng trong vắt",
        "Tôm mực thịt băm"
      ],
      "en": [
        "Southern Favorite",
        "Crystal Clear Broth",
        "Seafood & Minced Pork"
      ]
    },
    "time": "1h 10m",
    "servings": 4,
    "calories": 440,
    "protein": 25,
    "fat": 12,
    "carbs": 58,
    "servingSize": {
      "vi": "1 tô tiêu chuẩn (~550g)",
      "en": "1 standard bowl (~550g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia (NIN) - Bảng Thành Phần Thực Phẩm Việt Nam",
      "en": "National Institute of Nutrition (NIN Vietnam) - Food Composition Table"
    },
    "recipeSource": {
      "vi": "Ẩm thực Sài Gòn Chợ Lớn - Tinh Hoa Giao Thoa Ẩm Thực",
      "en": "Saigon Cho Lon Culinary Heritage"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Sợi hủ tiếu dai Sa Đéc",
          "en": "Chewy Sa Dec clear rice noodles"
        },
        "amount": "500g"
      },
      {
        "name": {
          "vi": "Xương ống heo ninh nước dùng ngọt lịm",
          "en": "Pork bones (for sweet broth)"
        },
        "amount": "800g"
      },
      {
        "name": {
          "vi": "Tôm sú tươi luộc bóc vỏ chẻ lưng",
          "en": "Fresh tiger prawns, boiled & peeled"
        },
        "amount": "12 con"
      },
      {
        "name": {
          "vi": "Thịt heo nạc băm xào thơm",
          "en": "Minced pork seasoned & sautéed"
        },
        "amount": "200g"
      },
      {
        "name": {
          "vi": "Gan heo & tim heo luộc thái lát mỏng",
          "en": "Pork liver & heart sliced thin"
        },
        "amount": "150g"
      },
      {
        "name": {
          "vi": "Trứng cút luộc bóc vỏ",
          "en": "Hard-boiled quail eggs"
        },
        "amount": "8 quả"
      },
      {
        "name": {
          "vi": "Tỏi băm phi vàng thơm giòn",
          "en": "Crispy fried golden minced garlic"
        },
        "amount": "4 thìa"
      },
      {
        "name": {
          "vi": "Cần tàu, hẹ lá, giá đỗ tươi",
          "en": "Chinese celery, garlic chives, fresh bean sprouts"
        },
        "amount": "150g"
      }
    ],
    "instructions": {
      "vi": [
        "Hầm xương heo với mực nướng, tôm khô và củ cải trắng trong 1.5 tiếng, vớt bọt liên tục để nước dùng ngọt thanh và trong vắt.",
        "Xào thịt băm với tỏi phi và chút dầu hào, tiêu cho thơm lừng tơi xốp.",
        "Luộc chín tôm, gan heo và tim heo; ngâm ngay vào nước lạnh để gan không bị thâm rồi thái lát mỏng.",
        "Trần sợi hủ tiếu qua nước sôi cho vừa chín tới, xóc đều với một thìa dầu tỏi phi để sợi mì bóng bẩy không dính.",
        "Xếp hủ tiếu vào tô, thêm tôm luộc, thịt băm xào, gan heo, trứng cút, cần tàu và hẹ cắt khúc.",
        "Chan nước dùng sôi sùng sục ngọt lịm vào tô, rắc tỏi phi vàng giòn lên trên cùng."
      ],
      "en": [
        "Simmer pork bones with charred dried squid and daikon for 1.5 hours to produce a crystal clear, naturally sweet broth.",
        "Sauté minced pork with golden garlic and cracked pepper until aromatic.",
        "Poach tiger prawns, liver, and heart gently; plunge into ice water before slicing thin.",
        "Blanch chewy noodles briefly, toss immediately with fragrant garlic oil.",
        "Arrange noodles in bowl with prawns, savory minced pork, sliced pork liver, quail eggs, Chinese celery, and chives.",
        "Ladle boiling clear sweet broth over and crown with a generous spoonful of crispy garlic."
      ]
    },
    "region": "south",
    "diningType": [
      "eat_out"
    ]
  },
  {
    "id": "vn-banh-beo",
    "title": {
      "vi": "Bánh Bèo Chén Tôm Chấy Xứ Huế",
      "en": "Hue Savory Steamed Rice Cakes with Toasted Shrimp"
    },
    "image": "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?auto=format&fit=crop&w=800&q=80",
    "category": {
      "vi": "Ăn Vặt",
      "en": "Street Food"
    },
    "mealType": [
      "snack",
      "lunch"
    ],
    "dietaryTags": {
      "vi": [
        "Ẩm thực Cung đình",
        "Tôm chấy vàng ruộm",
        "Da heo giòn"
      ],
      "en": [
        "Imperial Heritage",
        "Toasted Shrimp Floss",
        "Crispy Pork Rinds"
      ]
    },
    "time": "35 min",
    "servings": 3,
    "calories": 280,
    "protein": 11,
    "fat": 8,
    "carbs": 42,
    "servingSize": {
      "vi": "Mâm 6 chén bánh bèo (~200g)",
      "en": "Platter of 6 steamed cake dishes (~200g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia (NIN) - Bảng Thành Phần Thực Phẩm Việt Nam",
      "en": "National Institute of Nutrition (NIN Vietnam) - Food Composition Table"
    },
    "recipeSource": {
      "vi": "Ẩm thực Cố Đô Huế - Món Bánh Dân Gian Cung Đình",
      "en": "Hue Imperial Savory Street Pastry Archives"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Bột gạo tẻ pha chút bột năng tạo độ dai mướt",
          "en": "Rice flour & hint of tapioca starch"
        },
        "amount": "200g"
      },
      {
        "name": {
          "vi": "Tôm đất tươi làm tôm chấy đỏ cam thơm ngọt",
          "en": "Fresh wild shrimp (for shrimp floss)"
        },
        "amount": "200g"
      },
      {
        "name": {
          "vi": "Da heo chiên phồng giòn rụm (bóng bì)",
          "en": "Crispy fried pork rinds"
        },
        "amount": "50g"
      },
      {
        "name": {
          "vi": "Mỡ hành lá phi thơm ngậy",
          "en": "Scallion oil"
        },
        "amount": "3 thìa"
      },
      {
        "name": {
          "vi": "Nước mắm pha ớt cay nồng đúng điệu Huế",
          "en": "Hue style spicy diluted fish sauce"
        },
        "amount": "1 bát nhỏ"
      }
    ],
    "instructions": {
      "vi": [
        "Khuấy đều bột gạo, bột năng với nước lạnh và chút muối, để bột nghỉ 30 phút.",
        "Luộc tôm chín bóc vỏ, giã nhỏ rồi cho vào chảo sao lửa nhỏ cho tôm tơi xốp và khô ráo thành tôm chấy màu đỏ cam rực rỡ.",
        "Xếp các chén sành nhỏ vào xửng hấp làm nóng chén trước, sau đó khuấy đều bột rót vào từng chén một lớp mỏng vừa phải.",
        "Hấp chín ở lửa lớn trong 6-8 phút đến khi bánh chín xoáy lòng đồng tiền tuyệt đẹp.",
        "Thoa một thìa mỡ hành bóng bẩy lên mặt bánh, rắc tôm chấy vàng ruộm và một miếng da heo giòn rụm vào giữa chén.",
        "Rưới nước mắm ớt cay nồng lên từng chén và dùng thìa nhỏ xắn thưởng thức khi bánh còn nóng ấm."
      ],
      "en": [
        "Whisk rice flour, tapioca starch, water, and pinch of salt; rest for 30 minutes.",
        "Boil prawns, peel, pound in mortar, and toast in dry pan over low heat until fluffy, savory orange shrimp floss is formed.",
        "Preheat small ceramic saucers in steamer; pour a thin layer of batter into each cup.",
        "Steam over high heat for 6-8 minutes until set with signature dimple in center.",
        "Drizzle glistening scallion oil, scatter toasted shrimp floss, and top with a crunchy pork rind.",
        "Spoon spicy fish sauce directly into cups and enjoy while warm."
      ]
    },
    "region": "central",
    "diningType": [
      "eat_out"
    ]
  },
  {
    "id": "vn-banh-khot",
    "title": {
      "vi": "Bánh Khọt Tôm Giòn Rụm Vũng Tàu",
      "en": "Vung Tau Crispy Mini Turmeric Shrimp Pancakes"
    },
    "image": "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?auto=format&fit=crop&w=800&q=80",
    "category": {
      "vi": "Ăn Vặt",
      "en": "Street Food"
    },
    "mealType": [
      "lunch",
      "dinner",
      "snack"
    ],
    "dietaryTags": {
      "vi": [
        "Giòn rụm",
        "Nước cốt dừa",
        "Rau xanh bạt ngàn"
      ],
      "en": [
        "Ultra Crispy",
        "Coconut Cream",
        "Fresh Herb Wraps"
      ]
    },
    "time": "40 min",
    "servings": 3,
    "calories": 390,
    "protein": 15,
    "fat": 16,
    "carbs": 46,
    "servingSize": {
      "vi": "Đĩa 6 cái kèm rau và đồ chua (~220g)",
      "en": "Platter of 6 cakes with herbs (~220g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia (NIN) - Bảng Thành Phần Thực Phẩm Việt Nam",
      "en": "National Institute of Nutrition (NIN Vietnam) - Food Composition Table"
    },
    "recipeSource": {
      "vi": "Đặc Sản Ẩm Thực Ven Biển Vũng Tàu - Miền Đông Nam Bộ",
      "en": "Vung Tau Coastal Street Food Heritage"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Bột gạo pha cốt dừa và bột nghệ vàng ươm",
          "en": "Rice flour, coconut milk & turmeric"
        },
        "amount": "250g"
      },
      {
        "name": {
          "vi": "Tôm tươi cắt râu bóc vỏ chừa đuôi",
          "en": "Fresh peeled prawns"
        },
        "amount": "18 con"
      },
      {
        "name": {
          "vi": "Bột tôm chấy đỏ cam rắc mặt bánh",
          "en": "Toasted shrimp powder"
        },
        "amount": "3 thìa"
      },
      {
        "name": {
          "vi": "Mỡ hành phi thơm bóng mướt",
          "en": "Scallion oil"
        },
        "amount": "3 thìa"
      },
      {
        "name": {
          "vi": "Rau cải cay, xà lách, rau thơm, đu đủ ngâm chua",
          "en": "Mustard greens, lettuce, herbs, pickled papaya"
        },
        "amount": "250g"
      },
      {
        "name": {
          "vi": "Nước mắm tỏi ớt chua ngọt",
          "en": "Sweet-sour garlic chili fish sauce"
        },
        "amount": "1 bát"
      }
    ],
    "instructions": {
      "vi": [
        "Khuấy đều bột gạo, bột nghệ, nước cốt dừa béo ngậy, nước lọc và hành lá thái nhỏ.",
        "Đun nóng khuôn bánh khọt trên bếp, quét một lớp dầu ăn vào từng khuôn lõm.",
        "Rót bột vào 2/3 khuôn xèo xèo, đậy nắp lại trong 2 phút cho bột chín viền giòn tan.",
        "Mở nắp, đặt một con tôm tươi vào giữa mỗi chiếc bánh, rưới thêm chút nước cốt dừa đặc rồi đậy nắp chiên thêm 2 phút đến khi đáy bánh vàng giòn rụm.",
        "Gắp bánh ra đĩa, thoa mỡ hành và rắc bột tôm chấy đỏ au lên mặt.",
        "Cuộn bánh khọt nóng giòn trong lá rau cải cay và xà lách, kèm dưa góp đu đủ rồi chấm ngập bát nước mắm chua ngọt."
      ],
      "en": [
        "Whisk rice flour, turmeric, coconut milk, water, and finely chopped scallions.",
        "Heat cast-iron mini pancake mold, brushing each cavity with cooking oil.",
        "Ladle batter into sizzling cups, cover for 2 minutes to crisp outer rim.",
        "Uncover, place a fresh prawn in center, spoon a dash of rich coconut cream, and crisp until golden-brown.",
        "Lift cakes onto plate, brush with scallion oil and dust with savory orange shrimp powder.",
        "Wrap hot crispy cakes in mustard greens and lettuce with pickled papaya, dip into sweet-sour garlic sauce."
      ]
    },
    "region": "south",
    "diningType": [
      "eat_out"
    ]
  },
  {
    "id": "vn-bun-thang",
    "title": {
      "vi": "Bún Thang Thanh Nhã Phố Cổ Hà Nội",
      "en": "Hanoi Elegant Bun Thang Noodle Soup"
    },
    "image": "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=800&q=80",
    "category": {
      "vi": "Món Nước",
      "en": "Noodle Soup"
    },
    "mealType": [
      "breakfast",
      "lunch"
    ],
    "dietaryTags": {
      "vi": [
        "Tinh hoa Hà Nội",
        "Cầu kỳ tao nhã",
        "Nước dùng tôm ngọt lịm"
      ],
      "en": [
        "Hanoi Masterpiece",
        "Intricate Artistry",
        "Dried Shrimp Broth"
      ]
    },
    "time": "1h 15m",
    "servings": 4,
    "calories": 380,
    "protein": 26,
    "fat": 8,
    "carbs": 50,
    "servingSize": {
      "vi": "1 tô tiêu chuẩn (~600g)",
      "en": "1 standard bowl (~600g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia (NIN) - Bảng Thành Phần Thực Phẩm Việt Nam",
      "en": "National Institute of Nutrition (NIN Vietnam) - Food Composition Table"
    },
    "recipeSource": {
      "vi": "Nghệ Thuật Ẩm Thực Hà Thành - Đỉnh Cao Tinh Tế Phố Cổ",
      "en": "Hanoi Ancient Quarter Fine Culinary Arts"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Bún sợi nhỏ trắng mềm",
          "en": "Delicate fine vermicelli noodles"
        },
        "amount": "500g"
      },
      {
        "name": {
          "vi": "Thịt gà ta luộc xé sợi mảnh",
          "en": "Free-range chicken shredded into fine threads"
        },
        "amount": "250g"
      },
      {
        "name": {
          "vi": "Giò lụa ngon thái chỉ mỏng như sợi tơ",
          "en": "Vietnamese ham shredded paper-thin"
        },
        "amount": "150g"
      },
      {
        "name": {
          "vi": "Trứng gà tráng mỏng tang thái chỉ",
          "en": "Egg crepe shredded into whisper-thin strips"
        },
        "amount": "2 quả"
      },
      {
        "name": {
          "vi": "Tôm sú tươi giã làm ruốc tôm bông xốp",
          "en": "Pounded shrimp floss"
        },
        "amount": "100g"
      },
      {
        "name": {
          "vi": "Củ cải dầm khô (ca thầu xại) thái sợi",
          "en": "Preserved sweet-savory dried radish"
        },
        "amount": "50g"
      },
      {
        "name": {
          "vi": "Xương gà & tôm khô ninh nước dùng trong vắt",
          "en": "Chicken bones & dried shrimp for broth"
        },
        "amount": "1 nồi"
      },
      {
        "name": {
          "vi": "Rau răm, hành hoa, tinh dầu cà cuống & mắm tôm",
          "en": "Vietnamese coriander, scallions, water bug essence & shrimp paste"
        },
        "amount": "Ăn kèm"
      }
    ],
    "instructions": {
      "vi": [
        "Ninh xương gà cùng tôm khô nướng và nấm hương trên lửa nhỏ, vớt bọt liên tục để nước dùng trong veo ngọt đậm vị tôm.",
        "Đánh tan trứng gà, tráng trên chảo chống dính thật mỏng tang rồi cuộn lại thái sợi chỉ mảnh li ti.",
        "Thái chỉ giò lụa, xé sợi thịt ức gà, sao ruốc tôm khô bông xốp như tơ.",
        "Trần bún sợi nhỏ xếp vào tô, khéo léo sắp xếp các nguyên liệu theo từng góc như bức tranh ngũ sắc: màu vàng của trứng, màu hồng của giò, màu trắng của gà, màu đỏ cam của tôm bông và màu nâu của củ cải.",
        "Rắc hành hoa và rau răm thái nhỏ ở chính giữa nhụy hoa.",
        "Chan nước dùng sôi sùng sục từ mép bát, thêm đầu tăm tinh dầu cà cuống thơm nức mũi và chút mắm tôm dậy vị."
      ],
      "en": [
        "Simmer chicken bones, toasted dried shrimp, and shiitake mushrooms over gentle flame to yield a crystal-clear, ocean-sweet broth.",
        "Whisk eggs and pan-fry into paper-thin crepes, then slice into fine threads.",
        "Shred pork ham and poached chicken breast into matchstick fibers; toast pounded shrimp into fluffy floss.",
        "Place noodles in bowls and arrange toppings geometrically like a five-color mandala: golden egg, pink ham, white chicken, red shrimp, and preserved radish.",
        "Top center with minced scallions and Vietnamese coriander.",
        "Ladle boiling clear broth along bowl rim; accent with a hint of water bug essence and savory shrimp paste."
      ]
    },
    "region": "north",
    "diningType": [
      "eat_out"
    ]
  },
  {
    "id": "vn-thit-rang-chay-canh",
    "title": {
      "vi": "Thịt Ba Chỉ Rang Cháy Cạnh",
      "en": "Crispy Caramelized Pork Belly with Fish Sauce"
    },
    "image": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
    "category": {
      "vi": "Cơm Gia Đình",
      "en": "Home Cooking"
    },
    "mealType": [
      "lunch",
      "dinner"
    ],
    "dietaryTags": {
      "vi": [
        "Món cơm nhà",
        "Đậm đà",
        "Tốn cơm"
      ],
      "en": [
        "Home Cooking",
        "Savory",
        "Crispy Edges"
      ]
    },
    "time": "25 min",
    "servings": 4,
    "calories": 420,
    "protein": 22,
    "fat": 34,
    "carbs": 6,
    "servingSize": {
      "vi": "1 đĩa tiêu chuẩn (~180g)",
      "en": "1 standard plate (~180g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia (NIN)",
      "en": "National Institute of Nutrition (NIN)"
    },
    "recipeSource": {
      "vi": "Cơm Nhà Miền Bắc - Nghệ Thuật Nấu Ăn Dân Gian",
      "en": "Traditional Northern Family Cuisine"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Thịt ba chỉ heo thái con chì mỏng",
          "en": "Pork belly thinly sliced"
        },
        "amount": "400g"
      },
      {
        "name": {
          "vi": "Hành tím băm & tỏi đập dập",
          "en": "Minced shallots & crushed garlic"
        },
        "amount": "2 củ"
      },
      {
        "name": {
          "vi": "Nước mắm ngon & đường vàng",
          "en": "Pure fish sauce & sugar"
        },
        "amount": "3 thìa canh"
      },
      {
        "name": {
          "vi": "Hành lá cắt khúc & hạt tiêu thơm",
          "en": "Scallions & black pepper"
        },
        "amount": "Vừa đủ"
      }
    ],
    "instructions": {
      "vi": [
        "Thịt ba chỉ rửa sạch, thái miếng vừa ăn dày khoảng 0.5cm.",
        "Cho thịt vào chảo nóng rang lửa vừa không cần dầu đến khi tứa mỡ và các cạnh xém vàng giòn.",
        "Chắt bớt mỡ thừa trong chảo, cho hành tỏi băm vào phi thơm cùng thịt.",
        "Hòa tan nước mắm ngon và đường, rưới đều quanh chảo đảo nhanh tay lửa lớn đến khi sốt keo lại bao quanh từng miếng thịt.",
        "Rắc hành hoa và tiêu xay cay nồng, đảo đều rồi tắt bếp ăn nóng với cơm trắng."
      ],
      "en": [
        "Slice pork belly into 0.5cm strips.",
        "Pan-sear without oil over medium flame until fat renders and edges turn crispy golden.",
        "Drain excess grease, toss in minced shallots and garlic until aromatic.",
        "Pour in fish sauce and sugar mixture, glaze over high heat until caramelized and sticky.",
        "Toss with fresh scallions and coarse black pepper, serve hot with jasmine rice."
      ]
    },
    "region": "north",
    "diningType": [
      "home_cook"
    ]
  },
  {
    "id": "vn-ga-kho-sa-ot",
    "title": {
      "vi": "Gà Kho Sả Ớt Đậm Vị Nam Bộ",
      "en": "Braised Lemongrass & Chili Chicken"
    },
    "image": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80",
    "category": {
      "vi": "Cơm Gia Đình",
      "en": "Home Cooking"
    },
    "mealType": [
      "lunch",
      "dinner"
    ],
    "dietaryTags": {
      "vi": [
        "Cay nồng",
        "Thơm nức sả",
        "Tốn cơm"
      ],
      "en": [
        "Spicy",
        "Aromatic Lemongrass",
        "Savory"
      ]
    },
    "time": "35 min",
    "servings": 4,
    "calories": 340,
    "protein": 32,
    "fat": 16,
    "carbs": 5,
    "servingSize": {
      "vi": "1 phần tiêu chuẩn (~200g)",
      "en": "1 standard serving (~200g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia (NIN)",
      "en": "National Institute of Nutrition (NIN)"
    },
    "recipeSource": {
      "vi": "Ẩm Thực Nam Bộ - Món Ăn Thường Ngày",
      "en": "Southern Vietnamese Daily Cooking"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Thịt gà ta chặt miếng vừa ăn",
          "en": "Chicken cut into bite-sized pieces"
        },
        "amount": "500g"
      },
      {
        "name": {
          "vi": "Sả băm nhuyễn",
          "en": "Minced fresh lemongrass"
        },
        "amount": "4 cây"
      },
      {
        "name": {
          "vi": "Ớt hiểm băm nhỏ",
          "en": "Minced bird-eye chilies"
        },
        "amount": "2 quả"
      },
      {
        "name": {
          "vi": "Nước mắm, đường, dầu điều",
          "en": "Fish sauce, sugar, annatto oil"
        },
        "amount": "Gia vị nêm"
      }
    ],
    "instructions": {
      "vi": [
        "Ướp thịt gà với 1/2 lượng sả ớt, nước mắm, đường, bột nêm trong 20 phút.",
        "Phi thơm phần sả ớt còn lại với dầu điều tạo màu đỏ vàng óng ả.",
        "Trút gà vào xào săn trên lửa lớn đến khi thịt gà săn chắc lại.",
        "Thêm chút nước sôi ngập xâm xấp, hạ nhỏ lửa kho liu riu trong 20 phút cho gà ngấm đều vị cay nồng.",
        "Đun lửa lớn đảo đều đến khi nước kho sánh kẹo lại bám đều quanh từng miếng gà."
      ],
      "en": [
        "Marinate chicken with half the lemongrass, chilies, fish sauce, and sugar for 20 mins.",
        "Sauté remaining lemongrass and chili in annatto oil until fragrant.",
        "Sear chicken over high heat until browned and firm.",
        "Add a splash of water, simmer over low heat for 20 mins until tender.",
        "Reduce sauce until glossy and deeply caramelized, coating each piece."
      ]
    },
    "region": "south",
    "diningType": [
      "home_cook"
    ]
  },
  {
    "id": "vn-ga-kho-gung",
    "title": {
      "vi": "Gà Kho Gừng Truyền Thống",
      "en": "Traditional Vietnamese Ginger Braised Chicken"
    },
    "image": "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=800&q=80",
    "category": {
      "vi": "Cơm Gia Đình",
      "en": "Home Cooking"
    },
    "mealType": [
      "lunch",
      "dinner"
    ],
    "dietaryTags": {
      "vi": [
        "Ấm bụng",
        "Gừng tươi thơm nức",
        "Bổ dưỡng"
      ],
      "en": [
        "Warming",
        "Fresh Ginger",
        "Nutritious"
      ]
    },
    "time": "35 min",
    "servings": 4,
    "calories": 320,
    "protein": 30,
    "fat": 15,
    "carbs": 4,
    "servingSize": {
      "vi": "1 phần tiêu chuẩn (~200g)",
      "en": "1 standard serving (~200g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia (NIN)",
      "en": "National Institute of Nutrition (NIN)"
    },
    "recipeSource": {
      "vi": "Cơm Mẹ Nấu - Hương Vị Bếp Quê",
      "en": "Homestyle Comfort Cuisine"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Gà ta thả vườn chặt miếng",
          "en": "Free-range chicken pieces"
        },
        "amount": "500g"
      },
      {
        "name": {
          "vi": "Gừng tươi cạo vỏ thái sợi mảnh",
          "en": "Fresh ginger julienned"
        },
        "amount": "2 củ"
      },
      {
        "name": {
          "vi": "Nước mắm ngon, hạt tiêu, nước hàng",
          "en": "Fish sauce, black pepper, caramel sauce"
        },
        "amount": "Gia vị"
      }
    ],
    "instructions": {
      "vi": [
        "Ướp thịt gà với nước mắm, hạt tiêu, nước hàng và một nửa gừng thái sợi trong 20 phút.",
        "Phi thơm phần gừng còn lại cho dậy mùi thơm nức.",
        "Cho gà vào đảo đều lửa lớn cho săn thịt.",
        "Đậy nắp kho lửa nhỏ trong 20-25 phút để nước gà tiết ra hòa quyện cùng vị cay ấm của gừng.",
        "Mở vung đun thêm 5 phút cho nước kho keo sánh lại, rắc tiêu xay và thưởng thức cùng cơm nóng."
      ],
      "en": [
        "Marinate chicken with fish sauce, pepper, caramel syrup, and half the ginger for 20 mins.",
        "Sauté remaining ginger strips until intensely aromatic.",
        "Sear chicken on high until golden and firm.",
        "Simmer covered on low heat for 20-25 mins so the chicken juices meld with ginger warmth.",
        "Uncover to reduce sauce to a glistening glaze, top with coarse black pepper."
      ]
    },
    "region": "national",
    "diningType": [
      "home_cook"
    ]
  },
  {
    "id": "vn-suon-xao-chua-ngot",
    "title": {
      "vi": "Sườn Xào Chua Ngọt Hà Nội",
      "en": "Sweet & Sour Glazed Pork Ribs"
    },
    "image": "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?auto=format&fit=crop&w=800&q=80",
    "category": {
      "vi": "Cơm Gia Đình",
      "en": "Home Cooking"
    },
    "mealType": [
      "lunch",
      "dinner"
    ],
    "dietaryTags": {
      "vi": [
        "Chua ngọt hài hòa",
        "Món khoái khẩu",
        "Đậm đà"
      ],
      "en": [
        "Sweet & Tangy",
        "Crowd Favorite",
        "Rich Glaze"
      ]
    },
    "time": "40 min",
    "servings": 4,
    "calories": 430,
    "protein": 26,
    "fat": 24,
    "carbs": 18,
    "servingSize": {
      "vi": "1 đĩa tiêu chuẩn (~220g)",
      "en": "1 standard serving (~220g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia (NIN)",
      "en": "National Institute of Nutrition (NIN)"
    },
    "recipeSource": {
      "vi": "Ẩm Thực Hà Thành - Món Ngon Gia Đình",
      "en": "Hanoi Homestyle Cooking"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Sườn non heo chặt dẻ ngắn",
          "en": "Pork spare ribs chopped"
        },
        "amount": "500g"
      },
      {
        "name": {
          "vi": "Nước mắm, đường vàng, giấm gạo thanh (hoặc chanh)",
          "en": "Fish sauce, brown sugar, rice vinegar"
        },
        "amount": "Sốt chua ngọt"
      },
      {
        "name": {
          "vi": "Tương cà & tỏi băm nhuyễn",
          "en": "Ketchup & minced garlic"
        },
        "amount": "2 thìa"
      }
    ],
    "instructions": {
      "vi": [
        "Trần sườn qua nước sôi khử bọt bẩn, rửa sạch rồi chiên vàng đều hai mặt.",
        "Pha sốt chua ngọt: 2 thìa nước mắm, 2 thìa đường, 2 thìa giấm thanh, 1 thìa tương cà và 3 thìa nước lọc.",
        "Phi thơm tỏi băm, đổ bát nước sốt vào đun sôi sủi bọt.",
        "Trút sườn đã chiên vào đảo đều, hạ nhỏ lửa đun liu riu trong 15 phút cho sườn ngấm sốt.",
        "Đun lửa to đảo đều đến khi sốt cô đặc lại bám đều quanh từng dẻ sườn óng ả."
      ],
      "en": [
        "Parboil pork ribs to clean, then pan-fry until golden on both sides.",
        "Whisk sweet and sour glaze: fish sauce, brown sugar, vinegar, ketchup, and water.",
        "Sauté minced garlic until fragrant, pour in sauce until bubbling.",
        "Add fried ribs, simmer on low heat for 15 minutes to absorb flavors.",
        "Toss on high heat until the glaze turns sticky, shiny, and thick."
      ]
    },
    "region": "north",
    "diningType": [
      "home_cook",
      "eat_out"
    ]
  },
  {
    "id": "vn-dau-phu-sot-ca-chua",
    "title": {
      "vi": "Đậu Phụ Rán Sốt Cà Chua",
      "en": "Crispy Tofu in Rich Tomato Sauce"
    },
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    "category": {
      "vi": "Cơm Gia Đình",
      "en": "Home Cooking"
    },
    "mealType": [
      "lunch",
      "dinner"
    ],
    "dietaryTags": {
      "vi": [
        "Thanh đạm",
        "Tiết kiệm",
        "Cơm gia đình",
        "Dễ làm"
      ],
      "en": [
        "Vegetarian Friendly",
        "Budget Friendly",
        "Quick & Easy"
      ]
    },
    "time": "20 min",
    "servings": 3,
    "calories": 210,
    "protein": 14,
    "fat": 12,
    "carbs": 10,
    "servingSize": {
      "vi": "1 đĩa đậu sốt (~200g)",
      "en": "1 plate (~200g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia (NIN)",
      "en": "National Institute of Nutrition (NIN)"
    },
    "recipeSource": {
      "vi": "Bếp Cơm Gia Đình Việt Nam",
      "en": "Vietnamese Daily Home Kitchen"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Đậu phụ non hoặc đậu mơ cắt khối vuông",
          "en": "Fresh firm tofu cut into cubes"
        },
        "amount": "3 bìa"
      },
      {
        "name": {
          "vi": "Cà chua chín mọng thái hạt lựu",
          "en": "Ripe tomatoes diced"
        },
        "amount": "3 quả"
      },
      {
        "name": {
          "vi": "Hành hoa thái nhỏ & hành khô phi",
          "en": "Finely sliced scallions & fried shallots"
        },
        "amount": "1 nắm"
      },
      {
        "name": {
          "vi": "Nước mắm, đường, hạt tiêu",
          "en": "Fish sauce, sugar, pepper"
        },
        "amount": "Gia vị"
      }
    ],
    "instructions": {
      "vi": [
        "Cắt đậu phụ thành miếng vuông, chiên vàng giòn các mặt trên chảo dầu nóng, vớt ra để ráo dầu.",
        "Phi thơm hành khô, cho cà chua thái nhỏ vào xào nhuyễn cùng chút muối cho nhanh mềm.",
        "Thêm nước mắm và chút nước lọc đun sôi tạo thành nước sốt cà chua sền sệt màu đỏ tươi.",
        "Thả đậu phụ chiên vào đảo nhẹ tay trên lửa nhỏ trong 5 phút để đậu ngấm nước sốt cà chua.",
        "Rắc hành hoa và tiêu xay thơm nức lên trên rồi tắt bếp thưởng thức nóng."
      ],
      "en": [
        "Cube tofu and pan-fry in hot oil until golden-crisp on all sides; drain.",
        "Sauté shallots, add diced tomatoes with a pinch of salt until broken down into a rich sauce.",
        "Season with fish sauce and simmer to create a silky, vibrant red gravy.",
        "Gently fold in crispy tofu cubes, simmering for 5 minutes so tofu absorbs the tangy sauce.",
        "Garnish with generous fresh scallions and black pepper."
      ]
    },
    "region": "national",
    "diningType": [
      "home_cook"
    ]
  },
  {
    "id": "vn-dau-phu-nhoi-thit",
    "title": {
      "vi": "Đậu Phụ Nhồi Thịt Sốt Cà Chua",
      "en": "Stuffed Tofu with Minced Pork in Tomato Sauce"
    },
    "image": "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80",
    "category": {
      "vi": "Cơm Gia Đình",
      "en": "Home Cooking"
    },
    "mealType": [
      "lunch",
      "dinner"
    ],
    "dietaryTags": {
      "vi": [
        "Giàu đạm",
        "Đậm đà",
        "Bữa cơm trọn vẹn"
      ],
      "en": [
        "High Protein",
        "Savory & Sweet",
        "Balanced Meal"
      ]
    },
    "time": "35 min",
    "servings": 4,
    "calories": 340,
    "protein": 24,
    "fat": 18,
    "carbs": 12,
    "servingSize": {
      "vi": "4 miếng nhồi thịt (~220g)",
      "en": "4 stuffed pieces (~220g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia (NIN)",
      "en": "National Institute of Nutrition (NIN)"
    },
    "recipeSource": {
      "vi": "Cơm Nhà 3 Miền",
      "en": "Vietnamese Family Comfort Meals"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Đậu phụ rán sẵn rạch bụng",
          "en": "Fried tofu pockets"
        },
        "amount": "4 bìa"
      },
      {
        "name": {
          "vi": "Thịt nạc vai xay nhuyễn",
          "en": "Minced pork shoulder"
        },
        "amount": "200g"
      },
      {
        "name": {
          "vi": "Mộc nhĩ ngâm nở băm nhỏ",
          "en": "Wood-ear mushrooms finely chopped"
        },
        "amount": "20g"
      },
      {
        "name": {
          "vi": "Cà chua chín mọng",
          "en": "Ripe tomatoes"
        },
        "amount": "3 quả"
      },
      {
        "name": {
          "vi": "Hành hoa, hạt tiêu, nước mắm",
          "en": "Scallions, pepper, fish sauce"
        },
        "amount": "Gia vị"
      }
    ],
    "instructions": {
      "vi": [
        "Trộn đều thịt băm với mộc nhĩ, hành khô băm, hạt tiêu và 1 thìa nước mắm ngon.",
        "Rạch một đường dọc thân miếng đậu phụ, khéo léo nhồi phần nhân thịt vào giữa cho căng đầy.",
        "Áp chảo nhẹ mặt nhân thịt cho săn lại.",
        "Xào cà chua nhuyễn với chút dầu ăn tạo sốt, nêm nếm gia vị vừa ăn rồi xếp các miếng đậu nhồi thịt vào om nhỏ lửa trong 15 phút.",
        "Rưới nước sốt sánh mịn lên mặt đậu, rắc hành lá thái nhỏ và ăn kèm cơm trắng nóng hổi."
      ],
      "en": [
        "Mix minced pork with wood-ear mushrooms, shallots, pepper, and fish sauce.",
        "Cut a slit in each tofu block and stuff generously with the seasoned meat mixture.",
        "Pan-fry the open meat side briefly to seal.",
        "Cook tomatoes into a rich sauce, nestle stuffed tofu blocks inside, and simmer for 15 minutes until meat is cooked through.",
        "Spoon glistening tomato glaze over, top with chopped scallions."
      ]
    },
    "region": "national",
    "diningType": [
      "home_cook"
    ]
  },
  {
    "id": "vn-trung-chien-thit",
    "title": {
      "vi": "Trứng Chiên Thịt Băm Hành Hoa",
      "en": "Vietnamese Fluffy Minced Pork Omelet"
    },
    "image": "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80",
    "category": {
      "vi": "Cơm Gia Đình",
      "en": "Home Cooking"
    },
    "mealType": [
      "breakfast",
      "lunch",
      "dinner"
    ],
    "dietaryTags": {
      "vi": [
        "Nhanh gọn",
        "Giàu đạm",
        "Bữa ăn quốc dân"
      ],
      "en": [
        "Quick & Easy",
        "High Protein",
        "Family Essential"
      ]
    },
    "time": "15 min",
    "servings": 3,
    "calories": 280,
    "protein": 19,
    "fat": 20,
    "carbs": 2,
    "servingSize": {
      "vi": "1 phần tiêu chuẩn (~150g)",
      "en": "1 standard serving (~150g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia (NIN)",
      "en": "National Institute of Nutrition (NIN)"
    },
    "recipeSource": {
      "vi": "Ẩm Thực Cơm Nhà Việt Nam",
      "en": "Vietnamese Homestyle Egg Classics"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Trứng gà hoặc trứng vịt tươi",
          "en": "Fresh farm eggs"
        },
        "amount": "4 quả"
      },
      {
        "name": {
          "vi": "Thịt nạc vai băm nhuyễn",
          "en": "Minced pork"
        },
        "amount": "120g"
      },
      {
        "name": {
          "vi": "Hành hoa thái nhỏ & hành tím băm",
          "en": "Chopped scallions & shallots"
        },
        "amount": "1 nắm"
      },
      {
        "name": {
          "vi": "Nước mắm ngon & tiêu sọ xay thơm",
          "en": "Pure fish sauce & ground pepper"
        },
        "amount": "Vừa đủ"
      }
    ],
    "instructions": {
      "vi": [
        "Đập trứng vào bát, đánh tan cùng 1.5 thìa nước mắm ngon và tiêu xay.",
        "Cho thịt băm và hành hoa thái nhỏ vào bát trứng, đánh đều cho thịt tơi xốp hòa cùng trứng.",
        "Đun nóng dầu ăn trong chảo, đổ hỗn hợp trứng thịt vào láng đều mặt chảo.",
        "Chiên lửa vừa đến khi mặt dưới vàng rộm thơm nức, khéo léo lật mặt chiên tiếp cho chín đều hai bên.",
        "Gấp đôi hoặc cắt miếng tam giác, thưởng thức nóng cùng cơm dẻo và đĩa rau luộc."
      ],
      "en": [
        "Beat eggs with fish sauce and cracked pepper until frothy.",
        "Whisk in minced pork and chopped scallions so meat is evenly dispersed.",
        "Heat oil in a skillet, pour in egg mixture, tilting to spread evenly.",
        "Cook over medium-low heat until bottom is golden and puffy; flip to finish.",
        "Slice into wedges and serve steaming hot with jasmine rice."
      ]
    },
    "region": "national",
    "diningType": [
      "home_cook"
    ]
  },
  {
    "id": "vn-tom-rim-thit",
    "title": {
      "vi": "Tôm Rim Thịt Ba Chỉ Mặn Ngọt",
      "en": "Caramelized Shrimp & Pork Belly"
    },
    "image": "https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=800&q=80",
    "category": {
      "vi": "Cơm Gia Đình",
      "en": "Home Cooking"
    },
    "mealType": [
      "lunch",
      "dinner"
    ],
    "dietaryTags": {
      "vi": [
        "Mặn ngọt hài hòa",
        "Tôm giòn vỏ",
        "Món kinh điển"
      ],
      "en": [
        "Sweet & Savory",
        "Crisp Shrimp",
        "Classic Favorite"
      ]
    },
    "time": "30 min",
    "servings": 4,
    "calories": 380,
    "protein": 26,
    "fat": 22,
    "carbs": 12,
    "servingSize": {
      "vi": "1 đĩa rim tiêu chuẩn (~200g)",
      "en": "1 plate (~200g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia (NIN)",
      "en": "National Institute of Nutrition (NIN)"
    },
    "recipeSource": {
      "vi": "Cơm Mẹ Nấu 3 Miền",
      "en": "Traditional Vietnamese Homestyle Cooking"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Tôm đồng hoặc tôm sú nhỏ cắt râu",
          "en": "Fresh wild shrimp trimmed"
        },
        "amount": "300g"
      },
      {
        "name": {
          "vi": "Thịt ba chỉ heo thái con chì",
          "en": "Pork belly cut into strips"
        },
        "amount": "250g"
      },
      {
        "name": {
          "vi": "Nước mắm, đường vàng, tiêu sọ, hành tỏi băm",
          "en": "Fish sauce, brown sugar, pepper, garlic & shallots"
        },
        "amount": "Gia vị"
      },
      {
        "name": {
          "vi": "Hành hoa cắt khúc",
          "en": "Scallions sliced"
        },
        "amount": "3 nhánh"
      }
    ],
    "instructions": {
      "vi": [
        "Xào thịt ba chỉ cho tứa mỡ và xém cạnh, vớt thịt ra đĩa riêng.",
        "Cho tôm vào chảo mỡ đảo lửa lớn đến khi tôm chuyển màu đỏ au và vỏ giòn rụm.",
        "Trút thịt lại vào chảo cùng hành tỏi băm phi thơm.",
        "Nêm nước mắm, đường và chút tiêu đảo đều trên lửa vừa cho nước sốt ngấm sâu vào tôm và thịt.",
        "Đun lửa lớn đảo nhanh tay đến khi nước kho cạn keo lại bao bọc từng con tôm bóng bẩy."
      ],
      "en": [
        "Pan-fry pork belly until fat renders and edges brown; set aside.",
        "Flash-fry shrimp in rendered pork fat on high until shells turn coral pink and crispy.",
        "Return pork to pan, add minced shallots and garlic to toast.",
        "Season with fish sauce, sugar, and pepper, simmering until deeply caramelized.",
        "Toss vigorously until sauce glazes the shrimp and pork with a mahogany sheen."
      ]
    },
    "region": "national",
    "diningType": [
      "home_cook"
    ]
  },
  {
    "id": "vn-thit-bam-chung-mam-tep",
    "title": {
      "vi": "Thịt Băm Chưng Mắm Tép Hàng Bè",
      "en": "Hanoi Braised Pork with Fermented Rice Shrimp Paste"
    },
    "image": "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=800&q=80",
    "category": {
      "vi": "Cơm Gia Đình",
      "en": "Home Cooking"
    },
    "mealType": [
      "lunch",
      "dinner"
    ],
    "dietaryTags": {
      "vi": [
        "Đặc sản Phố Cổ",
        "Tốn cơm vô đối",
        "Đậm đà"
      ],
      "en": [
        "Hanoi Specialty",
        "Rice Destroyer",
        "Umami Rich"
      ]
    },
    "time": "30 min",
    "servings": 4,
    "calories": 360,
    "protein": 24,
    "fat": 26,
    "carbs": 4,
    "servingSize": {
      "vi": "1 bát nhỏ (~150g)",
      "en": "1 small bowl (~150g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia (NIN)",
      "en": "National Institute of Nutrition (NIN)"
    },
    "recipeSource": {
      "vi": "Món Ăn Phố Cổ Hà Nội - Tinh Hoa Ẩm Thực Hàng Bè",
      "en": "Historic Hanoi Hang Be Culinary Heritage"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Thịt nạc vai xay lẫn mỡ",
          "en": "Minced pork shoulder with fat"
        },
        "amount": "400g"
      },
      {
        "name": {
          "vi": "Mắm tép Hàng Bè nguyên chất",
          "en": "Authentic fermented shrimp paste (mắm tép)"
        },
        "amount": "3 thìa canh"
      },
      {
        "name": {
          "vi": "Sả băm, hành khô, ớt sừng, đường",
          "en": "Minced lemongrass, shallots, chili, sugar"
        },
        "amount": "Gia vị chưng"
      }
    ],
    "instructions": {
      "vi": [
        "Phi thơm hành khô và sả băm với dầu ăn cho dậy mùi thơm nức.",
        "Cho thịt băm vào xào săn trên lửa lớn cho tơi hạt.",
        "Hòa mắm tép với chút đường và ớt băm, đổ vào chảo thịt đảo đều.",
        "Hạ lửa nhỏ liu riu chưng thịt trong 20 phút đến khi thịt chuyển màu nâu đỏ cánh gián đậm đà, mỡ trong veo.",
        "Múc mắm tép chưng thịt ra bát, ăn cùng cơm nóng và dưa leo rau sống giòn mát."
      ],
      "en": [
        "Sauté shallots and minced lemongrass until fragrant.",
        "Add minced pork, breaking up lumps over high heat until browned.",
        "Mix fermented baby shrimp paste with sugar and chili, pour into pork.",
        "Simmer over gentle flame for 20 minutes until the mixture turns deep mahogany and fragrant.",
        "Serve warm alongside hot steamed rice and crisp cucumber slices."
      ]
    },
    "region": "north",
    "diningType": [
      "home_cook"
    ]
  },
  {
    "id": "vn-bo-xao-can-toi",
    "title": {
      "vi": "Thịt Bò Xào Cần Tỏi",
      "en": "Stir-Fried Beef with Celery & Garlic"
    },
    "image": "https://images.unsplash.com/photo-1534939561126-855b8675edd7?auto=format&fit=crop&w=800&q=80",
    "category": {
      "vi": "Cơm Gia Đình",
      "en": "Home Cooking"
    },
    "mealType": [
      "lunch",
      "dinner"
    ],
    "dietaryTags": {
      "vi": [
        "Giàu sắt & đạm",
        "Thơm nồng cần tỏi",
        "Nhanh gọn"
      ],
      "en": [
        "Iron & Protein Rich",
        "Aromatic Celery",
        "Quick Stir-Fry"
      ]
    },
    "time": "15 min",
    "servings": 3,
    "calories": 290,
    "protein": 28,
    "fat": 14,
    "carbs": 8,
    "servingSize": {
      "vi": "1 đĩa xào nóng (~220g)",
      "en": "1 hot plate (~220g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia (NIN)",
      "en": "National Institute of Nutrition (NIN)"
    },
    "recipeSource": {
      "vi": "Cơm Gia Đình Miền Bắc",
      "en": "Northern Family Favorites"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Thịt thăn bò tươi thái lát mỏng",
          "en": "Beef tenderloin thinly sliced"
        },
        "amount": "300g"
      },
      {
        "name": {
          "vi": "Cần tây, tỏi tây cắt khúc",
          "en": "Celery & leeks cut into batons"
        },
        "amount": "200g"
      },
      {
        "name": {
          "vi": "Hành tây bổ múi cau & tỏi băm",
          "en": "Onion wedges & minced garlic"
        },
        "amount": "1 củ"
      },
      {
        "name": {
          "vi": "Dầu hào, nước mắm, tiêu sọ xay",
          "en": "Oyster sauce, fish sauce, cracked pepper"
        },
        "amount": "Gia vị"
      }
    ],
    "instructions": {
      "vi": [
        "Ướp thịt bò với tỏi băm, 1 thìa dầu hào, nước mắm và chút dầu ăn để thịt mềm mọng trong 15 phút.",
        "Đun chảo thật nóng với lửa lớn, cho tỏi băm vào phi thơm rồi trút bò vào xào nhanh tay trong 1-2 phút cho vừa chín tái rồi múc ra đĩa.",
        "Vẫn chảo đó, cho hành tây, cần tây và tỏi tây vào xào lửa lớn cho vừa chín tới giữ độ giòn xanh.",
        "Đổ đĩa thịt bò vào đảo bùng lên trong 30 giây cho hòa quyện hương vị.",
        "Rắc nhiều tiêu xay cay nồng, múc ra đĩa ăn ngay khi còn bốc khói nghi ngút."
      ],
      "en": [
        "Marinate sliced beef with garlic, oyster sauce, fish sauce, and a splash of oil for 15 mins.",
        "Heat wok until smoking, sear beef quickly over high heat for 1-2 minutes until medium-rare; set aside.",
        "In the same wok, flash-fry onions, celery, and leeks until crisp-tender.",
        "Return beef to wok, toss vigorously for 30 seconds to harmonize flavors.",
        "Finish with cracked black pepper and serve immediately steaming hot."
      ]
    },
    "region": "north",
    "diningType": [
      "home_cook"
    ]
  },
  {
    "id": "vn-canh-rau-ngot-thit-bam",
    "title": {
      "vi": "Canh Rau Ngót Nấu Thịt Băm",
      "en": "Katuk Leaf Soup with Minced Pork"
    },
    "image": "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=800&q=80",
    "category": {
      "vi": "Món Canh",
      "en": "Soup"
    },
    "mealType": [
      "lunch",
      "dinner"
    ],
    "dietaryTags": {
      "vi": [
        "Thanh nhiệt",
        "Lành tính",
        "Canh giải nhiệt",
        "Dồi dào vitamin"
      ],
      "en": [
        "Refreshing",
        "Detoxifying",
        "Vitamin Rich",
        "Comfort Soup"
      ]
    },
    "time": "15 min",
    "servings": 4,
    "calories": 120,
    "protein": 14,
    "fat": 4,
    "carbs": 7,
    "servingSize": {
      "vi": "1 tô canh lớn (~350g)",
      "en": "1 large bowl (~350g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia (NIN)",
      "en": "National Institute of Nutrition (NIN)"
    },
    "recipeSource": {
      "vi": "Cơm Canh Mùa Hè Xứ Bắc",
      "en": "Traditional Vietnamese Cooling Soups"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Rau ngót tươi tuốt lá vò nhẹ",
          "en": "Fresh katuk leaves (rau ngót) bruised"
        },
        "amount": "2 bó (300g)"
      },
      {
        "name": {
          "vi": "Thịt nạc vai heo băm nhỏ",
          "en": "Minced lean pork"
        },
        "amount": "150g"
      },
      {
        "name": {
          "vi": "Hành tím băm, nước mắm ngon, muối tinh",
          "en": "Minced shallots, fish sauce, salt"
        },
        "amount": "Vừa đủ"
      }
    ],
    "instructions": {
      "vi": [
        "Rau ngót tuốt lấy lá non, rửa sạch rồi dùng tay vò nhẹ để lá mềm và nước canh ngọt đậm.",
        "Phi thơm hành khô, cho thịt băm vào xào săn với chút nước mắm.",
        "Đổ 1 lít nước vào nồi đun sôi bùng lên, hớt sạch bọt.",
        "Cho rau ngót đã vò vào nồi, đun sôi lại trong 3-4 phút đến khi rau vừa chín mềm xanh mướt.",
        "Nêm nếm nước mắm cho vừa miệng rồi múc ra tô, dùng kèm cơm trắng và cà pháo muối giòn."
      ],
      "en": [
        "Strip katuk leaves, wash clean, and lightly crush leaves by hand to tenderize and release sweet flavor.",
        "Sauté minced shallots and minced pork with fish sauce until lightly browned.",
        "Pour in 1 liter of water, bring to a rolling boil, skimming scum.",
        "Add bruised katuk leaves, simmering for 3-4 minutes until tender yet vibrant green.",
        "Season with fish sauce to taste and serve with steamed rice."
      ]
    },
    "region": "north",
    "diningType": [
      "home_cook"
    ]
  },
  {
    "id": "vn-canh-cua-mong-toi",
    "title": {
      "vi": "Canh Cua Mồng Tơi Rau Đay Mướp Hương",
      "en": "Field Crab Soup with Malabar Spinach & Jute Leaves"
    },
    "image": "https://images.unsplash.com/photo-1574484284002-952d92456975?auto=format&fit=crop&w=800&q=80",
    "category": {
      "vi": "Món Canh",
      "en": "Soup"
    },
    "mealType": [
      "lunch",
      "dinner"
    ],
    "dietaryTags": {
      "vi": [
        "Thanh mát mùa hè",
        "Giàu canxi",
        "Hương vị đồng quê"
      ],
      "en": [
        "Cooling Summer Soup",
        "Calcium Rich",
        "Country Tradition"
      ]
    },
    "time": "25 min",
    "servings": 4,
    "calories": 150,
    "protein": 16,
    "fat": 5,
    "carbs": 9,
    "servingSize": {
      "vi": "1 tô canh tiêu chuẩn (~400g)",
      "en": "1 bowl (~400g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia (NIN)",
      "en": "National Institute of Nutrition (NIN)"
    },
    "recipeSource": {
      "vi": "Ẩm Thực Đồng Quê Bắc Bộ",
      "en": "Northern Countryside Heritage"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Cua đồng xay lọc lấy nước cốt",
          "en": "Field crab paste & strained broth"
        },
        "amount": "400g"
      },
      {
        "name": {
          "vi": "Rau mồng tơi & rau đay nhặt sạch thái nhỏ",
          "en": "Malabar spinach & jute leaves chopped"
        },
        "amount": "200g"
      },
      {
        "name": {
          "vi": "Mướp hương gọt vỏ thái vát",
          "en": "Fragrant sponge gourd sliced"
        },
        "amount": "1 quả"
      },
      {
        "name": {
          "vi": "Gia vị mắm muối, mắm tôm Bắc",
          "en": "Fish sauce, salt, Northern shrimp paste"
        },
        "amount": "Gia vị nêm"
      }
    ],
    "instructions": {
      "vi": [
        "Hòa nước cua với muối tinh, lọc sạch qua rây rồi đun lửa vừa, khuấy nhẹ cho riêu cua kết mảng nổi lên bề mặt.",
        "Gạt nhẹ mảng riêu cua sang một bên nồi.",
        "Thả mướp hương và rau đay, mồng tơi vào nấu chín tới trong 2-3 phút.",
        "Nêm chút nước mắm ngon hoặc mắm tôm cho dậy vị ngọt thanh đậm đà.",
        "Múc canh ra tô giữ nguyên mảng riêu cua bên trên, ăn cùng cà pháo muối giòn tan."
      ],
      "en": [
        "Stir crab broth with sea salt, bring gently to a simmer until delicate crab soufflé floats to top.",
        "Gently push crab raft to one side of the pot.",
        "Add sliced sponge gourd, Malabar spinach, and jute leaves; boil for 2-3 minutes.",
        "Season with fish sauce and a touch of shrimp paste for authentic rural flavor.",
        "Ladle into bowl keeping crab soufflé intact, enjoyed with pickled crunchy eggplants."
      ]
    },
    "region": "north",
    "diningType": [
      "home_cook"
    ]
  },
  {
    "id": "vn-canh-ca-chua-trung",
    "title": {
      "vi": "Canh Cà Chua Trứng (Canh Mây)",
      "en": "Tomato Egg Drop Soup (Canh Mây)"
    },
    "image": "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=800&q=80",
    "category": {
      "vi": "Món Canh",
      "en": "Soup"
    },
    "mealType": [
      "lunch",
      "dinner"
    ],
    "dietaryTags": {
      "vi": [
        "Nấu nhanh 10 phút",
        "Dễ ăn",
        "Ấm bụng",
        "Màu sắc bắt mắt"
      ],
      "en": [
        "10-Min Fast",
        "Comforting",
        "Vibrant Color",
        "Light Soup"
      ]
    },
    "time": "10 min",
    "servings": 3,
    "calories": 110,
    "protein": 7,
    "fat": 6,
    "carbs": 6,
    "servingSize": {
      "vi": "1 tô canh vừa (~300g)",
      "en": "1 medium bowl (~300g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia (NIN)",
      "en": "National Institute of Nutrition (NIN)"
    },
    "recipeSource": {
      "vi": "Cơm Gia Đình Nhanh Gọn",
      "en": "Everyday Quick Kitchen"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Trứng gà tươi đánh tan",
          "en": "Eggs beaten"
        },
        "amount": "2 quả"
      },
      {
        "name": {
          "vi": "Cà chua chín bổ múi cau",
          "en": "Ripe tomatoes cut into wedges"
        },
        "amount": "2 quả"
      },
      {
        "name": {
          "vi": "Hành hoa & rau mùi thái nhỏ",
          "en": "Scallions & fresh cilantro"
        },
        "amount": "1 nắm"
      },
      {
        "name": {
          "vi": "Hành tím băm, nước mắm, dầu ăn",
          "en": "Shallots, fish sauce, oil"
        },
        "amount": "Gia vị"
      }
    ],
    "instructions": {
      "vi": [
        "Phi thơm hành tím, cho cà chua vào xào chín mềm tạo màu nước canh đỏ cam đẹp mắt.",
        "Đổ 800ml nước vào đun sôi bùng lên, nêm nếm nước mắm và gia vị vừa miệng.",
        "Hạ lửa vừa, từ từ rót trứng đã đánh tan vào nồi, dùng đũa khuấy nhẹ một chiều để trứng tạo thành những dải mây bồng bềnh mềm mại.",
        "Rắc hành hoa và rau mùi thái nhỏ rồi tắt bếp ngay tránh làm trứng bị nát.",
        "Múc canh ra tô thưởng thức nóng, vị chua thanh dịu ngọt tự nhiên."
      ],
      "en": [
        "Sauté shallots with tomato wedges until soft to extract rich orange-red color.",
        "Add 800ml water and bring to rolling boil, seasoning with fish sauce.",
        "Lower heat, slowly swirl in beaten eggs with chopsticks to create delicate cloud-like ribbons.",
        "Top with fresh scallions and cilantro, removing from heat immediately.",
        "Serve steaming hot with a delicate sweet-sour balance."
      ]
    },
    "region": "national",
    "diningType": [
      "home_cook"
    ]
  },
  {
    "id": "vn-canh-kho-qua-nhoi-thit",
    "title": {
      "vi": "Canh Khổ Qua Nhồi Thịt Thanh Nhiệt",
      "en": "Stuffed Bitter Melon Soup with Minced Pork"
    },
    "image": "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=800&q=80",
    "category": {
      "vi": "Món Canh",
      "en": "Soup"
    },
    "mealType": [
      "lunch",
      "dinner"
    ],
    "dietaryTags": {
      "vi": [
        "Món Tết Nam Bộ",
        "Thanh lọc cơ thể",
        "Đắng nhẹ hậu ngọt"
      ],
      "en": [
        "New Year Tradition",
        "Cleansing",
        "Bittersweet Comfort"
      ]
    },
    "time": "40 min",
    "servings": 4,
    "calories": 180,
    "protein": 18,
    "fat": 8,
    "carbs": 8,
    "servingSize": {
      "vi": "1 quả nhồi thịt kèm nước canh (~300g)",
      "en": "1 stuffed melon with broth (~300g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia (NIN)",
      "en": "National Institute of Nutrition (NIN)"
    },
    "recipeSource": {
      "vi": "Ẩm Thực Nam Bộ - Ý Nghĩa Xua Đi Khổ Cực",
      "en": "Southern Vietnamese Heritage"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Trái khổ qua (mướp đắng) móc ruột",
          "en": "Bitter melons hollowed"
        },
        "amount": "3 trái"
      },
      {
        "name": {
          "vi": "Thịt nạc vai heo băm nhuyễn",
          "en": "Minced pork shoulder"
        },
        "amount": "250g"
      },
      {
        "name": {
          "vi": "Mộc nhĩ ngâm nở thái nhỏ",
          "en": "Wood-ear mushrooms"
        },
        "amount": "20g"
      },
      {
        "name": {
          "vi": "Hành hoa, ngò rí, nước mắm, tiêu",
          "en": "Scallions, cilantro, fish sauce, pepper"
        },
        "amount": "Gia vị"
      }
    ],
    "instructions": {
      "vi": [
        "Khổ qua rạch một đường ngắn moi sạch ruột và hạt, rửa sạch.",
        "Trộn thịt băm với mộc nhĩ, hành tím, tiêu sọ, nhồi chặt vào ruột trái khổ qua, dùng lá hành chần buộc nhẹ.",
        "Đun sôi 1.2 lít nước dùng xương, thả từng trái khổ qua nhồi thịt vào nồi.",
        "Hầm lửa nhỏ trong 25-30 phút không đậy nắp để nước dùng trong và khổ qua giữ màu xanh tươi.",
        "Nêm nước mắm cho vừa vị ngọt thanh, múc ra tô rắc ngò rí và tiêu xay thơm nức."
      ],
      "en": [
        "Slit bitter melons lengthwise and scoop out pith and seeds cleanly.",
        "Combine minced pork, wood-ear, shallots, and pepper; stuff firmly into melons and tie with blanched scallion ribbons.",
        "Bring 1.2L broth to a gentle simmer, gently lower stuffed melons in.",
        "Simmer uncovered on low heat for 25-30 minutes so broth stays crystal clear.",
        "Season with fish sauce, ladle into bowls, garnished with cilantro and white pepper."
      ]
    },
    "region": "south",
    "diningType": [
      "home_cook"
    ]
  },
  {
    "id": "vn-canh-bi-dao-suon",
    "title": {
      "vi": "Canh Bí Đao Nấu Sườn Non",
      "en": "Winter Melon Soup with Pork Spare Ribs"
    },
    "image": "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=800&q=80",
    "category": {
      "vi": "Món Canh",
      "en": "Soup"
    },
    "mealType": [
      "lunch",
      "dinner"
    ],
    "dietaryTags": {
      "vi": [
        "Thanh mát",
        "Giải nhiệt",
        "Nước dùng trong ngọt"
      ],
      "en": [
        "Cooling",
        "Sweet Broth",
        "Tender Ribs"
      ]
    },
    "time": "40 min",
    "servings": 4,
    "calories": 240,
    "protein": 20,
    "fat": 12,
    "carbs": 10,
    "servingSize": {
      "vi": "1 tô canh lớn (~400g)",
      "en": "1 large bowl (~400g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia (NIN)",
      "en": "National Institute of Nutrition (NIN)"
    },
    "recipeSource": {
      "vi": "Cơm Gia Đình 3 Miền",
      "en": "Vietnamese Homestyle Soups"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Sườn non heo chặt khúc nhỏ",
          "en": "Pork spare ribs cut small"
        },
        "amount": "400g"
      },
      {
        "name": {
          "vi": "Bí đao gọt vỏ bỏ ruột cắt miếng dày",
          "en": "Winter melon cut into chunks"
        },
        "amount": "400g"
      },
      {
        "name": {
          "vi": "Hành hoa & ngò rí thái nhỏ",
          "en": "Chopped scallions & cilantro"
        },
        "amount": "1 nắm"
      },
      {
        "name": {
          "vi": "Gia vị mắm muối, hạt tiêu",
          "en": "Fish sauce, salt, pepper"
        },
        "amount": "Gia vị"
      }
    ],
    "instructions": {
      "vi": [
        "Chần sườn qua nước sôi khử sạch bọt bẩn, rửa sạch.",
        "Ninh sườn với 1.2 lít nước trên lửa nhỏ trong 25 phút cho sườn mềm nhừ và ngọt nước cốt, vớt bọt liên tục.",
        "Cho bí đao vào nấu sôi tiếp trong 5-7 phút đến khi bí trong mềm vừa tới.",
        "Nêm nước mắm ngon và chút muối cho thanh ngọt.",
        "Múc canh ra tô, rắc hành hoa ngò rí và chút tiêu sọ xay cay thơm."
      ],
      "en": [
        "Parboil ribs to cleanse, then rinse.",
        "Simmer ribs in 1.2L water over low heat for 25 mins until fork-tender, skimming foam.",
        "Add winter melon chunks and cook for 5-7 minutes until translucent and tender.",
        "Season with fish sauce for natural savoriness.",
        "Garnish with fresh scallions, cilantro, and cracked pepper."
      ]
    },
    "region": "national",
    "diningType": [
      "home_cook"
    ]
  },
  {
    "id": "vn-rau-muong-xao-toi",
    "title": {
      "vi": "Rau Muống Xào Tỏi Xanh Mướt Giòn Rụm",
      "en": "Stir-Fried Morning Glory with Crispy Garlic"
    },
    "image": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
    "category": {
      "vi": "Rau Củ",
      "en": "Vegetables"
    },
    "mealType": [
      "lunch",
      "dinner"
    ],
    "dietaryTags": {
      "vi": [
        "Món quốc dân",
        "Xanh mướt giòn sần sật",
        "Thơm nức tỏi"
      ],
      "en": [
        "National Dish",
        "Vibrant Green & Crunchy",
        "Fragrant Garlic"
      ]
    },
    "time": "10 min",
    "servings": 4,
    "calories": 95,
    "protein": 4,
    "fat": 6,
    "carbs": 7,
    "servingSize": {
      "vi": "1 đĩa rau xào (~200g)",
      "en": "1 plate (~200g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia (NIN)",
      "en": "National Institute of Nutrition (NIN)"
    },
    "recipeSource": {
      "vi": "Ẩm Thực Cơm Nhà Việt Nam",
      "en": "Everyday Vietnamese Home Tables"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Rau muống non nhặt sạch ngọn",
          "en": "Fresh tender morning glory shoots"
        },
        "amount": "1 bó (400g)"
      },
      {
        "name": {
          "vi": "Tỏi tươi bóc vỏ đập dập",
          "en": "Fresh garlic cloves crushed"
        },
        "amount": "2 củ"
      },
      {
        "name": {
          "vi": "Dầu ăn, nước mắm ngon, hạt nêm",
          "en": "Cooking oil, fish sauce, seasoning"
        },
        "amount": "Gia vị"
      }
    ],
    "instructions": {
      "vi": [
        "Đun sôi nồi nước lớn với 1 thìa muối, chần rau muống trong 30 giây rồi vớt ra ngâm ngay vào thau nước đá lạnh để rau giòn và giữ màu xanh ngọc.",
        "Đun nóng chảo lớn với dầu ăn, phi thơm 2/3 lượng tỏi đập dập đến khi vàng thơm.",
        "Trút rau muống vào xào lửa lớn đảo nhanh tay liên tục.",
        "Nêm nước mắm ngon và chút hạt nêm, cho nốt phần tỏi tươi còn lại vào đảo đều trong 1 phút.",
        "Gắp rau ra đĩa ăn nóng giòn sần sật, có thể chấm kèm nước tương tỏi ớt."
      ],
      "en": [
        "Blanch morning glory in salted boiling water for 30 seconds; plunge into an ice bath to lock in crispness and vivid green hue.",
        "Heat oil in wok, sauté two-thirds of the crushed garlic until fragrant and lightly golden.",
        "Toss in morning glory over high heat, stirring rapidly.",
        "Season with premium fish sauce and toss in remaining raw garlic for aroma punch.",
        "Plate immediately for ultra-crunchy, vibrant greens."
      ]
    },
    "region": "national",
    "diningType": [
      "home_cook"
    ]
  },
  {
    "id": "vn-kho-quet-rau-luoc",
    "title": {
      "vi": "Rau Củ Luộc Chấm Kho Quẹt Tóp Mỡ Tôm Khô",
      "en": "Steamed Vegetables with Caramelized Pork Rind & Dried Shrimp Dip (Kho Quẹt)"
    },
    "image": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
    "category": {
      "vi": "Cơm Gia Đình",
      "en": "Home Cooking"
    },
    "mealType": [
      "lunch",
      "dinner"
    ],
    "dietaryTags": {
      "vi": [
        "Đặc sản Miền Tây",
        "Thanh mát nhiều rau",
        "Tóp mỡ giòn rụm"
      ],
      "en": [
        "Mekong Delta Specialty",
        "Veggie Rich",
        "Crispy Pork Rinds Dip"
      ]
    },
    "time": "25 min",
    "servings": 4,
    "calories": 290,
    "protein": 16,
    "fat": 18,
    "carbs": 16,
    "servingSize": {
      "vi": "Mâm rau củ kèm niêu kho quẹt (~400g)",
      "en": "Platter of veggies with dip (~400g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia (NIN)",
      "en": "National Institute of Nutrition (NIN)"
    },
    "recipeSource": {
      "vi": "Ẩm Thực Dân Dã Nam Bộ",
      "en": "Rustic Southern Vietnamese Cuisine"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Mỡ heo thái hạt lựu rán lấy tóp mỡ giòn",
          "en": "Pork fat diced for crispy rinds"
        },
        "amount": "200g"
      },
      {
        "name": {
          "vi": "Tôm khô ngâm mềm",
          "en": "Dried small shrimp soaked"
        },
        "amount": "50g"
      },
      {
        "name": {
          "vi": "Nước mắm ngon & đường vàng",
          "en": "Fish sauce & sugar"
        },
        "amount": "Tỉ lệ 1:1"
      },
      {
        "name": {
          "vi": "Rau củ luộc (bông cải, bầu, đậu bắp, cà rốt, cải xanh)",
          "en": "Vegetables (broccoli, gourd, okra, carrots)"
        },
        "amount": "500g"
      },
      {
        "name": {
          "vi": "Ớt hiểm, tiêu xanh nguyên chùm",
          "en": "Fresh chilies & green peppercorn clusters"
        },
        "amount": "Vừa đủ"
      }
    ],
    "instructions": {
      "vi": [
        "Rán mỡ heo trên chảo nhỏ đến khi tóp mỡ vàng giòn rụm, vớt tóp mỡ ra riêng.",
        "Dùng tộ đất, phi thơm hành tỏi với mỡ heo, cho tôm khô vào xào săn thơm lừng.",
        "Hòa tan nước mắm với đường theo tỉ lệ vàng 1 mắm - 1 đường, đổ vào tộ đất đun nhỏ lửa liu riu cho nước sốt sánh kẹo lại.",
        "Trút tóp mỡ giòn, tiêu xanh và ớt hiểm vào đun thêm 2 phút rồi tắt bếp.",
        "Luộc chín tới các loại rau củ trong nước sôi có chút muối, vớt ra đĩa chấm cùng niêu kho quẹt béo ngậy mặn ngọt đậm đà."
      ],
      "en": [
        "Fry pork fat until crisp golden cracklings form; set aside.",
        "In a small clay pot, sauté shallots and garlic in pork fat, add dried shrimp.",
        "Whisk fish sauce and brown sugar 1:1, pour into clay pot and simmer until reduced to a rich, sticky mahogany glaze.",
        "Stir in crispy pork rinds, fresh green peppercorns, and whole bird-eye chilies.",
        "Blanch assorted vegetables until tender-crisp; serve alongside bubbling savory clay pot dip."
      ]
    },
    "region": "south",
    "diningType": [
      "home_cook",
      "eat_out"
    ]
  },
  {
    "id": "vn-thit-luoc-ca-phao",
    "title": {
      "vi": "Thịt Ba Chỉ Luộc Cà Pháo Mắm Tôm",
      "en": "Boiled Pork Belly with Pickled Eggplants & Shrimp Paste"
    },
    "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
    "category": {
      "vi": "Cơm Gia Đình",
      "en": "Home Cooking"
    },
    "mealType": [
      "lunch",
      "dinner"
    ],
    "dietaryTags": {
      "vi": [
        "Mâm cơm kinh điển",
        "Cà giòn tan",
        "Mắm tôm dậy vị"
      ],
      "en": [
        "Classic Northern Meal",
        "Crunchy Eggplants",
        "Piquant Shrimp Paste"
      ]
    },
    "time": "25 min",
    "servings": 4,
    "calories": 380,
    "protein": 22,
    "fat": 32,
    "carbs": 2,
    "servingSize": {
      "vi": "1 đĩa thịt luộc kèm cà (~200g)",
      "en": "1 plate (~200g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia (NIN)",
      "en": "National Institute of Nutrition (NIN)"
    },
    "recipeSource": {
      "vi": "Hương Vị Đồng Quê Miền Bắc",
      "en": "Northern Rural Homestyle Meals"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Thịt ba chỉ rút sườn tươi ngon",
          "en": "Pork belly block"
        },
        "amount": "500g"
      },
      {
        "name": {
          "vi": "Cà pháo muối giòn trắng ngần",
          "en": "Pickled crisp white eggplants"
        },
        "amount": "1 bát nhỏ"
      },
      {
        "name": {
          "vi": "Mắm tôm Bắc hảo hạng đánh sủi bọt với chanh ớt",
          "en": "Northern shrimp paste with lime & chili"
        },
        "amount": "1 bát chấm"
      },
      {
        "name": {
          "vi": "Hành tím, gừng, giấm thanh (luộc thịt)",
          "en": "Shallots, ginger, vinegar"
        },
        "amount": "Gia vị luộc"
      }
    ],
    "instructions": {
      "vi": [
        "Rửa sạch thịt ba chỉ, cho vào nồi nước lạnh cùng vài nhánh hành tím đập dập, lát gừng và 1 thìa giấm.",
        "Luộc thịt trong 15-20 phút đến khi thịt vừa chín tới, chọc đũa không còn tiết nước đỏ.",
        "Vớt thịt ngâm ngay vào thau nước đá lạnh trong 5 phút để thịt săn chắc, bì giòn và không bị thâm xỉn màu.",
        "Thái thịt ba chỉ thành từng lát mỏng đều tay bày ra đĩa.",
        "Pha mắm tôm: đánh mắm tôm cùng nước cốt chanh, đường và ớt tươi đến khi sủi bọt trắng bông, ăn kèm thịt luộc và cà pháo giòn rụm."
      ],
      "en": [
        "Submerge pork belly in cold water with crushed shallots, ginger, and a splash of vinegar.",
        "Simmer for 15-20 minutes until just cooked through.",
        "Plunge pork directly into an ice bath for 5 minutes so fat firms up translucently.",
        "Thinly slice pork belly and arrange onto plate.",
        "Whisk shrimp paste vigorously with fresh lime juice, sugar, and chilies until frothy; serve with crunchy pickled eggplants."
      ]
    },
    "region": "north",
    "diningType": [
      "home_cook"
    ]
  },
  {
    "id": "vn-bun-dau-mam-tom",
    "title": {
      "vi": "Bún Đậu Mắm Tôm Mẹt Thập Cẩm Hà Nội",
      "en": "Hanoi Fried Tofu & Rice Vermicelli Platter with Shrimp Paste"
    },
    "image": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
    "category": {
      "vi": "Món Cuốn & Trộn",
      "en": "Platters"
    },
    "mealType": [
      "lunch",
      "dinner"
    ],
    "dietaryTags": {
      "vi": [
        "Đặc sản Hà Nội",
        "Đậu rán phồng giòn rụm",
        "Chả cốm dẻo thơm"
      ],
      "en": [
        "Hanoi Famous Street Food",
        "Crispy Tofu",
        "Fragrant Green Rice Patties"
      ]
    },
    "time": "30 min",
    "servings": 3,
    "calories": 560,
    "protein": 28,
    "fat": 26,
    "carbs": 54,
    "servingSize": {
      "vi": "1 mẹt thập cẩm (~400g)",
      "en": "1 full platter (~400g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia (NIN)",
      "en": "National Institute of Nutrition (NIN)"
    },
    "recipeSource": {
      "vi": "Ẩm Thực Đường Phố Hà Nội - Tinh Hoa Mẹt Bún Đậu",
      "en": "Hanoi Authentic Street Food Archives"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Bún lá (bún nắm cắt miếng vuông)",
          "en": "Pressed rice noodle sheets cut into squares"
        },
        "amount": "400g"
      },
      {
        "name": {
          "vi": "Đậu phụ làng Mơ rán phồng vàng giòn",
          "en": "Mo Village fresh tofu fried crispy"
        },
        "amount": "4 bìa"
      },
      {
        "name": {
          "vi": "Chả cốm Hà Nội chiên vàng dẻo quánh",
          "en": "Green sticky rice pork patties"
        },
        "amount": "200g"
      },
      {
        "name": {
          "vi": "Thịt bắp chân giò luộc thái mỏng",
          "en": "Boiled pork shank sliced thin"
        },
        "amount": "200g"
      },
      {
        "name": {
          "vi": "Nem rán giòn rụm hoặc dồi sụn",
          "en": "Crispy spring rolls or grilled sausage"
        },
        "amount": "150g"
      },
      {
        "name": {
          "vi": "Mắm tôm Thanh Hóa đánh sủi bọt tắc đường",
          "en": "Whisked frothy shrimp paste with calamansi"
        },
        "amount": "1 bát"
      },
      {
        "name": {
          "vi": "Rau kinh giới, tía tô, dưa leo tươi giòn",
          "en": "Vietnamese balm, perilla, crisp cucumber"
        },
        "amount": "200g"
      }
    ],
    "instructions": {
      "vi": [
        "Cắt đậu phụ thành miếng vuông, chiên trong chảo dầu nóng ngập đến khi vỏ ngoài vàng ruộm giòn tan mà bên trong vẫn mềm béo ngậy.",
        "Chiên chả cốm vàng ruộm hai mặt, thái lát xéo vừa ăn.",
        "Luộc chín bắp giò heo, ngâm nước đá rồi thái lát mỏng.",
        "Bày bún lá cắt miếng, đậu rán nóng hổi, chả cốm, thịt chân giò, dưa leo và rau kinh giới lên mẹt tre lót lá chuối xanh.",
        "Pha mắm tôm với nước cốt quất (tắc), đường, chút rượu trắng và ớt băm, rưới thêm thìa dầu rán đậu đang sôi sùng sục vào rồi đánh thật mạnh tay đến khi bọt mắm bông xốp thơm lừng."
      ],
      "en": [
        "Deep-fry tofu cubes until shells are blistered and crunchy while interior remains custardy.",
        "Pan-fry green rice patties until golden; slice diagonally.",
        "Simmer pork shank, cool in ice water, and slice thin.",
        "Arrange pressed noodles, hot fried tofu, green rice patties, sliced pork, cucumber, and fresh perilla on a banana-leaf platter.",
        "Whisk fermented shrimp paste with calamansi juice, sugar, chili, and a ladle of sizzling hot frying oil until thick and foamy."
      ]
    },
    "region": "north",
    "diningType": [
      "eat_out"
    ]
  },
  {
    "id": "vn-bun-thit-nuong",
    "title": {
      "vi": "Bún Thịt Nướng Chả Giò Sài Gòn",
      "en": "Saigon Grilled Pork & Crispy Spring Roll Noodle Bowl"
    },
    "image": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
    "category": {
      "vi": "Món Trộn",
      "en": "Dry Noodles"
    },
    "mealType": [
      "lunch",
      "dinner"
    ],
    "dietaryTags": {
      "vi": [
        "Đặc sản Nam Bộ",
        "Thịt nướng thơm lừng",
        "Mát lành tươi ngon"
      ],
      "en": [
        "Southern Classic",
        "Charbroiled Pork",
        "Fresh Herb Salad Bowl"
      ]
    },
    "time": "40 min",
    "servings": 4,
    "calories": 520,
    "protein": 26,
    "fat": 20,
    "carbs": 62,
    "servingSize": {
      "vi": "1 tô bún đầy đặn (~450g)",
      "en": "1 full noodle bowl (~450g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia (NIN)",
      "en": "National Institute of Nutrition (NIN)"
    },
    "recipeSource": {
      "vi": "Văn Hóa Ẩm Thực Nam Bộ - Bún Thịt Nướng Sài Gòn",
      "en": "Southern Vietnamese Culinary Traditions"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Bún tươi sợi nhỏ",
          "en": "Thin vermicelli rice noodles"
        },
        "amount": "500g"
      },
      {
        "name": {
          "vi": "Thịt nạc vai hoặc ba chỉ heo ướp sả nướng",
          "en": "Pork marinated in lemongrass & grilled"
        },
        "amount": "400g"
      },
      {
        "name": {
          "vi": "Chả giò chiên giòn rụm",
          "en": "Crispy fried spring rolls"
        },
        "amount": "4 cuốn"
      },
      {
        "name": {
          "vi": "Mỡ hành lá béo ngậy & đậu phộng rang giã dập",
          "en": "Scallion oil & crushed roasted peanuts"
        },
        "amount": "Vừa đủ"
      },
      {
        "name": {
          "vi": "Đồ chua cà rốt củ cải & rau sống tươi non",
          "en": "Pickled daikon/carrots & fresh herb salad"
        },
        "amount": "200g"
      },
      {
        "name": {
          "vi": "Nước mắm chua ngọt pha tỏi ớt",
          "en": "Sweet-sour garlic chili fish sauce"
        },
        "amount": "1 bát"
      }
    ],
    "instructions": {
      "vi": [
        "Ướp thịt heo với sả băm, tỏi băm, mật ong, nước mắm, tiêu và dầu hào trong 30 phút.",
        "Nướng thịt trên than hoa đỏ rực đến khi xém cạnh, thơm lừng mùi mỡ sả.",
        "Chiên giòn chả giò, cắt làm đôi hoặc làm ba.",
        "Cho rau sống thái nhỏ và giá đỗ vào tô, xếp bún tươi lên trên, đặt thịt nướng thơm phức và chả giò giòn rụm xung quanh.",
        "Rưới mỡ hành bóng mướt, rắc đậu phộng rang và thêm gắp đồ chua.",
        "Chan nước mắm chua ngọt thanh tao vào tô rồi trộn đều thưởng thức."
      ],
      "en": [
        "Marinate pork with minced lemongrass, garlic, honey, fish sauce, and oyster sauce for 30 mins.",
        "Grill over glowing coals until caramelized with charred edges.",
        "Deep-fry spring rolls until crispy; cut into pieces.",
        "Layer shredded fresh herbs and bean sprouts in bowl, top with vermicelli, charred pork, and spring rolls.",
        "Drizzle warm scallion oil, scatter crushed peanuts, and add tangy pickles.",
        "Pour sweet-sour garlic fish sauce over and toss thoroughly."
      ]
    },
    "region": "south",
    "diningType": [
      "eat_out"
    ]
  },
  {
    "id": "vn-bun-oc-ha-noi",
    "title": {
      "vi": "Bún Ốc Nguội Giấm Bỗng Cổ Truyền Hà Nội",
      "en": "Traditional Hanoi Snails Noodle Soup with Fermented Rice Broth"
    },
    "image": "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=800&q=80",
    "category": {
      "vi": "Món Nước",
      "en": "Noodle Soup"
    },
    "mealType": [
      "breakfast",
      "lunch"
    ],
    "dietaryTags": {
      "vi": [
        "Di sản Hà Nội",
        "Ốc giòn sần sật",
        "Giấm bỗng chua dịu thanh tao"
      ],
      "en": [
        "Hanoi Heritage",
        "Crispy Snails",
        "Tangy Wine Broth"
      ]
    },
    "time": "45 min",
    "servings": 4,
    "calories": 370,
    "protein": 22,
    "fat": 8,
    "carbs": 52,
    "servingSize": {
      "vi": "1 tô tiêu chuẩn (~550g)",
      "en": "1 standard bowl (~550g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia (NIN)",
      "en": "National Institute of Nutrition (NIN)"
    },
    "recipeSource": {
      "vi": "Tinh Hoa Ẩm Thực Phố Cổ Hà Nội",
      "en": "Historic Hanoi Culinary Arts"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Ốc nhồi hoặc ốc mít béo múp ngâm sạch luộc chín",
          "en": "Fresh river snails boiled & shucked"
        },
        "amount": "500g thịt ốc"
      },
      {
        "name": {
          "vi": "Bún đồng tiền hoặc bún sợi nhỏ tươi",
          "en": "Fine rice vermicelli noodles"
        },
        "amount": "500g"
      },
      {
        "name": {
          "vi": "Nước luộc ốc trong ngọt & giấm bỗng nếp",
          "en": "Clear snail broth & fermented rice wine vinegar"
        },
        "amount": "1 lít"
      },
      {
        "name": {
          "vi": "Cà chua chín, dầu màu điều, ớt chưng cay nồng",
          "en": "Ripe tomatoes, annatto oil, roasted chili oil"
        },
        "amount": "Vừa đủ"
      },
      {
        "name": {
          "vi": "Rau tía tô, hành hoa, hoa chuối chẻ",
          "en": "Perilla leaves, scallions, split banana blossoms"
        },
        "amount": "150g"
      }
    ],
    "instructions": {
      "vi": [
        "Ốc ngâm nước vo gạo và ớt hiểm cho nhả sạch nhớt cát, luộc vừa chín tới, khêu lấy thịt ốc bỏ ruột bẩn.",
        "Lọc nước luộc ốc thật trong qua khăn sạch.",
        "Phi thơm hành khô với dầu điều, cho cà chua vào xào mềm rồi trút vào nồi nước luộc ốc.",
        "Đun sôi nước dùng, nêm giấm bỗng nếp thơm dịu, nước mắm ngon và chút muối cho thanh chua ngọt dịu.",
        "Trần bún xếp vào tô, đặt thịt ốc giòn sần sật lên mặt, rắc nhiều rau tía tô thái sợi và chan nước dùng sôi sùng sục, thêm thìa ớt chưng cay xé lưỡi."
      ],
      "en": [
        "Soak river snails in rice water with chilies, boil until tender, extract crunchy snail meat.",
        "Strain snail broth through fine cloth until crystal clear.",
        "Sauté shallots and tomatoes in annatto oil, add to clear snail broth.",
        "Simmer with fragrant fermented rice wine vinegar and fish sauce for a delicate sour note.",
        "Assemble vermicelli in bowls, top with crisp snail meat, shredded perilla leaves, ladle piping hot broth over with fiery roasted chili oil."
      ]
    },
    "region": "north",
    "diningType": [
      "eat_out"
    ]
  },
  {
    "id": "vn-banh-canh-cua",
    "title": {
      "vi": "Bánh Canh Cua Giò Heo Nước Dùng Sệt",
      "en": "Thick Tapioca Noodle Soup with Fresh Crab Meat"
    },
    "image": "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?auto=format&fit=crop&w=800&q=80",
    "category": {
      "vi": "Món Nước",
      "en": "Noodle Soup"
    },
    "mealType": [
      "lunch",
      "dinner"
    ],
    "dietaryTags": {
      "vi": [
        "Nước dùng sền sệt",
        "Thịt cua ngọt lịm",
        "Sợi bánh canh dai dẻo"
      ],
      "en": [
        "Velvety Broth",
        "Sweet Crab Meat",
        "Chewy Tapioca Noodles"
      ]
    },
    "time": "50 min",
    "servings": 4,
    "calories": 510,
    "protein": 30,
    "fat": 16,
    "carbs": 62,
    "servingSize": {
      "vi": "1 tô đầy đủ (~550g)",
      "en": "1 full bowl (~550g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia (NIN)",
      "en": "National Institute of Nutrition (NIN)"
    },
    "recipeSource": {
      "vi": "Ẩm Thực Sài Gòn Chợ Lớn",
      "en": "Saigon Cho Lon Famous Soups"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Sợi bánh canh bột gạo pha bột lọc dai trong",
          "en": "Thick chewy tapioca & rice noodles"
        },
        "amount": "500g"
      },
      {
        "name": {
          "vi": "Thịt cua biển tươi gỡ sẵn",
          "en": "Fresh sea crab meat"
        },
        "amount": "250g"
      },
      {
        "name": {
          "vi": "Móng giò heo luộc chín mềm & trứng cút",
          "en": "Pork hock simmered tender & quail eggs"
        },
        "amount": "300g"
      },
      {
        "name": {
          "vi": "Nước dùng ninh xương heo ngọt lịm",
          "en": "Rich pork bone broth"
        },
        "amount": "1.5 lít"
      },
      {
        "name": {
          "vi": "Bột năng pha loãng tạo độ sánh sệt",
          "en": "Tapioca starch slurry for thick broth"
        },
        "amount": "3 thìa"
      },
      {
        "name": {
          "vi": "Hành hoa, ngò rí, tiêu sọ, quẩy giòn",
          "en": "Scallions, cilantro, pepper, crispy crullers"
        },
        "amount": "Ăn kèm"
      }
    ],
    "instructions": {
      "vi": [
        "Xào sơ thịt cua với hành tím phi thơm và dầu màu điều cho dậy mùi thơm và màu vàng cam óng ánh.",
        "Đun sôi nước dùng xương heo cùng móng giò và trứng cút.",
        "Từ từ rót bột năng pha loãng vào nồi nước dùng, khuấy đều tay đến khi nước dùng chuyển sang dạng sánh sệt mượt mà.",
        "Trần sợi bánh canh thả trực tiếp vào nồi nước súp cho ngấm đều gia vị đậm đà.",
        "Múc bánh canh và nước dùng sánh đặc ra tô, đặt thịt cua xào, khoanh giò heo, trứng cút lên trên.",
        "Rắc nhiều tiêu sọ và hành ngò, ăn nóng kèm bánh quẩy giòn tan."
      ],
      "en": [
        "Sauté crab meat in shallot oil and annatto until intensely aromatic and vibrant orange.",
        "Bring pork bone broth to a boil with tender pork hocks and quail eggs.",
        "Gradually swirl in tapioca starch slurry until the broth transforms into a silky, velvety gravy.",
        "Simmer thick noodles directly in broth to absorb rich flavors.",
        "Ladle into bowls with sweet crab meat, tender pork hock, and quail eggs.",
        "Garnish with black pepper, scallions, and serve with crispy crullers."
      ]
    },
    "region": "south",
    "diningType": [
      "eat_out"
    ]
  },
  {
    "id": "vn-com-chien-dua-bo",
    "title": {
      "vi": "Cơm Rang Dưa Bò Phố Cổ Hà Nội",
      "en": "Hanoi Fried Rice with Pickled Mustard Greens & Beef"
    },
    "image": "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=800&q=80",
    "category": {
      "vi": "Cơm & Xôi",
      "en": "Rice Dishes"
    },
    "mealType": [
      "lunch",
      "dinner"
    ],
    "dietaryTags": {
      "vi": [
        "Đặc sản đêm Hà Nội",
        "Cơm tơi giòn",
        "Dưa chua giòn sần sật"
      ],
      "en": [
        "Hanoi Late Night Classic",
        "Crispy Grains",
        "Tangy Pickled Greens"
      ]
    },
    "time": "25 min",
    "servings": 3,
    "calories": 580,
    "protein": 26,
    "fat": 20,
    "carbs": 74,
    "servingSize": {
      "vi": "1 đĩa cơm rang đầy đặn (~350g)",
      "en": "1 plate (~350g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia (NIN)",
      "en": "National Institute of Nutrition (NIN)"
    },
    "recipeSource": {
      "vi": "Ẩm Thực Đêm Phố Cổ Mã Mây Hà Nội",
      "en": "Historic Hanoi Street Food Archives"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Cơm nguội nấu hơi khô ráo hạt",
          "en": "Cooked rice (day-old, dry)"
        },
        "amount": "3 bát đầy"
      },
      {
        "name": {
          "vi": "Thịt bắp bò thái mỏng ướp tỏi",
          "en": "Beef shank thinly sliced with garlic"
        },
        "amount": "250g"
      },
      {
        "name": {
          "vi": "Dưa cải bẹ muối chua giòn vắt ráo",
          "en": "Pickled mustard greens squeezed dry"
        },
        "amount": "150g"
      },
      {
        "name": {
          "vi": "Trứng gà tạo màu vàng ươm cho cơm",
          "en": "Eggs for golden grains"
        },
        "amount": "2 quả"
      },
      {
        "name": {
          "vi": "Tỏi băm, nước tương cốt, tiêu xay",
          "en": "Garlic, soy sauce, black pepper"
        },
        "amount": "Gia vị"
      }
    ],
    "instructions": {
      "vi": [
        "Trộn cơm nguội với 2 lòng đỏ trứng gà để từng hạt cơm được bao bọc lớp áo vàng óng.",
        "Đun chảo nóng lửa to, xào thịt bò với tỏi vừa chín tới rồi trút dưa chua vào đảo nhanh tay, múc ra đĩa riêng.",
        "Đổ cơm vào chảo rang lửa lớn, đảo đều tay liên tục đến khi hạt cơm săn khô, vàng giòn rụm và tơi xốp.",
        "Trút đĩa bò xào dưa vào chảo cơm đảo bùng lên trong 1 phút, nêm chút nước tương và hạt tiêu thơm lừng.",
        "Bới cơm rang ra đĩa, ăn kèm bát nước dùng thanh trong và tương ớt cay."
      ],
      "en": [
        "Toss chilled rice with egg yolks so every grain is coated in golden sheen.",
        "Flash-sear beef with garlic over high heat, toss in tangy pickled mustard greens, remove to a plate.",
        "Fry rice vigorously in smoking wok until grains are separated, crisp, and popping.",
        "Toss beef and pickled greens back into the rice for 1 minute with soy sauce and pepper.",
        "Plate steaming hot with a side of clear broth and chili sauce."
      ]
    },
    "region": "north",
    "diningType": [
      "eat_out"
    ]
  },
  {
    "id": "vn-chao-suon-sun",
    "title": {
      "vi": "Cháo Sườn Sụn Quẩy Giòn Hà Nội",
      "en": "Hanoi Silky Pork Cartilage Congee with Crispy Crullers"
    },
    "image": "https://images.unsplash.com/photo-1516684732162-798a0062be99?auto=format&fit=crop&w=800&q=80",
    "category": {
      "vi": "Cơm & Xôi",
      "en": "Rice Dishes"
    },
    "mealType": [
      "breakfast",
      "dinner",
      "snack"
    ],
    "dietaryTags": {
      "vi": [
        "Ấm lòng ngày lạnh",
        "Cháo mịn như lụa",
        "Sườn sụn sần sật"
      ],
      "en": [
        "Winter Warmer",
        "Silky Smooth Texture",
        "Crunchy Cartilage"
      ]
    },
    "time": "50 min",
    "servings": 4,
    "calories": 360,
    "protein": 22,
    "fat": 12,
    "carbs": 42,
    "servingSize": {
      "vi": "1 tô cháo nóng kèm quẩy (~400g)",
      "en": "1 bowl with crullers (~400g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia (NIN)",
      "en": "National Institute of Nutrition (NIN)"
    },
    "recipeSource": {
      "vi": "Cháo Sườn Phố Cổ Đồng Xuân - Hà Nội",
      "en": "Dong Xuan Ancient Market Hanoi Heritage"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Bột gạo tẻ xay nước mịn màng",
          "en": "Wet-milled silky rice flour"
        },
        "amount": "200g"
      },
      {
        "name": {
          "vi": "Sườn sụn heo chặt miếng nhỏ giòn sần sật",
          "en": "Pork soft cartilage chopped small"
        },
        "amount": "350g"
      },
      {
        "name": {
          "vi": "Xương ống heo hầm lấy nước dùng ngọt lịm",
          "en": "Pork bone broth"
        },
        "amount": "1.2 lít"
      },
      {
        "name": {
          "vi": "Quẩy giòn cắt khúc & ruốc thịt (chà bông)",
          "en": "Crispy crullers & pork floss"
        },
        "amount": "Ăn kèm"
      },
      {
        "name": {
          "vi": "Hạt tiêu xay cay nồng & ớt bột",
          "en": "Coarse black pepper & chili powder"
        },
        "amount": "Rắc mặt"
      }
    ],
    "instructions": {
      "vi": [
        "Sườn sụn chần nước sôi, ướp chút gia vị rồi xào săn, hầm nhỏ lửa với nước xương cho sụn mềm giòn sần sật.",
        "Hòa bột gạo nước với nước dùng xương hầm, khuấy đều tay trên lửa nhỏ liên tục để cháo mịn màng không bị khê vón cục.",
        "Khi cháo sánh mịn như lụa, trút phần sườn sụn đã ninh mềm vào khuấy đều trong 5 phút.",
        "Múc cháo nóng bỏng ra tô sứ, rắc ruốc thịt heo xốp thơm, cắt quẩy giòn tan lên trên.",
        "Rắc nhiều hạt tiêu xay thơm nức mũi và chút ớt bột, khuấy nhẹ thưởng thức khi còn nóng hổi."
      ],
      "en": [
        "Parboil soft cartilage, sauté with shallots, then simmer in bone broth until crunchy-tender.",
        "Whisk wet rice flour into rich bone broth, stirring continuously over low heat until velvety smooth.",
        "Fold in tender cartilage pieces, cooking together for 5 minutes.",
        "Ladle boiling silky congee into bowls, top with savory pork floss and sliced crispy crullers.",
        "Dust generously with coarse black pepper and chili powder."
      ]
    },
    "region": "north",
    "diningType": [
      "eat_out"
    ]
  },
  {
    "id": "vn-xoi-xeo-ha-noi",
    "title": {
      "vi": "Xôi Xéo Hà Nội Mỡ Hành Đậu Xanh Bào",
      "en": "Hanoi Turmeric Sticky Rice with Mung Bean & Crispy Shallots"
    },
    "image": "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=80",
    "category": {
      "vi": "Cơm & Xôi",
      "en": "Rice Dishes"
    },
    "mealType": [
      "breakfast",
      "lunch"
    ],
    "dietaryTags": {
      "vi": [
        "Đặc sản bữa sáng Thủ đô",
        "Hạt nếp vàng óng",
        "Đậu xanh bùi béo"
      ],
      "en": [
        "Hanoi Iconic Breakfast",
        "Golden Turmeric Grains",
        "Buttery Mung Bean"
      ]
    },
    "time": "45 min",
    "servings": 4,
    "calories": 480,
    "protein": 14,
    "fat": 18,
    "carbs": 66,
    "servingSize": {
      "vi": "1 gói xôi lá chuối (~250g)",
      "en": "1 banana-leaf wrap (~250g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia (NIN)",
      "en": "National Institute of Nutrition (NIN)"
    },
    "recipeSource": {
      "vi": "Làng Nghề Xôi Phú Thượng - Di Sản Ẩm Thực Hà Nội",
      "en": "Historic Phu Thuong Sticky Rice Artisans"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Gạo nếp cái hoa vàng ngâm nước nghệ tươi",
          "en": "Golden fragrant sticky rice soaked in turmeric"
        },
        "amount": "400g"
      },
      {
        "name": {
          "vi": "Đậu xanh đãi vỏ đồ chín giã mịn nắm chặt",
          "en": "Steamed yellow mung beans pounded into balls"
        },
        "amount": "200g"
      },
      {
        "name": {
          "vi": "Hành tím thái mỏng phi vàng giòn rụm",
          "en": "Crispy fried golden shallots"
        },
        "amount": "1/2 bát"
      },
      {
        "name": {
          "vi": "Mỡ gà hoặc mỡ heo rán thơm ngậy",
          "en": "Rich rendered chicken or pork fat"
        },
        "amount": "4 thìa"
      },
      {
        "name": {
          "vi": "Chà bông (ruốc) thịt heo hoặc chả quế ăn kèm",
          "en": "Pork floss or cinnamon ham"
        },
        "amount": "Tùy chọn"
      }
    ],
    "instructions": {
      "vi": [
        "Gạo nếp ngâm nước nghệ 6-8 tiếng cho hạt gạo ngấm màu vàng ươm, đãi sạch để ráo rồi trộn chút muối.",
        "Đồ xôi trên xửng hấp 2 lần lửa cho hạt xôi dẻo quánh, bóng bẩy và thơm phức.",
        "Đậu xanh hấp chín mềm, giã nhuyễn khi còn nóng rồi dùng khăn sạch nắm thật chặt thành quả cầu tròn mịn.",
        "Bới xôi nóng ra lá chuối hoặc đĩa, dùng dao bén xắt từng lát mỏng đậu xanh phủ kín mặt xôi.",
        "Rưới một thìa mỡ gà bóng ngậy và rắc thật nhiều hành phi vàng giòn rụm lên trên cùng."
      ],
      "en": [
        "Soak glutinous rice in fresh turmeric water for 6-8 hours for vibrant golden hue; steam twice until glistening and chewy.",
        "Steam peeled mung beans until fluffy, pound while hot and compress firmly into round balls.",
        "Spoon hot sticky rice onto banana leaf or plate, use a sharp knife to shave wafer-thin sheets of mung bean over rice.",
        "Drizzle rich chicken fat generously over top.",
        "Shower with crunchy golden fried shallots and savory pork floss."
      ]
    },
    "region": "north",
    "diningType": [
      "eat_out"
    ]
  },
  {
    "id": "vn-pho-cuon",
    "title": {
      "vi": "Phở Cuốn Thịt Bò Hà Nội",
      "en": "Hanoi Beef & Herb Rolled Pho"
    },
    "image": "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=800&q=80",
    "category": {
      "vi": "Khai Vị & Cuốn",
      "en": "Rolls & Appetizers"
    },
    "mealType": [
      "lunch",
      "dinner",
      "snack"
    ],
    "dietaryTags": {
      "vi": [
        "Đặc sản Ngũ Xã",
        "Thanh mát",
        "Thịt bò mềm mọng"
      ],
      "en": [
        "Hanoi Specialty",
        "Fresh & Light",
        "Tender Sautéed Beef"
      ]
    },
    "time": "20 min",
    "servings": 3,
    "calories": 310,
    "protein": 22,
    "fat": 9,
    "carbs": 36,
    "servingSize": {
      "vi": "Đĩa 6 cuốn (~240g)",
      "en": "6 rolls (~240g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia (NIN)",
      "en": "National Institute of Nutrition (NIN)"
    },
    "recipeSource": {
      "vi": "Làng Nghề Phở Cuốn Ngũ Xã - Hà Nội",
      "en": "Ngu Xa Hanoi Pho Artisans"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Bánh phở vuông nguyên tấm mỏng mềm",
          "en": "Uncut flat rice noodle sheets"
        },
        "amount": "500g"
      },
      {
        "name": {
          "vi": "Thịt thăn bò tươi thái mỏng",
          "en": "Beef tenderloin sliced thin"
        },
        "amount": "300g"
      },
      {
        "name": {
          "vi": "Rau xà lách, rau mùi, húng bạc hà",
          "en": "Lettuce, cilantro, mint"
        },
        "amount": "150g"
      },
      {
        "name": {
          "vi": "Tỏi băm, dầu hào, tiêu, nước mắm chấm chua ngọt",
          "en": "Garlic, oyster sauce, dipping sauce"
        },
        "amount": "Vừa đủ"
      }
    ],
    "instructions": {
      "vi": [
        "Ướp thịt bò với tỏi băm, dầu hào, chút tiêu và hạt nêm trong 15 phút.",
        "Đun chảo nóng lửa lớn, xào nhanh tay thịt bò trong 1-2 phút cho vừa chín tới giữ độ mềm ngọt mọng nước.",
        "Trải tấm bánh phở lên thớt sạch, đặt lá xà lách, rau thơm và một gắp thịt bò xào vào giữa.",
        "Khéo léo cuộn tròn chặt tay thành từng cuốn phở trắng ngần mướt mát.",
        "Chấm cùng nước mắm chua ngọt pha tỏi ớt hạt tiêu và dưa góp đu đủ giòn tan."
      ],
      "en": [
        "Marinate beef with garlic, oyster sauce, and pepper for 15 mins.",
        "Flash-fry beef on smoking-high heat for 1-2 minutes until tender-juicy.",
        "Lay flat noodle sheet, layer lettuce, fresh herbs, and a portion of sautéed beef.",
        "Roll snugly into neat white rolls.",
        "Serve with zesty garlic-chili dipping fish sauce."
      ]
    },
    "region": "north",
    "diningType": [
      "eat_out"
    ]
  },
  {
    "id": "vn-banh-gio",
    "title": {
      "vi": "Bánh Giò Nóng Thịt Băm Mộc Nhĩ Hà Nội",
      "en": "Hanoi Steamed Pyramid Rice Cake with Minced Pork & Wood-Ear"
    },
    "image": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
    "category": {
      "vi": "Bữa Sáng & Ăn Vặt",
      "en": "Street Food"
    },
    "mealType": [
      "breakfast",
      "snack"
    ],
    "dietaryTags": {
      "vi": [
        "Nóng hổi",
        "Bột mềm tan trong miệng",
        "Nhân béo ngậy"
      ],
      "en": [
        "Steaming Hot",
        "Melt-in-Mouth Texture",
        "Savory Pork Filling"
      ]
    },
    "time": "45 min",
    "servings": 4,
    "calories": 360,
    "protein": 15,
    "fat": 14,
    "carbs": 44,
    "servingSize": {
      "vi": "1 chiếc bánh giò nóng (~200g)",
      "en": "1 pyramid cake (~200g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia (NIN)",
      "en": "National Institute of Nutrition (NIN)"
    },
    "recipeSource": {
      "vi": "Ẩm Thực Quà Chiều Phố Cổ Hà Nội",
      "en": "Historic Hanoi Street Pastries"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Bột gạo tẻ pha bột năng với nước ninh xương",
          "en": "Rice flour & tapioca starch in bone broth"
        },
        "amount": "250g"
      },
      {
        "name": {
          "vi": "Thịt nạc vai heo băm lẫn mỡ",
          "en": "Minced pork shoulder"
        },
        "amount": "250g"
      },
      {
        "name": {
          "vi": "Mộc nhĩ, nấm hương băm nhỏ",
          "en": "Wood-ear & shiitake mushrooms"
        },
        "amount": "30g"
      },
      {
        "name": {
          "vi": "Trứng cút luộc bóc vỏ",
          "en": "Quail eggs"
        },
        "amount": "4 quả"
      },
      {
        "name": {
          "vi": "Lá chuối tươi hơ mềm làm vỏ gói",
          "en": "Banana leaves for wrapping"
        },
        "amount": "1 bó"
      }
    ],
    "instructions": {
      "vi": [
        "Khuấy đều bột gạo với nước hầm xương và chút gia vị, đun lửa nhỏ khuấy đều tay liên tục đến khi bột nửa chín nửa sống quánh mịn.",
        "Xào thơm hành khô, thịt băm, mộc nhĩ, nấm hương với nước mắm và thật nhiều tiêu xay làm nhân bánh giò.",
        "Xếp lá chuối hình phễu tam giác, múc một muôi bột lót đáy, cho nhân thịt và trứng cút vào giữa, phủ thêm một muôi bột lên trên.",
        "Gấp kín mép lá chuối, dùng lạt buộc nhẹ hình kim tự tháp.",
        "Hấp chín bánh trong xửng nước sôi 30 phút đến khi bánh chín mềm mướt.",
        "Ăn nóng kèm chả cốm, giò lụa, dưa leo bóp chua ngọt và tương ớt cay nồng."
      ],
      "en": [
        "Whisk rice flour with bone broth, stir over low heat until semi-cooked and thick.",
        "Sauté minced pork with mushrooms, fish sauce, and generous coarse pepper for filling.",
        "Fold banana leaves into a cone, spoon in batter, add filling and quail egg, cover with more batter.",
        "Wrap tightly into pyramid bundles and steam for 30 minutes.",
        "Serve piping hot with Vietnamese ham, pickles, and sriracha chili sauce."
      ]
    },
    "region": "north",
    "diningType": [
      "eat_out"
    ]
  },
  {
    "id": "vn-banh-bot-loc",
    "title": {
      "vi": "Bánh Bột Lọc Tôm Thịt Gói Lá Xứ Huế",
      "en": "Hue Clear Tapioca Dumplings with Shrimp & Pork"
    },
    "image": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
    "category": {
      "vi": "Ăn Vặt",
      "en": "Street Food"
    },
    "mealType": [
      "snack",
      "lunch"
    ],
    "dietaryTags": {
      "vi": [
        "Di sản xứ Huế",
        "Vỏ bánh trong veo dai giòn",
        "Tôm rim đậm đà"
      ],
      "en": [
        "Hue Heritage",
        "Translucent Chewy Skin",
        "Savory Caramelized Shrimp"
      ]
    },
    "time": "40 min",
    "servings": 4,
    "calories": 290,
    "protein": 14,
    "fat": 8,
    "carbs": 41,
    "servingSize": {
      "vi": "Đĩa 10 chiếc bánh lọc (~200g)",
      "en": "10 dumplings (~200g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia (NIN)",
      "en": "National Institute of Nutrition (NIN)"
    },
    "recipeSource": {
      "vi": "Ẩm Thực Cung Đình Huế",
      "en": "Hue Royal & Folk Pastry Arts"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Bột năng (bột lọc) hảo hạng",
          "en": "Premium tapioca starch"
        },
        "amount": "300g"
      },
      {
        "name": {
          "vi": "Tôm đất nhỏ rim mặn ngọt",
          "en": "Small shrimp caramelized"
        },
        "amount": "200g"
      },
      {
        "name": {
          "vi": "Thịt ba chỉ heo thái nhỏ rim đậm vị",
          "en": "Pork belly diced & braised"
        },
        "amount": "150g"
      },
      {
        "name": {
          "vi": "Lá chuối tươi luộc sơ mềm",
          "en": "Banana leaves softened"
        },
        "amount": "Vừa đủ"
      },
      {
        "name": {
          "vi": "Nước mắm ruốc ớt cay đúng điệu Huế",
          "en": "Hue spicy diluted fish sauce"
        },
        "amount": "1 bát nhỏ"
      }
    ],
    "instructions": {
      "vi": [
        "Rim tôm và thịt ba chỉ với nước mắm, đường, dầu điều và tiêu cho săn chắc và ngấm màu đỏ cam đậm đà.",
        "Nhào bột năng với nước sôi sùng sục thành khối bột dẻo mịn không dính tay.",
        "Ngắt từng viên bột nhỏ, cán mỏng, đặt một con tôm và miếng thịt ba chỉ vào giữa, gấp đôi ép chặt mép.",
        "Gói bánh vào lá chuối thoa chút dầu, cuộn tròn bẻ hai đầu gập lại.",
        "Hấp bánh trong 20 phút đến khi vỏ bột lọc trong veo nhìn thấy rõ nhân tôm đỏ au bên trong.",
        "Bóc vỏ lá chuối, chấm ngập bánh vào nước mắm ớt cay nồng xé lưỡi."
      ],
      "en": [
        "Braise small shrimp and pork belly in fish sauce, sugar, and annatto until savory and mahogany.",
        "Knead tapioca starch with boiling water into smooth pliable dough.",
        "Flatten small dough rounds, enclose shrimp and pork, sealing edges tightly.",
        "Wrap in oiled banana leaf strips and steam for 20 minutes until translucent.",
        "Dip into fiery Hue fish sauce studded with fresh bird-eye chilies."
      ]
    },
    "region": "central",
    "diningType": [
      "eat_out"
    ]
  },
  {
    "id": "vn-banh-trang-nuong",
    "title": {
      "vi": "Bánh Tráng Nướng Trứng Xúc Xích Đà Lạt",
      "en": "Dalat Crispy Grilled Rice Paper (Vietnamese Pizza)"
    },
    "image": "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=800&q=80",
    "category": {
      "vi": "Ăn Vặt",
      "en": "Street Food"
    },
    "mealType": [
      "snack",
      "dinner"
    ],
    "dietaryTags": {
      "vi": [
        "Pizza Việt Nam",
        "Giòn tan béo ngậy",
        "Đặc sản Đà Lạt"
      ],
      "en": [
        "Vietnamese Pizza",
        "Ultra Crispy",
        "Dalat Famous Street Snack"
      ]
    },
    "time": "10 min",
    "servings": 2,
    "calories": 280,
    "protein": 9,
    "fat": 12,
    "carbs": 34,
    "servingSize": {
      "vi": "1 chiếc cỡ lớn (~150g)",
      "en": "1 large piece (~150g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia (NIN)",
      "en": "National Institute of Nutrition (NIN)"
    },
    "recipeSource": {
      "vi": "Ẩm Thực Chợ Đêm Đà Lạt",
      "en": "Dalat Night Market Street Snacks"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Bánh tráng nướng mè mỏng dẻo",
          "en": "Vietnamese rice paper sheets"
        },
        "amount": "2 cái"
      },
      {
        "name": {
          "vi": "Trứng cút hoặc trứng gà đánh tan",
          "en": "Quail eggs or chicken eggs"
        },
        "amount": "4 quả cút"
      },
      {
        "name": {
          "vi": "Tép khô ruốc đỏ, xúc xích thái lát, khô bò",
          "en": "Baby dried shrimp, sausage, beef jerky"
        },
        "amount": "50g"
      },
      {
        "name": {
          "vi": "Bơ thực vật, mỡ hành hoa thơm lừng",
          "en": "Butter & scallion oil"
        },
        "amount": "2 thìa"
      },
      {
        "name": {
          "vi": "Sốt Mayonnaise & tương ớt cay",
          "en": "Mayonnaise & sriracha"
        },
        "amount": "Rưới mặt"
      }
    ],
    "instructions": {
      "vi": [
        "Đặt bánh tráng lên vỉ nướng trên than hồng hoặc chảo chống dính nóng nhẹ.",
        "Quét một lớp mỏng bơ và mỡ hành, đập trứng cút trực tiếp lên bánh, dùng thìa dàn đều khắp mặt bánh tráng.",
        "Rải tép khô đỏ, xúc xích thái lát mỏng, bò khô xé sợi và phô mai lên trên.",
        "Xoay đều bánh trên lửa nhỏ để bánh tráng chín phồng giòn tan mà không bị cháy xém viền.",
        "Rưới sốt mayonnaise béo ngậy và tương ớt cay theo đường zíc zắc, gập đôi hoặc để nguyên giòn rụm thưởng thức ngay."
      ],
      "en": [
        "Place rice paper on grill over coals or in hot dry skillet.",
        "Spread butter and scallion oil, crack quail eggs on top and brush evenly across surface.",
        "Sprinkle dried baby shrimp, sliced sausages, shredded jerky, and cheese.",
        "Rotate continuously over medium-low flame until crisp and golden.",
        "Drizzle zigzags of creamy mayonnaise and spicy sriracha; fold in half and eat while shattering crisp."
      ]
    },
    "region": "national",
    "diningType": [
      "eat_out"
    ]
  },
  {
    "id": "vn-banh-trang-tron",
    "title": {
      "vi": "Bánh Tráng Trộn Sài Gòn Đầy Đủ Topping",
      "en": "Saigon Shredded Rice Paper Salad with Quail Eggs & Mango"
    },
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    "category": {
      "vi": "Ăn Vặt",
      "en": "Street Food"
    },
    "mealType": [
      "snack"
    ],
    "dietaryTags": {
      "vi": [
        "Ăn vặt quốc dân Sài Gòn",
        "Chua cay mặn ngọt",
        "Topping phong phú"
      ],
      "en": [
        "Saigon Street Sensation",
        "Sweet Tangy & Spicy",
        "Loaded Toppings"
      ]
    },
    "time": "15 min",
    "servings": 2,
    "calories": 340,
    "protein": 12,
    "fat": 11,
    "carbs": 48,
    "servingSize": {
      "vi": "1 bịch lớn (~220g)",
      "en": "1 full portion (~220g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia (NIN)",
      "en": "National Institute of Nutrition (NIN)"
    },
    "recipeSource": {
      "vi": "Ẩm Thực Cổng Trường Sài Gòn",
      "en": "Saigon Street Culture"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Bánh tráng sợi cắt ngắn",
          "en": "Shredded rice paper strips"
        },
        "amount": "150g"
      },
      {
        "name": {
          "vi": "Xoài xanh bào sợi giòn chua",
          "en": "Green mango julienned"
        },
        "amount": "1/2 quả"
      },
      {
        "name": {
          "vi": "Trứng cút luộc chiên sơ hoặc luộc",
          "en": "Hard-boiled quail eggs"
        },
        "amount": "6 quả"
      },
      {
        "name": {
          "vi": "Bò khô sợi, tép sấy giòn, hành phi vàng",
          "en": "Beef jerky, dried shrimp, crispy shallots"
        },
        "amount": "50g"
      },
      {
        "name": {
          "vi": "Muối tôm Tây Ninh, nước sốt bò đen, quất (tắc)",
          "en": "Tay Ninh shrimp salt, sweet soy sauce, calamansi"
        },
        "amount": "Gia vị trộn"
      },
      {
        "name": {
          "vi": "Rau răm thái nhỏ & đậu phộng rang",
          "en": "Vietnamese coriander & roasted peanuts"
        },
        "amount": "1 nắm"
      }
    ],
    "instructions": {
      "vi": [
        "Cho bánh tráng cắt sợi vào tô lớn, thêm xoài xanh bào sợi, tép khô, khô bò xé nhỏ và rau răm.",
        "Rắc muối tôm Tây Ninh, rưới nước sốt khô bò đen và vắt nước cốt quất chua thanh vào.",
        "Đeo bao tay trộn bóp đều nhẹ nhàng trong 1-2 phút cho bánh tráng vừa dẻo mềm thấm đẫm sốt.",
        "Thêm trứng cút, rắc nhiều hành phi vàng giòn và đậu phộng rang giã dập lên trên.",
        "Thưởng thức ngay vị chua cay mặn ngọt bùng nổ hương vị tuổi học trò Sài Gòn."
      ],
      "en": [
        "Place rice paper strips in bowl with green mango, baby dried shrimp, beef jerky, and Vietnamese coriander.",
        "Add Tay Ninh shrimp salt, sweet liver sauce, and fresh calamansi juice.",
        "Toss firmly with gloved hands for 1-2 minutes until noodles turn chewy and glazed with flavors.",
        "Top with quail eggs, crunchy fried shallots, and roasted peanuts.",
        "Enjoy the explosive sweet, sour, savory, and spicy street sensation."
      ]
    },
    "region": "south",
    "diningType": [
      "eat_out"
    ]
  },
  {
    "id": "vn-nem-nuong-nha-trang",
    "title": {
      "vi": "Nem Nướng Nha Trang Mẹt Cuốn Bánh Tráng",
      "en": "Nha Trang Grilled Pork Sausage Rice Paper Rolls"
    },
    "image": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
    "category": {
      "vi": "Món Cuốn & Trộn",
      "en": "Platters"
    },
    "mealType": [
      "lunch",
      "dinner"
    ],
    "dietaryTags": {
      "vi": [
        "Đặc sản Khánh Hòa",
        "Nước sốt tương nếp béo bùi",
        "Bánh tráng giòn rụm"
      ],
      "en": [
        "Nha Trang Specialty",
        "Warm Peanut Miso Dip",
        "Crispy Rolled Crackers"
      ]
    },
    "time": "45 min",
    "servings": 4,
    "calories": 480,
    "protein": 25,
    "fat": 20,
    "carbs": 50,
    "servingSize": {
      "vi": "1 phần cuốn đầy đủ (~350g)",
      "en": "1 platter (~350g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia (NIN)",
      "en": "National Institute of Nutrition (NIN)"
    },
    "recipeSource": {
      "vi": "Ẩm Thực Xứ Trầm Hương Nha Trang",
      "en": "Nha Trang Culinary Heritage"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Thịt nạc mông heo quết nhuyễn làm giò sống",
          "en": "Pork paste pounded smooth"
        },
        "amount": "500g"
      },
      {
        "name": {
          "vi": "Mỡ heo luộc thái hạt lựu ướp đường",
          "en": "Pork back fat diced candied in sugar"
        },
        "amount": "100g"
      },
      {
        "name": {
          "vi": "Bánh tráng cuốn chiên giòn (ram giòn)",
          "en": "Deep-fried crispy rice paper tubes"
        },
        "amount": "1 đĩa"
      },
      {
        "name": {
          "vi": "Bánh tráng mềm, xoài xanh, dưa leo, xà lách, rau diếp cá",
          "en": "Rice paper, green mango, cucumber, fresh herbs"
        },
        "amount": "Rau cuốn"
      },
      {
        "name": {
          "vi": "Nước sốt tương nếp tôm thịt nấu sệt thơm bùi",
          "en": "Glutinous rice & pork dipping sauce"
        },
        "amount": "1 tô nhỏ"
      }
    ],
    "instructions": {
      "vi": [
        "Quết nhuyễn giò sống với mỡ hạt lựu, tỏi băm, tiêu, nước mắm ngon đến khi dẻo quánh, xiên thành từng thanh tròn dài quanh que tre.",
        "Nướng nem trên than hoa liu riu đến khi vàng ươm, thơm nức mùi thịt nướng.",
        "Nấu nước chấm bí truyền: xay nhuyễn nếp nấu chín cùng gan heo, tôm thịt băm và tương hột, đun sánh sệt màu vàng cam óng ánh.",
        "Trải bánh tráng mềm, đặt rau sống, lát xoài chua, dưa leo, thanh nem nướng và que ram giòn rụm vào giữa.",
        "Cuộn tròn chặt tay, chấm ngập vào bát nước tương nếp ấm nóng béo bùi rắc mè rang."
      ],
      "en": [
        "Pound lean pork into paste with diced fat, garlic, and fish sauce; mold around bamboo skewers.",
        "Charbroil skewers over charcoal until golden, fragrant, and slightly caramelized.",
        "Cook signature warm sauce from pureed glutinous rice, liver, minced pork, and soybean paste until glossy and thick.",
        "Lay rice paper wrapper, add herbs, crisp green mango, cucumber, grilled pork skewer, and fried crunch tube.",
        "Roll tightly and dip into warm, savory-nutty golden sauce."
      ]
    },
    "region": "central",
    "diningType": [
      "eat_out"
    ]
  },
  {
    "id": "vn-com-chien-duong-chau",
    "title": {
      "vi": "Cơm Chiên Dương Châu Đầy Đủ Tôm Lạp Xưởng",
      "en": "Yangzhou Style Vietnamese Fried Rice"
    },
    "image": "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=80",
    "category": {
      "vi": "Cơm & Xôi",
      "en": "Rice Dishes"
    },
    "mealType": [
      "lunch",
      "dinner"
    ],
    "dietaryTags": {
      "vi": [
        "Nhiều màu sắc",
        "Hạt cơm tơi giòn",
        "Đậm đà hương vị"
      ],
      "en": [
        "Colorful Platter",
        "Crisp Fluffy Rice",
        "Savory Chinese Sausage"
      ]
    },
    "time": "20 min",
    "servings": 4,
    "calories": 510,
    "protein": 21,
    "fat": 18,
    "carbs": 66,
    "servingSize": {
      "vi": "1 đĩa lớn (~300g)",
      "en": "1 plate (~300g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia (NIN)",
      "en": "National Institute of Nutrition (NIN)"
    },
    "recipeSource": {
      "vi": "Ẩm Thực Giao Thoa Sài Gòn - Chợ Lớn",
      "en": "Saigon Cho Lon Fusion Cuisine"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Cơm nguội ráo hạt",
          "en": "Day-old cooked rice"
        },
        "amount": "4 bát"
      },
      {
        "name": {
          "vi": "Lạp xưởng Mai Quế Lộ luộc sơ thái hạt lựu",
          "en": "Chinese sausage diced"
        },
        "amount": "2 cây"
      },
      {
        "name": {
          "vi": "Tôm tươi bóc vỏ thái hạt lựu",
          "en": "Fresh shrimp diced"
        },
        "amount": "150g"
      },
      {
        "name": {
          "vi": "Cà rốt & đậu Hà Lan chần sơ",
          "en": "Diced carrots & green peas"
        },
        "amount": "100g"
      },
      {
        "name": {
          "vi": "Trứng gà đánh tan tạo màu vàng óng",
          "en": "Eggs beaten"
        },
        "amount": "2 quả"
      },
      {
        "name": {
          "vi": "Tỏi băm, nước tương, dầu hào, tiêu",
          "en": "Garlic, soy sauce, oyster sauce, pepper"
        },
        "amount": "Gia vị"
      }
    ],
    "instructions": {
      "vi": [
        "Xào chín lạp xưởng và tôm với chút tỏi băm thơm phức, múc ra bát riêng.",
        "Đun nóng dầu ăn trong chảo lớn, đổ trứng đánh tan vào đảo tơi sợi.",
        "Cho cơm nguội vào chảo rang trên lửa lớn liên tục đảo tay cho hạt cơm săn ráo và bọc đều lớp trứng vàng óng.",
        "Trút lạp xưởng, tôm, đậu Hà Lan và cà rốt vào chảo cơm đảo bùng lên.",
        "Nêm chút dầu hào, nước tương và tiêu sọ thơm nức, xóc đều tay thêm 2 phút rồi múc ra đĩa ăn nóng."
      ],
      "en": [
        "Sauté diced sweet sausage and shrimp with garlic; set aside.",
        "Heat oil in wok, scramble beaten eggs into fine ribbons.",
        "Add rice, tossing vigorously over high heat until grains pop, crisp, and separate.",
        "Fold in sausage, shrimp, carrots, and sweet green peas.",
        "Season with oyster sauce, soy sauce, and white pepper; toss for 2 minutes before serving."
      ]
    },
    "region": "south",
    "diningType": [
      "home_cook",
      "eat_out"
    ]
  },
  {
    "id": "vn-goi-ngo-sen-tom-thit",
    "title": {
      "vi": "Gỏi Ngó Sen Tôm Thịt Giòn Chua Ngọt",
      "en": "Lotus Root Salad with Shrimp & Pork"
    },
    "image": "https://images.unsplash.com/photo-1551248429-40975aa4de74?auto=format&fit=crop&w=800&q=80",
    "category": {
      "vi": "Khai Vị & Gỏi",
      "en": "Salads & Starters"
    },
    "mealType": [
      "lunch",
      "dinner"
    ],
    "dietaryTags": {
      "vi": [
        "Món khai vị đám cưới",
        "Ngó sen giòn sần sật",
        "Thanh lọc cơ thể"
      ],
      "en": [
        "Wedding Starter Classic",
        "Crispy Lotus Stem",
        "Refreshing & Tangy"
      ]
    },
    "time": "25 min",
    "servings": 4,
    "calories": 230,
    "protein": 18,
    "fat": 6,
    "carbs": 26,
    "servingSize": {
      "vi": "1 đĩa gỏi đầy đặn (~300g)",
      "en": "1 plate (~300g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia (NIN)",
      "en": "National Institute of Nutrition (NIN)"
    },
    "recipeSource": {
      "vi": "Ẩm Thực Tiệc Cưới Truyền Thống Nam Bộ",
      "en": "Southern Vietnamese Feast Traditions"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Ngó sen tươi chẻ đôi ngâm nước chanh giòn trắng",
          "en": "Fresh lotus stems split & pickled"
        },
        "amount": "300g"
      },
      {
        "name": {
          "vi": "Tôm sú tươi luộc chẻ đôi",
          "en": "Tiger prawns boiled & halved"
        },
        "amount": "200g"
      },
      {
        "name": {
          "vi": "Thịt ba chỉ heo luộc thái sợi mỏng",
          "en": "Boiled pork belly thinly sliced"
        },
        "amount": "150g"
      },
      {
        "name": {
          "vi": "Cà rốt bào sợi, cần tây thái lát, rau răm",
          "en": "Carrots, celery, Vietnamese coriander"
        },
        "amount": "100g"
      },
      {
        "name": {
          "vi": "Nước mắm chua ngọt pha tỏi ớt đặc sánh",
          "en": "Concentrated sweet-sour garlic chili dressing"
        },
        "amount": "1 bát nhỏ"
      },
      {
        "name": {
          "vi": "Đậu phộng rang vàng & bánh phồng tôm giòn",
          "en": "Crushed peanuts & crispy prawn crackers"
        },
        "amount": "Ăn kèm"
      }
    ],
    "instructions": {
      "vi": [
        "Ngó sen bẻ khúc ngâm nước giấm đường cho giòn trắng, vắt ráo nước.",
        "Trộn đều ngó sen, cà rốt bào sợi, cần tây và rau răm thái nhỏ trong âu lớn.",
        "Xếp tôm luộc chẻ đôi và thịt ba chỉ thái mỏng vào âu.",
        "Rưới nước mắm chua ngọt pha sánh kẹo, trộn đều nhẹ tay để ngó sen ngấm đều vị chua cay mặn ngọt.",
        "Bày gỏi ra đĩa, rắc nhiều đậu phộng rang giòn thơm và ăn kèm bánh phồng tôm chiên phồng xốp."
      ],
      "en": [
        "Pickle split lotus stems in vinegar sugar water until crisp-white, drain thoroughly.",
        "Combine lotus stems, shredded carrots, celery, and fresh herbs in a salad bowl.",
        "Add halved tiger prawns and boiled pork belly.",
        "Drizzle thick sweet-sour fish sauce vinaigrette, gently tossing until coated.",
        "Mound onto platter, garnish with crushed peanuts and serve with puffed prawn crackers."
      ]
    },
    "region": "south",
    "diningType": [
      "home_cook",
      "eat_out"
    ]
  },
  {
    "id": "vn-ca-bong-kho-tieu",
    "title": {
      "vi": "Cá Bống Kho Tiêu Đậm Vị Miền Trung",
      "en": "Central Style Goby Fish Braised with Black Pepper"
    },
    "image": "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80",
    "category": {
      "vi": "Cơm Gia Đình",
      "en": "Home Cooking"
    },
    "mealType": [
      "lunch",
      "dinner"
    ],
    "dietaryTags": {
      "vi": [
        "Truyền thống",
        "Dinh dưỡng NIN",
        "Món Việt"
      ],
      "en": [
        "Traditional",
        "NIN Verified",
        "Authentic"
      ]
    },
    "time": "35 min",
    "servings": 4,
    "calories": 260,
    "protein": 28,
    "fat": 9,
    "carbs": 4,
    "servingSize": {
      "vi": "1 phần tiêu chuẩn (~250g)",
      "en": "1 standard serving (~250g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia (NIN) - Bảng Thành Phần Thực Phẩm Việt Nam",
      "en": "National Institute of Nutrition (NIN Vietnam) - Food Composition Table"
    },
    "recipeSource": {
      "vi": "Ẩm Thực Truyền Thống 3 Miền Việt Nam",
      "en": "Traditional Vietnamese Culinary Heritage"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Nguyên liệu chính tươi ngon",
          "en": "Fresh primary ingredient"
        },
        "amount": "400g"
      },
      {
        "name": {
          "vi": "Rau thơm & gia vị truyền thống",
          "en": "Aromatic herbs & traditional seasoning"
        },
        "amount": "100g"
      },
      {
        "name": {
          "vi": "Nước mắm truyền thống & hành tỏi",
          "en": "Pure fish sauce, shallots & garlic"
        },
        "amount": "Vừa đủ"
      }
    ],
    "instructions": {
      "vi": [
        "Sơ chế sạch các nguyên liệu tươi, để ráo nước.",
        "Ướp gia vị truyền thống cho ngấm đều trong 15-20 phút.",
        "Nấu chín theo phương pháp truyền thống giữ trọn hương vị tươi ngọt tự nhiên.",
        "Trình bày ra đĩa hoặc tô, ăn nóng cùng cơm dẻo hoặc bún tươi."
      ],
      "en": [
        "Clean all fresh ingredients thoroughly and pat dry.",
        "Marinate with traditional seasoning for 15-20 minutes.",
        "Cook using authentic method to lock in natural sweetness and aroma.",
        "Serve steaming hot with fragrant jasmine rice or noodles."
      ]
    },
    "region": "central",
    "diningType": [
      "home_cook"
    ]
  },
  {
    "id": "vn-ca-nuc-kho-ca",
    "title": {
      "vi": "Cá Nục Kho Cà Chua Mềm Rục Xương",
      "en": "Braised Scad Fish in Rich Tomato Sauce"
    },
    "image": "https://images.unsplash.com/photo-1535473877914-a059b0730b0b?auto=format&fit=crop&w=800&q=80",
    "category": {
      "vi": "Cơm Gia Đình",
      "en": "Home Cooking"
    },
    "mealType": [
      "lunch",
      "dinner"
    ],
    "dietaryTags": {
      "vi": [
        "Truyền thống",
        "Dinh dưỡng NIN",
        "Món Việt"
      ],
      "en": [
        "Traditional",
        "NIN Verified",
        "Authentic"
      ]
    },
    "time": "45 min",
    "servings": 4,
    "calories": 290,
    "protein": 29,
    "fat": 12,
    "carbs": 6,
    "servingSize": {
      "vi": "1 phần tiêu chuẩn (~250g)",
      "en": "1 standard serving (~250g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia (NIN) - Bảng Thành Phần Thực Phẩm Việt Nam",
      "en": "National Institute of Nutrition (NIN Vietnam) - Food Composition Table"
    },
    "recipeSource": {
      "vi": "Ẩm Thực Truyền Thống 3 Miền Việt Nam",
      "en": "Traditional Vietnamese Culinary Heritage"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Nguyên liệu chính tươi ngon",
          "en": "Fresh primary ingredient"
        },
        "amount": "400g"
      },
      {
        "name": {
          "vi": "Rau thơm & gia vị truyền thống",
          "en": "Aromatic herbs & traditional seasoning"
        },
        "amount": "100g"
      },
      {
        "name": {
          "vi": "Nước mắm truyền thống & hành tỏi",
          "en": "Pure fish sauce, shallots & garlic"
        },
        "amount": "Vừa đủ"
      }
    ],
    "instructions": {
      "vi": [
        "Sơ chế sạch các nguyên liệu tươi, để ráo nước.",
        "Ướp gia vị truyền thống cho ngấm đều trong 15-20 phút.",
        "Nấu chín theo phương pháp truyền thống giữ trọn hương vị tươi ngọt tự nhiên.",
        "Trình bày ra đĩa hoặc tô, ăn nóng cùng cơm dẻo hoặc bún tươi."
      ],
      "en": [
        "Clean all fresh ingredients thoroughly and pat dry.",
        "Marinate with traditional seasoning for 15-20 minutes.",
        "Cook using authentic method to lock in natural sweetness and aroma.",
        "Serve steaming hot with fragrant jasmine rice or noodles."
      ]
    },
    "region": "national",
    "diningType": [
      "home_cook"
    ]
  },
  {
    "id": "vn-ca-dieu-hong-chien-xu",
    "title": {
      "vi": "Cá Diêu Hồng Chiên Xù Mắm Tỏi",
      "en": "Crispy Fried Red Tilapia with Garlic Fish Sauce"
    },
    "image": "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=800&q=80",
    "category": {
      "vi": "Cơm Gia Đình",
      "en": "Home Cooking"
    },
    "mealType": [
      "lunch",
      "dinner"
    ],
    "dietaryTags": {
      "vi": [
        "Truyền thống",
        "Dinh dưỡng NIN",
        "Món Việt"
      ],
      "en": [
        "Traditional",
        "NIN Verified",
        "Authentic"
      ]
    },
    "time": "25 min",
    "servings": 4,
    "calories": 320,
    "protein": 31,
    "fat": 14,
    "carbs": 5,
    "servingSize": {
      "vi": "1 phần tiêu chuẩn (~250g)",
      "en": "1 standard serving (~250g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia (NIN) - Bảng Thành Phần Thực Phẩm Việt Nam",
      "en": "National Institute of Nutrition (NIN Vietnam) - Food Composition Table"
    },
    "recipeSource": {
      "vi": "Ẩm Thực Truyền Thống 3 Miền Việt Nam",
      "en": "Traditional Vietnamese Culinary Heritage"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Nguyên liệu chính tươi ngon",
          "en": "Fresh primary ingredient"
        },
        "amount": "400g"
      },
      {
        "name": {
          "vi": "Rau thơm & gia vị truyền thống",
          "en": "Aromatic herbs & traditional seasoning"
        },
        "amount": "100g"
      },
      {
        "name": {
          "vi": "Nước mắm truyền thống & hành tỏi",
          "en": "Pure fish sauce, shallots & garlic"
        },
        "amount": "Vừa đủ"
      }
    ],
    "instructions": {
      "vi": [
        "Sơ chế sạch các nguyên liệu tươi, để ráo nước.",
        "Ướp gia vị truyền thống cho ngấm đều trong 15-20 phút.",
        "Nấu chín theo phương pháp truyền thống giữ trọn hương vị tươi ngọt tự nhiên.",
        "Trình bày ra đĩa hoặc tô, ăn nóng cùng cơm dẻo hoặc bún tươi."
      ],
      "en": [
        "Clean all fresh ingredients thoroughly and pat dry.",
        "Marinate with traditional seasoning for 15-20 minutes.",
        "Cook using authentic method to lock in natural sweetness and aroma.",
        "Serve steaming hot with fragrant jasmine rice or noodles."
      ]
    },
    "region": "national",
    "diningType": [
      "home_cook"
    ]
  },
  {
    "id": "vn-suon-rim-man-ngot",
    "title": {
      "vi": "Sườn Non Rim Mặn Ngọt Óng Ả",
      "en": "Caramelized Savory Sweet Pork Ribs"
    },
    "image": "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?auto=format&fit=crop&w=800&q=80",
    "category": {
      "vi": "Cơm Gia Đình",
      "en": "Home Cooking"
    },
    "mealType": [
      "lunch",
      "dinner"
    ],
    "dietaryTags": {
      "vi": [
        "Truyền thống",
        "Dinh dưỡng NIN",
        "Món Việt"
      ],
      "en": [
        "Traditional",
        "NIN Verified",
        "Authentic"
      ]
    },
    "time": "35 min",
    "servings": 4,
    "calories": 410,
    "protein": 25,
    "fat": 22,
    "carbs": 14,
    "servingSize": {
      "vi": "1 phần tiêu chuẩn (~250g)",
      "en": "1 standard serving (~250g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia (NIN) - Bảng Thành Phần Thực Phẩm Việt Nam",
      "en": "National Institute of Nutrition (NIN Vietnam) - Food Composition Table"
    },
    "recipeSource": {
      "vi": "Ẩm Thực Truyền Thống 3 Miền Việt Nam",
      "en": "Traditional Vietnamese Culinary Heritage"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Nguyên liệu chính tươi ngon",
          "en": "Fresh primary ingredient"
        },
        "amount": "400g"
      },
      {
        "name": {
          "vi": "Rau thơm & gia vị truyền thống",
          "en": "Aromatic herbs & traditional seasoning"
        },
        "amount": "100g"
      },
      {
        "name": {
          "vi": "Nước mắm truyền thống & hành tỏi",
          "en": "Pure fish sauce, shallots & garlic"
        },
        "amount": "Vừa đủ"
      }
    ],
    "instructions": {
      "vi": [
        "Sơ chế sạch các nguyên liệu tươi, để ráo nước.",
        "Ướp gia vị truyền thống cho ngấm đều trong 15-20 phút.",
        "Nấu chín theo phương pháp truyền thống giữ trọn hương vị tươi ngọt tự nhiên.",
        "Trình bày ra đĩa hoặc tô, ăn nóng cùng cơm dẻo hoặc bún tươi."
      ],
      "en": [
        "Clean all fresh ingredients thoroughly and pat dry.",
        "Marinate with traditional seasoning for 15-20 minutes.",
        "Cook using authentic method to lock in natural sweetness and aroma.",
        "Serve steaming hot with fragrant jasmine rice or noodles."
      ]
    },
    "region": "national",
    "diningType": [
      "home_cook"
    ]
  },
  {
    "id": "vn-bo-luc-lac",
    "title": {
      "vi": "Bò Lúc Lắc Khoai Tây Chiên Bơ Tỏi",
      "en": "Shaking Beef Tenderloin with Garlic Butter Fries"
    },
    "image": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
    "category": {
      "vi": "Cơm Gia Đình",
      "en": "Home Cooking"
    },
    "mealType": [
      "lunch",
      "dinner"
    ],
    "dietaryTags": {
      "vi": [
        "Truyền thống",
        "Dinh dưỡng NIN",
        "Món Việt"
      ],
      "en": [
        "Traditional",
        "NIN Verified",
        "Authentic"
      ]
    },
    "time": "20 min",
    "servings": 4,
    "calories": 480,
    "protein": 32,
    "fat": 24,
    "carbs": 22,
    "servingSize": {
      "vi": "1 phần tiêu chuẩn (~250g)",
      "en": "1 standard serving (~250g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia (NIN) - Bảng Thành Phần Thực Phẩm Việt Nam",
      "en": "National Institute of Nutrition (NIN Vietnam) - Food Composition Table"
    },
    "recipeSource": {
      "vi": "Ẩm Thực Truyền Thống 3 Miền Việt Nam",
      "en": "Traditional Vietnamese Culinary Heritage"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Nguyên liệu chính tươi ngon",
          "en": "Fresh primary ingredient"
        },
        "amount": "400g"
      },
      {
        "name": {
          "vi": "Rau thơm & gia vị truyền thống",
          "en": "Aromatic herbs & traditional seasoning"
        },
        "amount": "100g"
      },
      {
        "name": {
          "vi": "Nước mắm truyền thống & hành tỏi",
          "en": "Pure fish sauce, shallots & garlic"
        },
        "amount": "Vừa đủ"
      }
    ],
    "instructions": {
      "vi": [
        "Sơ chế sạch các nguyên liệu tươi, để ráo nước.",
        "Ướp gia vị truyền thống cho ngấm đều trong 15-20 phút.",
        "Nấu chín theo phương pháp truyền thống giữ trọn hương vị tươi ngọt tự nhiên.",
        "Trình bày ra đĩa hoặc tô, ăn nóng cùng cơm dẻo hoặc bún tươi."
      ],
      "en": [
        "Clean all fresh ingredients thoroughly and pat dry.",
        "Marinate with traditional seasoning for 15-20 minutes.",
        "Cook using authentic method to lock in natural sweetness and aroma.",
        "Serve steaming hot with fragrant jasmine rice or noodles."
      ]
    },
    "region": "national",
    "diningType": [
      "home_cook",
      "eat_out"
    ]
  },
  {
    "id": "vn-thit-kho-tieu",
    "title": {
      "vi": "Thịt Ba Chỉ Kho Tiêu Phú Quốc",
      "en": "Phu Quoc Black Pepper Braised Pork Belly"
    },
    "image": "https://images.unsplash.com/photo-1606787366850-de6330128bfc?auto=format&fit=crop&w=800&q=80",
    "category": {
      "vi": "Cơm Gia Đình",
      "en": "Home Cooking"
    },
    "mealType": [
      "lunch",
      "dinner"
    ],
    "dietaryTags": {
      "vi": [
        "Truyền thống",
        "Dinh dưỡng NIN",
        "Món Việt"
      ],
      "en": [
        "Traditional",
        "NIN Verified",
        "Authentic"
      ]
    },
    "time": "30 min",
    "servings": 4,
    "calories": 390,
    "protein": 23,
    "fat": 31,
    "carbs": 4,
    "servingSize": {
      "vi": "1 phần tiêu chuẩn (~250g)",
      "en": "1 standard serving (~250g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia (NIN) - Bảng Thành Phần Thực Phẩm Việt Nam",
      "en": "National Institute of Nutrition (NIN Vietnam) - Food Composition Table"
    },
    "recipeSource": {
      "vi": "Ẩm Thực Truyền Thống 3 Miền Việt Nam",
      "en": "Traditional Vietnamese Culinary Heritage"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Nguyên liệu chính tươi ngon",
          "en": "Fresh primary ingredient"
        },
        "amount": "400g"
      },
      {
        "name": {
          "vi": "Rau thơm & gia vị truyền thống",
          "en": "Aromatic herbs & traditional seasoning"
        },
        "amount": "100g"
      },
      {
        "name": {
          "vi": "Nước mắm truyền thống & hành tỏi",
          "en": "Pure fish sauce, shallots & garlic"
        },
        "amount": "Vừa đủ"
      }
    ],
    "instructions": {
      "vi": [
        "Sơ chế sạch các nguyên liệu tươi, để ráo nước.",
        "Ướp gia vị truyền thống cho ngấm đều trong 15-20 phút.",
        "Nấu chín theo phương pháp truyền thống giữ trọn hương vị tươi ngọt tự nhiên.",
        "Trình bày ra đĩa hoặc tô, ăn nóng cùng cơm dẻo hoặc bún tươi."
      ],
      "en": [
        "Clean all fresh ingredients thoroughly and pat dry.",
        "Marinate with traditional seasoning for 15-20 minutes.",
        "Cook using authentic method to lock in natural sweetness and aroma.",
        "Serve steaming hot with fragrant jasmine rice or noodles."
      ]
    },
    "region": "national",
    "diningType": [
      "home_cook"
    ]
  },
  {
    "id": "vn-gio-lua-rim-mam",
    "title": {
      "vi": "Giò Lụa Rim Nước Mắm Tiêu Sọ",
      "en": "Caramelized Vietnamese Ham with Pepper Sauce"
    },
    "image": "https://images.unsplash.com/photo-1529042410759-befb1204b468?auto=format&fit=crop&w=800&q=80",
    "category": {
      "vi": "Cơm Gia Đình",
      "en": "Home Cooking"
    },
    "mealType": [
      "lunch",
      "dinner"
    ],
    "dietaryTags": {
      "vi": [
        "Truyền thống",
        "Dinh dưỡng NIN",
        "Món Việt"
      ],
      "en": [
        "Traditional",
        "NIN Verified",
        "Authentic"
      ]
    },
    "time": "15 min",
    "servings": 4,
    "calories": 280,
    "protein": 18,
    "fat": 16,
    "carbs": 6,
    "servingSize": {
      "vi": "1 phần tiêu chuẩn (~250g)",
      "en": "1 standard serving (~250g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia (NIN) - Bảng Thành Phần Thực Phẩm Việt Nam",
      "en": "National Institute of Nutrition (NIN Vietnam) - Food Composition Table"
    },
    "recipeSource": {
      "vi": "Ẩm Thực Truyền Thống 3 Miền Việt Nam",
      "en": "Traditional Vietnamese Culinary Heritage"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Nguyên liệu chính tươi ngon",
          "en": "Fresh primary ingredient"
        },
        "amount": "400g"
      },
      {
        "name": {
          "vi": "Rau thơm & gia vị truyền thống",
          "en": "Aromatic herbs & traditional seasoning"
        },
        "amount": "100g"
      },
      {
        "name": {
          "vi": "Nước mắm truyền thống & hành tỏi",
          "en": "Pure fish sauce, shallots & garlic"
        },
        "amount": "Vừa đủ"
      }
    ],
    "instructions": {
      "vi": [
        "Sơ chế sạch các nguyên liệu tươi, để ráo nước.",
        "Ướp gia vị truyền thống cho ngấm đều trong 15-20 phút.",
        "Nấu chín theo phương pháp truyền thống giữ trọn hương vị tươi ngọt tự nhiên.",
        "Trình bày ra đĩa hoặc tô, ăn nóng cùng cơm dẻo hoặc bún tươi."
      ],
      "en": [
        "Clean all fresh ingredients thoroughly and pat dry.",
        "Marinate with traditional seasoning for 15-20 minutes.",
        "Cook using authentic method to lock in natural sweetness and aroma.",
        "Serve steaming hot with fragrant jasmine rice or noodles."
      ]
    },
    "region": "national",
    "diningType": [
      "home_cook"
    ]
  },
  {
    "id": "vn-tom-rim-man-ngot",
    "title": {
      "vi": "Tôm Đồng Rim Mặn Ngọt Giòn Vỏ",
      "en": "Sweet & Salty Crisp Wild River Shrimp"
    },
    "image": "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&w=800&q=80",
    "category": {
      "vi": "Cơm Gia Đình",
      "en": "Home Cooking"
    },
    "mealType": [
      "lunch",
      "dinner"
    ],
    "dietaryTags": {
      "vi": [
        "Truyền thống",
        "Dinh dưỡng NIN",
        "Món Việt"
      ],
      "en": [
        "Traditional",
        "NIN Verified",
        "Authentic"
      ]
    },
    "time": "20 min",
    "servings": 4,
    "calories": 220,
    "protein": 24,
    "fat": 6,
    "carbs": 8,
    "servingSize": {
      "vi": "1 phần tiêu chuẩn (~250g)",
      "en": "1 standard serving (~250g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia (NIN) - Bảng Thành Phần Thực Phẩm Việt Nam",
      "en": "National Institute of Nutrition (NIN Vietnam) - Food Composition Table"
    },
    "recipeSource": {
      "vi": "Ẩm Thực Truyền Thống 3 Miền Việt Nam",
      "en": "Traditional Vietnamese Culinary Heritage"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Nguyên liệu chính tươi ngon",
          "en": "Fresh primary ingredient"
        },
        "amount": "400g"
      },
      {
        "name": {
          "vi": "Rau thơm & gia vị truyền thống",
          "en": "Aromatic herbs & traditional seasoning"
        },
        "amount": "100g"
      },
      {
        "name": {
          "vi": "Nước mắm truyền thống & hành tỏi",
          "en": "Pure fish sauce, shallots & garlic"
        },
        "amount": "Vừa đủ"
      }
    ],
    "instructions": {
      "vi": [
        "Sơ chế sạch các nguyên liệu tươi, để ráo nước.",
        "Ướp gia vị truyền thống cho ngấm đều trong 15-20 phút.",
        "Nấu chín theo phương pháp truyền thống giữ trọn hương vị tươi ngọt tự nhiên.",
        "Trình bày ra đĩa hoặc tô, ăn nóng cùng cơm dẻo hoặc bún tươi."
      ],
      "en": [
        "Clean all fresh ingredients thoroughly and pat dry.",
        "Marinate with traditional seasoning for 15-20 minutes.",
        "Cook using authentic method to lock in natural sweetness and aroma.",
        "Serve steaming hot with fragrant jasmine rice or noodles."
      ]
    },
    "region": "national",
    "diningType": [
      "home_cook"
    ]
  },
  {
    "id": "vn-muc-xao-can-toi",
    "title": {
      "vi": "Mực Ống Tươi Xào Cần Tỏi",
      "en": "Stir-Fried Squid with Celery & Leeks"
    },
    "image": "https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=800&q=80",
    "category": {
      "vi": "Cơm Gia Đình",
      "en": "Home Cooking"
    },
    "mealType": [
      "lunch",
      "dinner"
    ],
    "dietaryTags": {
      "vi": [
        "Truyền thống",
        "Dinh dưỡng NIN",
        "Món Việt"
      ],
      "en": [
        "Traditional",
        "NIN Verified",
        "Authentic"
      ]
    },
    "time": "15 min",
    "servings": 4,
    "calories": 210,
    "protein": 26,
    "fat": 5,
    "carbs": 7,
    "servingSize": {
      "vi": "1 phần tiêu chuẩn (~250g)",
      "en": "1 standard serving (~250g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia (NIN) - Bảng Thành Phần Thực Phẩm Việt Nam",
      "en": "National Institute of Nutrition (NIN Vietnam) - Food Composition Table"
    },
    "recipeSource": {
      "vi": "Ẩm Thực Truyền Thống 3 Miền Việt Nam",
      "en": "Traditional Vietnamese Culinary Heritage"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Nguyên liệu chính tươi ngon",
          "en": "Fresh primary ingredient"
        },
        "amount": "400g"
      },
      {
        "name": {
          "vi": "Rau thơm & gia vị truyền thống",
          "en": "Aromatic herbs & traditional seasoning"
        },
        "amount": "100g"
      },
      {
        "name": {
          "vi": "Nước mắm truyền thống & hành tỏi",
          "en": "Pure fish sauce, shallots & garlic"
        },
        "amount": "Vừa đủ"
      }
    ],
    "instructions": {
      "vi": [
        "Sơ chế sạch các nguyên liệu tươi, để ráo nước.",
        "Ướp gia vị truyền thống cho ngấm đều trong 15-20 phút.",
        "Nấu chín theo phương pháp truyền thống giữ trọn hương vị tươi ngọt tự nhiên.",
        "Trình bày ra đĩa hoặc tô, ăn nóng cùng cơm dẻo hoặc bún tươi."
      ],
      "en": [
        "Clean all fresh ingredients thoroughly and pat dry.",
        "Marinate with traditional seasoning for 15-20 minutes.",
        "Cook using authentic method to lock in natural sweetness and aroma.",
        "Serve steaming hot with fragrant jasmine rice or noodles."
      ]
    },
    "region": "national",
    "diningType": [
      "home_cook"
    ]
  },
  {
    "id": "vn-muc-nhoi-thit",
    "title": {
      "vi": "Mực Ống Nhồi Thịt Sốt Cà Chua",
      "en": "Stuffed Squid with Pork in Savory Tomato Glaze"
    },
    "image": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80",
    "category": {
      "vi": "Cơm Gia Đình",
      "en": "Home Cooking"
    },
    "mealType": [
      "lunch",
      "dinner"
    ],
    "dietaryTags": {
      "vi": [
        "Truyền thống",
        "Dinh dưỡng NIN",
        "Món Việt"
      ],
      "en": [
        "Traditional",
        "NIN Verified",
        "Authentic"
      ]
    },
    "time": "35 min",
    "servings": 4,
    "calories": 310,
    "protein": 28,
    "fat": 12,
    "carbs": 10,
    "servingSize": {
      "vi": "1 phần tiêu chuẩn (~250g)",
      "en": "1 standard serving (~250g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia (NIN) - Bảng Thành Phần Thực Phẩm Việt Nam",
      "en": "National Institute of Nutrition (NIN Vietnam) - Food Composition Table"
    },
    "recipeSource": {
      "vi": "Ẩm Thực Truyền Thống 3 Miền Việt Nam",
      "en": "Traditional Vietnamese Culinary Heritage"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Nguyên liệu chính tươi ngon",
          "en": "Fresh primary ingredient"
        },
        "amount": "400g"
      },
      {
        "name": {
          "vi": "Rau thơm & gia vị truyền thống",
          "en": "Aromatic herbs & traditional seasoning"
        },
        "amount": "100g"
      },
      {
        "name": {
          "vi": "Nước mắm truyền thống & hành tỏi",
          "en": "Pure fish sauce, shallots & garlic"
        },
        "amount": "Vừa đủ"
      }
    ],
    "instructions": {
      "vi": [
        "Sơ chế sạch các nguyên liệu tươi, để ráo nước.",
        "Ướp gia vị truyền thống cho ngấm đều trong 15-20 phút.",
        "Nấu chín theo phương pháp truyền thống giữ trọn hương vị tươi ngọt tự nhiên.",
        "Trình bày ra đĩa hoặc tô, ăn nóng cùng cơm dẻo hoặc bún tươi."
      ],
      "en": [
        "Clean all fresh ingredients thoroughly and pat dry.",
        "Marinate with traditional seasoning for 15-20 minutes.",
        "Cook using authentic method to lock in natural sweetness and aroma.",
        "Serve steaming hot with fragrant jasmine rice or noodles."
      ]
    },
    "region": "national",
    "diningType": [
      "home_cook"
    ]
  },
  {
    "id": "vn-xiu-mai-sot-ca",
    "title": {
      "vi": "Xíu Mại Thịt Băm Sốt Cà Bánh Mì",
      "en": "Vietnamese Meatballs in Tomato Sauce with Baguette"
    },
    "image": "https://images.unsplash.com/photo-1529042410759-befb1204b468?auto=format&fit=crop&w=800&q=80",
    "category": {
      "vi": "Cơm Gia Đình",
      "en": "Home Cooking"
    },
    "mealType": [
      "lunch",
      "dinner"
    ],
    "dietaryTags": {
      "vi": [
        "Truyền thống",
        "Dinh dưỡng NIN",
        "Món Việt"
      ],
      "en": [
        "Traditional",
        "NIN Verified",
        "Authentic"
      ]
    },
    "time": "30 min",
    "servings": 4,
    "calories": 360,
    "protein": 22,
    "fat": 18,
    "carbs": 18,
    "servingSize": {
      "vi": "1 phần tiêu chuẩn (~250g)",
      "en": "1 standard serving (~250g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia (NIN) - Bảng Thành Phần Thực Phẩm Việt Nam",
      "en": "National Institute of Nutrition (NIN Vietnam) - Food Composition Table"
    },
    "recipeSource": {
      "vi": "Ẩm Thực Truyền Thống 3 Miền Việt Nam",
      "en": "Traditional Vietnamese Culinary Heritage"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Nguyên liệu chính tươi ngon",
          "en": "Fresh primary ingredient"
        },
        "amount": "400g"
      },
      {
        "name": {
          "vi": "Rau thơm & gia vị truyền thống",
          "en": "Aromatic herbs & traditional seasoning"
        },
        "amount": "100g"
      },
      {
        "name": {
          "vi": "Nước mắm truyền thống & hành tỏi",
          "en": "Pure fish sauce, shallots & garlic"
        },
        "amount": "Vừa đủ"
      }
    ],
    "instructions": {
      "vi": [
        "Sơ chế sạch các nguyên liệu tươi, để ráo nước.",
        "Ướp gia vị truyền thống cho ngấm đều trong 15-20 phút.",
        "Nấu chín theo phương pháp truyền thống giữ trọn hương vị tươi ngọt tự nhiên.",
        "Trình bày ra đĩa hoặc tô, ăn nóng cùng cơm dẻo hoặc bún tươi."
      ],
      "en": [
        "Clean all fresh ingredients thoroughly and pat dry.",
        "Marinate with traditional seasoning for 15-20 minutes.",
        "Cook using authentic method to lock in natural sweetness and aroma.",
        "Serve steaming hot with fragrant jasmine rice or noodles."
      ]
    },
    "region": "national",
    "diningType": [
      "home_cook"
    ]
  },
  {
    "id": "vn-trung-cuon-hanh",
    "title": {
      "vi": "Trứng Cuộn Hành Hoa Nấm Mèo",
      "en": "Rolled Egg Crepe with Scallions & Wood-Ear"
    },
    "image": "https://images.unsplash.com/photo-1510693206972-df098062cb71?auto=format&fit=crop&w=800&q=80",
    "category": {
      "vi": "Cơm Gia Đình",
      "en": "Home Cooking"
    },
    "mealType": [
      "lunch",
      "dinner"
    ],
    "dietaryTags": {
      "vi": [
        "Truyền thống",
        "Dinh dưỡng NIN",
        "Món Việt"
      ],
      "en": [
        "Traditional",
        "NIN Verified",
        "Authentic"
      ]
    },
    "time": "12 min",
    "servings": 4,
    "calories": 220,
    "protein": 16,
    "fat": 15,
    "carbs": 3,
    "servingSize": {
      "vi": "1 phần tiêu chuẩn (~250g)",
      "en": "1 standard serving (~250g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia (NIN) - Bảng Thành Phần Thực Phẩm Việt Nam",
      "en": "National Institute of Nutrition (NIN Vietnam) - Food Composition Table"
    },
    "recipeSource": {
      "vi": "Ẩm Thực Truyền Thống 3 Miền Việt Nam",
      "en": "Traditional Vietnamese Culinary Heritage"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Nguyên liệu chính tươi ngon",
          "en": "Fresh primary ingredient"
        },
        "amount": "400g"
      },
      {
        "name": {
          "vi": "Rau thơm & gia vị truyền thống",
          "en": "Aromatic herbs & traditional seasoning"
        },
        "amount": "100g"
      },
      {
        "name": {
          "vi": "Nước mắm truyền thống & hành tỏi",
          "en": "Pure fish sauce, shallots & garlic"
        },
        "amount": "Vừa đủ"
      }
    ],
    "instructions": {
      "vi": [
        "Sơ chế sạch các nguyên liệu tươi, để ráo nước.",
        "Ướp gia vị truyền thống cho ngấm đều trong 15-20 phút.",
        "Nấu chín theo phương pháp truyền thống giữ trọn hương vị tươi ngọt tự nhiên.",
        "Trình bày ra đĩa hoặc tô, ăn nóng cùng cơm dẻo hoặc bún tươi."
      ],
      "en": [
        "Clean all fresh ingredients thoroughly and pat dry.",
        "Marinate with traditional seasoning for 15-20 minutes.",
        "Cook using authentic method to lock in natural sweetness and aroma.",
        "Serve steaming hot with fragrant jasmine rice or noodles."
      ]
    },
    "region": "national",
    "diningType": [
      "home_cook"
    ]
  },
  {
    "id": "vn-canh-suon-khoai-tay",
    "title": {
      "vi": "Canh Sườn Khoai Tây Cà Rốt Ngọt Lịm",
      "en": "Pork Ribs Soup with Potatoes & Carrots"
    },
    "image": "https://images.unsplash.com/photo-1604152135912-04a022e23696?auto=format&fit=crop&w=800&q=80",
    "category": {
      "vi": "Món Canh",
      "en": "Soup"
    },
    "mealType": [
      "lunch",
      "dinner"
    ],
    "dietaryTags": {
      "vi": [
        "Truyền thống",
        "Dinh dưỡng NIN",
        "Món Việt"
      ],
      "en": [
        "Traditional",
        "NIN Verified",
        "Authentic"
      ]
    },
    "time": "40 min",
    "servings": 4,
    "calories": 310,
    "protein": 22,
    "fat": 14,
    "carbs": 24,
    "servingSize": {
      "vi": "1 phần tiêu chuẩn (~250g)",
      "en": "1 standard serving (~250g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia (NIN) - Bảng Thành Phần Thực Phẩm Việt Nam",
      "en": "National Institute of Nutrition (NIN Vietnam) - Food Composition Table"
    },
    "recipeSource": {
      "vi": "Ẩm Thực Truyền Thống 3 Miền Việt Nam",
      "en": "Traditional Vietnamese Culinary Heritage"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Nguyên liệu chính tươi ngon",
          "en": "Fresh primary ingredient"
        },
        "amount": "400g"
      },
      {
        "name": {
          "vi": "Rau thơm & gia vị truyền thống",
          "en": "Aromatic herbs & traditional seasoning"
        },
        "amount": "100g"
      },
      {
        "name": {
          "vi": "Nước mắm truyền thống & hành tỏi",
          "en": "Pure fish sauce, shallots & garlic"
        },
        "amount": "Vừa đủ"
      }
    ],
    "instructions": {
      "vi": [
        "Sơ chế sạch các nguyên liệu tươi, để ráo nước.",
        "Ướp gia vị truyền thống cho ngấm đều trong 15-20 phút.",
        "Nấu chín theo phương pháp truyền thống giữ trọn hương vị tươi ngọt tự nhiên.",
        "Trình bày ra đĩa hoặc tô, ăn nóng cùng cơm dẻo hoặc bún tươi."
      ],
      "en": [
        "Clean all fresh ingredients thoroughly and pat dry.",
        "Marinate with traditional seasoning for 15-20 minutes.",
        "Cook using authentic method to lock in natural sweetness and aroma.",
        "Serve steaming hot with fragrant jasmine rice or noodles."
      ]
    },
    "region": "national",
    "diningType": [
      "home_cook"
    ]
  },
  {
    "id": "vn-canh-bau-nau-tom",
    "title": {
      "vi": "Canh Bầu Nấu Tôm Đồng Ngọt Mát",
      "en": "Calabash Gourd Soup with Sweet Wild Shrimp"
    },
    "image": "https://images.unsplash.com/photo-1511994298241-608e28f14fde?auto=format&fit=crop&w=800&q=80",
    "category": {
      "vi": "Món Canh",
      "en": "Soup"
    },
    "mealType": [
      "lunch",
      "dinner"
    ],
    "dietaryTags": {
      "vi": [
        "Truyền thống",
        "Dinh dưỡng NIN",
        "Món Việt"
      ],
      "en": [
        "Traditional",
        "NIN Verified",
        "Authentic"
      ]
    },
    "time": "15 min",
    "servings": 4,
    "calories": 130,
    "protein": 16,
    "fat": 3,
    "carbs": 8,
    "servingSize": {
      "vi": "1 phần tiêu chuẩn (~250g)",
      "en": "1 standard serving (~250g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia (NIN) - Bảng Thành Phần Thực Phẩm Việt Nam",
      "en": "National Institute of Nutrition (NIN Vietnam) - Food Composition Table"
    },
    "recipeSource": {
      "vi": "Ẩm Thực Truyền Thống 3 Miền Việt Nam",
      "en": "Traditional Vietnamese Culinary Heritage"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Nguyên liệu chính tươi ngon",
          "en": "Fresh primary ingredient"
        },
        "amount": "400g"
      },
      {
        "name": {
          "vi": "Rau thơm & gia vị truyền thống",
          "en": "Aromatic herbs & traditional seasoning"
        },
        "amount": "100g"
      },
      {
        "name": {
          "vi": "Nước mắm truyền thống & hành tỏi",
          "en": "Pure fish sauce, shallots & garlic"
        },
        "amount": "Vừa đủ"
      }
    ],
    "instructions": {
      "vi": [
        "Sơ chế sạch các nguyên liệu tươi, để ráo nước.",
        "Ướp gia vị truyền thống cho ngấm đều trong 15-20 phút.",
        "Nấu chín theo phương pháp truyền thống giữ trọn hương vị tươi ngọt tự nhiên.",
        "Trình bày ra đĩa hoặc tô, ăn nóng cùng cơm dẻo hoặc bún tươi."
      ],
      "en": [
        "Clean all fresh ingredients thoroughly and pat dry.",
        "Marinate with traditional seasoning for 15-20 minutes.",
        "Cook using authentic method to lock in natural sweetness and aroma.",
        "Serve steaming hot with fragrant jasmine rice or noodles."
      ]
    },
    "region": "national",
    "diningType": [
      "home_cook"
    ]
  },
  {
    "id": "vn-canh-cai-ca-thac-lac",
    "title": {
      "vi": "Canh Cải Bẹ Xanh Nấu Cá Thác Lác",
      "en": "Mustard Greens Soup with Featherback Fish Paste"
    },
    "image": "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?auto=format&fit=crop&w=800&q=80",
    "category": {
      "vi": "Món Canh",
      "en": "Soup"
    },
    "mealType": [
      "lunch",
      "dinner"
    ],
    "dietaryTags": {
      "vi": [
        "Truyền thống",
        "Dinh dưỡng NIN",
        "Món Việt"
      ],
      "en": [
        "Traditional",
        "NIN Verified",
        "Authentic"
      ]
    },
    "time": "20 min",
    "servings": 4,
    "calories": 170,
    "protein": 20,
    "fat": 5,
    "carbs": 6,
    "servingSize": {
      "vi": "1 phần tiêu chuẩn (~250g)",
      "en": "1 standard serving (~250g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia (NIN) - Bảng Thành Phần Thực Phẩm Việt Nam",
      "en": "National Institute of Nutrition (NIN Vietnam) - Food Composition Table"
    },
    "recipeSource": {
      "vi": "Ẩm Thực Truyền Thống 3 Miền Việt Nam",
      "en": "Traditional Vietnamese Culinary Heritage"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Nguyên liệu chính tươi ngon",
          "en": "Fresh primary ingredient"
        },
        "amount": "400g"
      },
      {
        "name": {
          "vi": "Rau thơm & gia vị truyền thống",
          "en": "Aromatic herbs & traditional seasoning"
        },
        "amount": "100g"
      },
      {
        "name": {
          "vi": "Nước mắm truyền thống & hành tỏi",
          "en": "Pure fish sauce, shallots & garlic"
        },
        "amount": "Vừa đủ"
      }
    ],
    "instructions": {
      "vi": [
        "Sơ chế sạch các nguyên liệu tươi, để ráo nước.",
        "Ướp gia vị truyền thống cho ngấm đều trong 15-20 phút.",
        "Nấu chín theo phương pháp truyền thống giữ trọn hương vị tươi ngọt tự nhiên.",
        "Trình bày ra đĩa hoặc tô, ăn nóng cùng cơm dẻo hoặc bún tươi."
      ],
      "en": [
        "Clean all fresh ingredients thoroughly and pat dry.",
        "Marinate with traditional seasoning for 15-20 minutes.",
        "Cook using authentic method to lock in natural sweetness and aroma.",
        "Serve steaming hot with fragrant jasmine rice or noodles."
      ]
    },
    "region": "national",
    "diningType": [
      "home_cook"
    ]
  },
  {
    "id": "vn-canh-ngao-chua",
    "title": {
      "vi": "Canh Ngao Chua Nấu Dứa Thì Là",
      "en": "Sour Clam Soup with Pineapple & Fresh Dill"
    },
    "image": "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=800&q=80",
    "category": {
      "vi": "Món Canh",
      "en": "Soup"
    },
    "mealType": [
      "lunch",
      "dinner"
    ],
    "dietaryTags": {
      "vi": [
        "Truyền thống",
        "Dinh dưỡng NIN",
        "Món Việt"
      ],
      "en": [
        "Traditional",
        "NIN Verified",
        "Authentic"
      ]
    },
    "time": "20 min",
    "servings": 4,
    "calories": 140,
    "protein": 15,
    "fat": 3,
    "carbs": 12,
    "servingSize": {
      "vi": "1 phần tiêu chuẩn (~250g)",
      "en": "1 standard serving (~250g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia (NIN) - Bảng Thành Phần Thực Phẩm Việt Nam",
      "en": "National Institute of Nutrition (NIN Vietnam) - Food Composition Table"
    },
    "recipeSource": {
      "vi": "Ẩm Thực Truyền Thống 3 Miền Việt Nam",
      "en": "Traditional Vietnamese Culinary Heritage"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Nguyên liệu chính tươi ngon",
          "en": "Fresh primary ingredient"
        },
        "amount": "400g"
      },
      {
        "name": {
          "vi": "Rau thơm & gia vị truyền thống",
          "en": "Aromatic herbs & traditional seasoning"
        },
        "amount": "100g"
      },
      {
        "name": {
          "vi": "Nước mắm truyền thống & hành tỏi",
          "en": "Pure fish sauce, shallots & garlic"
        },
        "amount": "Vừa đủ"
      }
    ],
    "instructions": {
      "vi": [
        "Sơ chế sạch các nguyên liệu tươi, để ráo nước.",
        "Ướp gia vị truyền thống cho ngấm đều trong 15-20 phút.",
        "Nấu chín theo phương pháp truyền thống giữ trọn hương vị tươi ngọt tự nhiên.",
        "Trình bày ra đĩa hoặc tô, ăn nóng cùng cơm dẻo hoặc bún tươi."
      ],
      "en": [
        "Clean all fresh ingredients thoroughly and pat dry.",
        "Marinate with traditional seasoning for 15-20 minutes.",
        "Cook using authentic method to lock in natural sweetness and aroma.",
        "Serve steaming hot with fragrant jasmine rice or noodles."
      ]
    },
    "region": "national",
    "diningType": [
      "home_cook"
    ]
  },
  {
    "id": "vn-canh-hen-hoa-thien-ly",
    "title": {
      "vi": "Canh Hến Nấu Hoa Thiên Lý Xứ Huế",
      "en": "Baby River Clam Soup with Telosma Flowers"
    },
    "image": "https://images.unsplash.com/photo-1514944298352-b43063f25603?auto=format&fit=crop&w=800&q=80",
    "category": {
      "vi": "Món Canh",
      "en": "Soup"
    },
    "mealType": [
      "lunch",
      "dinner"
    ],
    "dietaryTags": {
      "vi": [
        "Truyền thống",
        "Dinh dưỡng NIN",
        "Món Việt"
      ],
      "en": [
        "Traditional",
        "NIN Verified",
        "Authentic"
      ]
    },
    "time": "25 min",
    "servings": 4,
    "calories": 135,
    "protein": 16,
    "fat": 3,
    "carbs": 9,
    "servingSize": {
      "vi": "1 phần tiêu chuẩn (~250g)",
      "en": "1 standard serving (~250g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia (NIN) - Bảng Thành Phần Thực Phẩm Việt Nam",
      "en": "National Institute of Nutrition (NIN Vietnam) - Food Composition Table"
    },
    "recipeSource": {
      "vi": "Ẩm Thực Truyền Thống 3 Miền Việt Nam",
      "en": "Traditional Vietnamese Culinary Heritage"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Nguyên liệu chính tươi ngon",
          "en": "Fresh primary ingredient"
        },
        "amount": "400g"
      },
      {
        "name": {
          "vi": "Rau thơm & gia vị truyền thống",
          "en": "Aromatic herbs & traditional seasoning"
        },
        "amount": "100g"
      },
      {
        "name": {
          "vi": "Nước mắm truyền thống & hành tỏi",
          "en": "Pure fish sauce, shallots & garlic"
        },
        "amount": "Vừa đủ"
      }
    ],
    "instructions": {
      "vi": [
        "Sơ chế sạch các nguyên liệu tươi, để ráo nước.",
        "Ướp gia vị truyền thống cho ngấm đều trong 15-20 phút.",
        "Nấu chín theo phương pháp truyền thống giữ trọn hương vị tươi ngọt tự nhiên.",
        "Trình bày ra đĩa hoặc tô, ăn nóng cùng cơm dẻo hoặc bún tươi."
      ],
      "en": [
        "Clean all fresh ingredients thoroughly and pat dry.",
        "Marinate with traditional seasoning for 15-20 minutes.",
        "Cook using authentic method to lock in natural sweetness and aroma.",
        "Serve steaming hot with fragrant jasmine rice or noodles."
      ]
    },
    "region": "central",
    "diningType": [
      "home_cook"
    ]
  },
  {
    "id": "vn-canh-rong-bien-thit-bo",
    "title": {
      "vi": "Canh Rong Biển Nấu Thịt Bò Thanh Ngọt",
      "en": "Seaweed Soup with Tender Sliced Beef"
    },
    "image": "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=800&q=80",
    "category": {
      "vi": "Món Canh",
      "en": "Soup"
    },
    "mealType": [
      "lunch",
      "dinner"
    ],
    "dietaryTags": {
      "vi": [
        "Truyền thống",
        "Dinh dưỡng NIN",
        "Món Việt"
      ],
      "en": [
        "Traditional",
        "NIN Verified",
        "Authentic"
      ]
    },
    "time": "15 min",
    "servings": 4,
    "calories": 160,
    "protein": 18,
    "fat": 6,
    "carbs": 7,
    "servingSize": {
      "vi": "1 phần tiêu chuẩn (~250g)",
      "en": "1 standard serving (~250g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia (NIN) - Bảng Thành Phần Thực Phẩm Việt Nam",
      "en": "National Institute of Nutrition (NIN Vietnam) - Food Composition Table"
    },
    "recipeSource": {
      "vi": "Ẩm Thực Truyền Thống 3 Miền Việt Nam",
      "en": "Traditional Vietnamese Culinary Heritage"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Nguyên liệu chính tươi ngon",
          "en": "Fresh primary ingredient"
        },
        "amount": "400g"
      },
      {
        "name": {
          "vi": "Rau thơm & gia vị truyền thống",
          "en": "Aromatic herbs & traditional seasoning"
        },
        "amount": "100g"
      },
      {
        "name": {
          "vi": "Nước mắm truyền thống & hành tỏi",
          "en": "Pure fish sauce, shallots & garlic"
        },
        "amount": "Vừa đủ"
      }
    ],
    "instructions": {
      "vi": [
        "Sơ chế sạch các nguyên liệu tươi, để ráo nước.",
        "Ướp gia vị truyền thống cho ngấm đều trong 15-20 phút.",
        "Nấu chín theo phương pháp truyền thống giữ trọn hương vị tươi ngọt tự nhiên.",
        "Trình bày ra đĩa hoặc tô, ăn nóng cùng cơm dẻo hoặc bún tươi."
      ],
      "en": [
        "Clean all fresh ingredients thoroughly and pat dry.",
        "Marinate with traditional seasoning for 15-20 minutes.",
        "Cook using authentic method to lock in natural sweetness and aroma.",
        "Serve steaming hot with fragrant jasmine rice or noodles."
      ]
    },
    "region": "national",
    "diningType": [
      "home_cook"
    ]
  },
  {
    "id": "vn-canh-bap-cai-cuon-thit",
    "title": {
      "vi": "Canh Bắp Cải Cuộn Thịt Thắt Nơ Hành",
      "en": "Cabbage Rolls Stuffed with Pork in Clear Broth"
    },
    "image": "https://images.unsplash.com/photo-1594041680534-e8c8cdebd659?auto=format&fit=crop&w=800&q=80",
    "category": {
      "vi": "Món Canh",
      "en": "Soup"
    },
    "mealType": [
      "lunch",
      "dinner"
    ],
    "dietaryTags": {
      "vi": [
        "Truyền thống",
        "Dinh dưỡng NIN",
        "Món Việt"
      ],
      "en": [
        "Traditional",
        "NIN Verified",
        "Authentic"
      ]
    },
    "time": "30 min",
    "servings": 4,
    "calories": 190,
    "protein": 17,
    "fat": 7,
    "carbs": 11,
    "servingSize": {
      "vi": "1 phần tiêu chuẩn (~250g)",
      "en": "1 standard serving (~250g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia (NIN) - Bảng Thành Phần Thực Phẩm Việt Nam",
      "en": "National Institute of Nutrition (NIN Vietnam) - Food Composition Table"
    },
    "recipeSource": {
      "vi": "Ẩm Thực Truyền Thống 3 Miền Việt Nam",
      "en": "Traditional Vietnamese Culinary Heritage"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Nguyên liệu chính tươi ngon",
          "en": "Fresh primary ingredient"
        },
        "amount": "400g"
      },
      {
        "name": {
          "vi": "Rau thơm & gia vị truyền thống",
          "en": "Aromatic herbs & traditional seasoning"
        },
        "amount": "100g"
      },
      {
        "name": {
          "vi": "Nước mắm truyền thống & hành tỏi",
          "en": "Pure fish sauce, shallots & garlic"
        },
        "amount": "Vừa đủ"
      }
    ],
    "instructions": {
      "vi": [
        "Sơ chế sạch các nguyên liệu tươi, để ráo nước.",
        "Ướp gia vị truyền thống cho ngấm đều trong 15-20 phút.",
        "Nấu chín theo phương pháp truyền thống giữ trọn hương vị tươi ngọt tự nhiên.",
        "Trình bày ra đĩa hoặc tô, ăn nóng cùng cơm dẻo hoặc bún tươi."
      ],
      "en": [
        "Clean all fresh ingredients thoroughly and pat dry.",
        "Marinate with traditional seasoning for 15-20 minutes.",
        "Cook using authentic method to lock in natural sweetness and aroma.",
        "Serve steaming hot with fragrant jasmine rice or noodles."
      ]
    },
    "region": "national",
    "diningType": [
      "home_cook"
    ]
  },
  {
    "id": "vn-canh-mang-chua-bo",
    "title": {
      "vi": "Canh Măng Chua Nấu Bắp Bò",
      "en": "Sour Bamboo Shoot Soup with Beef Shank"
    },
    "image": "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=800&q=80",
    "category": {
      "vi": "Món Canh",
      "en": "Soup"
    },
    "mealType": [
      "lunch",
      "dinner"
    ],
    "dietaryTags": {
      "vi": [
        "Truyền thống",
        "Dinh dưỡng NIN",
        "Món Việt"
      ],
      "en": [
        "Traditional",
        "NIN Verified",
        "Authentic"
      ]
    },
    "time": "35 min",
    "servings": 4,
    "calories": 240,
    "protein": 24,
    "fat": 9,
    "carbs": 8,
    "servingSize": {
      "vi": "1 phần tiêu chuẩn (~250g)",
      "en": "1 standard serving (~250g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia (NIN) - Bảng Thành Phần Thực Phẩm Việt Nam",
      "en": "National Institute of Nutrition (NIN Vietnam) - Food Composition Table"
    },
    "recipeSource": {
      "vi": "Ẩm Thực Truyền Thống 3 Miền Việt Nam",
      "en": "Traditional Vietnamese Culinary Heritage"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Nguyên liệu chính tươi ngon",
          "en": "Fresh primary ingredient"
        },
        "amount": "400g"
      },
      {
        "name": {
          "vi": "Rau thơm & gia vị truyền thống",
          "en": "Aromatic herbs & traditional seasoning"
        },
        "amount": "100g"
      },
      {
        "name": {
          "vi": "Nước mắm truyền thống & hành tỏi",
          "en": "Pure fish sauce, shallots & garlic"
        },
        "amount": "Vừa đủ"
      }
    ],
    "instructions": {
      "vi": [
        "Sơ chế sạch các nguyên liệu tươi, để ráo nước.",
        "Ướp gia vị truyền thống cho ngấm đều trong 15-20 phút.",
        "Nấu chín theo phương pháp truyền thống giữ trọn hương vị tươi ngọt tự nhiên.",
        "Trình bày ra đĩa hoặc tô, ăn nóng cùng cơm dẻo hoặc bún tươi."
      ],
      "en": [
        "Clean all fresh ingredients thoroughly and pat dry.",
        "Marinate with traditional seasoning for 15-20 minutes.",
        "Cook using authentic method to lock in natural sweetness and aroma.",
        "Serve steaming hot with fragrant jasmine rice or noodles."
      ]
    },
    "region": "national",
    "diningType": [
      "home_cook"
    ]
  },
  {
    "id": "vn-canh-chua-tom",
    "title": {
      "vi": "Canh Chua Tôm Tươi Miền Tây",
      "en": "Mekong Sour Shrimp Soup with Tamarind & Okra"
    },
    "image": "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=800&q=80",
    "category": {
      "vi": "Món Canh",
      "en": "Soup"
    },
    "mealType": [
      "lunch",
      "dinner"
    ],
    "dietaryTags": {
      "vi": [
        "Truyền thống",
        "Dinh dưỡng NIN",
        "Món Việt"
      ],
      "en": [
        "Traditional",
        "NIN Verified",
        "Authentic"
      ]
    },
    "time": "25 min",
    "servings": 4,
    "calories": 180,
    "protein": 19,
    "fat": 4,
    "carbs": 14,
    "servingSize": {
      "vi": "1 phần tiêu chuẩn (~250g)",
      "en": "1 standard serving (~250g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia (NIN) - Bảng Thành Phần Thực Phẩm Việt Nam",
      "en": "National Institute of Nutrition (NIN Vietnam) - Food Composition Table"
    },
    "recipeSource": {
      "vi": "Ẩm Thực Truyền Thống 3 Miền Việt Nam",
      "en": "Traditional Vietnamese Culinary Heritage"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Nguyên liệu chính tươi ngon",
          "en": "Fresh primary ingredient"
        },
        "amount": "400g"
      },
      {
        "name": {
          "vi": "Rau thơm & gia vị truyền thống",
          "en": "Aromatic herbs & traditional seasoning"
        },
        "amount": "100g"
      },
      {
        "name": {
          "vi": "Nước mắm truyền thống & hành tỏi",
          "en": "Pure fish sauce, shallots & garlic"
        },
        "amount": "Vừa đủ"
      }
    ],
    "instructions": {
      "vi": [
        "Sơ chế sạch các nguyên liệu tươi, để ráo nước.",
        "Ướp gia vị truyền thống cho ngấm đều trong 15-20 phút.",
        "Nấu chín theo phương pháp truyền thống giữ trọn hương vị tươi ngọt tự nhiên.",
        "Trình bày ra đĩa hoặc tô, ăn nóng cùng cơm dẻo hoặc bún tươi."
      ],
      "en": [
        "Clean all fresh ingredients thoroughly and pat dry.",
        "Marinate with traditional seasoning for 15-20 minutes.",
        "Cook using authentic method to lock in natural sweetness and aroma.",
        "Serve steaming hot with fragrant jasmine rice or noodles."
      ]
    },
    "region": "south",
    "diningType": [
      "home_cook"
    ]
  },
  {
    "id": "vn-canh-khoai-mo",
    "title": {
      "vi": "Canh Khoai Mỡ Nấu Tôm Băm Tím Biếc",
      "en": "Purple Yam Soup with Minced Shrimp & Rice Paddy Herb"
    },
    "image": "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80",
    "category": {
      "vi": "Món Canh",
      "en": "Soup"
    },
    "mealType": [
      "lunch",
      "dinner"
    ],
    "dietaryTags": {
      "vi": [
        "Truyền thống",
        "Dinh dưỡng NIN",
        "Món Việt"
      ],
      "en": [
        "Traditional",
        "NIN Verified",
        "Authentic"
      ]
    },
    "time": "25 min",
    "servings": 4,
    "calories": 190,
    "protein": 14,
    "fat": 4,
    "carbs": 26,
    "servingSize": {
      "vi": "1 phần tiêu chuẩn (~250g)",
      "en": "1 standard serving (~250g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia (NIN) - Bảng Thành Phần Thực Phẩm Việt Nam",
      "en": "National Institute of Nutrition (NIN Vietnam) - Food Composition Table"
    },
    "recipeSource": {
      "vi": "Ẩm Thực Truyền Thống 3 Miền Việt Nam",
      "en": "Traditional Vietnamese Culinary Heritage"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Nguyên liệu chính tươi ngon",
          "en": "Fresh primary ingredient"
        },
        "amount": "400g"
      },
      {
        "name": {
          "vi": "Rau thơm & gia vị truyền thống",
          "en": "Aromatic herbs & traditional seasoning"
        },
        "amount": "100g"
      },
      {
        "name": {
          "vi": "Nước mắm truyền thống & hành tỏi",
          "en": "Pure fish sauce, shallots & garlic"
        },
        "amount": "Vừa đủ"
      }
    ],
    "instructions": {
      "vi": [
        "Sơ chế sạch các nguyên liệu tươi, để ráo nước.",
        "Ướp gia vị truyền thống cho ngấm đều trong 15-20 phút.",
        "Nấu chín theo phương pháp truyền thống giữ trọn hương vị tươi ngọt tự nhiên.",
        "Trình bày ra đĩa hoặc tô, ăn nóng cùng cơm dẻo hoặc bún tươi."
      ],
      "en": [
        "Clean all fresh ingredients thoroughly and pat dry.",
        "Marinate with traditional seasoning for 15-20 minutes.",
        "Cook using authentic method to lock in natural sweetness and aroma.",
        "Serve steaming hot with fragrant jasmine rice or noodles."
      ]
    },
    "region": "national",
    "diningType": [
      "home_cook"
    ]
  },
  {
    "id": "vn-canh-cu-sen-suon",
    "title": {
      "vi": "Canh Củ Sen Hầm Sườn Bổ Dưỡng",
      "en": "Lotus Root & Pork Ribs Nourishing Clear Soup"
    },
    "image": "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=800&q=80",
    "category": {
      "vi": "Món Canh",
      "en": "Soup"
    },
    "mealType": [
      "lunch",
      "dinner"
    ],
    "dietaryTags": {
      "vi": [
        "Truyền thống",
        "Dinh dưỡng NIN",
        "Món Việt"
      ],
      "en": [
        "Traditional",
        "NIN Verified",
        "Authentic"
      ]
    },
    "time": "50 min",
    "servings": 4,
    "calories": 280,
    "protein": 23,
    "fat": 12,
    "carbs": 18,
    "servingSize": {
      "vi": "1 phần tiêu chuẩn (~250g)",
      "en": "1 standard serving (~250g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia (NIN) - Bảng Thành Phần Thực Phẩm Việt Nam",
      "en": "National Institute of Nutrition (NIN Vietnam) - Food Composition Table"
    },
    "recipeSource": {
      "vi": "Ẩm Thực Truyền Thống 3 Miền Việt Nam",
      "en": "Traditional Vietnamese Culinary Heritage"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Nguyên liệu chính tươi ngon",
          "en": "Fresh primary ingredient"
        },
        "amount": "400g"
      },
      {
        "name": {
          "vi": "Rau thơm & gia vị truyền thống",
          "en": "Aromatic herbs & traditional seasoning"
        },
        "amount": "100g"
      },
      {
        "name": {
          "vi": "Nước mắm truyền thống & hành tỏi",
          "en": "Pure fish sauce, shallots & garlic"
        },
        "amount": "Vừa đủ"
      }
    ],
    "instructions": {
      "vi": [
        "Sơ chế sạch các nguyên liệu tươi, để ráo nước.",
        "Ướp gia vị truyền thống cho ngấm đều trong 15-20 phút.",
        "Nấu chín theo phương pháp truyền thống giữ trọn hương vị tươi ngọt tự nhiên.",
        "Trình bày ra đĩa hoặc tô, ăn nóng cùng cơm dẻo hoặc bún tươi."
      ],
      "en": [
        "Clean all fresh ingredients thoroughly and pat dry.",
        "Marinate with traditional seasoning for 15-20 minutes.",
        "Cook using authentic method to lock in natural sweetness and aroma.",
        "Serve steaming hot with fragrant jasmine rice or noodles."
      ]
    },
    "region": "national",
    "diningType": [
      "home_cook"
    ]
  },
  {
    "id": "vn-canh-sup-rau-cu",
    "title": {
      "vi": "Canh Súp Rau Củ Thanh Đạm Chay",
      "en": "Vegetarian Sweet Garden Broth with Sweet Corn"
    },
    "image": "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=800&q=80",
    "category": {
      "vi": "Món Canh",
      "en": "Soup"
    },
    "mealType": [
      "lunch",
      "dinner"
    ],
    "dietaryTags": {
      "vi": [
        "Truyền thống",
        "Dinh dưỡng NIN",
        "Món Việt"
      ],
      "en": [
        "Traditional",
        "NIN Verified",
        "Authentic"
      ]
    },
    "time": "25 min",
    "servings": 4,
    "calories": 110,
    "protein": 5,
    "fat": 2,
    "carbs": 20,
    "servingSize": {
      "vi": "1 phần tiêu chuẩn (~250g)",
      "en": "1 standard serving (~250g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia (NIN) - Bảng Thành Phần Thực Phẩm Việt Nam",
      "en": "National Institute of Nutrition (NIN Vietnam) - Food Composition Table"
    },
    "recipeSource": {
      "vi": "Ẩm Thực Truyền Thống 3 Miền Việt Nam",
      "en": "Traditional Vietnamese Culinary Heritage"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Nguyên liệu chính tươi ngon",
          "en": "Fresh primary ingredient"
        },
        "amount": "400g"
      },
      {
        "name": {
          "vi": "Rau thơm & gia vị truyền thống",
          "en": "Aromatic herbs & traditional seasoning"
        },
        "amount": "100g"
      },
      {
        "name": {
          "vi": "Nước mắm truyền thống & hành tỏi",
          "en": "Pure fish sauce, shallots & garlic"
        },
        "amount": "Vừa đủ"
      }
    ],
    "instructions": {
      "vi": [
        "Sơ chế sạch các nguyên liệu tươi, để ráo nước.",
        "Ướp gia vị truyền thống cho ngấm đều trong 15-20 phút.",
        "Nấu chín theo phương pháp truyền thống giữ trọn hương vị tươi ngọt tự nhiên.",
        "Trình bày ra đĩa hoặc tô, ăn nóng cùng cơm dẻo hoặc bún tươi."
      ],
      "en": [
        "Clean all fresh ingredients thoroughly and pat dry.",
        "Marinate with traditional seasoning for 15-20 minutes.",
        "Cook using authentic method to lock in natural sweetness and aroma.",
        "Serve steaming hot with fragrant jasmine rice or noodles."
      ]
    },
    "region": "national",
    "diningType": [
      "home_cook"
    ]
  },
  {
    "id": "vn-canh-xa-lach-xoong",
    "title": {
      "vi": "Canh Xà Lách Xoong Thịt Băm",
      "en": "Watercress Soup with Minced Pork"
    },
    "image": "https://images.unsplash.com/photo-1607532941433-304659e8198a?auto=format&fit=crop&w=800&q=80",
    "category": {
      "vi": "Món Canh",
      "en": "Soup"
    },
    "mealType": [
      "lunch",
      "dinner"
    ],
    "dietaryTags": {
      "vi": [
        "Truyền thống",
        "Dinh dưỡng NIN",
        "Món Việt"
      ],
      "en": [
        "Traditional",
        "NIN Verified",
        "Authentic"
      ]
    },
    "time": "15 min",
    "servings": 4,
    "calories": 125,
    "protein": 13,
    "fat": 5,
    "carbs": 6,
    "servingSize": {
      "vi": "1 phần tiêu chuẩn (~250g)",
      "en": "1 standard serving (~250g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia (NIN) - Bảng Thành Phần Thực Phẩm Việt Nam",
      "en": "National Institute of Nutrition (NIN Vietnam) - Food Composition Table"
    },
    "recipeSource": {
      "vi": "Ẩm Thực Truyền Thống 3 Miền Việt Nam",
      "en": "Traditional Vietnamese Culinary Heritage"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Nguyên liệu chính tươi ngon",
          "en": "Fresh primary ingredient"
        },
        "amount": "400g"
      },
      {
        "name": {
          "vi": "Rau thơm & gia vị truyền thống",
          "en": "Aromatic herbs & traditional seasoning"
        },
        "amount": "100g"
      },
      {
        "name": {
          "vi": "Nước mắm truyền thống & hành tỏi",
          "en": "Pure fish sauce, shallots & garlic"
        },
        "amount": "Vừa đủ"
      }
    ],
    "instructions": {
      "vi": [
        "Sơ chế sạch các nguyên liệu tươi, để ráo nước.",
        "Ướp gia vị truyền thống cho ngấm đều trong 15-20 phút.",
        "Nấu chín theo phương pháp truyền thống giữ trọn hương vị tươi ngọt tự nhiên.",
        "Trình bày ra đĩa hoặc tô, ăn nóng cùng cơm dẻo hoặc bún tươi."
      ],
      "en": [
        "Clean all fresh ingredients thoroughly and pat dry.",
        "Marinate with traditional seasoning for 15-20 minutes.",
        "Cook using authentic method to lock in natural sweetness and aroma.",
        "Serve steaming hot with fragrant jasmine rice or noodles."
      ]
    },
    "region": "national",
    "diningType": [
      "home_cook"
    ]
  },
  {
    "id": "vn-rau-lang-xao-toi",
    "title": {
      "vi": "Rau Lang Xào Tỏi Xanh Giòn",
      "en": "Stir-Fried Sweet Potato Greens with Golden Garlic"
    },
    "image": "https://images.unsplash.com/photo-1515543237350-b3eea1ec8082?auto=format&fit=crop&w=800&q=80",
    "category": {
      "vi": "Rau Củ",
      "en": "Vegetables"
    },
    "mealType": [
      "lunch",
      "dinner"
    ],
    "dietaryTags": {
      "vi": [
        "Truyền thống",
        "Dinh dưỡng NIN",
        "Món Việt"
      ],
      "en": [
        "Traditional",
        "NIN Verified",
        "Authentic"
      ]
    },
    "time": "10 min",
    "servings": 4,
    "calories": 85,
    "protein": 4,
    "fat": 5,
    "carbs": 6,
    "servingSize": {
      "vi": "1 phần tiêu chuẩn (~250g)",
      "en": "1 standard serving (~250g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia (NIN) - Bảng Thành Phần Thực Phẩm Việt Nam",
      "en": "National Institute of Nutrition (NIN Vietnam) - Food Composition Table"
    },
    "recipeSource": {
      "vi": "Ẩm Thực Truyền Thống 3 Miền Việt Nam",
      "en": "Traditional Vietnamese Culinary Heritage"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Nguyên liệu chính tươi ngon",
          "en": "Fresh primary ingredient"
        },
        "amount": "400g"
      },
      {
        "name": {
          "vi": "Rau thơm & gia vị truyền thống",
          "en": "Aromatic herbs & traditional seasoning"
        },
        "amount": "100g"
      },
      {
        "name": {
          "vi": "Nước mắm truyền thống & hành tỏi",
          "en": "Pure fish sauce, shallots & garlic"
        },
        "amount": "Vừa đủ"
      }
    ],
    "instructions": {
      "vi": [
        "Sơ chế sạch các nguyên liệu tươi, để ráo nước.",
        "Ướp gia vị truyền thống cho ngấm đều trong 15-20 phút.",
        "Nấu chín theo phương pháp truyền thống giữ trọn hương vị tươi ngọt tự nhiên.",
        "Trình bày ra đĩa hoặc tô, ăn nóng cùng cơm dẻo hoặc bún tươi."
      ],
      "en": [
        "Clean all fresh ingredients thoroughly and pat dry.",
        "Marinate with traditional seasoning for 15-20 minutes.",
        "Cook using authentic method to lock in natural sweetness and aroma.",
        "Serve steaming hot with fragrant jasmine rice or noodles."
      ]
    },
    "region": "national",
    "diningType": [
      "home_cook"
    ]
  },
  {
    "id": "vn-bap-cai-xao-ca",
    "title": {
      "vi": "Bắp Cải Xào Cà Chua Chín Tới",
      "en": "Stir-Fried Cabbage with Fresh Tomatoes"
    },
    "image": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
    "category": {
      "vi": "Rau Củ",
      "en": "Vegetables"
    },
    "mealType": [
      "lunch",
      "dinner"
    ],
    "dietaryTags": {
      "vi": [
        "Truyền thống",
        "Dinh dưỡng NIN",
        "Món Việt"
      ],
      "en": [
        "Traditional",
        "NIN Verified",
        "Authentic"
      ]
    },
    "time": "12 min",
    "servings": 4,
    "calories": 75,
    "protein": 3,
    "fat": 3,
    "carbs": 9,
    "servingSize": {
      "vi": "1 phần tiêu chuẩn (~250g)",
      "en": "1 standard serving (~250g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia (NIN) - Bảng Thành Phần Thực Phẩm Việt Nam",
      "en": "National Institute of Nutrition (NIN Vietnam) - Food Composition Table"
    },
    "recipeSource": {
      "vi": "Ẩm Thực Truyền Thống 3 Miền Việt Nam",
      "en": "Traditional Vietnamese Culinary Heritage"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Nguyên liệu chính tươi ngon",
          "en": "Fresh primary ingredient"
        },
        "amount": "400g"
      },
      {
        "name": {
          "vi": "Rau thơm & gia vị truyền thống",
          "en": "Aromatic herbs & traditional seasoning"
        },
        "amount": "100g"
      },
      {
        "name": {
          "vi": "Nước mắm truyền thống & hành tỏi",
          "en": "Pure fish sauce, shallots & garlic"
        },
        "amount": "Vừa đủ"
      }
    ],
    "instructions": {
      "vi": [
        "Sơ chế sạch các nguyên liệu tươi, để ráo nước.",
        "Ướp gia vị truyền thống cho ngấm đều trong 15-20 phút.",
        "Nấu chín theo phương pháp truyền thống giữ trọn hương vị tươi ngọt tự nhiên.",
        "Trình bày ra đĩa hoặc tô, ăn nóng cùng cơm dẻo hoặc bún tươi."
      ],
      "en": [
        "Clean all fresh ingredients thoroughly and pat dry.",
        "Marinate with traditional seasoning for 15-20 minutes.",
        "Cook using authentic method to lock in natural sweetness and aroma.",
        "Serve steaming hot with fragrant jasmine rice or noodles."
      ]
    },
    "region": "national",
    "diningType": [
      "home_cook"
    ]
  },
  {
    "id": "vn-dau-cove-xao-bo",
    "title": {
      "vi": "Đậu Cô Ve Xào Thịt Bò Mềm",
      "en": "Stir-Fried Green String Beans with Beef"
    },
    "image": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
    "category": {
      "vi": "Rau Củ",
      "en": "Vegetables"
    },
    "mealType": [
      "lunch",
      "dinner"
    ],
    "dietaryTags": {
      "vi": [
        "Truyền thống",
        "Dinh dưỡng NIN",
        "Món Việt"
      ],
      "en": [
        "Traditional",
        "NIN Verified",
        "Authentic"
      ]
    },
    "time": "15 min",
    "servings": 4,
    "calories": 190,
    "protein": 18,
    "fat": 7,
    "carbs": 11,
    "servingSize": {
      "vi": "1 phần tiêu chuẩn (~250g)",
      "en": "1 standard serving (~250g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia (NIN) - Bảng Thành Phần Thực Phẩm Việt Nam",
      "en": "National Institute of Nutrition (NIN Vietnam) - Food Composition Table"
    },
    "recipeSource": {
      "vi": "Ẩm Thực Truyền Thống 3 Miền Việt Nam",
      "en": "Traditional Vietnamese Culinary Heritage"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Nguyên liệu chính tươi ngon",
          "en": "Fresh primary ingredient"
        },
        "amount": "400g"
      },
      {
        "name": {
          "vi": "Rau thơm & gia vị truyền thống",
          "en": "Aromatic herbs & traditional seasoning"
        },
        "amount": "100g"
      },
      {
        "name": {
          "vi": "Nước mắm truyền thống & hành tỏi",
          "en": "Pure fish sauce, shallots & garlic"
        },
        "amount": "Vừa đủ"
      }
    ],
    "instructions": {
      "vi": [
        "Sơ chế sạch các nguyên liệu tươi, để ráo nước.",
        "Ướp gia vị truyền thống cho ngấm đều trong 15-20 phút.",
        "Nấu chín theo phương pháp truyền thống giữ trọn hương vị tươi ngọt tự nhiên.",
        "Trình bày ra đĩa hoặc tô, ăn nóng cùng cơm dẻo hoặc bún tươi."
      ],
      "en": [
        "Clean all fresh ingredients thoroughly and pat dry.",
        "Marinate with traditional seasoning for 15-20 minutes.",
        "Cook using authentic method to lock in natural sweetness and aroma.",
        "Serve steaming hot with fragrant jasmine rice or noodles."
      ]
    },
    "region": "national",
    "diningType": [
      "home_cook"
    ]
  },
  {
    "id": "vn-su-su-xao-bo",
    "title": {
      "vi": "Su Su Bào Xào Thịt Bò",
      "en": "Stir-Fried Chayote with Sliced Beef"
    },
    "image": "https://images.unsplash.com/photo-1546793665-c74683f339c1?auto=format&fit=crop&w=800&q=80",
    "category": {
      "vi": "Rau Củ",
      "en": "Vegetables"
    },
    "mealType": [
      "lunch",
      "dinner"
    ],
    "dietaryTags": {
      "vi": [
        "Truyền thống",
        "Dinh dưỡng NIN",
        "Món Việt"
      ],
      "en": [
        "Traditional",
        "NIN Verified",
        "Authentic"
      ]
    },
    "time": "15 min",
    "servings": 4,
    "calories": 180,
    "protein": 17,
    "fat": 6,
    "carbs": 12,
    "servingSize": {
      "vi": "1 phần tiêu chuẩn (~250g)",
      "en": "1 standard serving (~250g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia (NIN) - Bảng Thành Phần Thực Phẩm Việt Nam",
      "en": "National Institute of Nutrition (NIN Vietnam) - Food Composition Table"
    },
    "recipeSource": {
      "vi": "Ẩm Thực Truyền Thống 3 Miền Việt Nam",
      "en": "Traditional Vietnamese Culinary Heritage"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Nguyên liệu chính tươi ngon",
          "en": "Fresh primary ingredient"
        },
        "amount": "400g"
      },
      {
        "name": {
          "vi": "Rau thơm & gia vị truyền thống",
          "en": "Aromatic herbs & traditional seasoning"
        },
        "amount": "100g"
      },
      {
        "name": {
          "vi": "Nước mắm truyền thống & hành tỏi",
          "en": "Pure fish sauce, shallots & garlic"
        },
        "amount": "Vừa đủ"
      }
    ],
    "instructions": {
      "vi": [
        "Sơ chế sạch các nguyên liệu tươi, để ráo nước.",
        "Ướp gia vị truyền thống cho ngấm đều trong 15-20 phút.",
        "Nấu chín theo phương pháp truyền thống giữ trọn hương vị tươi ngọt tự nhiên.",
        "Trình bày ra đĩa hoặc tô, ăn nóng cùng cơm dẻo hoặc bún tươi."
      ],
      "en": [
        "Clean all fresh ingredients thoroughly and pat dry.",
        "Marinate with traditional seasoning for 15-20 minutes.",
        "Cook using authentic method to lock in natural sweetness and aroma.",
        "Serve steaming hot with fragrant jasmine rice or noodles."
      ]
    },
    "region": "national",
    "diningType": [
      "home_cook"
    ]
  },
  {
    "id": "vn-mang-tay-xao-tom",
    "title": {
      "vi": "Măng Tây Xào Tôm Tươi Giòn Ngọt",
      "en": "Stir-Fried Asparagus with Tiger Prawns"
    },
    "image": "https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?auto=format&fit=crop&w=800&q=80",
    "category": {
      "vi": "Rau Củ",
      "en": "Vegetables"
    },
    "mealType": [
      "lunch",
      "dinner"
    ],
    "dietaryTags": {
      "vi": [
        "Truyền thống",
        "Dinh dưỡng NIN",
        "Món Việt"
      ],
      "en": [
        "Traditional",
        "NIN Verified",
        "Authentic"
      ]
    },
    "time": "15 min",
    "servings": 4,
    "calories": 160,
    "protein": 20,
    "fat": 4,
    "carbs": 9,
    "servingSize": {
      "vi": "1 phần tiêu chuẩn (~250g)",
      "en": "1 standard serving (~250g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia (NIN) - Bảng Thành Phần Thực Phẩm Việt Nam",
      "en": "National Institute of Nutrition (NIN Vietnam) - Food Composition Table"
    },
    "recipeSource": {
      "vi": "Ẩm Thực Truyền Thống 3 Miền Việt Nam",
      "en": "Traditional Vietnamese Culinary Heritage"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Nguyên liệu chính tươi ngon",
          "en": "Fresh primary ingredient"
        },
        "amount": "400g"
      },
      {
        "name": {
          "vi": "Rau thơm & gia vị truyền thống",
          "en": "Aromatic herbs & traditional seasoning"
        },
        "amount": "100g"
      },
      {
        "name": {
          "vi": "Nước mắm truyền thống & hành tỏi",
          "en": "Pure fish sauce, shallots & garlic"
        },
        "amount": "Vừa đủ"
      }
    ],
    "instructions": {
      "vi": [
        "Sơ chế sạch các nguyên liệu tươi, để ráo nước.",
        "Ướp gia vị truyền thống cho ngấm đều trong 15-20 phút.",
        "Nấu chín theo phương pháp truyền thống giữ trọn hương vị tươi ngọt tự nhiên.",
        "Trình bày ra đĩa hoặc tô, ăn nóng cùng cơm dẻo hoặc bún tươi."
      ],
      "en": [
        "Clean all fresh ingredients thoroughly and pat dry.",
        "Marinate with traditional seasoning for 15-20 minutes.",
        "Cook using authentic method to lock in natural sweetness and aroma.",
        "Serve steaming hot with fragrant jasmine rice or noodles."
      ]
    },
    "region": "national",
    "diningType": [
      "home_cook"
    ]
  },
  {
    "id": "vn-bong-cai-xao-bo",
    "title": {
      "vi": "Bông Cải Xanh Xào Thịt Bò Dầu Hào",
      "en": "Stir-Fried Broccoli with Beef in Savory Oyster Sauce"
    },
    "image": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
    "category": {
      "vi": "Rau Củ",
      "en": "Vegetables"
    },
    "mealType": [
      "lunch",
      "dinner"
    ],
    "dietaryTags": {
      "vi": [
        "Truyền thống",
        "Dinh dưỡng NIN",
        "Món Việt"
      ],
      "en": [
        "Traditional",
        "NIN Verified",
        "Authentic"
      ]
    },
    "time": "15 min",
    "servings": 4,
    "calories": 210,
    "protein": 21,
    "fat": 8,
    "carbs": 10,
    "servingSize": {
      "vi": "1 phần tiêu chuẩn (~250g)",
      "en": "1 standard serving (~250g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia (NIN) - Bảng Thành Phần Thực Phẩm Việt Nam",
      "en": "National Institute of Nutrition (NIN Vietnam) - Food Composition Table"
    },
    "recipeSource": {
      "vi": "Ẩm Thực Truyền Thống 3 Miền Việt Nam",
      "en": "Traditional Vietnamese Culinary Heritage"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Nguyên liệu chính tươi ngon",
          "en": "Fresh primary ingredient"
        },
        "amount": "400g"
      },
      {
        "name": {
          "vi": "Rau thơm & gia vị truyền thống",
          "en": "Aromatic herbs & traditional seasoning"
        },
        "amount": "100g"
      },
      {
        "name": {
          "vi": "Nước mắm truyền thống & hành tỏi",
          "en": "Pure fish sauce, shallots & garlic"
        },
        "amount": "Vừa đủ"
      }
    ],
    "instructions": {
      "vi": [
        "Sơ chế sạch các nguyên liệu tươi, để ráo nước.",
        "Ướp gia vị truyền thống cho ngấm đều trong 15-20 phút.",
        "Nấu chín theo phương pháp truyền thống giữ trọn hương vị tươi ngọt tự nhiên.",
        "Trình bày ra đĩa hoặc tô, ăn nóng cùng cơm dẻo hoặc bún tươi."
      ],
      "en": [
        "Clean all fresh ingredients thoroughly and pat dry.",
        "Marinate with traditional seasoning for 15-20 minutes.",
        "Cook using authentic method to lock in natural sweetness and aroma.",
        "Serve steaming hot with fragrant jasmine rice or noodles."
      ]
    },
    "region": "national",
    "diningType": [
      "home_cook"
    ]
  },
  {
    "id": "vn-kho-qua-xao-trung",
    "title": {
      "vi": "Khổ Qua Xào Trứng Vịt Bùi Béo",
      "en": "Stir-Fried Bitter Melon with Scrambled Eggs"
    },
    "image": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80",
    "category": {
      "vi": "Rau Củ",
      "en": "Vegetables"
    },
    "mealType": [
      "lunch",
      "dinner"
    ],
    "dietaryTags": {
      "vi": [
        "Truyền thống",
        "Dinh dưỡng NIN",
        "Món Việt"
      ],
      "en": [
        "Traditional",
        "NIN Verified",
        "Authentic"
      ]
    },
    "time": "12 min",
    "servings": 4,
    "calories": 145,
    "protein": 9,
    "fat": 9,
    "carbs": 6,
    "servingSize": {
      "vi": "1 phần tiêu chuẩn (~250g)",
      "en": "1 standard serving (~250g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia (NIN) - Bảng Thành Phần Thực Phẩm Việt Nam",
      "en": "National Institute of Nutrition (NIN Vietnam) - Food Composition Table"
    },
    "recipeSource": {
      "vi": "Ẩm Thực Truyền Thống 3 Miền Việt Nam",
      "en": "Traditional Vietnamese Culinary Heritage"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Nguyên liệu chính tươi ngon",
          "en": "Fresh primary ingredient"
        },
        "amount": "400g"
      },
      {
        "name": {
          "vi": "Rau thơm & gia vị truyền thống",
          "en": "Aromatic herbs & traditional seasoning"
        },
        "amount": "100g"
      },
      {
        "name": {
          "vi": "Nước mắm truyền thống & hành tỏi",
          "en": "Pure fish sauce, shallots & garlic"
        },
        "amount": "Vừa đủ"
      }
    ],
    "instructions": {
      "vi": [
        "Sơ chế sạch các nguyên liệu tươi, để ráo nước.",
        "Ướp gia vị truyền thống cho ngấm đều trong 15-20 phút.",
        "Nấu chín theo phương pháp truyền thống giữ trọn hương vị tươi ngọt tự nhiên.",
        "Trình bày ra đĩa hoặc tô, ăn nóng cùng cơm dẻo hoặc bún tươi."
      ],
      "en": [
        "Clean all fresh ingredients thoroughly and pat dry.",
        "Marinate with traditional seasoning for 15-20 minutes.",
        "Cook using authentic method to lock in natural sweetness and aroma.",
        "Serve steaming hot with fragrant jasmine rice or noodles."
      ]
    },
    "region": "national",
    "diningType": [
      "home_cook"
    ]
  },
  {
    "id": "vn-gia-do-xao-huyet",
    "title": {
      "vi": "Giá Đỗ Xào Huyết Heo & Hẹ Lá",
      "en": "Stir-Fried Bean Sprouts with Blood Pudding & Chives"
    },
    "image": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
    "category": {
      "vi": "Rau Củ",
      "en": "Vegetables"
    },
    "mealType": [
      "lunch",
      "dinner"
    ],
    "dietaryTags": {
      "vi": [
        "Truyền thống",
        "Dinh dưỡng NIN",
        "Món Việt"
      ],
      "en": [
        "Traditional",
        "NIN Verified",
        "Authentic"
      ]
    },
    "time": "10 min",
    "servings": 4,
    "calories": 130,
    "protein": 12,
    "fat": 4,
    "carbs": 9,
    "servingSize": {
      "vi": "1 phần tiêu chuẩn (~250g)",
      "en": "1 standard serving (~250g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia (NIN) - Bảng Thành Phần Thực Phẩm Việt Nam",
      "en": "National Institute of Nutrition (NIN Vietnam) - Food Composition Table"
    },
    "recipeSource": {
      "vi": "Ẩm Thực Truyền Thống 3 Miền Việt Nam",
      "en": "Traditional Vietnamese Culinary Heritage"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Nguyên liệu chính tươi ngon",
          "en": "Fresh primary ingredient"
        },
        "amount": "400g"
      },
      {
        "name": {
          "vi": "Rau thơm & gia vị truyền thống",
          "en": "Aromatic herbs & traditional seasoning"
        },
        "amount": "100g"
      },
      {
        "name": {
          "vi": "Nước mắm truyền thống & hành tỏi",
          "en": "Pure fish sauce, shallots & garlic"
        },
        "amount": "Vừa đủ"
      }
    ],
    "instructions": {
      "vi": [
        "Sơ chế sạch các nguyên liệu tươi, để ráo nước.",
        "Ướp gia vị truyền thống cho ngấm đều trong 15-20 phút.",
        "Nấu chín theo phương pháp truyền thống giữ trọn hương vị tươi ngọt tự nhiên.",
        "Trình bày ra đĩa hoặc tô, ăn nóng cùng cơm dẻo hoặc bún tươi."
      ],
      "en": [
        "Clean all fresh ingredients thoroughly and pat dry.",
        "Marinate with traditional seasoning for 15-20 minutes.",
        "Cook using authentic method to lock in natural sweetness and aroma.",
        "Serve steaming hot with fragrant jasmine rice or noodles."
      ]
    },
    "region": "national",
    "diningType": [
      "home_cook"
    ]
  },
  {
    "id": "vn-nam-dui-ga-xao-bo",
    "title": {
      "vi": "Nấm Đùi Gà Xào Bơ Tỏi Đậm Vị",
      "en": "King Oyster Mushrooms Sautéed in Garlic Butter"
    },
    "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
    "category": {
      "vi": "Rau Củ",
      "en": "Vegetables"
    },
    "mealType": [
      "lunch",
      "dinner"
    ],
    "dietaryTags": {
      "vi": [
        "Truyền thống",
        "Dinh dưỡng NIN",
        "Món Việt"
      ],
      "en": [
        "Traditional",
        "NIN Verified",
        "Authentic"
      ]
    },
    "time": "12 min",
    "servings": 4,
    "calories": 140,
    "protein": 6,
    "fat": 8,
    "carbs": 10,
    "servingSize": {
      "vi": "1 phần tiêu chuẩn (~250g)",
      "en": "1 standard serving (~250g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia (NIN) - Bảng Thành Phần Thực Phẩm Việt Nam",
      "en": "National Institute of Nutrition (NIN Vietnam) - Food Composition Table"
    },
    "recipeSource": {
      "vi": "Ẩm Thực Truyền Thống 3 Miền Việt Nam",
      "en": "Traditional Vietnamese Culinary Heritage"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Nguyên liệu chính tươi ngon",
          "en": "Fresh primary ingredient"
        },
        "amount": "400g"
      },
      {
        "name": {
          "vi": "Rau thơm & gia vị truyền thống",
          "en": "Aromatic herbs & traditional seasoning"
        },
        "amount": "100g"
      },
      {
        "name": {
          "vi": "Nước mắm truyền thống & hành tỏi",
          "en": "Pure fish sauce, shallots & garlic"
        },
        "amount": "Vừa đủ"
      }
    ],
    "instructions": {
      "vi": [
        "Sơ chế sạch các nguyên liệu tươi, để ráo nước.",
        "Ướp gia vị truyền thống cho ngấm đều trong 15-20 phút.",
        "Nấu chín theo phương pháp truyền thống giữ trọn hương vị tươi ngọt tự nhiên.",
        "Trình bày ra đĩa hoặc tô, ăn nóng cùng cơm dẻo hoặc bún tươi."
      ],
      "en": [
        "Clean all fresh ingredients thoroughly and pat dry.",
        "Marinate with traditional seasoning for 15-20 minutes.",
        "Cook using authentic method to lock in natural sweetness and aroma.",
        "Serve steaming hot with fragrant jasmine rice or noodles."
      ]
    },
    "region": "national",
    "diningType": [
      "home_cook"
    ]
  },
  {
    "id": "vn-ga-luoc-la-chanh",
    "title": {
      "vi": "Gà Ta Luộc Lá Chanh Da Giòn Vàng",
      "en": "Traditional Poached Chicken with Kaffir Lime Leaves"
    },
    "image": "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=800&q=80",
    "category": {
      "vi": "Cơm Gia Đình",
      "en": "Home Cooking"
    },
    "mealType": [
      "lunch",
      "dinner"
    ],
    "dietaryTags": {
      "vi": [
        "Truyền thống",
        "Dinh dưỡng NIN",
        "Món Việt"
      ],
      "en": [
        "Traditional",
        "NIN Verified",
        "Authentic"
      ]
    },
    "time": "30 min",
    "servings": 4,
    "calories": 320,
    "protein": 34,
    "fat": 16,
    "carbs": 0,
    "servingSize": {
      "vi": "1 phần tiêu chuẩn (~250g)",
      "en": "1 standard serving (~250g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia (NIN) - Bảng Thành Phần Thực Phẩm Việt Nam",
      "en": "National Institute of Nutrition (NIN Vietnam) - Food Composition Table"
    },
    "recipeSource": {
      "vi": "Ẩm Thực Truyền Thống 3 Miền Việt Nam",
      "en": "Traditional Vietnamese Culinary Heritage"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Nguyên liệu chính tươi ngon",
          "en": "Fresh primary ingredient"
        },
        "amount": "400g"
      },
      {
        "name": {
          "vi": "Rau thơm & gia vị truyền thống",
          "en": "Aromatic herbs & traditional seasoning"
        },
        "amount": "100g"
      },
      {
        "name": {
          "vi": "Nước mắm truyền thống & hành tỏi",
          "en": "Pure fish sauce, shallots & garlic"
        },
        "amount": "Vừa đủ"
      }
    ],
    "instructions": {
      "vi": [
        "Sơ chế sạch các nguyên liệu tươi, để ráo nước.",
        "Ướp gia vị truyền thống cho ngấm đều trong 15-20 phút.",
        "Nấu chín theo phương pháp truyền thống giữ trọn hương vị tươi ngọt tự nhiên.",
        "Trình bày ra đĩa hoặc tô, ăn nóng cùng cơm dẻo hoặc bún tươi."
      ],
      "en": [
        "Clean all fresh ingredients thoroughly and pat dry.",
        "Marinate with traditional seasoning for 15-20 minutes.",
        "Cook using authentic method to lock in natural sweetness and aroma.",
        "Serve steaming hot with fragrant jasmine rice or noodles."
      ]
    },
    "region": "national",
    "diningType": [
      "home_cook"
    ]
  },
  {
    "id": "vn-bap-bo-luoc-sa",
    "title": {
      "vi": "Bắp Bò Luộc Sả Gừng Chấm Mắm Gừng",
      "en": "Tender Boiled Beef Shank with Ginger Fish Sauce"
    },
    "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
    "category": {
      "vi": "Cơm Gia Đình",
      "en": "Home Cooking"
    },
    "mealType": [
      "lunch",
      "dinner"
    ],
    "dietaryTags": {
      "vi": [
        "Truyền thống",
        "Dinh dưỡng NIN",
        "Món Việt"
      ],
      "en": [
        "Traditional",
        "NIN Verified",
        "Authentic"
      ]
    },
    "time": "40 min",
    "servings": 4,
    "calories": 260,
    "protein": 33,
    "fat": 11,
    "carbs": 2,
    "servingSize": {
      "vi": "1 phần tiêu chuẩn (~250g)",
      "en": "1 standard serving (~250g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia (NIN) - Bảng Thành Phần Thực Phẩm Việt Nam",
      "en": "National Institute of Nutrition (NIN Vietnam) - Food Composition Table"
    },
    "recipeSource": {
      "vi": "Ẩm Thực Truyền Thống 3 Miền Việt Nam",
      "en": "Traditional Vietnamese Culinary Heritage"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Nguyên liệu chính tươi ngon",
          "en": "Fresh primary ingredient"
        },
        "amount": "400g"
      },
      {
        "name": {
          "vi": "Rau thơm & gia vị truyền thống",
          "en": "Aromatic herbs & traditional seasoning"
        },
        "amount": "100g"
      },
      {
        "name": {
          "vi": "Nước mắm truyền thống & hành tỏi",
          "en": "Pure fish sauce, shallots & garlic"
        },
        "amount": "Vừa đủ"
      }
    ],
    "instructions": {
      "vi": [
        "Sơ chế sạch các nguyên liệu tươi, để ráo nước.",
        "Ướp gia vị truyền thống cho ngấm đều trong 15-20 phút.",
        "Nấu chín theo phương pháp truyền thống giữ trọn hương vị tươi ngọt tự nhiên.",
        "Trình bày ra đĩa hoặc tô, ăn nóng cùng cơm dẻo hoặc bún tươi."
      ],
      "en": [
        "Clean all fresh ingredients thoroughly and pat dry.",
        "Marinate with traditional seasoning for 15-20 minutes.",
        "Cook using authentic method to lock in natural sweetness and aroma.",
        "Serve steaming hot with fragrant jasmine rice or noodles."
      ]
    },
    "region": "national",
    "diningType": [
      "home_cook"
    ]
  },
  {
    "id": "vn-dau-bap-luoc-chao",
    "title": {
      "vi": "Đậu Bắp Luộc Chấm Chao Béo Ngậy",
      "en": "Boiled Crisp Okra with Fermented Bean Curd Dip"
    },
    "image": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
    "category": {
      "vi": "Rau Củ",
      "en": "Vegetables"
    },
    "mealType": [
      "lunch",
      "dinner"
    ],
    "dietaryTags": {
      "vi": [
        "Truyền thống",
        "Dinh dưỡng NIN",
        "Món Việt"
      ],
      "en": [
        "Traditional",
        "NIN Verified",
        "Authentic"
      ]
    },
    "time": "8 min",
    "servings": 4,
    "calories": 70,
    "protein": 3,
    "fat": 2,
    "carbs": 9,
    "servingSize": {
      "vi": "1 phần tiêu chuẩn (~250g)",
      "en": "1 standard serving (~250g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia (NIN) - Bảng Thành Phần Thực Phẩm Việt Nam",
      "en": "National Institute of Nutrition (NIN Vietnam) - Food Composition Table"
    },
    "recipeSource": {
      "vi": "Ẩm Thực Truyền Thống 3 Miền Việt Nam",
      "en": "Traditional Vietnamese Culinary Heritage"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Nguyên liệu chính tươi ngon",
          "en": "Fresh primary ingredient"
        },
        "amount": "400g"
      },
      {
        "name": {
          "vi": "Rau thơm & gia vị truyền thống",
          "en": "Aromatic herbs & traditional seasoning"
        },
        "amount": "100g"
      },
      {
        "name": {
          "vi": "Nước mắm truyền thống & hành tỏi",
          "en": "Pure fish sauce, shallots & garlic"
        },
        "amount": "Vừa đủ"
      }
    ],
    "instructions": {
      "vi": [
        "Sơ chế sạch các nguyên liệu tươi, để ráo nước.",
        "Ướp gia vị truyền thống cho ngấm đều trong 15-20 phút.",
        "Nấu chín theo phương pháp truyền thống giữ trọn hương vị tươi ngọt tự nhiên.",
        "Trình bày ra đĩa hoặc tô, ăn nóng cùng cơm dẻo hoặc bún tươi."
      ],
      "en": [
        "Clean all fresh ingredients thoroughly and pat dry.",
        "Marinate with traditional seasoning for 15-20 minutes.",
        "Cook using authentic method to lock in natural sweetness and aroma.",
        "Serve steaming hot with fragrant jasmine rice or noodles."
      ]
    },
    "region": "national",
    "diningType": [
      "home_cook"
    ]
  },
  {
    "id": "vn-bun-mam-mien-tay",
    "title": {
      "vi": "Bún Mắm Miền Tây Đậm Đà Sông Nước",
      "en": "Mekong Fermented Fish Noodle Soup with Seafood & Roasted Pork"
    },
    "image": "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=800&q=80",
    "category": {
      "vi": "Món Nước",
      "en": "Noodle Soup"
    },
    "mealType": [
      "lunch",
      "dinner"
    ],
    "dietaryTags": {
      "vi": [
        "Truyền thống",
        "Dinh dưỡng NIN",
        "Món Việt"
      ],
      "en": [
        "Traditional",
        "NIN Verified",
        "Authentic"
      ]
    },
    "time": "50 min",
    "servings": 4,
    "calories": 580,
    "protein": 32,
    "fat": 20,
    "carbs": 65,
    "servingSize": {
      "vi": "1 phần tiêu chuẩn (~250g)",
      "en": "1 standard serving (~250g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia (NIN) - Bảng Thành Phần Thực Phẩm Việt Nam",
      "en": "National Institute of Nutrition (NIN Vietnam) - Food Composition Table"
    },
    "recipeSource": {
      "vi": "Ẩm Thực Truyền Thống 3 Miền Việt Nam",
      "en": "Traditional Vietnamese Culinary Heritage"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Nguyên liệu chính tươi ngon",
          "en": "Fresh primary ingredient"
        },
        "amount": "400g"
      },
      {
        "name": {
          "vi": "Rau thơm & gia vị truyền thống",
          "en": "Aromatic herbs & traditional seasoning"
        },
        "amount": "100g"
      },
      {
        "name": {
          "vi": "Nước mắm truyền thống & hành tỏi",
          "en": "Pure fish sauce, shallots & garlic"
        },
        "amount": "Vừa đủ"
      }
    ],
    "instructions": {
      "vi": [
        "Sơ chế sạch các nguyên liệu tươi, để ráo nước.",
        "Ướp gia vị truyền thống cho ngấm đều trong 15-20 phút.",
        "Nấu chín theo phương pháp truyền thống giữ trọn hương vị tươi ngọt tự nhiên.",
        "Trình bày ra đĩa hoặc tô, ăn nóng cùng cơm dẻo hoặc bún tươi."
      ],
      "en": [
        "Clean all fresh ingredients thoroughly and pat dry.",
        "Marinate with traditional seasoning for 15-20 minutes.",
        "Cook using authentic method to lock in natural sweetness and aroma.",
        "Serve steaming hot with fragrant jasmine rice or noodles."
      ]
    },
    "region": "south",
    "diningType": [
      "eat_out"
    ]
  },
  {
    "id": "vn-bun-ca-cay-hai-phong",
    "title": {
      "vi": "Bún Cá Cay Hải Phòng Nước Dùng Thanh",
      "en": "Hai Phong Spicy Fish Noodle Soup with Crispy Fish & Taro Stems"
    },
    "image": "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=800&q=80",
    "category": {
      "vi": "Món Nước",
      "en": "Noodle Soup"
    },
    "mealType": [
      "lunch",
      "dinner"
    ],
    "dietaryTags": {
      "vi": [
        "Truyền thống",
        "Dinh dưỡng NIN",
        "Món Việt"
      ],
      "en": [
        "Traditional",
        "NIN Verified",
        "Authentic"
      ]
    },
    "time": "45 min",
    "servings": 4,
    "calories": 440,
    "protein": 26,
    "fat": 12,
    "carbs": 58,
    "servingSize": {
      "vi": "1 phần tiêu chuẩn (~250g)",
      "en": "1 standard serving (~250g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia (NIN) - Bảng Thành Phần Thực Phẩm Việt Nam",
      "en": "National Institute of Nutrition (NIN Vietnam) - Food Composition Table"
    },
    "recipeSource": {
      "vi": "Ẩm Thực Truyền Thống 3 Miền Việt Nam",
      "en": "Traditional Vietnamese Culinary Heritage"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Nguyên liệu chính tươi ngon",
          "en": "Fresh primary ingredient"
        },
        "amount": "400g"
      },
      {
        "name": {
          "vi": "Rau thơm & gia vị truyền thống",
          "en": "Aromatic herbs & traditional seasoning"
        },
        "amount": "100g"
      },
      {
        "name": {
          "vi": "Nước mắm truyền thống & hành tỏi",
          "en": "Pure fish sauce, shallots & garlic"
        },
        "amount": "Vừa đủ"
      }
    ],
    "instructions": {
      "vi": [
        "Sơ chế sạch các nguyên liệu tươi, để ráo nước.",
        "Ướp gia vị truyền thống cho ngấm đều trong 15-20 phút.",
        "Nấu chín theo phương pháp truyền thống giữ trọn hương vị tươi ngọt tự nhiên.",
        "Trình bày ra đĩa hoặc tô, ăn nóng cùng cơm dẻo hoặc bún tươi."
      ],
      "en": [
        "Clean all fresh ingredients thoroughly and pat dry.",
        "Marinate with traditional seasoning for 15-20 minutes.",
        "Cook using authentic method to lock in natural sweetness and aroma.",
        "Serve steaming hot with fragrant jasmine rice or noodles."
      ]
    },
    "region": "north",
    "diningType": [
      "eat_out"
    ]
  },
  {
    "id": "vn-bun-moc-suon-non",
    "title": {
      "vi": "Bún Mọc Sườn Non Nước Dùng Trong Ngọt",
      "en": "Pork Meatball & Spare Rib Noodle Soup with Shiitake"
    },
    "image": "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=800&q=80",
    "category": {
      "vi": "Món Nước",
      "en": "Noodle Soup"
    },
    "mealType": [
      "lunch",
      "dinner"
    ],
    "dietaryTags": {
      "vi": [
        "Truyền thống",
        "Dinh dưỡng NIN",
        "Món Việt"
      ],
      "en": [
        "Traditional",
        "NIN Verified",
        "Authentic"
      ]
    },
    "time": "45 min",
    "servings": 4,
    "calories": 460,
    "protein": 28,
    "fat": 14,
    "carbs": 56,
    "servingSize": {
      "vi": "1 phần tiêu chuẩn (~250g)",
      "en": "1 standard serving (~250g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia (NIN) - Bảng Thành Phần Thực Phẩm Việt Nam",
      "en": "National Institute of Nutrition (NIN Vietnam) - Food Composition Table"
    },
    "recipeSource": {
      "vi": "Ẩm Thực Truyền Thống 3 Miền Việt Nam",
      "en": "Traditional Vietnamese Culinary Heritage"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Nguyên liệu chính tươi ngon",
          "en": "Fresh primary ingredient"
        },
        "amount": "400g"
      },
      {
        "name": {
          "vi": "Rau thơm & gia vị truyền thống",
          "en": "Aromatic herbs & traditional seasoning"
        },
        "amount": "100g"
      },
      {
        "name": {
          "vi": "Nước mắm truyền thống & hành tỏi",
          "en": "Pure fish sauce, shallots & garlic"
        },
        "amount": "Vừa đủ"
      }
    ],
    "instructions": {
      "vi": [
        "Sơ chế sạch các nguyên liệu tươi, để ráo nước.",
        "Ướp gia vị truyền thống cho ngấm đều trong 15-20 phút.",
        "Nấu chín theo phương pháp truyền thống giữ trọn hương vị tươi ngọt tự nhiên.",
        "Trình bày ra đĩa hoặc tô, ăn nóng cùng cơm dẻo hoặc bún tươi."
      ],
      "en": [
        "Clean all fresh ingredients thoroughly and pat dry.",
        "Marinate with traditional seasoning for 15-20 minutes.",
        "Cook using authentic method to lock in natural sweetness and aroma.",
        "Serve steaming hot with fragrant jasmine rice or noodles."
      ]
    },
    "region": "national",
    "diningType": [
      "eat_out"
    ]
  },
  {
    "id": "vn-bun-cha-ca-da-nang",
    "title": {
      "vi": "Bún Chả Cá Đà Nẵng Đậm Đà Xứ Biển",
      "en": "Da Nang Fish Cake Noodle Soup with Pumpkin & Bamboo Shoots"
    },
    "image": "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?auto=format&fit=crop&w=800&q=80",
    "category": {
      "vi": "Món Nước",
      "en": "Noodle Soup"
    },
    "mealType": [
      "lunch",
      "dinner"
    ],
    "dietaryTags": {
      "vi": [
        "Truyền thống",
        "Dinh dưỡng NIN",
        "Món Việt"
      ],
      "en": [
        "Traditional",
        "NIN Verified",
        "Authentic"
      ]
    },
    "time": "40 min",
    "servings": 4,
    "calories": 420,
    "protein": 25,
    "fat": 11,
    "carbs": 54,
    "servingSize": {
      "vi": "1 phần tiêu chuẩn (~250g)",
      "en": "1 standard serving (~250g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia (NIN) - Bảng Thành Phần Thực Phẩm Việt Nam",
      "en": "National Institute of Nutrition (NIN Vietnam) - Food Composition Table"
    },
    "recipeSource": {
      "vi": "Ẩm Thực Truyền Thống 3 Miền Việt Nam",
      "en": "Traditional Vietnamese Culinary Heritage"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Nguyên liệu chính tươi ngon",
          "en": "Fresh primary ingredient"
        },
        "amount": "400g"
      },
      {
        "name": {
          "vi": "Rau thơm & gia vị truyền thống",
          "en": "Aromatic herbs & traditional seasoning"
        },
        "amount": "100g"
      },
      {
        "name": {
          "vi": "Nước mắm truyền thống & hành tỏi",
          "en": "Pure fish sauce, shallots & garlic"
        },
        "amount": "Vừa đủ"
      }
    ],
    "instructions": {
      "vi": [
        "Sơ chế sạch các nguyên liệu tươi, để ráo nước.",
        "Ướp gia vị truyền thống cho ngấm đều trong 15-20 phút.",
        "Nấu chín theo phương pháp truyền thống giữ trọn hương vị tươi ngọt tự nhiên.",
        "Trình bày ra đĩa hoặc tô, ăn nóng cùng cơm dẻo hoặc bún tươi."
      ],
      "en": [
        "Clean all fresh ingredients thoroughly and pat dry.",
        "Marinate with traditional seasoning for 15-20 minutes.",
        "Cook using authentic method to lock in natural sweetness and aroma.",
        "Serve steaming hot with fragrant jasmine rice or noodles."
      ]
    },
    "region": "central",
    "diningType": [
      "eat_out"
    ]
  },
  {
    "id": "vn-hu-tieu-my-tho",
    "title": {
      "vi": "Hủ Tiếu Mỹ Tho Sợi Dai Nước Trong",
      "en": "My Tho Signature Chewy Clear Noodle Soup"
    },
    "image": "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=800&q=80",
    "category": {
      "vi": "Món Nước",
      "en": "Noodle Soup"
    },
    "mealType": [
      "lunch",
      "dinner"
    ],
    "dietaryTags": {
      "vi": [
        "Truyền thống",
        "Dinh dưỡng NIN",
        "Món Việt"
      ],
      "en": [
        "Traditional",
        "NIN Verified",
        "Authentic"
      ]
    },
    "time": "45 min",
    "servings": 4,
    "calories": 460,
    "protein": 27,
    "fat": 13,
    "carbs": 60,
    "servingSize": {
      "vi": "1 phần tiêu chuẩn (~250g)",
      "en": "1 standard serving (~250g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia (NIN) - Bảng Thành Phần Thực Phẩm Việt Nam",
      "en": "National Institute of Nutrition (NIN Vietnam) - Food Composition Table"
    },
    "recipeSource": {
      "vi": "Ẩm Thực Truyền Thống 3 Miền Việt Nam",
      "en": "Traditional Vietnamese Culinary Heritage"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Nguyên liệu chính tươi ngon",
          "en": "Fresh primary ingredient"
        },
        "amount": "400g"
      },
      {
        "name": {
          "vi": "Rau thơm & gia vị truyền thống",
          "en": "Aromatic herbs & traditional seasoning"
        },
        "amount": "100g"
      },
      {
        "name": {
          "vi": "Nước mắm truyền thống & hành tỏi",
          "en": "Pure fish sauce, shallots & garlic"
        },
        "amount": "Vừa đủ"
      }
    ],
    "instructions": {
      "vi": [
        "Sơ chế sạch các nguyên liệu tươi, để ráo nước.",
        "Ướp gia vị truyền thống cho ngấm đều trong 15-20 phút.",
        "Nấu chín theo phương pháp truyền thống giữ trọn hương vị tươi ngọt tự nhiên.",
        "Trình bày ra đĩa hoặc tô, ăn nóng cùng cơm dẻo hoặc bún tươi."
      ],
      "en": [
        "Clean all fresh ingredients thoroughly and pat dry.",
        "Marinate with traditional seasoning for 15-20 minutes.",
        "Cook using authentic method to lock in natural sweetness and aroma.",
        "Serve steaming hot with fragrant jasmine rice or noodles."
      ]
    },
    "region": "south",
    "diningType": [
      "eat_out"
    ]
  },
  {
    "id": "vn-hu-tieu-go",
    "title": {
      "vi": "Hủ Tiếu Gõ Xá Xíu Bò Viên Đêm Sài Gòn",
      "en": "Saigon Street Cart Noodle Soup with Char Siu & Beef Meatballs"
    },
    "image": "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=800&q=80",
    "category": {
      "vi": "Món Nước",
      "en": "Noodle Soup"
    },
    "mealType": [
      "lunch",
      "dinner"
    ],
    "dietaryTags": {
      "vi": [
        "Truyền thống",
        "Dinh dưỡng NIN",
        "Món Việt"
      ],
      "en": [
        "Traditional",
        "NIN Verified",
        "Authentic"
      ]
    },
    "time": "30 min",
    "servings": 4,
    "calories": 410,
    "protein": 22,
    "fat": 10,
    "carbs": 58,
    "servingSize": {
      "vi": "1 phần tiêu chuẩn (~250g)",
      "en": "1 standard serving (~250g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia (NIN) - Bảng Thành Phần Thực Phẩm Việt Nam",
      "en": "National Institute of Nutrition (NIN Vietnam) - Food Composition Table"
    },
    "recipeSource": {
      "vi": "Ẩm Thực Truyền Thống 3 Miền Việt Nam",
      "en": "Traditional Vietnamese Culinary Heritage"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Nguyên liệu chính tươi ngon",
          "en": "Fresh primary ingredient"
        },
        "amount": "400g"
      },
      {
        "name": {
          "vi": "Rau thơm & gia vị truyền thống",
          "en": "Aromatic herbs & traditional seasoning"
        },
        "amount": "100g"
      },
      {
        "name": {
          "vi": "Nước mắm truyền thống & hành tỏi",
          "en": "Pure fish sauce, shallots & garlic"
        },
        "amount": "Vừa đủ"
      }
    ],
    "instructions": {
      "vi": [
        "Sơ chế sạch các nguyên liệu tươi, để ráo nước.",
        "Ướp gia vị truyền thống cho ngấm đều trong 15-20 phút.",
        "Nấu chín theo phương pháp truyền thống giữ trọn hương vị tươi ngọt tự nhiên.",
        "Trình bày ra đĩa hoặc tô, ăn nóng cùng cơm dẻo hoặc bún tươi."
      ],
      "en": [
        "Clean all fresh ingredients thoroughly and pat dry.",
        "Marinate with traditional seasoning for 15-20 minutes.",
        "Cook using authentic method to lock in natural sweetness and aroma.",
        "Serve steaming hot with fragrant jasmine rice or noodles."
      ]
    },
    "region": "south",
    "diningType": [
      "eat_out"
    ]
  },
  {
    "id": "vn-banh-canh-ghe",
    "title": {
      "vi": "Bánh Canh Ghẹ Tươi Nước Cốt Dừa",
      "en": "Blue Crab Tapioca Noodle Soup with Coconut Broth"
    },
    "image": "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80",
    "category": {
      "vi": "Món Nước",
      "en": "Noodle Soup"
    },
    "mealType": [
      "lunch",
      "dinner"
    ],
    "dietaryTags": {
      "vi": [
        "Truyền thống",
        "Dinh dưỡng NIN",
        "Món Việt"
      ],
      "en": [
        "Traditional",
        "NIN Verified",
        "Authentic"
      ]
    },
    "time": "40 min",
    "servings": 4,
    "calories": 490,
    "protein": 29,
    "fat": 15,
    "carbs": 60,
    "servingSize": {
      "vi": "1 phần tiêu chuẩn (~250g)",
      "en": "1 standard serving (~250g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia (NIN) - Bảng Thành Phần Thực Phẩm Việt Nam",
      "en": "National Institute of Nutrition (NIN Vietnam) - Food Composition Table"
    },
    "recipeSource": {
      "vi": "Ẩm Thực Truyền Thống 3 Miền Việt Nam",
      "en": "Traditional Vietnamese Culinary Heritage"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Nguyên liệu chính tươi ngon",
          "en": "Fresh primary ingredient"
        },
        "amount": "400g"
      },
      {
        "name": {
          "vi": "Rau thơm & gia vị truyền thống",
          "en": "Aromatic herbs & traditional seasoning"
        },
        "amount": "100g"
      },
      {
        "name": {
          "vi": "Nước mắm truyền thống & hành tỏi",
          "en": "Pure fish sauce, shallots & garlic"
        },
        "amount": "Vừa đủ"
      }
    ],
    "instructions": {
      "vi": [
        "Sơ chế sạch các nguyên liệu tươi, để ráo nước.",
        "Ướp gia vị truyền thống cho ngấm đều trong 15-20 phút.",
        "Nấu chín theo phương pháp truyền thống giữ trọn hương vị tươi ngọt tự nhiên.",
        "Trình bày ra đĩa hoặc tô, ăn nóng cùng cơm dẻo hoặc bún tươi."
      ],
      "en": [
        "Clean all fresh ingredients thoroughly and pat dry.",
        "Marinate with traditional seasoning for 15-20 minutes.",
        "Cook using authentic method to lock in natural sweetness and aroma.",
        "Serve steaming hot with fragrant jasmine rice or noodles."
      ]
    },
    "region": "national",
    "diningType": [
      "eat_out"
    ]
  },
  {
    "id": "vn-banh-canh-cha-ca",
    "title": {
      "vi": "Bánh Canh Chả Cá Nha Trang",
      "en": "Nha Trang Fried Fish Cake Noodle Soup"
    },
    "image": "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=800&q=80",
    "category": {
      "vi": "Món Nước",
      "en": "Noodle Soup"
    },
    "mealType": [
      "lunch",
      "dinner"
    ],
    "dietaryTags": {
      "vi": [
        "Truyền thống",
        "Dinh dưỡng NIN",
        "Món Việt"
      ],
      "en": [
        "Traditional",
        "NIN Verified",
        "Authentic"
      ]
    },
    "time": "35 min",
    "servings": 4,
    "calories": 390,
    "protein": 24,
    "fat": 10,
    "carbs": 52,
    "servingSize": {
      "vi": "1 phần tiêu chuẩn (~250g)",
      "en": "1 standard serving (~250g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia (NIN) - Bảng Thành Phần Thực Phẩm Việt Nam",
      "en": "National Institute of Nutrition (NIN Vietnam) - Food Composition Table"
    },
    "recipeSource": {
      "vi": "Ẩm Thực Truyền Thống 3 Miền Việt Nam",
      "en": "Traditional Vietnamese Culinary Heritage"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Nguyên liệu chính tươi ngon",
          "en": "Fresh primary ingredient"
        },
        "amount": "400g"
      },
      {
        "name": {
          "vi": "Rau thơm & gia vị truyền thống",
          "en": "Aromatic herbs & traditional seasoning"
        },
        "amount": "100g"
      },
      {
        "name": {
          "vi": "Nước mắm truyền thống & hành tỏi",
          "en": "Pure fish sauce, shallots & garlic"
        },
        "amount": "Vừa đủ"
      }
    ],
    "instructions": {
      "vi": [
        "Sơ chế sạch các nguyên liệu tươi, để ráo nước.",
        "Ướp gia vị truyền thống cho ngấm đều trong 15-20 phút.",
        "Nấu chín theo phương pháp truyền thống giữ trọn hương vị tươi ngọt tự nhiên.",
        "Trình bày ra đĩa hoặc tô, ăn nóng cùng cơm dẻo hoặc bún tươi."
      ],
      "en": [
        "Clean all fresh ingredients thoroughly and pat dry.",
        "Marinate with traditional seasoning for 15-20 minutes.",
        "Cook using authentic method to lock in natural sweetness and aroma.",
        "Serve steaming hot with fragrant jasmine rice or noodles."
      ]
    },
    "region": "central",
    "diningType": [
      "eat_out"
    ]
  },
  {
    "id": "vn-mien-mang-ga",
    "title": {
      "vi": "Miến Măng Gà Ta Nước Dùng Ngọt Thanh",
      "en": "Chicken Glass Noodle Soup with Dried Bamboo Shoots"
    },
    "image": "https://images.unsplash.com/photo-1516684732162-798a0062be99?auto=format&fit=crop&w=800&q=80",
    "category": {
      "vi": "Món Nước",
      "en": "Noodle Soup"
    },
    "mealType": [
      "lunch",
      "dinner"
    ],
    "dietaryTags": {
      "vi": [
        "Truyền thống",
        "Dinh dưỡng NIN",
        "Món Việt"
      ],
      "en": [
        "Traditional",
        "NIN Verified",
        "Authentic"
      ]
    },
    "time": "40 min",
    "servings": 4,
    "calories": 380,
    "protein": 27,
    "fat": 9,
    "carbs": 48,
    "servingSize": {
      "vi": "1 phần tiêu chuẩn (~250g)",
      "en": "1 standard serving (~250g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia (NIN) - Bảng Thành Phần Thực Phẩm Việt Nam",
      "en": "National Institute of Nutrition (NIN Vietnam) - Food Composition Table"
    },
    "recipeSource": {
      "vi": "Ẩm Thực Truyền Thống 3 Miền Việt Nam",
      "en": "Traditional Vietnamese Culinary Heritage"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Nguyên liệu chính tươi ngon",
          "en": "Fresh primary ingredient"
        },
        "amount": "400g"
      },
      {
        "name": {
          "vi": "Rau thơm & gia vị truyền thống",
          "en": "Aromatic herbs & traditional seasoning"
        },
        "amount": "100g"
      },
      {
        "name": {
          "vi": "Nước mắm truyền thống & hành tỏi",
          "en": "Pure fish sauce, shallots & garlic"
        },
        "amount": "Vừa đủ"
      }
    ],
    "instructions": {
      "vi": [
        "Sơ chế sạch các nguyên liệu tươi, để ráo nước.",
        "Ướp gia vị truyền thống cho ngấm đều trong 15-20 phút.",
        "Nấu chín theo phương pháp truyền thống giữ trọn hương vị tươi ngọt tự nhiên.",
        "Trình bày ra đĩa hoặc tô, ăn nóng cùng cơm dẻo hoặc bún tươi."
      ],
      "en": [
        "Clean all fresh ingredients thoroughly and pat dry.",
        "Marinate with traditional seasoning for 15-20 minutes.",
        "Cook using authentic method to lock in natural sweetness and aroma.",
        "Serve steaming hot with fragrant jasmine rice or noodles."
      ]
    },
    "region": "national",
    "diningType": [
      "eat_out"
    ]
  },
  {
    "id": "vn-mien-luon-gion",
    "title": {
      "vi": "Miến Lươn Giòn Nghệ An Thơm Nồng Rau Răm",
      "en": "Nghe An Crispy Eel Glass Noodle Soup"
    },
    "image": "https://images.unsplash.com/photo-1591814468924-caf88d1232e1?auto=format&fit=crop&w=800&q=80",
    "category": {
      "vi": "Món Nước",
      "en": "Noodle Soup"
    },
    "mealType": [
      "lunch",
      "dinner"
    ],
    "dietaryTags": {
      "vi": [
        "Truyền thống",
        "Dinh dưỡng NIN",
        "Món Việt"
      ],
      "en": [
        "Traditional",
        "NIN Verified",
        "Authentic"
      ]
    },
    "time": "40 min",
    "servings": 4,
    "calories": 420,
    "protein": 26,
    "fat": 12,
    "carbs": 52,
    "servingSize": {
      "vi": "1 phần tiêu chuẩn (~250g)",
      "en": "1 standard serving (~250g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia (NIN) - Bảng Thành Phần Thực Phẩm Việt Nam",
      "en": "National Institute of Nutrition (NIN Vietnam) - Food Composition Table"
    },
    "recipeSource": {
      "vi": "Ẩm Thực Truyền Thống 3 Miền Việt Nam",
      "en": "Traditional Vietnamese Culinary Heritage"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Nguyên liệu chính tươi ngon",
          "en": "Fresh primary ingredient"
        },
        "amount": "400g"
      },
      {
        "name": {
          "vi": "Rau thơm & gia vị truyền thống",
          "en": "Aromatic herbs & traditional seasoning"
        },
        "amount": "100g"
      },
      {
        "name": {
          "vi": "Nước mắm truyền thống & hành tỏi",
          "en": "Pure fish sauce, shallots & garlic"
        },
        "amount": "Vừa đủ"
      }
    ],
    "instructions": {
      "vi": [
        "Sơ chế sạch các nguyên liệu tươi, để ráo nước.",
        "Ướp gia vị truyền thống cho ngấm đều trong 15-20 phút.",
        "Nấu chín theo phương pháp truyền thống giữ trọn hương vị tươi ngọt tự nhiên.",
        "Trình bày ra đĩa hoặc tô, ăn nóng cùng cơm dẻo hoặc bún tươi."
      ],
      "en": [
        "Clean all fresh ingredients thoroughly and pat dry.",
        "Marinate with traditional seasoning for 15-20 minutes.",
        "Cook using authentic method to lock in natural sweetness and aroma.",
        "Serve steaming hot with fragrant jasmine rice or noodles."
      ]
    },
    "region": "north",
    "diningType": [
      "eat_out"
    ]
  },
  {
    "id": "vn-mien-xao-cua",
    "title": {
      "vi": "Miến Xào Cua Bể Tươi Ráo Sợi",
      "en": "Stir-Fried Glass Noodles with Fresh Sea Crab Meat"
    },
    "image": "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=800&q=80",
    "category": {
      "vi": "Món Trộn",
      "en": "Dry Noodles"
    },
    "mealType": [
      "lunch",
      "dinner"
    ],
    "dietaryTags": {
      "vi": [
        "Truyền thống",
        "Dinh dưỡng NIN",
        "Món Việt"
      ],
      "en": [
        "Traditional",
        "NIN Verified",
        "Authentic"
      ]
    },
    "time": "25 min",
    "servings": 4,
    "calories": 430,
    "protein": 28,
    "fat": 12,
    "carbs": 54,
    "servingSize": {
      "vi": "1 phần tiêu chuẩn (~250g)",
      "en": "1 standard serving (~250g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia (NIN) - Bảng Thành Phần Thực Phẩm Việt Nam",
      "en": "National Institute of Nutrition (NIN Vietnam) - Food Composition Table"
    },
    "recipeSource": {
      "vi": "Ẩm Thực Truyền Thống 3 Miền Việt Nam",
      "en": "Traditional Vietnamese Culinary Heritage"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Nguyên liệu chính tươi ngon",
          "en": "Fresh primary ingredient"
        },
        "amount": "400g"
      },
      {
        "name": {
          "vi": "Rau thơm & gia vị truyền thống",
          "en": "Aromatic herbs & traditional seasoning"
        },
        "amount": "100g"
      },
      {
        "name": {
          "vi": "Nước mắm truyền thống & hành tỏi",
          "en": "Pure fish sauce, shallots & garlic"
        },
        "amount": "Vừa đủ"
      }
    ],
    "instructions": {
      "vi": [
        "Sơ chế sạch các nguyên liệu tươi, để ráo nước.",
        "Ướp gia vị truyền thống cho ngấm đều trong 15-20 phút.",
        "Nấu chín theo phương pháp truyền thống giữ trọn hương vị tươi ngọt tự nhiên.",
        "Trình bày ra đĩa hoặc tô, ăn nóng cùng cơm dẻo hoặc bún tươi."
      ],
      "en": [
        "Clean all fresh ingredients thoroughly and pat dry.",
        "Marinate with traditional seasoning for 15-20 minutes.",
        "Cook using authentic method to lock in natural sweetness and aroma.",
        "Serve steaming hot with fragrant jasmine rice or noodles."
      ]
    },
    "region": "national",
    "diningType": [
      "eat_out"
    ]
  },
  {
    "id": "vn-banh-nam-hue",
    "title": {
      "vi": "Bánh Nậm Tôm Thịt Lá Chuối Xứ Huế",
      "en": "Hue Flat Rice Dumpling with Minced Shrimp & Pork in Banana Leaves"
    },
    "image": "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?auto=format&fit=crop&w=800&q=80",
    "category": {
      "vi": "Ăn Vặt",
      "en": "Street Food"
    },
    "mealType": [
      "lunch",
      "dinner"
    ],
    "dietaryTags": {
      "vi": [
        "Truyền thống",
        "Dinh dưỡng NIN",
        "Món Việt"
      ],
      "en": [
        "Traditional",
        "NIN Verified",
        "Authentic"
      ]
    },
    "time": "35 min",
    "servings": 4,
    "calories": 240,
    "protein": 11,
    "fat": 7,
    "carbs": 35,
    "servingSize": {
      "vi": "1 phần tiêu chuẩn (~250g)",
      "en": "1 standard serving (~250g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia (NIN) - Bảng Thành Phần Thực Phẩm Việt Nam",
      "en": "National Institute of Nutrition (NIN Vietnam) - Food Composition Table"
    },
    "recipeSource": {
      "vi": "Ẩm Thực Truyền Thống 3 Miền Việt Nam",
      "en": "Traditional Vietnamese Culinary Heritage"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Nguyên liệu chính tươi ngon",
          "en": "Fresh primary ingredient"
        },
        "amount": "400g"
      },
      {
        "name": {
          "vi": "Rau thơm & gia vị truyền thống",
          "en": "Aromatic herbs & traditional seasoning"
        },
        "amount": "100g"
      },
      {
        "name": {
          "vi": "Nước mắm truyền thống & hành tỏi",
          "en": "Pure fish sauce, shallots & garlic"
        },
        "amount": "Vừa đủ"
      }
    ],
    "instructions": {
      "vi": [
        "Sơ chế sạch các nguyên liệu tươi, để ráo nước.",
        "Ướp gia vị truyền thống cho ngấm đều trong 15-20 phút.",
        "Nấu chín theo phương pháp truyền thống giữ trọn hương vị tươi ngọt tự nhiên.",
        "Trình bày ra đĩa hoặc tô, ăn nóng cùng cơm dẻo hoặc bún tươi."
      ],
      "en": [
        "Clean all fresh ingredients thoroughly and pat dry.",
        "Marinate with traditional seasoning for 15-20 minutes.",
        "Cook using authentic method to lock in natural sweetness and aroma.",
        "Serve steaming hot with fragrant jasmine rice or noodles."
      ]
    },
    "region": "central",
    "diningType": [
      "eat_out"
    ]
  },
  {
    "id": "vn-banh-can-phan-thiet",
    "title": {
      "vi": "Bánh Căn Tôm Trứng Chấm Nước Mắm Cá",
      "en": "Phan Thiet Mini Rice Cakes with Shrimp & Rich Fish Sauce"
    },
    "image": "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?auto=format&fit=crop&w=800&q=80",
    "category": {
      "vi": "Ăn Vặt",
      "en": "Street Food"
    },
    "mealType": [
      "lunch",
      "dinner"
    ],
    "dietaryTags": {
      "vi": [
        "Truyền thống",
        "Dinh dưỡng NIN",
        "Món Việt"
      ],
      "en": [
        "Traditional",
        "NIN Verified",
        "Authentic"
      ]
    },
    "time": "30 min",
    "servings": 4,
    "calories": 360,
    "protein": 16,
    "fat": 12,
    "carbs": 46,
    "servingSize": {
      "vi": "1 phần tiêu chuẩn (~250g)",
      "en": "1 standard serving (~250g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia (NIN) - Bảng Thành Phần Thực Phẩm Việt Nam",
      "en": "National Institute of Nutrition (NIN Vietnam) - Food Composition Table"
    },
    "recipeSource": {
      "vi": "Ẩm Thực Truyền Thống 3 Miền Việt Nam",
      "en": "Traditional Vietnamese Culinary Heritage"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Nguyên liệu chính tươi ngon",
          "en": "Fresh primary ingredient"
        },
        "amount": "400g"
      },
      {
        "name": {
          "vi": "Rau thơm & gia vị truyền thống",
          "en": "Aromatic herbs & traditional seasoning"
        },
        "amount": "100g"
      },
      {
        "name": {
          "vi": "Nước mắm truyền thống & hành tỏi",
          "en": "Pure fish sauce, shallots & garlic"
        },
        "amount": "Vừa đủ"
      }
    ],
    "instructions": {
      "vi": [
        "Sơ chế sạch các nguyên liệu tươi, để ráo nước.",
        "Ướp gia vị truyền thống cho ngấm đều trong 15-20 phút.",
        "Nấu chín theo phương pháp truyền thống giữ trọn hương vị tươi ngọt tự nhiên.",
        "Trình bày ra đĩa hoặc tô, ăn nóng cùng cơm dẻo hoặc bún tươi."
      ],
      "en": [
        "Clean all fresh ingredients thoroughly and pat dry.",
        "Marinate with traditional seasoning for 15-20 minutes.",
        "Cook using authentic method to lock in natural sweetness and aroma.",
        "Serve steaming hot with fragrant jasmine rice or noodles."
      ]
    },
    "region": "national",
    "diningType": [
      "eat_out"
    ]
  },
  {
    "id": "vn-bo-bia-ngot",
    "title": {
      "vi": "Bò Bía Ngọt Dừa Nạo Mạch Nha Tuổi Thơ",
      "en": "Sweet Coconut & Maltose Crepe Rolls"
    },
    "image": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
    "category": {
      "vi": "Ăn Vặt",
      "en": "Street Food"
    },
    "mealType": [
      "lunch",
      "dinner"
    ],
    "dietaryTags": {
      "vi": [
        "Truyền thống",
        "Dinh dưỡng NIN",
        "Món Việt"
      ],
      "en": [
        "Traditional",
        "NIN Verified",
        "Authentic"
      ]
    },
    "time": "10 min",
    "servings": 4,
    "calories": 180,
    "protein": 3,
    "fat": 5,
    "carbs": 32,
    "servingSize": {
      "vi": "1 phần tiêu chuẩn (~250g)",
      "en": "1 standard serving (~250g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia (NIN) - Bảng Thành Phần Thực Phẩm Việt Nam",
      "en": "National Institute of Nutrition (NIN Vietnam) - Food Composition Table"
    },
    "recipeSource": {
      "vi": "Ẩm Thực Truyền Thống 3 Miền Việt Nam",
      "en": "Traditional Vietnamese Culinary Heritage"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Nguyên liệu chính tươi ngon",
          "en": "Fresh primary ingredient"
        },
        "amount": "400g"
      },
      {
        "name": {
          "vi": "Rau thơm & gia vị truyền thống",
          "en": "Aromatic herbs & traditional seasoning"
        },
        "amount": "100g"
      },
      {
        "name": {
          "vi": "Nước mắm truyền thống & hành tỏi",
          "en": "Pure fish sauce, shallots & garlic"
        },
        "amount": "Vừa đủ"
      }
    ],
    "instructions": {
      "vi": [
        "Sơ chế sạch các nguyên liệu tươi, để ráo nước.",
        "Ướp gia vị truyền thống cho ngấm đều trong 15-20 phút.",
        "Nấu chín theo phương pháp truyền thống giữ trọn hương vị tươi ngọt tự nhiên.",
        "Trình bày ra đĩa hoặc tô, ăn nóng cùng cơm dẻo hoặc bún tươi."
      ],
      "en": [
        "Clean all fresh ingredients thoroughly and pat dry.",
        "Marinate with traditional seasoning for 15-20 minutes.",
        "Cook using authentic method to lock in natural sweetness and aroma.",
        "Serve steaming hot with fragrant jasmine rice or noodles."
      ]
    },
    "region": "national",
    "diningType": [
      "eat_out"
    ]
  },
  {
    "id": "vn-nem-lui-nuong-sa",
    "title": {
      "vi": "Nem Lụi Nướng Sả Cây Phố Cổ Huế",
      "en": "Hue Grilled Pork Skewers on Lemongrass Stalks"
    },
    "image": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
    "category": {
      "vi": "Món Cuốn & Trộn",
      "en": "Platters"
    },
    "mealType": [
      "lunch",
      "dinner"
    ],
    "dietaryTags": {
      "vi": [
        "Truyền thống",
        "Dinh dưỡng NIN",
        "Món Việt"
      ],
      "en": [
        "Traditional",
        "NIN Verified",
        "Authentic"
      ]
    },
    "time": "35 min",
    "servings": 4,
    "calories": 410,
    "protein": 23,
    "fat": 19,
    "carbs": 34,
    "servingSize": {
      "vi": "1 phần tiêu chuẩn (~250g)",
      "en": "1 standard serving (~250g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia (NIN) - Bảng Thành Phần Thực Phẩm Việt Nam",
      "en": "National Institute of Nutrition (NIN Vietnam) - Food Composition Table"
    },
    "recipeSource": {
      "vi": "Ẩm Thực Truyền Thống 3 Miền Việt Nam",
      "en": "Traditional Vietnamese Culinary Heritage"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Nguyên liệu chính tươi ngon",
          "en": "Fresh primary ingredient"
        },
        "amount": "400g"
      },
      {
        "name": {
          "vi": "Rau thơm & gia vị truyền thống",
          "en": "Aromatic herbs & traditional seasoning"
        },
        "amount": "100g"
      },
      {
        "name": {
          "vi": "Nước mắm truyền thống & hành tỏi",
          "en": "Pure fish sauce, shallots & garlic"
        },
        "amount": "Vừa đủ"
      }
    ],
    "instructions": {
      "vi": [
        "Sơ chế sạch các nguyên liệu tươi, để ráo nước.",
        "Ướp gia vị truyền thống cho ngấm đều trong 15-20 phút.",
        "Nấu chín theo phương pháp truyền thống giữ trọn hương vị tươi ngọt tự nhiên.",
        "Trình bày ra đĩa hoặc tô, ăn nóng cùng cơm dẻo hoặc bún tươi."
      ],
      "en": [
        "Clean all fresh ingredients thoroughly and pat dry.",
        "Marinate with traditional seasoning for 15-20 minutes.",
        "Cook using authentic method to lock in natural sweetness and aroma.",
        "Serve steaming hot with fragrant jasmine rice or noodles."
      ]
    },
    "region": "north",
    "diningType": [
      "eat_out"
    ]
  },
  {
    "id": "vn-goi-ga-bap-cai",
    "title": {
      "vi": "Gỏi Gà Xé Phay Bắp Cải Chua Ngọt",
      "en": "Shredded Chicken & Crunchy Cabbage Herb Salad"
    },
    "image": "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?auto=format&fit=crop&w=800&q=80",
    "category": {
      "vi": "Khai Vị & Gỏi",
      "en": "Salads & Starters"
    },
    "mealType": [
      "lunch",
      "dinner"
    ],
    "dietaryTags": {
      "vi": [
        "Truyền thống",
        "Dinh dưỡng NIN",
        "Món Việt"
      ],
      "en": [
        "Traditional",
        "NIN Verified",
        "Authentic"
      ]
    },
    "time": "20 min",
    "servings": 4,
    "calories": 240,
    "protein": 25,
    "fat": 7,
    "carbs": 18,
    "servingSize": {
      "vi": "1 phần tiêu chuẩn (~250g)",
      "en": "1 standard serving (~250g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia (NIN) - Bảng Thành Phần Thực Phẩm Việt Nam",
      "en": "National Institute of Nutrition (NIN Vietnam) - Food Composition Table"
    },
    "recipeSource": {
      "vi": "Ẩm Thực Truyền Thống 3 Miền Việt Nam",
      "en": "Traditional Vietnamese Culinary Heritage"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Nguyên liệu chính tươi ngon",
          "en": "Fresh primary ingredient"
        },
        "amount": "400g"
      },
      {
        "name": {
          "vi": "Rau thơm & gia vị truyền thống",
          "en": "Aromatic herbs & traditional seasoning"
        },
        "amount": "100g"
      },
      {
        "name": {
          "vi": "Nước mắm truyền thống & hành tỏi",
          "en": "Pure fish sauce, shallots & garlic"
        },
        "amount": "Vừa đủ"
      }
    ],
    "instructions": {
      "vi": [
        "Sơ chế sạch các nguyên liệu tươi, để ráo nước.",
        "Ướp gia vị truyền thống cho ngấm đều trong 15-20 phút.",
        "Nấu chín theo phương pháp truyền thống giữ trọn hương vị tươi ngọt tự nhiên.",
        "Trình bày ra đĩa hoặc tô, ăn nóng cùng cơm dẻo hoặc bún tươi."
      ],
      "en": [
        "Clean all fresh ingredients thoroughly and pat dry.",
        "Marinate with traditional seasoning for 15-20 minutes.",
        "Cook using authentic method to lock in natural sweetness and aroma.",
        "Serve steaming hot with fragrant jasmine rice or noodles."
      ]
    },
    "region": "national",
    "diningType": [
      "home_cook",
      "eat_out"
    ]
  },
  {
    "id": "vn-nom-bo-kho",
    "title": {
      "vi": "Nộm Bò Khô Đu Đủ Bờ Hồ Hà Nội",
      "en": "Hanoi Green Papaya Salad with Sweet-Savory Beef Jerky"
    },
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    "category": {
      "vi": "Khai Vị & Gỏi",
      "en": "Salads & Starters"
    },
    "mealType": [
      "lunch",
      "dinner"
    ],
    "dietaryTags": {
      "vi": [
        "Truyền thống",
        "Dinh dưỡng NIN",
        "Món Việt"
      ],
      "en": [
        "Traditional",
        "NIN Verified",
        "Authentic"
      ]
    },
    "time": "15 min",
    "servings": 4,
    "calories": 220,
    "protein": 18,
    "fat": 5,
    "carbs": 26,
    "servingSize": {
      "vi": "1 phần tiêu chuẩn (~250g)",
      "en": "1 standard serving (~250g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia (NIN) - Bảng Thành Phần Thực Phẩm Việt Nam",
      "en": "National Institute of Nutrition (NIN Vietnam) - Food Composition Table"
    },
    "recipeSource": {
      "vi": "Ẩm Thực Truyền Thống 3 Miền Việt Nam",
      "en": "Traditional Vietnamese Culinary Heritage"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Nguyên liệu chính tươi ngon",
          "en": "Fresh primary ingredient"
        },
        "amount": "400g"
      },
      {
        "name": {
          "vi": "Rau thơm & gia vị truyền thống",
          "en": "Aromatic herbs & traditional seasoning"
        },
        "amount": "100g"
      },
      {
        "name": {
          "vi": "Nước mắm truyền thống & hành tỏi",
          "en": "Pure fish sauce, shallots & garlic"
        },
        "amount": "Vừa đủ"
      }
    ],
    "instructions": {
      "vi": [
        "Sơ chế sạch các nguyên liệu tươi, để ráo nước.",
        "Ướp gia vị truyền thống cho ngấm đều trong 15-20 phút.",
        "Nấu chín theo phương pháp truyền thống giữ trọn hương vị tươi ngọt tự nhiên.",
        "Trình bày ra đĩa hoặc tô, ăn nóng cùng cơm dẻo hoặc bún tươi."
      ],
      "en": [
        "Clean all fresh ingredients thoroughly and pat dry.",
        "Marinate with traditional seasoning for 15-20 minutes.",
        "Cook using authentic method to lock in natural sweetness and aroma.",
        "Serve steaming hot with fragrant jasmine rice or noodles."
      ]
    },
    "region": "north",
    "diningType": [
      "eat_out"
    ]
  },
  {
    "id": "vn-cha-ram-tom-dat",
    "title": {
      "vi": "Chả Ram Tôm Đất Giòn Rụm Xứ Nẫu Bình Định",
      "en": "Binh Dinh Crunchy Mini Shrimp Spring Rolls"
    },
    "image": "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=800&q=80",
    "category": {
      "vi": "Ăn Vặt",
      "en": "Street Food"
    },
    "mealType": [
      "lunch",
      "dinner"
    ],
    "dietaryTags": {
      "vi": [
        "Truyền thống",
        "Dinh dưỡng NIN",
        "Món Việt"
      ],
      "en": [
        "Traditional",
        "NIN Verified",
        "Authentic"
      ]
    },
    "time": "25 min",
    "servings": 4,
    "calories": 350,
    "protein": 15,
    "fat": 17,
    "carbs": 33,
    "servingSize": {
      "vi": "1 phần tiêu chuẩn (~250g)",
      "en": "1 standard serving (~250g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia (NIN) - Bảng Thành Phần Thực Phẩm Việt Nam",
      "en": "National Institute of Nutrition (NIN Vietnam) - Food Composition Table"
    },
    "recipeSource": {
      "vi": "Ẩm Thực Truyền Thống 3 Miền Việt Nam",
      "en": "Traditional Vietnamese Culinary Heritage"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Nguyên liệu chính tươi ngon",
          "en": "Fresh primary ingredient"
        },
        "amount": "400g"
      },
      {
        "name": {
          "vi": "Rau thơm & gia vị truyền thống",
          "en": "Aromatic herbs & traditional seasoning"
        },
        "amount": "100g"
      },
      {
        "name": {
          "vi": "Nước mắm truyền thống & hành tỏi",
          "en": "Pure fish sauce, shallots & garlic"
        },
        "amount": "Vừa đủ"
      }
    ],
    "instructions": {
      "vi": [
        "Sơ chế sạch các nguyên liệu tươi, để ráo nước.",
        "Ướp gia vị truyền thống cho ngấm đều trong 15-20 phút.",
        "Nấu chín theo phương pháp truyền thống giữ trọn hương vị tươi ngọt tự nhiên.",
        "Trình bày ra đĩa hoặc tô, ăn nóng cùng cơm dẻo hoặc bún tươi."
      ],
      "en": [
        "Clean all fresh ingredients thoroughly and pat dry.",
        "Marinate with traditional seasoning for 15-20 minutes.",
        "Cook using authentic method to lock in natural sweetness and aroma.",
        "Serve steaming hot with fragrant jasmine rice or noodles."
      ]
    },
    "region": "central",
    "diningType": [
      "eat_out"
    ]
  },
  {
    "id": "vn-com-ga-tam-ky",
    "title": {
      "vi": "Cơm Gà Tam Kỳ Vàng Ươm Nước Dùng Gà",
      "en": "Tam Ky Turmeric Chicken Rice with Shredded Herb Salad"
    },
    "image": "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=800&q=80",
    "category": {
      "vi": "Cơm & Xôi",
      "en": "Rice Dishes"
    },
    "mealType": [
      "lunch",
      "dinner"
    ],
    "dietaryTags": {
      "vi": [
        "Truyền thống",
        "Dinh dưỡng NIN",
        "Món Việt"
      ],
      "en": [
        "Traditional",
        "NIN Verified",
        "Authentic"
      ]
    },
    "time": "45 min",
    "servings": 4,
    "calories": 560,
    "protein": 33,
    "fat": 16,
    "carbs": 68,
    "servingSize": {
      "vi": "1 phần tiêu chuẩn (~250g)",
      "en": "1 standard serving (~250g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia (NIN) - Bảng Thành Phần Thực Phẩm Việt Nam",
      "en": "National Institute of Nutrition (NIN Vietnam) - Food Composition Table"
    },
    "recipeSource": {
      "vi": "Ẩm Thực Truyền Thống 3 Miền Việt Nam",
      "en": "Traditional Vietnamese Culinary Heritage"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Nguyên liệu chính tươi ngon",
          "en": "Fresh primary ingredient"
        },
        "amount": "400g"
      },
      {
        "name": {
          "vi": "Rau thơm & gia vị truyền thống",
          "en": "Aromatic herbs & traditional seasoning"
        },
        "amount": "100g"
      },
      {
        "name": {
          "vi": "Nước mắm truyền thống & hành tỏi",
          "en": "Pure fish sauce, shallots & garlic"
        },
        "amount": "Vừa đủ"
      }
    ],
    "instructions": {
      "vi": [
        "Sơ chế sạch các nguyên liệu tươi, để ráo nước.",
        "Ướp gia vị truyền thống cho ngấm đều trong 15-20 phút.",
        "Nấu chín theo phương pháp truyền thống giữ trọn hương vị tươi ngọt tự nhiên.",
        "Trình bày ra đĩa hoặc tô, ăn nóng cùng cơm dẻo hoặc bún tươi."
      ],
      "en": [
        "Clean all fresh ingredients thoroughly and pat dry.",
        "Marinate with traditional seasoning for 15-20 minutes.",
        "Cook using authentic method to lock in natural sweetness and aroma.",
        "Serve steaming hot with fragrant jasmine rice or noodles."
      ]
    },
    "region": "national",
    "diningType": [
      "eat_out"
    ]
  },
  {
    "id": "vn-chao-ga-nam-huong",
    "title": {
      "vi": "Cháo Gà Ta Nấm Hương Hạt Sen Ấm Bụng",
      "en": "Chicken Congee with Shiitake Mushrooms & Lotus Seeds"
    },
    "image": "https://images.unsplash.com/photo-1516684732162-798a0062be99?auto=format&fit=crop&w=800&q=80",
    "category": {
      "vi": "Cơm & Xôi",
      "en": "Rice Dishes"
    },
    "mealType": [
      "lunch",
      "dinner"
    ],
    "dietaryTags": {
      "vi": [
        "Truyền thống",
        "Dinh dưỡng NIN",
        "Món Việt"
      ],
      "en": [
        "Traditional",
        "NIN Verified",
        "Authentic"
      ]
    },
    "time": "40 min",
    "servings": 4,
    "calories": 320,
    "protein": 24,
    "fat": 8,
    "carbs": 40,
    "servingSize": {
      "vi": "1 phần tiêu chuẩn (~250g)",
      "en": "1 standard serving (~250g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia (NIN) - Bảng Thành Phần Thực Phẩm Việt Nam",
      "en": "National Institute of Nutrition (NIN Vietnam) - Food Composition Table"
    },
    "recipeSource": {
      "vi": "Ẩm Thực Truyền Thống 3 Miền Việt Nam",
      "en": "Traditional Vietnamese Culinary Heritage"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Nguyên liệu chính tươi ngon",
          "en": "Fresh primary ingredient"
        },
        "amount": "400g"
      },
      {
        "name": {
          "vi": "Rau thơm & gia vị truyền thống",
          "en": "Aromatic herbs & traditional seasoning"
        },
        "amount": "100g"
      },
      {
        "name": {
          "vi": "Nước mắm truyền thống & hành tỏi",
          "en": "Pure fish sauce, shallots & garlic"
        },
        "amount": "Vừa đủ"
      }
    ],
    "instructions": {
      "vi": [
        "Sơ chế sạch các nguyên liệu tươi, để ráo nước.",
        "Ướp gia vị truyền thống cho ngấm đều trong 15-20 phút.",
        "Nấu chín theo phương pháp truyền thống giữ trọn hương vị tươi ngọt tự nhiên.",
        "Trình bày ra đĩa hoặc tô, ăn nóng cùng cơm dẻo hoặc bún tươi."
      ],
      "en": [
        "Clean all fresh ingredients thoroughly and pat dry.",
        "Marinate with traditional seasoning for 15-20 minutes.",
        "Cook using authentic method to lock in natural sweetness and aroma.",
        "Serve steaming hot with fragrant jasmine rice or noodles."
      ]
    },
    "region": "national",
    "diningType": [
      "eat_out"
    ]
  },
  {
    "id": "vn-chao-long-ha-noi",
    "title": {
      "vi": "Cháo Lòng Tiết Huyết Phố Cổ Hà Nội",
      "en": "Traditional Hanoi Pork Offal & Blood Congee"
    },
    "image": "https://images.unsplash.com/photo-1516684732162-798a0062be99?auto=format&fit=crop&w=800&q=80",
    "category": {
      "vi": "Cơm & Xôi",
      "en": "Rice Dishes"
    },
    "mealType": [
      "lunch",
      "dinner"
    ],
    "dietaryTags": {
      "vi": [
        "Truyền thống",
        "Dinh dưỡng NIN",
        "Món Việt"
      ],
      "en": [
        "Traditional",
        "NIN Verified",
        "Authentic"
      ]
    },
    "time": "45 min",
    "servings": 4,
    "calories": 410,
    "protein": 28,
    "fat": 18,
    "carbs": 36,
    "servingSize": {
      "vi": "1 phần tiêu chuẩn (~250g)",
      "en": "1 standard serving (~250g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia (NIN) - Bảng Thành Phần Thực Phẩm Việt Nam",
      "en": "National Institute of Nutrition (NIN Vietnam) - Food Composition Table"
    },
    "recipeSource": {
      "vi": "Ẩm Thực Truyền Thống 3 Miền Việt Nam",
      "en": "Traditional Vietnamese Culinary Heritage"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Nguyên liệu chính tươi ngon",
          "en": "Fresh primary ingredient"
        },
        "amount": "400g"
      },
      {
        "name": {
          "vi": "Rau thơm & gia vị truyền thống",
          "en": "Aromatic herbs & traditional seasoning"
        },
        "amount": "100g"
      },
      {
        "name": {
          "vi": "Nước mắm truyền thống & hành tỏi",
          "en": "Pure fish sauce, shallots & garlic"
        },
        "amount": "Vừa đủ"
      }
    ],
    "instructions": {
      "vi": [
        "Sơ chế sạch các nguyên liệu tươi, để ráo nước.",
        "Ướp gia vị truyền thống cho ngấm đều trong 15-20 phút.",
        "Nấu chín theo phương pháp truyền thống giữ trọn hương vị tươi ngọt tự nhiên.",
        "Trình bày ra đĩa hoặc tô, ăn nóng cùng cơm dẻo hoặc bún tươi."
      ],
      "en": [
        "Clean all fresh ingredients thoroughly and pat dry.",
        "Marinate with traditional seasoning for 15-20 minutes.",
        "Cook using authentic method to lock in natural sweetness and aroma.",
        "Serve steaming hot with fragrant jasmine rice or noodles."
      ]
    },
    "region": "north",
    "diningType": [
      "eat_out"
    ]
  },
  {
    "id": "vn-chao-ca-loc-rau-dang",
    "title": {
      "vi": "Cháo Cá Lóc Đồng Rau Đắng Miền Tây",
      "en": "Mekong Snakehead Fish Congee with Bitter Greens"
    },
    "image": "https://images.unsplash.com/photo-1540189549386-042236c786f8?auto=format&fit=crop&w=800&q=80",
    "category": {
      "vi": "Cơm & Xôi",
      "en": "Rice Dishes"
    },
    "mealType": [
      "lunch",
      "dinner"
    ],
    "dietaryTags": {
      "vi": [
        "Truyền thống",
        "Dinh dưỡng NIN",
        "Món Việt"
      ],
      "en": [
        "Traditional",
        "NIN Verified",
        "Authentic"
      ]
    },
    "time": "35 min",
    "servings": 4,
    "calories": 310,
    "protein": 26,
    "fat": 6,
    "carbs": 39,
    "servingSize": {
      "vi": "1 phần tiêu chuẩn (~250g)",
      "en": "1 standard serving (~250g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia (NIN) - Bảng Thành Phần Thực Phẩm Việt Nam",
      "en": "National Institute of Nutrition (NIN Vietnam) - Food Composition Table"
    },
    "recipeSource": {
      "vi": "Ẩm Thực Truyền Thống 3 Miền Việt Nam",
      "en": "Traditional Vietnamese Culinary Heritage"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Nguyên liệu chính tươi ngon",
          "en": "Fresh primary ingredient"
        },
        "amount": "400g"
      },
      {
        "name": {
          "vi": "Rau thơm & gia vị truyền thống",
          "en": "Aromatic herbs & traditional seasoning"
        },
        "amount": "100g"
      },
      {
        "name": {
          "vi": "Nước mắm truyền thống & hành tỏi",
          "en": "Pure fish sauce, shallots & garlic"
        },
        "amount": "Vừa đủ"
      }
    ],
    "instructions": {
      "vi": [
        "Sơ chế sạch các nguyên liệu tươi, để ráo nước.",
        "Ướp gia vị truyền thống cho ngấm đều trong 15-20 phút.",
        "Nấu chín theo phương pháp truyền thống giữ trọn hương vị tươi ngọt tự nhiên.",
        "Trình bày ra đĩa hoặc tô, ăn nóng cùng cơm dẻo hoặc bún tươi."
      ],
      "en": [
        "Clean all fresh ingredients thoroughly and pat dry.",
        "Marinate with traditional seasoning for 15-20 minutes.",
        "Cook using authentic method to lock in natural sweetness and aroma.",
        "Serve steaming hot with fragrant jasmine rice or noodles."
      ]
    },
    "region": "south",
    "diningType": [
      "eat_out"
    ]
  },
  {
    "id": "vn-xoi-ga-xe",
    "title": {
      "vi": "Xôi Nếp Nương Gà Xé Nấm Hương Mỡ Hành",
      "en": "Sticky Rice with Shredded Chicken & Fragrant Scallion Oil"
    },
    "image": "https://images.unsplash.com/photo-1539136788836-5699e78bfc75?auto=format&fit=crop&w=800&q=80",
    "category": {
      "vi": "Cơm & Xôi",
      "en": "Rice Dishes"
    },
    "mealType": [
      "lunch",
      "dinner"
    ],
    "dietaryTags": {
      "vi": [
        "Truyền thống",
        "Dinh dưỡng NIN",
        "Món Việt"
      ],
      "en": [
        "Traditional",
        "NIN Verified",
        "Authentic"
      ]
    },
    "time": "35 min",
    "servings": 4,
    "calories": 490,
    "protein": 25,
    "fat": 16,
    "carbs": 62,
    "servingSize": {
      "vi": "1 phần tiêu chuẩn (~250g)",
      "en": "1 standard serving (~250g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia (NIN) - Bảng Thành Phần Thực Phẩm Việt Nam",
      "en": "National Institute of Nutrition (NIN Vietnam) - Food Composition Table"
    },
    "recipeSource": {
      "vi": "Ẩm Thực Truyền Thống 3 Miền Việt Nam",
      "en": "Traditional Vietnamese Culinary Heritage"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Nguyên liệu chính tươi ngon",
          "en": "Fresh primary ingredient"
        },
        "amount": "400g"
      },
      {
        "name": {
          "vi": "Rau thơm & gia vị truyền thống",
          "en": "Aromatic herbs & traditional seasoning"
        },
        "amount": "100g"
      },
      {
        "name": {
          "vi": "Nước mắm truyền thống & hành tỏi",
          "en": "Pure fish sauce, shallots & garlic"
        },
        "amount": "Vừa đủ"
      }
    ],
    "instructions": {
      "vi": [
        "Sơ chế sạch các nguyên liệu tươi, để ráo nước.",
        "Ướp gia vị truyền thống cho ngấm đều trong 15-20 phút.",
        "Nấu chín theo phương pháp truyền thống giữ trọn hương vị tươi ngọt tự nhiên.",
        "Trình bày ra đĩa hoặc tô, ăn nóng cùng cơm dẻo hoặc bún tươi."
      ],
      "en": [
        "Clean all fresh ingredients thoroughly and pat dry.",
        "Marinate with traditional seasoning for 15-20 minutes.",
        "Cook using authentic method to lock in natural sweetness and aroma.",
        "Serve steaming hot with fragrant jasmine rice or noodles."
      ]
    },
    "region": "national",
    "diningType": [
      "eat_out"
    ]
  },
  {
    "id": "vn-xoi-khuc-ha-noi",
    "title": {
      "vi": "Xôi Khúc Lá Khúc Nhân Thịt Đậu Xanh Hà Nội",
      "en": "Traditional Hanoi Cudweed Rice Cakes with Pork & Mung Bean"
    },
    "image": "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=80",
    "category": {
      "vi": "Cơm & Xôi",
      "en": "Rice Dishes"
    },
    "mealType": [
      "lunch",
      "dinner"
    ],
    "dietaryTags": {
      "vi": [
        "Truyền thống",
        "Dinh dưỡng NIN",
        "Món Việt"
      ],
      "en": [
        "Traditional",
        "NIN Verified",
        "Authentic"
      ]
    },
    "time": "50 min",
    "servings": 4,
    "calories": 420,
    "protein": 16,
    "fat": 15,
    "carbs": 55,
    "servingSize": {
      "vi": "1 phần tiêu chuẩn (~250g)",
      "en": "1 standard serving (~250g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia (NIN) - Bảng Thành Phần Thực Phẩm Việt Nam",
      "en": "National Institute of Nutrition (NIN Vietnam) - Food Composition Table"
    },
    "recipeSource": {
      "vi": "Ẩm Thực Truyền Thống 3 Miền Việt Nam",
      "en": "Traditional Vietnamese Culinary Heritage"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Nguyên liệu chính tươi ngon",
          "en": "Fresh primary ingredient"
        },
        "amount": "400g"
      },
      {
        "name": {
          "vi": "Rau thơm & gia vị truyền thống",
          "en": "Aromatic herbs & traditional seasoning"
        },
        "amount": "100g"
      },
      {
        "name": {
          "vi": "Nước mắm truyền thống & hành tỏi",
          "en": "Pure fish sauce, shallots & garlic"
        },
        "amount": "Vừa đủ"
      }
    ],
    "instructions": {
      "vi": [
        "Sơ chế sạch các nguyên liệu tươi, để ráo nước.",
        "Ướp gia vị truyền thống cho ngấm đều trong 15-20 phút.",
        "Nấu chín theo phương pháp truyền thống giữ trọn hương vị tươi ngọt tự nhiên.",
        "Trình bày ra đĩa hoặc tô, ăn nóng cùng cơm dẻo hoặc bún tươi."
      ],
      "en": [
        "Clean all fresh ingredients thoroughly and pat dry.",
        "Marinate with traditional seasoning for 15-20 minutes.",
        "Cook using authentic method to lock in natural sweetness and aroma.",
        "Serve steaming hot with fragrant jasmine rice or noodles."
      ]
    },
    "region": "north",
    "diningType": [
      "eat_out"
    ]
  },
  {
    "id": "vn-ca-chep-om-dua",
    "title": {
      "vi": "Cá Chép Om Dưa Thì Là Chua Dịu",
      "en": "Braised Carp with Pickled Mustard Greens & Dill"
    },
    "image": "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80",
    "category": {
      "vi": "Cơm Gia Đình",
      "en": "Family Meal"
    },
    "mealType": [
      "lunch",
      "dinner"
    ],
    "dietaryTags": {
      "vi": [
        "Món Om",
        "Giàu Omega-3",
        "Thanh Nhiệt",
        "Món Miền Bắc"
      ],
      "en": [
        "Braised Dish",
        "Omega-3 Rich",
        "Refreshing",
        "Northern Cuisine"
      ]
    },
    "time": "45 min",
    "servings": 4,
    "calories": 380,
    "protein": 32,
    "fat": 14,
    "carbs": 18,
    "servingSize": {
      "vi": "1 tô cá om dưa kèm bún (~450g)",
      "en": "1 bowl braised fish with greens (~450g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia (NIN) - Bảng Thành Phần Thực Phẩm Việt Nam",
      "en": "National Institute of Nutrition (NIN Vietnam) - Food Composition Table"
    },
    "recipeSource": {
      "vi": "Ẩm Thực Đồng Bằng Bắc Bộ - Cơm Nhà Mẹ Nấu",
      "en": "Northern Delta Traditional Cuisine"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Cá chép tươi làm sạch đánh vẩy",
          "en": "Fresh carp, cleaned and scaled"
        },
        "amount": "800g"
      },
      {
        "name": {
          "vi": "Dưa cải muối chua rửa bớt mặn",
          "en": "Pickled mustard greens, rinsed"
        },
        "amount": "300g"
      },
      {
        "name": {
          "vi": "Cà chua chín bổ múi cau",
          "en": "Ripe tomatoes, wedged"
        },
        "amount": "2 quả"
      },
      {
        "name": {
          "vi": "Thì là & hành hoa cắt khúc",
          "en": "Fresh dill & scallions, chopped"
        },
        "amount": "100g"
      },
      {
        "name": {
          "vi": "Ớt tươi thái lát, nghệ tươi giã nhỏ",
          "en": "Fresh chili & pounded fresh turmeric"
        },
        "amount": "1 nhánh"
      },
      {
        "name": {
          "vi": "Nước mắm ngon, hạt tiêu, dầu ăn",
          "en": "Fish sauce, black pepper, cooking oil"
        },
        "amount": "Vừa đủ"
      }
    ],
    "instructions": {
      "vi": [
        "Cá chép khía vài đường chéo trên mình, ướp chút muối và bột nghệ trong 15 phút rồi rán sơ cho săn thịt vàng đều hai mặt.",
        "Phi thơm hành củ đập dập với chút dầu ăn, cho cà chua vào đảo mềm lấy màu đẹp.",
        "Trút dưa chua vào xào săn cùng cà chua, nêm 1 thìa nước mắm ngon và chút hạt nêm.",
        "Đổ 500ml nước sôi vào đun sôi bùng, nhẹ nhàng đặt cá chép vào om nhỏ lửa trong 20 phút cho dưa mềm nhừ và cá ngấm vị chua thanh.",
        "Rắc thì là, hành lá và vài lát ớt lên trên mặt nồi om, thưởng thức nóng hổi kèm đĩa bún tươi hoặc cơm trắng."
      ],
      "en": [
        "Score fish gently, rub with turmeric and salt, then pan-sear until both sides are lightly golden.",
        "Sauté shallots with tomatoes until soft to create a rich red hue.",
        "Add pickled greens and stir-fry with fish sauce and seasonings.",
        "Pour hot water, bring to boil, gently place carp inside and simmer for 20 minutes.",
        "Garnish generously with fresh dill, scallions, and sliced chili; serve hot with rice vermicelli."
      ]
    },
    "region": "north",
    "diningType": [
      "home_cook"
    ]
  },
  {
    "id": "vn-canh-suon-chua-sau",
    "title": {
      "vi": "Canh Sườn Nấu Sấu Chua Thanh Mát Hà Nội",
      "en": "Hanoi Pork Rib Soup with Dracontomelon (Sấu)"
    },
    "image": "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=800&q=80",
    "category": {
      "vi": "Món Canh",
      "en": "Soup"
    },
    "mealType": [
      "lunch",
      "dinner"
    ],
    "dietaryTags": {
      "vi": [
        "Món Canh",
        "Thanh Mát",
        "Mùa Hè Hà Nội",
        "Dễ Nấu"
      ],
      "en": [
        "Soup",
        "Refreshing",
        "Hanoi Summer Dish",
        "Easy Cook"
      ]
    },
    "time": "35 min",
    "servings": 4,
    "calories": 280,
    "protein": 22,
    "fat": 14,
    "carbs": 12,
    "servingSize": {
      "vi": "1 tô canh sườn (~400g)",
      "en": "1 bowl pork rib soup (~400g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia (NIN) - Bảng Thành Phần Thực Phẩm Việt Nam",
      "en": "National Institute of Nutrition (NIN Vietnam) - Food Composition Table"
    },
    "recipeSource": {
      "vi": "Ẩm Thực Phố Cổ Hà Nội - Cơm Gia Đình Mùa Hè",
      "en": "Old Quarter Hanoi Culinary Tradition"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Sườn non heo chặt khúc vừa ăn",
          "en": "Pork spare ribs, bite-sized"
        },
        "amount": "400g"
      },
      {
        "name": {
          "vi": "Quả sấu tươi cạo vỏ sạch",
          "en": "Fresh dracontomelon fruit, peeled"
        },
        "amount": "5 quả"
      },
      {
        "name": {
          "vi": "Cà chua chín bổ múi cau",
          "en": "Ripe tomatoes, cut into wedges"
        },
        "amount": "2 quả"
      },
      {
        "name": {
          "vi": "Hành hoa, mùi tàu (ngò gai)",
          "en": "Scallions, saw-tooth coriander"
        },
        "amount": "50g"
      },
      {
        "name": {
          "vi": "Hành tím băm, gia vị, nước mắm",
          "en": "Shallots, salt, fish sauce"
        },
        "amount": "Vừa đủ"
      }
    ],
    "instructions": {
      "vi": [
        "Sườn non rửa sạch, trần qua nước sôi 2 phút rồi rửa lại nước lạnh để nước canh trong vắt.",
        "Phi thơm hành tím, cho sườn vào xào săn với chút mắm muối cho đậm đà.",
        "Đổ 1.2 lít nước vào nồi hầm nhỏ lửa khoảng 20 phút cho sườn mềm ngọt.",
        "Thả quả sấu và cà chua vào đun sôi thêm 7-10 phút cho sấu chín mềm.",
        "Vớt sấu ra dầm nhuyễn rồi lọc lấy nước chua đổ lại nồi canh, nêm nếm vừa ăn, rắc hành ngò gai rồi tắt bếp."
      ],
      "en": [
        "Blanch pork ribs in boiling water for 2 mins, rinse clean to keep broth crystal clear.",
        "Sauté shallots, add ribs with fish sauce and salt until fragrant.",
        "Add 1.2L water and simmer ribs gently for 20 mins until tender.",
        "Add sấu fruit and tomato wedges, simmer 8 minutes until sấu softens.",
        "Mash sấu to release tangy juice, adjust seasoning, garnish with cilantro and scallions."
      ]
    },
    "region": "north",
    "diningType": [
      "home_cook"
    ]
  },
  {
    "id": "vn-canh-ca-nau-ngot",
    "title": {
      "vi": "Canh Cá Điêu Hồng Nấu Ngót Cần Nước Nam Bộ",
      "en": "Southern Sweet & Sour Tilapia Soup with Celery & Tomato"
    },
    "image": "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=800&q=80",
    "category": {
      "vi": "Món Canh",
      "en": "Soup"
    },
    "mealType": [
      "lunch",
      "dinner"
    ],
    "dietaryTags": {
      "vi": [
        "Món Canh",
        "Thanh Nhiệt",
        "Ít Béo",
        "Hương Vị Nam Bộ"
      ],
      "en": [
        "Soup",
        "Cooling",
        "Low Fat",
        "Southern Flavor"
      ]
    },
    "time": "25 min",
    "servings": 4,
    "calories": 220,
    "protein": 26,
    "fat": 6,
    "carbs": 10,
    "servingSize": {
      "vi": "1 tô canh cá nấu ngót (~400g)",
      "en": "1 bowl fish soup with celery (~400g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia (NIN) - Bảng Thành Phần Thực Phẩm Việt Nam",
      "en": "National Institute of Nutrition (NIN Vietnam) - Food Composition Table"
    },
    "recipeSource": {
      "vi": "Bếp Cơm Gia Đình Nam Bộ",
      "en": "Southern Vietnam Family Kitchen"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Cá điêu hồng cắt khúc tươi ngon",
          "en": "Fresh red tilapia cutlets"
        },
        "amount": "500g"
      },
      {
        "name": {
          "vi": "Cà chua chín bổ múi cau",
          "en": "Tomatoes, wedged"
        },
        "amount": "2 quả"
      },
      {
        "name": {
          "vi": "Cần nước hoặc cần tàu rửa sạch cắt khúc",
          "en": "Chinese celery, washed & chopped"
        },
        "amount": "100g"
      },
      {
        "name": {
          "vi": "Hành hoa, ớt sừng cắt lát",
          "en": "Scallions, sliced mild chili"
        },
        "amount": "30g"
      },
      {
        "name": {
          "vi": "Nước mắm cá cơm, tiêu sọ, hạt nêm",
          "en": "Anchovy fish sauce, pepper, salt"
        },
        "amount": "Vừa đủ"
      }
    ],
    "instructions": {
      "vi": [
        "Cá rửa sạch với rượu trắng và gừng để khử tanh, để ráo nước.",
        "Đun sôi 1 lít nước, thả cà chua vào tạo độ chua thanh tự nhiên.",
        "Nước sôi bùng thì thả nhẹ từng khúc cá vào, hạ lửa vừa đun 10 phút không đậy vung để cá không bị nát và nước trong.",
        "Nêm nước mắm ngon, hạt nêm và một chút xíu đường cho vừa khẩu vị.",
        "Thả rau cần nước và hành hoa vào đun sôi lại 1 phút rồi tắt bếp ngay để rau giữ độ xanh giòn."
      ],
      "en": [
        "Clean fish with ginger wine to remove odor, drain well.",
        "Boil 1L water with tomato wedges for subtle natural tartness.",
        "Slide fish cutlets into boiling broth, simmer uncovered for 10 minutes.",
        "Season with fragrant fish sauce, salt, and a dash of sugar.",
        "Toss in Chinese celery and scallions, cook 1 minute and remove immediately to retain crisp greenery."
      ]
    },
    "region": "south",
    "diningType": [
      "home_cook"
    ]
  },
  {
    "id": "vn-rau-cai-ngong-xao-toi",
    "title": {
      "vi": "Cải Ngồng Xào Tỏi Giòn Ngọt Xanh Mướt",
      "en": "Stir-Fried Choy Sum Greens with Crispy Garlic"
    },
    "image": "https://images.unsplash.com/photo-1576045057995-568f588f82fb?auto=format&fit=crop&w=800&q=80",
    "category": {
      "vi": "Rau Củ",
      "en": "Vegetables"
    },
    "mealType": [
      "lunch",
      "dinner"
    ],
    "dietaryTags": {
      "vi": [
        "Món Rau",
        "Giàu Chất Xơ",
        "Thuần Chay",
        "Nhanh Dễ"
      ],
      "en": [
        "Vegetable",
        "High Fiber",
        "Vegan",
        "Quick & Easy"
      ]
    },
    "time": "15 min",
    "servings": 4,
    "calories": 95,
    "protein": 3,
    "fat": 6,
    "carbs": 7,
    "servingSize": {
      "vi": "1 đĩa rau xào (~250g)",
      "en": "1 plate greens (~250g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia (NIN) - Bảng Thành Phần Thực Phẩm Việt Nam",
      "en": "National Institute of Nutrition (NIN Vietnam) - Food Composition Table"
    },
    "recipeSource": {
      "vi": "Cơm Nhà Giản Dị Thanh Đạm",
      "en": "Rustic Vietnamese Home Cooking"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Cải ngồng tươi non tước xơ nhẹ",
          "en": "Fresh choy sum shoots, trimmed"
        },
        "amount": "500g"
      },
      {
        "name": {
          "vi": "Tỏi ta đập dập thơm nức",
          "en": "Fragrant local garlic, crushed"
        },
        "amount": "1 củ"
      },
      {
        "name": {
          "vi": "Dầu ăn, dầu hào chay, hạt nêm, tiêu",
          "en": "Cooking oil, oyster sauce, seasoning"
        },
        "amount": "Vừa đủ"
      }
    ],
    "instructions": {
      "vi": [
        "Cải ngồng rửa sạch ngắt khúc vừa ăn, trần qua nước sôi có pha chút muối trong 30 giây rồi vớt ngay ngâm nước đá để rau giòn xanh.",
        "Đun nóng chảo với dầu ăn, phi thơm 2/3 lượng tỏi đập dập đến khi vàng ruộm.",
        "Bật lửa lớn, trút cải ngồng vào đảo nhanh tay trong 2 phút.",
        "Nêm 1 thìa dầu hào và hạt nêm cho vừa miệng, rắc phần tỏi phi còn lại cùng tiêu sọ rồi múc ra đĩa."
      ],
      "en": [
        "Trim and rinse greens, blanch in salted boiling water for 30 secs, shock in ice water.",
        "Heat oil in wok, fry 2/3 of crushed garlic until fragrant and golden.",
        "Turn heat high, add greens and toss quickly for 2 minutes.",
        "Season with oyster sauce and pepper, top with crispy garlic bits and serve."
      ]
    },
    "region": "national",
    "diningType": [
      "home_cook"
    ]
  },
  {
    "id": "vn-pho-sot-vang",
    "title": {
      "vi": "Phở Bò Sốt Vang Rượu Vang Gấc Đỏ Hà Nội",
      "en": "Hanoi Beef Stew Pho with Red Wine & Annatto (Sốt Vang)"
    },
    "image": "https://images.unsplash.com/photo-1548946526-f69e2424cf45?auto=format&fit=crop&w=800&q=80",
    "category": {
      "vi": "Món Nước",
      "en": "Noodle Soup"
    },
    "mealType": [
      "breakfast",
      "lunch",
      "dinner"
    ],
    "dietaryTags": {
      "vi": [
        "Món Nước",
        "Giàu Đạm",
        "Hương Thảo Mộc",
        "Đặc Sản Hà Nội"
      ],
      "en": [
        "Noodle Soup",
        "High Protein",
        "Herb Infused",
        "Hanoi Specialty"
      ]
    },
    "time": "1h 30m",
    "servings": 4,
    "calories": 520,
    "protein": 36,
    "fat": 18,
    "carbs": 64,
    "servingSize": {
      "vi": "1 tô phở sốt vang đầy đặn (~650g)",
      "en": "1 full bowl beef stew pho (~650g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia (NIN) - Bảng Thành Phần Thực Phẩm Việt Nam",
      "en": "National Institute of Nutrition (NIN Vietnam) - Food Composition Table"
    },
    "recipeSource": {
      "vi": "Nghệ Nhân Ẩm Thực Hà Thành - Phố Cổ Hà Nội",
      "en": "Hanoi Master Culinary Guild"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Dẻ sườn hoặc bắp bò gân giòn",
          "en": "Beef shank & rib finger with tendon"
        },
        "amount": "600g"
      },
      {
        "name": {
          "vi": "Bánh phở tươi Hà Nội",
          "en": "Fresh Hanoi flat rice noodles"
        },
        "amount": "500g"
      },
      {
        "name": {
          "vi": "Rượu vang đỏ hoặc rượu nấu",
          "en": "Red wine / cooking wine"
        },
        "amount": "100ml"
      },
      {
        "name": {
          "vi": "Cà chua & dầu màu điều/gấc tạo màu",
          "en": "Tomatoes & annatto seed oil"
        },
        "amount": "3 quả"
      },
      {
        "name": {
          "vi": "Quế, hồi, thảo quả nướng thơm",
          "en": "Charred cinnamon, star anise, cardamom"
        },
        "amount": "1 gói"
      },
      {
        "name": {
          "vi": "Hành hoa, mùi ta, ớt chanh ăn kèm",
          "en": "Fresh herbs, lime & chili"
        },
        "amount": "Vừa đủ"
      }
    ],
    "instructions": {
      "vi": [
        "Thịt bò thái vuông quân cờ, ướp rượu vang đỏ, hoa hồi, quế, tỏi băm, gừng, dầu điều và nước mắm trong 45 phút.",
        "Phi thơm tỏi, cho cà chua băm vào xào nhuyễn lấy nước cốt đỏ sánh.",
        "Cho thịt bò vào đảo săn trên lửa lớn, đổ nước sôi ngập thịt bò và hầm nhỏ lửa trong 1 tiếng cho gân bò mềm dẻo.",
        "Hòa chút bột năng cho nước sốt vang có độ sánh mượt quyến rũ, nêm nếm vừa vặn.",
        "Trần bánh phở xếp vào tô, múc thịt bò sốt vang nâu đỏ óng ả, rắc rau thơm chan nước dùng sôi sùng sục."
      ],
      "en": [
        "Dice beef into bite-sized cubes; marinate with red wine, cinnamon, star anise, garlic, and fish sauce for 45 mins.",
        "Sauté tomatoes with annatto oil into a glossy crimson sauce.",
        "Sear beef in the sauce, pour broth, and simmer gently for 1 hour until beef tendon is melt-in-the-mouth.",
        "Thicken broth lightly with tapioca starch slurry.",
        "Assemble fresh pho noodles in deep bowls, ladle shimmering crimson beef stew, and sprinkle fresh herbs."
      ]
    },
    "region": "north",
    "diningType": [
      "eat_out"
    ]
  },
  {
    "id": "vn-bun-oc-chuoi-dau",
    "title": {
      "vi": "Bún Ốc Nấu Chuối Đậu Tía Tô Nghệ Vàng",
      "en": "Hanoi Snail Noodle Soup with Green Bananas & Fried Tofu"
    },
    "image": "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?auto=format&fit=crop&w=800&q=80",
    "category": {
      "vi": "Món Nước",
      "en": "Noodle Soup"
    },
    "mealType": [
      "breakfast",
      "lunch",
      "dinner"
    ],
    "dietaryTags": {
      "vi": [
        "Món Nước",
        "Truyền Thống",
        "Đậm Vị",
        "Hương Thảo Mộc"
      ],
      "en": [
        "Noodle Soup",
        "Traditional",
        "Rich Flavor",
        "Herbaceous"
      ]
    },
    "time": "50 min",
    "servings": 4,
    "calories": 460,
    "protein": 26,
    "fat": 16,
    "carbs": 58,
    "servingSize": {
      "vi": "1 tô bún ốc chuối đậu nóng (~600g)",
      "en": "1 bowl snail & green banana noodles (~600g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia (NIN) - Bảng Thành Phần Thực Phẩm Việt Nam",
      "en": "National Institute of Nutrition (NIN Vietnam) - Food Composition Table"
    },
    "recipeSource": {
      "vi": "Văn Hóa Ẩm Thực Cổ Truyền Hà Nội",
      "en": "Traditional Hanoi Folk Heritage"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Ốc nhồi hoặc ốc bươu béo giòn",
          "en": "Fresh escargot / apple snails"
        },
        "amount": "1kg"
      },
      {
        "name": {
          "vi": "Chuối tiêu xanh tước vỏ ngâm chanh",
          "en": "Green plantains, peeled & soaked"
        },
        "amount": "4 quả"
      },
      {
        "name": {
          "vi": "Đậu phụ rán vàng giòn cắt miếng",
          "en": "Fried tofu cubes"
        },
        "amount": "3 bìa"
      },
      {
        "name": {
          "vi": "Thịt ba chỉ thái mỏng rán cháy cạnh",
          "en": "Pork belly slices, lightly browned"
        },
        "amount": "200g"
      },
      {
        "name": {
          "vi": "Lá tía tô, lá lốt, hành hoa thái chỉ",
          "en": "Perilla, wild betel leaves, scallions"
        },
        "amount": "100g"
      },
      {
        "name": {
          "vi": "Mẻ chua hoặc giấm bỗng, nghệ giã nhuyễn",
          "en": "Fermented rice starter & pounded turmeric"
        },
        "amount": "3 thìa canh"
      }
    ],
    "instructions": {
      "vi": [
        "Ốc ngâm nước vo gạo ớt hiểm cho nhả sạch nhớt, luộc sơ khêu ruột ốc, bóp muối giấm rửa sạch ráo.",
        "Chuối xanh bổ miếng vát ngâm nước muối chanh cho không bị thâm, trần sơ qua nước sôi.",
        "Phi thơm hành, xào thịt ba chỉ và ốc với nước cốt nghệ tươi và chút mắm tôm mẻ chua cho ngấm.",
        "Cho chuối xanh và đậu phụ vào nồi, đổ nước luộc ốc đã lắng trong vào đun sôi nhỏ lửa 15 phút cho chuối bở mềm sánh.",
        "Nêm giấm bỗng chua dịu, thả tía tô và lá lốt thái nhỏ vào sôi bùng rồi chan lên tô bún tươi."
      ],
      "en": [
        "Purge snails in rice wash water with chili, boil lightly and shuck meat; clean thoroughly.",
        "Peel green bananas, cut diagonally, and blanch in turmeric-infused water.",
        "Sauté snails and pork belly with turmeric juice, shallots, and fermented rice starter.",
        "Add green bananas, tofu, and clear snail broth; simmer gently until bananas are creamy.",
        "Adjust tanginess with rice vinegar, toss in shredded perilla and piper sarmentosum leaves, serve over vermicelli."
      ]
    },
    "region": "north",
    "diningType": [
      "eat_out"
    ]
  },
  {
    "id": "vn-che-sen-long-nhan",
    "title": {
      "vi": "Chè Hạt Sen Long Nhãn Phố Hiến Thanh Mát",
      "en": "Lotus Seed & Longan Sweet Soup (Pho Hien Style)"
    },
    "image": "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=800&q=80",
    "category": {
      "vi": "Ăn Vặt",
      "en": "Snacks & Desserts"
    },
    "mealType": [
      "snack"
    ],
    "dietaryTags": {
      "vi": [
        "Món Tráng Miệng",
        "Thanh Nhiệt",
        "Bồi Bổ Sức Khỏe",
        "Cung Đình"
      ],
      "en": [
        "Dessert",
        "Refreshing",
        "Health Tonics",
        "Royal Tradition"
      ]
    },
    "time": "40 min",
    "servings": 4,
    "calories": 190,
    "protein": 5,
    "fat": 1,
    "carbs": 42,
    "servingSize": {
      "vi": "1 bát chè sen long nhãn ướp lạnh (~200g)",
      "en": "1 chilled bowl lotus dessert (~200g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia (NIN) - Bảng Thành Phần Thực Phẩm Việt Nam",
      "en": "National Institute of Nutrition (NIN Vietnam) - Food Composition Table"
    },
    "recipeSource": {
      "vi": "Món Ngon Tiến Vua Phố Hiến Hưng Yên",
      "en": "Royal Tribute Culinary Heritage"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Hạt sen tươi thông tâm trắng muốt",
          "en": "Fresh lotus seeds, de-cored"
        },
        "amount": "250g"
      },
      {
        "name": {
          "vi": "Long nhãn Hưng Yên hoặc nhãn lồng tươi",
          "en": "Hung Yen dried longan or fresh fruit"
        },
        "amount": "150g"
      },
      {
        "name": {
          "vi": "Đường phèn thanh khiết",
          "en": "Rock sugar"
        },
        "amount": "120g"
      },
      {
        "name": {
          "vi": "Nước hoa bưởi hoặc hoa nhài ướp hương",
          "en": "Pomelo flower water essence"
        },
        "amount": "1 thìa cà phê"
      }
    ],
    "instructions": {
      "vi": [
        "Hạt sen rửa sạch, hấp hoặc luộc chín bùi mà không bị nát.",
        "Đun tan đường phèn với 800ml nước lọc cho trong veo, thả hạt sen vào rim nhỏ lửa 10 phút cho ngấm vị ngọt thanh.",
        "Lồng từng hạt sen vào trong từng cùi long nhãn căng mọng.",
        "Đun sôi lại nồi nước đường sen, thả nhẹ các viên long nhãn ôm hạt sen vào sôi 2 phút rồi tắt bếp.",
        "Nhỏ vài giọt nước hoa bưởi thanh khiết, để nguội ướp lạnh ăn cùng vài viên đá mát rượi."
      ],
      "en": [
        "Steam fresh lotus seeds until tender and fluffy without crumbling.",
        "Dissolve rock sugar in 800ml water; simmer lotus seeds in syrup for 10 minutes to infuse sweetness.",
        "Carefully stuff each lotus seed inside a plump longan flesh.",
        "Gently drop stuffed longans into sweet syrup, simmer for 2 minutes and turn off heat.",
        "Scent with pomelo blossom essence; chill before serving for a sublime summer treat."
      ]
    },
    "region": "central",
    "diningType": [
      "eat_out"
    ]
  },
  {
    "id": "vn-che-buoi",
    "title": {
      "vi": "Chè Bưởi An Giang Cùi Bưởi Giòn Giòn Cốt Dừa",
      "en": "Vietnamese Pomelo Sweet Soup with Crispy Pith & Coconut Cream"
    },
    "image": "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=800&q=80",
    "category": {
      "vi": "Ăn Vặt",
      "en": "Snacks & Desserts"
    },
    "mealType": [
      "snack"
    ],
    "dietaryTags": {
      "vi": [
        "Món Tráng Miệng",
        "Đặc Sản Miền Tây",
        "Ăn Vặt Phố Phường"
      ],
      "en": [
        "Dessert",
        "Mekong Delta Specialty",
        "Street Dessert"
      ]
    },
    "time": "50 min",
    "servings": 4,
    "calories": 240,
    "protein": 4,
    "fat": 6,
    "carbs": 48,
    "servingSize": {
      "vi": "1 ly chè bưởi chan nước cốt dừa (~250g)",
      "en": "1 glass pomelo soup with coconut cream (~250g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia (NIN) - Bảng Thành Phần Thực Phẩm Việt Nam",
      "en": "National Institute of Nutrition (NIN Vietnam) - Food Composition Table"
    },
    "recipeSource": {
      "vi": "Ẩm Thực Xứ Nắng Miền Tây Nam Bộ",
      "en": "Mekong Delta Dessert Heritage"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Cùi bưởi da xanh hoặc năm roi dày xốp",
          "en": "Pomelo white pith, diced"
        },
        "amount": "200g"
      },
      {
        "name": {
          "vi": "Đậu xanh đãi vỏ hấp chín tơi",
          "en": "Peeled mung beans, steamed tender"
        },
        "amount": "150g"
      },
      {
        "name": {
          "vi": "Bột năng ngon",
          "en": "Tapioca starch"
        },
        "amount": "120g"
      },
      {
        "name": {
          "vi": "Nước cốt dừa béo ngậy",
          "en": "Rich coconut cream"
        },
        "amount": "200ml"
      },
      {
        "name": {
          "vi": "Đường thốt nốt hoặc đường cát trắng",
          "en": "Palm sugar or granulated sugar"
        },
        "amount": "150g"
      }
    ],
    "instructions": {
      "vi": [
        "Cùi bưởi thái hạt lựu, bóp kỹ nhiều lần với muối rồi xả nước sạch vắt ráo để khử hoàn toàn vị đắng.",
        "Ướp cùi bưởi với chút đường cho ngấm, lăn đều qua lớp áo bột năng dày.",
        "Luộc cùi bưởi trong nồi nước sôi đến khi viên cùi nổi lên và trong suốt, vớt ngay ngâm vào âu nước đá cho giòn tan.",
        "Nấu sôi nước đường hoa bưởi, hòa bột năng tạo độ sánh óng ánh, trút đậu xanh hấp chín và cùi bưởi giòn vào khuấy đều.",
        "Múc chè ra ly, chan nước cốt dừa thơm béo và rắc chút đậu phộng rang giòn."
      ],
      "en": [
        "Dice pomelo pith, knead thoroughly with salt and rinse repeatedly to eliminate bitterness completely.",
        "Marinate pith with sugar, coat generously with tapioca starch.",
        "Boil coated pith until translucent and floating, immediately submerge in ice bath for a crunchy texture.",
        "Boil sweet syrup, thicken with tapioca starch slurry, fold in steamed mung beans and crispy pomelo pith.",
        "Ladle into cups, top with rich coconut cream and crushed roasted peanuts."
      ]
    },
    "region": "south",
    "diningType": [
      "eat_out"
    ]
  }
];
