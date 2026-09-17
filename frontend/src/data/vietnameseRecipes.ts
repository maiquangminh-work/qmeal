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
  region: 'north' | 'central' | 'south' | 'national' | 'korea' | 'international';
  diningType: ('home_cook' | 'eat_out')[];
  isPopular?: boolean;
  popularityScore?: number;
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
    "image": "/dishes/vn-pho-bo.jpg",
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
    ],
    "isPopular": true,
    "popularityScore": 95
  },
  {
    "id": "vn-bun-bo-hue",
    "title": {
      "vi": "Bún Bò Huế Đậm Vị Cố Đô",
      "en": "Hue Style Spicy Beef Noodle Soup"
    },
    "image": "/dishes/vn-bun-bo-hue.jpg",
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
    ],
    "isPopular": true,
    "popularityScore": 95
  },
  {
    "id": "vn-com-tam",
    "title": {
      "vi": "Cơm Tấm Sườn Bì Chả Sài Gòn",
      "en": "Saigon Broken Rice with Grilled Pork Chop"
    },
    "image": "/dishes/vn-com-tam.jpg",
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
    ],
    "isPopular": true,
    "popularityScore": 95
  },
  {
    "id": "vn-bun-cha",
    "title": {
      "vi": "Bún Chả Nướng Than Hoa Hà Nội",
      "en": "Hanoi Charcoal Grilled Pork Patties with Rice Noodles"
    },
    "image": "/dishes/vn-bun-cha.jpg",
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
    ],
    "isPopular": true,
    "popularityScore": 95
  },
  {
    "id": "vn-banh-mi",
    "title": {
      "vi": "Bánh Mì Thịt Nguội Pâté Giòn Rụm",
      "en": "Vietnamese Crispy Baguette with Pâté & Ham"
    },
    "image": "/dishes/vn-banh-mi.jpg",
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
    ],
    "isPopular": true,
    "popularityScore": 95
  },
  {
    "id": "vn-goi-cuon",
    "title": {
      "vi": "Gỏi Cuốn Tôm Thịt Thanh Mát",
      "en": "Fresh Summer Rolls with Shrimp & Pork"
    },
    "image": "/dishes/vn-goi-cuon.jpg",
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
    ],
    "isPopular": true,
    "popularityScore": 95
  },
  {
    "id": "vn-canh-chua-ca",
    "title": {
      "vi": "Canh Chua Cá Lóc Đồng Miền Tây",
      "en": "Mekong Delta Sour Fish Soup with Snakehead Fish"
    },
    "image": "/dishes/vn-canh-chua-ca.jpg",
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
    ],
    "isPopular": true,
    "popularityScore": 95
  },
  {
    "id": "vn-ca-kho-to",
    "title": {
      "vi": "Cá Kho Tộ Đậm Đà Cơm Mẹ Nấu",
      "en": "Caramelized Catfish in Clay Pot"
    },
    "image": "/dishes/vn-ca-kho-to.jpg",
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
    ],
    "isPopular": false,
    "popularityScore": 70
  },
  {
    "id": "vn-banh-xeo",
    "title": {
      "vi": "Bánh Xèo Miền Tây Giòn Tan Vàng Ruộm",
      "en": "Crispy Vietnamese Turmeric Crepe"
    },
    "image": "/dishes/vn-banh-xeo.jpg",
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
    ],
    "isPopular": true,
    "popularityScore": 95
  },
  {
    "id": "vn-thit-kho-tau",
    "title": {
      "vi": "Thịt Kho Tàu Trứng Cút Nước Dừa",
      "en": "Vietnamese Caramelized Pork with Quail Eggs & Coconut Water"
    },
    "image": "/dishes/vn-thit-kho-tau.jpg",
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
    ],
    "isPopular": true,
    "popularityScore": 95
  },
  {
    "id": "vn-bun-rieu",
    "title": {
      "vi": "Bún Riêu Cua Đồng Đậm Đà",
      "en": "Traditional Vietnamese Crab Paste Noodle Soup"
    },
    "image": "/dishes/vn-bun-rieu.jpg",
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
    ],
    "isPopular": true,
    "popularityScore": 95
  },
  {
    "id": "vn-bo-kho",
    "title": {
      "vi": "Bò Kho Tiêu Thảo Mộc Bánh Mì",
      "en": "Vietnamese Lemongrass Beef Stew with Baguette"
    },
    "image": "/dishes/vn-bo-kho.jpg",
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
    ],
    "isPopular": false,
    "popularityScore": 70
  },
  {
    "id": "vn-nem-ran",
    "title": {
      "vi": "Nem Rán Hà Nội (Chả Giò Giòn Rụm)",
      "en": "Crispy Traditional Vietnamese Fried Spring Rolls"
    },
    "image": "/dishes/vn-nem-ran.jpg",
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
    ],
    "isPopular": true,
    "popularityScore": 95
  },
  {
    "id": "vn-banh-cuon",
    "title": {
      "vi": "Bánh Cuốn Nóng Hành Phi Nhân Thịt",
      "en": "Steamed Vietnamese Rice Rolls with Minced Pork & Crispy Shallots"
    },
    "image": "/dishes/vn-banh-cuon.jpg",
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
    ],
    "isPopular": true,
    "popularityScore": 95
  },
  {
    "id": "vn-mi-quang",
    "title": {
      "vi": "Mì Quảng Tôm Thịt Đậm Đà Xứ Quảng",
      "en": "Quang Style Turmeric Rice Noodles with Shrimp & Pork"
    },
    "image": "/dishes/vn-mi-quang.jpg",
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
    ],
    "isPopular": true,
    "popularityScore": 95
  },
  {
    "id": "vn-pho-ga",
    "title": {
      "vi": "Phở Gà Ta Hà Nội Lá Chanh",
      "en": "Traditional Hanoi Free-Range Chicken Pho with Kaffir Lime Leaves"
    },
    "image": "/dishes/vn-pho-ga.jpg",
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
    ],
    "isPopular": true,
    "popularityScore": 95
  },
  {
    "id": "vn-cao-lau",
    "title": {
      "vi": "Cao Lầu Phố Cổ Hội An",
      "en": "Hoi An Signature Cao Lau Pork Noodles"
    },
    "image": "/dishes/vn-cao-lau.jpg",
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
    ],
    "isPopular": false,
    "popularityScore": 80
  },
  {
    "id": "vn-hu-tieu",
    "title": {
      "vi": "Hủ Tiếu Nam Vang Tôm Thịt Đậm Đà",
      "en": "Nam Vang Clear Pork & Seafood Noodle Soup"
    },
    "image": "/dishes/vn-hu-tieu.jpg",
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
    ],
    "isPopular": false,
    "popularityScore": 70
  },
  {
    "id": "vn-banh-beo",
    "title": {
      "vi": "Bánh Bèo Chén Tôm Chấy Xứ Huế",
      "en": "Hue Savory Steamed Rice Cakes with Toasted Shrimp"
    },
    "image": "/dishes/vn-banh-beo.jpg",
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
    ],
    "isPopular": false,
    "popularityScore": 70
  },
  {
    "id": "vn-banh-khot",
    "title": {
      "vi": "Bánh Khọt Tôm Giòn Rụm Vũng Tàu",
      "en": "Vung Tau Crispy Mini Turmeric Shrimp Pancakes"
    },
    "image": "/dishes/vn-banh-khot.jpg",
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
    ],
    "isPopular": false,
    "popularityScore": 70
  },
  {
    "id": "vn-bun-thang",
    "title": {
      "vi": "Bún Thang Thanh Nhã Phố Cổ Hà Nội",
      "en": "Hanoi Elegant Bun Thang Noodle Soup"
    },
    "image": "/dishes/vn-bun-thang.jpg",
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
    ],
    "isPopular": true,
    "popularityScore": 95
  },
  {
    "id": "vn-thit-rang-chay-canh",
    "title": {
      "vi": "Thịt Ba Chỉ Rang Cháy Cạnh",
      "en": "Crispy Caramelized Pork Belly with Fish Sauce"
    },
    "image": "/dishes/vn-thit-rang-chay-canh.jpg",
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
    ],
    "isPopular": false,
    "popularityScore": 80
  },
  {
    "id": "vn-ga-kho-sa-ot",
    "title": {
      "vi": "Gà Kho Sả Ớt Đậm Vị Nam Bộ",
      "en": "Braised Lemongrass & Chili Chicken"
    },
    "image": "/dishes/vn-ga-kho-sa-ot.jpg",
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
    ],
    "isPopular": false,
    "popularityScore": 70
  },
  {
    "id": "vn-ga-kho-gung",
    "title": {
      "vi": "Gà Kho Gừng Truyền Thống",
      "en": "Traditional Vietnamese Ginger Braised Chicken"
    },
    "image": "/dishes/vn-ga-kho-gung.jpg",
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
    ],
    "isPopular": false,
    "popularityScore": 80
  },
  {
    "id": "vn-suon-xao-chua-ngot",
    "title": {
      "vi": "Sườn Xào Chua Ngọt Hà Nội",
      "en": "Sweet & Sour Glazed Pork Ribs"
    },
    "image": "/dishes/vn-suon-xao-chua-ngot.jpg",
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
    ],
    "isPopular": false,
    "popularityScore": 80
  },
  {
    "id": "vn-dau-phu-sot-ca-chua",
    "title": {
      "vi": "Đậu Phụ Rán Sốt Cà Chua",
      "en": "Crispy Tofu in Rich Tomato Sauce"
    },
    "image": "/dishes/vn-dau-phu-sot-ca-chua.jpg",
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
    ],
    "isPopular": false,
    "popularityScore": 80
  },
  {
    "id": "vn-dau-phu-nhoi-thit",
    "title": {
      "vi": "Đậu Phụ Nhồi Thịt Sốt Cà Chua",
      "en": "Stuffed Tofu with Minced Pork in Tomato Sauce"
    },
    "image": "/dishes/vn-dau-phu-nhoi-thit.jpg",
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
    ],
    "isPopular": false,
    "popularityScore": 80
  },
  {
    "id": "vn-trung-chien-thit",
    "title": {
      "vi": "Trứng Chiên Thịt Băm Hành Hoa",
      "en": "Vietnamese Fluffy Minced Pork Omelet"
    },
    "image": "/dishes/vn-trung-chien-thit.jpg",
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
    ],
    "isPopular": false,
    "popularityScore": 80
  },
  {
    "id": "vn-tom-rim-thit",
    "title": {
      "vi": "Tôm Rim Thịt Ba Chỉ Mặn Ngọt",
      "en": "Caramelized Shrimp & Pork Belly"
    },
    "image": "/dishes/vn-tom-rim-thit.jpg",
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
    ],
    "isPopular": false,
    "popularityScore": 80
  },
  {
    "id": "vn-thit-bam-chung-mam-tep",
    "title": {
      "vi": "Thịt Băm Chưng Mắm Tép Hàng Bè",
      "en": "Hanoi Braised Pork with Fermented Rice Shrimp Paste"
    },
    "image": "/dishes/vn-thit-bam-chung-mam-tep.jpg",
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
    ],
    "isPopular": false,
    "popularityScore": 80
  },
  {
    "id": "vn-bo-xao-can-toi",
    "title": {
      "vi": "Thịt Bò Xào Cần Tỏi",
      "en": "Stir-Fried Beef with Celery & Garlic"
    },
    "image": "/dishes/vn-bo-xao-can-toi.jpg",
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
    ],
    "isPopular": false,
    "popularityScore": 80
  },
  {
    "id": "vn-canh-rau-ngot-thit-bam",
    "title": {
      "vi": "Canh Rau Ngót Nấu Thịt Băm",
      "en": "Katuk Leaf Soup with Minced Pork"
    },
    "image": "/dishes/vn-canh-rau-ngot-thit-bam.jpg",
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
    ],
    "isPopular": false,
    "popularityScore": 80
  },
  {
    "id": "vn-canh-cua-mong-toi",
    "title": {
      "vi": "Canh Cua Mồng Tơi Rau Đay Mướp Hương",
      "en": "Field Crab Soup with Malabar Spinach & Jute Leaves"
    },
    "image": "/dishes/vn-canh-cua-mong-toi.jpg",
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
    ],
    "isPopular": false,
    "popularityScore": 80
  },
  {
    "id": "vn-canh-ca-chua-trung",
    "title": {
      "vi": "Canh Cà Chua Trứng (Canh Mây)",
      "en": "Tomato Egg Drop Soup (Canh Mây)"
    },
    "image": "/dishes/vn-canh-ca-chua-trung.jpg",
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
    ],
    "isPopular": false,
    "popularityScore": 80
  },
  {
    "id": "vn-canh-kho-qua-nhoi-thit",
    "title": {
      "vi": "Canh Khổ Qua Nhồi Thịt Thanh Nhiệt",
      "en": "Stuffed Bitter Melon Soup with Minced Pork"
    },
    "image": "/dishes/vn-canh-kho-qua-nhoi-thit.jpg",
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
    ],
    "isPopular": false,
    "popularityScore": 70
  },
  {
    "id": "vn-canh-bi-dao-suon",
    "title": {
      "vi": "Canh Bí Đao Nấu Sườn Non",
      "en": "Winter Melon Soup with Pork Spare Ribs"
    },
    "image": "/dishes/vn-canh-bi-dao-suon.jpg",
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
    ],
    "isPopular": false,
    "popularityScore": 80
  },
  {
    "id": "vn-rau-muong-xao-toi",
    "title": {
      "vi": "Rau Muống Xào Tỏi Xanh Mướt Giòn Rụm",
      "en": "Stir-Fried Morning Glory with Crispy Garlic"
    },
    "image": "/dishes/vn-rau-muong-xao-toi.jpg",
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
    ],
    "isPopular": false,
    "popularityScore": 80
  },
  {
    "id": "vn-kho-quet-rau-luoc",
    "title": {
      "vi": "Rau Củ Luộc Chấm Kho Quẹt Tóp Mỡ Tôm Khô",
      "en": "Steamed Vegetables with Caramelized Pork Rind & Dried Shrimp Dip (Kho Quẹt)"
    },
    "image": "/dishes/vn-kho-quet-rau-luoc.jpg",
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
    ],
    "isPopular": false,
    "popularityScore": 70
  },
  {
    "id": "vn-thit-luoc-ca-phao",
    "title": {
      "vi": "Thịt Ba Chỉ Luộc Cà Pháo Mắm Tôm",
      "en": "Boiled Pork Belly with Pickled Eggplants & Shrimp Paste"
    },
    "image": "/dishes/vn-thit-luoc-ca-phao.jpg",
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
    ],
    "isPopular": false,
    "popularityScore": 80
  },
  {
    "id": "vn-bun-dau-mam-tom",
    "title": {
      "vi": "Bún Đậu Mắm Tôm Mẹt Thập Cẩm Hà Nội",
      "en": "Hanoi Fried Tofu & Rice Vermicelli Platter with Shrimp Paste"
    },
    "image": "/dishes/vn-bun-dau-mam-tom.jpg",
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
    ],
    "isPopular": true,
    "popularityScore": 95
  },
  {
    "id": "vn-bun-thit-nuong",
    "title": {
      "vi": "Bún Thịt Nướng Chả Giò Sài Gòn",
      "en": "Saigon Grilled Pork & Crispy Spring Roll Noodle Bowl"
    },
    "image": "/dishes/vn-bun-thit-nuong.jpg",
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
    ],
    "isPopular": false,
    "popularityScore": 70
  },
  {
    "id": "vn-bun-oc-ha-noi",
    "title": {
      "vi": "Bún Ốc Nguội Giấm Bỗng Cổ Truyền Hà Nội",
      "en": "Traditional Hanoi Snails Noodle Soup with Fermented Rice Broth"
    },
    "image": "/dishes/vn-bun-oc-ha-noi.jpg",
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
    ],
    "isPopular": true,
    "popularityScore": 95
  },
  {
    "id": "vn-banh-canh-cua",
    "title": {
      "vi": "Bánh Canh Cua Giò Heo Nước Dùng Sệt",
      "en": "Thick Tapioca Noodle Soup with Fresh Crab Meat"
    },
    "image": "/dishes/vn-banh-canh-cua.jpg",
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
    ],
    "isPopular": false,
    "popularityScore": 70
  },
  {
    "id": "vn-com-chien-dua-bo",
    "title": {
      "vi": "Cơm Rang Dưa Bò Phố Cổ Hà Nội",
      "en": "Hanoi Fried Rice with Pickled Mustard Greens & Beef"
    },
    "image": "/dishes/vn-com-chien-dua-bo.jpg",
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
    ],
    "isPopular": false,
    "popularityScore": 80
  },
  {
    "id": "vn-chao-suon-sun",
    "title": {
      "vi": "Cháo Sườn Sụn Quẩy Giòn Hà Nội",
      "en": "Hanoi Silky Pork Cartilage Congee with Crispy Crullers"
    },
    "image": "/dishes/vn-chao-suon-sun.jpg",
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
    ],
    "isPopular": false,
    "popularityScore": 80
  },
  {
    "id": "vn-xoi-xeo-ha-noi",
    "title": {
      "vi": "Xôi Xéo Hà Nội Mỡ Hành Đậu Xanh Bào",
      "en": "Hanoi Turmeric Sticky Rice with Mung Bean & Crispy Shallots"
    },
    "image": "/dishes/vn-xoi-xeo-ha-noi.jpg",
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
    ],
    "isPopular": true,
    "popularityScore": 95
  },
  {
    "id": "vn-pho-cuon",
    "title": {
      "vi": "Phở Cuốn Thịt Bò Hà Nội",
      "en": "Hanoi Beef & Herb Rolled Pho"
    },
    "image": "/dishes/vn-pho-cuon.jpg",
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
    ],
    "isPopular": false,
    "popularityScore": 80
  },
  {
    "id": "vn-banh-gio",
    "title": {
      "vi": "Bánh Giò Nóng Thịt Băm Mộc Nhĩ Hà Nội",
      "en": "Hanoi Steamed Pyramid Rice Cake with Minced Pork & Wood-Ear"
    },
    "image": "/dishes/vn-banh-gio.jpg",
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
    ],
    "isPopular": false,
    "popularityScore": 80
  },
  {
    "id": "vn-banh-bot-loc",
    "title": {
      "vi": "Bánh Bột Lọc Tôm Thịt Gói Lá Xứ Huế",
      "en": "Hue Clear Tapioca Dumplings with Shrimp & Pork"
    },
    "image": "/dishes/vn-banh-bot-loc.jpg",
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
    ],
    "isPopular": false,
    "popularityScore": 70
  },
  {
    "id": "vn-banh-trang-nuong",
    "title": {
      "vi": "Bánh Tráng Nướng Trứng Xúc Xích Đà Lạt",
      "en": "Dalat Crispy Grilled Rice Paper (Vietnamese Pizza)"
    },
    "image": "/dishes/vn-banh-trang-nuong.jpg",
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
    ],
    "isPopular": false,
    "popularityScore": 80
  },
  {
    "id": "vn-banh-trang-tron",
    "title": {
      "vi": "Bánh Tráng Trộn Sài Gòn Đầy Đủ Topping",
      "en": "Saigon Shredded Rice Paper Salad with Quail Eggs & Mango"
    },
    "image": "/dishes/vn-banh-trang-tron.jpg",
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
    ],
    "isPopular": false,
    "popularityScore": 70
  },
  {
    "id": "vn-nem-nuong-nha-trang",
    "title": {
      "vi": "Nem Nướng Nha Trang Mẹt Cuốn Bánh Tráng",
      "en": "Nha Trang Grilled Pork Sausage Rice Paper Rolls"
    },
    "image": "/dishes/vn-nem-nuong-nha-trang.jpg",
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
    ],
    "isPopular": false,
    "popularityScore": 70
  },
  {
    "id": "vn-com-chien-duong-chau",
    "title": {
      "vi": "Cơm Chiên Dương Châu Đầy Đủ Tôm Lạp Xưởng",
      "en": "Yangzhou Style Vietnamese Fried Rice"
    },
    "image": "/dishes/vn-com-chien-duong-chau.jpg",
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
    ],
    "isPopular": false,
    "popularityScore": 70
  },
  {
    "id": "vn-goi-ngo-sen-tom-thit",
    "title": {
      "vi": "Gỏi Ngó Sen Tôm Thịt Giòn Chua Ngọt",
      "en": "Lotus Root Salad with Shrimp & Pork"
    },
    "image": "/dishes/vn-goi-ngo-sen-tom-thit.jpg",
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
    ],
    "isPopular": false,
    "popularityScore": 70
  },
  {
    "id": "vn-ca-bong-kho-tieu",
    "title": {
      "vi": "Cá Bống Kho Tiêu Đậm Vị Miền Trung",
      "en": "Central Style Goby Fish Braised with Black Pepper"
    },
    "image": "/dishes/vn-ca-bong-kho-tieu.jpg",
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
    ],
    "isPopular": false,
    "popularityScore": 70
  },
  {
    "id": "vn-ca-nuc-kho-ca",
    "title": {
      "vi": "Cá Nục Kho Cà Chua Mềm Rục Xương",
      "en": "Braised Scad Fish in Rich Tomato Sauce"
    },
    "image": "/dishes/vn-ca-nuc-kho-ca.jpg",
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
    ],
    "isPopular": false,
    "popularityScore": 80
  },
  {
    "id": "vn-ca-dieu-hong-chien-xu",
    "title": {
      "vi": "Cá Diêu Hồng Chiên Xù Mắm Tỏi",
      "en": "Crispy Fried Red Tilapia with Garlic Fish Sauce"
    },
    "image": "/dishes/vn-ca-dieu-hong-chien-xu.jpg",
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
    ],
    "isPopular": false,
    "popularityScore": 80
  },
  {
    "id": "vn-suon-rim-man-ngot",
    "title": {
      "vi": "Sườn Non Rim Mặn Ngọt Óng Ả",
      "en": "Caramelized Savory Sweet Pork Ribs"
    },
    "image": "/dishes/vn-suon-rim-man-ngot.jpg",
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
    ],
    "isPopular": false,
    "popularityScore": 80
  },
  {
    "id": "vn-bo-luc-lac",
    "title": {
      "vi": "Bò Lúc Lắc Khoai Tây Chiên Bơ Tỏi",
      "en": "Shaking Beef Tenderloin with Garlic Butter Fries"
    },
    "image": "/dishes/vn-bo-luc-lac.jpg",
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
    ],
    "isPopular": false,
    "popularityScore": 80
  },
  {
    "id": "vn-thit-kho-tieu",
    "title": {
      "vi": "Thịt Ba Chỉ Kho Tiêu Phú Quốc",
      "en": "Phu Quoc Black Pepper Braised Pork Belly"
    },
    "image": "/dishes/vn-thit-kho-tieu.jpg",
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
    ],
    "isPopular": false,
    "popularityScore": 80
  },
  {
    "id": "vn-gio-lua-rim-mam",
    "title": {
      "vi": "Giò Lụa Rim Nước Mắm Tiêu Sọ",
      "en": "Caramelized Vietnamese Ham with Pepper Sauce"
    },
    "image": "/dishes/vn-gio-lua-rim-mam.jpg",
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
    ],
    "isPopular": false,
    "popularityScore": 80
  },
  {
    "id": "vn-tom-rim-man-ngot",
    "title": {
      "vi": "Tôm Đồng Rim Mặn Ngọt Giòn Vỏ",
      "en": "Sweet & Salty Crisp Wild River Shrimp"
    },
    "image": "/dishes/vn-tom-rim-man-ngot.jpg",
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
    ],
    "isPopular": false,
    "popularityScore": 80
  },
  {
    "id": "vn-muc-xao-can-toi",
    "title": {
      "vi": "Mực Ống Tươi Xào Cần Tỏi",
      "en": "Stir-Fried Squid with Celery & Leeks"
    },
    "image": "/dishes/vn-muc-xao-can-toi.jpg",
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
    ],
    "isPopular": false,
    "popularityScore": 80
  },
  {
    "id": "vn-muc-nhoi-thit",
    "title": {
      "vi": "Mực Ống Nhồi Thịt Sốt Cà Chua",
      "en": "Stuffed Squid with Pork in Savory Tomato Glaze"
    },
    "image": "/dishes/vn-muc-nhoi-thit.jpg",
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
    ],
    "isPopular": false,
    "popularityScore": 80
  },
  {
    "id": "vn-xiu-mai-sot-ca",
    "title": {
      "vi": "Xíu Mại Thịt Băm Sốt Cà Bánh Mì",
      "en": "Vietnamese Meatballs in Tomato Sauce with Baguette"
    },
    "image": "/dishes/vn-xiu-mai-sot-ca.jpg",
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
    ],
    "isPopular": false,
    "popularityScore": 80
  },
  {
    "id": "vn-trung-cuon-hanh",
    "title": {
      "vi": "Trứng Cuộn Hành Hoa Nấm Mèo",
      "en": "Rolled Egg Crepe with Scallions & Wood-Ear"
    },
    "image": "/dishes/vn-trung-cuon-hanh.jpg",
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
    ],
    "isPopular": false,
    "popularityScore": 80
  },
  {
    "id": "vn-canh-suon-khoai-tay",
    "title": {
      "vi": "Canh Sườn Khoai Tây Cà Rốt Ngọt Lịm",
      "en": "Pork Ribs Soup with Potatoes & Carrots"
    },
    "image": "/dishes/vn-canh-suon-khoai-tay.jpg",
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
    ],
    "isPopular": false,
    "popularityScore": 80
  },
  {
    "id": "vn-canh-bau-nau-tom",
    "title": {
      "vi": "Canh Bầu Nấu Tôm Đồng Ngọt Mát",
      "en": "Calabash Gourd Soup with Sweet Wild Shrimp"
    },
    "image": "/dishes/vn-canh-bau-nau-tom.jpg",
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
    ],
    "isPopular": false,
    "popularityScore": 80
  },
  {
    "id": "vn-canh-cai-ca-thac-lac",
    "title": {
      "vi": "Canh Cải Bẹ Xanh Nấu Cá Thác Lác",
      "en": "Mustard Greens Soup with Featherback Fish Paste"
    },
    "image": "/dishes/vn-canh-cai-ca-thac-lac.jpg",
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
    ],
    "isPopular": false,
    "popularityScore": 80
  },
  {
    "id": "vn-canh-ngao-chua",
    "title": {
      "vi": "Canh Ngao Chua Nấu Dứa Thì Là",
      "en": "Sour Clam Soup with Pineapple & Fresh Dill"
    },
    "image": "/dishes/vn-canh-ngao-chua.jpg",
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
    ],
    "isPopular": false,
    "popularityScore": 80
  },
  {
    "id": "vn-canh-hen-hoa-thien-ly",
    "title": {
      "vi": "Canh Hến Nấu Hoa Thiên Lý Xứ Huế",
      "en": "Baby River Clam Soup with Telosma Flowers"
    },
    "image": "/dishes/vn-canh-hen-hoa-thien-ly.jpg",
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
    ],
    "isPopular": false,
    "popularityScore": 70
  },
  {
    "id": "vn-canh-rong-bien-thit-bo",
    "title": {
      "vi": "Canh Rong Biển Nấu Thịt Bò Thanh Ngọt",
      "en": "Seaweed Soup with Tender Sliced Beef"
    },
    "image": "/dishes/vn-canh-rong-bien-thit-bo.jpg",
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
    ],
    "isPopular": false,
    "popularityScore": 80
  },
  {
    "id": "vn-canh-bap-cai-cuon-thit",
    "title": {
      "vi": "Canh Bắp Cải Cuộn Thịt Thắt Nơ Hành",
      "en": "Cabbage Rolls Stuffed with Pork in Clear Broth"
    },
    "image": "/dishes/vn-canh-bap-cai-cuon-thit.jpg",
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
    ],
    "isPopular": false,
    "popularityScore": 80
  },
  {
    "id": "vn-canh-mang-chua-bo",
    "title": {
      "vi": "Canh Măng Chua Nấu Bắp Bò",
      "en": "Sour Bamboo Shoot Soup with Beef Shank"
    },
    "image": "/dishes/vn-canh-mang-chua-bo.jpg",
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
    ],
    "isPopular": false,
    "popularityScore": 80
  },
  {
    "id": "vn-canh-chua-tom",
    "title": {
      "vi": "Canh Chua Tôm Tươi Miền Tây",
      "en": "Mekong Sour Shrimp Soup with Tamarind & Okra"
    },
    "image": "/dishes/vn-canh-chua-tom.jpg",
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
    ],
    "isPopular": false,
    "popularityScore": 70
  },
  {
    "id": "vn-canh-khoai-mo",
    "title": {
      "vi": "Canh Khoai Mỡ Nấu Tôm Băm Tím Biếc",
      "en": "Purple Yam Soup with Minced Shrimp & Rice Paddy Herb"
    },
    "image": "/dishes/vn-canh-khoai-mo.jpg",
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
    ],
    "isPopular": false,
    "popularityScore": 80
  },
  {
    "id": "vn-canh-cu-sen-suon",
    "title": {
      "vi": "Canh Củ Sen Hầm Sườn Bổ Dưỡng",
      "en": "Lotus Root & Pork Ribs Nourishing Clear Soup"
    },
    "image": "/dishes/vn-canh-cu-sen-suon.jpg",
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
    ],
    "isPopular": false,
    "popularityScore": 80
  },
  {
    "id": "vn-canh-sup-rau-cu",
    "title": {
      "vi": "Canh Súp Rau Củ Thanh Đạm Chay",
      "en": "Vegetarian Sweet Garden Broth with Sweet Corn"
    },
    "image": "/dishes/vn-canh-sup-rau-cu.jpg",
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
    ],
    "isPopular": false,
    "popularityScore": 80
  },
  {
    "id": "vn-canh-xa-lach-xoong",
    "title": {
      "vi": "Canh Xà Lách Xoong Thịt Băm",
      "en": "Watercress Soup with Minced Pork"
    },
    "image": "/dishes/vn-canh-xa-lach-xoong.jpg",
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
    ],
    "isPopular": false,
    "popularityScore": 80
  },
  {
    "id": "vn-rau-lang-xao-toi",
    "title": {
      "vi": "Rau Lang Xào Tỏi Xanh Giòn",
      "en": "Stir-Fried Sweet Potato Greens with Golden Garlic"
    },
    "image": "/dishes/vn-rau-lang-xao-toi.jpg",
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
    ],
    "isPopular": false,
    "popularityScore": 80
  },
  {
    "id": "vn-bap-cai-xao-ca",
    "title": {
      "vi": "Bắp Cải Xào Cà Chua Chín Tới",
      "en": "Stir-Fried Cabbage with Fresh Tomatoes"
    },
    "image": "/dishes/vn-bap-cai-xao-ca.jpg",
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
    ],
    "isPopular": false,
    "popularityScore": 80
  },
  {
    "id": "vn-dau-cove-xao-bo",
    "title": {
      "vi": "Đậu Cô Ve Xào Thịt Bò Mềm",
      "en": "Stir-Fried Green String Beans with Beef"
    },
    "image": "/dishes/vn-dau-cove-xao-bo.jpg",
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
    ],
    "isPopular": false,
    "popularityScore": 80
  },
  {
    "id": "vn-su-su-xao-bo",
    "title": {
      "vi": "Su Su Bào Xào Thịt Bò",
      "en": "Stir-Fried Chayote with Sliced Beef"
    },
    "image": "/dishes/vn-su-su-xao-bo.jpg",
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
    ],
    "isPopular": false,
    "popularityScore": 80
  },
  {
    "id": "vn-mang-tay-xao-tom",
    "title": {
      "vi": "Măng Tây Xào Tôm Tươi Giòn Ngọt",
      "en": "Stir-Fried Asparagus with Tiger Prawns"
    },
    "image": "/dishes/vn-mang-tay-xao-tom.jpg",
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
    ],
    "isPopular": false,
    "popularityScore": 80
  },
  {
    "id": "vn-bong-cai-xao-bo",
    "title": {
      "vi": "Bông Cải Xanh Xào Thịt Bò Dầu Hào",
      "en": "Stir-Fried Broccoli with Beef in Savory Oyster Sauce"
    },
    "image": "/dishes/vn-bong-cai-xao-bo.jpg",
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
    ],
    "isPopular": false,
    "popularityScore": 80
  },
  {
    "id": "vn-kho-qua-xao-trung",
    "title": {
      "vi": "Khổ Qua Xào Trứng Vịt Bùi Béo",
      "en": "Stir-Fried Bitter Melon with Scrambled Eggs"
    },
    "image": "/dishes/vn-kho-qua-xao-trung.jpg",
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
    ],
    "isPopular": false,
    "popularityScore": 80
  },
  {
    "id": "vn-gia-do-xao-huyet",
    "title": {
      "vi": "Giá Đỗ Xào Huyết Heo & Hẹ Lá",
      "en": "Stir-Fried Bean Sprouts with Blood Pudding & Chives"
    },
    "image": "/dishes/vn-gia-do-xao-huyet.jpg",
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
    ],
    "isPopular": false,
    "popularityScore": 80
  },
  {
    "id": "vn-nam-dui-ga-xao-bo",
    "title": {
      "vi": "Nấm Đùi Gà Xào Bơ Tỏi Đậm Vị",
      "en": "King Oyster Mushrooms Sautéed in Garlic Butter"
    },
    "image": "/dishes/vn-nam-dui-ga-xao-bo.jpg",
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
    ],
    "isPopular": false,
    "popularityScore": 80
  },
  {
    "id": "vn-ga-luoc-la-chanh",
    "title": {
      "vi": "Gà Ta Luộc Lá Chanh Da Giòn Vàng",
      "en": "Traditional Poached Chicken with Kaffir Lime Leaves"
    },
    "image": "/dishes/vn-ga-luoc-la-chanh.jpg",
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
    ],
    "isPopular": false,
    "popularityScore": 80
  },
  {
    "id": "vn-bap-bo-luoc-sa",
    "title": {
      "vi": "Bắp Bò Luộc Sả Gừng Chấm Mắm Gừng",
      "en": "Tender Boiled Beef Shank with Ginger Fish Sauce"
    },
    "image": "/dishes/vn-bap-bo-luoc-sa.jpg",
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
    ],
    "isPopular": false,
    "popularityScore": 80
  },
  {
    "id": "vn-dau-bap-luoc-chao",
    "title": {
      "vi": "Đậu Bắp Luộc Chấm Chao Béo Ngậy",
      "en": "Boiled Crisp Okra with Fermented Bean Curd Dip"
    },
    "image": "/dishes/vn-dau-bap-luoc-chao.jpg",
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
    ],
    "isPopular": false,
    "popularityScore": 80
  },
  {
    "id": "vn-bun-mam-mien-tay",
    "title": {
      "vi": "Bún Mắm Miền Tây Đậm Đà Sông Nước",
      "en": "Mekong Fermented Fish Noodle Soup with Seafood & Roasted Pork"
    },
    "image": "/dishes/vn-bun-mam-mien-tay.jpg",
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
    ],
    "isPopular": false,
    "popularityScore": 70
  },
  {
    "id": "vn-bun-ca-cay-hai-phong",
    "title": {
      "vi": "Bún Cá Cay Hải Phòng Nước Dùng Thanh",
      "en": "Hai Phong Spicy Fish Noodle Soup with Crispy Fish & Taro Stems"
    },
    "image": "/dishes/vn-bun-ca-cay-hai-phong.jpg",
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
    ],
    "isPopular": false,
    "popularityScore": 80
  },
  {
    "id": "vn-bun-moc-suon-non",
    "title": {
      "vi": "Bún Mọc Sườn Non Nước Dùng Trong Ngọt",
      "en": "Pork Meatball & Spare Rib Noodle Soup with Shiitake"
    },
    "image": "/dishes/vn-bun-moc-suon-non.jpg",
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
    ],
    "isPopular": false,
    "popularityScore": 80
  },
  {
    "id": "vn-bun-cha-ca-da-nang",
    "title": {
      "vi": "Bún Chả Cá Đà Nẵng Đậm Đà Xứ Biển",
      "en": "Da Nang Fish Cake Noodle Soup with Pumpkin & Bamboo Shoots"
    },
    "image": "/dishes/vn-bun-cha-ca-da-nang.jpg",
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
    ],
    "isPopular": false,
    "popularityScore": 70
  },
  {
    "id": "vn-hu-tieu-my-tho",
    "title": {
      "vi": "Hủ Tiếu Mỹ Tho Sợi Dai Nước Trong",
      "en": "My Tho Signature Chewy Clear Noodle Soup"
    },
    "image": "/dishes/vn-hu-tieu-my-tho.jpg",
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
    ],
    "isPopular": false,
    "popularityScore": 70
  },
  {
    "id": "vn-hu-tieu-go",
    "title": {
      "vi": "Hủ Tiếu Gõ Xá Xíu Bò Viên Đêm Sài Gòn",
      "en": "Saigon Street Cart Noodle Soup with Char Siu & Beef Meatballs"
    },
    "image": "/dishes/vn-hu-tieu-go.jpg",
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
    ],
    "isPopular": false,
    "popularityScore": 70
  },
  {
    "id": "vn-banh-canh-ghe",
    "title": {
      "vi": "Bánh Canh Ghẹ Tươi Nước Cốt Dừa",
      "en": "Blue Crab Tapioca Noodle Soup with Coconut Broth"
    },
    "image": "/dishes/vn-banh-canh-ghe.jpg",
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
    ],
    "isPopular": false,
    "popularityScore": 80
  },
  {
    "id": "vn-banh-canh-cha-ca",
    "title": {
      "vi": "Bánh Canh Chả Cá Nha Trang",
      "en": "Nha Trang Fried Fish Cake Noodle Soup"
    },
    "image": "/dishes/vn-banh-canh-cha-ca.jpg",
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
    ],
    "isPopular": false,
    "popularityScore": 70
  },
  {
    "id": "vn-mien-mang-ga",
    "title": {
      "vi": "Miến Măng Gà Ta Nước Dùng Ngọt Thanh",
      "en": "Chicken Glass Noodle Soup with Dried Bamboo Shoots"
    },
    "image": "/dishes/vn-mien-mang-ga.jpg",
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
    ],
    "isPopular": false,
    "popularityScore": 80
  },
  {
    "id": "vn-mien-luon-gion",
    "title": {
      "vi": "Miến Lươn Giòn Nghệ An Thơm Nồng Rau Răm",
      "en": "Nghe An Crispy Eel Glass Noodle Soup"
    },
    "image": "/dishes/vn-mien-luon-gion.jpg",
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
    ],
    "isPopular": false,
    "popularityScore": 80
  },
  {
    "id": "vn-mien-xao-cua",
    "title": {
      "vi": "Miến Xào Cua Bể Tươi Ráo Sợi",
      "en": "Stir-Fried Glass Noodles with Fresh Sea Crab Meat"
    },
    "image": "/dishes/vn-mien-xao-cua.jpg",
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
    ],
    "isPopular": false,
    "popularityScore": 80
  },
  {
    "id": "vn-banh-nam-hue",
    "title": {
      "vi": "Bánh Nậm Tôm Thịt Lá Chuối Xứ Huế",
      "en": "Hue Flat Rice Dumpling with Minced Shrimp & Pork in Banana Leaves"
    },
    "image": "/dishes/vn-banh-nam-hue.jpg",
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
    ],
    "isPopular": false,
    "popularityScore": 70
  },
  {
    "id": "vn-banh-can-phan-thiet",
    "title": {
      "vi": "Bánh Căn Tôm Trứng Chấm Nước Mắm Cá",
      "en": "Phan Thiet Mini Rice Cakes with Shrimp & Rich Fish Sauce"
    },
    "image": "/dishes/vn-banh-can-phan-thiet.jpg",
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
    ],
    "isPopular": false,
    "popularityScore": 80
  },
  {
    "id": "vn-bo-bia-ngot",
    "title": {
      "vi": "Bò Bía Ngọt Dừa Nạo Mạch Nha Tuổi Thơ",
      "en": "Sweet Coconut & Maltose Crepe Rolls"
    },
    "image": "/dishes/vn-bo-bia-ngot.jpg",
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
    ],
    "isPopular": false,
    "popularityScore": 80
  },
  {
    "id": "vn-nem-lui-nuong-sa",
    "title": {
      "vi": "Nem Lụi Nướng Sả Cây Phố Cổ Huế",
      "en": "Hue Grilled Pork Skewers on Lemongrass Stalks"
    },
    "image": "/dishes/vn-nem-lui-nuong-sa.jpg",
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
    ],
    "isPopular": false,
    "popularityScore": 80
  },
  {
    "id": "vn-goi-ga-bap-cai",
    "title": {
      "vi": "Gỏi Gà Xé Phay Bắp Cải Chua Ngọt",
      "en": "Shredded Chicken & Crunchy Cabbage Herb Salad"
    },
    "image": "/dishes/vn-goi-ga-bap-cai.jpg",
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
    ],
    "isPopular": false,
    "popularityScore": 80
  },
  {
    "id": "vn-nom-bo-kho",
    "title": {
      "vi": "Nộm Bò Khô Đu Đủ Bờ Hồ Hà Nội",
      "en": "Hanoi Green Papaya Salad with Sweet-Savory Beef Jerky"
    },
    "image": "/dishes/vn-nom-bo-kho.jpg",
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
    ],
    "isPopular": false,
    "popularityScore": 80
  },
  {
    "id": "vn-cha-ram-tom-dat",
    "title": {
      "vi": "Chả Ram Tôm Đất Giòn Rụm Xứ Nẫu Bình Định",
      "en": "Binh Dinh Crunchy Mini Shrimp Spring Rolls"
    },
    "image": "/dishes/vn-cha-ram-tom-dat.jpg",
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
    ],
    "isPopular": false,
    "popularityScore": 70
  },
  {
    "id": "vn-com-ga-tam-ky",
    "title": {
      "vi": "Cơm Gà Tam Kỳ Vàng Ươm Nước Dùng Gà",
      "en": "Tam Ky Turmeric Chicken Rice with Shredded Herb Salad"
    },
    "image": "/dishes/vn-com-ga-tam-ky.jpg",
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
    ],
    "isPopular": false,
    "popularityScore": 80
  },
  {
    "id": "vn-chao-ga-nam-huong",
    "title": {
      "vi": "Cháo Gà Ta Nấm Hương Hạt Sen Ấm Bụng",
      "en": "Chicken Congee with Shiitake Mushrooms & Lotus Seeds"
    },
    "image": "/dishes/vn-chao-ga-nam-huong.jpg",
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
    ],
    "isPopular": false,
    "popularityScore": 80
  },
  {
    "id": "vn-chao-long-ha-noi",
    "title": {
      "vi": "Cháo Lòng Tiết Huyết Phố Cổ Hà Nội",
      "en": "Traditional Hanoi Pork Offal & Blood Congee"
    },
    "image": "/dishes/vn-chao-long-ha-noi.jpg",
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
    ],
    "isPopular": false,
    "popularityScore": 80
  },
  {
    "id": "vn-chao-ca-loc-rau-dang",
    "title": {
      "vi": "Cháo Cá Lóc Đồng Rau Đắng Miền Tây",
      "en": "Mekong Snakehead Fish Congee with Bitter Greens"
    },
    "image": "/dishes/vn-chao-ca-loc-rau-dang.jpg",
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
    ],
    "isPopular": false,
    "popularityScore": 70
  },
  {
    "id": "vn-xoi-ga-xe",
    "title": {
      "vi": "Xôi Nếp Nương Gà Xé Nấm Hương Mỡ Hành",
      "en": "Sticky Rice with Shredded Chicken & Fragrant Scallion Oil"
    },
    "image": "/dishes/vn-xoi-ga-xe.jpg",
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
    ],
    "isPopular": false,
    "popularityScore": 80
  },
  {
    "id": "vn-xoi-khuc-ha-noi",
    "title": {
      "vi": "Xôi Khúc Lá Khúc Nhân Thịt Đậu Xanh Hà Nội",
      "en": "Traditional Hanoi Cudweed Rice Cakes with Pork & Mung Bean"
    },
    "image": "/dishes/vn-xoi-khuc-ha-noi.jpg",
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
    ],
    "isPopular": false,
    "popularityScore": 80
  },
  {
    "id": "vn-ca-chep-om-dua",
    "title": {
      "vi": "Cá Chép Om Dưa Thì Là Chua Dịu",
      "en": "Braised Carp with Pickled Mustard Greens & Dill"
    },
    "image": "/dishes/vn-ca-chep-om-dua.jpg",
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
    ],
    "isPopular": false,
    "popularityScore": 80
  },
  {
    "id": "vn-canh-suon-chua-sau",
    "title": {
      "vi": "Canh Sườn Nấu Sấu Chua Thanh Mát Hà Nội",
      "en": "Hanoi Pork Rib Soup with Dracontomelon (Sấu)"
    },
    "image": "/dishes/vn-canh-suon-chua-sau.jpg",
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
    ],
    "isPopular": false,
    "popularityScore": 80
  },
  {
    "id": "vn-canh-ca-nau-ngot",
    "title": {
      "vi": "Canh Cá Điêu Hồng Nấu Ngót Cần Nước Nam Bộ",
      "en": "Southern Sweet & Sour Tilapia Soup with Celery & Tomato"
    },
    "image": "/dishes/vn-canh-ca-nau-ngot.jpg",
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
    ],
    "isPopular": false,
    "popularityScore": 70
  },
  {
    "id": "vn-rau-cai-ngong-xao-toi",
    "title": {
      "vi": "Cải Ngồng Xào Tỏi Giòn Ngọt Xanh Mướt",
      "en": "Stir-Fried Choy Sum Greens with Crispy Garlic"
    },
    "image": "/dishes/vn-rau-cai-ngong-xao-toi.jpg",
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
    ],
    "isPopular": false,
    "popularityScore": 80
  },
  {
    "id": "vn-pho-sot-vang",
    "title": {
      "vi": "Phở Bò Sốt Vang Rượu Vang Gấc Đỏ Hà Nội",
      "en": "Hanoi Beef Stew Pho with Red Wine & Annatto (Sốt Vang)"
    },
    "image": "/dishes/vn-pho-sot-vang.jpg",
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
    ],
    "isPopular": false,
    "popularityScore": 80
  },
  {
    "id": "vn-bun-oc-chuoi-dau",
    "title": {
      "vi": "Bún Ốc Nấu Chuối Đậu Tía Tô Nghệ Vàng",
      "en": "Hanoi Snail Noodle Soup with Green Bananas & Fried Tofu"
    },
    "image": "/dishes/vn-bun-oc-chuoi-dau.jpg",
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
    ],
    "isPopular": false,
    "popularityScore": 80
  },
  {
    "id": "vn-che-sen-long-nhan",
    "title": {
      "vi": "Chè Hạt Sen Long Nhãn Phố Hiến Thanh Mát",
      "en": "Lotus Seed & Longan Sweet Soup (Pho Hien Style)"
    },
    "image": "/dishes/vn-che-sen-long-nhan.jpg",
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
    ],
    "isPopular": false,
    "popularityScore": 70
  },
  {
    "id": "vn-che-buoi",
    "title": {
      "vi": "Chè Bưởi An Giang Cùi Bưởi Giòn Giòn Cốt Dừa",
      "en": "Vietnamese Pomelo Sweet Soup with Crispy Pith & Coconut Cream"
    },
    "image": "/dishes/vn-che-buoi.jpg",
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
    ],
    "isPopular": false,
    "popularityScore": 70
  },
  {
    "id": "vn-trung-duc-thit",
    "title": {
      "vi": "Trứng Đúc Thịt Băm Rán Vàng Giòn",
      "en": "Vietnamese Minced Pork Omelet"
    },
    "image": "/dishes/vn-trung-duc-thit.jpg",
    "category": {
      "vi": "Món Mặn",
      "en": "Savory Dish"
    },
    "mealType": [
      "lunch",
      "dinner"
    ],
    "region": "national",
    "diningType": [
      "home_cook"
    ],
    "isPopular": true,
    "popularityScore": 98,
    "dietaryTags": {
      "vi": [
        "Cơm nhà",
        "Dễ làm",
        "Giàu đạm"
      ],
      "en": [
        "Home Cook",
        "Easy",
        "High Protein"
      ]
    },
    "time": "20m",
    "servings": 4,
    "calories": 285,
    "protein": 21,
    "fat": 20,
    "carbs": 4,
    "servingSize": {
      "vi": "1 phần (~180g)",
      "en": "1 serving (~180g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia (NIN)",
      "en": "National Institute of Nutrition"
    },
    "recipeSource": {
      "vi": "Bếp Gia Đình Việt",
      "en": "Vietnamese Family Kitchen"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Trứng gà ta",
          "en": "Farm eggs"
        },
        "amount": "4 quả"
      },
      {
        "name": {
          "vi": "Thịt heo xay nạc dăm",
          "en": "Minced pork shoulder"
        },
        "amount": "200g"
      },
      {
        "name": {
          "vi": "Hành tím băm",
          "en": "Minced shallots"
        },
        "amount": "2 củ"
      },
      {
        "name": {
          "vi": "Hành lá thái nhỏ",
          "en": "Chopped scallions"
        },
        "amount": "3 nhánh"
      },
      {
        "name": {
          "vi": "Mộc nhĩ băm nhỏ",
          "en": "Minced wood ear mushroom"
        },
        "amount": "2 tai"
      },
      {
        "name": {
          "vi": "Nước mắm ngon",
          "en": "Fish sauce"
        },
        "amount": "1 thìa canh"
      },
      {
        "name": {
          "vi": "Hạt tiêu xay",
          "en": "Ground black pepper"
        },
        "amount": "1/2 thìa cà phê"
      },
      {
        "name": {
          "vi": "Dầu ăn",
          "en": "Cooking oil"
        },
        "amount": "2 thìa canh"
      }
    ],
    "instructions": {
      "vi": [
        "Cho thịt heo xay, mộc nhĩ băm, hành tím và hành lá vào tô lớn.",
        "Đập 4 quả trứng gà vào, thêm nước mắm và hạt tiêu đen, đánh đều tay cho hỗn hợp hòa quyện.",
        "Làm nóng chảo với 2 thìa canh dầu ăn trên lửa vừa. Đổ hỗn hợp trứng thịt vào dàn đều.",
        "Hạ lửa nhỏ vừa, đậy nắp vung khoảng 4-5 phút để thịt bên trong chín đều.",
        "Mở nắp, khéo léo lật mặt trứng và rán thêm 2-3 phút cho cả hai mặt vàng ruộm.",
        "Cho ra đĩa, cắt thành từng miếng tam giác vừa ăn, dùng nóng với cơm trắng."
      ],
      "en": [
        "In a large bowl, combine minced pork, wood ear mushroom, shallots, and scallions.",
        "Crack eggs into the bowl, add fish sauce and black pepper, beat thoroughly.",
        "Heat cooking oil in a skillet over medium heat. Pour in egg mixture evenly.",
        "Cover and cook on medium-low for 4-5 minutes until cooked through.",
        "Flip carefully and cook for 2-3 minutes until golden brown on both sides.",
        "Transfer to a plate, cut into wedges, and serve hot with steamed rice."
      ]
    }
  },
  {
    "id": "vn-thit-chan-gio-luoc",
    "title": {
      "vi": "Thịt Chân Giò Luộc Cuộn Chỉ Chấm Mắm Tép",
      "en": "Boiled Rolled Pork Shank with Fermented Shrimp Paste"
    },
    "image": "/dishes/vn-thit-chan-gio-luoc.jpg",
    "category": {
      "vi": "Món Mặn",
      "en": "Savory Dish"
    },
    "mealType": [
      "lunch",
      "dinner"
    ],
    "region": "north",
    "diningType": [
      "home_cook"
    ],
    "isPopular": true,
    "popularityScore": 94,
    "dietaryTags": {
      "vi": [
        "Cơm nhà",
        "Truyền thống",
        "Món nhắm"
      ],
      "en": [
        "Home Cook",
        "Traditional"
      ]
    },
    "time": "45m",
    "servings": 4,
    "calories": 320,
    "protein": 26,
    "fat": 23,
    "carbs": 2,
    "servingSize": {
      "vi": "1 đĩa thái mỏng (~250g)",
      "en": "1 sliced plate (~250g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia (NIN)",
      "en": "National Institute of Nutrition"
    },
    "recipeSource": {
      "vi": "Ẩm thực Đồng bằng Bắc Bộ",
      "en": "Northern Vietnamese Cuisine"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Thịt bắp chân giò heo",
          "en": "Pork shank"
        },
        "amount": "600g"
      },
      {
        "name": {
          "vi": "Hành khô đập dập",
          "en": "Crushed shallots"
        },
        "amount": "3 củ"
      },
      {
        "name": {
          "vi": "Gừng tươi đập dập",
          "en": "Crushed ginger"
        },
        "amount": "1 nhánh"
      },
      {
        "name": {
          "vi": "Mắm tép Hàng Bè hoặc mắm tôm",
          "en": "Fermented shrimp sauce"
        },
        "amount": "3 thìa canh"
      },
      {
        "name": {
          "vi": "Ớt hiểm, tỏi băm, chanh tươi",
          "en": "Chili, garlic, fresh lime"
        },
        "amount": "Vừa đủ"
      }
    ],
    "instructions": {
      "vi": [
        "Bắp giò rửa sạch, cuộn tròn chặt bằng dây chỉ thực phẩm để tạo hình khối trụ tròn.",
        "Đun sôi nồi nước với gừng đập dập, hành khô và 1 thìa cà phê muối.",
        "Cho bắp giò vào luộc nhỏ lửa trong 25-30 phút đến khi xiên đũa thấy mềm, nước trong không hồng.",
        "Vớt thịt ngâm ngay vào âu nước đá lạnh 10 phút cho da giòn trắng giòn sần sật.",
        "Bọc kín cho vào ngăn mát tủ lạnh 1 tiếng để thịt săn chắc, thái lát thật mỏng.",
        "Pha mắm tép với đường, ớt băm, tỏi băm và chanh tươi đánh bông lên, chấm kèm thịt luộc."
      ],
      "en": [
        "Clean pork shank, tightly roll and tie with kitchen twine into a cylinder.",
        "Bring water to a boil with crushed ginger, shallots, and salt.",
        "Simmer pork over medium-low heat for 25-30 minutes until tender and cooked through.",
        "Plunge into an ice bath for 10 minutes to crisp up the skin, then chill in fridge.",
        "Slice very thinly with a sharp knife.",
        "Serve with seasoned fermented shrimp paste spiked with lime, sugar, garlic, and chili."
      ]
    }
  },
  {
    "id": "vn-thit-ba-chi-luoc-cuon-banh-trang",
    "title": {
      "vi": "Thịt Ba Chỉ Luộc Cuốn Bánh Tráng Rau Sống",
      "en": "Boiled Pork Belly Spring Rolls with Fresh Herbs"
    },
    "image": "/dishes/vn-thit-ba-chi-luoc-cuon-banh-trang.jpg",
    "category": {
      "vi": "Món Cuốn & Trộn",
      "en": "Rolls & Salads"
    },
    "mealType": [
      "lunch",
      "dinner"
    ],
    "region": "central",
    "diningType": [
      "home_cook",
      "eat_out"
    ],
    "isPopular": true,
    "popularityScore": 95,
    "dietaryTags": {
      "vi": [
        "Cơm nhà",
        "Thanh mát",
        "Nhiều rau xanh"
      ],
      "en": [
        "Fresh",
        "Herbs",
        "Healthy"
      ]
    },
    "time": "30m",
    "servings": 4,
    "calories": 340,
    "protein": 22,
    "fat": 26,
    "carbs": 6,
    "servingSize": {
      "vi": "1 phần cuốn (~300g)",
      "en": "1 wrap plate (~300g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia",
      "en": "National Institute of Nutrition"
    },
    "recipeSource": {
      "vi": "Ẩm thực Miền Trung",
      "en": "Central Vietnam Cuisine"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Thịt ba chỉ heo tươi",
          "en": "Fresh pork belly"
        },
        "amount": "500g"
      },
      {
        "name": {
          "vi": "Bánh tráng phơi sương Đại Lộc",
          "en": "Rice paper"
        },
        "amount": "1 xấp"
      },
      {
        "name": {
          "vi": "Bún tươi",
          "en": "Fresh rice vermicelli"
        },
        "amount": "300g"
      },
      {
        "name": {
          "vi": "Rau sống tổng hợp (xà lách, diếp cá, húng quế, tía tô, dưa leo)",
          "en": "Assorted fresh herbs & cucumber"
        },
        "amount": "300g"
      },
      {
        "name": {
          "vi": "Mắm nêm pha tỏi ớt dứa băm",
          "en": "Fermented fish sauce with pineapple"
        },
        "amount": "1 bát"
      }
    ],
    "instructions": {
      "vi": [
        "Thịt ba chỉ cạo sạch bì, luộc chín tới cùng hành củ nướng và chút muối trong 20 phút.",
        "Vớt ra ngâm nước đá lạnh cho thịt trắng giòn, sau đó thái lát mỏng bản to.",
        "Rau sống rửa sạch, ngâm nước muối loãng, vớt ra vẩy ráo nước.",
        "Pha mắm nêm với dứa băm nhuyễn, tỏi ớt băm, đường, chanh cho vừa vị chua ngọt cay mặn.",
        "Trải bánh tráng, xếp rau sống, bún, lát thịt ba chỉ cuộn tròn chấm mắm nêm đậm đà."
      ],
      "en": [
        "Boil pork belly with charred shallot and salt for 20 minutes until just cooked.",
        "Ice bath the pork to preserve juiciness, then slice thinly.",
        "Wash and dry assorted fresh herbs, lettuce, and cucumber strips.",
        "Mix fermented anchovy sauce (mắm nêm) with minced pineapple, garlic, chili, lime, and sugar.",
        "Wrap herbs, vermicelli, and pork slices in rice paper and dip in sauce."
      ]
    }
  },
  {
    "id": "vn-thit-kho-cui-dua",
    "title": {
      "vi": "Thịt Ba Chỉ Kho Cùi Dừa Béo Ngậy",
      "en": "Braised Pork Belly with Fresh Coconut Meat"
    },
    "image": "/dishes/vn-thit-kho-cui-dua.jpg",
    "category": {
      "vi": "Món Mặn",
      "en": "Savory Dish"
    },
    "mealType": [
      "lunch",
      "dinner"
    ],
    "region": "south",
    "diningType": [
      "home_cook"
    ],
    "isPopular": true,
    "popularityScore": 92,
    "dietaryTags": {
      "vi": [
        "Cơm nhà",
        "Đậm đà",
        "Hao cơm"
      ],
      "en": [
        "Home Cook",
        "Rich Flavor"
      ]
    },
    "time": "40m",
    "servings": 4,
    "calories": 380,
    "protein": 20,
    "fat": 31,
    "carbs": 7,
    "servingSize": {
      "vi": "1 đĩa (~220g)",
      "en": "1 plate (~220g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia",
      "en": "National Institute of Nutrition"
    },
    "recipeSource": {
      "vi": "Món Ngon Nam Bộ",
      "en": "Southern Vietnamese Cuisine"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Thịt ba chỉ heo",
          "en": "Pork belly"
        },
        "amount": "500g"
      },
      {
        "name": {
          "vi": "Cùi dừa bánh tẻ thái con chì",
          "en": "Coconut meat strips"
        },
        "amount": "150g"
      },
      {
        "name": {
          "vi": "Nước hàng tạo màu",
          "en": "Caramel coloring sauce"
        },
        "amount": "2 thìa canh"
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
          "vi": "Nước dừa tươi",
          "en": "Fresh coconut water"
        },
        "amount": "150ml"
      },
      {
        "name": {
          "vi": "Hành tím, tỏi, ớt",
          "en": "Shallots, garlic, chili"
        },
        "amount": "Vừa đủ"
      }
    ],
    "instructions": {
      "vi": [
        "Thịt ba chỉ rửa sạch, thái miếng vuông vừa ăn. Cùi dừa cạo sạch vỏ nâu, thái lát dày cỡ ngón tay.",
        "Ướp thịt với nước mắm, hành tím băm, tiêu xay trong 15 phút.",
        "Phi thơm tỏi hành, cho thịt vào xào săn rồi cho cùi dừa và nước hàng vào đảo cùng.",
        "Đổ nước dừa tươi vào ngập xâm xấp mặt thịt, đun sôi rồi hạ nhỏ lửa kho liu riu.",
        "Kho khoảng 25-30 phút đến khi nước thịt cạn sệt, sánh bóng vàng cánh gián là hoàn thành."
      ],
      "en": [
        "Cut pork into bite-sized cubes. Peel brown skin off coconut meat and slice into thick strips.",
        "Marinate pork with fish sauce, shallots, and pepper for 15 minutes.",
        "Sear pork in aromatics until browned, then add coconut strips and caramel sauce.",
        "Pour in fresh coconut water, bring to a boil, then reduce heat to low.",
        "Simmer for 25-30 minutes until sauce reduces to a glossy golden-brown glaze."
      ]
    }
  },
  {
    "id": "vn-thit-kho-cu-cai",
    "title": {
      "vi": "Thịt Heo Kho Củ Cải Trắng Ngọt Đậm Đà",
      "en": "Braised Pork with White Daikon Radish"
    },
    "image": "/dishes/vn-thit-kho-cu-cai.jpg",
    "category": {
      "vi": "Món Mặn",
      "en": "Savory Dish"
    },
    "mealType": [
      "lunch",
      "dinner"
    ],
    "region": "national",
    "diningType": [
      "home_cook"
    ],
    "isPopular": true,
    "popularityScore": 89,
    "dietaryTags": {
      "vi": [
        "Cơm nhà",
        "Dân dã",
        "Đậm đà"
      ],
      "en": [
        "Home Cook",
        "Classic"
      ]
    },
    "time": "35m",
    "servings": 4,
    "calories": 275,
    "protein": 21,
    "fat": 19,
    "carbs": 6,
    "servingSize": {
      "vi": "1 đĩa (~220g)",
      "en": "1 plate (~220g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia",
      "en": "National Institute of Nutrition"
    },
    "recipeSource": {
      "vi": "Bếp Cơm Mẹ Nấu",
      "en": "Mom's Vietnamese Kitchen"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Thịt nạc vai hoặc ba chỉ",
          "en": "Pork shoulder or belly"
        },
        "amount": "400g"
      },
      {
        "name": {
          "vi": "Củ cải trắng",
          "en": "White daikon radish"
        },
        "amount": "2 củ (~300g)"
      },
      {
        "name": {
          "vi": "Nước màu đường",
          "en": "Caramel sauce"
        },
        "amount": "1.5 thìa canh"
      },
      {
        "name": {
          "vi": "Nước mắm ngon, hạt tiêu, hành hoa",
          "en": "Fish sauce, black pepper, scallions"
        },
        "amount": "Vừa đủ"
      }
    ],
    "instructions": {
      "vi": [
        "Thịt heo thái con chì, củ cải gọt vỏ cắt khúc vuông dày.",
        "Xào thịt săn với hành tím, nêm nước mắm và nước màu đường đảo đều.",
        "Thêm nước sôi xâm xấp mặt thịt, kho nhỏ lửa 15 phút.",
        "Cho củ cải vào kho cùng thêm 15 phút đến khi củ cải mềm trong, ngấm trọn vị ngọt mặn.",
        "Rắc hành lá và tiêu xay lên trên, dùng nóng với cơm trắng."
      ],
      "en": [
        "Cut pork into cubes; peel daikon and cut into thick chunks.",
        "Sear pork with shallots, season with fish sauce and caramel sauce.",
        "Add hot water barely covering meat, simmer on low for 15 mins.",
        "Add daikon and simmer another 15 mins until tender and translucent.",
        "Garnish with scallions and black pepper, serve with warm rice."
      ]
    }
  },
  {
    "id": "vn-cha-la-lot",
    "title": {
      "vi": "Chả Lá Lốt Thịt Băm Rán Thơm Lừng",
      "en": "Pan-fried Minced Pork in Wild Betel Leaves"
    },
    "image": "/dishes/vn-cha-la-lot.jpg",
    "category": {
      "vi": "Món Mặn",
      "en": "Savory Dish"
    },
    "mealType": [
      "lunch",
      "dinner"
    ],
    "region": "north",
    "diningType": [
      "home_cook"
    ],
    "isPopular": true,
    "popularityScore": 96,
    "dietaryTags": {
      "vi": [
        "Cơm nhà",
        "Truyền thống",
        "Thơm nức"
      ],
      "en": [
        "Home Cook",
        "Aromatic"
      ]
    },
    "time": "30m",
    "servings": 4,
    "calories": 310,
    "protein": 22,
    "fat": 23,
    "carbs": 4,
    "servingSize": {
      "vi": "8-10 cuốn (~220g)",
      "en": "8-10 rolls (~220g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia",
      "en": "National Institute of Nutrition"
    },
    "recipeSource": {
      "vi": "Ẩm thực Hà Nội Cổ Truyền",
      "en": "Hanoi Heritage Cooking"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Thịt heo nạc vai xay",
          "en": "Minced pork shoulder"
        },
        "amount": "400g"
      },
      {
        "name": {
          "vi": "Lá lốt bánh tẻ tươi",
          "en": "Fresh piper lolot leaves"
        },
        "amount": "30 lá"
      },
      {
        "name": {
          "vi": "Mộc nhĩ ngâm nở băm vụn",
          "en": "Minced wood ear mushroom"
        },
        "amount": "1 tai"
      },
      {
        "name": {
          "vi": "Hành tím, hạt tiêu, nước mắm",
          "en": "Shallots, pepper, fish sauce"
        },
        "amount": "Vừa đủ"
      },
      {
        "name": {
          "vi": "Dầu ăn rán chả",
          "en": "Cooking oil"
        },
        "amount": "3 thìa canh"
      }
    ],
    "instructions": {
      "vi": [
        "Lá lốt rửa sạch để ráo. Lấy 3-4 lá nhỏ băm vụn trộn vào thịt.",
        "Trộn đều thịt xay, lá lốt băm, mộc nhĩ, hành tím băm, tiêu và nước mắm.",
        "Đặt lá lốt úp mặt xanh đậm xuống, cho nhân vào giữa cuộn chặt tay.",
        "Rán chả trên chảo dầu nóng vừa khoảng 8-10 phút cho chín đều hai mặt và dậy mùi thơm nức.",
        "Bày chả ra đĩa, thưởng thức cùng cơm nóng hoặc bún chấm mắm tỏi ớt."
      ],
      "en": [
        "Wash and dry lolot leaves. Finely mince a few leaves to add to meat filling.",
        "Mix minced pork with minced lolot, wood ear, shallots, pepper, and fish sauce.",
        "Place leaf shiny side down, add filling and roll tightly.",
        "Pan-fry in medium-hot oil for 8-10 minutes until aromatic and browned.",
        "Serve hot with steamed rice or fresh rice vermicelli."
      ]
    }
  },
  {
    "id": "vn-cha-xuong-song",
    "title": {
      "vi": "Chả Thịt Băm Cuốn Lá Xương Sông",
      "en": "Pork Rolls Wrapped in Clausena Leaves"
    },
    "image": "/dishes/vn-cha-xuong-song.jpg",
    "category": {
      "vi": "Món Mặn",
      "en": "Savory Dish"
    },
    "mealType": [
      "lunch",
      "dinner"
    ],
    "region": "north",
    "diningType": [
      "home_cook"
    ],
    "isPopular": false,
    "popularityScore": 84,
    "dietaryTags": {
      "vi": [
        "Cơm nhà",
        "Dân dã",
        "Thảo mộc"
      ],
      "en": [
        "Home Cook",
        "Herbal Flavor"
      ]
    },
    "time": "30m",
    "servings": 4,
    "calories": 295,
    "protein": 21,
    "fat": 22,
    "carbs": 3,
    "servingSize": {
      "vi": "1 đĩa (~220g)",
      "en": "1 plate (~220g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia",
      "en": "National Institute of Nutrition"
    },
    "recipeSource": {
      "vi": "Bếp Bắc Truyền Thống",
      "en": "Northern Kitchen"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Thịt heo nạc vai xay có mỡ",
          "en": "Minced pork"
        },
        "amount": "400g"
      },
      {
        "name": {
          "vi": "Lá xương sông bánh tẻ",
          "en": "Clausena indica leaves"
        },
        "amount": "25 lá"
      },
      {
        "name": {
          "vi": "Hành hoa thái nhỏ",
          "en": "Scallions"
        },
        "amount": "2 nhánh"
      },
      {
        "name": {
          "vi": "Gia vị mắm tiêu hạt nêm",
          "en": "Seasoning"
        },
        "amount": "Vừa đủ"
      }
    ],
    "instructions": {
      "vi": [
        "Lá xương sông rửa sạch, chần sơ nước sôi 10 giây cho mềm dai dễ cuộn.",
        "Trộn thịt với hành hoa, tiêu đen, nước mắm vừa miệng.",
        "Đặt thịt vào cuộn chặt trong lá xương sông.",
        "Rán vàng đều trên lửa nhỏ vừa cho lá tiết ra tinh dầu thơm nồng đặc trưng.",
        "Ăn nóng chấm tương ớt hoặc nước mắm chanh tỏi."
      ],
      "en": [
        "Blanch clausena leaves in boiling water for 10s to soften.",
        "Season minced pork with scallions, black pepper, and fish sauce.",
        "Roll filling tightly inside leaves.",
        "Pan-fry until fragrant and golden.",
        "Serve hot with dipping sauce."
      ]
    }
  },
  {
    "id": "vn-thit-heo-xao-sa-ot",
    "title": {
      "vi": "Thịt Heo Xào Sả Ớt Giòn Cay Đưa Cơm",
      "en": "Stir-fried Pork with Lemongrass and Chili"
    },
    "image": "/dishes/vn-thit-heo-xao-sa-ot.jpg",
    "category": {
      "vi": "Món Mặn",
      "en": "Savory Dish"
    },
    "mealType": [
      "lunch",
      "dinner"
    ],
    "region": "national",
    "diningType": [
      "home_cook"
    ],
    "isPopular": true,
    "popularityScore": 90,
    "dietaryTags": {
      "vi": [
        "Cơm nhà",
        "Cay ấm",
        "Nhanh gọn"
      ],
      "en": [
        "Home Cook",
        "Spicy",
        "Quick"
      ]
    },
    "time": "20m",
    "servings": 4,
    "calories": 290,
    "protein": 24,
    "fat": 20,
    "carbs": 5,
    "servingSize": {
      "vi": "1 đĩa (~200g)",
      "en": "1 plate (~200g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia",
      "en": "National Institute of Nutrition"
    },
    "recipeSource": {
      "vi": "Món Ngon Mỗi Ngày",
      "en": "Daily Delicious VN"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Thịt nạc dăm heo thái mỏng",
          "en": "Sliced pork shoulder"
        },
        "amount": "400g"
      },
      {
        "name": {
          "vi": "Sả băm nhuyễn",
          "en": "Minced lemongrass"
        },
        "amount": "3 củ"
      },
      {
        "name": {
          "vi": "Ớt hiểm băm",
          "en": "Minced hot chili"
        },
        "amount": "2 quả"
      },
      {
        "name": {
          "vi": "Tỏi, hành tím băm",
          "en": "Garlic & shallots"
        },
        "amount": "1 thìa canh"
      },
      {
        "name": {
          "vi": "Dầu hào, nước mắm, tiêu",
          "en": "Oyster sauce, fish sauce"
        },
        "amount": "Vừa đủ"
      }
    ],
    "instructions": {
      "vi": [
        "Thịt ướp hạt nêm, tiêu, dầu hào 10 phút.",
        "Phi thơm tỏi, hành tím và sả ớt trong chảo dầu nóng.",
        "Trút thịt vào xào nhanh tay trên lửa lớn cho thịt chín săn mềm.",
        "Nêm nước mắm và chút xíu đường tạo vị đậm đà hài hòa.",
        "Đảo đều đến khi dậy mùi thơm nức thì trút ra đĩa dùng ngay."
      ],
      "en": [
        "Marinate sliced pork with seasoning and oyster sauce.",
        "Sauté garlic, shallots, lemongrass, and chili until fragrant.",
        "Add pork and stir-fry briskly over high heat until browned and tender.",
        "Season with fish sauce and a hint of sugar.",
        "Toss well and serve immediately with hot rice."
      ]
    }
  },
  {
    "id": "vn-thit-vien-sot-ca-chua",
    "title": {
      "vi": "Thịt Băm Viên Sốt Cà Chua Mềm Mọng",
      "en": "Pork Meatballs in Fresh Tomato Sauce"
    },
    "image": "/dishes/vn-thit-vien-sot-ca-chua.jpg",
    "category": {
      "vi": "Món Mặn",
      "en": "Savory Dish"
    },
    "mealType": [
      "lunch",
      "dinner"
    ],
    "region": "national",
    "diningType": [
      "home_cook"
    ],
    "isPopular": true,
    "popularityScore": 93,
    "dietaryTags": {
      "vi": [
        "Cơm nhà",
        "Dễ ăn",
        "Trẻ em thích"
      ],
      "en": [
        "Home Cook",
        "Kid Friendly"
      ]
    },
    "time": "25m",
    "servings": 4,
    "calories": 270,
    "protein": 20,
    "fat": 18,
    "carbs": 7,
    "servingSize": {
      "vi": "1 đĩa (~250g)",
      "en": "1 plate (~250g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia",
      "en": "National Institute of Nutrition"
    },
    "recipeSource": {
      "vi": "Bếp Gia Đình Việt",
      "en": "Vietnamese Family Kitchen"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Thịt heo xay nạc mỡ",
          "en": "Minced pork"
        },
        "amount": "350g"
      },
      {
        "name": {
          "vi": "Mộc nhĩ ngâm nở băm vụn",
          "en": "Wood ear mushroom"
        },
        "amount": "1 tai"
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
          "vi": "Hành khô, hành hoa thái nhỏ",
          "en": "Shallots & scallions"
        },
        "amount": "Vừa đủ"
      },
      {
        "name": {
          "vi": "Gia vị mắm, muối, tiêu",
          "en": "Seasonings"
        },
        "amount": "Vừa đủ"
      }
    ],
    "instructions": {
      "vi": [
        "Trộn thịt xay với mộc nhĩ băm, hành khô băm, hạt nêm, tiêu rồi vo tròn thành các viên nhỏ.",
        "Hấp sơ hoặc chiên sơ các viên thịt cho định hình săn chắc.",
        "Phi thơm hành, xào cà chua bổ múi cau nhuyễn với chút nước thành sốt sánh đỏ.",
        "Thả thịt viên vào đun liu riu trong sốt cà 10 phút cho ngấm đẫm vị chua ngọt.",
        "Rắc hành hoa thái nhỏ, múc ra đĩa ăn cùng cơm trắng."
      ],
      "en": [
        "Mix minced pork with wood ear, shallots, and seasoning; roll into meatballs.",
        "Lightly pan-fry or steam meatballs to hold shape.",
        "Sauté chopped tomatoes with a splash of water into a rich red gravy.",
        "Add meatballs and simmer in sauce for 10 minutes until juicy and well-coated.",
        "Garnish with chopped scallions and serve hot with rice."
      ]
    }
  },
  {
    "id": "vn-thit-bam-xao-ngo-ngot",
    "title": {
      "vi": "Thịt Băm Xào Bắp Ngọt Giòn Ngon",
      "en": "Stir-fried Sweet Corn with Minced Pork"
    },
    "image": "/dishes/vn-thit-bam-xao-ngo-ngot.jpg",
    "category": {
      "vi": "Món Xào",
      "en": "Stir-fry"
    },
    "mealType": [
      "lunch",
      "dinner"
    ],
    "region": "national",
    "diningType": [
      "home_cook"
    ],
    "isPopular": true,
    "popularityScore": 88,
    "dietaryTags": {
      "vi": [
        "Cơm nhà",
        "Nhanh gọn",
        "Trẻ em thích"
      ],
      "en": [
        "Quick",
        "Kid Friendly"
      ]
    },
    "time": "15m",
    "servings": 4,
    "calories": 220,
    "protein": 16,
    "fat": 12,
    "carbs": 14,
    "servingSize": {
      "vi": "1 đĩa (~200g)",
      "en": "1 plate (~200g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia",
      "en": "National Institute of Nutrition"
    },
    "recipeSource": {
      "vi": "Món Ngon Mỗi Ngày",
      "en": "Daily Delicious VN"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Ngô ngọt tách hạt",
          "en": "Sweet corn kernels"
        },
        "amount": "250g"
      },
      {
        "name": {
          "vi": "Thịt heo nạc xay",
          "en": "Minced pork"
        },
        "amount": "200g"
      },
      {
        "name": {
          "vi": "Hành tím băm, hành hoa",
          "en": "Shallots & scallions"
        },
        "amount": "Vừa đủ"
      },
      {
        "name": {
          "vi": "Bơ thực vật hoặc dầu ăn",
          "en": "Butter or cooking oil"
        },
        "amount": "1 thìa canh"
      },
      {
        "name": {
          "vi": "Hạt nêm, tiêu xay",
          "en": "Seasonings"
        },
        "amount": "Vừa đủ"
      }
    ],
    "instructions": {
      "vi": [
        "Ngô ngọt rửa sạch để ráo nước. Thịt xay ướp chút hạt nêm tiêu.",
        "Phi thơm hành tím trong chảo với dầu ăn, trút thịt xay vào xào tơi chín tới.",
        "Cho ngô ngọt vào đảo đều trên lửa vừa khoảng 3-4 phút đến khi hạt ngô căng mọng bóng bẩy.",
        "Thêm chút bơ và hành hoa đảo nhanh tay cho thơm nức mũi.",
        "Múc ra đĩa, ăn nóng cùng cơm trắng hoặc làm món xào nhẹ."
      ],
      "en": [
        "Rinse sweet corn kernels. Season minced pork with salt and pepper.",
        "Sauté shallots in oil, add minced pork and cook until crumbly.",
        "Add sweet corn and stir-fry over medium heat for 3-4 minutes until tender-crisp.",
        "Stir in a touch of butter and scallions for extra aroma.",
        "Serve hot with steamed rice."
      ]
    }
  },
  {
    "id": "vn-suon-non-sot-me",
    "title": {
      "vi": "Sườn Non Sốt Me Chua Cay Mặn Ngọt",
      "en": "Tamarind Glazed Baby Pork Ribs"
    },
    "image": "/dishes/vn-suon-non-sot-me.jpg",
    "category": {
      "vi": "Món Mặn",
      "en": "Savory Dish"
    },
    "mealType": [
      "lunch",
      "dinner"
    ],
    "region": "national",
    "diningType": [
      "home_cook"
    ],
    "isPopular": true,
    "popularityScore": 91,
    "dietaryTags": {
      "vi": [
        "Cơm nhà",
        "Chua ngọt",
        "Đậm đà"
      ],
      "en": [
        "Savory Sweet",
        "Home Cook"
      ]
    },
    "time": "35m",
    "servings": 4,
    "calories": 360,
    "protein": 24,
    "fat": 25,
    "carbs": 11,
    "servingSize": {
      "vi": "1 đĩa sườn (~250g)",
      "en": "1 plate ribs (~250g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia",
      "en": "National Institute of Nutrition"
    },
    "recipeSource": {
      "vi": "Bếp Gia Đình",
      "en": "Family Kitchen"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Sườn non heo chặt khúc",
          "en": "Pork baby ribs"
        },
        "amount": "500g"
      },
      {
        "name": {
          "vi": "Cốt me vắt lấy nước chua",
          "en": "Tamarind pulp juice"
        },
        "amount": "3 thìa canh"
      },
      {
        "name": {
          "vi": "Nước mắm, đường, tỏi băm, ớt băm",
          "en": "Fish sauce, sugar, garlic, chili"
        },
        "amount": "Vừa đủ"
      },
      {
        "name": {
          "vi": "Dầu ăn chiên sườn",
          "en": "Cooking oil"
        },
        "amount": "3 thìa canh"
      }
    ],
    "instructions": {
      "vi": [
        "Sườn non chần nước sôi khử mùi, ướp chút muối tiêu rồi chiên vàng giòn hai mặt.",
        "Pha sốt me: nước cốt me, đường, nước mắm, tương ớt khuấy tan vị chua ngọt đậm đà.",
        "Phi thơm tỏi ớt băm trong chảo, đổ bát sốt me vào đun sôi sủi bọt.",
        "Trút sườn đã chiên vào đảo đều trên lửa nhỏ cho sốt keo lại bám đều quanh từng dẻ sườn.",
        "Bày ra đĩa, rắc vừng rang hoặc hành hoa thưởng thức nóng hổi."
      ],
      "en": [
        "Blanch ribs in boiling water, season, and pan-fry until golden brown.",
        "Mix tamarind juice with sugar, fish sauce, and chili sauce.",
        "Sauté minced garlic and chili, pour in tamarind sauce until bubbling.",
        "Add ribs and toss over low heat until the sauce forms a thick sticky glaze.",
        "Serve hot garnished with toasted sesame or scallions."
      ]
    }
  },
  {
    "id": "vn-suon-heo-hap-tau-xi",
    "title": {
      "vi": "Sườn Heo Hấp Tàu Xì Tỏi Đen Kiểu Hoa",
      "en": "Steamed Pork Ribs with Fermented Black Beans"
    },
    "image": "/dishes/vn-suon-heo-hap-tau-xi.jpg",
    "category": {
      "vi": "Món Mặn",
      "en": "Savory Dish"
    },
    "mealType": [
      "lunch",
      "dinner"
    ],
    "region": "south",
    "diningType": [
      "home_cook",
      "eat_out"
    ],
    "isPopular": false,
    "popularityScore": 86,
    "dietaryTags": {
      "vi": [
        "Dimsum",
        "Mềm tan",
        "Đậm vị"
      ],
      "en": [
        "Steamed",
        "Tender",
        "Dim Sum"
      ]
    },
    "time": "35m",
    "servings": 4,
    "calories": 320,
    "protein": 23,
    "fat": 22,
    "carbs": 5,
    "servingSize": {
      "vi": "1 dĩa hấp (~250g)",
      "en": "1 plate (~250g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia",
      "en": "National Institute of Nutrition"
    },
    "recipeSource": {
      "vi": "Ẩm thực Chợ Lớn Sài Gòn",
      "en": "Cholon Cantonese Kitchen"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Sườn non chặt nhỏ",
          "en": "Baby ribs chopped small"
        },
        "amount": "500g"
      },
      {
        "name": {
          "vi": "Hạt tàu xì (đậu đen lên men) rửa sạch băm nhỏ",
          "en": "Fermented black beans"
        },
        "amount": "1.5 thìa canh"
      },
      {
        "name": {
          "vi": "Tỏi băm, ớt sừng cắt khoanh",
          "en": "Garlic, red chili"
        },
        "amount": "Vừa đủ"
      },
      {
        "name": {
          "vi": "Dầu hào, xì dầu, bột bắp, dầu mè",
          "en": "Oyster sauce, soy sauce, cornstarch"
        },
        "amount": "Vừa đủ"
      }
    ],
    "instructions": {
      "vi": [
        "Sườn non rửa sạch thấm khô, ướp với tàu xì băm, tỏi băm, dầu hào, xì dầu, bột bắp và dầu mè trong 20 phút.",
        "Xếp sườn dàn đều ra đĩa sâu lòng chịu nhiệt, rắc ớt sừng lên trên.",
        "Đặt đĩa sườn vào xửng hấp cách thủy trên lửa lớn trong 20-25 phút.",
        "Khi sườn chín mềm mọng nước, thơm lừng vị tàu xì đặc trưng thì lấy ra dùng nóng."
      ],
      "en": [
        "Wash and dry ribs. Marinate with black beans, garlic, oyster sauce, soy sauce, and cornstarch for 20 mins.",
        "Spread ribs evenly on a heatproof deep plate and top with sliced chili.",
        "Steam over high heat in a steamer for 20-25 minutes.",
        "Serve piping hot while tender and aromatic."
      ]
    }
  },
  {
    "id": "vn-gio-thu-xao",
    "title": {
      "vi": "Giò Thủ Xào Mộc Nhĩ Tiêu Hạt Giòn Sần Sật",
      "en": "Northern Vietnamese Brawn (Head Cheese)"
    },
    "image": "/dishes/vn-gio-thu-xao.jpg",
    "category": {
      "vi": "Món Mặn",
      "en": "Savory Dish"
    },
    "mealType": [
      "lunch",
      "dinner"
    ],
    "region": "north",
    "diningType": [
      "home_cook"
    ],
    "isPopular": true,
    "popularityScore": 91,
    "dietaryTags": {
      "vi": [
        "Truyền thống",
        "Mâm cỗ Tết",
        "Giòn sần sật"
      ],
      "en": [
        "Traditional",
        "Festive",
        "Crunchy"
      ]
    },
    "time": "50m",
    "servings": 6,
    "calories": 340,
    "protein": 25,
    "fat": 26,
    "carbs": 3,
    "servingSize": {
      "vi": "1 đĩa thái lát (~200g)",
      "en": "1 plate (~200g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia",
      "en": "National Institute of Nutrition"
    },
    "recipeSource": {
      "vi": "Ẩm thực Tết Cổ Truyền",
      "en": "Traditional Lunar New Year Food"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Tai heo, mũi heo, thịt chân giò",
          "en": "Pork ears, snout, shank"
        },
        "amount": "600g"
      },
      {
        "name": {
          "vi": "Mộc nhĩ, nấm hương ngâm nở thái sợi",
          "en": "Wood ear & shiitake strips"
        },
        "amount": "100g"
      },
      {
        "name": {
          "vi": "Tiêu sọ đập dập thơm cay",
          "en": "Crushed white peppercorns"
        },
        "amount": "1 thìa canh"
      },
      {
        "name": {
          "vi": "Nước mắm cốt nguyên chất",
          "en": "Pure fish sauce"
        },
        "amount": "2 thìa canh"
      },
      {
        "name": {
          "vi": "Khuôn ép giò inox",
          "en": "Stainless steel press mold"
        },
        "amount": "1 chiếc"
      }
    ],
    "instructions": {
      "vi": [
        "Tai, mũi và thịt heo làm sạch, luộc sơ rồi thái lát mỏng dài đều tay.",
        "Phi thơm hành tím, cho thịt vào xào săn trên lửa vừa, nêm nước mắm ngon và tiêu hạt đập dập.",
        "Cho mộc nhĩ, nấm hương vào xào cùng đến khi thịt tiết mỡ trong, keo lại dính đũa.",
        "Múc thịt còn nóng hổi vào khuôn ép giò, vặn chặt ốc nén để ép hết mỡ thừa ra ngoài.",
        "Để nguội hẳn rồi cho vào ngăn mát tủ lạnh 4-6 tiếng cho giò đông kết chắc nịch.",
        "Tháo khuôn, cắt khoanh tròn rồi chia miếng vừa ăn, chấm mắm ớt cà pháo chua giòn."
      ],
      "en": [
        "Clean pork ears, snout, and shank; blanch and thinly slice into strips.",
        "Sauté with fish sauce and crushed peppercorns until translucent.",
        "Add sliced mushrooms and stir-fry until gelatinous and sticky.",
        "Pack while hot into a press mold and tighten to squeeze out excess oil.",
        "Chill in refrigerator for 4-6 hours until set firm.",
        "Unmold, slice into wedges, and serve cold with pickled garlic or shallots."
      ]
    }
  },
  {
    "id": "vn-tai-heo-ngam-chua-ngot",
    "title": {
      "vi": "Tai Heo Ngâm Giấm Chua Ngọt Giòn Sần Sật",
      "en": "Pickled Crunchy Pork Ears in Sweet Vinegar"
    },
    "image": "/dishes/vn-tai-heo-ngam-chua-ngot.jpg",
    "category": {
      "vi": "Món Mặn",
      "en": "Savory Dish"
    },
    "mealType": [
      "lunch",
      "dinner",
      "snack"
    ],
    "region": "national",
    "diningType": [
      "home_cook"
    ],
    "isPopular": true,
    "popularityScore": 87,
    "dietaryTags": {
      "vi": [
        "Món nhắm",
        "Chua ngọt",
        "Giòn sần sật"
      ],
      "en": [
        "Appetizer",
        "Crunchy",
        "Pickled"
      ]
    },
    "time": "40m",
    "servings": 6,
    "calories": 190,
    "protein": 18,
    "fat": 12,
    "carbs": 4,
    "servingSize": {
      "vi": "1 đĩa (~180g)",
      "en": "1 plate (~180g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia",
      "en": "National Institute of Nutrition"
    },
    "recipeSource": {
      "vi": "Cẩm nang Món Nhậu Việt",
      "en": "Vietnamese Bar & Home Bites"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Tai heo tươi làm sạch",
          "en": "Cleaned fresh pork ears"
        },
        "amount": "2 cái (~500g)"
      },
      {
        "name": {
          "vi": "Giấm gạo ngon",
          "en": "Rice vinegar"
        },
        "amount": "300ml"
      },
      {
        "name": {
          "vi": "Đường cát trắng",
          "en": "Sugar"
        },
        "amount": "200g"
      },
      {
        "name": {
          "vi": "Tỏi tép thái lát, ớt sừng, tiêu hạt",
          "en": "Sliced garlic, chili, whole pepper"
        },
        "amount": "Vừa đủ"
      }
    ],
    "instructions": {
      "vi": [
        "Tai heo xát muối chanh cạo sạch chất bẩn, luộc chín tới khoảng 15-20 phút.",
        "Vớt ngay ra âu nước đá lạnh ngâm 15 phút cho tai thật giòn và trắng tinh.",
        "Thái tai heo thành từng sợi mỏng dài vừa ăn.",
        "Nấu nước ngâm: giấm gạo, đường, chút muối đun sôi để nguội hoàn toàn.",
        "Xếp tai heo vào hũ thủy tinh cùng tỏi thái lát, ớt đỏ và hạt tiêu.",
        "Đổ nước giấm ngập tai heo, đậy nắp cất tủ lạnh sau 1-2 ngày là giòn ngon đậm vị."
      ],
      "en": [
        "Scrub pork ears with salt and lime, boil for 15-20 minutes until cooked through.",
        "Immediately submerge into ice water for 15 minutes for maximum crunch and white color.",
        "Thinly slice into strips.",
        "Boil rice vinegar, sugar, and salt together, then let cool completely.",
        "Pack sliced ears into glass jars layered with sliced garlic, chili, and peppercorns.",
        "Pour vinegar syrup over, seal, and refrigerate for 1-2 days before enjoying."
      ]
    }
  },
  {
    "id": "vn-mong-gio-ham-hat-sen",
    "title": {
      "vi": "Móng Giò Hầm Hạt Sen Nấm Hương Bổ Dưỡng",
      "en": "Stewed Pork Trotter with Lotus Seeds & Shiitake"
    },
    "image": "/dishes/vn-mong-gio-ham-hat-sen.jpg",
    "category": {
      "vi": "Món Canh",
      "en": "Soup"
    },
    "mealType": [
      "lunch",
      "dinner"
    ],
    "region": "national",
    "diningType": [
      "home_cook"
    ],
    "isPopular": true,
    "popularityScore": 92,
    "dietaryTags": {
      "vi": [
        "Bổ dưỡng",
        "Phục hồi sức khỏe",
        "Mềm nhừ"
      ],
      "en": [
        "Nourishing",
        "Comfort Food"
      ]
    },
    "time": "60m",
    "servings": 4,
    "calories": 390,
    "protein": 28,
    "fat": 27,
    "carbs": 11,
    "servingSize": {
      "vi": "1 tô hầm (~350g)",
      "en": "1 bowl (~350g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia",
      "en": "National Institute of Nutrition"
    },
    "recipeSource": {
      "vi": "Món Canh Bổ Dưỡng Việt",
      "en": "Vietnamese Herbal Soups"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Móng giò heo chặt khoanh vừa ăn",
          "en": "Pork trotters cut in rounds"
        },
        "amount": "600g"
      },
      {
        "name": {
          "vi": "Hạt sen tươi hoặc khô ngâm mềm",
          "en": "Lotus seeds"
        },
        "amount": "100g"
      },
      {
        "name": {
          "vi": "Nấm hương khô ngâm nở",
          "en": "Dried shiitake mushrooms"
        },
        "amount": "10 tai"
      },
      {
        "name": {
          "vi": "Cà rốt tỉa hoa",
          "en": "Carrot"
        },
        "amount": "1 củ"
      },
      {
        "name": {
          "vi": "Hành tím, gừng lát, mùi tàu, hành hoa",
          "en": "Aromatics & herbs"
        },
        "amount": "Vừa đủ"
      }
    ],
    "instructions": {
      "vi": [
        "Móng giò cạo sạch lông, chần nước sôi khử bọt rồi rửa sạch.",
        "Cho móng giò vào nồi hầm với 1.2 lít nước, thêm gừng lát và hành tím nướng nhỏ lửa.",
        "Khi móng giò bắt đầu mềm (khoảng 35 phút), cho hạt sen và nấm hương vào nấu cùng.",
        "Thêm cà rốt vào hầm thêm 10 phút, nêm nước mắm và hạt nêm vừa vị thanh ngọt.",
        "Múc ra bát lớn, rắc tiêu đen, hành hoa và mùi tàu thái nhỏ lên trên."
      ],
      "en": [
        "Clean trotters thoroughly and blanch in boiling water.",
        "Simmer trotters in 1.2L water with ginger and shallots for 35 mins.",
        "Add lotus seeds and shiitake mushrooms, cook until tender.",
        "Add carrots and simmer another 10 mins; season with fish sauce and broth powder.",
        "Garnish with black pepper, scallions, and culantro before serving."
      ]
    }
  },
  {
    "id": "vn-trung-chien-ngai-cuu",
    "title": {
      "vi": "Trứng Gà Rán Ngải Cứu Thơm Bùi Trị Đau Đầu",
      "en": "Fried Eggs with Mugwort Leaves"
    },
    "image": "/dishes/vn-trung-chien-ngai-cuu.jpg",
    "category": {
      "vi": "Món Mặn",
      "en": "Savory Dish"
    },
    "mealType": [
      "breakfast",
      "lunch",
      "dinner"
    ],
    "region": "north",
    "diningType": [
      "home_cook"
    ],
    "isPopular": true,
    "popularityScore": 90,
    "dietaryTags": {
      "vi": [
        "Cơm nhà",
        "Bài thuốc dân gian",
        "Giàu dinh dưỡng"
      ],
      "en": [
        "Home Cook",
        "Herbal",
        "Healthy"
      ]
    },
    "time": "15m",
    "servings": 3,
    "calories": 220,
    "protein": 15,
    "fat": 17,
    "carbs": 3,
    "servingSize": {
      "vi": "1 đĩa trứng (~180g)",
      "en": "1 plate (~180g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia",
      "en": "National Institute of Nutrition"
    },
    "recipeSource": {
      "vi": "Món Ăn Bài Thuốc Dân Gian",
      "en": "Vietnamese Herbal Healing Dishes"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Trứng gà ta",
          "en": "Farm fresh eggs"
        },
        "amount": "4 quả"
      },
      {
        "name": {
          "vi": "Lá ngải cứu non thái nhỏ",
          "en": "Young mugwort leaves, finely chopped"
        },
        "amount": "1 nắm (~50g)"
      },
      {
        "name": {
          "vi": "Hành tím băm nhỏ",
          "en": "Minced shallot"
        },
        "amount": "1 củ"
      },
      {
        "name": {
          "vi": "Nước mắm, tiêu xay, dầu ăn",
          "en": "Fish sauce, black pepper, oil"
        },
        "amount": "Vừa đủ"
      }
    ],
    "instructions": {
      "vi": [
        "Ngải cứu nhặt lấy ngọn non, rửa sạch vẩy ráo nước rồi thái nhỏ.",
        "Đập trứng vào bát, thêm ngải cứu, hành tím, 1 thìa nước mắm và tiêu xay đánh đều.",
        "Làm nóng chảo với dầu ăn, đổ trứng ngải cứu vào rán nhỏ lửa.",
        "Rán vàng đều hai mặt cho thơm nức, ngải cứu chín mềm bùi bùi không bị đắng ngắt.",
        "Thưởng thức nóng cùng cơm trắng giúp lưu thông khí huyết, nhẹ nhõm đầu óc."
      ],
      "en": [
        "Pick young mugwort tips, wash, drain and finely chop.",
        "Beat eggs with mugwort, shallot, fish sauce, and black pepper.",
        "Heat oil in a skillet, pour in egg mixture and fry on low-medium heat.",
        "Flip gently to cook both sides until golden and aromatic.",
        "Serve hot with steamed rice."
      ]
    }
  },
  {
    "id": "vn-trung-hap-thit-van",
    "title": {
      "vi": "Trứng Hấp Thịt Vân Nấm Hương Cách Thủy",
      "en": "Steamed Marbled Egg Custard with Minced Pork"
    },
    "image": "/dishes/vn-trung-hap-thit-van.jpg",
    "category": {
      "vi": "Món Mặn",
      "en": "Savory Dish"
    },
    "mealType": [
      "lunch",
      "dinner"
    ],
    "region": "national",
    "diningType": [
      "home_cook"
    ],
    "isPopular": false,
    "popularityScore": 85,
    "dietaryTags": {
      "vi": [
        "Cơm nhà",
        "Thanh nhẹ",
        "Trẻ em người già thích"
      ],
      "en": [
        "Steamed",
        "Soft",
        "Comfort Food"
      ]
    },
    "time": "25m",
    "servings": 4,
    "calories": 230,
    "protein": 18,
    "fat": 16,
    "carbs": 4,
    "servingSize": {
      "vi": "1 tô hấp (~220g)",
      "en": "1 bowl (~220g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia",
      "en": "National Institute of Nutrition"
    },
    "recipeSource": {
      "vi": "Bếp Gia Đình",
      "en": "Family Kitchen"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Trứng gà",
          "en": "Eggs"
        },
        "amount": "4 quả"
      },
      {
        "name": {
          "vi": "Thịt heo nạc xay",
          "en": "Minced pork"
        },
        "amount": "150g"
      },
      {
        "name": {
          "vi": "Nấm hương băm nhỏ",
          "en": "Minced shiitake"
        },
        "amount": "4 tai"
      },
      {
        "name": {
          "vi": "Nước dùng gà hoặc nước ấm",
          "en": "Warm broth or water"
        },
        "amount": "100ml"
      },
      {
        "name": {
          "vi": "Hành hoa, tiêu, hạt nêm",
          "en": "Scallions, pepper, seasoning"
        },
        "amount": "Vừa đủ"
      }
    ],
    "instructions": {
      "vi": [
        "Ướp thịt xay với nấm hương, tiêu và chút hạt nêm, rải đều xuống đáy âu chịu nhiệt.",
        "Đánh tan trứng với nước ấm và hạt nêm, lọc qua rây cho mịn.",
        "Rót nhẹ nhàng trứng vào âu thịt, bọc màng bọc thực phẩm xăm lỗ nhỏ.",
        "Hấp cách thủy trên lửa nhỏ trong 18-20 phút đến khi trứng đông mịn như thạch.",
        "Rắc hành hoa và tiêu hạt lên trên, dùng nóng mềm mượt tan ngay trong miệng."
      ],
      "en": [
        "Season pork with shiitake and pepper, spread evenly at bottom of a steaming bowl.",
        "Whisk eggs with warm water and broth powder; strain for silkiness.",
        "Gently pour egg over meat layer, cover with vented wrap.",
        "Steam gently on low heat for 18-20 minutes until set like silk custard.",
        "Garnish with scallions and serve hot."
      ]
    }
  },
  {
    "id": "vn-trung-chung-ca-chua",
    "title": {
      "vi": "Trứng Chưng Cà Chua Mềm Thơm Đậm Đà",
      "en": "Stir-fried Scrambled Eggs with Tomatoes"
    },
    "image": "/dishes/vn-trung-chung-ca-chua.jpg",
    "category": {
      "vi": "Món Mặn",
      "en": "Savory Dish"
    },
    "mealType": [
      "breakfast",
      "lunch",
      "dinner"
    ],
    "region": "national",
    "diningType": [
      "home_cook"
    ],
    "isPopular": true,
    "popularityScore": 92,
    "dietaryTags": {
      "vi": [
        "Cơm nhà",
        "Nhanh gọn",
        "5 phút"
      ],
      "en": [
        "Quick",
        "5 Minutes",
        "Easy"
      ]
    },
    "time": "10m",
    "servings": 3,
    "calories": 180,
    "protein": 12,
    "fat": 13,
    "carbs": 5,
    "servingSize": {
      "vi": "1 đĩa (~180g)",
      "en": "1 plate (~180g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia",
      "en": "National Institute of Nutrition"
    },
    "recipeSource": {
      "vi": "Món Ngon Mỗi Ngày",
      "en": "Daily Delicious VN"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Trứng gà",
          "en": "Eggs"
        },
        "amount": "4 quả"
      },
      {
        "name": {
          "vi": "Cà chua chín đỏ thái nhỏ",
          "en": "Diced ripe tomatoes"
        },
        "amount": "2 quả"
      },
      {
        "name": {
          "vi": "Hành tím băm, hành hoa thái nhỏ",
          "en": "Shallots & scallions"
        },
        "amount": "Vừa đủ"
      },
      {
        "name": {
          "vi": "Nước mắm, dầu ăn, tiêu",
          "en": "Fish sauce, oil, pepper"
        },
        "amount": "Vừa đủ"
      }
    ],
    "instructions": {
      "vi": [
        "Trứng đập ra bát đánh tan với 1 thìa cà phê nước mắm.",
        "Phi thơm hành tím, cho cà chua vào xào mềm nhuyễn thành sốt đỏ mọng.",
        "Đổ trứng vào chảo sốt cà, dùng đũa khuấy nhẹ tay trên lửa nhỏ vừa cho trứng đông tơi xốp mềm mại.",
        "Rắc hành hoa và chút tiêu xay rồi tắt bếp ngay tránh để trứng bị khô xác.",
        "Dọn ra đĩa, ăn kèm cơm nóng hoặc bánh mì giòn tan."
      ],
      "en": [
        "Beat eggs with fish sauce.",
        "Sauté shallots and cook diced tomatoes until soft and saucy.",
        "Pour eggs into skillet and stir gently over low heat until fluffy and soft-scrambled.",
        "Top with green onions and cracked black pepper, remove from heat.",
        "Serve with warm rice or crusty bread."
      ]
    }
  },
  {
    "id": "vn-dau-phu-luot-van",
    "title": {
      "vi": "Đậu Phụ Lướt Ván Giòn Rụm Chấm Mắm Tôm",
      "en": "Crispy Flash-fried Soft Tofu with Shrimp Paste"
    },
    "image": "/dishes/vn-dau-phu-luot-van.jpg",
    "category": {
      "vi": "Món Mặn",
      "en": "Savory Dish"
    },
    "mealType": [
      "lunch",
      "dinner"
    ],
    "region": "north",
    "diningType": [
      "home_cook",
      "eat_out"
    ],
    "isPopular": true,
    "popularityScore": 95,
    "dietaryTags": {
      "vi": [
        "Cơm nhà",
        "Dân dã",
        "Giá rẻ"
      ],
      "en": [
        "Budget Friendly",
        "Classic",
        "Crispy"
      ]
    },
    "time": "15m",
    "servings": 4,
    "calories": 210,
    "protein": 16,
    "fat": 15,
    "carbs": 4,
    "servingSize": {
      "vi": "1 đĩa (~250g)",
      "en": "1 plate (~250g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia",
      "en": "National Institute of Nutrition"
    },
    "recipeSource": {
      "vi": "Ẩm thực Phố Cổ Hà Nội",
      "en": "Hanoi Street & Home Food"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Đậu phụ Mơ trắng mềm mịn",
          "en": "Fresh soft Mo tofu"
        },
        "amount": "4 bìa"
      },
      {
        "name": {
          "vi": "Dầu ăn chiên ngập dầu",
          "en": "Cooking oil for deep fry"
        },
        "amount": "200ml"
      },
      {
        "name": {
          "vi": "Mắm tôm Thanh Hóa",
          "en": "Fermented shrimp paste"
        },
        "amount": "2 thìa canh"
      },
      {
        "name": {
          "vi": "Chanh tươi, đường, ớt hiểm, rượu trắng",
          "en": "Lime, sugar, chili, rice wine"
        },
        "amount": "Vừa đủ"
      }
    ],
    "instructions": {
      "vi": [
        "Đậu phụ cắt miếng vuông vừa ăn, thấm khô nhẹ nhàng để không bị bắn dầu.",
        "Đun chảo ngập dầu thật nóng già, nhẹ nhàng thả từng miếng đậu vào.",
        "Chiên nhanh trên lửa lớn (lướt ván) để lớp vỏ ngoài vàng ruộm giòn tan mà bên trong vẫn mềm béo mịn màng.",
        "Vớt đậu ra để ráo dầu trên giấy thấm.",
        "Đánh bông mắm tôm với chanh, đường, chút rượu trắng và ớt thái lát, chấm đậu ăn ngay khi còn nóng bỏng tay."
      ],
      "en": [
        "Cut soft tofu into cubes, pat dry gently.",
        "Heat oil until sizzling hot; flash-fry tofu cubes over high heat.",
        "Drain as soon as outside turns crispy golden while inside stays silky soft.",
        "Froth shrimp paste with lime juice, sugar, chili, and a splash of wine.",
        "Dip hot tofu in shrimp paste and enjoy immediately."
      ]
    }
  },
  {
    "id": "vn-dau-phu-tam-hanh",
    "title": {
      "vi": "Đậu Phụ Rán Tẩm Mỡ Hành Hà Nội",
      "en": "Fried Tofu Dipped in Scallion Fish Sauce"
    },
    "image": "/dishes/vn-dau-phu-tam-hanh.jpg",
    "category": {
      "vi": "Món Mặn",
      "en": "Savory Dish"
    },
    "mealType": [
      "lunch",
      "dinner"
    ],
    "region": "north",
    "diningType": [
      "home_cook"
    ],
    "isPopular": true,
    "popularityScore": 94,
    "dietaryTags": {
      "vi": [
        "Cơm nhà",
        "Tuổi thơ",
        "Đậm vị"
      ],
      "en": [
        "Comfort Food",
        "Hanoi Classic"
      ]
    },
    "time": "15m",
    "servings": 4,
    "calories": 220,
    "protein": 15,
    "fat": 16,
    "carbs": 4,
    "servingSize": {
      "vi": "1 đĩa (~250g)",
      "en": "1 plate (~250g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia",
      "en": "National Institute of Nutrition"
    },
    "recipeSource": {
      "vi": "Bếp Cơm Gia Đình Bắc Bộ",
      "en": "Northern Home Cooking"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Đậu phụ trắng",
          "en": "White tofu"
        },
        "amount": "4 bìa"
      },
      {
        "name": {
          "vi": "Hành lá thái nhỏ thật nhiều",
          "en": "Generous chopped scallions"
        },
        "amount": "1 bát con"
      },
      {
        "name": {
          "vi": "Nước mắm ngon pha chút nước lọc ấm",
          "en": "Fish sauce diluted with warm water"
        },
        "amount": "3 thìa canh"
      },
      {
        "name": {
          "vi": "Dầu ăn rán đậu",
          "en": "Cooking oil"
        },
        "amount": "Vừa đủ"
      }
    ],
    "instructions": {
      "vi": [
        "Cho hành lá thái nhỏ vào bát nước mắm ngon để sẵn.",
        "Đậu phụ thái con chì hoặc miếng vuông vừa ăn, chiên trong chảo dầu nóng đến khi vỏ vàng giòn rụm.",
        "Gắp miếng đậu phụ ngay khi vừa vớt ra khỏi chảo dầu nóng nhúng ngập vào bát nước mắm hành lá.",
        "Sức nóng của miếng đậu sẽ làm hành lá chín tái xanh mướt và hút đẫm nước mắm thơm lừng.",
        "Xếp ra đĩa ăn ngay với cơm trắng, vị béo của đậu quyện cùng mùi thơm mỡ hành mằn mặn khó quên."
      ],
      "en": [
        "Place chopped scallions into a bowl of seasoned fish sauce.",
        "Fry tofu in hot oil until crispy golden brown.",
        "Immediately take boiling-hot tofu from pan and dip directly into the scallion sauce.",
        "The residual heat lightly wilts the scallions and infuses the tofu with savory aroma.",
        "Serve hot with steamed rice."
      ]
    }
  },
  {
    "id": "vn-dau-phu-chien-sa-ot",
    "title": {
      "vi": "Đậu Phụ Chiên Sả Ớt Vàng Giòn Cay Nồng",
      "en": "Crispy Lemongrass Chili Fried Tofu"
    },
    "image": "/dishes/vn-dau-phu-chien-sa-ot.jpg",
    "category": {
      "vi": "Món Mặn",
      "en": "Savory Dish"
    },
    "mealType": [
      "lunch",
      "dinner"
    ],
    "region": "national",
    "diningType": [
      "home_cook"
    ],
    "isPopular": true,
    "popularityScore": 89,
    "dietaryTags": {
      "vi": [
        "Cơm nhà",
        "Ăn chay hoặc mặn",
        "Cay nồng"
      ],
      "en": [
        "Vegetarian Friendly",
        "Spicy"
      ]
    },
    "time": "20m",
    "servings": 4,
    "calories": 200,
    "protein": 14,
    "fat": 14,
    "carbs": 6,
    "servingSize": {
      "vi": "1 đĩa (~220g)",
      "en": "1 plate (~220g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia",
      "en": "National Institute of Nutrition"
    },
    "recipeSource": {
      "vi": "Món Chay & Cơm Nhà",
      "en": "Vietnamese Vegetarian Kitchen"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Đậu phụ trắng",
          "en": "Firm tofu"
        },
        "amount": "4 bìa"
      },
      {
        "name": {
          "vi": "Sả băm nhuyễn",
          "en": "Minced lemongrass"
        },
        "amount": "3 củ"
      },
      {
        "name": {
          "vi": "Ớt băm, tỏi băm",
          "en": "Minced chili & garlic"
        },
        "amount": "1 thìa canh"
      },
      {
        "name": {
          "vi": "Hạt nêm, xì dầu, muối",
          "en": "Seasonings"
        },
        "amount": "Vừa đủ"
      }
    ],
    "instructions": {
      "vi": [
        "Đậu phụ cắt miếng chữ nhật, khía vài đường chéo nhẹ trên mặt để dễ ngấm gia vị.",
        "Chiên đậu phụ vàng giòn các mặt rồi vớt ra đĩa.",
        "Dùng chính chảo đó, phi thơm sả băm, tỏi, ớt đến khi vàng giòn dậy mùi nồng ấm.",
        "Nêm chút muối, hạt nêm hoặc xì dầu cho đậm đà.",
        "Trút đậu phụ chiên vào đảo đều cho sả ớt phủ kín bề mặt miếng đậu rồi trút ra đĩa."
      ],
      "en": [
        "Cut tofu into rectangles, score lightly with diagonal cuts.",
        "Deep fry until golden and crispy; drain on plate.",
        "Sauté minced lemongrass, garlic, and chili until crisp and aromatic.",
        "Season with salt and soy sauce.",
        "Toss tofu back into the skillet until well coated with the crunchy spicy lemongrass mix."
      ]
    }
  },
  {
    "id": "vn-dau-non-sot-nam-dong-co",
    "title": {
      "vi": "Đậu Hũ Non Sốt Nấm Đông Cô Dầu Hào",
      "en": "Silken Tofu with Braised Shiitake Mushrooms"
    },
    "image": "/dishes/vn-dau-non-sot-nam-dong-co.jpg",
    "category": {
      "vi": "Món Mặn",
      "en": "Savory Dish"
    },
    "mealType": [
      "lunch",
      "dinner"
    ],
    "region": "national",
    "diningType": [
      "home_cook"
    ],
    "isPopular": true,
    "popularityScore": 91,
    "dietaryTags": {
      "vi": [
        "Thanh đạm",
        "Tốt cho tim mạch",
        "Chay mặn đều dùng được"
      ],
      "en": [
        "Healthy",
        "Silky",
        "Vegetarian Adaptable"
      ]
    },
    "time": "20m",
    "servings": 4,
    "calories": 165,
    "protein": 12,
    "fat": 7,
    "carbs": 14,
    "servingSize": {
      "vi": "1 đĩa sâu lòng (~250g)",
      "en": "1 plate (~250g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia",
      "en": "National Institute of Nutrition"
    },
    "recipeSource": {
      "vi": "Bếp Thanh Đạm",
      "en": "Wholesome Living Vietnam"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Đậu hũ non",
          "en": "Silken tofu"
        },
        "amount": "1 cây hoặc 1 hộp (~300g)"
      },
      {
        "name": {
          "vi": "Nấm đông cô tươi thái lát",
          "en": "Fresh shiitake mushrooms sliced"
        },
        "amount": "150g"
      },
      {
        "name": {
          "vi": "Dầu hào chay, nước tương",
          "en": "Vegetarian oyster sauce, soy sauce"
        },
        "amount": "2 thìa canh"
      },
      {
        "name": {
          "vi": "Bột năng hòa nước",
          "en": "Tapioca starch slurry"
        },
        "amount": "1 thìa cà phê"
      },
      {
        "name": {
          "vi": "Hành boa-rô hoặc hành tím, tiêu",
          "en": "Leek/shallots & pepper"
        },
        "amount": "Vừa đủ"
      }
    ],
    "instructions": {
      "vi": [
        "Đậu hũ non cắt khoanh tròn dày khoảng 2cm, hấp nóng nhẹ 5 phút rồi xếp ra đĩa sâu lòng.",
        "Phi thơm hành boa-rô, cho nấm đông cô vào xào chín tới.",
        "Thêm dầu hào, nước tương và chút nước dùng đun sôi liu riu.",
        "Rót từ từ nước bột năng vào khuấy đều tạo độ sánh bóng mượt mà.",
        "Rưới đều sốt nấm nóng hổi lên trên đĩa đậu hũ non, rắc tiêu và ngò rí dùng ngay."
      ],
      "en": [
        "Cut silken tofu into thick rounds, steam for 5 mins and place on a deep plate.",
        "Sauté leeks or shallots, then add shiitake slices and cook until tender.",
        "Add oyster sauce, soy sauce, and a splash of broth; simmer.",
        "Stir in starch slurry to create a glossy, thick gravy.",
        "Pour hot mushroom sauce over the steamed silken tofu, garnish with cilantro and pepper."
      ]
    }
  },
  {
    "id": "vn-trung-cut-rim-man-ngot",
    "title": {
      "vi": "Trứng Cút Rim Mặn Ngọt Óng Ả Hao Cơm",
      "en": "Caramelized Glazed Quail Eggs"
    },
    "image": "/dishes/vn-trung-cut-rim-man-ngot.jpg",
    "category": {
      "vi": "Món Mặn",
      "en": "Savory Dish"
    },
    "mealType": [
      "lunch",
      "dinner"
    ],
    "region": "national",
    "diningType": [
      "home_cook"
    ],
    "isPopular": true,
    "popularityScore": 89,
    "dietaryTags": {
      "vi": [
        "Cơm nhà",
        "Trẻ em mê",
        "Đậm đà"
      ],
      "en": [
        "Kid Friendly",
        "Sweet & Savory"
      ]
    },
    "time": "25m",
    "servings": 4,
    "calories": 260,
    "protein": 15,
    "fat": 18,
    "carbs": 8,
    "servingSize": {
      "vi": "1 đĩa (~200g)",
      "en": "1 plate (~200g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia",
      "en": "National Institute of Nutrition"
    },
    "recipeSource": {
      "vi": "Món Ngon Cho Bé & Gia Đình",
      "en": "Family & Kids Favorite"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Trứng cút tươi",
          "en": "Fresh quail eggs"
        },
        "amount": "25 quả"
      },
      {
        "name": {
          "vi": "Nước mắm ngon, đường cát",
          "en": "Fish sauce & sugar"
        },
        "amount": "2 thìa canh"
      },
      {
        "name": {
          "vi": "Tương ớt, tiêu, tỏi băm",
          "en": "Chili sauce, pepper, garlic"
        },
        "amount": "Vừa đủ"
      },
      {
        "name": {
          "vi": "Dầu ăn chiên trứng",
          "en": "Cooking oil"
        },
        "amount": "Vừa đủ"
      }
    ],
    "instructions": {
      "vi": [
        "Trứng cút luộc chín trong 5 phút, ngâm nước lạnh rồi bóc sạch vỏ.",
        "Chiên trứng cút ngập dầu đến khi lớp vỏ ngoài phồng rộp vàng giòn.",
        "Pha hỗn hợp sốt: nước mắm, đường, tương ớt và 2 thìa nước lọc.",
        "Phi thơm tỏi băm, đổ sốt vào đun sôi rồi trút trứng cút chiên vào đảo liên tục trên lửa nhỏ.",
        "Khi sốt keo lại bám bóng màu hổ phách quanh từng quả trứng cút thì rắc tiêu, tắt bếp."
      ],
      "en": [
        "Hard-boil quail eggs for 5 minutes, peel under cold water.",
        "Deep fry until the outer skin turns bubbly and golden-crisp.",
        "Mix fish sauce, sugar, chili sauce, and water into a glaze.",
        "Sauté garlic, pour in glaze, and simmer.",
        "Toss fried quail eggs in glaze until coated with a shiny amber caramel."
      ]
    }
  },
  {
    "id": "vn-bo-xao-gia-muop",
    "title": {
      "vi": "Thịt Bò Xào Giá Đỗ Mướp Hương Giòn Ngọt",
      "en": "Stir-fried Beef with Bean Sprouts & Sponge Gourd"
    },
    "image": "/dishes/vn-bo-xao-gia-muop.jpg",
    "category": {
      "vi": "Món Xào",
      "en": "Stir-fry"
    },
    "mealType": [
      "lunch",
      "dinner"
    ],
    "region": "national",
    "diningType": [
      "home_cook"
    ],
    "isPopular": true,
    "popularityScore": 92,
    "dietaryTags": {
      "vi": [
        "Cơm nhà",
        "Thanh mát",
        "Nhanh gọn"
      ],
      "en": [
        "Quick",
        "Fresh",
        "Healthy"
      ]
    },
    "time": "15m",
    "servings": 4,
    "calories": 220,
    "protein": 24,
    "fat": 10,
    "carbs": 8,
    "servingSize": {
      "vi": "1 đĩa xào (~280g)",
      "en": "1 plate (~280g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia",
      "en": "National Institute of Nutrition"
    },
    "recipeSource": {
      "vi": "Bếp Cơm Mẹ Nấu",
      "en": "Mom's Vietnamese Kitchen"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Thịt thăn bò thái mỏng",
          "en": "Thinly sliced beef sirloin"
        },
        "amount": "300g"
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
          "vi": "Giá đỗ rửa sạch",
          "en": "Fresh bean sprouts"
        },
        "amount": "200g"
      },
      {
        "name": {
          "vi": "Tỏi băm, hành hoa",
          "en": "Minced garlic & scallions"
        },
        "amount": "Vừa đủ"
      },
      {
        "name": {
          "vi": "Dầu hào, nước mắm, tiêu xay",
          "en": "Oyster sauce, fish sauce, pepper"
        },
        "amount": "Vừa đủ"
      }
    ],
    "instructions": {
      "vi": [
        "Thịt bò ướp với tỏi băm, dầu hào, tiêu và 1 thìa cà phê dầu ăn để thịt mềm mọng.",
        "Phi thơm tỏi trên lửa lớn, xào nhanh thịt bò chín tái khoảng 1 phút rồi trút riêng ra đĩa.",
        "Cho mướp hương vào chảo xào chín tới trong 2 phút, tiếp tục trút giá đỗ vào đảo nhanh 30 giây.",
        "Trút thịt bò trở lại chảo, đảo đều tay trên lửa to cho hòa quyện rồi nêm lại vừa ăn.",
        "Rắc hành hoa thái khúc và tiêu đen, bày ra đĩa thưởng thức ngay khi còn bốc khói nghi ngút."
      ],
      "en": [
        "Marinate beef slices with garlic, oyster sauce, pepper, and a dash of oil to keep tender.",
        "Sear beef quickly in garlic oil over high heat for 1 minute; set aside.",
        "Stir-fry sponge gourd for 2 mins, then add bean sprouts and toss for 30s.",
        "Return beef to wok, toss together over high heat and adjust seasoning.",
        "Top with scallions and black pepper; serve piping hot."
      ]
    }
  },
  {
    "id": "vn-bo-xao-thien-ly",
    "title": {
      "vi": "Thịt Bò Xào Hoa Thiên Lý Ngát Hương",
      "en": "Stir-fried Beef with Fragrant Telosma Flowers"
    },
    "image": "/dishes/vn-bo-xao-thien-ly.jpg",
    "category": {
      "vi": "Món Xào",
      "en": "Stir-fry"
    },
    "mealType": [
      "lunch",
      "dinner"
    ],
    "region": "national",
    "diningType": [
      "home_cook"
    ],
    "isPopular": true,
    "popularityScore": 93,
    "dietaryTags": {
      "vi": [
        "Món quý",
        "Thanh nhiệt",
        "Giàu dinh dưỡng"
      ],
      "en": [
        "Seasonal",
        "Nutritious"
      ]
    },
    "time": "15m",
    "servings": 4,
    "calories": 230,
    "protein": 25,
    "fat": 10,
    "carbs": 6,
    "servingSize": {
      "vi": "1 đĩa (~250g)",
      "en": "1 plate (~250g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia",
      "en": "National Institute of Nutrition"
    },
    "recipeSource": {
      "vi": "Món Ngon Việt Nam",
      "en": "Vietnamese Delicacies"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Thịt bò thăn thái lát mỏng",
          "en": "Thinly sliced beef"
        },
        "amount": "300g"
      },
      {
        "name": {
          "vi": "Hoa thiên lý tươi rửa sạch",
          "en": "Fresh telosma flowers"
        },
        "amount": "250g"
      },
      {
        "name": {
          "vi": "Tỏi băm nhuyễn",
          "en": "Minced garlic"
        },
        "amount": "1 củ"
      },
      {
        "name": {
          "vi": "Dầu hào, tiêu, nước mắm",
          "en": "Oyster sauce, pepper, fish sauce"
        },
        "amount": "Vừa đủ"
      }
    ],
    "instructions": {
      "vi": [
        "Thịt bò ướp với dầu hào, tỏi băm và tiêu 10 phút.",
        "Phi thơm tỏi trong chảo dầu nóng, xào thịt bò trên lửa lớn vừa chín tới, múc ra đĩa.",
        "Cho hoa thiên lý vào chảo xào nhanh tay trên lửa lớn khoảng 1-2 phút cho hoa vừa chín giòn ngọt màu xanh mướt.",
        "Trút thịt bò vào đảo cùng 30 giây cho quyện đều vị.",
        "Tắt bếp, cho ra đĩa rắc tiêu thưởng thức cùng cơm trắng."
      ],
      "en": [
        "Marinate sliced beef with oyster sauce, minced garlic, and pepper for 10 mins.",
        "Quickly sear beef in garlic oil over high heat until tender; set aside.",
        "Stir-fry telosma flowers over high heat for 1-2 mins until bright green and crisp.",
        "Return beef, toss for 30 seconds to combine.",
        "Finish with fresh pepper and serve immediately."
      ]
    }
  },
  {
    "id": "vn-bap-bo-ngam-mam",
    "title": {
      "vi": "Bắp Bò Hoa Ngâm Nước Mắm Chua Ngọt Giòn Tan",
      "en": "Sweet & Savory Fish Sauce Pickled Beef Shank"
    },
    "image": "/dishes/vn-bap-bo-ngam-mam.jpg",
    "category": {
      "vi": "Món Mặn",
      "en": "Savory Dish"
    },
    "mealType": [
      "lunch",
      "dinner",
      "snack"
    ],
    "region": "north",
    "diningType": [
      "home_cook"
    ],
    "isPopular": true,
    "popularityScore": 95,
    "dietaryTags": {
      "vi": [
        "Đặc sản ngày Tết",
        "Món nhắm",
        "Đậm đà"
      ],
      "en": [
        "Festive",
        "Savory",
        "Appetizer"
      ]
    },
    "time": "45m",
    "servings": 6,
    "calories": 270,
    "protein": 30,
    "fat": 14,
    "carbs": 6,
    "servingSize": {
      "vi": "1 đĩa thái mỏng (~200g)",
      "en": "1 plate sliced (~200g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia",
      "en": "National Institute of Nutrition"
    },
    "recipeSource": {
      "vi": "Ẩm thực Tết Hà Nội",
      "en": "Hanoi Holiday Heritage"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Bắp bò hoa nhiều gân",
          "en": "Beef shank with tendon veins"
        },
        "amount": "800g"
      },
      {
        "name": {
          "vi": "Nước mắm truyền thống cốt nhĩ",
          "en": "Premium fish sauce"
        },
        "amount": "300ml"
      },
      {
        "name": {
          "vi": "Đường vàng hoặc đường phèn",
          "en": "Rock sugar / cane sugar"
        },
        "amount": "250g"
      },
      {
        "name": {
          "vi": "Giấm gạo ngon",
          "en": "Rice vinegar"
        },
        "amount": "100ml"
      },
      {
        "name": {
          "vi": "Quế, hoa hồi, thảo quả, gừng, tỏi, ớt",
          "en": "Cinnamon, star anise, cardamom, aromatics"
        },
        "amount": "Vừa đủ"
      }
    ],
    "instructions": {
      "vi": [
        "Bắp bò cuộn chặt dây chỉ, luộc cùng quế, hồi, thảo quả, gừng và chút muối trong 30-35 phút đến khi chín tới.",
        "Vớt bắp bò ngâm ngay vào âu nước đá cho săn chắc rồi để thật khô ráo trong tủ lạnh.",
        "Nấu nước mắm ngâm: đun sôi nước mắm, đường, giấm và nước lọc theo tỉ lệ cân đối, để nguội hoàn toàn.",
        "Xếp bắp bò vào hũ thủy tinh cùng tỏi thái lát, ớt hiểm, tiêu sọ và hoa hồi.",
        "Rót nước mắm ngập bắp bò, đậy kín sau 3-5 ngày là ngấm giòn sần sật, thái lát mỏng cuốn bánh tráng hoặc nhắm rượu."
      ],
      "en": [
        "Tie beef shank tightly, simmer with cinnamon, star anise, cardamom, and ginger for 30-35 mins.",
        "Ice bath the shank to seal juices and crisp tendon, then pat completely dry.",
        "Boil fish sauce, rock sugar, vinegar, and water; let cool completely.",
        "Pack beef in glass jar with sliced garlic, chili, peppercorns, and star anise.",
        "Submerge in seasoned fish sauce for 3-5 days. Slice paper-thin before serving."
      ]
    }
  },
  {
    "id": "vn-bo-kho-gung-sa",
    "title": {
      "vi": "Bắp Bò Kho Gừng Sả Ấm Nồng Ngày Mưa",
      "en": "Braised Beef Shank with Ginger & Lemongrass"
    },
    "image": "/dishes/vn-bo-kho-gung-sa.jpg",
    "category": {
      "vi": "Món Mặn",
      "en": "Savory Dish"
    },
    "mealType": [
      "lunch",
      "dinner"
    ],
    "region": "north",
    "diningType": [
      "home_cook"
    ],
    "isPopular": true,
    "popularityScore": 92,
    "dietaryTags": {
      "vi": [
        "Cơm nhà",
        "Ấm áp ngày đông",
        "Hao cơm"
      ],
      "en": [
        "Comfort Food",
        "Warming Stew"
      ]
    },
    "time": "50m",
    "servings": 4,
    "calories": 310,
    "protein": 28,
    "fat": 18,
    "carbs": 6,
    "servingSize": {
      "vi": "1 tô kho (~250g)",
      "en": "1 bowl (~250g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia",
      "en": "National Institute of Nutrition"
    },
    "recipeSource": {
      "vi": "Ẩm thực Miền Bắc",
      "en": "Northern Vietnam Cooking"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Bắp bò hoặc nạm bò",
          "en": "Beef shank or flank"
        },
        "amount": "500g"
      },
      {
        "name": {
          "vi": "Gừng tươi đập dập và thái sợi",
          "en": "Crushed and julienned ginger"
        },
        "amount": "2 củ to"
      },
      {
        "name": {
          "vi": "Sả cây đập dập cắt khúc",
          "en": "Lemongrass stalks bruised"
        },
        "amount": "3 cây"
      },
      {
        "name": {
          "vi": "Nước mắm ngon, nước màu đường, tiêu",
          "en": "Fish sauce, caramel sauce, pepper"
        },
        "amount": "Vừa đủ"
      }
    ],
    "instructions": {
      "vi": [
        "Thịt bò thái miếng vuông quân cờ vừa ăn. Ướp với nước mắm, tiêu, gừng băm và nước màu 20 phút.",
        "Phi thơm sả và gừng trong nồi, trút thịt bò vào xào săn trên lửa lớn.",
        "Đổ nước sôi xâm xấp mặt thịt, đun sôi rồi hạ nhỏ lửa đậy nắp kho liu riu.",
        "Kho khoảng 40 phút đến khi thịt bò mềm rục ngấm trọn vị cay ấm của gừng sả, nước kho sánh đặc nâu đỏ óng ả.",
        "Dọn ra tô ăn nóng cùng cơm trắng trong những ngày mưa lạnh."
      ],
      "en": [
        "Cut beef into hearty cubes. Marinate with fish sauce, pepper, ginger, and caramel for 20 mins.",
        "Sauté lemongrass and ginger in pot, add beef and sear over high heat.",
        "Pour in boiling water to cover, reduce heat and simmer covered.",
        "Cook for 40 mins until beef is meltingly tender and coated in a spicy ginger sauce.",
        "Serve piping hot with steamed rice on cold rainy days."
      ]
    }
  },
  {
    "id": "vn-bo-ne-chao-gang",
    "title": {
      "vi": "Bò Né Chảo Gang Trứng Ốp La Pâté Xèo Xèo",
      "en": "Vietnamese Sizzling Beef Steak with Eggs & Pâté"
    },
    "image": "/dishes/vn-bo-ne-chao-gang.jpg",
    "category": {
      "vi": "Món Mặn",
      "en": "Savory Dish"
    },
    "mealType": [
      "breakfast",
      "lunch",
      "dinner"
    ],
    "region": "south",
    "diningType": [
      "home_cook",
      "eat_out"
    ],
    "isPopular": true,
    "popularityScore": 97,
    "dietaryTags": {
      "vi": [
        "Ăn sáng",
        "Đậm vị",
        "Giàu đạm"
      ],
      "en": [
        "Breakfast",
        "Sizzling Steak",
        "High Protein"
      ]
    },
    "time": "15m",
    "servings": 2,
    "calories": 480,
    "protein": 35,
    "fat": 34,
    "carbs": 8,
    "servingSize": {
      "vi": "1 chảo gang (~350g)",
      "en": "1 skillet (~350g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia",
      "en": "National Institute of Nutrition"
    },
    "recipeSource": {
      "vi": "Đặc sản Quán Ăn Sài Gòn",
      "en": "Saigon Street Food Culture"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Thịt thăn bò mềm thái lát bản to",
          "en": "Tender beef sirloin steak slices"
        },
        "amount": "300g"
      },
      {
        "name": {
          "vi": "Trứng gà ta",
          "en": "Farm eggs"
        },
        "amount": "2 quả"
      },
      {
        "name": {
          "vi": "Pâté gan heo béo bùi",
          "en": "Pork liver pâté"
        },
        "amount": "50g"
      },
      {
        "name": {
          "vi": "Bơ thơm thực vật",
          "en": "Butter"
        },
        "amount": "2 thìa canh"
      },
      {
        "name": {
          "vi": "Hành tây thái múi cau, cà chua, ngò rí",
          "en": "Onion, tomato, cilantro"
        },
        "amount": "Vừa đủ"
      },
      {
        "name": {
          "vi": "Bánh mì giòn ăn kèm",
          "en": "Crusty baguette"
        },
        "amount": "2 ổ"
      }
    ],
    "instructions": {
      "vi": [
        "Thịt bò dần mềm, ướp với dầu hào, xì dầu, tiêu xay và tỏi băm 15 phút.",
        "Đặt chảo gang hình con bò lên bếp đun thật nóng già, cho bơ vào tan chảy xèo xèo.",
        "Xếp thịt bò, hành tây, 1 viên pâté và đập 1 quả trứng gà trực tiếp vào chảo.",
        "Rưới chút nước sốt bò lên trên, rắc tiêu đen và ngò rí, nhấc chảo gang đặt lên đĩa gỗ phục vụ ngay khi còn sôi sùng sục.",
        "Chấm bánh mì giòn tan vào lòng đỏ trứng béo ngậy và nước sốt bò đậm đà."
      ],
      "en": [
        "Tenderize beef slices; marinate with oyster sauce, soy sauce, pepper, and garlic.",
        "Heat cast-iron cow skillet until smoking hot; melt butter sizzlingly.",
        "Add beef, onion slices, a scoop of pâté, and crack an egg directly on skillet.",
        "Drizzle steak sauce, sprinkle pepper and cilantro; serve immediately on wooden base.",
        "Dip crispy warm baguette into runny yolk, buttery pâté, and savory meat juices."
      ]
    }
  },
  {
    "id": "vn-bo-cuon-nam-kim-cham",
    "title": {
      "vi": "Bò Cuộn Nấm Kim Châm Áp Chảo Sốt Tiêu",
      "en": "Pan-seared Beef Rolls with Enoki Mushrooms"
    },
    "image": "/dishes/vn-bo-cuon-nam-kim-cham.jpg",
    "category": {
      "vi": "Món Mặn",
      "en": "Savory Dish"
    },
    "mealType": [
      "lunch",
      "dinner"
    ],
    "region": "national",
    "diningType": [
      "home_cook"
    ],
    "isPopular": true,
    "popularityScore": 91,
    "dietaryTags": {
      "vi": [
        "Cơm nhà",
        "Đẹp mắt",
        "Nhanh gọn"
      ],
      "en": [
        "Quick",
        "Elegant",
        "Healthy"
      ]
    },
    "time": "20m",
    "servings": 4,
    "calories": 260,
    "protein": 26,
    "fat": 15,
    "carbs": 5,
    "servingSize": {
      "vi": "8-10 cuốn (~250g)",
      "en": "8-10 rolls (~250g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia",
      "en": "National Institute of Nutrition"
    },
    "recipeSource": {
      "vi": "Bếp Hiện Đại",
      "en": "Modern Vietnamese Kitchen"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Thịt ba chỉ bò Mỹ cuộn lát mỏng",
          "en": "Thinly sliced beef short plate"
        },
        "amount": "300g"
      },
      {
        "name": {
          "vi": "Nấm kim châm cắt gốc rửa sạch",
          "en": "Enoki mushrooms"
        },
        "amount": "200g"
      },
      {
        "name": {
          "vi": "Dầu hào, xì dầu, mật ong, tiêu đen",
          "en": "Oyster sauce, soy sauce, honey, black pepper"
        },
        "amount": "Vừa đủ"
      },
      {
        "name": {
          "vi": "Hành lá chần sơ buộc nơ",
          "en": "Blanched scallion ribbons"
        },
        "amount": "Vừa đủ"
      }
    ],
    "instructions": {
      "vi": [
        "Trải từng dải thịt bò mỏng ra thớt, đặt một nhúm nấm kim châm vào giữa rồi cuộn tròn chặt tay.",
        "Pha nước sốt: dầu hào, xì dầu, mật ong, tiêu đen và chút nước lọc.",
        "Làm nóng chảo với chút xíu dầu ăn, xếp từng cuộn bò vào áp chảo vàng xém các mặt.",
        "Rưới nước sốt vào chảo đảo nhẹ 1-2 phút cho sốt ngấm đều bóng bẩy quanh cuộn bò.",
        "Gắp ra đĩa rắc mè rang hoặc hành lá thái nhỏ, dùng nóng với cơm trắng."
      ],
      "en": [
        "Lay thin beef slices flat, place a bundle of enoki mushrooms in center, roll tightly.",
        "Whisk oyster sauce, soy sauce, honey, cracked pepper, and water for the glaze.",
        "Pan-sear beef rolls in a lightly oiled pan until browned on all sides.",
        "Pour in glaze and simmer for 1-2 mins until glazed and glossy.",
        "Plate, garnish with toasted sesame seeds, and serve hot."
      ]
    }
  },
  {
    "id": "vn-canh-dua-bo",
    "title": {
      "vi": "Canh Dưa Chua Nấu Gầu Bò Thì Là Chua Dịu",
      "en": "Sour Pickled Mustard Greens Soup with Beef Brisket"
    },
    "image": "/dishes/vn-canh-dua-bo.jpg",
    "category": {
      "vi": "Món Canh",
      "en": "Soup"
    },
    "mealType": [
      "lunch",
      "dinner"
    ],
    "region": "north",
    "diningType": [
      "home_cook"
    ],
    "isPopular": true,
    "popularityScore": 94,
    "dietaryTags": {
      "vi": [
        "Cơm nhà",
        "Chua dịu",
        "Đưa cơm ngày hè"
      ],
      "en": [
        "Home Cook",
        "Tangy Soup",
        "Comfort Food"
      ]
    },
    "time": "40m",
    "servings": 4,
    "calories": 280,
    "protein": 22,
    "fat": 18,
    "carbs": 7,
    "servingSize": {
      "vi": "1 tô lớn (~400g)",
      "en": "1 large bowl (~400g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia",
      "en": "National Institute of Nutrition"
    },
    "recipeSource": {
      "vi": "Ẩm thực Phố Cổ Hà Nội",
      "en": "Hanoi Traditional Soups"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Dưa cải chua muối giòn",
          "en": "Sour pickled mustard greens"
        },
        "amount": "300g"
      },
      {
        "name": {
          "vi": "Gầu bò hoặc dẻ sườn bò",
          "en": "Beef brisket or rib fingers"
        },
        "amount": "300g"
      },
      {
        "name": {
          "vi": "Cà chua chín bổ múi cau",
          "en": "Ripe tomatoes wedged"
        },
        "amount": "2 quả"
      },
      {
        "name": {
          "vi": "Hành tím băm, hành hoa, thì là",
          "en": "Shallots, scallions, fresh dill"
        },
        "amount": "Vừa đủ"
      },
      {
        "name": {
          "vi": "Gia vị mắm muối hạt nêm",
          "en": "Seasonings"
        },
        "amount": "Vừa đủ"
      }
    ],
    "instructions": {
      "vi": [
        "Gầu bò thái miếng vừa ăn, xào săn với hành tím và chút nước mắm rồi ninh nhỏ lửa 20 phút cho mềm.",
        "Dưa cải chua rửa sơ vắt ráo. Cà chua xào mềm trong chảo riêng cho lên màu đỏ đẹp.",
        "Cho dưa chua vào xào cùng cà chua khoảng 3-5 phút cho ngấm vị mặn mòi giòn tan.",
        "Trút dưa cà vào nồi nước ninh thịt bò, đun sôi rồi hạ nhỏ lửa nấu thêm 10 phút.",
        "Nêm lại vừa khẩu vị chua thanh đậm đà, thả hành hoa và thì là thái khúc vào rồi tắt bếp ngay."
      ],
      "en": [
        "Slice beef brisket, sear with shallots and fish sauce, then simmer in water for 20 mins until tender.",
        "Rinse pickled greens lightly. Sauté tomatoes until soft and red.",
        "Add pickled mustard greens to tomatoes and stir-fry for 3-5 mins.",
        "Transfer greens and tomatoes into the beef broth pot; simmer for 10 mins.",
        "Season to balance tangy and savory flavors; toss in scallions and fresh dill before serving."
      ]
    }
  },
  {
    "id": "vn-canh-ga-chien-mam",
    "title": {
      "vi": "Cánh Gà Chiên Nước Mắm Tỏi Ớt Giòn Rụm",
      "en": "Crispy Chicken Wings in Savory Garlic Fish Sauce"
    },
    "image": "/dishes/vn-canh-ga-chien-mam.jpg",
    "category": {
      "vi": "Món Mặn",
      "en": "Savory Dish"
    },
    "mealType": [
      "lunch",
      "dinner",
      "snack"
    ],
    "region": "national",
    "diningType": [
      "home_cook",
      "eat_out"
    ],
    "isPopular": true,
    "popularityScore": 99,
    "dietaryTags": {
      "vi": [
        "Cơm nhà",
        "Món khoái khẩu",
        "Giòn rụm"
      ],
      "en": [
        "Crowd Pleaser",
        "Crispy",
        "Savory"
      ]
    },
    "time": "30m",
    "servings": 4,
    "calories": 380,
    "protein": 26,
    "fat": 28,
    "carbs": 6,
    "servingSize": {
      "vi": "1 đĩa cánh gà (~300g)",
      "en": "1 plate wings (~300g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia",
      "en": "National Institute of Nutrition"
    },
    "recipeSource": {
      "vi": "Món Ngon Mỗi Ngày",
      "en": "Daily Delicious VN"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Cánh gà tươi chặt khúc",
          "en": "Chicken wings sectioned"
        },
        "amount": "600g"
      },
      {
        "name": {
          "vi": "Nước mắm ngon cốt nhĩ",
          "en": "Premium fish sauce"
        },
        "amount": "3 thìa canh"
      },
      {
        "name": {
          "vi": "Đường cát trắng",
          "en": "Sugar"
        },
        "amount": "2.5 thìa canh"
      },
      {
        "name": {
          "vi": "Tỏi băm thật nhiều",
          "en": "Generous minced garlic"
        },
        "amount": "2 củ"
      },
      {
        "name": {
          "vi": "Ớt hiểm băm",
          "en": "Minced chili"
        },
        "amount": "2 quả"
      },
      {
        "name": {
          "vi": "Bột bắp hoặc bột chiên giòn",
          "en": "Cornstarch"
        },
        "amount": "2 thìa canh"
      },
      {
        "name": {
          "vi": "Dầu ăn chiên gà",
          "en": "Cooking oil"
        },
        "amount": "200ml"
      }
    ],
    "instructions": {
      "vi": [
        "Cánh gà rửa sạch xát muối chanh, khía nhẹ mặt sau, áo một lớp mỏng bột bắp khô.",
        "Chiên cánh gà ngập dầu trên lửa vừa đến khi da căng phồng vàng ruộm giòn tan, vớt ra để ráo dầu.",
        "Pha sốt mắm tỏi: khuấy tan nước mắm, đường, tương ớt và 1 thìa nước lọc.",
        "Phi thơm tỏi ớt băm trong chảo đến khi vàng thơm, đổ bát sốt mắm vào đun sủi bọt sánh lại.",
        "Trút cánh gà chiên vào đảo nhanh tay trên lửa lớn 1-2 phút cho lớp mắm tỏi phủ bóng đều quanh cánh gà.",
        "Múc ra đĩa, ăn nóng kèm dưa chuột và rau răm."
      ],
      "en": [
        "Clean chicken wings, score gently, lightly dust with cornstarch.",
        "Deep fry until golden and crispy; drain on paper towels.",
        "Mix fish sauce, sugar, chili sauce, and water into a glaze.",
        "Sauté garlic and chili until fragrant and golden, pour in glaze and bring to a simmer.",
        "Toss chicken wings vigorously in the glaze until thoroughly coated and sticky.",
        "Serve hot with cucumber slices and Vietnamese coriander."
      ]
    }
  },
  {
    "id": "vn-dui-ga-sot-bo-toi",
    "title": {
      "vi": "Đùi Gà Sốt Bơ Tỏi Mật Ong Óng Vàng",
      "en": "Honey Garlic Butter Glazed Chicken Thighs"
    },
    "image": "/dishes/vn-dui-ga-sot-bo-toi.jpg",
    "category": {
      "vi": "Món Mặn",
      "en": "Savory Dish"
    },
    "mealType": [
      "lunch",
      "dinner"
    ],
    "region": "national",
    "diningType": [
      "home_cook"
    ],
    "isPopular": true,
    "popularityScore": 93,
    "dietaryTags": {
      "vi": [
        "Cơm nhà",
        "Trẻ em thích",
        "Thơm ngậy"
      ],
      "en": [
        "Kid Friendly",
        "Butter Garlic",
        "Sweet Savory"
      ]
    },
    "time": "30m",
    "servings": 4,
    "calories": 390,
    "protein": 28,
    "fat": 27,
    "carbs": 9,
    "servingSize": {
      "vi": "1 đĩa (~300g)",
      "en": "1 plate (~300g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia",
      "en": "National Institute of Nutrition"
    },
    "recipeSource": {
      "vi": "Bếp Gia Đình",
      "en": "Family Kitchen"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Đùi gà góc tư hoặc má đùi",
          "en": "Chicken thighs"
        },
        "amount": "600g"
      },
      {
        "name": {
          "vi": "Bơ lạt",
          "en": "Unsalted butter"
        },
        "amount": "30g"
      },
      {
        "name": {
          "vi": "Tỏi băm nhuyễn",
          "en": "Minced garlic"
        },
        "amount": "2 thìa canh"
      },
      {
        "name": {
          "vi": "Mật ong rừng",
          "en": "Wild honey"
        },
        "amount": "2 thìa canh"
      },
      {
        "name": {
          "vi": "Xì dầu, tiêu xay, dầu ăn",
          "en": "Soy sauce, pepper, oil"
        },
        "amount": "Vừa đủ"
      }
    ],
    "instructions": {
      "vi": [
        "Đùi gà lọc bỏ bớt mỡ thừa, ướp chút muối tiêu và xì dầu trong 15 phút.",
        "Áp chảo đùi gà trên lửa vừa đến khi da gà vàng rụm, thịt bên trong chín mềm mọng nước.",
        "Làm tan chảy bơ trong chảo, phi thơm tỏi băm đến khi dậy mùi béo ngậy.",
        "Cho mật ong, chút xì dầu vào khuấy đều tạo sốt bóng mượt.",
        "Cho đùi gà vào đảo cùng sốt bơ tỏi 2 phút cho ngấm đều lớp sốt vàng óng thơm lừng."
      ],
      "en": [
        "Trim excess fat from thighs, season with salt, pepper, and soy sauce.",
        "Pan-sear chicken thighs skin-side down until crispy and cooked through.",
        "Melt butter in a skillet, gently sauté garlic until golden and fragrant.",
        "Stir in honey and soy sauce to form a rich glossy glaze.",
        "Baste chicken in honey garlic butter sauce for 2 minutes and serve hot."
      ]
    }
  },
  {
    "id": "vn-ga-rang-la-chanh",
    "title": {
      "vi": "Gà Ta Rang Lá Chanh Thơm Nức Cơm Nhà",
      "en": "Northern Style Braised Free-range Chicken with Kaffir Lime Leaves"
    },
    "image": "/dishes/vn-ga-rang-la-chanh.jpg",
    "category": {
      "vi": "Món Mặn",
      "en": "Savory Dish"
    },
    "mealType": [
      "lunch",
      "dinner"
    ],
    "region": "north",
    "diningType": [
      "home_cook"
    ],
    "isPopular": true,
    "popularityScore": 97,
    "dietaryTags": {
      "vi": [
        "Cơm nhà",
        "Chuẩn vị Bắc",
        "Đậm đà"
      ],
      "en": [
        "Northern Classic",
        "Home Cook",
        "Aromatic"
      ]
    },
    "time": "25m",
    "servings": 4,
    "calories": 290,
    "protein": 27,
    "fat": 18,
    "carbs": 3,
    "servingSize": {
      "vi": "1 đĩa gà rang (~250g)",
      "en": "1 plate (~250g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia",
      "en": "National Institute of Nutrition"
    },
    "recipeSource": {
      "vi": "Ẩm thực Bắc Bộ Cổ Truyền",
      "en": "Northern Vietnamese Culinary Heritage"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Thịt gà ta chặt miếng vừa ăn",
          "en": "Free-range chicken cut small"
        },
        "amount": "600g"
      },
      {
        "name": {
          "vi": "Lá chanh tươi thái chỉ thật nhỏ",
          "en": "Finely julienned lime leaves"
        },
        "amount": "10 lá"
      },
      {
        "name": {
          "vi": "Nước mắm truyền thống",
          "en": "Pure fish sauce"
        },
        "amount": "2 thìa canh"
      },
      {
        "name": {
          "vi": "Gừng thái sợi, hành tím băm",
          "en": "Julienned ginger, shallots"
        },
        "amount": "Vừa đủ"
      },
      {
        "name": {
          "vi": "Hạt tiêu xay, ớt hiểm",
          "en": "Black pepper, chili"
        },
        "amount": "Vừa đủ"
      }
    ],
    "instructions": {
      "vi": [
        "Thịt gà chặt miếng vừa ăn, ướp nước mắm, hành tím, gừng sợi và tiêu 15 phút.",
        "Bắc chảo lên bếp, cho thịt gà vào đảo đều trên lửa lớn không cần dầu mỡ để mỡ gà tự tiết ra.",
        "Rang đến khi thịt gà săn chắc, cháy cạnh nhẹ và dậy mùi thơm nồng.",
        "Nêm thêm chút nước mắm ngon cho dậy vị đậm đà, đảo liên tục.",
        "Tắt bếp, rắc lá chanh thái chỉ mỏng như sợi tơ lên trên đảo đều cho hương tinh dầu chanh bốc lên thơm ngát."
      ],
      "en": [
        "Chop chicken into bite-sized pieces, marinate with fish sauce, shallots, ginger, and pepper for 15 mins.",
        "Sauté chicken in dry pan over high heat; render its own natural fat.",
        "Stir-fry until edges are slightly charred and golden.",
        "Splash extra fish sauce for fragrant savory finish.",
        "Turn off heat, immediately scatter julienned lime leaves and toss to release essential oils."
      ]
    }
  },
  {
    "id": "vn-ga-nau-nam-tao-do",
    "title": {
      "vi": "Gà Ta Hầm Nấm Đông Cô Táo Đỏ Hạt Sen",
      "en": "Nourishing Stewed Chicken with Shiitake, Red Dates & Lotus Seeds"
    },
    "image": "/dishes/vn-ga-nau-nam-tao-do.jpg",
    "category": {
      "vi": "Món Canh",
      "en": "Soup"
    },
    "mealType": [
      "lunch",
      "dinner"
    ],
    "region": "national",
    "diningType": [
      "home_cook"
    ],
    "isPopular": true,
    "popularityScore": 91,
    "dietaryTags": {
      "vi": [
        "Bồi bổ",
        "Thanh mát",
        "Ngọt nước"
      ],
      "en": [
        "Nourishing",
        "Herbal",
        "Healthy"
      ]
    },
    "time": "45m",
    "servings": 4,
    "calories": 320,
    "protein": 29,
    "fat": 16,
    "carbs": 14,
    "servingSize": {
      "vi": "1 tô lớn (~380g)",
      "en": "1 bowl (~380g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia",
      "en": "National Institute of Nutrition"
    },
    "recipeSource": {
      "vi": "Bếp Bổ Dưỡng Gia Đình",
      "en": "Vietnamese Herbal Soups"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Thịt gà ta chặt miếng",
          "en": "Free range chicken chunks"
        },
        "amount": "500g"
      },
      {
        "name": {
          "vi": "Nấm đông cô ngâm nở",
          "en": "Shiitake mushrooms"
        },
        "amount": "8 tai"
      },
      {
        "name": {
          "vi": "Táo đỏ khô",
          "en": "Dried red dates"
        },
        "amount": "8 quả"
      },
      {
        "name": {
          "vi": "Hạt sen tươi",
          "en": "Fresh lotus seeds"
        },
        "amount": "80g"
      },
      {
        "name": {
          "vi": "Kỷ tử, gừng lát, hành hoa",
          "en": "Goji berries, ginger, scallions"
        },
        "amount": "Vừa đủ"
      }
    ],
    "instructions": {
      "vi": [
        "Thịt gà chần nước sôi khử bọt, xào sơ với gừng lát cho thơm.",
        "Đổ 1 lít nước lọc vào nồi, đun sôi rồi hạ nhỏ lửa hầm thịt gà trong 20 phút.",
        "Cho nấm đông cô, táo đỏ và hạt sen vào hầm tiếp 15 phút cho hạt sen bở tơi mềm ngọt.",
        "Thêm kỷ tử, nêm nước mắm và muối vừa khẩu vị thanh tao.",
        "Múc ra tô lớn, rắc hành hoa thái nhỏ, dùng nóng bổ dưỡng hồi phục thể lực."
      ],
      "en": [
        "Blanch chicken, then lightly sauté with sliced ginger.",
        "Pour in 1 liter of water, bring to boil and simmer for 20 mins.",
        "Add shiitake, red dates, and lotus seeds; simmer another 15 mins until tender.",
        "Add goji berries, season lightly with salt and fish sauce.",
        "Garnish with scallions and serve hot for revitalizing nourishment."
      ]
    }
  },
  {
    "id": "vn-ga-hap-mam-nhi",
    "title": {
      "vi": "Gà Hấp Nước Mắm Nhĩ Phú Quốc Da Giòn",
      "en": "Steamed Chicken with Pure Phu Quoc Fish Sauce"
    },
    "image": "/dishes/vn-ga-hap-mam-nhi.jpg",
    "category": {
      "vi": "Món Mặn",
      "en": "Savory Dish"
    },
    "mealType": [
      "lunch",
      "dinner"
    ],
    "region": "south",
    "diningType": [
      "home_cook",
      "eat_out"
    ],
    "isPopular": true,
    "popularityScore": 94,
    "dietaryTags": {
      "vi": [
        "Đặc sản Nam Bộ",
        "Đậm đà",
        "Da giòn"
      ],
      "en": [
        "Southern Specialty",
        "Savory"
      ]
    },
    "time": "35m",
    "servings": 4,
    "calories": 330,
    "protein": 31,
    "fat": 20,
    "carbs": 4,
    "servingSize": {
      "vi": "1 đĩa gà chặt (~300g)",
      "en": "1 plate (~300g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia",
      "en": "National Institute of Nutrition"
    },
    "recipeSource": {
      "vi": "Ẩm thực Miền Tây Nam Bộ",
      "en": "Mekong Delta Culinary"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Gà ta thả vườn nguyên con",
          "en": "Whole free-range chicken"
        },
        "amount": "1.2kg"
      },
      {
        "name": {
          "vi": "Nước mắm nhĩ Phú Quốc",
          "en": "Phu Quoc pure fish sauce"
        },
        "amount": "4 thìa canh"
      },
      {
        "name": {
          "vi": "Tỏi nguyên củ, tiêu sọ, ớt sừng",
          "en": "Whole garlic bulbs, peppercorns, chili"
        },
        "amount": "Vừa đủ"
      },
      {
        "name": {
          "vi": "Đường thốt nốt, dầu mè",
          "en": "Palm sugar, sesame oil"
        },
        "amount": "Vừa đủ"
      }
    ],
    "instructions": {
      "vi": [
        "Gà xát muối rượu làm sạch, để thật ráo nước.",
        "Pha sốt mắm nhĩ: nước mắm Phú Quốc, đường thốt nốt, tiêu sọ đập dập, tỏi tép đập dập.",
        "Xoa đều sốt mắm quanh mình gà và bên trong bụng gà ướp 20 phút.",
        "Cho gà vào nồi hấp cách thủy trên xửng hấp khoảng 25-30 phút đến khi da gà căng bóng vàng ươm.",
        "Chặt miếng vừa ăn xếp ra đĩa, rưới nước hấp mắm nhĩ thơm lừng lên trên, chấm muối tiêu chanh ớt."
      ],
      "en": [
        "Clean whole chicken with salt and wine, drain thoroughly.",
        "Make fish sauce marinade with palm sugar, cracked peppercorns, and crushed garlic.",
        "Rub marinade all over chicken inside and out; rest for 20 mins.",
        "Steam chicken for 25-30 mins until the skin is glistening yellow and meat is succulent.",
        "Chop into bite-sized pieces, pour steaming pan juices over, and dip in lime pepper salt."
      ]
    }
  },
  {
    "id": "vn-long-ga-xao-muop",
    "title": {
      "vi": "Lòng Gà Xào Mướp Hương Giá Đỗ Giòn Ngọt",
      "en": "Stir-fried Chicken Giblets with Sponge Gourd"
    },
    "image": "/dishes/vn-long-ga-xao-muop.jpg",
    "category": {
      "vi": "Món Xào",
      "en": "Stir-fry"
    },
    "mealType": [
      "lunch",
      "dinner"
    ],
    "region": "national",
    "diningType": [
      "home_cook"
    ],
    "isPopular": true,
    "popularityScore": 88,
    "dietaryTags": {
      "vi": [
        "Cơm nhà",
        "Dân dã",
        "Thanh mát"
      ],
      "en": [
        "Home Cook",
        "Rustic"
      ]
    },
    "time": "20m",
    "servings": 4,
    "calories": 195,
    "protein": 19,
    "fat": 9,
    "carbs": 9,
    "servingSize": {
      "vi": "1 đĩa (~250g)",
      "en": "1 plate (~250g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia",
      "en": "National Institute of Nutrition"
    },
    "recipeSource": {
      "vi": "Bếp Cơm Mẹ Nấu",
      "en": "Mom's Vietnamese Kitchen"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Lòng mề gà làm sạch",
          "en": "Cleaned chicken giblets"
        },
        "amount": "300g"
      },
      {
        "name": {
          "vi": "Mướp hương thái vát",
          "en": "Sponge gourd sliced"
        },
        "amount": "2 quả"
      },
      {
        "name": {
          "vi": "Giá đỗ sạch",
          "en": "Bean sprouts"
        },
        "amount": "150g"
      },
      {
        "name": {
          "vi": "Hành tím băm, hành hoa, mùi tàu",
          "en": "Shallots, scallions, culantro"
        },
        "amount": "Vừa đủ"
      },
      {
        "name": {
          "vi": "Nước mắm, tiêu đen, dầu ăn",
          "en": "Fish sauce, pepper, oil"
        },
        "amount": "Vừa đủ"
      }
    ],
    "instructions": {
      "vi": [
        "Lòng mề gà bóp muối gừng rửa sạch, khía hoa rồi thái miếng vừa ăn, ướp chút nước mắm tiêu.",
        "Phi thơm hành tím, xào lòng mề trên lửa lớn cho chín giòn sần sật, trút ra đĩa riêng.",
        "Cho mướp hương vào xào chín tới trong 2 phút, thêm giá đỗ đảo nhanh 30 giây.",
        "Trút lòng gà trở lại chảo đảo đều tay, rắc hành hoa và mùi tàu thái nhỏ.",
        "Múc ra đĩa rắc tiêu, ăn nóng ngọt thanh đậm vị đồng quê."
      ],
      "en": [
        "Clean giblets with salt and ginger, score and slice, marinate with fish sauce and pepper.",
        "Sauté shallots, stir-fry giblets over high heat until crunchy-tender; set aside.",
        "Stir-fry sponge gourd for 2 mins, toss in bean sprouts for 30s.",
        "Return giblets to wok, toss with scallions and culantro.",
        "Garnish with pepper and serve hot."
      ]
    }
  },
  {
    "id": "vn-vit-om-sau",
    "title": {
      "vi": "Vịt Om Sấu Nước Cốt Dừa Miền Bắc",
      "en": "Northern Duck Stewed with Dracontomelon (Sấu)"
    },
    "image": "/dishes/vn-vit-om-sau.jpg",
    "category": {
      "vi": "Món Mặn",
      "en": "Savory Dish"
    },
    "mealType": [
      "lunch",
      "dinner"
    ],
    "region": "north",
    "diningType": [
      "home_cook",
      "eat_out"
    ],
    "isPopular": true,
    "popularityScore": 96,
    "dietaryTags": {
      "vi": [
        "Đặc sản Hà Nội",
        "Chua thanh",
        "Ăn kèm bún"
      ],
      "en": [
        "Hanoi Specialty",
        "Tangy Stew"
      ]
    },
    "time": "45m",
    "servings": 4,
    "calories": 390,
    "protein": 27,
    "fat": 28,
    "carbs": 7,
    "servingSize": {
      "vi": "1 nồi om (~450g)",
      "en": "1 stew bowl (~450g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia",
      "en": "National Institute of Nutrition"
    },
    "recipeSource": {
      "vi": "Ẩm thực Hà Nội Phố",
      "en": "Hanoi Street Food Heritage"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Thịt vịt cỏ chặt miếng vừa ăn",
          "en": "Duck meat chopped"
        },
        "amount": "800g"
      },
      {
        "name": {
          "vi": "Quả sấu tươi cạo vỏ",
          "en": "Fresh dracontomelon (sấu)"
        },
        "amount": "8-10 quả"
      },
      {
        "name": {
          "vi": "Khoai sọ luộc sơ bóc vỏ",
          "en": "Taro potatoes"
        },
        "amount": "300g"
      },
      {
        "name": {
          "vi": "Nước dừa tươi",
          "en": "Fresh coconut water"
        },
        "amount": "1 quả (~300ml)"
      },
      {
        "name": {
          "vi": "Sả cây, gừng, hành tím, tỏi, ớt",
          "en": "Lemongrass, ginger, aromatics"
        },
        "amount": "Vừa đủ"
      },
      {
        "name": {
          "vi": "Mùi tàu (ngò gai), rau ngổ",
          "en": "Culantro, rice paddy herb"
        },
        "amount": "1 nắm"
      }
    ],
    "instructions": {
      "vi": [
        "Vịt bóp kỹ rượu gừng khử sạch mùi hôi, chặt miếng vừa ăn, ướp với sả, gừng băm, nước mắm trong 20 phút.",
        "Xào thịt vịt săn lại trên chảo cho tiết bớt mỡ.",
        "Cho vịt vào nồi cùng quả sấu và nước dừa tươi đun sôi, hạ nhỏ lửa om khoảng 20 phút.",
        "Thêm khoai sọ vào om tiếp 15 phút đến khi khoai bở dẻo mềm.",
        "Dùng muôi dầm nát quả sấu để tạo vị chua thanh dịu mát lan tỏa khắp nồi nước om.",
        "Rắc mùi tàu và rau ngổ thái khúc, dùng nóng cùng bún tươi hoặc cơm trắng."
      ],
      "en": [
        "Scrub duck with ginger and rice wine to remove odor; chop into chunks and marinate with lemongrass, aromatics, and fish sauce.",
        "Sear duck pieces in a pot until browned and excess fat renders.",
        "Add fresh sấu fruit and coconut water; bring to a boil and simmer for 20 mins.",
        "Add taro and simmer another 15 mins until tender and creamy.",
        "Crush sấu fruits to release their signature clean tartness into the broth.",
        "Garnish with culantro and rice paddy herb; serve with fresh vermicelli or rice."
      ]
    }
  },
  {
    "id": "vn-vit-nau-chao",
    "title": {
      "vi": "Vịt Nấu Chao Khoai Môn Miền Tây Nam Bộ",
      "en": "Mekong Duck Stewed with Fermented Tofu (Chao)"
    },
    "image": "/dishes/vn-vit-nau-chao.jpg",
    "category": {
      "vi": "Món Mặn",
      "en": "Savory Dish"
    },
    "mealType": [
      "lunch",
      "dinner"
    ],
    "region": "south",
    "diningType": [
      "home_cook",
      "eat_out"
    ],
    "isPopular": true,
    "popularityScore": 94,
    "dietaryTags": {
      "vi": [
        "Đặc sản Miền Tây",
        "Béo ngậy",
        "Đậm đà"
      ],
      "en": [
        "Mekong Specialty",
        "Rich Flavor"
      ]
    },
    "time": "50m",
    "servings": 4,
    "calories": 420,
    "protein": 28,
    "fat": 31,
    "carbs": 10,
    "servingSize": {
      "vi": "1 nồi lẩu/om (~450g)",
      "en": "1 stew bowl (~450g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia",
      "en": "National Institute of Nutrition"
    },
    "recipeSource": {
      "vi": "Ẩm thực Đồng Bằng Sông Cửu Long",
      "en": "Mekong Delta Cuisine"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Thịt vịt xiêm làm sạch chặt miếng",
          "en": "Muscovy duck chopped"
        },
        "amount": "800g"
      },
      {
        "name": {
          "vi": "Chao đỏ và chao trắng tán nhuyễn",
          "en": "Fermented red & white bean curd"
        },
        "amount": "5 viên"
      },
      {
        "name": {
          "vi": "Khoai môn cắt khối chiên sơ",
          "en": "Taro root cubes lightly fried"
        },
        "amount": "300g"
      },
      {
        "name": {
          "vi": "Nước dừa tươi",
          "en": "Coconut water"
        },
        "amount": "500ml"
      },
      {
        "name": {
          "vi": "Rau muống, bún tươi ăn kèm",
          "en": "Water spinach & vermicelli"
        },
        "amount": "Vừa đủ"
      }
    ],
    "instructions": {
      "vi": [
        "Vịt làm sạch khử mùi với rượu gừng, ướp với chao tán nhuyễn, tỏi ớt băm, đường và hạt nêm 30 phút.",
        "Xào thịt vịt săn vàng óng trong nồi trên lửa lớn.",
        "Đổ nước dừa tươi vào nồi ngập thịt, đun sôi rồi hạ nhỏ lửa om 25 phút.",
        "Cho khoai môn đã chiên sơ vào om cùng thêm 10 phút đến khi mềm dẻo ngậy béo.",
        "Dùng như món lẩu nhúng rau muống xanh giòn, ăn kèm bún tươi và chấm nước chao pha tỏi ớt đường chanh."
      ],
      "en": [
        "Clean duck with ginger wine; marinate with mashed fermented bean curd, aromatics, and sugar for 30 mins.",
        "Sear duck pieces in pot until aromatic and golden.",
        "Add fresh coconut water and simmer over low heat for 25 mins.",
        "Add fried taro cubes and simmer 10 mins until creamy and soft.",
        "Serve as a hotpot with water spinach, fresh rice noodles, and seasoned chao dipping sauce."
      ]
    }
  },
  {
    "id": "vn-goi-vit-bap-cai",
    "title": {
      "vi": "Gỏi Vịt Bắp Cải Rau Răm Nước Mắm Gừng",
      "en": "Shredded Duck Cabbage Salad with Ginger Fish Sauce"
    },
    "image": "/dishes/vn-goi-vit-bap-cai.jpg",
    "category": {
      "vi": "Món Cuốn & Trộn",
      "en": "Rolls & Salads"
    },
    "mealType": [
      "lunch",
      "dinner"
    ],
    "region": "national",
    "diningType": [
      "home_cook",
      "eat_out"
    ],
    "isPopular": true,
    "popularityScore": 95,
    "dietaryTags": {
      "vi": [
        "Thanh mát",
        "Món nhắm",
        "Chua ngọt"
      ],
      "en": [
        "Refreshing",
        "Salad",
        "Tangy"
      ]
    },
    "time": "35m",
    "servings": 4,
    "calories": 270,
    "protein": 26,
    "fat": 14,
    "carbs": 9,
    "servingSize": {
      "vi": "1 đĩa gỏi lớn (~350g)",
      "en": "1 large salad plate (~350g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia",
      "en": "National Institute of Nutrition"
    },
    "recipeSource": {
      "vi": "Bếp Cơm & Quán Gỏi Việt",
      "en": "Traditional Salad Masters"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Thịt vịt luộc chín xé phay",
          "en": "Boiled shredded duck meat"
        },
        "amount": "400g"
      },
      {
        "name": {
          "vi": "Bắp cải trắng thái sợi mỏng",
          "en": "Finely shredded white cabbage"
        },
        "amount": "300g"
      },
      {
        "name": {
          "vi": "Cà rốt thái sợi",
          "en": "Julienned carrot"
        },
        "amount": "1 củ"
      },
      {
        "name": {
          "vi": "Rau răm rửa sạch thái rối",
          "en": "Vietnamese coriander"
        },
        "amount": "1 nắm"
      },
      {
        "name": {
          "vi": "Đậu phộng rang giã dập, hành phi",
          "en": "Crushed roasted peanuts & fried shallots"
        },
        "amount": "50g"
      },
      {
        "name": {
          "vi": "Nước mắm gừng tỏi ớt chua ngọt",
          "en": "Sweet spicy ginger dipping sauce"
        },
        "amount": "1 bát"
      }
    ],
    "instructions": {
      "vi": [
        "Bắp cải và cà rốt thái sợi ngâm nước đá lạnh 10 phút cho thật giòn rồi vớt ra vắt ráo.",
        "Pha nước sốt trộn: nước mắm ngon, nước cốt chanh, đường, gừng tươi giã nhuyễn và ớt hiểm đánh tan sánh kẹo.",
        "Cho bắp cải, cà rốt, thịt vịt xé phay và rau răm vào âu lớn.",
        "Rưới 2/3 lượng nước sốt mắm gừng vào bóp trộn nhẹ tay cho ngấm đều gia vị trong 3 phút.",
        "Bày gỏi ra đĩa lớn, rắc đậu phộng rang giã dập và hành phi giòn tan lên trên, chấm thêm nước mắm gừng đậm đà."
      ],
      "en": [
        "Soak shredded cabbage and carrot in ice water for 10 mins for extreme crispiness; drain well.",
        "Whisk fish sauce, lime juice, sugar, finely pounded ginger, and chili into a thick dressing.",
        "Combine cabbage, carrots, shredded duck, and Vietnamese coriander in a large bowl.",
        "Toss gently with dressing until evenly infused.",
        "Mound onto a platter, top with crushed roasted peanuts and crispy fried shallots."
      ]
    }
  },
  {
    "id": "vn-chan-ga-sa-tac",
    "title": {
      "vi": "Chân Gà Ngâm Sả Tắc Chua Cay Giòn Sần Sật",
      "en": "Crunchy Lemongrass Calamansi Pickled Chicken Feet"
    },
    "image": "/dishes/vn-chan-ga-sa-tac.jpg",
    "category": {
      "vi": "Món Mặn",
      "en": "Savory Dish"
    },
    "mealType": [
      "snack",
      "dinner"
    ],
    "region": "national",
    "diningType": [
      "home_cook",
      "eat_out"
    ],
    "isPopular": true,
    "popularityScore": 98,
    "dietaryTags": {
      "vi": [
        "Ăn vặt hot",
        "Món nhắm",
        "Chua cay giòn"
      ],
      "en": [
        "Street Snack",
        "Crunchy",
        "Spicy Sweet"
      ]
    },
    "time": "35m",
    "servings": 4,
    "calories": 210,
    "protein": 20,
    "fat": 10,
    "carbs": 8,
    "servingSize": {
      "vi": "1 đĩa (~250g)",
      "en": "1 plate (~250g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia",
      "en": "National Institute of Nutrition"
    },
    "recipeSource": {
      "vi": "Ẩm thực Ăn Vặt Giới Trẻ",
      "en": "Vietnamese Street Bites"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Chân gà tươi chặt đôi làm sạch",
          "en": "Cleaned chicken feet cut in half"
        },
        "amount": "500g"
      },
      {
        "name": {
          "vi": "Quả tắc (quất) thái lát bỏ hạt",
          "en": "Calamansi sliced and deseeded"
        },
        "amount": "10 quả"
      },
      {
        "name": {
          "vi": "Sả cây thái vát mỏng",
          "en": "Lemongrass sliced diagonally"
        },
        "amount": "5 cây"
      },
      {
        "name": {
          "vi": "Ớt sừng, ớt hiểm thái lát",
          "en": "Red chilies sliced"
        },
        "amount": "4 quả"
      },
      {
        "name": {
          "vi": "Nước mắm, đường, giấm gạo, muối",
          "en": "Fish sauce, sugar, rice vinegar"
        },
        "amount": "Vừa đủ"
      }
    ],
    "instructions": {
      "vi": [
        "Chân gà luộc với gừng, sả và chút muối trong 10-12 phút cho chín tới.",
        "Vớt ngay ra âu nước đá lạnh ngâm 20 phút cho da chân gà giòn sần sật, sau đó để ráo.",
        "Nấu nước ngâm: đun sôi nước mắm, giấm gạo, đường và nước lọc để nguội hoàn toàn.",
        "Trộn chân gà với sả thái vát, lát tắc bỏ hạt, ớt thái lát và gừng sợi trong hũ.",
        "Đổ nước ngâm vào ngập chân gà, để tủ lạnh 2-3 tiếng là ngấm giòn chua cay thơm lừng."
      ],
      "en": [
        "Boil chicken feet with ginger, lemongrass, and salt for 10-12 minutes.",
        "Transfer immediately into ice water for 20 mins to achieve ultimate crunchy texture; drain.",
        "Boil fish sauce, sugar, vinegar, and water; let cool completely.",
        "Combine feet with sliced lemongrass, deseeded calamansi, chilies, and ginger.",
        "Submerge in brine, chill in fridge for 2-3 hours before serving."
      ]
    }
  },
  {
    "id": "vn-ca-ro-phi-ran-gion",
    "title": {
      "vi": "Cá Rô Phi Rán Giòn Chấm Mắm Tỏi Ớt Gừng",
      "en": "Crispy Fried Tilapia with Ginger Garlic Fish Sauce"
    },
    "image": "/dishes/vn-ca-ro-phi-ran-gion.jpg",
    "category": {
      "vi": "Món Mặn",
      "en": "Savory Dish"
    },
    "mealType": [
      "lunch",
      "dinner"
    ],
    "region": "national",
    "diningType": [
      "home_cook"
    ],
    "isPopular": true,
    "popularityScore": 94,
    "dietaryTags": {
      "vi": [
        "Cơm nhà",
        "Dân dã",
        "Giòn tan"
      ],
      "en": [
        "Home Cook",
        "Crispy",
        "Classic"
      ]
    },
    "time": "25m",
    "servings": 4,
    "calories": 260,
    "protein": 28,
    "fat": 15,
    "carbs": 3,
    "servingSize": {
      "vi": "1 con cá chiên (~400g)",
      "en": "1 fish (~400g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia",
      "en": "National Institute of Nutrition"
    },
    "recipeSource": {
      "vi": "Bếp Cơm Mẹ Nấu",
      "en": "Mom's Vietnamese Kitchen"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Cá rô phi tươi sống đánh vảy",
          "en": "Fresh whole tilapia cleaned"
        },
        "amount": "1 con (~800g)"
      },
      {
        "name": {
          "vi": "Gừng tươi, tỏi, ớt giã nhuyễn",
          "en": "Pounded ginger, garlic, chili"
        },
        "amount": "Vừa đủ"
      },
      {
        "name": {
          "vi": "Nước mắm ngon truyền thống",
          "en": "Pure fish sauce"
        },
        "amount": "3 thìa canh"
      },
      {
        "name": {
          "vi": "Nước cốt chanh, đường cát",
          "en": "Lime juice & sugar"
        },
        "amount": "Vừa đủ"
      },
      {
        "name": {
          "vi": "Dầu ăn chiên cá",
          "en": "Cooking oil"
        },
        "amount": "200ml"
      }
    ],
    "instructions": {
      "vi": [
        "Cá rô phi làm sạch, khía vảy chéo hai bên mình cá, xát muối gừng rồi thấm thật khô ráo.",
        "Đun chảo ngập dầu thật nóng già, thả cá vào chiên trên lửa vừa.",
        "Chiên kiên nhẫn đến khi một mặt vàng ruộm giòn tan mới lật mặt kia để cá không bị nát.",
        "Vớt cá ra để ráo dầu trên đĩa có lót giấy thấm.",
        "Pha nước mắm gừng tỏi ớt chua ngọt đậm đà, chấm từng thớ thịt cá trắng giòn ngọt lịm."
      ],
      "en": [
        "Clean whole tilapia, score diagonals on sides, rub with ginger salt, pat bone dry.",
        "Heat oil in skillet until shimmering; slide fish in carefully over medium heat.",
        "Fry patiently without disturbing until the bottom is deeply golden-crisp, then flip.",
        "Drain well on paper towels.",
        "Serve with aromatic ginger-garlic-lime dipping fish sauce."
      ]
    }
  },
  {
    "id": "vn-ca-dieu-hong-hap-xi-dau",
    "title": {
      "vi": "Cá Điêu Hồng Hấp Xì Dầu Hành Gừng",
      "en": "Steamed Red Tilapia with Soy Sauce, Scallions & Ginger"
    },
    "image": "/dishes/vn-ca-dieu-hong-hap-xi-dau.jpg",
    "category": {
      "vi": "Món Mặn",
      "en": "Savory Dish"
    },
    "mealType": [
      "lunch",
      "dinner"
    ],
    "region": "national",
    "diningType": [
      "home_cook",
      "eat_out"
    ],
    "isPopular": true,
    "popularityScore": 95,
    "dietaryTags": {
      "vi": [
        "Thanh đạm",
        "Tốt cho sức khỏe",
        "Nhẹ nhàng"
      ],
      "en": [
        "Steamed",
        "Healthy",
        "Cantonese Style"
      ]
    },
    "time": "30m",
    "servings": 4,
    "calories": 220,
    "protein": 29,
    "fat": 9,
    "carbs": 5,
    "servingSize": {
      "vi": "1 đĩa cá hấp (~450g)",
      "en": "1 plate (~450g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia",
      "en": "National Institute of Nutrition"
    },
    "recipeSource": {
      "vi": "Ẩm thực Hải Sản Tươi Sống",
      "en": "Fresh Seafood Masters"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Cá điêu hồng tươi nguyên con",
          "en": "Fresh red tilapia"
        },
        "amount": "1 con (~800g)"
      },
      {
        "name": {
          "vi": "Gừng tươi cạo vỏ thái chỉ",
          "en": "Julienned ginger"
        },
        "amount": "1 củ to"
      },
      {
        "name": {
          "vi": "Hành lá chẻ sợi, thì là, ngò rí",
          "en": "Curled scallions & cilantro"
        },
        "amount": "1 nắm lớn"
      },
      {
        "name": {
          "vi": "Xì dầu ngon, dầu hào, dầu mè",
          "en": "Soy sauce, oyster sauce, sesame oil"
        },
        "amount": "Vừa đủ"
      },
      {
        "name": {
          "vi": "Dầu ăn đun sôi già để xối",
          "en": "Sizzling hot oil for drizzling"
        },
        "amount": "2 thìa canh"
      }
    ],
    "instructions": {
      "vi": [
        "Cá điêu hồng làm sạch, khía xéo, nhét gừng thái chỉ vào bụng và phủ lên mình cá.",
        "Đặt cá vào đĩa sâu lòng, hấp cách thủy trong xửng 15-18 phút đến khi cá vừa chín tới giữ trọn độ ngọt mọng.",
        "Chắt bỏ phần nước tiết đầu của cá, rưới hỗn hợp xì dầu, dầu hào và chút đường đun nóng lên mình cá.",
        "Phủ kín mặt cá bằng hành lá chẻ sợi và ngò rí.",
        "Đun sôi già 2 thìa canh dầu ăn và dầu mè, xối trực tiếp lên hành gừng xèo xèo dậy hương thơm ngát."
      ],
      "en": [
        "Clean red tilapia, score sides, stuff cavity and top with julienned ginger.",
        "Steam in a heatproof dish for 15-18 minutes until flesh flakes easily.",
        "Drain initial fish water, drizzle seasoned hot soy sauce and oyster sauce blend over fish.",
        "Cover fish generously with shredded scallions and cilantro.",
        "Heat oil and sesame oil until smoking hot; pour sizzling oil directly over scallions."
      ]
    }
  },
  {
    "id": "vn-ca-thu-sot-ca-chua",
    "title": {
      "vi": "Cá Thu Sốt Cà Chua Thì Là Đậm Vị",
      "en": "Pan-seared Mackerel Steaks in Rich Tomato Dill Sauce"
    },
    "image": "/dishes/vn-ca-thu-sot-ca-chua.jpg",
    "category": {
      "vi": "Món Mặn",
      "en": "Savory Dish"
    },
    "mealType": [
      "lunch",
      "dinner"
    ],
    "region": "national",
    "diningType": [
      "home_cook"
    ],
    "isPopular": true,
    "popularityScore": 92,
    "dietaryTags": {
      "vi": [
        "Cơm nhà",
        "Giàu Omega-3",
        "Đậm đà"
      ],
      "en": [
        "Omega-3 Rich",
        "Savory",
        "Home Cook"
      ]
    },
    "time": "25m",
    "servings": 4,
    "calories": 290,
    "protein": 26,
    "fat": 17,
    "carbs": 6,
    "servingSize": {
      "vi": "1 đĩa cá thu (~250g)",
      "en": "1 plate (~250g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia",
      "en": "National Institute of Nutrition"
    },
    "recipeSource": {
      "vi": "Món Ngon Mỗi Ngày",
      "en": "Daily Delicious VN"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Cá thu cắt khúc tươi ngon",
          "en": "Mackerel cutlets"
        },
        "amount": "3 khúc (~500g)"
      },
      {
        "name": {
          "vi": "Cà chua chín đỏ băm nhỏ",
          "en": "Finely chopped tomatoes"
        },
        "amount": "3 quả"
      },
      {
        "name": {
          "vi": "Hành tím băm, hành lá, thì là tươi",
          "en": "Shallots, scallions, fresh dill"
        },
        "amount": "Vừa đủ"
      },
      {
        "name": {
          "vi": "Nước mắm ngon, hạt tiêu, ớt",
          "en": "Fish sauce, black pepper, chili"
        },
        "amount": "Vừa đủ"
      }
    ],
    "instructions": {
      "vi": [
        "Cá thu rửa sạch thấm khô, chiên sơ hai mặt cho se vàng rồi vớt ra.",
        "Phi thơm hành tím, cho cà chua vào xào nhuyễn tạo thành sốt đỏ sánh mịn.",
        "Nêm nước mắm ngon, hạt nêm và chút nước lọc đun sôi sốt cà.",
        "Thả từng khúc cá thu vào rim nhỏ lửa trong sốt khoảng 10 phút, trở mặt cá cho ngấm đều.",
        "Rắc thì là và hành lá thái khúc cùng tiêu xay lên trên, tắt bếp dùng nóng với cơm trắng."
      ],
      "en": [
        "Pat mackerel steaks dry, lightly pan-fry both sides until lightly browned; remove.",
        "Sauté shallots and cook chopped tomatoes until broken down into a rich sauce.",
        "Season sauce with fish sauce, broth powder, and a touch of water.",
        "Add mackerel steaks back to skillet and simmer gently for 10 minutes, basting often.",
        "Garnish with fresh dill, scallions, and cracked pepper before serving."
      ]
    }
  },
  {
    "id": "vn-ca-loc-kho-nghe",
    "title": {
      "vi": "Cá Lóc Đồng Kho Nghệ Tươi Ấm Bụng",
      "en": "Braised Snakehead Fish with Fresh Turmeric"
    },
    "image": "/dishes/vn-ca-loc-kho-nghe.jpg",
    "category": {
      "vi": "Món Mặn",
      "en": "Savory Dish"
    },
    "mealType": [
      "lunch",
      "dinner"
    ],
    "region": "central",
    "diningType": [
      "home_cook"
    ],
    "isPopular": true,
    "popularityScore": 90,
    "dietaryTags": {
      "vi": [
        "Cơm nhà",
        "Ấm bụng",
        "Tốt cho dạ dày"
      ],
      "en": [
        "Healing",
        "Turmeric",
        "Central Vietnam"
      ]
    },
    "time": "35m",
    "servings": 4,
    "calories": 240,
    "protein": 26,
    "fat": 11,
    "carbs": 5,
    "servingSize": {
      "vi": "1 niêu kho (~250g)",
      "en": "1 clay pot (~250g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia",
      "en": "National Institute of Nutrition"
    },
    "recipeSource": {
      "vi": "Ẩm thực Miền Trung",
      "en": "Central Vietnamese Heritage"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Cá lóc đồng làm sạch cắt khúc",
          "en": "Wild snakehead fish cutlets"
        },
        "amount": "600g"
      },
      {
        "name": {
          "vi": "Củ nghệ tươi giã nhuyễn",
          "en": "Pounded fresh turmeric root"
        },
        "amount": "2 củ"
      },
      {
        "name": {
          "vi": "Nước mắm truyền thống, tiêu, ớt hiểm",
          "en": "Fish sauce, pepper, chili"
        },
        "amount": "Vừa đủ"
      },
      {
        "name": {
          "vi": "Hành tím băm, mỡ heo",
          "en": "Minced shallots, pork lard"
        },
        "amount": "Vừa đủ"
      }
    ],
    "instructions": {
      "vi": [
        "Cá lóc xát muối chanh rửa sạch nhớt, cắt khúc dày 2.5cm.",
        "Ướp cá với nghệ tươi giã nhuyễn, nước mắm, hành tím, tiêu và ớt trong 20 phút.",
        "Phi thơm mỡ heo trong niêu đất, xếp cá vào đun lửa lớn cho thịt cá săn lại.",
        "Thêm chút nước sôi xâm xấp, đậy vung kho lửa liu riu 20-25 phút đến khi nước cạn sệt màu vàng nghệ óng ả.",
        "Rắc thêm tiêu hạt đập dập, ăn cùng cơm nóng rất lành bụng và bổ dưỡng."
      ],
      "en": [
        "Clean snakehead fish thoroughly with lime and salt, cut into 2.5cm steaks.",
        "Marinate with freshly crushed turmeric, fish sauce, shallots, and chili for 20 mins.",
        "Heat pork lard in a clay pot, arrange fish steaks and sear over medium-high heat.",
        "Pour in hot water to cover halfway, simmer covered on low for 20-25 mins until sauce is reduced to a golden glaze.",
        "Finish with cracked black pepper; soothing and highly comforting with steamed rice."
      ]
    }
  },
  {
    "id": "vn-ca-tre-kho-gung",
    "title": {
      "vi": "Cá Trê Đồng Kho Gừng Ớt Dân Dã",
      "en": "Rustic Braised Catfish with Ginger and Chili"
    },
    "image": "/dishes/vn-ca-tre-kho-gung.jpg",
    "category": {
      "vi": "Món Mặn",
      "en": "Savory Dish"
    },
    "mealType": [
      "lunch",
      "dinner"
    ],
    "region": "national",
    "diningType": [
      "home_cook"
    ],
    "isPopular": false,
    "popularityScore": 85,
    "dietaryTags": {
      "vi": [
        "Dân dã",
        "Đậm đà",
        "Ấm áp"
      ],
      "en": [
        "Rustic",
        "Warming",
        "Traditional"
      ]
    },
    "time": "40m",
    "servings": 4,
    "calories": 270,
    "protein": 24,
    "fat": 16,
    "carbs": 4,
    "servingSize": {
      "vi": "1 đĩa cá kho (~250g)",
      "en": "1 plate (~250g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia",
      "en": "National Institute of Nutrition"
    },
    "recipeSource": {
      "vi": "Bếp Quê Đồng Nội",
      "en": "Countryside Vietnamese Kitchen"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Cá trê đồng làm sạch nhớt",
          "en": "Cleaned freshwater catfish"
        },
        "amount": "600g"
      },
      {
        "name": {
          "vi": "Gừng già đập dập và thái sợi",
          "en": "Old ginger crushed & shredded"
        },
        "amount": "2 củ"
      },
      {
        "name": {
          "vi": "Nước hàng, nước mắm, tiêu sọ, ớt hiểm",
          "en": "Caramel sauce, fish sauce, peppercorns, chili"
        },
        "amount": "Vừa đủ"
      }
    ],
    "instructions": {
      "vi": [
        "Cá trê dội nước sôi cạo sạch nhớt trắng, xát muối giấm, cắt khúc.",
        "Ướp cá với gừng giã, nước mắm ngon, nước hàng và ớt trong 20 phút.",
        "Lót lớp gừng thái sợi dưới đáy nồi, xếp cá lên trên, đun săn trên lửa lớn.",
        "Đổ nước sôi xâm xấp mặt cá, hạ nhỏ lửa kho liu riu 30 phút đến khi thịt cá săn chắc, nước sánh đặc thơm nức mùi gừng cay.",
        "Ăn nóng cùng cơm gạo mới và đĩa rau luộc."
      ],
      "en": [
        "Clean catfish with hot water and vinegar to remove slime; slice into pieces.",
        "Marinate with pounded ginger, fish sauce, caramel coloring, and chili.",
        "Layer shredded ginger at the base of the pot, arrange fish on top, and sear.",
        "Add boiling water and simmer gently for 30 minutes until fish is firm and glazed in spicy ginger sauce.",
        "Serve hot with steamed rice and boiled vegetables."
      ]
    }
  },
  {
    "id": "vn-ca-com-rim-lac",
    "title": {
      "vi": "Cá Cơm Khô Rim Lạc Mặn Ngọt Giòn Tan",
      "en": "Crispy Sweet & Savory Dried Anchovies with Roasted Peanuts"
    },
    "image": "/dishes/vn-ca-com-rim-lac.jpg",
    "category": {
      "vi": "Món Mặn",
      "en": "Savory Dish"
    },
    "mealType": [
      "lunch",
      "dinner",
      "snack"
    ],
    "region": "national",
    "diningType": [
      "home_cook"
    ],
    "isPopular": true,
    "popularityScore": 91,
    "dietaryTags": {
      "vi": [
        "Cơm nhà",
        "Giòn rụm",
        "Để được lâu"
      ],
      "en": [
        "Crispy",
        "Long Shelf Life",
        "Pantry Staple"
      ]
    },
    "time": "20m",
    "servings": 6,
    "calories": 230,
    "protein": 21,
    "fat": 13,
    "carbs": 8,
    "servingSize": {
      "vi": "1 hũ nhỏ (~150g)",
      "en": "1 portion (~150g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia",
      "en": "National Institute of Nutrition"
    },
    "recipeSource": {
      "vi": "Bếp Cơm Gia Đình",
      "en": "Vietnamese Pantry Delights"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Cá cơm khô loại nhỏ",
          "en": "Dried baby anchovies"
        },
        "amount": "150g"
      },
      {
        "name": {
          "vi": "Lạc (đậu phộng) rang giòn",
          "en": "Crispy roasted peanuts"
        },
        "amount": "100g"
      },
      {
        "name": {
          "vi": "Tỏi băm, ớt băm",
          "en": "Minced garlic & chili"
        },
        "amount": "1 thìa canh"
      },
      {
        "name": {
          "vi": "Nước mắm, đường, tương ớt, giấm",
          "en": "Fish sauce, sugar, chili paste, vinegar"
        },
        "amount": "Vừa đủ"
      }
    ],
    "instructions": {
      "vi": [
        "Cá cơm rửa nhanh qua nước ấm vắt ráo, chiên sơ với dầu ăn cho vàng giòn rụm rồi vớt ra.",
        "Lạc rang chín giòn xát sạch vỏ lụa.",
        "Phi thơm tỏi ớt, cho hỗn hợp nước mắm, đường, tương ớt và giấm vào đun sôi keo lại.",
        "Trút cá cơm và lạc rang vào chảo đảo thật nhanh tay trên lửa nhỏ đến khi sốt keo bám đều từng con cá và hạt lạc khô ráo giòn tan.",
        "Để nguội cất hũ kín ăn dần với cơm trắng hoặc cháo hoa."
      ],
      "en": [
        "Rinse dried anchovies, drain well, and fry in oil until golden-crisp; remove.",
        "Roast peanuts until crunchy, rub away skins.",
        "Sauté garlic and chili; simmer fish sauce, sugar, chili paste, and vinegar into a sticky glaze.",
        "Toss fried anchovies and roasted peanuts vigorously over low heat until evenly coated and dry.",
        "Cool and store in airtight jars to eat with rice or rice congee."
      ]
    }
  },
  {
    "id": "vn-ca-hoi-ap-chao-chanh-leo",
    "title": {
      "vi": "Cá Hồi Áp Chảo Sốt Chanh Leo Thanh Mát",
      "en": "Pan-seared Salmon Fillet in Passion Fruit Sauce"
    },
    "image": "/dishes/vn-ca-hoi-ap-chao-chanh-leo.jpg",
    "category": {
      "vi": "Món Mặn",
      "en": "Savory Dish"
    },
    "mealType": [
      "lunch",
      "dinner"
    ],
    "region": "national",
    "diningType": [
      "home_cook",
      "eat_out"
    ],
    "isPopular": true,
    "popularityScore": 93,
    "dietaryTags": {
      "vi": [
        "Hiện đại",
        "Giàu Omega-3",
        "Chua ngọt thanh"
      ],
      "en": [
        "Modern",
        "Healthy",
        "Omega-3"
      ]
    },
    "time": "20m",
    "servings": 2,
    "calories": 340,
    "protein": 30,
    "fat": 20,
    "carbs": 8,
    "servingSize": {
      "vi": "1 phần cá hồi (~200g)",
      "en": "1 serving (~200g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia",
      "en": "National Institute of Nutrition"
    },
    "recipeSource": {
      "vi": "Bếp Hiện Đại",
      "en": "Modern Vietnamese Cuisine"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Phi lê cá hồi tươi còn da",
          "en": "Fresh salmon fillet with skin"
        },
        "amount": "350g"
      },
      {
        "name": {
          "vi": "Chanh leo vắt lấy nước cốt",
          "en": "Fresh passion fruit juice"
        },
        "amount": "3 quả"
      },
      {
        "name": {
          "vi": "Bơ lạt",
          "en": "Butter"
        },
        "amount": "20g"
      },
      {
        "name": {
          "vi": "Mật ong hoặc đường, muối tiêu",
          "en": "Honey, salt, pepper"
        },
        "amount": "Vừa đủ"
      },
      {
        "name": {
          "vi": "Măng tây hoặc súp lơ xào ăn kèm",
          "en": "Asparagus side"
        },
        "amount": "100g"
      }
    ],
    "instructions": {
      "vi": [
        "Cá hồi thấm thật khô, ướp chút muối tiêu và dầu ô-liu trong 10 phút.",
        "Đặt chảo lên bếp đun nóng, áp chảo cá hồi mặt da xuống trước trong 3-4 phút cho da giòn rụm, lật mặt kia áp chảo thêm 2 phút.",
        "Đun nhỏ lửa nước cốt chanh leo với đường/mật ong và bơ lạt đến khi sốt sánh bóng màu vàng cam.",
        "Rưới sốt chanh leo chua ngọt thơm ngát lên trên miếng cá hồi áp chảo.",
        "Thưởng thức nóng kèm măng tây xào bơ tỏi."
      ],
      "en": [
        "Pat salmon dry, season with salt, pepper, and olive oil for 10 mins.",
        "Sear skin-side down in a hot pan for 3-4 mins until skin is ultra-crisp; flip and cook 2 mins more.",
        "Simmer passion fruit juice with honey and butter into a silky, vibrant orange sauce.",
        "Spoon tangy sweet passion fruit glaze over the seared salmon.",
        "Serve hot alongside buttered asparagus."
      ]
    }
  },
  {
    "id": "vn-tom-hap-bia-sa",
    "title": {
      "vi": "Tôm Sú Hấp Bia Sả Gừng Ngọt Đậm Tự Nhiên",
      "en": "Steamed Tiger Prawns with Beer, Lemongrass & Ginger"
    },
    "image": "/dishes/vn-tom-hap-bia-sa.jpg",
    "category": {
      "vi": "Món Mặn",
      "en": "Savory Dish"
    },
    "mealType": [
      "lunch",
      "dinner"
    ],
    "region": "national",
    "diningType": [
      "home_cook",
      "eat_out"
    ],
    "isPopular": true,
    "popularityScore": 97,
    "dietaryTags": {
      "vi": [
        "Hải sản tươi",
        "Thanh ngọt tự nhiên",
        "Dễ làm"
      ],
      "en": [
        "Seafood",
        "Easy",
        "Juicy Prawns"
      ]
    },
    "time": "15m",
    "servings": 4,
    "calories": 180,
    "protein": 28,
    "fat": 3,
    "carbs": 4,
    "servingSize": {
      "vi": "1 đĩa tôm (~350g)",
      "en": "1 plate (~350g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia",
      "en": "National Institute of Nutrition"
    },
    "recipeSource": {
      "vi": "Ẩm thực Hải Sản Việt",
      "en": "Coastal Seafood Heritage"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Tôm sú tươi sống",
          "en": "Live tiger prawns"
        },
        "amount": "500g"
      },
      {
        "name": {
          "vi": "Bia tươi hoặc lon bia",
          "en": "Beer"
        },
        "amount": "1/2 lon (~150ml)"
      },
      {
        "name": {
          "vi": "Sả cây đập dập cắt khúc",
          "en": "Lemongrass bruised"
        },
        "amount": "4 cây"
      },
      {
        "name": {
          "vi": "Gừng tươi thái lát, lá chanh",
          "en": "Sliced ginger, lime leaves"
        },
        "amount": "Vừa đủ"
      },
      {
        "name": {
          "vi": "Muối ớt chanh hoặc muối tiêu chanh chấm kèm",
          "en": "Green chili salt or lime pepper salt"
        },
        "amount": "1 đĩa nhỏ"
      }
    ],
    "instructions": {
      "vi": [
        "Tôm rửa sạch, cắt bớt râu và ngạnh nhọn, rút chỉ lưng.",
        "Lót lớp sả đập dập, gừng lát và lá chanh dưới đáy nồi hấp.",
        "Xếp tôm lên trên, đổ 1/2 lon bia vào nồi, đậy kín nắp.",
        "Đun sôi trên lửa lớn hấp trong 6-8 phút đến khi tôm chuyển màu đỏ au cong đều là chín tới.",
        "Gắp ra đĩa dùng nóng ngay, chấm muối ớt chanh hoặc muối tiêu chanh vị ngọt lịm đậm đà."
      ],
      "en": [
        "Trim whiskers and devein prawns; rinse well.",
        "Layer bruised lemongrass, ginger, and lime leaves at the base of the pot.",
        "Place prawns on top, pour in half a can of beer, cover tightly.",
        "Steam over high heat for 6-8 mins until prawns turn vibrant orange and curled.",
        "Serve hot with spicy green chili salt or pepper lime dip."
      ]
    }
  },
  {
    "id": "vn-tom-rang-muoi-ot",
    "title": {
      "vi": "Tôm Rang Muối Ớt Hồng Kông Giòn Rụm",
      "en": "Crispy Salt and Pepper Chili Tossed Prawns"
    },
    "image": "/dishes/vn-tom-rang-muoi-ot.jpg",
    "category": {
      "vi": "Món Mặn",
      "en": "Savory Dish"
    },
    "mealType": [
      "lunch",
      "dinner"
    ],
    "region": "national",
    "diningType": [
      "home_cook",
      "eat_out"
    ],
    "isPopular": true,
    "popularityScore": 92,
    "dietaryTags": {
      "vi": [
        "Giòn rụm cả vỏ",
        "Món nhắm",
        "Đậm vị"
      ],
      "en": [
        "Crispy Shell",
        "Savory Spicy"
      ]
    },
    "time": "20m",
    "servings": 4,
    "calories": 240,
    "protein": 26,
    "fat": 12,
    "carbs": 6,
    "servingSize": {
      "vi": "1 đĩa (~300g)",
      "en": "1 plate (~300g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia",
      "en": "National Institute of Nutrition"
    },
    "recipeSource": {
      "vi": "Ẩm thực Hải Sản Quán",
      "en": "Vietnamese Seafood Eateries"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Tôm thẻ tươi",
          "en": "Fresh white prawns"
        },
        "amount": "500g"
      },
      {
        "name": {
          "vi": "Bột muối rang hải sản",
          "en": "Seafood spiced salt mix"
        },
        "amount": "2 thìa canh"
      },
      {
        "name": {
          "vi": "Tỏi băm, ớt sừng băm, hành hoa",
          "en": "Garlic, red chili, scallions"
        },
        "amount": "Vừa đủ"
      },
      {
        "name": {
          "vi": "Bột chiên giòn",
          "en": "Crispy batter flour"
        },
        "amount": "2 thìa canh"
      },
      {
        "name": {
          "vi": "Dầu ăn",
          "en": "Cooking oil"
        },
        "amount": "200ml"
      }
    ],
    "instructions": {
      "vi": [
        "Tôm làm sạch thấm khô, áo đều một lớp mỏng bột chiên giòn.",
        "Chiên tôm ngập dầu nóng già trong 2-3 phút cho vỏ tôm giòn rụm màu đỏ hồng rồi vớt ra ráo dầu.",
        "Phi thơm tỏi băm, ớt băm và hành hoa trong chảo khô ráo không đọng dầu.",
        "Trút tôm chiên giòn và bột muối rang vào xóc đều tay trên lửa vừa cho muối bám đều khắp vỏ tôm.",
        "Bày ra đĩa ăn nóng, vỏ tôm giòn rụm thơm lừng vị mặn cay hấp dẫn."
      ],
      "en": [
        "Clean and dry prawns; lightly coat in crispy flour.",
        "Flash-fry in hot oil for 2-3 mins until shells are deeply crispy; drain well.",
        "Sauté minced garlic, chili, and scallions in a dry wok.",
        "Toss prawns and spiced salt mix vigorously over medium heat until evenly crusted.",
        "Serve hot, crunchy enough to eat shell and all."
      ]
    }
  },
  {
    "id": "vn-tom-sot-me",
    "title": {
      "vi": "Tôm Sú Sốt Me Chua Cay Mặn Ngọt",
      "en": "Tiger Prawns in Sweet & Sour Tamarind Sauce"
    },
    "image": "/dishes/vn-tom-sot-me.jpg",
    "category": {
      "vi": "Món Mặn",
      "en": "Savory Dish"
    },
    "mealType": [
      "lunch",
      "dinner"
    ],
    "region": "national",
    "diningType": [
      "home_cook"
    ],
    "isPopular": true,
    "popularityScore": 94,
    "dietaryTags": {
      "vi": [
        "Cơm nhà",
        "Chua ngọt đậm đà",
        "Hao cơm"
      ],
      "en": [
        "Tamarind Glaze",
        "Savory Sweet"
      ]
    },
    "time": "20m",
    "servings": 4,
    "calories": 250,
    "protein": 25,
    "fat": 10,
    "carbs": 14,
    "servingSize": {
      "vi": "1 đĩa (~300g)",
      "en": "1 plate (~300g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia",
      "en": "National Institute of Nutrition"
    },
    "recipeSource": {
      "vi": "Bếp Gia Đình Việt",
      "en": "Vietnamese Family Kitchen"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Tôm sú hoặc tôm càng",
          "en": "Tiger prawns"
        },
        "amount": "500g"
      },
      {
        "name": {
          "vi": "Nước cốt me chua",
          "en": "Tamarind pulp juice"
        },
        "amount": "4 thìa canh"
      },
      {
        "name": {
          "vi": "Đường thốt nốt hoặc đường cát",
          "en": "Palm sugar / sugar"
        },
        "amount": "3 thìa canh"
      },
      {
        "name": {
          "vi": "Nước mắm ngon, tỏi ớt băm",
          "en": "Fish sauce, garlic, chili"
        },
        "amount": "Vừa đủ"
      }
    ],
    "instructions": {
      "vi": [
        "Tôm làm sạch, chiên áp chảo sơ cho vỏ tôm săn đỏ cam.",
        "Khuấy đều nước cốt me, đường, nước mắm và chút tương ớt thành sốt sánh chua ngọt vừa miệng.",
        "Phi thơm tỏi ớt băm, đổ sốt me vào đun sôi sủi bọt sánh mịn.",
        "Cho tôm vào đảo đều trên lửa nhỏ cho sốt me ngấm sâu vào từng con tôm.",
        "Rắc hành lá và đậu phộng rang giã nhỏ lên trên, ăn cùng cơm nóng rất đưa cơm."
      ],
      "en": [
        "Clean prawns and pan-sear until shells turn bright orange.",
        "Whisk tamarind extract with sugar, fish sauce, and chili sauce into a balanced glaze.",
        "Sauté garlic and chili, add tamarind glaze and bring to a simmer.",
        "Toss prawns in glaze over low heat until generously coated.",
        "Top with scallions and crushed peanuts, serve hot with rice."
      ]
    }
  },
  {
    "id": "vn-muc-hap-gung",
    "title": {
      "vi": "Mực Ống Hấp Gừng Hành Chấm Mắm Gừng",
      "en": "Steamed Fresh Squid with Ginger & Scallions"
    },
    "image": "/dishes/vn-muc-hap-gung.jpg",
    "category": {
      "vi": "Món Mặn",
      "en": "Savory Dish"
    },
    "mealType": [
      "lunch",
      "dinner"
    ],
    "region": "national",
    "diningType": [
      "home_cook",
      "eat_out"
    ],
    "isPopular": true,
    "popularityScore": 96,
    "dietaryTags": {
      "vi": [
        "Hải sản tươi",
        "Giòn ngọt",
        "Nhanh gọn"
      ],
      "en": [
        "Seafood",
        "Fresh & Sweet",
        "Quick"
      ]
    },
    "time": "15m",
    "servings": 4,
    "calories": 170,
    "protein": 27,
    "fat": 3,
    "carbs": 4,
    "servingSize": {
      "vi": "1 đĩa mực (~350g)",
      "en": "1 plate (~350g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia",
      "en": "National Institute of Nutrition"
    },
    "recipeSource": {
      "vi": "Ẩm thực Miền Biển",
      "en": "Vietnamese Coastal Kitchen"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Mực ống tươi dày mình",
          "en": "Fresh tube squid"
        },
        "amount": "600g"
      },
      {
        "name": {
          "vi": "Gừng tươi thái sợi nhiều",
          "en": "Generous shredded ginger"
        },
        "amount": "2 củ"
      },
      {
        "name": {
          "vi": "Hành lá cắt khúc dài",
          "en": "Scallions cut in batons"
        },
        "amount": "1 nắm"
      },
      {
        "name": {
          "vi": "Ớt sừng đỏ thái lát",
          "en": "Red chili sliced"
        },
        "amount": "2 quả"
      },
      {
        "name": {
          "vi": "Nước mắm gừng chua ngọt chấm kèm",
          "en": "Ginger dipping sauce"
        },
        "amount": "1 bát"
      }
    ],
    "instructions": {
      "vi": [
        "Mực ống làm sạch túi mực, khía vảy rồng nhẹ hoặc để nguyên con.",
        "Xếp lớp gừng sợi và hành lá cắt khúc lên đĩa chịu nhiệt, đặt mực lên trên, rải thêm gừng và ớt sừng lên mặt mực.",
        "Hấp cách thủy trên lửa lớn trong 8-10 phút đến khi mực căng mọng giòn sần sật, không hấp quá lâu sẽ bị dai xác.",
        "Lấy mực ra, cắt khoanh vừa ăn nếu để nguyên con.",
        "Thưởng thức ngay khi còn nóng hổi, chấm đẫm nước mắm gừng ớt cay nồng đậm đà."
      ],
      "en": [
        "Clean squids, remove ink sacs, score diamond pattern.",
        "Arrange bed of scallions and shredded ginger on plate, top with squid, chili, and more ginger.",
        "Steam over high heat for 8-10 minutes until squid is plump and tender-crisp.",
        "Slice into rings if whole.",
        "Serve hot with fiery sweet ginger fish sauce."
      ]
    }
  },
  {
    "id": "vn-muc-chien-mam",
    "title": {
      "vi": "Mực Chiên Nước Mắm Ớt Giòn Dai Đậm Đà",
      "en": "Crispy Fried Squid with Spicy Fish Sauce Glaze"
    },
    "image": "/dishes/vn-muc-chien-mam.jpg",
    "category": {
      "vi": "Món Mặn",
      "en": "Savory Dish"
    },
    "mealType": [
      "lunch",
      "dinner"
    ],
    "region": "national",
    "diningType": [
      "home_cook",
      "eat_out"
    ],
    "isPopular": true,
    "popularityScore": 95,
    "dietaryTags": {
      "vi": [
        "Món nhắm",
        "Món khoái khẩu",
        "Cay mặn đậm vị"
      ],
      "en": [
        "Savory",
        "Crispy Chewy",
        "Popular"
      ]
    },
    "time": "25m",
    "servings": 4,
    "calories": 270,
    "protein": 25,
    "fat": 14,
    "carbs": 9,
    "servingSize": {
      "vi": "1 đĩa (~300g)",
      "en": "1 plate (~300g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia",
      "en": "National Institute of Nutrition"
    },
    "recipeSource": {
      "vi": "Quán Ngon Sài Gòn",
      "en": "Saigon Seafood Kitchen"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Mực lá hoặc mực ống",
          "en": "Squid"
        },
        "amount": "500g"
      },
      {
        "name": {
          "vi": "Nước mắm ngon",
          "en": "Fish sauce"
        },
        "amount": "2.5 thìa canh"
      },
      {
        "name": {
          "vi": "Đường cát, tương ớt",
          "en": "Sugar, chili sauce"
        },
        "amount": "2 thìa canh"
      },
      {
        "name": {
          "vi": "Tỏi băm, ớt hiểm băm, hành tây",
          "en": "Garlic, chili, onion"
        },
        "amount": "Vừa đủ"
      },
      {
        "name": {
          "vi": "Bột bắp áo mực",
          "en": "Cornstarch"
        },
        "amount": "2 thìa canh"
      }
    ],
    "instructions": {
      "vi": [
        "Mực làm sạch, khía vảy rồng, cắt miếng vừa ăn, thấm khô nước rồi xóc qua lớp mỏng bột bắp.",
        "Chiên mực trong dầu nóng thật nhanh 2-3 phút cho giòn vàng, vớt ra thấm dầu.",
        "Phi thơm tỏi ớt băm, cho hỗn hợp nước mắm, đường, tương ớt vào đun sôi kẹo lại.",
        "Cho mực chiên và hành tây thái múi cau vào đảo thật nhanh tay trên lửa lớn cho sốt mắm áo bóng đều quanh từng miếng mực.",
        "Múc ra đĩa ăn kèm dưa leo và rau răm, nhâm nhi cùng bạn bè rất tuyệt."
      ],
      "en": [
        "Clean squid, score crosswise, cut into chunks, dry and toss in cornstarch.",
        "Flash-fry in hot oil for 2-3 mins until golden-crisp; drain.",
        "Sauté garlic and chili; bring fish sauce, sugar, and chili sauce to a bubbly glaze.",
        "Toss squid and onion wedges vigorously in glaze over high heat for 1 min.",
        "Serve hot with cucumber and Vietnamese coriander."
      ]
    }
  },
  {
    "id": "vn-ngao-hap-sa-dua",
    "title": {
      "vi": "Ngao Hấp Sả Dứa Ớt Cay Ấm Nồng",
      "en": "Steamed Clams with Lemongrass, Pineapple & Chili"
    },
    "image": "/dishes/vn-ngao-hap-sa-dua.jpg",
    "category": {
      "vi": "Món Mặn",
      "en": "Savory Dish"
    },
    "mealType": [
      "lunch",
      "dinner",
      "snack"
    ],
    "region": "national",
    "diningType": [
      "home_cook",
      "eat_out"
    ],
    "isPopular": true,
    "popularityScore": 97,
    "dietaryTags": {
      "vi": [
        "Hải sản",
        "Nước ngọt lịm",
        "Ấm bụng"
      ],
      "en": [
        "Steamed Clams",
        "Sweet Broth",
        "Quick"
      ]
    },
    "time": "15m",
    "servings": 4,
    "calories": 140,
    "protein": 20,
    "fat": 2,
    "carbs": 8,
    "servingSize": {
      "vi": "1 tô lớn (~500g cả vỏ)",
      "en": "1 bowl (~500g with shell)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia",
      "en": "National Institute of Nutrition"
    },
    "recipeSource": {
      "vi": "Ẩm thực Ốc Hà Nội & Sài Gòn",
      "en": "Vietnamese Clam & Snail Culture"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Ngao trắng ngâm sạch cát",
          "en": "White clams soaked clean"
        },
        "amount": "1kg"
      },
      {
        "name": {
          "vi": "Dứa chín thái lát mỏng",
          "en": "Pineapple slices"
        },
        "amount": "1/4 quả"
      },
      {
        "name": {
          "vi": "Sả cây đập dập cắt khúc",
          "en": "Lemongrass bruised"
        },
        "amount": "4 cây"
      },
      {
        "name": {
          "vi": "Ớt hiểm, rau răm, nước mắm",
          "en": "Hot chilies, Vietnamese coriander, fish sauce"
        },
        "amount": "Vừa đủ"
      }
    ],
    "instructions": {
      "vi": [
        "Ngao ngâm nước vo gạo và ớt cắt lát 1-2 tiếng cho nhả sạch hết cát bẩn, rửa lại thật sạch.",
        "Lót sả đập dập và dứa thái lát dưới đáy nồi, cho ngao lên trên.",
        "Thêm ớt cắt lát, 1 thìa cà phê đường, 1 thìa nước mắm và chỉ cần thêm 50ml nước (vì ngao tự tiết ra rất nhiều nước ngọt).",
        "Đậy vung đun sôi lửa lớn trong 4-5 phút đến khi tất cả ngao há miệng đều là tắt bếp ngay.",
        "Rắc rau răm thái nhỏ, múc ra tô húp nước ngọt thanh ấm nồng."
      ],
      "en": [
        "Purge clams in water with chili slices for 1-2 hours to release sand; rinse.",
        "Layer bruised lemongrass and pineapple at bottom of pot; add clams on top.",
        "Add sliced chili, a dash of fish sauce and sugar, and just 50ml water (clams release natural sweet broth).",
        "Cover tightly and boil on high for 4-5 mins until shells open wide; remove from heat.",
        "Garnish with culantro or Vietnamese coriander; sip the naturally sweet, tangy broth hot."
      ]
    }
  },
  {
    "id": "vn-so-huyet-xao-toi",
    "title": {
      "vi": "Sò Huyết Xào Tỏi Mỡ Hành Tóp Mỡ",
      "en": "Garlic Butter Stir-fried Blood Cockles"
    },
    "image": "/dishes/vn-so-huyet-xao-toi.jpg",
    "category": {
      "vi": "Món Mặn",
      "en": "Savory Dish"
    },
    "mealType": [
      "dinner",
      "snack"
    ],
    "region": "south",
    "diningType": [
      "home_cook",
      "eat_out"
    ],
    "isPopular": true,
    "popularityScore": 93,
    "dietaryTags": {
      "vi": [
        "Bổ máu",
        "Đặc sản quán ốc",
        "Mỡ hành tóp mỡ"
      ],
      "en": [
        "Iron Rich",
        "Street Food",
        "Garlic Butter"
      ]
    },
    "time": "20m",
    "servings": 4,
    "calories": 220,
    "protein": 19,
    "fat": 13,
    "carbs": 6,
    "servingSize": {
      "vi": "1 đĩa (~350g)",
      "en": "1 plate (~350g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia",
      "en": "National Institute of Nutrition"
    },
    "recipeSource": {
      "vi": "Quán Ốc Sài Gòn",
      "en": "Saigon Street Shellfish"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Sò huyết tươi sống",
          "en": "Fresh blood cockles"
        },
        "amount": "800g"
      },
      {
        "name": {
          "vi": "Tỏi tép băm nhiều",
          "en": "Generous minced garlic"
        },
        "amount": "2 củ"
      },
      {
        "name": {
          "vi": "Tóp mỡ giòn",
          "en": "Crispy pork cracklings"
        },
        "amount": "50g"
      },
      {
        "name": {
          "vi": "Bơ thơm, nước mắm, tiêu",
          "en": "Butter, fish sauce, pepper"
        },
        "amount": "Vừa đủ"
      },
      {
        "name": {
          "vi": "Rau răm rửa sạch",
          "en": "Vietnamese coriander"
        },
        "amount": "1 nắm"
      }
    ],
    "instructions": {
      "vi": [
        "Sò huyết chà sạch bùn đất bên ngoài vỏ, rửa lại nhiều lần với nước.",
        "Phi thơm ngập tỏi băm trong chảo với dầu ăn và bơ cho tỏi vàng giòn rụm, vớt 1/2 lượng tỏi phi ra đĩa riêng.",
        "Trút sò huyết vào chảo đảo thật nhanh tay trên lửa lớn trong 2-3 phút cho sò vừa hé miệng.",
        "Nêm chút nước mắm ngon, hạt nêm và trút tóp mỡ giòn vào xóc đều tay.",
        "Múc ra đĩa rải tỏi phi giòn và tiêu đen lên trên, ăn kèm rau răm chấm muối tiêu chanh."
      ],
      "en": [
        "Scrub cockle shells clean of mud; rinse several times.",
        "Fry minced garlic in oil and butter until deeply golden and crispy; reserve half.",
        "Add blood cockles to the pan and toss vigorously over high heat for 2-3 mins until barely cracked open.",
        "Season with fish sauce, pepper, and toss in crispy pork cracklings.",
        "Plate, scatter crispy garlic over, and serve with Vietnamese coriander and lime salt."
      ]
    }
  },
  {
    "id": "vn-oc-buou-xao-sa-ot",
    "title": {
      "vi": "Ốc Bươu Xào Sả Ớt Lá Lốt Giòn Cay",
      "en": "Stir-fried Apple Snails with Lemongrass, Chili & Lolot Leaves"
    },
    "image": "/dishes/vn-oc-buou-xao-sa-ot.jpg",
    "category": {
      "vi": "Món Mặn",
      "en": "Savory Dish"
    },
    "mealType": [
      "lunch",
      "dinner",
      "snack"
    ],
    "region": "national",
    "diningType": [
      "home_cook",
      "eat_out"
    ],
    "isPopular": true,
    "popularityScore": 91,
    "dietaryTags": {
      "vi": [
        "Dân dã",
        "Món nhắm",
        "Giòn sần sật"
      ],
      "en": [
        "Crunchy",
        "Spicy",
        "Savory"
      ]
    },
    "time": "25m",
    "servings": 4,
    "calories": 190,
    "protein": 22,
    "fat": 8,
    "carbs": 6,
    "servingSize": {
      "vi": "1 đĩa ốc (~300g)",
      "en": "1 plate (~300g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia",
      "en": "National Institute of Nutrition"
    },
    "recipeSource": {
      "vi": "Món Đồng Quê Dân Dã",
      "en": "Countryside Vietnamese Bites"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Thịt ốc bươu bóp muối giấm",
          "en": "Cleaned apple snail meat"
        },
        "amount": "400g"
      },
      {
        "name": {
          "vi": "Sả băm và sả thái vát",
          "en": "Lemongrass minced & sliced"
        },
        "amount": "4 cây"
      },
      {
        "name": {
          "vi": "Lá lốt thái sợi",
          "en": "Piper lolot leaves shredded"
        },
        "amount": "10 lá"
      },
      {
        "name": {
          "vi": "Ớt hiểm, tỏi, nước mắm",
          "en": "Hot chilies, garlic, fish sauce"
        },
        "amount": "Vừa đủ"
      }
    ],
    "instructions": {
      "vi": [
        "Thịt ốc bươu bóp kỹ muối hạt và nước cốt chanh cho sạch nhớt đen, rửa sạch rồi trần sơ nước sôi.",
        "Phi thơm tỏi, sả và ớt trong chảo dầu nóng.",
        "Trút thịt ốc vào xào săn trên lửa lớn trong 3 phút để ốc giữ độ giòn sần sật không bị dai.",
        "Nêm nước mắm ngon, hạt nêm và chút ớt bột cho vị cay mặn đậm đà.",
        "Cho lá lốt thái sợi vào đảo nhanh 30 giây dậy mùi thơm nồng rồi trút ra đĩa dùng nóng."
      ],
      "en": [
        "Scrub snail meat with coarse salt and lime juice to remove slime; blanch briefly.",
        "Sauté garlic, lemongrass, and chilies until fragrant.",
        "Add snail meat and stir-fry briskly over high heat for 3 mins to retain crisp crunch.",
        "Season with fish sauce, chili flakes, and broth powder.",
        "Toss in shredded lolot leaves for 30 seconds and serve piping hot."
      ]
    }
  },
  {
    "id": "vn-canh-muop-nau-lac",
    "title": {
      "vi": "Canh Mướp Hương Nấu Lạc Giã Bùi Ngọt",
      "en": "Fragrant Sponge Gourd Soup with Crushed Peanuts"
    },
    "image": "/dishes/vn-canh-muop-nau-lac.jpg",
    "category": {
      "vi": "Món Canh",
      "en": "Soup"
    },
    "mealType": [
      "lunch",
      "dinner"
    ],
    "region": "north",
    "diningType": [
      "home_cook"
    ],
    "isPopular": true,
    "popularityScore": 92,
    "dietaryTags": {
      "vi": [
        "Cơm nhà",
        "Thanh nhiệt",
        "Thuần chay được"
      ],
      "en": [
        "Home Cook",
        "Cooling",
        "Vegan Adaptable"
      ]
    },
    "time": "20m",
    "servings": 4,
    "calories": 160,
    "protein": 8,
    "fat": 9,
    "carbs": 12,
    "servingSize": {
      "vi": "1 tô canh (~350g)",
      "en": "1 bowl (~350g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia",
      "en": "National Institute of Nutrition"
    },
    "recipeSource": {
      "vi": "Bếp Cơm Mẹ Nấu",
      "en": "Mom's Vietnamese Kitchen"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Mướp hương tươi gọt vỏ thái vát",
          "en": "Fresh sponge gourd sliced"
        },
        "amount": "2 quả"
      },
      {
        "name": {
          "vi": "Lạc nhân (đậu phộng) tươi hoặc khô",
          "en": "Raw peanuts"
        },
        "amount": "80g"
      },
      {
        "name": {
          "vi": "Hành tím băm, hành hoa",
          "en": "Shallots & scallions"
        },
        "amount": "Vừa đủ"
      },
      {
        "name": {
          "vi": "Muối hạt, nước mắm, tiêu",
          "en": "Salt, fish sauce, pepper"
        },
        "amount": "Vừa đủ"
      }
    ],
    "instructions": {
      "vi": [
        "Lạc ngâm nước ấm 20 phút cho nở mềm, bóc vỏ lụa rồi cho vào cối giã dập hoặc giã nhuyễn vừa phải.",
        "Phi thơm hành tím với chút dầu ăn, cho lạc giã vào xào thơm cùng 1 thìa cà phê muối.",
        "Đổ 800ml nước lọc vào đun sôi, hạ nhỏ lửa ninh 10 phút cho chất bùi ngọt của lạc tan đều vào nước canh.",
        "Thả mướp hương vào nấu sôi bùng lên khoảng 2 phút đến khi mướp vừa chín tới màu xanh mướt.",
        "Nêm lại chút nước mắm ngon, rắc hành hoa thái nhỏ, múc ra tô húp vị ngọt mát bùi béo tự nhiên."
      ],
      "en": [
        "Soak raw peanuts in warm water for 20 mins, peel skin, crush coarsely in a mortar.",
        "Sauté shallots in a pot, add crushed peanuts and fry briefly with a pinch of salt.",
        "Pour in 800ml water, bring to boil, and simmer for 10 mins to extract peanut milkiness.",
        "Add sponge gourd slices and boil briskly for 2 minutes until tender-crisp and bright green.",
        "Season with fish sauce, top with chopped scallions, and serve warm."
      ]
    }
  },
  {
    "id": "vn-canh-rau-den-nau-tom",
    "title": {
      "vi": "Canh Rau Dền Đỏ Nấu Tôm Tươi Ngọt Mát",
      "en": "Red Amaranth Soup with Fresh Shrimp"
    },
    "image": "/dishes/vn-canh-rau-den-nau-tom.jpg",
    "category": {
      "vi": "Món Canh",
      "en": "Soup"
    },
    "mealType": [
      "lunch",
      "dinner"
    ],
    "region": "national",
    "diningType": [
      "home_cook"
    ],
    "isPopular": true,
    "popularityScore": 94,
    "dietaryTags": {
      "vi": [
        "Cơm nhà",
        "Thanh nhiệt",
        "Bổ máu"
      ],
      "en": [
        "Iron Rich",
        "Cooling",
        "Home Cook"
      ]
    },
    "time": "15m",
    "servings": 4,
    "calories": 120,
    "protein": 15,
    "fat": 3,
    "carbs": 6,
    "servingSize": {
      "vi": "1 tô lớn (~350g)",
      "en": "1 bowl (~350g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia",
      "en": "National Institute of Nutrition"
    },
    "recipeSource": {
      "vi": "Món Ngon Mỗi Ngày",
      "en": "Daily Delicious VN"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Rau dền đỏ nhặt sạch",
          "en": "Fresh red amaranth greens"
        },
        "amount": "1 bó (~350g)"
      },
      {
        "name": {
          "vi": "Tôm tươi bóc vỏ giã dập",
          "en": "Fresh shrimp peeled & bruised"
        },
        "amount": "150g"
      },
      {
        "name": {
          "vi": "Hành khô băm nhỏ",
          "en": "Minced shallot"
        },
        "amount": "1 củ"
      },
      {
        "name": {
          "vi": "Nước mắm, muối, hạt nêm",
          "en": "Fish sauce, salt, seasoning"
        },
        "amount": "Vừa đủ"
      }
    ],
    "instructions": {
      "vi": [
        "Rau dền đỏ nhặt ngọn non, rửa sạch ngâm nước muối loãng vớt ra để ráo.",
        "Tôm tươi bóc vỏ, rút chỉ đen, băm thô hoặc giã dập với chút hành khô và tiêu.",
        "Phi thơm hành khô, xào thịt tôm săn đỏ rồi đổ 800ml nước lọc vào đun sôi.",
        "Hớt sạch bọt cho nước canh trong vắt, thả rau dền đỏ vào đun sôi bùng 2-3 phút.",
        "Nêm nước mắm và hạt nêm vừa miệng, múc ra tô canh có màu đỏ tím đẹp mắt ngọt lịm."
      ],
      "en": [
        "Pick tender amaranth leaves and shoots, wash and drain.",
        "Peel and devein shrimp, roughly crush with shallots and pepper.",
        "Sauté shallots, stir-fry shrimp until pink, then add 800ml water and bring to boil.",
        "Skim foam, add red amaranth and boil for 2-3 mins until tender.",
        "Season with fish sauce; ladle into bowls showing its iconic gorgeous crimson broth."
      ]
    }
  },
  {
    "id": "vn-canh-mong-toi-nau-ngao",
    "title": {
      "vi": "Canh Mồng Tơi Nấu Ngao Thanh Nhiệt Ngày Hè",
      "en": "Malabar Spinach Soup with Sweet Clams"
    },
    "image": "/dishes/vn-canh-mong-toi-nau-ngao.jpg",
    "category": {
      "vi": "Món Canh",
      "en": "Soup"
    },
    "mealType": [
      "lunch",
      "dinner"
    ],
    "region": "national",
    "diningType": [
      "home_cook"
    ],
    "isPopular": true,
    "popularityScore": 95,
    "dietaryTags": {
      "vi": [
        "Cơm nhà",
        "Thanh nhiệt",
        "Ngọt mát"
      ],
      "en": [
        "Cooling",
        "Summer Soup",
        "Sweet Broth"
      ]
    },
    "time": "20m",
    "servings": 4,
    "calories": 110,
    "protein": 14,
    "fat": 2,
    "carbs": 6,
    "servingSize": {
      "vi": "1 tô canh (~350g)",
      "en": "1 bowl (~350g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia",
      "en": "National Institute of Nutrition"
    },
    "recipeSource": {
      "vi": "Bếp Cơm Mẹ Nấu",
      "en": "Mom's Vietnamese Kitchen"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Rau mồng tơi tươi non",
          "en": "Fresh Malabar spinach"
        },
        "amount": "1 bó (~300g)"
      },
      {
        "name": {
          "vi": "Ngao trắng tươi sống",
          "en": "Live white clams"
        },
        "amount": "500g"
      },
      {
        "name": {
          "vi": "Hành tím băm",
          "en": "Minced shallot"
        },
        "amount": "1 củ"
      },
      {
        "name": {
          "vi": "Nước mắm, gừng thái chỉ",
          "en": "Fish sauce, julienned ginger"
        },
        "amount": "Vừa đủ"
      }
    ],
    "instructions": {
      "vi": [
        "Ngao rửa sạch luộc với chút nước đến khi há miệng, vớt lấy phần thịt ngao rửa sạch cát, chắt lấy nước luộc ngao trong veo.",
        "Rau mồng tơi nhặt lá non rửa sạch, thái vừa ăn.",
        "Phi thơm hành tím, xào săn thịt ngao với chút nước mắm.",
        "Đổ nước luộc ngao vào đun sôi, thả rau mồng tơi vào nấu chín tới trong 2 phút.",
        "Nêm lại cho vừa vị ngọt thanh, tắt bếp múc ra tô ăn giải nhiệt ngày nắng gắt."
      ],
      "en": [
        "Boil clams until opened; remove meat and rinse sand; strain clam broth to clarify.",
        "Wash and coarsely chop Malabar spinach.",
        "Sauté shallots, stir-fry clam meat with a dash of fish sauce.",
        "Pour clear clam broth back into pot, bring to a rolling boil, add spinach and cook for 2 mins.",
        "Adjust seasoning; serve warm for instant summer refreshment."
      ]
    }
  },
  {
    "id": "vn-canh-cai-cuc-thit-bam",
    "title": {
      "vi": "Canh Cải Cúc Nấu Thịt Băm Nhanh Gọn",
      "en": "Garland Chrysanthemum Soup with Minced Pork"
    },
    "image": "/dishes/vn-canh-cai-cuc-thit-bam.jpg",
    "category": {
      "vi": "Món Canh",
      "en": "Soup"
    },
    "mealType": [
      "lunch",
      "dinner"
    ],
    "region": "north",
    "diningType": [
      "home_cook"
    ],
    "isPopular": true,
    "popularityScore": 91,
    "dietaryTags": {
      "vi": [
        "Cơm nhà",
        "Nhanh gọn 10 phút",
        "Thơm đặc trưng"
      ],
      "en": [
        "Quick",
        "10 Minutes",
        "Herbal Aroma"
      ]
    },
    "time": "10m",
    "servings": 4,
    "calories": 140,
    "protein": 13,
    "fat": 7,
    "carbs": 5,
    "servingSize": {
      "vi": "1 tô canh (~350g)",
      "en": "1 bowl (~350g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia",
      "en": "National Institute of Nutrition"
    },
    "recipeSource": {
      "vi": "Bếp Hà Nội Cổ Truyền",
      "en": "Northern Home Cooking"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Rau cải cúc (tần ô) non",
          "en": "Garland chrysanthemum greens"
        },
        "amount": "1 bó (~300g)"
      },
      {
        "name": {
          "vi": "Thịt heo nạc xay",
          "en": "Minced pork"
        },
        "amount": "150g"
      },
      {
        "name": {
          "vi": "Hành tím băm nhỏ",
          "en": "Minced shallot"
        },
        "amount": "1 củ"
      },
      {
        "name": {
          "vi": "Nước mắm, tiêu xay, gia vị",
          "en": "Fish sauce, pepper, salt"
        },
        "amount": "Vừa đủ"
      }
    ],
    "instructions": {
      "vi": [
        "Rau cải cúc nhặt ngọn non, rửa sạch ngắt làm đôi.",
        "Phi thơm hành tím, cho thịt băm vào xào săn với chút nước mắm tiêu.",
        "Đổ 750ml nước vào đun sôi bùng, hớt bọt cho nước trong.",
        "Thả rau cải cúc vào đảo nhẹ, canh vừa sôi lại là tắt bếp ngay để cải cúc không bị nồng nát.",
        "Múc ra tô rắc tiêu xay, ăn nóng thơm nồng đặc trưng."
      ],
      "en": [
        "Clean tender chrysanthemum greens and break in half.",
        "Sauté shallots, stir-fry minced pork with fish sauce and pepper.",
        "Add 750ml water and bring to a boil; skim foam.",
        "Drop in greens, let it boil for just 30 seconds and turn off heat immediately.",
        "Ladle into bowl, finish with black pepper; enjoy while hot and fragrant."
      ]
    }
  },
  {
    "id": "vn-canh-bi-do-dau-phong",
    "title": {
      "vi": "Canh Bí Đỏ Hầm Đậu Phộng Nước Cốt Dừa",
      "en": "Pumpkin & Peanut Soup with Creamy Coconut Milk"
    },
    "image": "/dishes/vn-canh-bi-do-dau-phong.jpg",
    "category": {
      "vi": "Món Canh",
      "en": "Soup"
    },
    "mealType": [
      "lunch",
      "dinner"
    ],
    "region": "south",
    "diningType": [
      "home_cook"
    ],
    "isPopular": true,
    "popularityScore": 93,
    "dietaryTags": {
      "vi": [
        "Món ngon Nam Bộ",
        "Bổ não",
        "Béo bùi"
      ],
      "en": [
        "Southern Style",
        "Brain Food",
        "Creamy"
      ]
    },
    "time": "30m",
    "servings": 4,
    "calories": 220,
    "protein": 8,
    "fat": 14,
    "carbs": 18,
    "servingSize": {
      "vi": "1 tô canh (~350g)",
      "en": "1 bowl (~350g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia",
      "en": "National Institute of Nutrition"
    },
    "recipeSource": {
      "vi": "Ẩm thực Miền Nam",
      "en": "Southern Vietnamese Kitchen"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Bí đỏ gọt vỏ cắt khối vuông",
          "en": "Pumpkin cut in cubes"
        },
        "amount": "400g"
      },
      {
        "name": {
          "vi": "Đậu phộng (lạc) giã dập",
          "en": "Crushed peanuts"
        },
        "amount": "80g"
      },
      {
        "name": {
          "vi": "Nước cốt dừa sánh béo",
          "en": "Coconut milk"
        },
        "amount": "100ml"
      },
      {
        "name": {
          "vi": "Hành boa-rô hoặc hành lá, ngò ôm",
          "en": "Leek or scallions & rice paddy herb"
        },
        "amount": "Vừa đủ"
      }
    ],
    "instructions": {
      "vi": [
        "Bí đỏ cắt khối vừa ăn. Đậu phộng ngâm mềm giã dập.",
        "Nấu đậu phộng với 800ml nước trong 15 phút cho đậu mềm nhừ tiết vị bùi.",
        "Cho bí đỏ vào hầm thêm 10 phút đến khi bí chín mềm dẻo ngọt bùi.",
        "Rót nước cốt dừa vào khuấy đều, nêm muối và đường phèn vừa khẩu vị ngọt béo hài hòa.",
        "Rắc ngò ôm và ngò gai thái nhỏ lên trên, dùng nóng béo ngậy ấm bụng."
      ],
      "en": [
        "Cut pumpkin into bite-sized cubes. Soak and crush peanuts.",
        "Simmer crushed peanuts in 800ml water for 15 mins until softened.",
        "Add pumpkin cubes and cook 10 mins until fork-tender and sweet.",
        "Stir in creamy coconut milk, season with salt and a touch of rock sugar.",
        "Garnish with chopped rice paddy herb and culantro."
      ]
    }
  },
  {
    "id": "vn-canh-khoai-tay-suon",
    "title": {
      "vi": "Canh Khoai Tây Cà Rốt Hầm Sườn Heo Béo Bùi",
      "en": "Pork Rib Stewed Potato & Carrot Soup"
    },
    "image": "/dishes/vn-canh-khoai-tay-suon.jpg",
    "category": {
      "vi": "Món Canh",
      "en": "Soup"
    },
    "mealType": [
      "lunch",
      "dinner"
    ],
    "region": "national",
    "diningType": [
      "home_cook"
    ],
    "isPopular": true,
    "popularityScore": 96,
    "dietaryTags": {
      "vi": [
        "Cơm nhà",
        "Bổ dưỡng",
        "Trẻ em mê"
      ],
      "en": [
        "Home Cook",
        "Comfort Food",
        "Kid Friendly"
      ]
    },
    "time": "40m",
    "servings": 4,
    "calories": 290,
    "protein": 21,
    "fat": 17,
    "carbs": 16,
    "servingSize": {
      "vi": "1 tô canh lớn (~400g)",
      "en": "1 large bowl (~400g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia",
      "en": "National Institute of Nutrition"
    },
    "recipeSource": {
      "vi": "Bếp Gia Đình Việt",
      "en": "Vietnamese Family Kitchen"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Sườn non hoặc xương heo",
          "en": "Pork ribs"
        },
        "amount": "400g"
      },
      {
        "name": {
          "vi": "Khoai tây gọt vỏ cắt khối",
          "en": "Potatoes cut in chunks"
        },
        "amount": "3 củ"
      },
      {
        "name": {
          "vi": "Cà rốt tỉa hoa thái khúc",
          "en": "Carrot sliced"
        },
        "amount": "1 củ"
      },
      {
        "name": {
          "vi": "Hành hoa, mùi ta thái nhỏ",
          "en": "Scallions & cilantro"
        },
        "amount": "Vừa đủ"
      },
      {
        "name": {
          "vi": "Hạt nêm, nước mắm, tiêu",
          "en": "Seasonings"
        },
        "amount": "Vừa đủ"
      }
    ],
    "instructions": {
      "vi": [
        "Sườn chần nước sôi rửa sạch, ướp chút hạt nêm rồi cho vào nồi xào săn.",
        "Đổ 1 lít nước vào đun sôi, hớt bọt kỹ rồi hạ nhỏ lửa hầm sườn trong 20 phút.",
        "Cho cà rốt và khoai tây vào hầm tiếp 12-15 phút đến khi khoai bở tơi, sườn róc thịt.",
        "Nêm lại nước mắm ngon vừa vị đậm đà ngọt tự nhiên từ củ và sườn.",
        "Múc ra tô rắc hành mùi và tiêu xay thơm nức mũi."
      ],
      "en": [
        "Blanch ribs and rinse; sauté lightly in pot.",
        "Add 1L water, bring to boil, skim thoroughly, and simmer for 20 mins.",
        "Add carrots and potato chunks; cook 12-15 mins until tender.",
        "Season with fish sauce and broth powder.",
        "Garnish with scallions, cilantro, and freshly ground pepper."
      ]
    }
  },
  {
    "id": "vn-canh-cai-thao-dau-non",
    "title": {
      "vi": "Canh Cải Thảo Nấu Đậu Hũ Non Tôm Nõn",
      "en": "Napa Cabbage Soup with Silken Tofu & Dried Shrimp"
    },
    "image": "/dishes/vn-canh-cai-thao-dau-non.jpg",
    "category": {
      "vi": "Món Canh",
      "en": "Soup"
    },
    "mealType": [
      "lunch",
      "dinner"
    ],
    "region": "national",
    "diningType": [
      "home_cook"
    ],
    "isPopular": true,
    "popularityScore": 90,
    "dietaryTags": {
      "vi": [
        "Thanh đạm",
        "Ít calo",
        "Dễ tiêu hóa"
      ],
      "en": [
        "Low Calorie",
        "Light & Healthy",
        "Silky Tofu"
      ]
    },
    "time": "15m",
    "servings": 4,
    "calories": 130,
    "protein": 14,
    "fat": 4,
    "carbs": 8,
    "servingSize": {
      "vi": "1 tô canh (~350g)",
      "en": "1 bowl (~350g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia",
      "en": "National Institute of Nutrition"
    },
    "recipeSource": {
      "vi": "Bếp Thanh Đạm",
      "en": "Clean Eating Vietnam"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Cải thảo rửa sạch cắt khúc",
          "en": "Napa cabbage cut in chunks"
        },
        "amount": "300g"
      },
      {
        "name": {
          "vi": "Đậu hũ non cắt khối vuông",
          "en": "Silken tofu cubed"
        },
        "amount": "1 hộp (~250g)"
      },
      {
        "name": {
          "vi": "Tôm tươi hoặc tôm khô ngâm mềm",
          "en": "Fresh or dried shrimp"
        },
        "amount": "100g"
      },
      {
        "name": {
          "vi": "Hành tím, gừng lát, hành hoa",
          "en": "Shallots, sliced ginger, scallions"
        },
        "amount": "Vừa đủ"
      }
    ],
    "instructions": {
      "vi": [
        "Xào thơm tôm với hành tím và gừng lát thái mỏng.",
        "Đổ 800ml nước lọc vào đun sôi, thả phần cọng cải thảo cứng vào nấu trước 2 phút.",
        "Cho tiếp phần lá cải thảo và nhẹ nhàng thả đậu hũ non vào nấu sôi lại.",
        "Nêm hạt nêm và chút muối vừa miệng, tránh khuấy mạnh làm nát đậu non.",
        "Tắt bếp, rắc hành lá thái nhỏ và chút tiêu, dùng nóng ngọt thanh nhẹ bụng."
      ],
      "en": [
        "Sauté shrimp with shallots and ginger slices.",
        "Add 800ml water and boil; add thicker napa cabbage stems first for 2 mins.",
        "Add leafy cabbage and gently slide in silken tofu cubes.",
        "Season with salt and broth powder without stirring aggressively.",
        "Top with scallions and cracked pepper; gentle on the stomach."
      ]
    }
  },
  {
    "id": "vn-canh-nam-dau-phu-chay",
    "title": {
      "vi": "Canh Nấm Đậu Phụ Cà Chua Thanh Đạm Chay",
      "en": "Mushroom & Tofu Tomato Vegan Soup"
    },
    "image": "/dishes/vn-canh-nam-dau-phu-chay.jpg",
    "category": {
      "vi": "Món Canh",
      "en": "Soup"
    },
    "mealType": [
      "lunch",
      "dinner"
    ],
    "region": "national",
    "diningType": [
      "home_cook"
    ],
    "isPopular": true,
    "popularityScore": 92,
    "dietaryTags": {
      "vi": [
        "Thuần chay",
        "Thanh lọc cơ thể",
        "Thanh đạm"
      ],
      "en": [
        "Vegan",
        "Detox",
        "Light"
      ]
    },
    "time": "15m",
    "servings": 4,
    "calories": 120,
    "protein": 10,
    "fat": 4,
    "carbs": 11,
    "servingSize": {
      "vi": "1 tô canh (~350g)",
      "en": "1 bowl (~350g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia",
      "en": "National Institute of Nutrition"
    },
    "recipeSource": {
      "vi": "Bếp Chay An Lạc",
      "en": "Peaceful Vegan Kitchen"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Nấm kim châm, nấm đùi gà thái lát",
          "en": "Enoki & king oyster mushrooms"
        },
        "amount": "200g"
      },
      {
        "name": {
          "vi": "Đậu phụ trắng cắt miếng vuông",
          "en": "White tofu cubes"
        },
        "amount": "2 bìa"
      },
      {
        "name": {
          "vi": "Cà chua chín bổ múi cau",
          "en": "Tomatoes wedged"
        },
        "amount": "2 quả"
      },
      {
        "name": {
          "vi": "Hành boa-rô, ngò rí, tiêu",
          "en": "Leek, cilantro, pepper"
        },
        "amount": "Vừa đủ"
      }
    ],
    "instructions": {
      "vi": [
        "Phi thơm hành boa-rô, xào cà chua mềm tạo màu đỏ thanh nhã.",
        "Đổ 800ml nước vào đun sôi, thả đậu phụ trắng vào nấu sôi nhẹ.",
        "Cho các loại nấm vào nấu trong 3-4 phút cho nấm tiết vị ngọt đậm đà tự nhiên.",
        "Nêm hạt nêm chay từ nấm và chút muối hạt vừa khẩu vị thanh tao.",
        "Rắc ngò rí và tiêu xay, dùng nóng thanh tịnh nhẹ nhõm tâm hồn."
      ],
      "en": [
        "Sauté leek slices, cook tomatoes until soft and red.",
        "Pour in 800ml water, bring to boil, gently add tofu cubes.",
        "Add assorted mushrooms and simmer 3-4 mins for natural mushroom umami.",
        "Season with mushroom broth powder and sea salt.",
        "Finish with fresh cilantro and pepper; soothing and wholesome."
      ]
    }
  },
  {
    "id": "vn-canh-kim-chi-thit-ba-chi",
    "title": {
      "vi": "Canh Kim Chi Thịt Ba Chỉ Đậu Hũ Non Ấm Nóng",
      "en": "Pork Belly & Kimchi Stew with Soft Tofu"
    },
    "image": "/dishes/vn-canh-kim-chi-thit-ba-chi.jpg",
    "category": {
      "vi": "Món Canh",
      "en": "Soup"
    },
    "mealType": [
      "lunch",
      "dinner"
    ],
    "region": "national",
    "diningType": [
      "home_cook"
    ],
    "isPopular": true,
    "popularityScore": 95,
    "dietaryTags": {
      "vi": [
        "Cay ấm",
        "Cơm nhà hiện đại",
        "Đậm đà"
      ],
      "en": [
        "Spicy Stew",
        "Cozy",
        "Comfort Food"
      ]
    },
    "time": "25m",
    "servings": 4,
    "calories": 290,
    "protein": 19,
    "fat": 20,
    "carbs": 8,
    "servingSize": {
      "vi": "1 tô canh nóng (~400g)",
      "en": "1 bowl (~400g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia",
      "en": "National Institute of Nutrition"
    },
    "recipeSource": {
      "vi": "Bếp Trẻ Hiện Đại",
      "en": "Contemporary Asian Cooking"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Kim chi cải thảo chua cay cắt khúc",
          "en": "Aged cabbage kimchi chopped"
        },
        "amount": "250g"
      },
      {
        "name": {
          "vi": "Thịt ba chỉ heo thái mỏng",
          "en": "Thinly sliced pork belly"
        },
        "amount": "200g"
      },
      {
        "name": {
          "vi": "Đậu hũ non cắt lát",
          "en": "Silken tofu sliced"
        },
        "amount": "1 cây"
      },
      {
        "name": {
          "vi": "Hành boa-rô, tỏi băm, ớt bột",
          "en": "Leek, garlic, chili powder"
        },
        "amount": "Vừa đủ"
      }
    ],
    "instructions": {
      "vi": [
        "Xào thịt ba chỉ với tỏi băm cho săn lại và tiết bớt mỡ thừa.",
        "Trút kim chi vào xào cùng thịt khoảng 3-4 phút cho ngấm vị chua cay nồng.",
        "Đổ nước lọc hoặc nước dùng gà vào ngập, thêm nước cốt kim chi đun sôi rồi hạ nhỏ lửa ninh 10 phút.",
        "Thả đậu hũ non vào nấu sôi thêm 2 phút.",
        "Rắc hành boa-rô thái vát, ăn ngay khi còn bốc khói xì xụp cùng cơm trắng."
      ],
      "en": [
        "Sauté pork belly with garlic until lightly browned and fat renders.",
        "Add kimchi and stir-fry for 3-4 mins to deepen flavors.",
        "Pour in water/broth and kimchi juice, simmer covered for 10 mins.",
        "Slide in silken tofu and cook gently for 2 mins.",
        "Top with sliced leeks; serve bubbling hot with white rice."
      ]
    }
  },
  {
    "id": "vn-canh-tep-dong-la-me",
    "title": {
      "vi": "Canh Tép Đồng Nấu Lá Me Non Chua Dịu",
      "en": "Freshwater Shrimps Soup with Young Tamarind Leaves"
    },
    "image": "/dishes/vn-canh-tep-dong-la-me.jpg",
    "category": {
      "vi": "Món Canh",
      "en": "Soup"
    },
    "mealType": [
      "lunch",
      "dinner"
    ],
    "region": "south",
    "diningType": [
      "home_cook"
    ],
    "isPopular": false,
    "popularityScore": 86,
    "dietaryTags": {
      "vi": [
        "Dân dã",
        "Đặc sản đồng quê",
        "Chua thanh"
      ],
      "en": [
        "Rustic",
        "Tangy",
        "Country Classic"
      ]
    },
    "time": "15m",
    "servings": 4,
    "calories": 130,
    "protein": 16,
    "fat": 4,
    "carbs": 6,
    "servingSize": {
      "vi": "1 tô canh (~350g)",
      "en": "1 bowl (~350g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia",
      "en": "National Institute of Nutrition"
    },
    "recipeSource": {
      "vi": "Ẩm thực Miền Tây Dân Dã",
      "en": "Mekong Country Kitchen"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Tép đồng tươi nhảy tanh tách",
          "en": "Live freshwater baby shrimps"
        },
        "amount": "200g"
      },
      {
        "name": {
          "vi": "Lá me non tuốt sạch cọng",
          "en": "Young tamarind leaves"
        },
        "amount": "1 nắm lớn (~80g)"
      },
      {
        "name": {
          "vi": "Hành tím, ớt hiểm, ngò gai",
          "en": "Shallots, chilies, culantro"
        },
        "amount": "Vừa đủ"
      },
      {
        "name": {
          "vi": "Nước mắm đồng, muối, tiêu",
          "en": "Country fish sauce, salt, pepper"
        },
        "amount": "Vừa đủ"
      }
    ],
    "instructions": {
      "vi": [
        "Tép đồng xóc muối rửa sạch, để ráo nước.",
        "Phi thơm hành tím, cho tép vào xào săn đỏ hồng rồi trút nước sôi vào đun sủi bọt.",
        "Vò nhẹ lá me non cho dậy tinh dầu chua rồi thả vào nồi canh.",
        "Nêm nước mắm ngon và chút ớt hiểm thái lát cho vị chua cay đậm đà.",
        "Tắt bếp rắc ngò gai, múc ra tô húp vị chua dịu thanh tao của lá me quyện vị ngọt của tép đồng."
      ],
      "en": [
        "Rinse baby shrimps with salt, drain well.",
        "Sauté shallots, stir-fry baby shrimps until pink, then add boiling water.",
        "Lightly bruise young tamarind leaves to release acidity and add to the pot.",
        "Season with fish sauce and sliced chili for a bright tangy balance.",
        "Garnish with culantro and serve warm."
      ]
    }
  },
  {
    "id": "vn-canh-chua-ca-hu",
    "title": {
      "vi": "Canh Chua Cá Hú Bắp Chuối Điên Điển Nam Bộ",
      "en": "Southern River Catfish Sour Soup with Sesbania Flowers"
    },
    "image": "/dishes/vn-canh-chua-ca-hu.jpg",
    "category": {
      "vi": "Món Canh",
      "en": "Soup"
    },
    "mealType": [
      "lunch",
      "dinner"
    ],
    "region": "south",
    "diningType": [
      "home_cook"
    ],
    "isPopular": true,
    "popularityScore": 93,
    "dietaryTags": {
      "vi": [
        "Miền Tây",
        "Mùa nước nổi",
        "Chua ngọt"
      ],
      "en": [
        "Mekong Delta",
        "Tangy & Sweet",
        "Seasonal"
      ]
    },
    "time": "30m",
    "servings": 4,
    "calories": 270,
    "protein": 23,
    "fat": 15,
    "carbs": 11,
    "servingSize": {
      "vi": "1 tô lớn (~450g)",
      "en": "1 large bowl (~450g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia",
      "en": "National Institute of Nutrition"
    },
    "recipeSource": {
      "vi": "Món Ngon Miền Tây",
      "en": "Southern Delta Kitchen"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Cá hú béo cắt khúc",
          "en": "Pangasius catfish steaks"
        },
        "amount": "500g"
      },
      {
        "name": {
          "vi": "Bông điên điển vàng rực",
          "en": "Yellow sesbania flowers"
        },
        "amount": "100g"
      },
      {
        "name": {
          "vi": "Bắp chuối bào mỏng",
          "en": "Shredded banana blossom"
        },
        "amount": "150g"
      },
      {
        "name": {
          "vi": "Cốt me chua, đậu bắp, cà chua",
          "en": "Tamarind pulp, okra, tomatoes"
        },
        "amount": "Vừa đủ"
      },
      {
        "name": {
          "vi": "Rau ngổ, ngò gai, tỏi phi",
          "en": "Rice paddy herb, culantro, fried garlic"
        },
        "amount": "Vừa đủ"
      }
    ],
    "instructions": {
      "vi": [
        "Cá hú rửa sạch với nước muối gừng, chiên sơ hai mặt cho săn thịt và thơm béo.",
        "Nấu sôi 1 lít nước lọc với nước cốt me và cà chua.",
        "Thả cá hú vào nấu chín trong 8-10 phút, hớt sạch bọt.",
        "Thêm đậu bắp, bắp chuối bào và bông điên điển vào đun sôi bùng lại 1 phút là chín giòn.",
        "Nêm nước mắm ngon và đường cho chuẩn vị chua ngọt miền Tây, rắc rau ngổ, ngò gai và tỏi phi thơm nức."
      ],
      "en": [
        "Clean catfish with ginger salt, sear lightly on both sides.",
        "Boil 1L water with tamarind juice and tomato wedges.",
        "Add fish steaks and simmer 8-10 mins, skimming carefully.",
        "Toss in okra, banana blossoms, and yellow sesbania flowers for 1 minute.",
        "Season with fish sauce and sugar for iconic southern balance; top with fried garlic and herbs."
      ]
    }
  },
  {
    "id": "vn-rau-bi-xao-toi",
    "title": {
      "vi": "Rau Bí Xào Tỏi Xanh Giòn Thơm Lừng",
      "en": "Crispy Stir-fried Pumpkin Vine Shoots with Garlic"
    },
    "image": "/dishes/vn-rau-bi-xao-toi.jpg",
    "category": {
      "vi": "Món Xào",
      "en": "Stir-fry"
    },
    "mealType": [
      "lunch",
      "dinner"
    ],
    "region": "north",
    "diningType": [
      "home_cook",
      "eat_out"
    ],
    "isPopular": true,
    "popularityScore": 97,
    "dietaryTags": {
      "vi": [
        "Cơm nhà",
        "Đặc sản dân dã",
        "Giòn ngọt"
      ],
      "en": [
        "Crispy Shoots",
        "Garlic",
        "Home Cook"
      ]
    },
    "time": "20m",
    "servings": 4,
    "calories": 120,
    "protein": 4,
    "fat": 8,
    "carbs": 8,
    "servingSize": {
      "vi": "1 đĩa rau (~250g)",
      "en": "1 plate (~250g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia",
      "en": "National Institute of Nutrition"
    },
    "recipeSource": {
      "vi": "Bếp Quê Bắc Bộ",
      "en": "Northern Countryside Cooking"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Rau bí ngô non tước sạch xơ",
          "en": "Fresh young pumpkin shoots peeled"
        },
        "amount": "500g"
      },
      {
        "name": {
          "vi": "Tỏi tép đập dập nhiều",
          "en": "Generous crushed garlic"
        },
        "amount": "2 củ"
      },
      {
        "name": {
          "vi": "Dầu ăn hoặc mỡ heo",
          "en": "Pork lard or cooking oil"
        },
        "amount": "2 thìa canh"
      },
      {
        "name": {
          "vi": "Dầu hào, hạt nêm, nước mắm",
          "en": "Oyster sauce, seasoning, fish sauce"
        },
        "amount": "Vừa đủ"
      }
    ],
    "instructions": {
      "vi": [
        "Rau bí tước thật kỹ lớp xơ ráp bên ngoài cọng và cuống lá, rửa nhẹ tay vắt ráo.",
        "Đun sôi nồi nước có chút muối, chần nhanh cọng rau bí 30 giây rồi vớt ngâm ngay vào âu nước đá cho xanh giòn.",
        "Phi thơm ngập tỏi đập dập với mỡ heo trên lửa lớn.",
        "Trút rau bí vào đảo thật nhanh tay trên lửa cực lớn để rau giữ trọn màu xanh mướt và độ giòn sần sật.",
        "Nêm dầu hào và chút nước mắm, đảo đều 1 phút rồi trút ra đĩa thưởng thức ngay."
      ],
      "en": [
        "Stringently peel fibrous outer skin off pumpkin shoots; wash and drain.",
        "Quickly blanch shoots in salted boiling water for 30s, plunge into ice bath to preserve crisp texture.",
        "Sauté plenty of crushed garlic in lard or oil over high heat.",
        "Add pumpkin shoots and toss briskly over roaring high heat.",
        "Season with oyster sauce and fish sauce, plate immediately while glistening green."
      ]
    }
  },
  {
    "id": "vn-cai-ngot-xao-nam",
    "title": {
      "vi": "Cải Ngọt Xào Nấm Đông Cô Dầu Hào",
      "en": "Stir-fried Choy Sum with Shiitake in Oyster Sauce"
    },
    "image": "/dishes/vn-cai-ngot-xao-nam.jpg",
    "category": {
      "vi": "Món Xào",
      "en": "Stir-fry"
    },
    "mealType": [
      "lunch",
      "dinner"
    ],
    "region": "national",
    "diningType": [
      "home_cook"
    ],
    "isPopular": true,
    "popularityScore": 90,
    "dietaryTags": {
      "vi": [
        "Cơm nhà",
        "Nhanh gọn",
        "Giàu chất xơ"
      ],
      "en": [
        "Quick",
        "High Fiber",
        "Healthy"
      ]
    },
    "time": "15m",
    "servings": 4,
    "calories": 110,
    "protein": 5,
    "fat": 6,
    "carbs": 9,
    "servingSize": {
      "vi": "1 đĩa xào (~250g)",
      "en": "1 plate (~250g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia",
      "en": "National Institute of Nutrition"
    },
    "recipeSource": {
      "vi": "Món Ngon Mỗi Ngày",
      "en": "Daily Delicious VN"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Cải ngọt cắt khúc",
          "en": "Fresh choy sum cut in lengths"
        },
        "amount": "400g"
      },
      {
        "name": {
          "vi": "Nấm đông cô tươi thái lát",
          "en": "Fresh shiitake sliced"
        },
        "amount": "150g"
      },
      {
        "name": {
          "vi": "Tỏi băm",
          "en": "Minced garlic"
        },
        "amount": "1 củ"
      },
      {
        "name": {
          "vi": "Dầu hào, hạt nêm, tiêu",
          "en": "Oyster sauce, seasoning, pepper"
        },
        "amount": "Vừa đủ"
      }
    ],
    "instructions": {
      "vi": [
        "Cải ngọt rửa sạch cắt khúc 5cm. Nấm đông cô khía hoa hoặc thái lát dày.",
        "Phi thơm tỏi băm trong chảo dầu nóng, xào nấm đông cô chín tới.",
        "Cho phần cọng cải ngọt vào xào trước 1 phút, sau đó cho lá cải vào đảo cùng trên lửa lớn.",
        "Nêm dầu hào và hạt nêm đảo nhanh tay cho ngấm đều vị đậm đà.",
        "Tắt bếp rắc tiêu, trút ra đĩa dùng nóng giòn ngọt thanh tao."
      ],
      "en": [
        "Wash choy sum, cut into 5cm pieces. Slice fresh shiitake.",
        "Sauté minced garlic in hot oil, cook mushrooms until fragrant.",
        "Add choy sum stems first for 1 min, then add leaves over high heat.",
        "Season with oyster sauce and pepper, tossing vigorously.",
        "Serve hot with bright green color and crisp texture."
      ]
    }
  },
  {
    "id": "vn-mang-xao-thit-bo",
    "title": {
      "vi": "Măng Trúc Xào Thịt Bò Lá Lốt Thơm Nức",
      "en": "Stir-fried Bamboo Shoots & Beef with Wild Betel Leaves"
    },
    "image": "/dishes/vn-mang-xao-thit-bo.jpg",
    "category": {
      "vi": "Món Xào",
      "en": "Stir-fry"
    },
    "mealType": [
      "lunch",
      "dinner"
    ],
    "region": "north",
    "diningType": [
      "home_cook"
    ],
    "isPopular": true,
    "popularityScore": 93,
    "dietaryTags": {
      "vi": [
        "Cơm nhà",
        "Đậm đà",
        "Thơm ngát"
      ],
      "en": [
        "Home Cook",
        "Savory",
        "Herbal"
      ]
    },
    "time": "20m",
    "servings": 4,
    "calories": 240,
    "protein": 24,
    "fat": 12,
    "carbs": 9,
    "servingSize": {
      "vi": "1 đĩa (~280g)",
      "en": "1 plate (~280g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia",
      "en": "National Institute of Nutrition"
    },
    "recipeSource": {
      "vi": "Ẩm thực Vùng Cao Tây Bắc",
      "en": "Northwest Highlands Heritage"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Thịt bắp bò thái mỏng",
          "en": "Thinly sliced beef"
        },
        "amount": "250g"
      },
      {
        "name": {
          "vi": "Măng trúc tươi luộc sạch thái lát",
          "en": "Boiled mountain bamboo shoots"
        },
        "amount": "300g"
      },
      {
        "name": {
          "vi": "Lá lốt tươi thái sợi",
          "en": "Lolot leaves shredded"
        },
        "amount": "10 lá"
      },
      {
        "name": {
          "vi": "Tỏi băm, hạt tiêu, nước mắm",
          "en": "Garlic, pepper, fish sauce"
        },
        "amount": "Vừa đủ"
      }
    ],
    "instructions": {
      "vi": [
        "Thịt bò ướp tỏi băm, dầu hào và tiêu 10 phút. Măng trúc luộc kỹ nhiều nước rồi vắt ráo.",
        "Phi thơm tỏi, xào thịt bò trên lửa lớn vừa chín tới thì trút riêng ra đĩa.",
        "Cho măng trúc vào chảo xào săn với chút hạt nêm và nước mắm khoảng 3 phút cho ngấm đậm đà.",
        "Trút thịt bò trở lại chảo cùng lá lốt thái sợi đảo nhanh tay 30 giây dậy mùi thơm lừng.",
        "Múc ra đĩa rắc tiêu thưởng thức cùng cơm nóng."
      ],
      "en": [
        "Marinate beef with garlic, oyster sauce, and pepper. Boil bamboo shoots thoroughly; drain.",
        "Quickly sear beef in garlic oil over high heat; remove.",
        "Stir-fry bamboo shoots with fish sauce for 3 mins until flavorful.",
        "Return beef and add shredded lolot leaves; toss for 30s.",
        "Serve hot with cracked black pepper."
      ]
    }
  },
  {
    "id": "vn-su-su-xao-trung",
    "title": {
      "vi": "Su Su Bào Sợi Xào Trứng Gà Bùi Béo",
      "en": "Stir-fried Chayote Shreds with Eggs"
    },
    "image": "/dishes/vn-su-su-xao-trung.jpg",
    "category": {
      "vi": "Món Xào",
      "en": "Stir-fry"
    },
    "mealType": [
      "lunch",
      "dinner"
    ],
    "region": "national",
    "diningType": [
      "home_cook"
    ],
    "isPopular": true,
    "popularityScore": 91,
    "dietaryTags": {
      "vi": [
        "Cơm nhà",
        "Dân dã",
        "Tiết kiệm"
      ],
      "en": [
        "Budget Friendly",
        "Home Cook",
        "Quick"
      ]
    },
    "time": "15m",
    "servings": 4,
    "calories": 160,
    "protein": 9,
    "fat": 10,
    "carbs": 8,
    "servingSize": {
      "vi": "1 đĩa (~220g)",
      "en": "1 plate (~220g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia",
      "en": "National Institute of Nutrition"
    },
    "recipeSource": {
      "vi": "Bếp Cơm Mẹ Nấu",
      "en": "Mom's Vietnamese Kitchen"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Su su gọt vỏ bào sợi mỏng",
          "en": "Chayote peeled & julienned"
        },
        "amount": "2 quả"
      },
      {
        "name": {
          "vi": "Trứng gà ta",
          "en": "Eggs"
        },
        "amount": "2 quả"
      },
      {
        "name": {
          "vi": "Hành tím băm, hành hoa",
          "en": "Shallots & scallions"
        },
        "amount": "Vừa đủ"
      },
      {
        "name": {
          "vi": "Hạt nêm, nước mắm, tiêu",
          "en": "Seasonings"
        },
        "amount": "Vừa đủ"
      }
    ],
    "instructions": {
      "vi": [
        "Su su gọt vỏ rửa sạch mủ, bào sợi mỏng vừa phải.",
        "Phi thơm hành tím, cho su su vào xào trên lửa vừa khoảng 3 phút cho chín tới giữ độ giòn ngọt.",
        "Gạt su su sang một bên chảo, đập trứng gà vào dùng đũa khuấy tơi cho trứng chín xốp.",
        "Đảo đều su su quyện cùng trứng, nêm nước mắm và tiêu xay vừa miệng.",
        "Rắc hành hoa thái nhỏ, múc ra đĩa ăn kèm cơm nóng."
      ],
      "en": [
        "Peel chayote under running water, julienne into strips.",
        "Sauté shallots, cook chayote over medium heat for 3 mins until tender-crisp.",
        "Push chayote aside, crack eggs directly into skillet and scramble softly.",
        "Toss chayote and eggs together; season with fish sauce and pepper.",
        "Garnish with scallions and serve hot."
      ]
    }
  },
  {
    "id": "vn-ngo-sen-xao-tom-thit",
    "title": {
      "vi": "Ngó Sen Xào Tôm Thịt Thanh Giòn",
      "en": "Stir-fried Lotus Stem with Shrimp and Pork"
    },
    "image": "/dishes/vn-ngo-sen-xao-tom-thit.jpg",
    "category": {
      "vi": "Món Xào",
      "en": "Stir-fry"
    },
    "mealType": [
      "lunch",
      "dinner"
    ],
    "region": "south",
    "diningType": [
      "home_cook"
    ],
    "isPopular": true,
    "popularityScore": 92,
    "dietaryTags": {
      "vi": [
        "Thanh giòn",
        "Đẹp mắt",
        "Giàu dinh dưỡng"
      ],
      "en": [
        "Crunchy",
        "Colorful",
        "Nutritious"
      ]
    },
    "time": "20m",
    "servings": 4,
    "calories": 220,
    "protein": 20,
    "fat": 10,
    "carbs": 12,
    "servingSize": {
      "vi": "1 đĩa (~280g)",
      "en": "1 plate (~280g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia",
      "en": "National Institute of Nutrition"
    },
    "recipeSource": {
      "vi": "Ẩm thực Miền Tây Nam Bộ",
      "en": "Mekong Delta Cuisine"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Ngó sen tươi chẻ đôi ngâm giấm",
          "en": "Fresh lotus stems halved"
        },
        "amount": "300g"
      },
      {
        "name": {
          "vi": "Tôm sú bóc vỏ",
          "en": "Peeled tiger prawns"
        },
        "amount": "150g"
      },
      {
        "name": {
          "vi": "Thịt nạc dăm heo thái mỏng",
          "en": "Sliced lean pork"
        },
        "amount": "100g"
      },
      {
        "name": {
          "vi": "Cà rốt thái sợi, cần tây",
          "en": "Carrot julienne & celery"
        },
        "amount": "Vừa đủ"
      },
      {
        "name": {
          "vi": "Tỏi băm, nước mắm, tiêu",
          "en": "Garlic, fish sauce, pepper"
        },
        "amount": "Vừa đủ"
      }
    ],
    "instructions": {
      "vi": [
        "Ngó sen cắt khúc ngâm nước chanh loãng cho trắng giòn, vớt ra để ráo.",
        "Phi thơm tỏi, xào thịt heo và tôm chín săn thơm.",
        "Cho ngó sen và cà rốt vào xào nhanh tay trên lửa lớn trong 2 phút để ngó sen giữ trọn độ giòn mát.",
        "Nêm nước mắm ngon và hạt nêm vừa vị, cho cần tây cắt khúc vào đảo đều.",
        "Bày ra đĩa rắc tiêu đen dùng nóng."
      ],
      "en": [
        "Cut lotus stems into batons, soak in lemon water to keep pearly white and crisp.",
        "Sauté garlic, cook pork and shrimp until seared.",
        "Add lotus stems and carrots; stir-fry over high heat for 2 mins to retain crunch.",
        "Season with fish sauce, toss in celery stalks.",
        "Serve hot sprinkled with ground pepper."
      ]
    }
  },
  {
    "id": "vn-dua-chua-xao-top-mo",
    "title": {
      "vi": "Dưa Cải Chua Xào Tóp Mỡ Hành Hoa Béo Giòn",
      "en": "Stir-fried Pickled Mustard Greens with Crispy Pork Cracklings"
    },
    "image": "/dishes/vn-dua-chua-xao-top-mo.jpg",
    "category": {
      "vi": "Món Xào",
      "en": "Stir-fry"
    },
    "mealType": [
      "lunch",
      "dinner"
    ],
    "region": "north",
    "diningType": [
      "home_cook"
    ],
    "isPopular": true,
    "popularityScore": 96,
    "dietaryTags": {
      "vi": [
        "Cơm nhà",
        "Ký ức tuổi thơ",
        "Siêu hao cơm"
      ],
      "en": [
        "Comfort Food",
        "Crispy Cracklings",
        "Tangy"
      ]
    },
    "time": "15m",
    "servings": 4,
    "calories": 260,
    "protein": 10,
    "fat": 22,
    "carbs": 6,
    "servingSize": {
      "vi": "1 đĩa xào (~220g)",
      "en": "1 plate (~220g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia",
      "en": "National Institute of Nutrition"
    },
    "recipeSource": {
      "vi": "Ẩm thực Hà Nội Cũ",
      "en": "Old Hanoi Family Cooking"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Dưa cải chua muối vàng giòn",
          "en": "Pickled mustard greens"
        },
        "amount": "350g"
      },
      {
        "name": {
          "vi": "Tóp mỡ heo giòn rụm",
          "en": "Crispy pork cracklings"
        },
        "amount": "80g"
      },
      {
        "name": {
          "vi": "Mỡ heo nước",
          "en": "Rendered pork lard"
        },
        "amount": "2 thìa canh"
      },
      {
        "name": {
          "vi": "Hành khô băm, hành hoa cắt khúc",
          "en": "Shallots & scallions"
        },
        "amount": "Vừa đủ"
      },
      {
        "name": {
          "vi": "Nước mắm ngon, ớt hiểm, tiêu",
          "en": "Fish sauce, chili, pepper"
        },
        "amount": "Vừa đủ"
      }
    ],
    "instructions": {
      "vi": [
        "Dưa chua rửa sơ vắt ráo nước để giảm bớt độ chua mặn gắt.",
        "Phi thơm hành khô với mỡ heo trong chảo nóng già.",
        "Trút dưa cải chua vào xào kỹ trên lửa vừa trong 5-7 phút cho dưa ngấm mỡ bóng bẩy săn lại.",
        "Nêm 1 thìa nước mắm ngon, chút đường và ớt thái lát cho vị chua mặn ngọt cay hòa quyện.",
        "Cho tóp mỡ giòn và hành hoa vào đảo nhanh 1 phút cho tóp mỡ ngấm sốt mà vẫn giữ độ giòn tan.",
        "Múc ra đĩa rắc tiêu, ăn cùng cơm nóng vét sạch nồi."
      ],
      "en": [
        "Rinse pickled mustard greens, squeeze gently to temper sharp acidity.",
        "Sauté shallots in rendered pork lard until golden.",
        "Add pickled greens and fry for 5-7 mins until deeply infused and translucent.",
        "Season with fish sauce, a pinch of sugar, and chili slices.",
        "Toss in crispy pork cracklings and scallions for 1 minute so cracklings stay crisp.",
        "Serve hot with plenty of steamed rice."
      ]
    }
  },
  {
    "id": "vn-banh-mi-chao-ha-noi",
    "title": {
      "vi": "Bánh Mì Chảo Hà Nội Pâté Trứng Xúc Xích",
      "en": "Hanoi Sizzling Pan Bread with Pâté, Eggs & Sausage"
    },
    "image": "/dishes/vn-banh-mi-chao-ha-noi.jpg",
    "category": {
      "vi": "Món Mặn",
      "en": "Savory Dish"
    },
    "mealType": [
      "breakfast",
      "lunch",
      "dinner"
    ],
    "region": "north",
    "diningType": [
      "home_cook",
      "eat_out"
    ],
    "isPopular": true,
    "popularityScore": 98,
    "dietaryTags": {
      "vi": [
        "Ăn sáng hot",
        "Đặc sản Hà Nội",
        "Béo ngậy"
      ],
      "en": [
        "Hanoi Breakfast",
        "Street Food",
        "Savory"
      ]
    },
    "time": "20m",
    "servings": 2,
    "calories": 520,
    "protein": 26,
    "fat": 32,
    "carbs": 35,
    "servingSize": {
      "vi": "1 chảo gang kèm 1 bánh mì",
      "en": "1 skillet with baguette"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia",
      "en": "National Institute of Nutrition"
    },
    "recipeSource": {
      "vi": "Ẩm thực Phố Cổ Hà Nội",
      "en": "Hanoi Street Bites"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Bánh mì Việt Nam giòn rụm",
          "en": "Crispy baguettes"
        },
        "amount": "2 ổ"
      },
      {
        "name": {
          "vi": "Trứng gà ốp la lòng đào",
          "en": "Sunny-side eggs"
        },
        "amount": "2 quả"
      },
      {
        "name": {
          "vi": "Pâté gan heo béo ngậy",
          "en": "Pork liver pâté"
        },
        "amount": "80g"
      },
      {
        "name": {
          "vi": "Xúc xích khía vảy rồng",
          "en": "Sausages scored"
        },
        "amount": "2 cây"
      },
      {
        "name": {
          "vi": "Thịt bò thái mỏng xào tái",
          "en": "Seared beef"
        },
        "amount": "100g"
      },
      {
        "name": {
          "vi": "Nước sốt tiêu đen hoặc sốt cà chua sánh đỏ",
          "en": "Rich pepper tomato gravy"
        },
        "amount": "1 bát"
      }
    ],
    "instructions": {
      "vi": [
        "Làm nóng chảo gang con bò trên bếp, quết lớp bơ thơm tan chảy.",
        "Đập trứng gà ốp la giữ lòng đào béo ngậy, chiên xúc xích và thịt bò chín tới.",
        "Xắt lát dày pâté gan đặt vào chảo, rưới nước sốt sánh mịn sủi tăm xung quanh.",
        "Rắc tiêu đen, hành lá, ớt tỉa hoa, phục vụ chảo gang nóng xèo xèo.",
        "Bẻ bánh mì giòn rụm quẹt đẫm pâté, lòng đào và nước sốt đậm đà."
      ],
      "en": [
        "Heat cast-iron skillet, melt a knob of fragrant butter.",
        "Fry eggs sunny-side up with runny yolks; sear sausages and beef.",
        "Add a thick slice of rich pâté, pour simmering savory tomato gravy around.",
        "Sprinkle with cracked black pepper and scallions, serve sizzling hot.",
        "Dip warm crispy baguette into runny yolk, creamy pâté, and rich sauce."
      ]
    }
  },
  {
    "id": "vn-banh-da-cua-hai-phong",
    "title": {
      "vi": "Bánh Đa Cua Đỏ Hải Phòng Chả Lá Lốt",
      "en": "Hai Phong Red Noodle Soup with Crab & Lolot Rolls"
    },
    "image": "/dishes/vn-banh-da-cua-hai-phong.jpg",
    "category": {
      "vi": "Món Nước",
      "en": "Noodle Soup"
    },
    "mealType": [
      "breakfast",
      "lunch",
      "dinner"
    ],
    "region": "north",
    "diningType": [
      "home_cook",
      "eat_out"
    ],
    "isPopular": true,
    "popularityScore": 98,
    "dietaryTags": {
      "vi": [
        "Đặc sản đất Cảng",
        "Nước dùng cua đồng",
        "Bánh đa đỏ"
      ],
      "en": [
        "Hai Phong Icon",
        "Crab Broth",
        "Red Noodles"
      ]
    },
    "time": "45m",
    "servings": 4,
    "calories": 460,
    "protein": 26,
    "fat": 16,
    "carbs": 53,
    "servingSize": {
      "vi": "1 tô lớn (~650g)",
      "en": "1 large bowl (~650g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia",
      "en": "National Institute of Nutrition"
    },
    "recipeSource": {
      "vi": "Ẩm thực Hải Phòng Đất Cảng",
      "en": "Hai Phong Port City Cuisine"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Bánh đa đỏ Hải Phòng",
          "en": "Hai Phong brown/red rice noodles"
        },
        "amount": "400g"
      },
      {
        "name": {
          "vi": "Cua đồng giã lọc lấy nước riêu",
          "en": "Field crab broth & meat paste"
        },
        "amount": "500g"
      },
      {
        "name": {
          "vi": "Chả lá lốt chiên vàng",
          "en": "Fried lolot pork rolls"
        },
        "amount": "8 cuốn"
      },
      {
        "name": {
          "vi": "Chả cá Hải Phòng",
          "en": "Hai Phong fish cakes"
        },
        "amount": "150g"
      },
      {
        "name": {
          "vi": "Rau muống chần giòn, rau rút",
          "en": "Blanched water spinach & water mimosa"
        },
        "amount": "200g"
      },
      {
        "name": {
          "vi": "Hành phi mỡ nước, tóp mỡ, ớt chí chương",
          "en": "Fried shallots, pork cracklings, chili paste"
        },
        "amount": "Vừa đủ"
      }
    ],
    "instructions": {
      "vi": [
        "Nấu nước cua đồng với chút muối trên lửa nhỏ, khuấy nhẹ cho mảng riêu cua kết tảng nổi lên mặt thì vớt riêng ra bát.",
        "Chưng gạch cua với mỡ hành cho thơm lừng óng vàng rồi trút vào nồi nước dùng cùng cà chua xào.",
        "Ngâm bánh đa đỏ trong nước lạnh 5 phút, chần qua nước sôi rồi xếp vào tô.",
        "Xếp rau muống chần, chả lá lốt, chả cá, mảng riêu cua và tóp mỡ giòn lên trên.",
        "Chan nước dùng cua ngọt thanh đậm đà đang sôi sùng sục vào tô, thêm hành phi và ớt chí chương Hải Phòng cay xé."
      ],
      "en": [
        "Gently simmer crab water with salt until crab meat rafts float to surface; gently scoop into a bowl.",
        "Sauté crab roe with shallot oil and add into broth with softened tomatoes.",
        "Soak red noodles in cold water, blanch in boiling water, place into bowls.",
        "Top with blanched water spinach, lolot pork rolls, fish cakes, crab meat, and crispy cracklings.",
        "Ladle piping hot crab broth over noodles, serve with Hai Phong chí chương chili paste."
      ]
    }
  },
  {
    "id": "vn-banh-canh-trang-bang",
    "title": {
      "vi": "Bánh Canh Trảng Bàng Giò Heo Tây Ninh",
      "en": "Trang Bang Thick Rice Noodle Soup with Pork Hock"
    },
    "image": "/dishes/vn-banh-canh-trang-bang.jpg",
    "category": {
      "vi": "Món Nước",
      "en": "Noodle Soup"
    },
    "mealType": [
      "breakfast",
      "lunch",
      "dinner"
    ],
    "region": "south",
    "diningType": [
      "home_cook",
      "eat_out"
    ],
    "isPopular": true,
    "popularityScore": 94,
    "dietaryTags": {
      "vi": [
        "Đặc sản Tây Ninh",
        "Nước dùng trong veo",
        "Rau rừng"
      ],
      "en": [
        "Tay Ninh Icon",
        "Clear Broth",
        "Wild Herbs"
      ]
    },
    "time": "60m",
    "servings": 4,
    "calories": 470,
    "protein": 30,
    "fat": 18,
    "carbs": 48,
    "servingSize": {
      "vi": "1 tô bánh canh (~600g)",
      "en": "1 bowl (~600g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia",
      "en": "National Institute of Nutrition"
    },
    "recipeSource": {
      "vi": "Ẩm thực Trảng Bàng Tây Ninh",
      "en": "Trang Bang Culinary Heritage"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Sợi bánh canh Trảng Bàng bột gạo",
          "en": "Trang Bang rice noodles"
        },
        "amount": "500g"
      },
      {
        "name": {
          "vi": "Khoanh giò heo hoặc bắp giò luộc",
          "en": "Boiled pork hock rounds"
        },
        "amount": "600g"
      },
      {
        "name": {
          "vi": "Xương ống hầm nước dùng trong",
          "en": "Pork marrow bones for clear stock"
        },
        "amount": "800g"
      },
      {
        "name": {
          "vi": "Rau rừng Tây Ninh tổng hợp (lá cóc, quế vị, sao nhái...)",
          "en": "Tay Ninh wild forest herbs"
        },
        "amount": "1 rổ lớn"
      },
      {
        "name": {
          "vi": "Hành tím phi, ớt hiểm ngâm mắm",
          "en": "Fried shallots, chili fish sauce"
        },
        "amount": "Vừa đủ"
      }
    ],
    "instructions": {
      "vi": [
        "Hầm xương ống và bắp giò heo trên lửa nhỏ liu riu, thường xuyên hớt bọt để nước dùng trong vắt, ngọt thanh từ tủy xương.",
        "Vớt giò heo ra ngâm nước lạnh cho da giòn trắng rồi thái khoanh vừa ăn.",
        "Trụng sợi bánh canh qua nước sôi rồi chia đều vào các tô.",
        "Xếp giò heo, rắc hành phi thơm nức và hành hoa thái nhỏ lên trên.",
        "Chan nước dùng sôi sùng sục vào tô, ăn kèm rổ rau rừng Tây Ninh tươi mát và chấm nước mắm tiêu ớt."
      ],
      "en": [
        "Simmer pork bones and hock over gentle heat, skimming continuously for crystal-clear sweet broth.",
        "Ice bath the cooked pork hock, slice into rounds.",
        "Blanch thick rice noodles and divide into bowls.",
        "Arrange pork hock slices, crispy shallots, and scallions on top.",
        "Ladle scalding clear broth over, serve with a basket of fresh wild herbs and dipping fish sauce."
      ]
    }
  },
  {
    "id": "vn-bun-sua-quy-nhon",
    "title": {
      "vi": "Bún Sứa Quy Nhơn Nước Dùng Trong Veo",
      "en": "Quy Nhon Jellyfish & Fish Cake Noodle Soup"
    },
    "image": "/dishes/vn-bun-sua-quy-nhon.jpg",
    "category": {
      "vi": "Món Nước",
      "en": "Noodle Soup"
    },
    "mealType": [
      "breakfast",
      "lunch"
    ],
    "region": "central",
    "diningType": [
      "home_cook",
      "eat_out"
    ],
    "isPopular": true,
    "popularityScore": 93,
    "dietaryTags": {
      "vi": [
        "Đặc sản Quy Nhơn",
        "Thanh mát giòn sần sật",
        "Ít béo"
      ],
      "en": [
        "Coastal Specialty",
        "Crunchy Jellyfish",
        "Low Fat"
      ]
    },
    "time": "35m",
    "servings": 4,
    "calories": 360,
    "protein": 24,
    "fat": 8,
    "carbs": 49,
    "servingSize": {
      "vi": "1 tô bún sứa (~600g)",
      "en": "1 bowl (~600g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia",
      "en": "National Institute of Nutrition"
    },
    "recipeSource": {
      "vi": "Ẩm thực Đất Võ Bình Định",
      "en": "Quy Nhon Coastal Cuisine"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Sứa biển tươi ngâm giòn",
          "en": "Crisp fresh jellyfish"
        },
        "amount": "300g"
      },
      {
        "name": {
          "vi": "Chả cá thu Quy Nhơn chiên và hấp",
          "en": "Quy Nhon fried & steamed fish cakes"
        },
        "amount": "200g"
      },
      {
        "name": {
          "vi": "Bún tươi sợi nhỏ",
          "en": "Fresh rice vermicelli"
        },
        "amount": "500g"
      },
      {
        "name": {
          "vi": "Nước dùng cá liệt hoặc cá thu ngọt thanh",
          "en": "Fish bone clear stock"
        },
        "amount": "1.2 lít"
      },
      {
        "name": {
          "vi": "Cà chua, dứa chín, hành lá, rau thơm ghém",
          "en": "Tomato, pineapple, herbs"
        },
        "amount": "Vừa đủ"
      }
    ],
    "instructions": {
      "vi": [
        "Sứa ngâm xả sạch vị mặn, chần sơ qua nước sôi ngâm ngay vào nước đá để giữ độ giòn sần sật.",
        "Nấu nước dùng từ xương cá biển ngọt thanh với dứa chín và cà chua.",
        "Chả cá hấp và chiên thái miếng vừa ăn.",
        "Cho bún vào tô, xếp chả cá và sứa giòn lên trên.",
        "Chan nước dùng nóng hổi, rắc hành ngò thái nhỏ và thưởng thức cùng rau ghém chuối chát, chấm mắm ớt tỏi."
      ],
      "en": [
        "Rinse jellyfish thoroughly, quickly scald and shock in ice water for crunchy texture.",
        "Simmer fish stock with pineapple and tomatoes for a light, aromatic broth.",
        "Slice fish cakes into strips.",
        "Place vermicelli in bowls, top with fish cakes and crisp jellyfish.",
        "Pour hot clear broth over, garnish with herbs, and serve with shredded banana blossom and chili fish sauce."
      ]
    }
  },
  {
    "id": "vn-bun-cha-ca-quy-nhon",
    "title": {
      "vi": "Bún Chả Cá Quy Nhơn Đậm Vị Biển Miền Trung",
      "en": "Quy Nhon Fish Cake Rice Vermicelli Soup"
    },
    "image": "/dishes/vn-bun-cha-ca-quy-nhon.jpg",
    "category": {
      "vi": "Món Nước",
      "en": "Noodle Soup"
    },
    "mealType": [
      "breakfast",
      "lunch",
      "dinner"
    ],
    "region": "central",
    "diningType": [
      "home_cook",
      "eat_out"
    ],
    "isPopular": true,
    "popularityScore": 92,
    "dietaryTags": {
      "vi": [
        "Miền Trung",
        "Đậm đà",
        "Chả cá dai giòn"
      ],
      "en": [
        "Central Vietnam",
        "Seafood",
        "Chewy Fish Cakes"
      ]
    },
    "time": "35m",
    "servings": 4,
    "calories": 410,
    "protein": 26,
    "fat": 12,
    "carbs": 50,
    "servingSize": {
      "vi": "1 tô bún (~600g)",
      "en": "1 bowl (~600g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia",
      "en": "National Institute of Nutrition"
    },
    "recipeSource": {
      "vi": "Ẩm thực Miền Trung",
      "en": "Central Vietnamese Heritage"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Chả cá nhồng / cá thu quết dai",
          "en": "Hand-pounded bouncy fish cakes"
        },
        "amount": "350g"
      },
      {
        "name": {
          "vi": "Bún tươi",
          "en": "Fresh vermicelli"
        },
        "amount": "500g"
      },
      {
        "name": {
          "vi": "Nước hầm đầu xương cá ngọt lịm",
          "en": "Fish stock"
        },
        "amount": "1.2 lít"
      },
      {
        "name": {
          "vi": "Bí đỏ, bắp cải thái miếng vuông",
          "en": "Pumpkin & cabbage pieces"
        },
        "amount": "200g"
      },
      {
        "name": {
          "vi": "Hành hoa, ớt sa tế, mắm ruốc dầm",
          "en": "Scallions, sate chili, shrimp paste"
        },
        "amount": "Vừa đủ"
      }
    ],
    "instructions": {
      "vi": [
        "Nấu nước hầm từ xương cá tươi lọc sạch, cho bí đỏ và bắp cải vào nấu ngọt nước tự nhiên.",
        "Chả cá chiên vàng cắt lát tam giác xếp vào tô bún đã chần nóng.",
        "Chan nước dùng sôi sùng sục, rắc hành lá và tiêu sọ.",
        "Thêm thìa sa tế cay nồng đặc trưng xứ miền Trung và rau sống ghém."
      ],
      "en": [
        "Simmer fresh fish bones, add pumpkin and cabbage for natural sweetness.",
        "Slice fried fish cakes into wedges and arrange over blanched noodles in bowls.",
        "Ladle boiling broth over, garnish with scallions and white pepper.",
        "Serve with fiery lemongrass chili paste and fresh salad greens."
      ]
    }
  },
  {
    "id": "vn-bun-quay-phu-quoc",
    "title": {
      "vi": "Bún Quậy Phú Quốc Chả Tôm Chả Mực Tươi",
      "en": "Phu Quoc Stirred Noodle Soup with Fresh Shrimp & Squid Paste"
    },
    "image": "/dishes/vn-bun-quay-phu-quoc.jpg",
    "category": {
      "vi": "Món Nước",
      "en": "Noodle Soup"
    },
    "mealType": [
      "breakfast",
      "lunch",
      "dinner"
    ],
    "region": "south",
    "diningType": [
      "home_cook",
      "eat_out"
    ],
    "isPopular": true,
    "popularityScore": 98,
    "dietaryTags": {
      "vi": [
        "Đặc sản Phú Quốc",
        "Tươi sống tại chỗ",
        "Nước chấm tự quậy"
      ],
      "en": [
        "Phu Quoc Island",
        "Super Fresh Seafood",
        "Custom Dipping Dip"
      ]
    },
    "time": "30m",
    "servings": 4,
    "calories": 420,
    "protein": 28,
    "fat": 8,
    "carbs": 58,
    "servingSize": {
      "vi": "1 tô bún quậy (~600g)",
      "en": "1 bowl (~600g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia",
      "en": "National Institute of Nutrition"
    },
    "recipeSource": {
      "vi": "Ẩm thực Đảo Ngọc Phú Quốc",
      "en": "Phu Quoc Island Cuisine"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Thịt tôm tươi quết nhuyễn dẻo quánh",
          "en": "Fresh pounded shrimp paste"
        },
        "amount": "250g"
      },
      {
        "name": {
          "vi": "Thịt mực tươi quết nhuyễn",
          "en": "Fresh pounded squid paste"
        },
        "amount": "200g"
      },
      {
        "name": {
          "vi": "Bún tươi ép tại chỗ",
          "en": "Freshly extruded rice vermicelli"
        },
        "amount": "400g"
      },
      {
        "name": {
          "vi": "Nước luộc bún nóng hổi",
          "en": "Hot noodle broth"
        },
        "amount": "1 lít"
      },
      {
        "name": {
          "vi": "Hành lá, hạt tiêu Phú Quốc",
          "en": "Scallions, Phu Quoc black pepper"
        },
        "amount": "Vừa đủ"
      },
      {
        "name": {
          "vi": "Muối, đường, bột ngọt, quất (tắc), ớt cay để tự quậy nước chấm",
          "en": "Salt, sugar, calamansi, chili for sauce"
        },
        "amount": "1 bộ chén"
      }
    ],
    "instructions": {
      "vi": [
        "Phết mỏng chả tôm và chả mực tươi vào đáy và thành tô sứ.",
        "Chan ngay nước dùng sôi sùng sục vào tô rồi dùng đũa quậy nhanh tay cho chả tôm mực vừa chín tới giữ trọn vị ngọt tươi nguyên bản.",
        "Cho bún tươi vừa ép nóng vào tô, rắc nhiều hành hoa và hạt tiêu cay nồng Phú Quốc.",
        "Tự pha chén nước chấm: cho muối, đường, ớt xay, vắt tắc vào chén rồi quậy thật mạnh tay đến khi sủi bọt sánh đỏ.",
        "Vừa húp bún vừa chấm chả tôm mực vào chén nước chấm quậy thần thánh."
      ],
      "en": [
        "Smear fresh raw shrimp and squid paste along the inner bottom and walls of ceramic bowls.",
        "Pour scalding hot broth directly into the bowl and stir briskly ('quậy') to gently poach the seafood paste.",
        "Add warm noodles, top with plenty of chopped scallions and aromatic Phu Quoc pepper.",
        "Self-mix the iconic sauce: vigorously whip sugar, salt, chili, and calamansi juice until frothy and thick.",
        "Sip the naturally sweet broth and dip poached seafood into the tangy spicy sauce."
      ]
    }
  },
  {
    "id": "vn-mi-vit-tiem",
    "title": {
      "vi": "Mì Vịt Tiềm Thuốc Bắc Nấm Đông Cô Chợ Lớn",
      "en": "Cholon Braised Herbal Duck Leg with Egg Noodles"
    },
    "image": "/dishes/vn-mi-vit-tiem.jpg",
    "category": {
      "vi": "Món Nước",
      "en": "Noodle Soup"
    },
    "mealType": [
      "lunch",
      "dinner"
    ],
    "region": "south",
    "diningType": [
      "home_cook",
      "eat_out"
    ],
    "isPopular": true,
    "popularityScore": 96,
    "dietaryTags": {
      "vi": [
        "Ẩm thực Chợ Lớn",
        "Bổ dưỡng",
        "Thịt mềm rục"
      ],
      "en": [
        "Cantonese Heritage",
        "Herbal Broth",
        "Tender Duck"
      ]
    },
    "time": "60m",
    "servings": 4,
    "calories": 580,
    "protein": 34,
    "fat": 26,
    "carbs": 52,
    "servingSize": {
      "vi": "1 tô lớn gồm 1 đùi vịt tiềm",
      "en": "1 large bowl with duck leg"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia",
      "en": "National Institute of Nutrition"
    },
    "recipeSource": {
      "vi": "Ẩm thực Người Hoa Sài Gòn",
      "en": "Cholon Saigon Chinese Food"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Đùi vịt góc tư to",
          "en": "Whole duck leg quarters"
        },
        "amount": "4 chiếc (~1kg)"
      },
      {
        "name": {
          "vi": "Mì trứng sợi nhỏ dai vàng",
          "en": "Thin egg noodles"
        },
        "amount": "400g"
      },
      {
        "name": {
          "vi": "Gói gia vị tiềm thuốc bắc (thục địa, hoài sơn, kỷ tử, hoa hồi, quế)",
          "en": "Herbal stew pouch"
        },
        "amount": "1 gói"
      },
      {
        "name": {
          "vi": "Nấm đông cô ngâm nở",
          "en": "Shiitake mushrooms"
        },
        "amount": "12 tai"
      },
      {
        "name": {
          "vi": "Cải thìa chần xanh giòn",
          "en": "Blanched baby bok choy"
        },
        "amount": "200g"
      },
      {
        "name": {
          "vi": "Xì dầu, hắc xì dầu, rượu mai quế lộ",
          "en": "Soy sauce, dark soy, rose wine"
        },
        "amount": "Vừa đủ"
      }
    ],
    "instructions": {
      "vi": [
        "Đùi vịt ướp rượu mai quế lộ, ngũ vị hương, xì dầu rồi chiên ngập dầu cho da vịt căng giòn màu nâu đỏ sẫm.",
        "Cho vịt vào nồi hầm cùng túi thuốc bắc, nấm đông cô và nước dừa tươi trên lửa nhỏ liu riu trong 45-50 phút đến khi thịt vịt mềm rục thấm đượm thảo mộc.",
        "Trụng mì trứng qua nước sôi rồi nhúng qua nước lạnh cho sợi mì dai giòn sần sật.",
        "Xếp mì vào tô lớn, đặt đùi vịt tiềm óng ả lên trên cùng nấm đông cô và cải thìa xanh mướt.",
        "Chan nước dùng thuốc bắc màu nâu đen sóng sánh thơm nồng, ăn kèm đu đủ chua ngâm giấm."
      ],
      "en": [
        "Marinate duck legs in rose wine and spices; deep fry until skin is deep mahogany brown and crispy.",
        "Simmer duck in herbal broth with shiitake and coconut water for 45-50 mins until fork-tender.",
        "Blanch egg noodles, shock in cold water for springy bite, place into bowls.",
        "Top with tender braised duck quarter, mushrooms, and vibrant baby bok choy.",
        "Ladle aromatic dark herbal broth over, serve with pickled green papaya."
      ]
    }
  },
  {
    "id": "vn-mi-hoanh-thanh-xa-xiu",
    "title": {
      "vi": "Mì Hoành Thánh Xá Xíu Sườn Non Sài Gòn",
      "en": "Saigon Wonton Noodle Soup with Char Siu & Pork Ribs"
    },
    "image": "/dishes/vn-mi-hoanh-thanh-xa-xiu.jpg",
    "category": {
      "vi": "Món Nước",
      "en": "Noodle Soup"
    },
    "mealType": [
      "breakfast",
      "lunch",
      "dinner"
    ],
    "region": "south",
    "diningType": [
      "home_cook",
      "eat_out"
    ],
    "isPopular": true,
    "popularityScore": 97,
    "dietaryTags": {
      "vi": [
        "Ẩm thực Sài Gòn",
        "Hoành thánh tôm thịt",
        "Đậm đà"
      ],
      "en": [
        "Saigon Classic",
        "Wontons",
        "Char Siu"
      ]
    },
    "time": "45m",
    "servings": 4,
    "calories": 490,
    "protein": 30,
    "fat": 16,
    "carbs": 56,
    "servingSize": {
      "vi": "1 tô mì thập cẩm (~650g)",
      "en": "1 combo bowl (~650g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia",
      "en": "National Institute of Nutrition"
    },
    "recipeSource": {
      "vi": "Ẩm thực Mì Chợ Lớn",
      "en": "Saigon Noodle Houses"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Mì trứng tươi sợi vàng",
          "en": "Fresh egg noodles"
        },
        "amount": "400g"
      },
      {
        "name": {
          "vi": "Hoành thánh nhân tôm thịt",
          "en": "Handmade shrimp & pork wontons"
        },
        "amount": "16 chiếc"
      },
      {
        "name": {
          "vi": "Thịt xá xíu thái lát mỏng",
          "en": "Sliced red char siu pork"
        },
        "amount": "200g"
      },
      {
        "name": {
          "vi": "Nước hầm xương heo ngọt trong vắt",
          "en": "Pork bone clear broth"
        },
        "amount": "1.2 lít"
      },
      {
        "name": {
          "vi": "Hẹ lá, cải ngọt, tóp mỡ, hành phi",
          "en": "Chives, choy sum, cracklings, fried shallots"
        },
        "amount": "Vừa đủ"
      }
    ],
    "instructions": {
      "vi": [
        "Luộc hoành thánh trong nồi nước sôi đến khi nổi lên trên mặt nước và vỏ bánh trong suốt thì vớt ra.",
        "Trụng mì trứng dai giòn, xóc đều với chút mỡ tỏi phi cho sợi mì bóng mượt thơm ngậy.",
        "Xếp mì vào tô, bày hoành thánh, vài lát thịt xá xíu đỏ au, cải ngọt và hẹ cắt khúc lên trên.",
        "Chan nước dùng xương hầm trong vắt ngọt lịm vào tô.",
        "Rắc tóp mỡ giòn và hành phi thơm lừng, thưởng thức cùng dấm đỏ Tiều và sa tế."
      ],
      "en": [
        "Boil wontons until they float and skins turn translucent; remove.",
        "Blanch springy egg noodles, toss lightly with garlic oil for gloss and aroma.",
        "Arrange noodles, wontons, sweet char siu slices, greens, and chives in bowls.",
        "Pour clear, naturally sweet pork bone stock over.",
        "Top with crispy pork cracklings, fried shallots, and serve with red vinegar and chili sauce."
      ]
    }
  },
  {
    "id": "vn-hu-tieu-kho-sa-dec",
    "title": {
      "vi": "Hủ Tiếu Khô Sa Đéc Nước Sốt Đậm Đà",
      "en": "Sa Dec Dry Rice Noodles with Savory Dark Glaze"
    },
    "image": "/dishes/vn-hu-tieu-kho-sa-dec.jpg",
    "category": {
      "vi": "Món Mặn",
      "en": "Savory Dish"
    },
    "mealType": [
      "breakfast",
      "lunch",
      "dinner"
    ],
    "region": "south",
    "diningType": [
      "home_cook",
      "eat_out"
    ],
    "isPopular": true,
    "popularityScore": 97,
    "dietaryTags": {
      "vi": [
        "Đặc sản Sa Đéc",
        "Hủ tiếu khô",
        "Sốt đặc chế"
      ],
      "en": [
        "Sa Dec Legend",
        "Dry Tossed Noodles",
        "Rich Glaze"
      ]
    },
    "time": "30m",
    "servings": 4,
    "calories": 450,
    "protein": 26,
    "fat": 14,
    "carbs": 55,
    "servingSize": {
      "vi": "1 tô hủ tiếu kèm 1 chén súp",
      "en": "1 noodle bowl with side soup"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia",
      "en": "National Institute of Nutrition"
    },
    "recipeSource": {
      "vi": "Ẩm thực Đồng Tháp Mười",
      "en": "Dong Thap Culinary Heritage"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Sợi hủ tiếu Sa Đéc dai giòn đặc trưng",
          "en": "Sa Dec chewy rice noodles"
        },
        "amount": "400g"
      },
      {
        "name": {
          "vi": "Tôm sú luộc nõn, thịt xá xíu, thịt băm",
          "en": "Prawns, char siu, minced pork"
        },
        "amount": "300g"
      },
      {
        "name": {
          "vi": "Trứng cút luộc",
          "en": "Hard-boiled quail eggs"
        },
        "amount": "8 quả"
      },
      {
        "name": {
          "vi": "Sốt trộn hủ tiếu khô (xì dầu, dầu hào, đường, tương đen, giấm tiều)",
          "en": "Signature dark sweet savory sauce"
        },
        "amount": "1 bát"
      },
      {
        "name": {
          "vi": "Hành phi, tóp mỡ, cần tây, hẹ, giá đỗ",
          "en": "Shallots, cracklings, celery, chives, bean sprouts"
        },
        "amount": "Vừa đủ"
      },
      {
        "name": {
          "vi": "Chén súp xương sườn ăn kèm",
          "en": "Side bowl of hot rib broth"
        },
        "amount": "4 chén"
      }
    ],
    "instructions": {
      "vi": [
        "Trụng sợi hủ tiếu Sa Đéc với giá đỗ vào tô, xóc đều với mỡ tỏi cho sợi hủ tiếu không dính và bóng bẩy.",
        "Nấu sốt trộn: đun sôi xì dầu, tương đen, dầu hào, đường và giấm tiều cho sệt lại.",
        "Rưới 2-3 thìa sốt đậm đà lên trên sợi hủ tiếu.",
        "Xếp tôm nõn, thịt xá xíu, thịt băm, trứng cút, cần tây, hẹ lá, tóp mỡ và thật nhiều hành phi giòn.",
        "Trộn đều trước khi thưởng thức, húp kèm chén nước dùng sườn heo thanh ngọt bốc khói."
      ],
      "en": [
        "Blanch chewy Sa Dec rice noodles and bean sprouts; toss with garlic oil.",
        "Simmer soy sauce, sweet bean paste, oyster sauce, sugar, and vinegar into a rich dark glaze.",
        "Drizzle signature sauce generously over noodles.",
        "Garnish with peeled prawns, char siu slices, minced pork, quail eggs, celery, chives, cracklings, and fried shallots.",
        "Toss well to coat every strand, savor alongside a piping-hot bowl of clear rib broth."
      ]
    }
  },
  {
    "id": "vn-pho-chien-phong",
    "title": {
      "vi": "Phở Chiên Phồng Bò Xào Rau Cải Ngũ Xã",
      "en": "Ngu Xa Puffed Crispy Pho Squares with Stir-fried Beef"
    },
    "image": "/dishes/vn-pho-chien-phong.jpg",
    "category": {
      "vi": "Món Mặn",
      "en": "Savory Dish"
    },
    "mealType": [
      "lunch",
      "dinner"
    ],
    "region": "north",
    "diningType": [
      "home_cook",
      "eat_out"
    ],
    "isPopular": true,
    "popularityScore": 96,
    "dietaryTags": {
      "vi": [
        "Đặc sản Hà Nội",
        "Giòn rụm phồng xốp",
        "Sốt sánh đậm đà"
      ],
      "en": [
        "Hanoi Specialty",
        "Puffed Noodles",
        "Savory Beef Glaze"
      ]
    },
    "time": "35m",
    "servings": 4,
    "calories": 520,
    "protein": 28,
    "fat": 24,
    "carbs": 48,
    "servingSize": {
      "vi": "1 đĩa phở chiên phồng (~400g)",
      "en": "1 plate (~400g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia",
      "en": "National Institute of Nutrition"
    },
    "recipeSource": {
      "vi": "Làng Phở Ngũ Xã Hà Nội",
      "en": "Ngu Xa Pho Village Hanoi"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Bánh phở vuông xếp lớp",
          "en": "Layered flat pho sheets cut in squares"
        },
        "amount": "500g"
      },
      {
        "name": {
          "vi": "Thịt thăn bò thái mỏng",
          "en": "Thinly sliced beef sirloin"
        },
        "amount": "300g"
      },
      {
        "name": {
          "vi": "Rau cải ngọt cắt khúc",
          "en": "Choy sum greens"
        },
        "amount": "200g"
      },
      {
        "name": {
          "vi": "Cà chua, hành tây, tỏi băm",
          "en": "Tomatoes, onion, garlic"
        },
        "amount": "Vừa đủ"
      },
      {
        "name": {
          "vi": "Dầu hào, nước tương, bột năng tạo sốt sệt",
          "en": "Oyster sauce, soy sauce, starch slurry"
        },
        "amount": "Vừa đủ"
      },
      {
        "name": {
          "vi": "Dầu ăn chiên phồng",
          "en": "Oil for deep frying"
        },
        "amount": "300ml"
      }
    ],
    "instructions": {
      "vi": [
        "Bánh phở cắt thành từng miếng vuông 3x3cm (chập 3-4 lớp mỏng).",
        "Thả bánh phở vào chảo dầu sôi già, bánh phở sẽ lập tức phồng to thành chiếc gối vuông rỗng ruột vàng giòn rụm, vớt ra để ráo dầu trên giấy thấm.",
        "Phi thơm tỏi, xào thịt bò trên lửa lớn vừa chín tới thì trút riêng.",
        "Xào rau cải ngọt, cà chua và hành tây, nêm dầu hào xì dầu, rót bột năng vào khuấy đều tạo sốt sánh sệt nâu bóng.",
        "Trút thịt bò vào chảo rau đảo nhanh rồi rưới toàn bộ sốt bò rau cải nóng hổi lên trên đĩa bánh phở chiên phồng giòn tan."
      ],
      "en": [
        "Cut layered pho sheets into 3x3cm squares.",
        "Drop into hot oil; watch them puff instantly into golden, crispy hollow pillows; drain.",
        "Quickly sear beef with garlic over high heat; remove.",
        "Stir-fry choy sum, tomato, and onion; season with oyster sauce and thicken with starch slurry.",
        "Return beef to wok, then ladle the savory, glossy stir-fry over the crispy puffed pho pillows."
      ]
    }
  },
  {
    "id": "vn-pho-tron-ga-ha-noi",
    "title": {
      "vi": "Phở Trộn Thịt Gà Đậu Phộng Hành Phi Hà Nội",
      "en": "Hanoi Chicken Tossed Dry Pho with Peanuts & Fried Shallots"
    },
    "image": "/dishes/vn-pho-tron-ga-ha-noi.jpg",
    "category": {
      "vi": "Món Mặn",
      "en": "Savory Dish"
    },
    "mealType": [
      "lunch",
      "dinner"
    ],
    "region": "north",
    "diningType": [
      "home_cook",
      "eat_out"
    ],
    "isPopular": true,
    "popularityScore": 97,
    "dietaryTags": {
      "vi": [
        "Phố Cổ Hà Nội",
        "Thanh mát",
        "Chua ngọt hài hòa"
      ],
      "en": [
        "Hanoi Old Quarter",
        "Refreshing",
        "Sweet & Sour"
      ]
    },
    "time": "30m",
    "servings": 4,
    "calories": 430,
    "protein": 27,
    "fat": 11,
    "carbs": 56,
    "servingSize": {
      "vi": "1 tô phở trộn (~450g)",
      "en": "1 bowl (~450g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia",
      "en": "National Institute of Nutrition"
    },
    "recipeSource": {
      "vi": "Ẩm thực Phố Cổ Hà Nội",
      "en": "Hanoi Culinary Culture"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Bánh phở tươi",
          "en": "Fresh flat pho noodles"
        },
        "amount": "500g"
      },
      {
        "name": {
          "vi": "Thịt gà ta luộc xé miếng da giòn",
          "en": "Shredded poached chicken with crisp skin"
        },
        "amount": "350g"
      },
      {
        "name": {
          "vi": "Nước sốt trộn chua ngọt đặc chế (xì dầu, giấm gạo, đường, chanh)",
          "en": "Sweet tangy soy dressing"
        },
        "amount": "1 bát"
      },
      {
        "name": {
          "vi": "Lạc rang giã dập, hành khô phi vàng giòn",
          "en": "Crushed peanuts & golden shallots"
        },
        "amount": "80g"
      },
      {
        "name": {
          "vi": "Rau húng Láng, ngò rí, giá đỗ chần",
          "en": "Mint, cilantro, blanched bean sprouts"
        },
        "amount": "Vừa đủ"
      }
    ],
    "instructions": {
      "vi": [
        "Bánh phở tươi và giá đỗ chần sơ qua nước sôi xếp vào tô lớn.",
        "Xếp thịt gà ta xé phay da vàng giòn sần sật lên trên.",
        "Rưới 3 thìa nước sốt xì dầu chua ngọt pha tỏi ớt thanh nhã.",
        "Rắc nhiều hành phi giòn, đậu phộng rang giã dập và rau thơm ngát húng Láng.",
        "Trộn đều tay rồi thưởng thức từng sợi phở trơn mượt ngấm đẫm sốt đậm đà."
      ],
      "en": [
        "Quickly blanch pho noodles and bean sprouts; transfer to bowls.",
        "Top with shredded free-range chicken boasting crisp golden skin.",
        "Drizzle with savory sweet-and-sour soy dressing.",
        "Scatter generous heaps of crispy fried shallots, crushed peanuts, and fresh herbs.",
        "Toss thoroughly and savor the harmonious balance of textures and vibrant flavors."
      ]
    }
  },
  {
    "id": "vn-banh-gio-cha-com",
    "title": {
      "vi": "Bánh Giò Nóng Chả Cốm Nem Chua Giòn Cay",
      "en": "Steamed Rice Pyramid Dumpling with Green Rice Sausage"
    },
    "image": "/dishes/vn-banh-gio-cha-com.jpg",
    "category": {
      "vi": "Món Mặn",
      "en": "Savory Dish"
    },
    "mealType": [
      "breakfast",
      "snack"
    ],
    "region": "north",
    "diningType": [
      "home_cook",
      "eat_out"
    ],
    "isPopular": true,
    "popularityScore": 96,
    "dietaryTags": {
      "vi": [
        "Ăn vặt Hà Nội",
        "Ấm nóng mùa đông",
        "Mềm mịn"
      ],
      "en": [
        "Hanoi Street Snack",
        "Steamed",
        "Silky Smooth"
      ]
    },
    "time": "40m",
    "servings": 4,
    "calories": 390,
    "protein": 18,
    "fat": 20,
    "carbs": 34,
    "servingSize": {
      "vi": "1 dĩa bánh giò đầy đủ topping",
      "en": "1 plate with toppings"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia",
      "en": "National Institute of Nutrition"
    },
    "recipeSource": {
      "vi": "Ẩm thực Đường Phố Hà Nội",
      "en": "Hanoi Street Bites"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Bánh giò lá chuối nóng hổi nhân thịt mộc nhĩ",
          "en": "Steamed banana leaf rice pyramid cake"
        },
        "amount": "4 chiếc"
      },
      {
        "name": {
          "vi": "Chả cốm chiên giòn",
          "en": "Fried green rice pork sausage"
        },
        "amount": "200g"
      },
      {
        "name": {
          "vi": "Nem chua rán giòn rụm",
          "en": "Fried fermented pork rolls"
        },
        "amount": "4 chiếc"
      },
      {
        "name": {
          "vi": "Dưa chuột muối chua ngọt",
          "en": "Quick pickled cucumbers"
        },
        "amount": "1 bát"
      },
      {
        "name": {
          "vi": "Tương ớt xào cay nồng",
          "en": "Hanoi spicy chili sauce"
        },
        "amount": "Vừa đủ"
      }
    ],
    "instructions": {
      "vi": [
        "Hấp bánh giò nóng hổi trong xửng hấp cho vỏ bột gạo mềm tan thơm lừng mùi lá chuối.",
        "Chiên giòn chả cốm và nem chua, thái lát xéo vừa ăn.",
        "Bóc bánh giò đặt lên đĩa, dùng dao khía nhẹ mặt trên xòe ra lớp nhân thịt băm mộc nhĩ tiêu đen thơm phức.",
        "Xếp chả cốm, nem chua rán và dưa góp xung quanh.",
        "Rưới đẫm tương ớt cay nồng lên trên, ăn nóng béo bùi xao xuyến."
      ],
      "en": [
        "Steam banana-leaf wrapped dumplings until soft, silky, and fragrant.",
        "Fry green rice sausage (chả cốm) and fermented pork rolls (nem chua) until golden; slice.",
        "Unwrap dumpling onto plate, split top to reveal steaming savory minced pork and wood ear filling.",
        "Arrange toppings and sweet pickled cucumbers around.",
        "Drizzle with fiery chili sauce and dig in while hot."
      ]
    }
  },
  {
    "id": "vn-banh-uot-long-ga",
    "title": {
      "vi": "Bánh Ướt Lòng Gà Trứng Non Đà Lạt",
      "en": "Da Lat Steamed Rice Sheets with Chicken Giblets & Young Eggs"
    },
    "image": "/dishes/vn-banh-uot-long-ga.jpg",
    "category": {
      "vi": "Món Cuốn & Trộn",
      "en": "Rolls & Salads"
    },
    "mealType": [
      "breakfast",
      "lunch",
      "dinner"
    ],
    "region": "central",
    "diningType": [
      "home_cook",
      "eat_out"
    ],
    "isPopular": true,
    "popularityScore": 98,
    "dietaryTags": {
      "vi": [
        "Đặc sản Đà Lạt",
        "Lòng gà giòn sần sật",
        "Nước mắm chua ngọt"
      ],
      "en": [
        "Da Lat Icon",
        "Savory Chicken Giblets",
        "Delicate Rice Crepes"
      ]
    },
    "time": "35m",
    "servings": 4,
    "calories": 420,
    "protein": 26,
    "fat": 14,
    "carbs": 48,
    "servingSize": {
      "vi": "1 đĩa bánh ướt thập cẩm (~400g)",
      "en": "1 combo plate (~400g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia",
      "en": "National Institute of Nutrition"
    },
    "recipeSource": {
      "vi": "Ẩm thực Phố Núi Đà Lạt",
      "en": "Da Lat Highland Heritage"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Bánh ướt tráng mỏng mềm mượt",
          "en": "Silky thin steamed rice sheets"
        },
        "amount": "500g"
      },
      {
        "name": {
          "vi": "Lòng mề gà xào chín giòn",
          "en": "Stir-fried crunchy chicken giblets"
        },
        "amount": "250g"
      },
      {
        "name": {
          "vi": "Trứng gà non luộc lòng đào",
          "en": "Soft-cooked young chicken eggs"
        },
        "amount": "100g"
      },
      {
        "name": {
          "vi": "Thịt gà ta xé phay",
          "en": "Shredded chicken"
        },
        "amount": "150g"
      },
      {
        "name": {
          "vi": "Hành tây ngâm chua, rau răm, hành phi",
          "en": "Pickled onion, Vietnamese coriander, fried shallots"
        },
        "amount": "Vừa đủ"
      },
      {
        "name": {
          "vi": "Nước mắm tỏi ớt chua ngọt",
          "en": "Sweet garlic chili dipping sauce"
        },
        "amount": "1 bát"
      }
    ],
    "instructions": {
      "vi": [
        "Bánh ướt giữ ấm mềm mượt, cắt miếng vừa ăn xếp dàn đều ra đĩa lớn.",
        "Lòng gà làm sạch, ướp tiêu nước mắm rồi xào chín săn giòn với hành tím.",
        "Trứng gà non luộc vừa chín tới dẻo bùi không bị khô xác.",
        "Xếp thịt gà xé, lòng mề gà xào, trứng non vàng óng lên trên lớp bánh ướt.",
        "Thêm hành tây ngâm giấm giòn, rau răm xắt nhỏ và hành phi thơm lừng.",
        "Chan nước mắm tỏi ớt chua ngọt đậm đà, trộn nhẹ thưởng thức trọn vẹn hương vị phố núi mộng mơ."
      ],
      "en": [
        "Arrange warm silky steamed rice sheets on a wide plate.",
        "Stir-fry cleaned chicken giblets with shallots and fish sauce until tender-crunchy.",
        "Poach young chicken eggs until soft and golden.",
        "Top rice sheets with shredded chicken, sautéed giblets, and sunny young eggs.",
        "Add pickled onions, chopped Vietnamese coriander, and crispy fried shallots.",
        "Pour sweet-tangy garlic chili sauce over and gently mix before eating."
      ]
    }
  },
  {
    "id": "vn-banh-trang-cuon-thit-heo",
    "title": {
      "vi": "Bánh Tráng Cuốn Thịt Heo Hai Đầu Da Đà Nẵng",
      "en": "Da Nang Rice Paper Pork Rolls with Two-skin Pork Belly"
    },
    "image": "/dishes/vn-banh-trang-cuon-thit-heo.jpg",
    "category": {
      "vi": "Món Cuốn & Trộn",
      "en": "Rolls & Salads"
    },
    "mealType": [
      "lunch",
      "dinner"
    ],
    "region": "central",
    "diningType": [
      "home_cook",
      "eat_out"
    ],
    "isPopular": true,
    "popularityScore": 99,
    "dietaryTags": {
      "vi": [
        "Đặc sản Đà Nẵng",
        "Mắm nêm trứ danh",
        "Rau rừng bạt ngàn"
      ],
      "en": [
        "Da Nang Icon",
        "Mắm Nêm Dip",
        "Two-skin Pork"
      ]
    },
    "time": "35m",
    "servings": 4,
    "calories": 440,
    "protein": 26,
    "fat": 25,
    "carbs": 28,
    "servingSize": {
      "vi": "1 phần cuốn mẹt (~400g)",
      "en": "1 platter (~400g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia",
      "en": "National Institute of Nutrition"
    },
    "recipeSource": {
      "vi": "Ẩm thực Đà Nẵng",
      "en": "Da Nang Culinary Heritage"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Thịt ba chỉ heo hai đầu da luộc chuẩn",
          "en": "Boiled pork belly with two skin edges"
        },
        "amount": "500g"
      },
      {
        "name": {
          "vi": "Bánh tráng phơi sương Đại Lộc",
          "en": "Sun-dried rice paper"
        },
        "amount": "1 xấp"
      },
      {
        "name": {
          "vi": "Bánh phở cuốn mỏng đi kèm",
          "en": "Thin pho sheets"
        },
        "amount": "300g"
      },
      {
        "name": {
          "vi": "Mâm rau ghém đa dạng (xà lách, diếp cá, quế, tía tô, dưa leo, xoài xanh, chuối chát)",
          "en": "Abundant greens, green mango, green banana"
        },
        "amount": "1 mẹt lớn"
      },
      {
        "name": {
          "vi": "Mắm nêm cá cơm nguyên chất pha dứa băm",
          "en": "Fermented anchovy sauce mixed with crushed pineapple"
        },
        "amount": "1 bát"
      }
    ],
    "instructions": {
      "vi": [
        "Thịt ba chỉ chọn miếng nạc mỡ đan xen đều, luộc chín tới trong nước có hành đập dập và chút muối để giữ thịt ngọt trắng.",
        "Vớt thịt ngâm nước đá lạnh rồi dùng dao thật sắc thái lát mỏng có cả hai đầu da giòn bóng.",
        "Pha mắm nêm: mắm nêm Đà Nẵng pha với dứa băm nhuyễn, tỏi ớt giã, đường và nước cốt chanh đánh tan sóng sánh thơm lừng.",
        "Rửa sạch để ráo rổ rau sống phong phú cùng dưa leo, chuối xanh và xoài xanh thái lát mỏng.",
        "Trải bánh tráng phơi sương, đặt lớp lá phở mỏng, xếp rau sống, lát thịt heo cuộn chặt chấm ngập chén mắm nêm đậm đà."
      ],
      "en": [
        "Select pork belly with even layers, boil gently until just cooked and sweet.",
        "Shock in ice water, then slice thinly with distinct crispy skin on both edges.",
        "Mix artisanal fermented anchovy sauce with finely mashed pineapple, garlic, chili, sugar, and lime.",
        "Wash a colorful platter of herbs, cucumber ribbons, green mango, and astringent green banana.",
        "Lay rice paper, add a delicate pho sheet, herbs, and pork; roll tightly and submerge in flavorful mắm nêm."
      ]
    }
  },
  {
    "id": "vn-banh-mi-xiu-mai-da-lat",
    "title": {
      "vi": "Bánh Mì Xíu Mại Chén Nóng Hổi Đà Lạt",
      "en": "Da Lat Meatball Soup in Ceramic Bowl with Baguette"
    },
    "image": "/dishes/vn-banh-mi-xiu-mai-da-lat.jpg",
    "category": {
      "vi": "Món Mặn",
      "en": "Savory Dish"
    },
    "mealType": [
      "breakfast",
      "dinner",
      "snack"
    ],
    "region": "central",
    "diningType": [
      "home_cook",
      "eat_out"
    ],
    "isPopular": true,
    "popularityScore": 97,
    "dietaryTags": {
      "vi": [
        "Đặc sản Đà Lạt",
        "Ấm áp sương mù",
        "Nước súp ngọt thanh"
      ],
      "en": [
        "Da Lat Morning",
        "Cozy",
        "Tender Meatballs"
      ]
    },
    "time": "30m",
    "servings": 4,
    "calories": 460,
    "protein": 24,
    "fat": 20,
    "carbs": 45,
    "servingSize": {
      "vi": "1 chén xíu mại + 1 bánh mì giòn",
      "en": "1 meatball bowl + baguette"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia",
      "en": "National Institute of Nutrition"
    },
    "recipeSource": {
      "vi": "Ẩm thực Phố Sương Đà Lạt",
      "en": "Da Lat Mountain Bites"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Thịt heo nạc dăm xay nhuyễn",
          "en": "Minced pork shoulder"
        },
        "amount": "400g"
      },
      {
        "name": {
          "vi": "Bì heo luộc chín giòn hoặc da heo",
          "en": "Crunchy boiled pork skin"
        },
        "amount": "100g"
      },
      {
        "name": {
          "vi": "Chả lụa xắt con chì",
          "en": "Pork sausage sticks"
        },
        "amount": "100g"
      },
      {
        "name": {
          "vi": "Nước dùng xương hầm trong ngọt",
          "en": "Clear pork bone broth"
        },
        "amount": "800ml"
      },
      {
        "name": {
          "vi": "Hành hoa, ngò rí, ớt sa tế cay xé",
          "en": "Scallions, cilantro, hot chili paste"
        },
        "amount": "Vừa đủ"
      },
      {
        "name": {
          "vi": "Bánh mì giòn nóng hổi",
          "en": "Crusty warm baguettes"
        },
        "amount": "4 ổ"
      }
    ],
    "instructions": {
      "vi": [
        "Trộn thịt heo xay với củ sắn vắt ráo, hành tím băm, tiêu đen và hạt nêm rồi vo thành từng viên tròn đều.",
        "Thả các viên xíu mại vào nồi nước dùng xương heo đun nhỏ lửa cho xíu mại chín mềm ngọt mọng nước.",
        "Múc 2-3 viên xíu mại vào từng chén nhỏ, thêm vài miếng da heo giòn sần sật và chả lụa.",
        "Chan nước dùng ngọt thanh nóng hổi ngập chén, rắc thật nhiều hành hoa thái nhỏ và thìa sa tế đỏ rực cay nồng.",
        "Xé từng miếng bánh mì giòn rụm chấm ngập chén súp xíu mại nóng bỏng xua tan cái lạnh cao nguyên."
      ],
      "en": [
        "Mix minced pork with drained jicama shreds, shallots, pepper, and seasoning; shape into meatballs.",
        "Poach meatballs in simmering clear bone broth until floating and juicy.",
        "Ladle 2-3 meatballs into small ceramic bowls, add bouncy pork skin and pork sausage.",
        "Pour piping hot sweet broth over, scatter abundant scallions and a spoonful of fiery sate chili.",
        "Tear warm crusty bread and dip into the spicy, comforting broth."
      ]
    }
  },
  {
    "id": "vn-banh-tam-bi-nam-bo",
    "title": {
      "vi": "Bánh Tằm Bì Nước Cốt Dừa Nam Bộ",
      "en": "Southern Thick Rice Noodles with Shredded Pork Skin & Coconut Cream"
    },
    "image": "/dishes/vn-banh-tam-bi-nam-bo.jpg",
    "category": {
      "vi": "Món Mặn",
      "en": "Savory Dish"
    },
    "mealType": [
      "breakfast",
      "lunch",
      "snack"
    ],
    "region": "south",
    "diningType": [
      "home_cook",
      "eat_out"
    ],
    "isPopular": true,
    "popularityScore": 94,
    "dietaryTags": {
      "vi": [
        "Đặc sản Miền Tây",
        "Béo ngậy cốt dừa",
        "Mặn ngọt độc đáo"
      ],
      "en": [
        "Mekong Classic",
        "Coconut Cream",
        "Unique Texture"
      ]
    },
    "time": "35m",
    "servings": 4,
    "calories": 430,
    "protein": 19,
    "fat": 16,
    "carbs": 52,
    "servingSize": {
      "vi": "1 dĩa bánh tằm (~350g)",
      "en": "1 plate (~350g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia",
      "en": "National Institute of Nutrition"
    },
    "recipeSource": {
      "vi": "Ẩm thực Miền Tây",
      "en": "Mekong Delta Cuisine"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Sợi bánh tằm bột gạo se tay dai mềm",
          "en": "Hand-rolled thick rice noodles"
        },
        "amount": "500g"
      },
      {
        "name": {
          "vi": "Bì heo trộn thính gạo thơm",
          "en": "Shredded pork skin tossed in toasted rice powder"
        },
        "amount": "150g"
      },
      {
        "name": {
          "vi": "Thịt nạc heo ram thái sợi",
          "en": "Shredded braised pork loin"
        },
        "amount": "150g"
      },
      {
        "name": {
          "vi": "Nước cốt dừa sánh béo nấu chín",
          "en": "Cooked thick coconut cream"
        },
        "amount": "200ml"
      },
      {
        "name": {
          "vi": "Rau thơm ghém, dưa leo băm, giá đỗ",
          "en": "Herbs, cucumber shreds, bean sprouts"
        },
        "amount": "Vừa đủ"
      },
      {
        "name": {
          "vi": "Nước mắm tỏi ớt chua ngọt",
          "en": "Garlic chili fish sauce"
        },
        "amount": "1 bát"
      }
    ],
    "instructions": {
      "vi": [
        "Hấp nóng sợi bánh tằm cho mềm dẻo, xếp vào từng đĩa.",
        "Bày bì heo thơm bùi, thịt nạc ram xé sợi và rau thơm dưa leo xung quanh.",
        "Rưới một muôi nước cốt dừa béo ngậy nấu sánh với chút muối đường lên trên bánh tằm.",
        "Chan thêm nước mắm chua ngọt tỏi ớt đậm đà.",
        "Trộn đều thưởng thức sự kết hợp kỳ diệu giữa vị béo bùi của cốt dừa quyện cùng nước mắm chua ngọt mằn mặn khó quên."
      ],
      "en": [
        "Steam thick hand-rolled noodles until chewy-soft; place on plates.",
        "Top with aromatic shredded pork skin, braised pork strips, cucumber, and fresh herbs.",
        "Ladle creamy cooked coconut cream over noodles.",
        "Drizzle sweet-and-sour garlic fish sauce on top.",
        "Toss together to experience the unforgettable harmony of rich coconut and savory dipping sauce."
      ]
    }
  },
  {
    "id": "vn-banh-duc-nong-ha-noi",
    "title": {
      "vi": "Bánh Đúc Nóng Thịt Băm Mộc Nhĩ Hành Phi Hà Nội",
      "en": "Hanoi Hot Savory Rice Custard with Minced Pork & Shallots"
    },
    "image": "/dishes/vn-banh-duc-nong-ha-noi.jpg",
    "category": {
      "vi": "Món Mặn",
      "en": "Savory Dish"
    },
    "mealType": [
      "snack",
      "dinner"
    ],
    "region": "north",
    "diningType": [
      "home_cook",
      "eat_out"
    ],
    "isPopular": true,
    "popularityScore": 97,
    "dietaryTags": {
      "vi": [
        "Ăn vặt Hà Nội",
        "Mềm dẻo nóng hổi",
        "Ấm lòng mùa đông"
      ],
      "en": [
        "Hanoi Winter Snack",
        "Warm & Silky",
        "Savory Custard"
      ]
    },
    "time": "30m",
    "servings": 4,
    "calories": 320,
    "protein": 15,
    "fat": 12,
    "carbs": 38,
    "servingSize": {
      "vi": "1 bát bánh đúc nóng (~300g)",
      "en": "1 bowl (~300g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia",
      "en": "National Institute of Nutrition"
    },
    "recipeSource": {
      "vi": "Ẩm thực Phố Cổ Hà Nội",
      "en": "Hanoi Traditional Treats"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Bột gạo tẻ và bột năng khuấy dẻo quánh",
          "en": "Rice & tapioca starch paste"
        },
        "amount": "200g bột"
      },
      {
        "name": {
          "vi": "Thịt heo xay xào mộc nhĩ hành tím",
          "en": "Minced pork stir-fried with wood ear"
        },
        "amount": "200g"
      },
      {
        "name": {
          "vi": "Đậu phụ rán cắt hạt lựu nhỏ",
          "en": "Fried tofu diced small"
        },
        "amount": "1 bìa"
      },
      {
        "name": {
          "vi": "Hành phi mỡ giòn rụm",
          "en": "Golden crispy fried shallots"
        },
        "amount": "4 thìa canh"
      },
      {
        "name": {
          "vi": "Nước mắm chan ấm ngọt dịu",
          "en": "Warm sweet-savory fish sauce broth"
        },
        "amount": "1 bát to"
      },
      {
        "name": {
          "vi": "Rau mùi ta (ngò rí) thái nhỏ",
          "en": "Fresh cilantro chopped"
        },
        "amount": "1 nắm"
      }
    ],
    "instructions": {
      "vi": [
        "Khuấy bột gạo và bột năng với nước lọc trên lửa nhỏ, đảo liên tục đến khi bột trong vắt, dẻo quánh và sánh mịn không vón cục.",
        "Thêm chút dầu ăn hoặc mỡ heo vào nồi bột quậy đều cho bóng mượt.",
        "Múc bột bánh đúc nóng hổi còn bốc khói vào từng bát sứ nhỏ.",
        "Xúc thịt băm xào mộc nhĩ đậm đà, đậu phụ rán giòn và thật nhiều hành phi vàng ruộm lên trên.",
        "Chan nước mắm ấm chua ngọt dịu nhẹ ngập bánh, rắc rau mùi ta thơm ngát thưởng thức ngay khi còn nóng bỏng."
      ],
      "en": [
        "Cook rice and tapioca flour with water over gentle heat, stirring constantly until translucent, thick, and stretchy.",
        "Beat in a spoonful of lard/oil for glossy silkiness.",
        "Scoop piping-hot rice custard into small ceramic bowls.",
        "Top with savory minced pork with wood ear mushrooms, fried tofu cubes, and crispy shallots.",
        "Ladle warm, mildly sweet-and-savory fish sauce broth over, finish with cilantro; eat piping hot."
      ]
    }
  },
  {
    "id": "vn-chao-vit-co-mang",
    "title": {
      "vi": "Cháo Vịt Cỏ Măng Tươi Nước Mắm Gừng",
      "en": "Free-range Duck Congee with Fresh Bamboo Shoots"
    },
    "image": "/dishes/vn-chao-vit-co-mang.jpg",
    "category": {
      "vi": "Món Nước",
      "en": "Noodle Soup"
    },
    "mealType": [
      "breakfast",
      "dinner"
    ],
    "region": "national",
    "diningType": [
      "home_cook",
      "eat_out"
    ],
    "isPopular": true,
    "popularityScore": 96,
    "dietaryTags": {
      "vi": [
        "Ấm bụng",
        "Thịt vịt ngọt mềm",
        "Măng giòn"
      ],
      "en": [
        "Comfort Food",
        "Tender Duck",
        "Ginger Dip"
      ]
    },
    "time": "45m",
    "servings": 4,
    "calories": 420,
    "protein": 26,
    "fat": 16,
    "carbs": 43,
    "servingSize": {
      "vi": "1 tô cháo lớn (~500g)",
      "en": "1 bowl (~500g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia",
      "en": "National Institute of Nutrition"
    },
    "recipeSource": {
      "vi": "Ẩm thực Cháo Vịt Đồng Quê",
      "en": "Countryside Duck Congee"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Gạo tẻ thơm pha nếp",
          "en": "Fragrant rice & sticky rice mix"
        },
        "amount": "150g"
      },
      {
        "name": {
          "vi": "Thịt vịt cỏ luộc xé miếng",
          "en": "Poached free-range duck meat"
        },
        "amount": "400g"
      },
      {
        "name": {
          "vi": "Măng tươi tước sợi xào thơm",
          "en": "Fresh shredded bamboo shoots sautéed"
        },
        "amount": "200g"
      },
      {
        "name": {
          "vi": "Nước luộc vịt béo ngọt",
          "en": "Duck poaching broth"
        },
        "amount": "1.2 lít"
      },
      {
        "name": {
          "vi": "Hành hoa, tía tô, rau răm, tiêu xay",
          "en": "Scallions, perilla, Vietnamese coriander, pepper"
        },
        "amount": "Vừa đủ"
      },
      {
        "name": {
          "vi": "Nước mắm gừng ớt tỏi chấm vịt",
          "en": "Ginger chili fish sauce"
        },
        "amount": "1 bát"
      }
    ],
    "instructions": {
      "vi": [
        "Rang sơ gạo cho thơm rồi cho vào nồi nước luộc vịt nấu nhừ thành cháo sánh mịn.",
        "Măng tươi luộc kỹ, xào thơm với hành tím rồi trút vào nồi cháo đun sôi.",
        "Thịt vịt chặt miếng hoặc xé phay xếp lên đĩa riêng.",
        "Múc cháo măng nóng hổi ra tô, rắc hành hoa, tía tô, rau răm thái nhỏ và nhiều tiêu xay.",
        "Ăn kèm thịt vịt chấm ngập bát nước mắm gừng cay nồng ấm bụng."
      ],
      "en": [
        "Lightly toast rice, simmer in duck broth until velvety and broken down.",
        "Boil bamboo shoots, sauté with shallots, and stir into the simmering congee.",
        "Plate sliced or shredded poached duck separately.",
        "Ladle steaming congee into bowls, garnish with perilla, scallions, cilantro, and black pepper.",
        "Dip tender duck slices into zesty ginger chili fish sauce."
      ]
    }
  },
  {
    "id": "vn-chao-hau-sua",
    "title": {
      "vi": "Cháo Hàu Sữa Biển Hành Phi Tiêu Đen",
      "en": "Pacific Oyster Congee with Crispy Shallots & Black Pepper"
    },
    "image": "/dishes/vn-chao-hau-sua.jpg",
    "category": {
      "vi": "Món Nước",
      "en": "Noodle Soup"
    },
    "mealType": [
      "breakfast",
      "dinner"
    ],
    "region": "central",
    "diningType": [
      "home_cook",
      "eat_out"
    ],
    "isPopular": true,
    "popularityScore": 95,
    "dietaryTags": {
      "vi": [
        "Bổ dưỡng",
        "Giàu kẽm",
        "Ngọt lịm tự nhiên"
      ],
      "en": [
        "Zinc Rich",
        "Seafood Congee",
        "Nourishing"
      ]
    },
    "time": "35m",
    "servings": 4,
    "calories": 340,
    "protein": 22,
    "fat": 9,
    "carbs": 42,
    "servingSize": {
      "vi": "1 tô cháo (~450g)",
      "en": "1 bowl (~450g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia",
      "en": "National Institute of Nutrition"
    },
    "recipeSource": {
      "vi": "Ẩm thực Miền Biển",
      "en": "Coastal Seafood Congee"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Ruột hàu sữa tươi béo múp",
          "en": "Fresh plump milky oysters"
        },
        "amount": "350g"
      },
      {
        "name": {
          "vi": "Gạo tẻ ngon nấu nhừ",
          "en": "Steamed rice cooked into porridge"
        },
        "amount": "1 nồi (~1 lít)"
      },
      {
        "name": {
          "vi": "Hành tím phi vàng giòn rụm",
          "en": "Crispy fried shallots"
        },
        "amount": "3 thìa canh"
      },
      {
        "name": {
          "vi": "Hành hoa, ngò rí, tiêu sọ xay",
          "en": "Scallions, cilantro, white pepper"
        },
        "amount": "Vừa đủ"
      },
      {
        "name": {
          "vi": "Nước mắm, bơ thơm",
          "en": "Fish sauce, butter"
        },
        "amount": "Vừa đủ"
      }
    ],
    "instructions": {
      "vi": [
        "Hàu sữa rửa thật nhẹ tay với nước muối loãng tránh vỡ bụng sữa béo, để ráo.",
        "Phi thơm hành tím và chút bơ, xào nhanh hàu trên lửa lớn trong 1 phút với nước mắm và tiêu cho hàu căng mọng chín tới.",
        "Trút toàn bộ hàu và nước xào ngọt lịm vào nồi cháo trắng đang sôi lăn tăn, khuấy nhẹ đều tay.",
        "Nêm nếm lại gia vị cho vừa miệng rồi tắt bếp ngay giữ hàu mềm ngọt không bị teo.",
        "Múc ra tô rắc nhiều hành phi giòn, hành hoa, ngò rí và tiêu đen thơm nức."
      ],
      "en": [
        "Gently wash plump oysters in light salt water, preserving their delicate milky bellies.",
        "Flash-sauté oysters in shallot butter over high heat for 1 min with fish sauce and pepper.",
        "Fold oysters and their sweet pan juices directly into simmering white congee.",
        "Adjust seasoning and turn off heat immediately so oysters remain succulent.",
        "Ladle into bowls, top with crispy shallots, scallions, cilantro, and cracked black pepper."
      ]
    }
  },
  {
    "id": "vn-chao-ech-singapore",
    "title": {
      "vi": "Cháo Trắng Lá Dứa Ếch Kho Niêu Đất Đậm Đà",
      "en": "Claypot Braised Frog Legs with Pandan Congee"
    },
    "image": "/dishes/vn-chao-ech-singapore.jpg",
    "category": {
      "vi": "Món Nước",
      "en": "Noodle Soup"
    },
    "mealType": [
      "dinner",
      "snack"
    ],
    "region": "south",
    "diningType": [
      "home_cook",
      "eat_out"
    ],
    "isPopular": true,
    "popularityScore": 98,
    "dietaryTags": {
      "vi": [
        "Món đêm Sài Gòn",
        "Cay xé đậm đà",
        "Lá dứa thơm lừng"
      ],
      "en": [
        "Late Night Favorite",
        "Spicy Claypot",
        "Pandan Aroma"
      ]
    },
    "time": "35m",
    "servings": 4,
    "calories": 430,
    "protein": 29,
    "fat": 11,
    "carbs": 54,
    "servingSize": {
      "vi": "1 niêu ếch + 1 tô cháo trắng lá dứa",
      "en": "1 claypot frog + pandan congee"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia",
      "en": "National Institute of Nutrition"
    },
    "recipeSource": {
      "vi": "Ẩm thực Phố Đêm Sài Gòn",
      "en": "Saigon Night Food Scene"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Thịt ếch đồng làm sạch chặt miếng",
          "en": "Fresh cleaned frog legs & meat"
        },
        "amount": "600g"
      },
      {
        "name": {
          "vi": "Cháo trắng nấu nhuyễn thơm lá dứa",
          "en": "Pandan infused silky congee"
        },
        "amount": "1 nồi lớn"
      },
      {
        "name": {
          "vi": "Hắc xì dầu, dầu hào, đường phèn",
          "en": "Dark sweet soy, oyster sauce, rock sugar"
        },
        "amount": "Vừa đủ"
      },
      {
        "name": {
          "vi": "Ớt khô, ớt tươi, hành boa-rô, gừng",
          "en": "Dried chilies, fresh chili, leek, ginger"
        },
        "amount": "Vừa đủ"
      },
      {
        "name": {
          "vi": "Bột năng hòa nước tạo sốt sệt bóng",
          "en": "Starch slurry"
        },
        "amount": "1 thìa canh"
      }
    ],
    "instructions": {
      "vi": [
        "Ướp thịt ếch với hắc xì dầu, dầu hào, rượu mai quế lộ, gừng và ớt trong 20 phút.",
        "Phi thơm tỏi ớt trong niêu đất, trút ếch vào xào săn trên lửa lớn.",
        "Đổ nước sốt kho vào đun sôi, hạ nhỏ lửa kho liu riu trong niêu đất khoảng 15 phút.",
        "Rót nước bột năng vào khuấy đều cho nước sốt keo lại sánh đặc sẫm màu cánh gián bám óng quanh đùi ếch.",
        "Rắc nhiều ớt khô và hành hoa, múc thìa sốt ếch cay nồng đậm đà rưới lên tô cháo trắng lá dứa dẻo thơm húp xì xụp."
      ],
      "en": [
        "Marinate frog meat with dark soy sauce, oyster sauce, wine, ginger, and chili for 20 mins.",
        "Sear frog legs in a smoking hot claypot with garlic and chilies.",
        "Simmer in braising sauce for 15 minutes until tender and deeply caramelized.",
        "Stir in starch slurry to create a glossy, thick, spicy dark glaze.",
        "Scatter scallions and dried chilies; spoon the fiery savory frog stew over fragrant pandan congee."
      ]
    }
  },
  {
    "id": "vn-chao-thit-bam-tia-to",
    "title": {
      "vi": "Cháo Thịt Băm Cà Rốt Tía Tô Giải Cảm",
      "en": "Healing Pork & Carrot Congee with Perilla Leaves"
    },
    "image": "/dishes/vn-chao-thit-bam-tia-to.jpg",
    "category": {
      "vi": "Món Nước",
      "en": "Noodle Soup"
    },
    "mealType": [
      "breakfast",
      "dinner"
    ],
    "region": "national",
    "diningType": [
      "home_cook"
    ],
    "isPopular": true,
    "popularityScore": 94,
    "dietaryTags": {
      "vi": [
        "Cơm nhà",
        "Giải cảm hạ sốt",
        "Dễ tiêu hóa"
      ],
      "en": [
        "Cold Remedy",
        "Healing",
        "Comfort Food"
      ]
    },
    "time": "25m",
    "servings": 4,
    "calories": 250,
    "protein": 16,
    "fat": 7,
    "carbs": 32,
    "servingSize": {
      "vi": "1 tô cháo (~400g)",
      "en": "1 bowl (~400g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia",
      "en": "National Institute of Nutrition"
    },
    "recipeSource": {
      "vi": "Bài Thuốc Dân Gian Việt",
      "en": "Traditional Folk Remedies"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Gạo tẻ nấu cháo",
          "en": "Rice cooked into soft porridge"
        },
        "amount": "1 nồi"
      },
      {
        "name": {
          "vi": "Thịt heo nạc xay",
          "en": "Minced lean pork"
        },
        "amount": "250g"
      },
      {
        "name": {
          "vi": "Cà rốt băm hạt lựu nhỏ",
          "en": "Carrot finely diced"
        },
        "amount": "1 củ"
      },
      {
        "name": {
          "vi": "Lá tía tô, hành lá thái chỉ nhỏ",
          "en": "Fresh perilla leaves & scallions shredded"
        },
        "amount": "1 bát con"
      },
      {
        "name": {
          "vi": "Gừng tươi thái sợi, tiêu đen xay",
          "en": "Ginger julienne & black pepper"
        },
        "amount": "Vừa đủ"
      },
      {
        "name": {
          "vi": "Trứng gà ta (tùy thích thả lòng đỏ)",
          "en": "Egg yolk (optional)"
        },
        "amount": "2 quả"
      }
    ],
    "instructions": {
      "vi": [
        "Xào thơm thịt băm và cà rốt với hành tím và chút nước mắm.",
        "Trút thịt xào vào nồi cháo trắng đang sôi lăn tăn, khuấy đều nấu thêm 5 phút cho cà rốt chín mềm ngọt nước.",
        "Xếp lá tía tô thái chỉ, hành hoa và gừng sợi dưới đáy tô.",
        "Múc cháo thịt băm nóng hổi chan trực tiếp lên trên rau cho chín tái giữ trọn tinh dầu thơm.",
        "Thả lòng đỏ trứng gà vào giữa, rắc nhiều tiêu xay, quấy đều húp nóng toát mồ hôi giải cảm ngay tức thì."
      ],
      "en": [
        "Sauté minced pork and diced carrots with shallots and fish sauce.",
        "Add meat to simmering congee, cooking 5 mins until carrots are tender and sweet.",
        "Place shredded perilla leaves, scallions, and ginger shreds in bottom of serving bowls.",
        "Ladle boiling-hot porridge directly over herbs to gently wilt and activate aromatic essential oils.",
        "Drop in a raw egg yolk and generous black pepper; stir and eat piping hot for instant revitalization."
      ]
    }
  },
  {
    "id": "vn-xoi-bap-nhao",
    "title": {
      "vi": "Xôi Bắp Hầm Mỡ Hành Đậu Xanh Bào",
      "en": "Southern Steamed Hominy Corn Sticky Rice with Mung Bean"
    },
    "image": "/dishes/vn-xoi-bap-nhao.jpg",
    "category": {
      "vi": "Món Mặn",
      "en": "Savory Dish"
    },
    "mealType": [
      "breakfast",
      "snack"
    ],
    "region": "south",
    "diningType": [
      "home_cook",
      "eat_out"
    ],
    "isPopular": true,
    "popularityScore": 92,
    "dietaryTags": {
      "vi": [
        "Ăn sáng bình dân",
        "Ký ức tuổi thơ",
        "Bùi béo"
      ],
      "en": [
        "Traditional Breakfast",
        "Childhood Memory",
        "Vegan Friendly"
      ]
    },
    "time": "40m",
    "servings": 4,
    "calories": 360,
    "protein": 9,
    "fat": 10,
    "carbs": 60,
    "servingSize": {
      "vi": "1 gói xôi lá chuối (~250g)",
      "en": "1 banana leaf packet (~250g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia",
      "en": "National Institute of Nutrition"
    },
    "recipeSource": {
      "vi": "Ẩm thực Nam Bộ",
      "en": "Southern Street Breakfast"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Bắp nếp hầm dẻo mềm bung nở",
          "en": "Cooked white hominy corn"
        },
        "amount": "300g"
      },
      {
        "name": {
          "vi": "Gạo nếp cái hoa vàng",
          "en": "Sticky rice"
        },
        "amount": "200g"
      },
      {
        "name": {
          "vi": "Đậu xanh hấp chín nắm tròn bào mỏng",
          "en": "Steamed mung bean paste shaved"
        },
        "amount": "150g"
      },
      {
        "name": {
          "vi": "Mỡ hành phi thơm",
          "en": "Scallion oil"
        },
        "amount": "4 thìa canh"
      },
      {
        "name": {
          "vi": "Hành phi vàng giòn, muối mè đường",
          "en": "Crispy shallots, sesame peanut sugar mix"
        },
        "amount": "Vừa đủ"
      }
    ],
    "instructions": {
      "vi": [
        "Hấp chung bắp nếp đã ninh bung hạt cùng gạo nếp cho hạt xôi dẻo quánh quyện chặt cùng bắp bùi ngọt.",
        "Xới xôi bắp nóng hổi ra đĩa hoặc gói lá chuối tiêu.",
        "Dùng dao sắc bào từng lát mỏng đậu xanh tán mịn phủ kín mặt xôi bắp.",
        "Rưới muỗng mỡ hành xanh mướt bóng ngậy lên trên.",
        "Rắc hành phi giòn tan và muối mè đường thơm nức mũi, thưởng thức bữa sáng giản dị mà ấm áp."
      ],
      "en": [
        "Steam cooked hominy corn kernels together with glutinous rice until soft and sticky.",
        "Scoop hot corn sticky rice onto a banana leaf or plate.",
        "Use a knife to shave silky steamed mung bean paste in fine ribbons over the rice.",
        "Drizzle glistening scallion oil over the top.",
        "Sprinkle with crunchy fried shallots and sweet crushed sesame peanut salt."
      ]
    }
  },
  {
    "id": "vn-xoi-vo-hat-sen",
    "title": {
      "vi": "Xôi Vò Hạt Sen Thơm Dẻo Từng Hạt Vàng Ươm",
      "en": "Northern Loose Mung Bean Sticky Rice with Lotus Seeds"
    },
    "image": "/dishes/vn-xoi-vo-hat-sen.jpg",
    "category": {
      "vi": "Món Mặn",
      "en": "Savory Dish"
    },
    "mealType": [
      "breakfast",
      "snack"
    ],
    "region": "north",
    "diningType": [
      "home_cook"
    ],
    "isPopular": true,
    "popularityScore": 93,
    "dietaryTags": {
      "vi": [
        "Mâm cỗ truyền thống",
        "Từng hạt tơi vàng",
        "Bùi ngọt thanh"
      ],
      "en": [
        "Festive",
        "Golden Rice",
        "Lotus Seeds"
      ]
    },
    "time": "45m",
    "servings": 6,
    "calories": 330,
    "protein": 8,
    "fat": 7,
    "carbs": 60,
    "servingSize": {
      "vi": "1 đĩa xôi vò (~200g)",
      "en": "1 plate (~200g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia",
      "en": "National Institute of Nutrition"
    },
    "recipeSource": {
      "vi": "Ẩm thực Thăng Long Hà Nội",
      "en": "Hanoi Heritage Cooking"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Gạo nếp cái hoa vàng",
          "en": "Premium sticky rice"
        },
        "amount": "400g"
      },
      {
        "name": {
          "vi": "Đậu xanh đãi sạch vỏ hấp chín giã nhuyễn",
          "en": "Steamed peeled mung beans pounded"
        },
        "amount": "250g"
      },
      {
        "name": {
          "vi": "Hạt sen tươi hấp chín bở",
          "en": "Steamed tender lotus seeds"
        },
        "amount": "100g"
      },
      {
        "name": {
          "vi": "Mỡ gà hoặc dầu ăn, chút muối tinh",
          "en": "Chicken fat or oil, salt"
        },
        "amount": "Vừa đủ"
      }
    ],
    "instructions": {
      "vi": [
        "Gạo nếp ngâm kỹ, để thật ráo nước rồi trộn cùng một nửa phần đậu xanh giã nhuyễn và chút muối, dùng tay vò đều để đậu bao quanh từng hạt gạo.",
        "Đồ xôi trên xửng hấp lửa vừa trong 20 phút cho hạt nếp chín trong dẻo.",
        "Đổ xôi ra mâm, cho hạt sen hấp và nửa phần đậu xanh còn lại cùng 1 thìa mỡ gà vào vò xoa nhẹ tay cho từng hạt xôi tơi xốp, bám đều màu vàng óng ả.",
        "Đồ lại lần 2 thêm 5 phút cho xôi dẻo mềm hoàn hảo.",
        "Đơm xôi ra đĩa gấm, ăn bùi ngọt dịu thanh tao ăn kèm chè hoa cau hoặc giò lụa."
      ],
      "en": [
        "Soak rice, drain bone-dry, toss with half of mashed mung beans and salt, rubbing so bean powder coats each grain.",
        "Steam in a steamer for 20 mins until grains turn translucent and tender.",
        "Spread onto tray, mix with steamed lotus seeds, remaining mung bean powder, and chicken fat, rubbing gently so grains stay separate and golden.",
        "Steam a second time for 5 mins for ultimate softness.",
        "Plate neatly; savor the gentle, fragrant nuttiness alongside sweet dessert soup or silk pork roll."
      ]
    }
  },
  {
    "id": "vn-xoi-man-thap-cam",
    "title": {
      "vi": "Xôi Mặn Thập Cẩm Lạp Xưởng Chà Bông Hành Phi",
      "en": "Saigon Savory Sticky Rice with Chinese Sausage & Pork Floss"
    },
    "image": "/dishes/vn-xoi-man-thap-cam.jpg",
    "category": {
      "vi": "Món Mặn",
      "en": "Savory Dish"
    },
    "mealType": [
      "breakfast",
      "lunch",
      "dinner"
    ],
    "region": "south",
    "diningType": [
      "home_cook",
      "eat_out"
    ],
    "isPopular": true,
    "popularityScore": 98,
    "dietaryTags": {
      "vi": [
        "Ăn sáng Sài Gòn",
        "Đầy đặn topping",
        "Đậm đà"
      ],
      "en": [
        "Saigon Breakfast",
        "Loaded Toppings",
        "Savory"
      ]
    },
    "time": "35m",
    "servings": 4,
    "calories": 490,
    "protein": 20,
    "fat": 21,
    "carbs": 56,
    "servingSize": {
      "vi": "1 hộp xôi đầy đặn (~300g)",
      "en": "1 box (~300g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia",
      "en": "National Institute of Nutrition"
    },
    "recipeSource": {
      "vi": "Ẩm thực Đường Phố Sài Gòn",
      "en": "Saigon Street Food Culture"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Xôi nếp dẻo thơm nấu chín",
          "en": "Steamed glutinous rice"
        },
        "amount": "500g"
      },
      {
        "name": {
          "vi": "Lạp xưởng Mai Quế Lộ chiên thái lát",
          "en": "Fried Chinese sausage sliced"
        },
        "amount": "2 cây"
      },
      {
        "name": {
          "vi": "Chà bông (ruốc) thịt heo tơi xốp",
          "en": "Fluffy pork floss"
        },
        "amount": "60g"
      },
      {
        "name": {
          "vi": "Trứng cút chiên hoặc luộc",
          "en": "Quail eggs"
        },
        "amount": "8 quả"
      },
      {
        "name": {
          "vi": "Pâté gan, mỡ hành, đậu phộng rang, nước tương sốt",
          "en": "Pâté, scallion oil, peanuts, savory soy glaze"
        },
        "amount": "Vừa đủ"
      }
    ],
    "instructions": {
      "vi": [
        "Xới xôi nếp nóng dẻo ra đĩa hoặc hộp xôi.",
        "Phết một lớp mỏng pâté gan béo ngậy thơm lừng lên mặt xôi.",
        "Xếp lát lạp xưởng chiên óng ả, trứng cút, chà bông heo tơi xốp.",
        "Rưới muỗng mỡ hành xanh ngắt và chút sốt tương đậm đà.",
        "Rắc đậu phộng rang giòn và hành phi thơm phức, thưởng thức bữa ăn sáng chắc bụng ngập tràn năng lượng."
      ],
      "en": [
        "Spoon steaming hot sticky rice onto a plate or paper wrap.",
        "Smear a spoonful of rich savory liver pâté across the warm rice.",
        "Layer sliced sweet Chinese sausage, quail eggs, and golden fluffy pork floss.",
        "Drizzle glistening scallion oil and seasoned savory soy reduction.",
        "Top with crushed roasted peanuts and crispy shallots; a powerhouse Saigon street breakfast."
      ]
    }
  },
  {
    "id": "vn-xoi-gac-dau-xanh",
    "title": {
      "vi": "Xôi Gấc Đỏ Tươi Nhân Đậu Xanh Thơm Dẻo",
      "en": "Red Gac Fruit Sticky Rice with Sweet Mung Bean Filling"
    },
    "image": "/dishes/vn-xoi-gac-dau-xanh.jpg",
    "category": {
      "vi": "Món Mặn",
      "en": "Savory Dish"
    },
    "mealType": [
      "breakfast",
      "snack"
    ],
    "region": "national",
    "diningType": [
      "home_cook"
    ],
    "isPopular": true,
    "popularityScore": 96,
    "dietaryTags": {
      "vi": [
        "May mắn ngày Tết",
        "Mâm cỗ lễ tiệc",
        "Đỏ au tự nhiên"
      ],
      "en": [
        "Festive",
        "Good Fortune",
        "Natural Red Color"
      ]
    },
    "time": "45m",
    "servings": 6,
    "calories": 350,
    "protein": 8,
    "fat": 9,
    "carbs": 61,
    "servingSize": {
      "vi": "1 đĩa xôi đóng khuôn hoa (~250g)",
      "en": "1 floral mold plate (~250g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia",
      "en": "National Institute of Nutrition"
    },
    "recipeSource": {
      "vi": "Ẩm thực Lễ Tết Việt Nam",
      "en": "Traditional Vietnamese Festive Dishes"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Gạo nếp ngon",
          "en": "Glutinous rice"
        },
        "amount": "500g"
      },
      {
        "name": {
          "vi": "Thịt quả gấc tươi bóp với rượu trắng",
          "en": "Fresh gac fruit pulp mixed with rice wine"
        },
        "amount": "150g"
      },
      {
        "name": {
          "vi": "Đậu xanh sên đường dẻo mịn",
          "en": "Sweetened mashed mung bean filling"
        },
        "amount": "150g"
      },
      {
        "name": {
          "vi": "Nước cốt dừa sánh béo",
          "en": "Coconut cream"
        },
        "amount": "50ml"
      },
      {
        "name": {
          "vi": "Đường cát trắng",
          "en": "Sugar"
        },
        "amount": "60g"
      }
    ],
    "instructions": {
      "vi": [
        "Thịt gấc bóp nhuyễn cùng rượu trắng để lên màu đỏ tươi rực rỡ, trộn đều cùng gạo nếp ngâm và chút muối.",
        "Đồ xôi trên xửng hấp khoảng 25-30 phút cho hạt nếp chín dẻo bóng bẩy.",
        "Rưới nước cốt dừa và đường cát vào xôi, đảo đều tay rồi đồ thêm 5 phút cho đường tan ngấm đều.",
        "Dùng khuôn hoa đóng xôi: cho một lớp xôi gấc đỏ xuống dưới, một lớp đậu xanh vàng ở giữa và phủ thêm lớp xôi gấc lên trên ép chặt.",
        "Úp ra đĩa đơm xôi đỏ au rực rỡ tượng trưng cho may mắn, thịnh vượng và hạnh phúc."
      ],
      "en": [
        "Mash gac aril with rice wine to activate its fiery red pigment; toss evenly into soaked rice with salt.",
        "Steam in a steamer for 25-30 mins until rice grains are plump, red, and tender.",
        "Drizzle with coconut cream and sugar, stir gently and steam 5 mins more.",
        "Assemble in a floral press mold: layer red gac rice, sweet golden mung bean paste, and more red rice.",
        "Invert onto platter displaying the festive, ruby-red symbol of prosperity and happiness."
      ]
    }
  },
  {
    "id": "vn-nom-hoa-chuoi-tai-heo",
    "title": {
      "vi": "Nộm Hoa Chuối Tai Heo Đậu Phộng Chua Ngọt",
      "en": "Banana Blossom Salad with Crunchy Pork Ears & Peanuts"
    },
    "image": "/dishes/vn-nom-hoa-chuoi-tai-heo.jpg",
    "category": {
      "vi": "Món Cuốn & Trộn",
      "en": "Rolls & Salads"
    },
    "mealType": [
      "lunch",
      "dinner"
    ],
    "region": "national",
    "diningType": [
      "home_cook",
      "eat_out"
    ],
    "isPopular": true,
    "popularityScore": 97,
    "dietaryTags": {
      "vi": [
        "Dân dã",
        "Thanh giòn",
        "Món nhắm"
      ],
      "en": [
        "Crisp",
        "Tangy",
        "Traditional Salad"
      ]
    },
    "time": "30m",
    "servings": 4,
    "calories": 220,
    "protein": 16,
    "fat": 11,
    "carbs": 14,
    "servingSize": {
      "vi": "1 đĩa nộm lớn (~350g)",
      "en": "1 large salad plate (~350g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia",
      "en": "National Institute of Nutrition"
    },
    "recipeSource": {
      "vi": "Bếp Mẹ Nấu - Món Nộm Việt",
      "en": "Traditional Salad Masters"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Hoa chuối tây thái mỏng ngâm chanh",
          "en": "Finely shredded banana blossom soaked in lemon"
        },
        "amount": "300g"
      },
      {
        "name": {
          "vi": "Tai heo luộc chín giòn thái sợi mỏng",
          "en": "Boiled crunchy pork ear strips"
        },
        "amount": "200g"
      },
      {
        "name": {
          "vi": "Cà rốt thái sợi, giá đỗ",
          "en": "Carrot shreds, bean sprouts"
        },
        "amount": "100g"
      },
      {
        "name": {
          "vi": "Rau kinh giới, húng quế, ngò gai",
          "en": "Vietnamese mint, basil, culantro"
        },
        "amount": "1 nắm"
      },
      {
        "name": {
          "vi": "Nước mắm tỏi ớt chua ngọt đánh sánh",
          "en": "Sweet sour garlic chili dressing"
        },
        "amount": "1 bát"
      },
      {
        "name": {
          "vi": "Lạc rang giã dập",
          "en": "Crushed roasted peanuts"
        },
        "amount": "50g"
      }
    ],
    "instructions": {
      "vi": [
        "Hoa chuối bào mỏng ngâm ngay vào chậu nước có pha nước cốt chanh và muối để không bị thâm đen, giữ màu trắng tinh và độ giòn.",
        "Vớt hoa chuối, giá đỗ và cà rốt vẩy thật ráo nước.",
        "Cho hoa chuối, tai heo thái lát mỏng, cà rốt và rau thơm vào âu lớn.",
        "Rưới nước mắm chua ngọt pha tỏi ớt đường chanh vào bóp trộn nhẹ tay cho ngấm đều gia vị.",
        "Bày ra đĩa rắc đậu phộng rang giã dập lên trên, ăn giòn sần sật mát lành đưa miệng."
      ],
      "en": [
        "Shred banana blossom directly into water with lemon juice and salt to prevent browning and keep crisp.",
        "Drain banana blossoms, bean sprouts, and carrots thoroughly.",
        "Combine in a large bowl with thinly sliced crunchy pork ears and fresh herbs.",
        "Drizzle sweet-and-sour garlic chili dressing, toss gently to absorb flavors.",
        "Mound onto a platter, top with crushed roasted peanuts; delivers refreshing, crunchy delight."
      ]
    }
  },
  {
    "id": "vn-goi-bo-bop-thau",
    "title": {
      "vi": "Gỏi Bò Bóp Thấu Khế Chua Chuối Chát Mè Rang",
      "en": "Beef Salad with Starfruit, Green Banana & Toasted Sesame"
    },
    "image": "/dishes/vn-goi-bo-bop-thau.jpg",
    "category": {
      "vi": "Món Cuốn & Trộn",
      "en": "Rolls & Salads"
    },
    "mealType": [
      "lunch",
      "dinner"
    ],
    "region": "national",
    "diningType": [
      "home_cook",
      "eat_out"
    ],
    "isPopular": true,
    "popularityScore": 96,
    "dietaryTags": {
      "vi": [
        "Mâm cỗ tiệc",
        "Chua chát ngọt bùi",
        "Món nhắm kinh điển"
      ],
      "en": [
        "Festive Salad",
        "Complex Flavors",
        "Tender Beef"
      ]
    },
    "time": "25m",
    "servings": 4,
    "calories": 260,
    "protein": 26,
    "fat": 10,
    "carbs": 16,
    "servingSize": {
      "vi": "1 đĩa gỏi (~350g)",
      "en": "1 plate (~350g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia",
      "en": "National Institute of Nutrition"
    },
    "recipeSource": {
      "vi": "Ẩm thực Tiệc Cưới Việt Nam",
      "en": "Vietnamese Banquet Dishes"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Thịt bắp bò thái mỏng chần tái",
          "en": "Tender beef sirloin thinly sliced & rare blanched"
        },
        "amount": "350g"
      },
      {
        "name": {
          "vi": "Khế chua thái lát hình ngôi sao",
          "en": "Sour starfruit star slices"
        },
        "amount": "2 quả"
      },
      {
        "name": {
          "vi": "Chuối xanh tước vỏ thái lát ngâm giấm",
          "en": "Astringent green banana sliced"
        },
        "amount": "2 quả"
      },
      {
        "name": {
          "vi": "Hành tây ngâm chua ngọt giòn",
          "en": "Pickled crunchy white onion"
        },
        "amount": "1 củ"
      },
      {
        "name": {
          "vi": "Mè trắng rang thơm, hành phi, bánh phồng tôm",
          "en": "Toasted sesame, fried shallots, prawn crackers"
        },
        "amount": "Vừa đủ"
      }
    ],
    "instructions": {
      "vi": [
        "Thịt bò thái mỏng, chần sơ nước sôi pha chút giấm cho vừa chín tái giữ độ mềm ngọt mọng nước.",
        "Khế chua và chuối xanh thái mỏng vắt nhẹ cho bớt vị chát gắt.",
        "Cho thịt bò, khế chua, chuối chát, hành tây và các loại rau thơm (ngò gai, húng quế) vào âu lớn.",
        "Rưới nước sốt nước mắm chua ngọt pha tỏi ớt vào bóp trộn đều tay trong 2-3 phút.",
        "Bày gỏi ra đĩa lớn rắc nhiều mè rang thơm và hành phi, xúc ăn kèm bánh phồng tôm giòn rụm."
      ],
      "en": [
        "Slice beef thinly; quickly flash-blanch in boiling water with a touch of vinegar so it remains juicy and rare.",
        "Slice starfruit and green bananas thinly; squeeze gently to tame sharp tartness.",
        "In a large bowl, combine rare beef, starfruit, green banana, onions, and fragrant herbs.",
        "Drizzle seasoned tangy fish sauce dressing, toss gently for 2-3 mins.",
        "Garnish with fragrant toasted sesame and fried shallots; scoop up with crispy prawn crackers."
      ]
    }
  },
  {
    "id": "vn-che-troi-nuoc-gung",
    "title": {
      "vi": "Chè Trôi Nước Gừng Đường Phèn Nước Cốt Dừa",
      "en": "Glutinous Rice Balls in Sweet Ginger Syrup with Coconut Cream"
    },
    "image": "/dishes/vn-che-troi-nuoc-gung.jpg",
    "category": {
      "vi": "Món Tráng Miệng",
      "en": "Dessert"
    },
    "mealType": [
      "snack"
    ],
    "region": "south",
    "diningType": [
      "home_cook",
      "eat_out"
    ],
    "isPopular": true,
    "popularityScore": 98,
    "dietaryTags": {
      "vi": [
        "Tráng miệng truyền thống",
        "Ấm áp gừng cay",
        "Dẻo mềm béo ngậy"
      ],
      "en": [
        "Traditional Dessert",
        "Warming Ginger",
        "Chewy Mochi"
      ]
    },
    "time": "40m",
    "servings": 4,
    "calories": 320,
    "protein": 6,
    "fat": 8,
    "carbs": 58,
    "servingSize": {
      "vi": "1 chén chè (2 viên lớn + viên ỉ)",
      "en": "1 bowl (2 balls + mini pearls)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia",
      "en": "National Institute of Nutrition"
    },
    "recipeSource": {
      "vi": "Ẩm thực Nam Bộ",
      "en": "Southern Sweet Soups"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Bột nếp nhồi dẻo mịn",
          "en": "Glutinous rice dough"
        },
        "amount": "300g"
      },
      {
        "name": {
          "vi": "Đậu xanh sên hành phi mặn béo",
          "en": "Sweet & savory mung bean filling"
        },
        "amount": "150g"
      },
      {
        "name": {
          "vi": "Đường thốt nốt hoặc đường phèn",
          "en": "Palm sugar or rock sugar"
        },
        "amount": "200g"
      },
      {
        "name": {
          "vi": "Gừng tươi thái sợi đập dập",
          "en": "Fresh ginger crushed & julienned"
        },
        "amount": "2 củ to"
      },
      {
        "name": {
          "vi": "Nước cốt dừa sánh béo, mè trắng rang",
          "en": "Thick coconut cream & toasted sesame"
        },
        "amount": "Vừa đủ"
      }
    ],
    "instructions": {
      "vi": [
        "Chia bột nếp thành từng viên tròn, dẹt mỏng bọc kín viên nhân đậu xanh sên hành phi thơm béo.",
        "Luộc các viên chè trong nồi nước sôi đến khi nổi lên trên mặt nước thì vớt ra thả vào thau nước lạnh.",
        "Nấu nước đường thốt nốt với 500ml nước lọc và thật nhiều gừng tươi thái sợi đun sôi liu riu cho dậy hương cay ấm.",
        "Thả các viên trôi nước vào nồi nước đường gừng đun nhỏ lửa 10 phút cho ngấm vị ngọt thơm.",
        "Múc từng viên chè óng ả ra chén, chan nước đường gừng nóng hổi, rưới nước cốt dừa và rắc mè rang thơm bùi."
      ],
      "en": [
        "Divide dough into rounds, flatten and wrap tightly around savory-sweet mung bean balls.",
        "Boil balls in water until they float; transfer to cold water.",
        "Simmer palm sugar with water and generous julienned ginger into a fragrant golden syrup.",
        "Add rice balls to ginger syrup and simmer on low for 10 mins until thoroughly infused.",
        "Ladle glossy balls into bowls, spoon warm ginger syrup, drizzle coconut cream, and top with toasted sesame."
      ]
    }
  },
  {
    "id": "vn-che-dau-xanh-danh",
    "title": {
      "vi": "Chè Đậu Xanh Đánh Bột Báng Cốt Dừa Phố Hội",
      "en": "Whipped Mung Bean Sweet Soup with Tapioca Pearls"
    },
    "image": "/dishes/vn-che-dau-xanh-danh.jpg",
    "category": {
      "vi": "Món Tráng Miệng",
      "en": "Dessert"
    },
    "mealType": [
      "snack"
    ],
    "region": "central",
    "diningType": [
      "home_cook",
      "eat_out"
    ],
    "isPopular": true,
    "popularityScore": 92,
    "dietaryTags": {
      "vi": [
        "Đặc sản Hội An",
        "Mịn màng tan trong miệng",
        "Thanh mát"
      ],
      "en": [
        "Hoi An Specialty",
        "Smooth Velvet",
        "Sweet Treat"
      ]
    },
    "time": "35m",
    "servings": 4,
    "calories": 270,
    "protein": 7,
    "fat": 6,
    "carbs": 48,
    "servingSize": {
      "vi": "1 ly chè (~250g)",
      "en": "1 glass (~250g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia",
      "en": "National Institute of Nutrition"
    },
    "recipeSource": {
      "vi": "Ẩm thực Phố Cổ Hội An",
      "en": "Hoi An Heritage Desserts"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Đậu xanh cà vỏ nấu chín mềm",
          "en": "Split yellow mung beans cooked soft"
        },
        "amount": "250g"
      },
      {
        "name": {
          "vi": "Bột báng luộc trong suốt",
          "en": "Cooked translucent tapioca pearls"
        },
        "amount": "50g"
      },
      {
        "name": {
          "vi": "Đường cát trắng hoặc đường phèn",
          "en": "Rock sugar"
        },
        "amount": "150g"
      },
      {
        "name": {
          "vi": "Nước cốt dừa đậm đặc",
          "en": "Rich coconut cream"
        },
        "amount": "150ml"
      },
      {
        "name": {
          "vi": "Đậu phộng rang giã nhỏ",
          "en": "Crushed peanuts"
        },
        "amount": "Vừa đủ"
      }
    ],
    "instructions": {
      "vi": [
        "Đậu xanh đãi sạch, nấu chín nhừ với lượng nước vừa phải.",
        "Dùng đũa bếp hoặc máy đánh nhuyễn mịn đậu xanh ngay trong nồi khi còn nóng cùng với đường cho đến khi sánh đặc mượt mà không còn gợn hạt.",
        "Múc chè đậu xanh đánh vàng ươm mịn màng ra ly hoặc chén.",
        "Thêm bột báng dai dai, rưới lớp nước cốt dừa trắng muốt béo ngậy lên trên.",
        "Rắc đậu phộng rang giòn, ăn nóng hoặc thêm đá bào giải nhiệt mùa hè."
      ],
      "en": [
        "Cook peeled mung beans until very soft with just enough water.",
        "Vigorously whip hot mung beans with sugar until silky, smooth, and pudding-like.",
        "Spoon velvety golden mung bean cream into glasses or bowls.",
        "Add chewy tapioca pearls and spoon thick coconut cream on top.",
        "Sprinkle with crushed roasted peanuts; serve warm or with shaved ice."
      ]
    }
  },
  {
    "id": "vn-che-suong-sa-hat-luu",
    "title": {
      "vi": "Chè Sương Sa Hạt Lựu Củ Năng Lá Dứa Nam Bộ",
      "en": "Southern Rainbow Jelly Sweet Soup with Water Chestnut Rubies"
    },
    "image": "/dishes/vn-che-suong-sa-hat-luu.jpg",
    "category": {
      "vi": "Món Tráng Miệng",
      "en": "Dessert"
    },
    "mealType": [
      "snack"
    ],
    "region": "south",
    "diningType": [
      "home_cook",
      "eat_out"
    ],
    "isPopular": true,
    "popularityScore": 97,
    "dietaryTags": {
      "vi": [
        "Tráng miệng Sài Gòn",
        "Đẹp mắt giòn sần sật",
        "Giải nhiệt"
      ],
      "en": [
        "Colorful",
        "Crunchy Rubies",
        "Refreshing"
      ]
    },
    "time": "40m",
    "servings": 4,
    "calories": 290,
    "protein": 4,
    "fat": 7,
    "carbs": 54,
    "servingSize": {
      "vi": "1 ly chè đầy đủ (~300g)",
      "en": "1 glass (~300g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia",
      "en": "National Institute of Nutrition"
    },
    "recipeSource": {
      "vi": "Ẩm thực Nam Bộ",
      "en": "Southern Vietnamese Desserts"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Hạt lựu củ năng bọc bột năng giòn sần sật",
          "en": "Water chestnut ruby pearls coated in tapioca"
        },
        "amount": "150g"
      },
      {
        "name": {
          "vi": "Sương sa thạch trắng giòn",
          "en": "White agar-agar jelly cubes"
        },
        "amount": "100g"
      },
      {
        "name": {
          "vi": "Thạch sương sáo đen mát lành",
          "en": "Black grass jelly"
        },
        "amount": "100g"
      },
      {
        "name": {
          "vi": "Đậu xanh đánh nhuyễn mịn",
          "en": "Smooth mashed mung beans"
        },
        "amount": "100g"
      },
      {
        "name": {
          "vi": "Nước cốt dừa thơm béo, nước đường phèn lá dứa",
          "en": "Coconut cream & pandan syrup"
        },
        "amount": "Vừa đủ"
      }
    ],
    "instructions": {
      "vi": [
        "Củ năng thái hạt lựu, ngâm màu củ dền/hoa đậu biếc rồi áo bột năng luộc chín trong suốt.",
        "Xắt thạch sương sa và sương sáo đen thành sợi hoặc hạt lựu.",
        "Cho từng lớp đậu xanh đánh, thạch sương sa, sương sáo và hạt lựu giòn giòn nhiều màu sắc vào ly.",
        "Chan nước đường phèn thơm lá dứa và rưới đẫm nước cốt dừa béo ngậy.",
        "Thêm đá bào nhuyễn, trộn đều thưởng thức từng ngụm mát lạnh giòn sần sật vui tai."
      ],
      "en": [
        "Dice water chestnuts, color naturally, coat in tapioca starch and boil into crunchy jewels.",
        "Cut white agar jelly and black grass jelly into cubes.",
        "Layer mashed mung beans, translucent jellies, and crunchy ruby gems into tall glasses.",
        "Pour pandan rock sugar syrup and generous thick coconut milk.",
        "Top with shaved ice, stir and enjoy the symphony of refreshing crunchy textures."
      ]
    }
  },
  {
    "id": "vn-che-chuoi-nuong",
    "title": {
      "vi": "Chè Chuối Nếp Nướng Nước Cốt Dừa Mè Rang",
      "en": "Grilled Banana Wrapped in Sticky Rice with Coconut Cream"
    },
    "image": "/dishes/vn-che-chuoi-nuong.jpg",
    "category": {
      "vi": "Món Tráng Miệng",
      "en": "Dessert"
    },
    "mealType": [
      "snack"
    ],
    "region": "south",
    "diningType": [
      "home_cook",
      "eat_out"
    ],
    "isPopular": true,
    "popularityScore": 99,
    "dietaryTags": {
      "vi": [
        "Top món tráng miệng thế giới",
        "Thơm lừng lá chuối",
        "Béo ngậy"
      ],
      "en": [
        "World Famous Street Food",
        "Smoky Banana",
        "Crispy Sticky Rice"
      ]
    },
    "time": "35m",
    "servings": 4,
    "calories": 360,
    "protein": 5,
    "fat": 10,
    "carbs": 64,
    "servingSize": {
      "vi": "1 dĩa chuối nướng kèm nước cốt dừa",
      "en": "1 plate (~250g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia",
      "en": "National Institute of Nutrition"
    },
    "recipeSource": {
      "vi": "Ẩm thực Đường Phố Nam Bộ",
      "en": "Southern Street Sweets"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Chuối sứ (chuối xiêm) chín ngọt",
          "en": "Ripe sweet baby bananas"
        },
        "amount": "4 quả"
      },
      {
        "name": {
          "vi": "Xôi nếp dẻo trộn nước cốt dừa",
          "en": "Sticky rice infused with coconut milk"
        },
        "amount": "300g"
      },
      {
        "name": {
          "vi": "Lá chuối tươi để gói nướng",
          "en": "Fresh banana leaves"
        },
        "amount": "4 miếng"
      },
      {
        "name": {
          "vi": "Nước cốt dừa nấu bột báng sánh béo",
          "en": "Thick coconut sauce with tapioca pearls"
        },
        "amount": "200ml"
      },
      {
        "name": {
          "vi": "Mè trắng rang thơm, đậu phộng rang",
          "en": "Toasted sesame & peanuts"
        },
        "amount": "Vừa đủ"
      }
    ],
    "instructions": {
      "vi": [
        "Bọc kín từng quả chuối sứ bằng một lớp xôi nếp dẻo thơm quanh thân chuối.",
        "Dùng lá chuối cuộn chặt bên ngoài quả chuối bọc nếp.",
        "Nướng trên than hoa hoặc nồi chiên không dầu khoảng 15-20 phút đến khi lá chuối xém thơm, vỏ xôi nếp bên ngoài vàng giòn rụm còn chuối bên trong nóng mềm ứa mật ngọt.",
        "Cắt chuối nếp nướng thành từng khoanh tròn xếp ra đĩa sâu lòng.",
        "Chan ngập nước cốt dừa nấu bột báng ấm nóng béo ngậy, rắc mè rang và đậu phộng thơm nức thưởng thức ngay."
      ],
      "en": [
        "Encase ripe sweet bananas in a tender layer of coconut-scented sticky rice.",
        "Wrap tightly in fresh banana leaves.",
        "Grill over charcoal or bake until banana leaves are charred and sticky rice crust is golden-crisp.",
        "Snip grilled banana logs into rounds and plate.",
        "Ladle warm, rich coconut tapioca sauce generously over, top with toasted sesame and crushed peanuts."
      ]
    }
  },
  {
    "id": "vn-sua-chua-nep-cam",
    "title": {
      "vi": "Sữa Chua Nếp Cẩm Điện Biên Chua Dịu Dẻo Bùi",
      "en": "Black Sticky Rice with Creamy Yogurt"
    },
    "image": "/dishes/vn-sua-chua-nep-cam.jpg",
    "category": {
      "vi": "Món Tráng Miệng",
      "en": "Dessert"
    },
    "mealType": [
      "breakfast",
      "snack"
    ],
    "region": "north",
    "diningType": [
      "home_cook",
      "eat_out"
    ],
    "isPopular": true,
    "popularityScore": 98,
    "dietaryTags": {
      "vi": [
        "Thanh nhiệt",
        "Tốt cho tiêu hóa",
        "Chua ngọt hài hòa"
      ],
      "en": [
        "Probiotic",
        "Healthy Dessert",
        "Black Sticky Rice"
      ]
    },
    "time": "30m",
    "servings": 4,
    "calories": 260,
    "protein": 7,
    "fat": 5,
    "carbs": 48,
    "servingSize": {
      "vi": "1 ly sữa chua nếp cẩm (~250g)",
      "en": "1 glass (~250g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia",
      "en": "National Institute of Nutrition"
    },
    "recipeSource": {
      "vi": "Ẩm thực Hà Nội Phố",
      "en": "Hanoi Modern Desserts"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Gạo nếp cẩm Điện Biên tím biếc",
          "en": "Purple sticky rice (nếp cẩm)"
        },
        "amount": "200g"
      },
      {
        "name": {
          "vi": "Sữa chua lên men tự nhiên có đường",
          "en": "Creamy whole milk yogurt"
        },
        "amount": "4 hộp"
      },
      {
        "name": {
          "vi": "Nước cốt dừa thơm béo",
          "en": "Coconut cream"
        },
        "amount": "50ml"
      },
      {
        "name": {
          "vi": "Lá dứa, đường phèn",
          "en": "Pandan leaves, rock sugar"
        },
        "amount": "Vừa đủ"
      }
    ],
    "instructions": {
      "vi": [
        "Nếp cẩm ngâm nước ấm 4 tiếng, nấu chín cùng lá dứa và nước lọc trên lửa nhỏ đến khi hạt nếp nở bung dẻo mềm.",
        "Thêm đường phèn nấu liu riu cho nếp cẩm sánh kẹo màu tím than óng ả, để nguội hoàn toàn.",
        "Múc 2-3 muỗng nếp cẩm dẻo bùi vào đáy ly thủy tinh.",
        "Đổ 1 hộp sữa chua mát lạnh sánh mịn lên trên lớp nếp cẩm.",
        "Rưới thêm chút nước cốt dừa béo ngậy và thêm đá bào nếu thích, trộn đều thưởng thức vị chua dịu ngọt bùi mê ly."
      ],
      "en": [
        "Soak purple glutinous rice; simmer with pandan leaves until soft and bursting.",
        "Stir in rock sugar and simmer into a thick, glossy purple jam; let cool.",
        "Spoon 2-3 tablespoons of sweet purple rice into a glass.",
        "Pour chilled creamy yogurt over the sticky rice layer.",
        "Drizzle a touch of coconut milk, add shaved ice, stir and enjoy the balanced creamy tartness."
      ]
    }
  },
  {
    "id": "vn-che-ba-ba",
    "title": {
      "vi": "Chè Bà Ba Nam Bộ Khoai Mì Hạt Sen Bột Khoai",
      "en": "Southern Ba Ba Sweet Soup with Sweet Potato, Taro & Lotus Seeds"
    },
    "image": "/dishes/vn-che-ba-ba.jpg",
    "category": {
      "vi": "Món Tráng Miệng",
      "en": "Dessert"
    },
    "mealType": [
      "snack"
    ],
    "region": "south",
    "diningType": [
      "home_cook",
      "eat_out"
    ],
    "isPopular": true,
    "popularityScore": 94,
    "dietaryTags": {
      "vi": [
        "Đặc sản Nam Bộ",
        "Đa dạng củ quả",
        "Béo ngậy nước cốt dừa"
      ],
      "en": [
        "Southern Classic",
        "Rich Roots",
        "Coconut Milk"
      ]
    },
    "time": "40m",
    "servings": 4,
    "calories": 340,
    "protein": 6,
    "fat": 12,
    "carbs": 55,
    "servingSize": {
      "vi": "1 chén chè (~300g)",
      "en": "1 bowl (~300g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia",
      "en": "National Institute of Nutrition"
    },
    "recipeSource": {
      "vi": "Ẩm thực Miền Tây Nam Bộ",
      "en": "Mekong Delta Desserts"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Khoai lang vàng, khoai môn, khoai mì cắt khối",
          "en": "Sweet potato, taro & cassava cubes"
        },
        "amount": "300g"
      },
      {
        "name": {
          "vi": "Hạt sen tươi luộc chín",
          "en": "Boiled lotus seeds"
        },
        "amount": "80g"
      },
      {
        "name": {
          "vi": "Bột khoai, bột báng ngâm mềm",
          "en": "Tapioca strips & pearls"
        },
        "amount": "60g"
      },
      {
        "name": {
          "vi": "Nước cốt dừa nguyên chất",
          "en": "Pure coconut cream"
        },
        "amount": "250ml"
      },
      {
        "name": {
          "vi": "Đường thốt nốt, lá dứa",
          "en": "Palm sugar, pandan leaves"
        },
        "amount": "Vừa đủ"
      }
    ],
    "instructions": {
      "vi": [
        "Nấu nước dão dừa với lá dứa và đường thốt nốt đun sôi.",
        "Cho khoai mì, khoai môn và khoai lang vào nấu nhỏ lửa cho chín mềm bở.",
        "Thêm hạt sen, bột khoai và bột báng vào nấu chín trong suốt.",
        "Rót nước cốt dừa đặc sánh vào khuấy đều, thêm chút xíu muối dằn vị ngọt béo hài hòa.",
        "Múc ra chén ăn nóng hoặc ấm, hương vị bùi bùi của các loại khoai quyện nước dừa thơm ngát."
      ],
      "en": [
        "Boil light coconut milk with pandan leaves and palm sugar.",
        "Add cassava, taro, and sweet potato cubes; simmer gently until tender.",
        "Add lotus seeds, tapioca strips, and pearls; cook until clear.",
        "Pour in rich coconut cream with a pinch of salt to balance sweetness.",
        "Serve warm, relishing the creamy melody of slow-cooked tropical tubers."
      ]
    }
  },
  {
    "id": "vn-che-dau-den-nuoc-dua",
    "title": {
      "vi": "Chè Đậu Đen Nấu Đường Phèn Nước Cốt Dừa",
      "en": "Classic Black Bean Sweet Soup with Coconut Cream"
    },
    "image": "/dishes/vn-che-dau-den-nuoc-dua.jpg",
    "category": {
      "vi": "Món Tráng Miệng",
      "en": "Dessert"
    },
    "mealType": [
      "snack"
    ],
    "region": "national",
    "diningType": [
      "home_cook",
      "eat_out"
    ],
    "isPopular": true,
    "popularityScore": 98,
    "dietaryTags": {
      "vi": [
        "Món chè quốc dân",
        "Giải nhiệt ngày hè",
        "Bùi béo"
      ],
      "en": [
        "National Dessert",
        "Summer Cool Down",
        "Antioxidant Rich"
      ]
    },
    "time": "40m",
    "servings": 4,
    "calories": 250,
    "protein": 9,
    "fat": 5,
    "carbs": 45,
    "servingSize": {
      "vi": "1 ly chè đầy đá (~300g)",
      "en": "1 glass (~300g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia",
      "en": "National Institute of Nutrition"
    },
    "recipeSource": {
      "vi": "Bếp Cơm Mẹ Nấu",
      "en": "Mom's Vietnamese Sweets"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Đậu đen xanh lòng ngâm mềm",
          "en": "Green-kernel black beans soaked"
        },
        "amount": "250g"
      },
      {
        "name": {
          "vi": "Đường cát hoặc đường phèn",
          "en": "Sugar or rock sugar"
        },
        "amount": "180g"
      },
      {
        "name": {
          "vi": "Nước cốt dừa thơm béo",
          "en": "Rich coconut cream"
        },
        "amount": "100ml"
      },
      {
        "name": {
          "vi": "Dừa non nạo sợi, dầu chuối, đậu phộng",
          "en": "Fresh shredded coconut, banana extract, peanuts"
        },
        "amount": "Vừa đủ"
      }
    ],
    "instructions": {
      "vi": [
        "Đậu đen hầm với nước đến khi hạt đậu mềm bở tơi thì chắt riêng nước đậu ra bát.",
        "Cho đường vào xào rim kỹ với hạt đậu trên lửa nhỏ 10 phút cho đường ngấm sâu vào từng hạt đậu dẻo ngọt đậm đà mà không bị nát.",
        "Đổ nước đậu đen trở lại nồi đun sôi lăn tăn hòa quyện vị ngọt.",
        "Múc chè đậu đen ra ly, thêm đá lạnh hoặc đá bào.",
        "Rưới lớp nước cốt dừa béo ngậy, rắc dừa nạo sợi và đậu phộng rang giòn thơm lừng."
      ],
      "en": [
        "Simmer black beans until soft and tender; drain and reserve liquid.",
        "Simmer sugar with the soft beans over low heat for 10 mins so sweetness penetrates deep inside without breaking them.",
        "Reunite bean broth with sweetened beans; bring to a gentle simmer.",
        "Ladle into glasses, add crushed ice.",
        "Top with thick coconut cream, fresh shredded coconut, and toasted peanuts."
      ]
    }
  },
  {
    "id": "vn-tau-hu-nuoc-duong-gung",
    "title": {
      "vi": "Tàu Hũ Nước Đường Gừng Nóng Mềm Mịn",
      "en": "Warm Silken Tofu Pudding in Sweet Ginger Syrup"
    },
    "image": "/dishes/vn-tau-hu-nuoc-duong-gung.jpg",
    "category": {
      "vi": "Món Tráng Miệng",
      "en": "Dessert"
    },
    "mealType": [
      "snack"
    ],
    "region": "national",
    "diningType": [
      "home_cook",
      "eat_out"
    ],
    "isPopular": true,
    "popularityScore": 97,
    "dietaryTags": {
      "vi": [
        "Tuổi thơ gánh rong",
        "Mềm tan như nhung",
        "Ấm áp"
      ],
      "en": [
        "Street Cart Classic",
        "Velvety Soft",
        "Comfort Food"
      ]
    },
    "time": "30m",
    "servings": 4,
    "calories": 180,
    "protein": 8,
    "fat": 4,
    "carbs": 29,
    "servingSize": {
      "vi": "1 chén tàu hũ nóng (~200g)",
      "en": "1 bowl (~200g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia",
      "en": "National Institute of Nutrition"
    },
    "recipeSource": {
      "vi": "Gánh Tàu Hũ Cổ Truyền",
      "en": "Traditional Tofu Pudding Cart"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Đậu nành nguyên chất làm tàu hũ non",
          "en": "Fresh soybean milk coagulated into pudding"
        },
        "amount": "1 tô lớn (~600g)"
      },
      {
        "name": {
          "vi": "Đường thốt nốt nâu thơm",
          "en": "Palm sugar"
        },
        "amount": "150g"
      },
      {
        "name": {
          "vi": "Gừng tươi thái lát và đập dập",
          "en": "Fresh ginger slices bruised"
        },
        "amount": "2 củ"
      },
      {
        "name": {
          "vi": "Nước cốt dừa thơm béo",
          "en": "Coconut cream"
        },
        "amount": "100ml"
      },
      {
        "name": {
          "vi": "Trân châu đường đen dẻo dai",
          "en": "Chewy tapioca pearls"
        },
        "amount": "80g"
      }
    ],
    "instructions": {
      "vi": [
        "Tàu hũ non giữ nóng trong nồi ủ ấm cho mềm mượt như lụa.",
        "Nấu nước đường thốt nốt với gừng tươi đập dập đun nhỏ lửa cho sánh thơm cay nồng ấm.",
        "Dùng thìa vỏ trai hoặc muôi dẹt hớt từng lớp mỏng tàu hũ trắng muốt xếp vào chén nhỏ.",
        "Chan nước đường gừng nóng hổi thơm nức lên trên.",
        "Thêm một thìa nước cốt dừa béo ngậy và trân châu dẻo dai thưởng thức từng muỗng mềm tan trên đầu lưỡi."
      ],
      "en": [
        "Keep freshly coagulated soybean pudding warm and velvety in an insulated pot.",
        "Boil brown palm sugar with bruised ginger slices until aromatic and warm.",
        "Use a flat spoon to skim paper-thin sheets of silken tofu into small bowls.",
        "Ladle hot ginger syrup over the delicate tofu layers.",
        "Drizzle coconut cream and add chewy boba pearls; melts on the tongue like a warm cloud."
      ]
    }
  },
  {
    "id": "vn-ca-chep-gion-xao-can-toi",
    "title": {
      "vi": "Cá Chép Giòn Xào Cần Tỏi Thì Là",
      "en": "Stir-fried Crunchy Carp with Celery, Garlic & Dill"
    },
    "image": "/dishes/vn-ca-chep-gion-xao-can-toi.jpg",
    "category": {
      "vi": "Món Xào",
      "en": "Stir-fry"
    },
    "mealType": [
      "lunch",
      "dinner"
    ],
    "region": "north",
    "diningType": [
      "home_cook",
      "eat_out"
    ],
    "isPopular": true,
    "popularityScore": 94,
    "dietaryTags": {
      "vi": [
        "Thịt giòn sần sật",
        "Món nhắm",
        "Đậm vị"
      ],
      "en": [
        "Crunchy Fish",
        "Aromatic Herbs",
        "Savory"
      ]
    },
    "time": "25m",
    "servings": 4,
    "calories": 240,
    "protein": 27,
    "fat": 10,
    "carbs": 6,
    "servingSize": {
      "vi": "1 đĩa xào (~300g)",
      "en": "1 plate (~300g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia",
      "en": "National Institute of Nutrition"
    },
    "recipeSource": {
      "vi": "Ẩm thực Sông Hồng",
      "en": "Red River Cuisine"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Phi lê cá chép giòn thái lát mỏng",
          "en": "Crispy carp fillet sliced"
        },
        "amount": "400g"
      },
      {
        "name": {
          "vi": "Cần tây, thì là, hành hoa cắt khúc",
          "en": "Celery, fresh dill, scallions"
        },
        "amount": "200g"
      },
      {
        "name": {
          "vi": "Tỏi tép đập dập, ớt sừng",
          "en": "Garlic, red chili"
        },
        "amount": "1 củ"
      },
      {
        "name": {
          "vi": "Dầu hào, nước mắm, tiêu sọ xay",
          "en": "Oyster sauce, fish sauce, white pepper"
        },
        "amount": "Vừa đủ"
      }
    ],
    "instructions": {
      "vi": [
        "Thịt cá chép giòn ướp với chút hạt nêm, tiêu, gừng băm và dầu ăn 10 phút.",
        "Phi thơm tỏi trong chảo dầu nóng, xào cá trên lửa cực lớn trong 2-3 phút cho từng miếng cá săn giòn sần sật đặc trưng.",
        "Cho cần tây, hành hoa, thì là và ớt sừng vào đảo nhanh tay thêm 1 phút.",
        "Nêm dầu hào và nước mắm vừa vị, rắc tiêu đen tắt bếp trút ra đĩa dùng nóng ngay."
      ],
      "en": [
        "Marinate carp slices with broth powder, white pepper, ginger, and a little oil for 10 mins.",
        "Sear fish in smoking garlic oil over high heat for 2-3 mins until exceptionally crunchy-firm.",
        "Add celery, scallions, fresh dill, and red chili; toss for 1 minute.",
        "Season with oyster sauce and fish sauce, finish with black pepper, and serve hot."
      ]
    }
  },
  {
    "id": "vn-ca-bong-lau-kho-to",
    "title": {
      "vi": "Cá Bông Lau Kho Tộ Đậm Vị Nam Bộ",
      "en": "Mekong Pangasius Catfish Braised in Claypot"
    },
    "image": "/dishes/vn-ca-bong-lau-kho-to.jpg",
    "category": {
      "vi": "Món Mặn",
      "en": "Savory Dish"
    },
    "mealType": [
      "lunch",
      "dinner"
    ],
    "region": "south",
    "diningType": [
      "home_cook"
    ],
    "isPopular": true,
    "popularityScore": 95,
    "dietaryTags": {
      "vi": [
        "Cơm nhà",
        "Đặc sản Miền Tây",
        "Béo ngọt đậm đà"
      ],
      "en": [
        "Claypot",
        "Mekong Delta",
        "Caramelized"
      ]
    },
    "time": "40m",
    "servings": 4,
    "calories": 310,
    "protein": 26,
    "fat": 19,
    "carbs": 6,
    "servingSize": {
      "vi": "1 tộ kho (~300g)",
      "en": "1 clay pot (~300g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia",
      "en": "National Institute of Nutrition"
    },
    "recipeSource": {
      "vi": "Ẩm thực Miền Tây Nam Bộ",
      "en": "Mekong Delta Home Kitchen"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Cá bông lau cắt khoanh tươi béo",
          "en": "Fresh pangasius catfish steaks"
        },
        "amount": "600g"
      },
      {
        "name": {
          "vi": "Nước dừa xiêm tươi",
          "en": "Fresh coconut water"
        },
        "amount": "150ml"
      },
      {
        "name": {
          "vi": "Nước mắm ngon, nước màu dừa Bến Tre",
          "en": "Fish sauce, Ben Tre coconut caramel"
        },
        "amount": "3 thìa canh"
      },
      {
        "name": {
          "vi": "Ớt hiểm đỏ, hành tím băm, tiêu sọ",
          "en": "Hot chilies, shallots, peppercorns"
        },
        "amount": "Vừa đủ"
      },
      {
        "name": {
          "vi": "Tóp mỡ giòn",
          "en": "Pork cracklings"
        },
        "amount": "50g"
      }
    ],
    "instructions": {
      "vi": [
        "Cá bông lau rửa sạch với nước muối chanh, thấm khô, ướp nước mắm, hành tím, nước màu dừa 20 phút.",
        "Xếp cá vào tộ đất, đun lửa lớn cho thịt cá săn và ngấm màu cánh gián óng ả.",
        "Đổ nước dừa tươi xâm xấp mặt cá, đun sôi rồi hạ nhỏ lửa kho liu riu trong 25 phút.",
        "Khi nước kho cạn sánh sệt keo lại, rải tóp mỡ giòn, ớt hiểm nguyên trái và tiêu sọ đập dập lên trên.",
        "Dọn nguyên tộ cá nóng hổi bốc khói ăn kèm cơm trắng và đĩa rau luộc chấm nước cá."
      ],
      "en": [
        "Clean catfish steaks with lime salt; marinate with fish sauce, shallots, and coconut caramel for 20 mins.",
        "Sear in a clay pot over high heat to seal the fish and coat in caramel glaze.",
        "Add fresh coconut water, bring to boil, then simmer on low for 25 mins.",
        "When sauce turns syrupy and glossy, scatter crispy cracklings, whole chilies, and cracked pepper.",
        "Serve bubbling in claypot alongside steamed rice and boiled greens."
      ]
    }
  },
  {
    "id": "vn-hen-xuc-banh-da",
    "title": {
      "vi": "Hến Xào Xúc Bánh Đa Đô Lương Nghệ An",
      "en": "Stir-fried Baby River Mussels with Crispy Rice Crackers"
    },
    "image": "/dishes/vn-hen-xuc-banh-da.jpg",
    "category": {
      "vi": "Món Mặn",
      "en": "Savory Dish"
    },
    "mealType": [
      "lunch",
      "dinner",
      "snack"
    ],
    "region": "central",
    "diningType": [
      "home_cook",
      "eat_out"
    ],
    "isPopular": true,
    "popularityScore": 96,
    "dietaryTags": {
      "vi": [
        "Đặc sản Xứ Nghệ",
        "Món nhắm kinh điển",
        "Giòn rụm"
      ],
      "en": [
        "Central Vietnam",
        "Crispy Crackers",
        "Savory Mussels"
      ]
    },
    "time": "20m",
    "servings": 4,
    "calories": 220,
    "protein": 21,
    "fat": 9,
    "carbs": 15,
    "servingSize": {
      "vi": "1 đĩa hến xào + 2 bánh đa mè",
      "en": "1 plate mussels + 2 rice crackers"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia",
      "en": "National Institute of Nutrition"
    },
    "recipeSource": {
      "vi": "Ẩm thực Xứ Nghệ",
      "en": "Nghe An Heritage Foods"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Thịt hến sông tươi luộc đãi sạch cát",
          "en": "Fresh river mussel meat"
        },
        "amount": "400g"
      },
      {
        "name": {
          "vi": "Bánh đa Đô Lương nướng giòn rụm",
          "en": "Do Luong toasted sesame rice crackers"
        },
        "amount": "4 cái"
      },
      {
        "name": {
          "vi": "Hành tăm (củ nén) đập dập",
          "en": "Crushed white chive bulbs (hành tăm)"
        },
        "amount": "2 thìa canh"
      },
      {
        "name": {
          "vi": "Rau răm, ớt hiểm, đậu phộng rang giã dập",
          "en": "Vietnamese coriander, chili, crushed peanuts"
        },
        "amount": "Vừa đủ"
      },
      {
        "name": {
          "vi": "Nước mắm, bột canh, dầu ăn",
          "en": "Fish sauce, seasoning, oil"
        },
        "amount": "Vừa đủ"
      }
    ],
    "instructions": {
      "vi": [
        "Hến rửa sạch vắt nhẹ ráo nước.",
        "Phi thơm ngập hành tăm đập dập với dầu ăn cho dậy mùi thơm nồng nàn đặc trưng xứ Nghệ.",
        "Trút thịt hến vào xào săn nhanh tay trên lửa lớn trong 2-3 phút, nêm nước mắm ngon và tiêu ớt.",
        "Cho rau răm thái nhỏ vào đảo đều rồi tắt bếp.",
        "Múc hến ra đĩa rắc đậu phộng rang giòn, bẻ từng miếng bánh đa mè giòn rụm xúc hến thưởng thức ngay."
      ],
      "en": [
        "Rinse river mussel meat and gently drain.",
        "Sauté crushed local white chives (hành tăm) in oil until intoxicatingly fragrant.",
        "Add mussel meat and stir-fry briskly over high heat for 2-3 mins; season with fish sauce and pepper.",
        "Toss in chopped Vietnamese coriander and turn off heat.",
        "Plate, sprinkle with crushed roasted peanuts, break crispy sesame rice crackers and scoop up the mussels."
      ]
    }
  },
  {
    "id": "vn-oc-nhoi-thit-hap-sa",
    "title": {
      "vi": "Ốc Bươu Nhồi Thịt Hấp Lá Sả Chấm Mắm Gừng",
      "en": "Steamed Stuffed Apple Snails with Lemongrass & Pork"
    },
    "image": "/dishes/vn-oc-nhoi-thit-hap-sa.jpg",
    "category": {
      "vi": "Món Mặn",
      "en": "Savory Dish"
    },
    "mealType": [
      "lunch",
      "dinner",
      "snack"
    ],
    "region": "north",
    "diningType": [
      "home_cook",
      "eat_out"
    ],
    "isPopular": true,
    "popularityScore": 97,
    "dietaryTags": {
      "vi": [
        "Đặc sản Hà Nội",
        "Giòn sần sật",
        "Thơm lừng mùi sả"
      ],
      "en": [
        "Hanoi Specialty",
        "Crunchy Snail Meat",
        "Aromatic Lemongrass"
      ]
    },
    "time": "35m",
    "servings": 4,
    "calories": 270,
    "protein": 22,
    "fat": 14,
    "carbs": 6,
    "servingSize": {
      "vi": "12-16 con ốc nhồi (~350g)",
      "en": "12-16 snails (~350g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia",
      "en": "National Institute of Nutrition"
    },
    "recipeSource": {
      "vi": "Ẩm thực Phố Cổ Hà Nội",
      "en": "Hanoi Heritage Eateries"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Thịt ốc bươu băm hạt lựu giòn sần sật",
          "en": "Minced crunchy apple snail meat"
        },
        "amount": "250g"
      },
      {
        "name": {
          "vi": "Giò sống và thịt heo xay",
          "en": "Pork paste & minced pork"
        },
        "amount": "200g"
      },
      {
        "name": {
          "vi": "Vỏ ốc bươu làm sạch khử trùng",
          "en": "Cleaned apple snail shells"
        },
        "amount": "16 vỏ"
      },
      {
        "name": {
          "vi": "Lá sả non tươi",
          "en": "Fresh lemongrass leaf ribbons"
        },
        "amount": "16 dải"
      },
      {
        "name": {
          "vi": "Mộc nhĩ, nấm hương băm, hạt tiêu",
          "en": "Wood ear, shiitake, pepper"
        },
        "amount": "Vừa đủ"
      },
      {
        "name": {
          "vi": "Nước mắm gừng lá chanh chấm kèm",
          "en": "Ginger lime leaf fish sauce"
        },
        "amount": "1 bát"
      }
    ],
    "instructions": {
      "vi": [
        "Trộn đều thịt ốc băm giòn cùng giò sống, thịt xay, mộc nhĩ nấm hương băm, tiêu và chút nước mắm.",
        "Gập đôi dải lá sả đặt luồn vào trong lòng vỏ ốc, để hai đầu lá sả thò ra ngoài làm tay cầm.",
        "Nhồi nhân thịt ốc chặt vào miệng vỏ ốc cho tròn đầy.",
        "Xếp ốc vào xửng hấp cách thủy trên lửa lớn trong 15 phút đến khi chín thơm nức mũi.",
        "Cầm hai đầu lá sả rút nhẹ viên chả ốc ra, chấm ngập chén nước mắm gừng tỏi ớt lá chanh chua ngọt cay nồng."
      ],
      "en": [
        "Mix minced snail meat with silky pork paste, ground pork, mushrooms, pepper, and fish sauce.",
        "Fold a lemongrass ribbon into each cleaned snail shell leaving ends protruding as pulling tabs.",
        "Stuff pork-snail mixture firmly into the shell cavity.",
        "Steam over high heat for 15 minutes until fragrant and springy.",
        "Pull lemongrass tabs to pop out the juicy snail meatball; dip in zesty lime-leaf ginger fish sauce."
      ]
    }
  },
  {
    "id": "vn-canh-bap-bo-cu-sen",
    "title": {
      "vi": "Canh Bắp Bò Hầm Củ Sen Ngô Ngọt Bổ Dưỡng",
      "en": "Nourishing Beef Shank Soup with Lotus Root & Sweet Corn"
    },
    "image": "/dishes/vn-canh-bap-bo-cu-sen.jpg",
    "category": {
      "vi": "Món Canh",
      "en": "Soup"
    },
    "mealType": [
      "lunch",
      "dinner"
    ],
    "region": "national",
    "diningType": [
      "home_cook"
    ],
    "isPopular": true,
    "popularityScore": 95,
    "dietaryTags": {
      "vi": [
        "Bồi bổ sức khỏe",
        "Ngọt mát tự nhiên",
        "Thanh nhiệt"
      ],
      "en": [
        "Nutritious",
        "Lotus Root",
        "Sweet Corn"
      ]
    },
    "time": "50m",
    "servings": 4,
    "calories": 320,
    "protein": 28,
    "fat": 14,
    "carbs": 18,
    "servingSize": {
      "vi": "1 tô canh hầm (~450g)",
      "en": "1 bowl (~450g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia",
      "en": "National Institute of Nutrition"
    },
    "recipeSource": {
      "vi": "Bếp Bổ Dưỡng Gia Đình",
      "en": "Vietnamese Wholesome Soups"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Bắp bò hoa thái khoanh dày",
          "en": "Beef shank cut into thick discs"
        },
        "amount": "400g"
      },
      {
        "name": {
          "vi": "Củ sen tươi gọt vỏ cắt lát tròn có lỗ",
          "en": "Fresh lotus root sliced in rounds"
        },
        "amount": "200g"
      },
      {
        "name": {
          "vi": "Ngô ngọt cắt khúc",
          "en": "Sweet corn cob pieces"
        },
        "amount": "1 bắp"
      },
      {
        "name": {
          "vi": "Cà rốt tỉa hoa",
          "en": "Carrots sliced"
        },
        "amount": "1 củ"
      },
      {
        "name": {
          "vi": "Gừng lát, hành hoa, mùi tàu, tiêu",
          "en": "Ginger, scallions, culantro, pepper"
        },
        "amount": "Vừa đủ"
      }
    ],
    "instructions": {
      "vi": [
        "Bắp bò chần nước sôi khử bọt, cho vào nồi hầm cùng 1.2 lít nước và gừng lát trên lửa nhỏ trong 30 phút.",
        "Cho củ sen và ngô ngọt vào hầm cùng thêm 15 phút cho củ sen giòn bùi, ngô tiết vị ngọt lịm vào nước dùng.",
        "Thêm cà rốt hầm tiếp 5 phút, nêm nước mắm ngon và chút muối vừa miệng.",
        "Múc ra tô lớn, rắc hành hoa, mùi tàu và tiêu xay thưởng thức nóng bồi bổ cơ thể."
      ],
      "en": [
        "Blanch beef shank, simmer in 1.2L water with ginger slices over low heat for 30 mins.",
        "Add lotus root slices and sweet corn chunks; simmer 15 mins until tender.",
        "Add carrots for 5 mins; season with fish sauce and sea salt.",
        "Ladle into large bowls, garnish with scallions, culantro, and pepper."
      ]
    }
  },
  {
    "id": "vn-cai-ngong-xao-thit-bo",
    "title": {
      "vi": "Cải Ngồng Xào Thịt Bò Dầu Hào Giòn Ngọt",
      "en": "Stir-fried Choy Sum Tips with Beef in Oyster Sauce"
    },
    "image": "/dishes/vn-cai-ngong-xao-thit-bo.jpg",
    "category": {
      "vi": "Món Xào",
      "en": "Stir-fry"
    },
    "mealType": [
      "lunch",
      "dinner"
    ],
    "region": "national",
    "diningType": [
      "home_cook"
    ],
    "isPopular": true,
    "popularityScore": 93,
    "dietaryTags": {
      "vi": [
        "Cơm nhà",
        "Nhanh gọn",
        "Giòn ngọt"
      ],
      "en": [
        "Quick",
        "Crispy Greens",
        "Home Cook"
      ]
    },
    "time": "15m",
    "servings": 4,
    "calories": 230,
    "protein": 24,
    "fat": 10,
    "carbs": 7,
    "servingSize": {
      "vi": "1 đĩa xào (~280g)",
      "en": "1 plate (~280g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia",
      "en": "National Institute of Nutrition"
    },
    "recipeSource": {
      "vi": "Món Ngon Mỗi Ngày",
      "en": "Daily Delicious VN"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Thịt thăn bò thái mỏng",
          "en": "Beef sirloin sliced"
        },
        "amount": "250g"
      },
      {
        "name": {
          "vi": "Cải ngồng non tước xơ cắt khúc",
          "en": "Young choy sum flowering stems"
        },
        "amount": "350g"
      },
      {
        "name": {
          "vi": "Tỏi tép đập dập",
          "en": "Crushed garlic"
        },
        "amount": "1 củ to"
      },
      {
        "name": {
          "vi": "Dầu hào, nước tương, tiêu xay",
          "en": "Oyster sauce, soy sauce, pepper"
        },
        "amount": "Vừa đủ"
      }
    ],
    "instructions": {
      "vi": [
        "Thịt bò ướp tỏi băm, dầu hào, tiêu và 1 thìa cà phê dầu ăn.",
        "Phi thơm tỏi, xào bò trên lửa lớn vừa chín tái thì trút riêng ra đĩa.",
        "Cho cọng cải ngồng vào xào trước 1 phút, sau đó cho lá và ngọn hoa vào đảo nhanh trên lửa lớn.",
        "Nêm dầu hào vừa ăn, trút thịt bò vào đảo đều 30 giây rồi tắt bếp trút ra đĩa dùng ngay."
      ],
      "en": [
        "Marinate beef with garlic, oyster sauce, pepper, and a splash of oil.",
        "Quickly sear beef in garlic oil over roaring heat; set aside.",
        "Stir-fry stems first for 1 min, then add leafy tops over high heat.",
        "Add oyster sauce, toss beef back in for 30s, and plate immediately."
      ]
    }
  },
  {
    "id": "vn-bun-ken-kien-giang",
    "title": {
      "vi": "Bún Kèn Kiên Giang Cá Lóc Nước Cốt Dừa",
      "en": "Kien Giang Coconut Fish Curry Rice Vermicelli"
    },
    "image": "/dishes/vn-bun-ken-kien-giang.jpg",
    "category": {
      "vi": "Món Nước",
      "en": "Noodle Soup"
    },
    "mealType": [
      "breakfast",
      "lunch"
    ],
    "region": "south",
    "diningType": [
      "home_cook",
      "eat_out"
    ],
    "isPopular": true,
    "popularityScore": 94,
    "dietaryTags": {
      "vi": [
        "Đặc sản Hà Tiên - Kiên Giang",
        "Cá lóc xay nhuyễn",
        "Cốt dừa béo bùi"
      ],
      "en": [
        "Kien Giang Icon",
        "Flaked Fish Curry",
        "Rich Coconut"
      ]
    },
    "time": "40m",
    "servings": 4,
    "calories": 450,
    "protein": 25,
    "fat": 16,
    "carbs": 52,
    "servingSize": {
      "vi": "1 tô bún kèn (~500g)",
      "en": "1 bowl (~500g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia",
      "en": "National Institute of Nutrition"
    },
    "recipeSource": {
      "vi": "Ẩm thực Hà Tiên Kiên Giang",
      "en": "Kien Giang Culinary Heritage"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Cá lóc đồng luộc gỡ thịt giã nhuyễn sên vàng",
          "en": "Pounded flaked snakehead fish"
        },
        "amount": "400g"
      },
      {
        "name": {
          "vi": "Nước cốt dừa sánh béo",
          "en": "Coconut cream"
        },
        "amount": "250ml"
      },
      {
        "name": {
          "vi": "Bột nghệ, bột cà ri, sả băm",
          "en": "Turmeric, mild curry powder, lemongrass"
        },
        "amount": "Vừa đủ"
      },
      {
        "name": {
          "vi": "Bún tươi sợi nhỏ",
          "en": "Fresh vermicelli"
        },
        "amount": "500g"
      },
      {
        "name": {
          "vi": "Đu đủ xanh bào sợi, dưa leo băm, rau thơm",
          "en": "Papaya shreds, cucumber, herbs"
        },
        "amount": "Vừa đủ"
      }
    ],
    "instructions": {
      "vi": [
        "Cá lóc luộc chín, gỡ lấy thịt giã tơi rồi xào thơm với sả băm, bột cà ri, bột nghệ và ớt cho thịt cá khô tơi màu vàng óng.",
        "Nấu nước luộc cá với nước cốt dừa và phần cá xào trên lửa nhỏ tạo nước sốt kèn sánh vàng béo ngậy thơm nức mũi.",
        "Cho bún tươi vào tô, phủ lớp đu đủ xanh giòn, dưa leo băm và rau thơm ghém.",
        "Chan nước sốt cá cốt dừa vàng óng nóng hổi lên trên, thêm thìa nước mắm chua ngọt trộn đều thưởng thức."
      ],
      "en": [
        "Flake cooked snakehead fish, pound into fibers, sauté with lemongrass, curry powder, and turmeric until golden and fluffy.",
        "Simmer fish stock with coconut cream and sautéed fish into a rich, fragrant golden curry gravy.",
        "Place rice noodles in bowls, top with crunchy shredded green papaya, cucumber, and fresh herbs.",
        "Ladle creamy golden fish curry broth over, drizzle seasoned fish sauce, and mix well."
      ]
    }
  },
  {
    "id": "vn-pho-kho-gia-lai",
    "title": {
      "vi": "Phở Khô Gia Lai Hai Tô Nước Lèo Béo Ngậy",
      "en": "Gia Lai Dry Two-Bowl Pho with Rich Broth"
    },
    "image": "/dishes/vn-pho-kho-gia-lai.jpg",
    "category": {
      "vi": "Món Nước",
      "en": "Noodle Soup"
    },
    "mealType": [
      "breakfast",
      "lunch",
      "dinner"
    ],
    "region": "central",
    "diningType": [
      "home_cook",
      "eat_out"
    ],
    "isPopular": true,
    "popularityScore": 98,
    "dietaryTags": {
      "vi": [
        "Đặc sản Tây Nguyên",
        "Ăn hai tô độc đáo",
        "Tương đen đậm đà"
      ],
      "en": [
        "Highland Icon",
        "Two-bowl Serving",
        "Fermented Soy Sauce"
      ]
    },
    "time": "35m",
    "servings": 4,
    "calories": 490,
    "protein": 29,
    "fat": 16,
    "carbs": 58,
    "servingSize": {
      "vi": "1 tô phở khô + 1 tô nước lèo bò",
      "en": "1 dry pho bowl + 1 beef soup bowl"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia",
      "en": "National Institute of Nutrition"
    },
    "recipeSource": {
      "vi": "Ẩm thực Phố Núi Pleiku Gia Lai",
      "en": "Pleiku Highland Heritage"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Sợi phở khô Gia Lai tròn dai",
          "en": "Round chewy Gia Lai dried pho noodles"
        },
        "amount": "400g"
      },
      {
        "name": {
          "vi": "Thịt bò tái, nạm bò, bò viên",
          "en": "Rare beef, brisket, beef meatballs"
        },
        "amount": "350g"
      },
      {
        "name": {
          "vi": "Thịt heo băm xào thơm",
          "en": "Minced pork topping"
        },
        "amount": "150g"
      },
      {
        "name": {
          "vi": "Tương đen (tương hạt lên men) Gia Lai",
          "en": "Gia Lai fermented dark bean paste"
        },
        "amount": "1 chén"
      },
      {
        "name": {
          "vi": "Hành phi, tóp mỡ, giá đỗ, húng quế",
          "en": "Fried shallots, cracklings, bean sprouts, basil"
        },
        "amount": "Vừa đủ"
      },
      {
        "name": {
          "vi": "Nước dùng xương bò ngọt lịm",
          "en": "Rich beef bone stock"
        },
        "amount": "1.2 lít"
      }
    ],
    "instructions": {
      "vi": [
        "Trụng sợi phở khô Gia Lai qua nước sôi cho sợi dai giòn, cho vào tô cùng giá chần và thịt băm xào.",
        "Rắc nhiều tóp mỡ giòn và hành phi thơm lừng vào tô phở khô.",
        "Múc nước dùng bò nóng hổi thơm nức mùi quế hồi vào tô thứ hai cùng thịt bò tái, nạm bò và bò viên thái đôi.",
        "Khi ăn, nêm tương đen đặc sản Pleiku, tương ớt vào tô phở khô trộn đều tay.",
        "Gắp một đũa phở khô đậm đà rồi húp một thìa nước dùng bò béo ngậy ngọt lịm."
      ],
      "en": [
        "Blanch round dry pho noodles until chewy-firm; place in bowl with bean sprouts and minced pork.",
        "Top with crispy pork cracklings and fried shallots.",
        "Ladle scalding aromatic beef broth into a second bowl containing rare beef, brisket, and meatballs.",
        "Toss dry noodles with signature local sweet fermented bean paste and chili sauce.",
        "Take a bite of savory noodles followed by a sip of steaming, rich bone broth."
      ]
    }
  },
  {
    "id": "vn-banh-khot-mien-tay",
    "title": {
      "vi": "Bánh Khọt Miền Tây Nước Cốt Dừa Tép Đồng",
      "en": "Mekong Mini Savory Crispy Pancakes with Coconut & Shrimp"
    },
    "image": "/dishes/vn-banh-khot-mien-tay.jpg",
    "category": {
      "vi": "Món Mặn",
      "en": "Savory Dish"
    },
    "mealType": [
      "lunch",
      "dinner",
      "snack"
    ],
    "region": "south",
    "diningType": [
      "home_cook",
      "eat_out"
    ],
    "isPopular": true,
    "popularityScore": 96,
    "dietaryTags": {
      "vi": [
        "Bánh dân gian",
        "Giòn rụm",
        "Béo ngậy nước cốt dừa"
      ],
      "en": [
        "Crispy Mini Pancakes",
        "Coconut Cream",
        "Mekong Shrimps"
      ]
    },
    "time": "35m",
    "servings": 4,
    "calories": 380,
    "protein": 16,
    "fat": 18,
    "carbs": 40,
    "servingSize": {
      "vi": "8-10 chiếc bánh khọt (~300g)",
      "en": "8-10 mini cakes (~300g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia",
      "en": "National Institute of Nutrition"
    },
    "recipeSource": {
      "vi": "Ẩm thực Bánh Dân Gian Nam Bộ",
      "en": "Southern Traditional Cakes"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Bột gạo pha cốt dừa và bột nghệ vàng",
          "en": "Rice flour with coconut milk & turmeric"
        },
        "amount": "300g"
      },
      {
        "name": {
          "vi": "Tép đồng hoặc tôm đất tươi",
          "en": "Fresh river shrimps"
        },
        "amount": "200g"
      },
      {
        "name": {
          "vi": "Đậu xanh hấp chín nguyên hạt",
          "en": "Steamed whole mung beans"
        },
        "amount": "60g"
      },
      {
        "name": {
          "vi": "Nước cốt dừa đặc rưới mặt bánh",
          "en": "Thick coconut cream drizzle"
        },
        "amount": "100ml"
      },
      {
        "name": {
          "vi": "Mỡ hành, bột tôm chấy đỏ",
          "en": "Scallion oil, dried shrimp powder"
        },
        "amount": "Vừa đủ"
      },
      {
        "name": {
          "vi": "Rau sống cuốn bánh và nước mắm chua ngọt",
          "en": "Herbs for wrapping & dipping sauce"
        },
        "amount": "1 mẹt"
      }
    ],
    "instructions": {
      "vi": [
        "Làm nóng khuôn bánh khọt bằng gang, quết dầu ăn vào từng lỗ khuôn.",
        "Rót bột vào 2/3 khuôn xèo xèo, đặt con tôm tươi và vài hạt đậu xanh vào giữa.",
        "Đậy nắp vung nướng 3 phút cho viền bánh vàng ruộm giòn tan.",
        "Mở nắp rưới thìa nước cốt dừa sánh béo và mỡ hành lên mặt bánh.",
        "Lấy bánh ra đĩa rắc bột tôm chấy đỏ rực, cuốn cùng lá cải bẹ xanh rau thơm chấm nước mắm chua ngọt."
      ],
      "en": [
        "Heat cast-iron mini pancake molds; brush generously with oil.",
        "Pour turmeric coconut batter sizzlingly into molds; place fresh shrimp and mung beans on top.",
        "Cover and cook for 3 mins until the outer rim is deep golden-crisp.",
        "Drizzle thick coconut cream and scallion oil on top.",
        "Pop cakes out, dust with dried shrimp powder; wrap in mustard greens and dip in sweet fish sauce."
      ]
    }
  },
  {
    "id": "vn-banh-can-da-lat",
    "title": {
      "vi": "Bánh Căn Trứng Cút Xíu Mại Mỡ Hành Đà Lạt",
      "en": "Da Lat Mini Rice Cakes with Quail Eggs & Meatball Broth"
    },
    "image": "/dishes/vn-banh-can-da-lat.jpg",
    "category": {
      "vi": "Món Mặn",
      "en": "Savory Dish"
    },
    "mealType": [
      "breakfast",
      "dinner",
      "snack"
    ],
    "region": "central",
    "diningType": [
      "home_cook",
      "eat_out"
    ],
    "isPopular": true,
    "popularityScore": 98,
    "dietaryTags": {
      "vi": [
        "Đặc sản Đà Lạt",
        "Nướng khuôn đất không dầu",
        "Xíu mại nóng hổi"
      ],
      "en": [
        "Da Lat Icon",
        "Clay Baked",
        "Quail Eggs"
      ]
    },
    "time": "30m",
    "servings": 4,
    "calories": 360,
    "protein": 18,
    "fat": 15,
    "carbs": 38,
    "servingSize": {
      "vi": "1 phần (5 cặp bánh căn + chén xíu mại)",
      "en": "1 serving (5 pairs + sauce bowl)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia",
      "en": "National Institute of Nutrition"
    },
    "recipeSource": {
      "vi": "Ẩm thực Phố Núi Đà Lạt",
      "en": "Da Lat Street Food"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Bột gạo tẻ ngâm xay nước",
          "en": "Wet-milled rice batter"
        },
        "amount": "300g"
      },
      {
        "name": {
          "vi": "Trứng cút tươi đập trực tiếp",
          "en": "Fresh quail eggs"
        },
        "amount": "15 quả"
      },
      {
        "name": {
          "vi": "Xíu mại viên xốt nóng",
          "en": "Hot savory meatballs"
        },
        "amount": "8 viên"
      },
      {
        "name": {
          "vi": "Nước chấm mắm nêm hoặc mắm ớt hành hoa ngập bát",
          "en": "Scallion dipping broth"
        },
        "amount": "4 chén"
      },
      {
        "name": {
          "vi": "Mỡ hành thơm ngậy",
          "en": "Scallion oil"
        },
        "amount": "4 thìa canh"
      }
    ],
    "instructions": {
      "vi": [
        "Đốt nóng khuôn đất nung chuyên dụng không dùng dầu mỡ.",
        "Đổ bột bánh căn vào từng chén đất, đập ngay 1 quả trứng cút vào giữa rồi đậy nắp đất nung.",
        "Nướng khoảng 2-3 phút đến khi đáy bánh vàng giòn, mặt trên mềm xốp thơm mùi khói đất nung.",
        "Cạy hai chiếc bánh úp vào nhau thành một cặp, quết mỡ hành bóng lộn.",
        "Thả ngập cặp bánh căn nóng bỏng vào chén súp xíu mại ngập tràn hành hoa và sa tế cay xè, vừa thổi vừa ăn."
      ],
      "en": [
        "Heat unglazed earthenware pancake molds dry without any oil.",
        "Pour rice batter into each cup, crack a quail egg inside, cover with clay lids.",
        "Bake 2-3 mins until bottoms are crispy and tops are fluffy with an earthy aroma.",
        "Pair two cakes together and brush with scallion oil.",
        "Dunk cakes directly into a hot bowl of meatball scallion broth spiked with chili."
      ]
    }
  },
  {
    "id": "vn-banh-xeo-mien-trung",
    "title": {
      "vi": "Bánh Xèo Miền Trung Vỏ Giòn Chấm Nước Lèo Đậu Phộng",
      "en": "Central Crispy Mini Pancakes with Peanut Liver Dipping Sauce"
    },
    "image": "/dishes/vn-banh-xeo-mien-trung.jpg",
    "category": {
      "vi": "Món Cuốn & Trộn",
      "en": "Rolls & Salads"
    },
    "mealType": [
      "lunch",
      "dinner"
    ],
    "region": "central",
    "diningType": [
      "home_cook",
      "eat_out"
    ],
    "isPopular": true,
    "popularityScore": 97,
    "dietaryTags": {
      "vi": [
        "Đặc sản Miền Trung",
        "Vỏ giòn rụm",
        "Nước lèo gan béo bùi"
      ],
      "en": [
        "Central Vietnam",
        "Ultra Crispy",
        "Peanut Liver Sauce"
      ]
    },
    "time": "35m",
    "servings": 4,
    "calories": 420,
    "protein": 21,
    "fat": 22,
    "carbs": 36,
    "servingSize": {
      "vi": "3-4 chiếc bánh xèo (~300g)",
      "en": "3-4 pancakes (~300g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia",
      "en": "National Institute of Nutrition"
    },
    "recipeSource": {
      "vi": "Ẩm thực Xứ Huế & Đà Nẵng",
      "en": "Hue & Da Nang Heritage"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Bột gạo pha nghệ và nước cốt dừa",
          "en": "Turmeric rice batter"
        },
        "amount": "300g"
      },
      {
        "name": {
          "vi": "Tôm đất, thịt ba chỉ thái lát mỏng",
          "en": "Shrimp & pork belly slices"
        },
        "amount": "250g"
      },
      {
        "name": {
          "vi": "Giá đỗ tươi",
          "en": "Fresh bean sprouts"
        },
        "amount": "150g"
      },
      {
        "name": {
          "vi": "Nước lèo đậu phộng gan heo béo bùi",
          "en": "Peanut & pork liver dipping sauce"
        },
        "amount": "1 bát"
      },
      {
        "name": {
          "vi": "Bánh tráng cuốn, rau cải con, chuối chát, khế chua",
          "en": "Rice paper, greens, starfruit"
        },
        "amount": "1 mẹt"
      }
    ],
    "instructions": {
      "vi": [
        "Đun nóng chảo gang nhỏ với dầu, xào săn vài miếng tôm thịt.",
        "Múc muôi bột tráng đều quanh chảo xèo xèo, rải giá đỗ vào giữa đậy nắp 2 phút.",
        "Mở nắp rưới thêm chút dầu viền chảo chiên cho đáy bánh giòn tan vàng rộm rồi gấp đôi lại.",
        "Nấu nước lèo: xay nhuyễn gan heo, đậu phộng rang, mè trắng, tương nếp đun sánh đặc béo ngậy.",
        "Cuốn bánh xèo giòn rụm vào bánh tráng cùng rau sống, chấm ngập chén nước lèo gan đậu phộng thần thánh."
      ],
      "en": [
        "Heat a small iron pan with oil, sear a few shrimps and pork slices.",
        "Ladle batter sizzlingly around the pan, add bean sprouts, cover for 2 mins.",
        "Uncover, drizzle oil around rim until the shell turns exceptionally crispy and golden; fold in half.",
        "Simmer ground pork liver, roasted peanuts, sesame, and soybean paste into a thick luscious dip.",
        "Roll crispy pancake with fresh herbs in rice paper; dip deep into the rich peanut liver sauce."
      ]
    }
  },
  {
    "id": "vn-banh-hoi-thit-nuong",
    "title": {
      "vi": "Bánh Hỏi Thịt Nướng Mỡ Hành Lá Hẹ",
      "en": "Fine Rice Vermicelli Weave with Grilled Pork & Chive Oil"
    },
    "image": "/dishes/vn-banh-hoi-thit-nuong.jpg",
    "category": {
      "vi": "Món Mặn",
      "en": "Savory Dish"
    },
    "mealType": [
      "breakfast",
      "lunch",
      "dinner"
    ],
    "region": "central",
    "diningType": [
      "home_cook",
      "eat_out"
    ],
    "isPopular": true,
    "popularityScore": 96,
    "dietaryTags": {
      "vi": [
        "Đặc sản Bình Định",
        "Mềm mướt từng thớ",
        "Thịt nướng thơm lừng"
      ],
      "en": [
        "Fine Woven Vermicelli",
        "Smoky Pork",
        "Central Icon"
      ]
    },
    "time": "40m",
    "servings": 4,
    "calories": 450,
    "protein": 26,
    "fat": 19,
    "carbs": 45,
    "servingSize": {
      "vi": "1 đĩa bánh hỏi thịt nướng (~350g)",
      "en": "1 platter (~350g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia",
      "en": "National Institute of Nutrition"
    },
    "recipeSource": {
      "vi": "Ẩm thực Bình Định",
      "en": "Binh Dinh Culinary Heritage"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Bánh hỏi sợi mảnh đan lưới mềm mịn",
          "en": "Fine woven rice vermicelli sheets"
        },
        "amount": "500g"
      },
      {
        "name": {
          "vi": "Thịt nạc dăm ướp sả ớt nướng than hoa",
          "en": "Charcoal grilled lemongrass pork"
        },
        "amount": "400g"
      },
      {
        "name": {
          "vi": "Dầu lá hẹ thái nhỏ (mỡ hẹ)",
          "en": "Chive infused oil"
        },
        "amount": "4 thìa canh"
      },
      {
        "name": {
          "vi": "Đậu phộng rang, rau sống, dưa leo",
          "en": "Roasted peanuts, herbs, cucumber"
        },
        "amount": "Vừa đủ"
      },
      {
        "name": {
          "vi": "Nước mắm tỏi ớt chua ngọt",
          "en": "Sweet garlic chili dipping sauce"
        },
        "amount": "1 bát"
      }
    ],
    "instructions": {
      "vi": [
        "Bánh hỏi hấp nóng lại cho mềm mướt, thoa đều lớp dầu lá hẹ xanh mướt thơm dịu lên từng miếng bánh.",
        "Thịt heo thái mỏng ướp mật ong, sả băm, nước mắm, tiêu nướng trên than hoa cháy xém vàng ruộm thơm nức.",
        "Xếp bánh hỏi thoa mỡ hẹ ra đĩa, đặt xiên thịt nướng vàng ươm bên cạnh.",
        "Rắc đậu phộng rang giòn lên trên mặt bánh hỏi.",
        "Cuốn bánh hỏi cùng thịt nướng và rau sống chấm nước mắm tỏi ớt đậm đà."
      ],
      "en": [
        "Steam woven rice sheets until tender; brush glistening emerald chive oil over each sheet.",
        "Grill marinated lemongrass pork slices over hot charcoal until caramelized and smoky.",
        "Arrange chive-brushed vermicelli sheets on a platter next to skewers of golden grilled pork.",
        "Garnish with crushed roasted peanuts.",
        "Wrap with fresh herbs and dip in sweet-and-sour garlic chili fish sauce."
      ]
    }
  },
  {
    "id": "vn-mien-xao-long-ga",
    "title": {
      "vi": "Miến Xào Lòng Mề Gà Nấm Mèo Rau Răm",
      "en": "Stir-fried Glass Noodles with Chicken Giblets & Wood Ear"
    },
    "image": "/dishes/vn-mien-xao-long-ga.jpg",
    "category": {
      "vi": "Món Xào",
      "en": "Stir-fry"
    },
    "mealType": [
      "lunch",
      "dinner"
    ],
    "region": "national",
    "diningType": [
      "home_cook"
    ],
    "isPopular": true,
    "popularityScore": 91,
    "dietaryTags": {
      "vi": [
        "Cơm nhà",
        "Miến dong dai ráo",
        "Đậm đà"
      ],
      "en": [
        "Glass Noodles",
        "Chewy Giblets",
        "Home Cook"
      ]
    },
    "time": "25m",
    "servings": 4,
    "calories": 310,
    "protein": 21,
    "fat": 10,
    "carbs": 35,
    "servingSize": {
      "vi": "1 đĩa miến xào (~280g)",
      "en": "1 plate (~280g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia",
      "en": "National Institute of Nutrition"
    },
    "recipeSource": {
      "vi": "Bếp Cơm Mẹ Nấu",
      "en": "Mom's Vietnamese Kitchen"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Miến dong sạch sợi dai ngâm mềm",
          "en": "Chewy dong glass noodles soaked"
        },
        "amount": "250g"
      },
      {
        "name": {
          "vi": "Lòng mề gà làm sạch thái miếng",
          "en": "Cleaned chicken giblets sliced"
        },
        "amount": "300g"
      },
      {
        "name": {
          "vi": "Mộc nhĩ, nấm hương thái sợi",
          "en": "Shredded wood ear & shiitake"
        },
        "amount": "80g"
      },
      {
        "name": {
          "vi": "Hành tím, rau răm, mùi tàu, hành hoa",
          "en": "Shallots, Vietnamese coriander, culantro"
        },
        "amount": "Vừa đủ"
      },
      {
        "name": {
          "vi": "Dầu hào, nước mắm, tiêu đen",
          "en": "Oyster sauce, fish sauce, black pepper"
        },
        "amount": "Vừa đủ"
      }
    ],
    "instructions": {
      "vi": [
        "Miến ngâm nước ấm vừa mềm, vớt ra cắt ngắn, trộn chút dầu ăn và lòng trắng trứng để xào tơi ráo không dính bết.",
        "Phi thơm hành tím, xào lòng mề gà với mộc nhĩ nấm hương chín giòn sần sật, trút ra đĩa riêng.",
        "Cho miến vào chảo đảo nhanh tay trên lửa lớn cùng chút nước dùng và dầu hào cho sợi miến trong veo, săn dai ráo sợi.",
        "Trút lòng gà trở lại đảo đều tay cùng rau răm, hành hoa và mùi tàu thái nhỏ.",
        "Múc ra đĩa rắc nhiều tiêu đen xay, ăn nóng sợi miến dai giòn thơm nức."
      ],
      "en": [
        "Soak glass noodles until pliable; snip shorter and toss with a drop of oil to keep strands separate.",
        "Sauté shallots, stir-fry giblets and mushrooms until crunchy-tender; set aside.",
        "Toss glass noodles in wok with oyster sauce and a splash of broth until glossy, translucent, and dry.",
        "Reunite giblets with noodles, fold in Vietnamese coriander, culantro, and scallions.",
        "Serve hot with cracked black pepper."
      ]
    }
  },
  {
    "id": "vn-che-khoai-deo",
    "title": {
      "vi": "Chè Khoai Dẻo Lá Dứa Nước Cốt Dừa",
      "en": "Chewy Sweet Potato & Taro Balls in Pandan Coconut Soup"
    },
    "image": "/dishes/vn-che-khoai-deo.jpg",
    "category": {
      "vi": "Món Tráng Miệng",
      "en": "Dessert"
    },
    "mealType": [
      "snack"
    ],
    "region": "national",
    "diningType": [
      "home_cook",
      "eat_out"
    ],
    "isPopular": true,
    "popularityScore": 97,
    "dietaryTags": {
      "vi": [
        "Món tráng miệng hot",
        "Dai dẻo nhiều màu",
        "Béo ngậy"
      ],
      "en": [
        "Chewy Tapioca Balls",
        "Colorful Dessert",
        "Coconut Cream"
      ]
    },
    "time": "35m",
    "servings": 4,
    "calories": 310,
    "protein": 3,
    "fat": 8,
    "carbs": 58,
    "servingSize": {
      "vi": "1 ly chè đầy đủ (~300g)",
      "en": "1 glass (~300g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia",
      "en": "National Institute of Nutrition"
    },
    "recipeSource": {
      "vi": "Bếp Trẻ Hiện Đại",
      "en": "Modern Vietnamese Sweets"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Khoai lang vàng, khoai lang tím hấp nghiền nhồi bột năng",
          "en": "Yellow & purple sweet potato chewy dough"
        },
        "amount": "300g"
      },
      {
        "name": {
          "vi": "Nước cốt dừa thơm béo",
          "en": "Creamy coconut milk"
        },
        "amount": "200ml"
      },
      {
        "name": {
          "vi": "Nước đường lá dứa thơm dịu",
          "en": "Pandan rock sugar syrup"
        },
        "amount": "1 bát"
      },
      {
        "name": {
          "vi": "Mè trắng rang, thạch sương sáo đen",
          "en": "Toasted sesame & black grass jelly"
        },
        "amount": "Vừa đủ"
      }
    ],
    "instructions": {
      "vi": [
        "Khoai lang hấp chín nghiền mịn, nhồi cùng bột năng cắt thành từng khúc vuông nhỏ xinh nhiều màu sắc.",
        "Luộc các viên khoai dẻo trong nước sôi đến khi nổi lên thì vớt thả vào bát nước đá lạnh cho dai giòn sần sật.",
        "Cho các viên khoai dẻo tím, vàng óng cùng thạch sương sáo vào ly.",
        "Chan nước đường phèn lá dứa và rưới nước cốt dừa sánh béo lên trên.",
        "Rắc mè rang thơm, thêm đá bào thưởng thức từng viên khoai dẻo quánh dẻo dai vui miệng."
      ],
      "en": [
        "Mash steamed sweet potatoes, knead with tapioca starch, and cut into vibrant bite-sized nuggets.",
        "Boil chewy balls until floating; shock in ice water for bouncy texture.",
        "Layer purple and golden chewy balls with black grass jelly in glasses.",
        "Pour pandan syrup and rich coconut cream over.",
        "Top with toasted sesame and shaved ice for a delightful chewy treat."
      ]
    }
  },
  {
    "id": "vn-che-sam-bo-luong",
    "title": {
      "vi": "Chè Sâm Bổ Lượng Rong Biển Củ Sen Nhãn Nhục",
      "en": "Ching Bo Leung Cooling Herbal Sweet Soup"
    },
    "image": "/dishes/vn-che-sam-bo-luong.jpg",
    "category": {
      "vi": "Món Tráng Miệng",
      "en": "Dessert"
    },
    "mealType": [
      "snack"
    ],
    "region": "south",
    "diningType": [
      "home_cook",
      "eat_out"
    ],
    "isPopular": true,
    "popularityScore": 98,
    "dietaryTags": {
      "vi": [
        "Thanh nhiệt giải độc",
        "Bổ dưỡng thảo mộc",
        "Thơm ngọt thanh"
      ],
      "en": [
        "Detox",
        "Herbal Refreshment",
        "Saigon Classic"
      ]
    },
    "time": "35m",
    "servings": 4,
    "calories": 220,
    "protein": 4,
    "fat": 1,
    "carbs": 49,
    "servingSize": {
      "vi": "1 ly chè đầy đá (~350g)",
      "en": "1 glass (~350g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia",
      "en": "National Institute of Nutrition"
    },
    "recipeSource": {
      "vi": "Ẩm thực Người Hoa Chợ Lớn Sài Gòn",
      "en": "Cholon Saigon Herbal Sweets"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Rong sụn biển (phổ tai) ngâm giòn",
          "en": "Crunchy seaweed strips (phổ tai)"
        },
        "amount": "50g"
      },
      {
        "name": {
          "vi": "Củ sen tươi thái lát nấu đường",
          "en": "Sweet candied lotus root slices"
        },
        "amount": "100g"
      },
      {
        "name": {
          "vi": "Nhãn nhục (long nhãn khô) nâu đen ngọt đậm",
          "en": "Dried longan pulp"
        },
        "amount": "60g"
      },
      {
        "name": {
          "vi": "Hạt bo bo (ý dĩ) hầm chín mềm",
          "en": "Cooked pearl barley / job's tears"
        },
        "amount": "80g"
      },
      {
        "name": {
          "vi": "Táo đỏ, hạt sen tươi, đường phèn",
          "en": "Red dates, lotus seeds, rock sugar"
        },
        "amount": "Vừa đủ"
      }
    ],
    "instructions": {
      "vi": [
        "Nấu hạt sen, ý dĩ và táo đỏ với 1 lít nước lọc đến khi mềm chín tới.",
        "Thêm đường phèn và củ sen thái lát vào đun sôi liu riu cho ngấm vị ngọt thanh.",
        "Cho nhãn nhục và phổ tai thái sợi vào đun sôi bùng lại 2 phút là tắt bếp ngay để phổ tai giữ độ giòn sần sật không bị nhớt.",
        "Để nguội rồi cất ngăn mát tủ lạnh.",
        "Múc ra ly thủy tinh cùng nhiều đá bào, húp từng ngụm nước sâm ngọt thanh mát lịm giải nhiệt tức thì."
      ],
      "en": [
        "Simmer lotus seeds, pearl barley, and red dates in 1L water until tender.",
        "Add rock sugar and lotus root slices; simmer gently until infused.",
        "Toss in dried longan and crunchy seaweed strips for just 2 mins; remove from heat to preserve crunch.",
        "Chill completely.",
        "Serve in tall glasses with crushed ice; deliciously sweet, herbal, and profoundly refreshing."
      ]
    }
  },
  {
    "id": "vn-thit-kho-trung-cut",
    "title": {
      "vi": "Thịt Nạc Kho Trứng Cút Rim Tiêu Đậm Vị",
      "en": "Braised Pork Loin with Quail Eggs & Black Pepper"
    },
    "image": "/dishes/vn-thit-kho-trung-cut.jpg",
    "category": {
      "vi": "Món Mặn",
      "en": "Savory Dish"
    },
    "mealType": [
      "lunch",
      "dinner"
    ],
    "region": "national",
    "diningType": [
      "home_cook"
    ],
    "isPopular": true,
    "popularityScore": 95,
    "dietaryTags": {
      "vi": [
        "Cơm nhà",
        "Trẻ em thích",
        "Đậm đà"
      ],
      "en": [
        "Home Cook",
        "Savory",
        "Kid Friendly"
      ]
    },
    "time": "35m",
    "servings": 4,
    "calories": 320,
    "protein": 26,
    "fat": 20,
    "carbs": 6,
    "servingSize": {
      "vi": "1 tô kho (~250g)",
      "en": "1 bowl (~250g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia",
      "en": "National Institute of Nutrition"
    },
    "recipeSource": {
      "vi": "Bếp Cơm Mẹ Nấu",
      "en": "Mom's Vietnamese Kitchen"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Thịt nạc vai hoặc ba chỉ",
          "en": "Pork shoulder or belly"
        },
        "amount": "400g"
      },
      {
        "name": {
          "vi": "Trứng cút luộc bóc vỏ",
          "en": "Hard-boiled quail eggs"
        },
        "amount": "15 quả"
      },
      {
        "name": {
          "vi": "Nước mắm ngon, nước hàng, tiêu",
          "en": "Fish sauce, caramel, pepper"
        },
        "amount": "Vừa đủ"
      },
      {
        "name": {
          "vi": "Hành tím, tỏi, ớt",
          "en": "Shallots, garlic, chili"
        },
        "amount": "Vừa đủ"
      }
    ],
    "instructions": {
      "vi": [
        "Thịt heo cắt con chì, ướp nước mắm, hành tím, tiêu và nước hàng 15 phút.",
        "Trứng cút có thể chiên sơ cho phồng rộp vỏ hoặc để nguyên.",
        "Phi thơm tỏi, xào thịt săn trên lửa vừa rồi cho nước sôi xâm xấp mặt thịt.",
        "Cho trứng cút vào kho cùng trên lửa nhỏ trong 20 phút đến khi nước cạn sệt sánh óng màu cánh gián.",
        "Rắc nhiều tiêu xay, dùng nóng với cơm trắng."
      ],
      "en": [
        "Cut pork into cubes, marinate with fish sauce, shallots, pepper, and caramel for 15 mins.",
        "Optionally flash-fry quail eggs for blistered skins.",
        "Sauté garlic, sear pork, add boiling water to cover.",
        "Add quail eggs and simmer for 20 mins until sauce reduces into a thick mahogany glaze.",
        "Finish with fresh black pepper and serve with warm rice."
      ]
    }
  },
  {
    "id": "vn-suon-xao-chua-ngot-mien-nam",
    "title": {
      "vi": "Sườn Xào Chua Ngọt Dứa Cà Chua Nam Bộ",
      "en": "Southern Sweet & Sour Ribs with Pineapple & Tomato"
    },
    "image": "/dishes/vn-suon-xao-chua-ngot-mien-nam.jpg",
    "category": {
      "vi": "Món Mặn",
      "en": "Savory Dish"
    },
    "mealType": [
      "lunch",
      "dinner"
    ],
    "region": "south",
    "diningType": [
      "home_cook"
    ],
    "isPopular": true,
    "popularityScore": 94,
    "dietaryTags": {
      "vi": [
        "Cơm nhà",
        "Chua ngọt đậm đà",
        "Đầy màu sắc"
      ],
      "en": [
        "Home Cook",
        "Sweet & Sour",
        "Vibrant"
      ]
    },
    "time": "30m",
    "servings": 4,
    "calories": 340,
    "protein": 23,
    "fat": 22,
    "carbs": 12,
    "servingSize": {
      "vi": "1 đĩa sườn (~300g)",
      "en": "1 plate (~300g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia",
      "en": "National Institute of Nutrition"
    },
    "recipeSource": {
      "vi": "Ẩm thực Miền Nam",
      "en": "Southern Vietnamese Kitchen"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Sườn non chặt khúc",
          "en": "Pork ribs sectioned"
        },
        "amount": "500g"
      },
      {
        "name": {
          "vi": "Dứa (thơm) chín thái lát",
          "en": "Pineapple slices"
        },
        "amount": "1/4 quả"
      },
      {
        "name": {
          "vi": "Cà chua bổ múi cau, ớt chuông",
          "en": "Tomatoes wedged & bell peppers"
        },
        "amount": "150g"
      },
      {
        "name": {
          "vi": "Hành tây, tỏi băm",
          "en": "Onion, garlic"
        },
        "amount": "Vừa đủ"
      },
      {
        "name": {
          "vi": "Sốt chua ngọt: giấm, đường, nước mắm, tương cà",
          "en": "Sweet sour sauce blend"
        },
        "amount": "1 bát"
      }
    ],
    "instructions": {
      "vi": [
        "Sườn non chiên vàng giòn hai mặt.",
        "Phi thơm tỏi, xào thơm dứa, cà chua và ớt chuông chín tới.",
        "Đổ bát sốt chua ngọt vào đun sôi sủi bọt sánh mịn.",
        "Trút sườn chiên và hành tây vào đảo đều trên lửa lớn 2-3 phút cho sốt áo đều khắp từng miếng sườn.",
        "Bày ra đĩa rắc ngò rí và tiêu đen dùng nóng."
      ],
      "en": [
        "Pan-fry pork ribs until golden brown.",
        "Sauté garlic, then cook pineapple, tomatoes, and bell peppers until tender.",
        "Pour in sweet-and-sour sauce mixture and bring to a simmer.",
        "Add ribs and onions; toss over high heat for 2-3 mins until generously coated.",
        "Plate and garnish with fresh cilantro and black pepper."
      ]
    }
  },
  {
    "id": "vn-canh-ca-ro-dong-rau-cai",
    "title": {
      "vi": "Canh Cá Rô Đồng Nấu Rau Cải Gừng Ấm",
      "en": "Field Anabas Fish Soup with Mustard Greens & Ginger"
    },
    "image": "/dishes/vn-canh-ca-ro-dong-rau-cai.jpg",
    "category": {
      "vi": "Món Canh",
      "en": "Soup"
    },
    "mealType": [
      "lunch",
      "dinner"
    ],
    "region": "north",
    "diningType": [
      "home_cook"
    ],
    "isPopular": true,
    "popularityScore": 95,
    "dietaryTags": {
      "vi": [
        "Đặc sản đồng quê",
        "Ấm bụng",
        "Ngọt lịm"
      ],
      "en": [
        "Countryside Classic",
        "Warming Ginger",
        "Sweet Fish Broth"
      ]
    },
    "time": "35m",
    "servings": 4,
    "calories": 190,
    "protein": 20,
    "fat": 6,
    "carbs": 7,
    "servingSize": {
      "vi": "1 tô canh lớn (~400g)",
      "en": "1 bowl (~400g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia",
      "en": "National Institute of Nutrition"
    },
    "recipeSource": {
      "vi": "Bếp Quê Đồng Bằng Bắc Bộ",
      "en": "Northern Countryside Kitchen"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Cá rô đồng tươi luộc gỡ thịt",
          "en": "Fresh climbing perch (cá rô đồng) flaked"
        },
        "amount": "400g"
      },
      {
        "name": {
          "vi": "Rau cải bẹ xanh hoặc cải cúc thái nhỏ",
          "en": "Mustard greens chopped"
        },
        "amount": "300g"
      },
      {
        "name": {
          "vi": "Gừng tươi đập dập thái chỉ",
          "en": "Ginger julienned"
        },
        "amount": "1 củ"
      },
      {
        "name": {
          "vi": "Nước dùng từ xương cá giã lọc",
          "en": "Strained fish bone broth"
        },
        "amount": "800ml"
      },
      {
        "name": {
          "vi": "Nước mắm ngon, hạt tiêu, hành khô",
          "en": "Fish sauce, pepper, shallots"
        },
        "amount": "Vừa đủ"
      }
    ],
    "instructions": {
      "vi": [
        "Cá rô đồng luộc chín, khéo léo gỡ lấy thịt phi lê, phần xương và đầu cá đem giã nhuyễn lọc lấy nước ngọt trong vắt.",
        "Phi thơm hành khô, xào thịt cá rô với chút nước mắm, tiêu và gừng sợi cho săn thơm đậm đà.",
        "Đun sôi nồi nước lọc xương cá cùng gừng đập dập, hớt sạch bọt.",
        "Thả rau cải vào nấu sôi bùng 1-2 phút, trút thịt cá rô xào thơm vào nồi canh.",
        "Nêm lại vừa khẩu vị ngọt thanh đậm đà, múc ra tô húp nóng xua tan cảm giác ớn lạnh."
      ],
      "en": [
        "Boil fish, carefully flake fillets; pound head and bones to extract clear sweet fish essence.",
        "Sauté shallots, stir-fry fish fillets with fish sauce, pepper, and ginger until firm.",
        "Bring fish stock to a boil with ginger, skimming foam.",
        "Add mustard greens and cook 1-2 mins, gently slide in sautéed fish.",
        "Adjust seasoning; serve piping hot with soothing ginger heat."
      ]
    }
  },
  {
    "id": "vn-canh-bi-xanh-thit-bam",
    "title": {
      "vi": "Canh Bí Đao Nấu Thịt Băm Thanh Mát",
      "en": "Winter Melon Soup with Minced Pork"
    },
    "image": "/dishes/vn-canh-bi-xanh-thit-bam.jpg",
    "category": {
      "vi": "Món Canh",
      "en": "Soup"
    },
    "mealType": [
      "lunch",
      "dinner"
    ],
    "region": "national",
    "diningType": [
      "home_cook"
    ],
    "isPopular": true,
    "popularityScore": 96,
    "dietaryTags": {
      "vi": [
        "Cơm nhà",
        "Thanh nhiệt",
        "Nhanh gọn 15 phút"
      ],
      "en": [
        "Home Cook",
        "Cooling",
        "15 Minutes"
      ]
    },
    "time": "15m",
    "servings": 4,
    "calories": 140,
    "protein": 13,
    "fat": 6,
    "carbs": 8,
    "servingSize": {
      "vi": "1 tô canh (~350g)",
      "en": "1 bowl (~350g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia",
      "en": "National Institute of Nutrition"
    },
    "recipeSource": {
      "vi": "Món Ngon Mỗi Ngày",
      "en": "Daily Delicious VN"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Bí đao (bí xanh) gọt vỏ thái mỏng",
          "en": "Winter melon sliced"
        },
        "amount": "400g"
      },
      {
        "name": {
          "vi": "Thịt heo nạc xay",
          "en": "Minced pork"
        },
        "amount": "150g"
      },
      {
        "name": {
          "vi": "Hành tím băm, hành lá, mùi tàu",
          "en": "Shallots, scallions, culantro"
        },
        "amount": "Vừa đủ"
      },
      {
        "name": {
          "vi": "Nước mắm, muối, tiêu xay",
          "en": "Fish sauce, salt, pepper"
        },
        "amount": "Vừa đủ"
      }
    ],
    "instructions": {
      "vi": [
        "Bí xanh gọt vỏ, bỏ ruột, thái lát mỏng vừa ăn.",
        "Phi thơm hành tím, xào thịt băm chín săn với chút nước mắm tiêu.",
        "Đổ 800ml nước lọc vào đun sôi bùng, hớt sạch bọt.",
        "Thả bí xanh vào nấu sôi lại trong 2-3 phút đến khi lát bí trong suốt vừa chín tới giòn ngọt mát.",
        "Nêm gia vị vừa ăn, rắc hành lá và mùi tàu thái nhỏ, múc ra tô dùng nóng."
      ],
      "en": [
        "Peel winter melon, core, and slice into thin crescents.",
        "Sauté shallots, cook minced pork with fish sauce and pepper until browned.",
        "Add 800ml water and bring to a boil, skimming foam.",
        "Add winter melon slices and boil 2-3 mins until translucent and sweet.",
        "Season with salt and fish sauce, finish with scallions and culantro."
      ]
    }
  },
  {
    "id": "vn-nem-thinh-nam-dinh",
    "title": {
      "vi": "Nem Thính Tai Heo Gạo Rang Nam Định Cuốn Lá Sung",
      "en": "Nam Dinh Toasted Rice Powder Pork Ear Salad with Fig Leaves"
    },
    "image": "/dishes/vn-nem-thinh-nam-dinh.jpg",
    "category": {
      "vi": "Món Cuốn & Trộn",
      "en": "Rolls & Salads"
    },
    "mealType": [
      "lunch",
      "dinner",
      "snack"
    ],
    "region": "north",
    "diningType": [
      "home_cook",
      "eat_out"
    ],
    "isPopular": true,
    "popularityScore": 97,
    "dietaryTags": {
      "vi": [
        "Đặc sản Nam Định",
        "Thính gạo thơm phức",
        "Món nhắm kinh điển"
      ],
      "en": [
        "Nam Dinh Icon",
        "Toasted Rice Fragrance",
        "Beer Bite"
      ]
    },
    "time": "30m",
    "servings": 4,
    "calories": 240,
    "protein": 22,
    "fat": 12,
    "carbs": 11,
    "servingSize": {
      "vi": "1 đĩa nem thính (~250g)",
      "en": "1 plate (~250g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia",
      "en": "National Institute of Nutrition"
    },
    "recipeSource": {
      "vi": "Ẩm thực Nam Định Cổ Truyền",
      "en": "Nam Dinh Culinary Heritage"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Tai heo và thịt bì heo luộc giòn thái sợi mỏng",
          "en": "Boiled crunchy pork ears & skin sliced paper-thin"
        },
        "amount": "350g"
      },
      {
        "name": {
          "vi": "Thính gạo rang xay thơm lừng",
          "en": "Artisan toasted rice powder"
        },
        "amount": "60g"
      },
      {
        "name": {
          "vi": "Tỏi tép băm nhuyễn, ớt hiểm, lá chanh",
          "en": "Garlic, chili, lime leaves"
        },
        "amount": "Vừa đủ"
      },
      {
        "name": {
          "vi": "Lá sung non tươi, lá đinh lăng",
          "en": "Young fig leaves & polyscias leaves"
        },
        "amount": "1 rổ nhỏ"
      },
      {
        "name": {
          "vi": "Nước mắm tỏi ớt chua ngọt chấm nem",
          "en": "Sweet garlic chili fish sauce"
        },
        "amount": "1 bát"
      }
    ],
    "instructions": {
      "vi": [
        "Tai heo và bì luộc chín giòn, thái sợi thật mỏng đều tay, thấm thật khô ráo.",
        "Bóp trộn tai heo với tỏi băm nhuyễn, nước mắm ngon và chút hạt nêm cho ngấm đều vị mặn mòi.",
        "Rắc từ từ thính gạo rang thơm nức mũi vào bóp tơi đều tay sao cho từng sợi tai bì được áo một lớp bột thính vàng mơ khô ráo.",
        "Rắc thêm lá chanh thái chỉ và vài lát ớt hiểm tươi.",
        "Khi ăn, đặt lá sung non, thêm lá đinh lăng, gắp nem thính cuộn chặt chấm nước mắm tỏi ớt cay nồng đậm đà giòn rụm sần sật."
      ],
      "en": [
        "Boil pork ears and skin until tender-crisp; slice paper-thin and dry completely.",
        "Toss pork shreds with minced garlic, premium fish sauce, and seasoning until flavorful.",
        "Gradually sprinkle freshly toasted rice powder while tossing so every strand is evenly coated in a fragrant golden crust.",
        "Fold in finely julienned lime leaves and sliced chilies.",
        "Wrap in fresh young fig leaves and polyscias leaves; dip in zesty garlic chili sauce."
      ]
    }
  },
  {
    "id": "vn-che-dau-ngu",
    "title": {
      "vi": "Chè Đậu Ngự Hạt Sen Nước Cốt Dừa Cố Đô Huế",
      "en": "Hue Imperial Sweet Soup with Lima Beans & Lotus Seeds"
    },
    "image": "/dishes/vn-che-dau-ngu.jpg",
    "category": {
      "vi": "Món Tráng Miệng",
      "en": "Dessert"
    },
    "mealType": [
      "snack"
    ],
    "region": "central",
    "diningType": [
      "home_cook",
      "eat_out"
    ],
    "isPopular": true,
    "popularityScore": 95,
    "dietaryTags": {
      "vi": [
        "Ẩm thực Cung đình Huế",
        "Hạt đậu bở tơi béo ngậy",
        "Thanh tao"
      ],
      "en": [
        "Hue Royal Cuisine",
        "Velvety Lima Beans",
        "Refined Sweet"
      ]
    },
    "time": "40m",
    "servings": 4,
    "calories": 270,
    "protein": 8,
    "fat": 6,
    "carbs": 48,
    "servingSize": {
      "vi": "1 chén chè Cung đình (~250g)",
      "en": "1 imperial bowl (~250g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia",
      "en": "National Institute of Nutrition"
    },
    "recipeSource": {
      "vi": "Ẩm thực Chè Cung Đình Huế",
      "en": "Hue Royal Sweet Soups"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Hạt đậu ngự tươi bóc vỏ lụa",
          "en": "Fresh peeled royal lima beans"
        },
        "amount": "250g"
      },
      {
        "name": {
          "vi": "Hạt sen tươi hồ Tịnh Tâm Huế",
          "en": "Fresh Hue lotus seeds"
        },
        "amount": "100g"
      },
      {
        "name": {
          "vi": "Đường phèn kết tinh thanh ngọt",
          "en": "Pure rock sugar"
        },
        "amount": "160g"
      },
      {
        "name": {
          "vi": "Lá dứa thơm",
          "en": "Fresh pandan leaves"
        },
        "amount": "3 lá"
      },
      {
        "name": {
          "vi": "Nước cốt dừa thơm béo",
          "en": "Rich coconut cream"
        },
        "amount": "100ml"
      }
    ],
    "instructions": {
      "vi": [
        "Hạt đậu ngự ngâm nước bóc bỏ lớp vỏ lụa ngoài, để lại hạt đậu trắng ngà căng mọng.",
        "Hấp cách thủy đậu ngự và hạt sen khoảng 20 phút cho chín bở tơi mà hạt đậu vẫn nguyên vẹn không bị nát.",
        "Nấu nước đường phèn với lá dứa đun sôi cho đường tan trong vắt ngọt thanh.",
        "Thả đậu ngự và hạt sen đã hấp vào nồi nước đường đun nhỏ lửa 10 phút cho đường ngấm sâu vào từng hạt đậu bùi béo.",
        "Múc ra chén nhỏ kiểu Cung đình, chan nước cốt dừa, ăn nóng thanh tao hoặc ăn lạnh cùng đá bào thanh mát."
      ],
      "en": [
        "Soak fresh lima beans and peel off the outer membrane to reveal pearly white beans.",
        "Steam lima beans and lotus seeds for 20 mins until melt-in-the-mouth tender yet keeping their elegant whole shape.",
        "Simmer clear rock sugar with fragrant pandan leaves into a crystal syrup.",
        "Add steamed beans and lotus seeds; simmer on low for 10 mins so sweetness infuses deeply.",
        "Serve in delicate ceramic bowls with a touch of coconut cream; sublime hot or chilled."
      ]
    }
  },
  {
    "id": "oat-chao-yen-mach-thit-bam",
    "title": {
      "vi": "Cháo Yến Mạch Thịt Băm Cà Rốt Thanh Ngọt",
      "en": "Savory Minced Pork & Carrot Oatmeal Porridge"
    },
    "image": "/dishes/oat-chao-yen-mach-thit-bam.jpg",
    "category": {
      "vi": "Món Nước",
      "en": "Porridge & Soups"
    },
    "mealType": [
      "breakfast",
      "dinner"
    ],
    "region": "national",
    "diningType": [
      "home_cook"
    ],
    "isPopular": true,
    "popularityScore": 98,
    "dietaryTags": {
      "vi": [
        "Yến mạch",
        "Eat Clean",
        "Giảm cân",
        "Dễ tiêu hóa",
        "Bữa sáng nhanh"
      ],
      "en": [
        "Oatmeal",
        "Eat Clean",
        "Weight Loss",
        "Healthy",
        "Quick Breakfast"
      ]
    },
    "time": "15m",
    "servings": 2,
    "calories": 280,
    "protein": 18,
    "fat": 8,
    "carbs": 34,
    "servingSize": {
      "vi": "1 tô cháo (~350g)",
      "en": "1 bowl (~350g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia (NIN) & USDA Food Data Central",
      "en": "National Institute of Nutrition (NIN) & USDA Food Data Central"
    },
    "recipeSource": {
      "vi": "Bếp Eat Clean & Healthy Việt Nam (Savoury Days)",
      "en": "Savoury Days Healthy Kitchen Vietnam"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Yến mạch cán dẹt (Rolled oats)",
          "en": "Rolled oats"
        },
        "amount": "80g"
      },
      {
        "name": {
          "vi": "Thịt nạc heo xay",
          "en": "Minced lean pork"
        },
        "amount": "120g"
      },
      {
        "name": {
          "vi": "Cà rốt băm hạt lựu nhỏ",
          "en": "Carrot finely diced"
        },
        "amount": "1/2 củ (~50g)"
      },
      {
        "name": {
          "vi": "Hành tím băm nhỏ",
          "en": "Minced shallot"
        },
        "amount": "1 củ"
      },
      {
        "name": {
          "vi": "Hành lá, ngò rí thái nhỏ",
          "en": "Scallions & cilantro"
        },
        "amount": "2 nhánh"
      },
      {
        "name": {
          "vi": "Nước dùng hoặc nước lọc",
          "en": "Broth or water"
        },
        "amount": "500ml"
      },
      {
        "name": {
          "vi": "Nước mắm ngon, hạt tiêu đen",
          "en": "Fish sauce, black pepper"
        },
        "amount": "Vừa đủ"
      }
    ],
    "instructions": {
      "vi": [
        "Ướp thịt nạc xay với chút hành tím băm, 1 thìa cà phê nước mắm và tiêu xay trong 10 phút.",
        "Phi thơm hành tím với 1 thìa cà phê dầu ô-liu, cho thịt băm và cà rốt vào xào chín săn.",
        "Đổ 500ml nước lọc hoặc nước dùng vào nồi đun sôi bùng, hớt bọt.",
        "Hạ lửa vừa, trút yến mạch cán dẹt vào khuấy đều tay. Nấu trong khoảng 4-5 phút đến khi yến mạch nở bung mềm mịn, sánh dẻo thơm ngát.",
        "Nêm lại chút nước mắm cho vừa miệng, múc ra tô rắc hành hoa, ngò rí và tiêu đen thơm nức thưởng thức nóng."
      ],
      "en": [
        "Season minced pork with shallots, fish sauce, and black pepper for 10 minutes.",
        "Sauté shallots in olive oil, then add minced pork and carrots and stir-fry until cooked.",
        "Pour in 500ml broth or water and bring to a boil; skim any foam.",
        "Lower heat, stir in rolled oats and cook gently for 4-5 minutes until tender and creamy.",
        "Adjust seasoning with fish sauce, ladle into bowls, top with scallions, cilantro, and freshly cracked pepper."
      ]
    }
  },
  {
    "id": "oat-chao-yen-mach-tom-bi-do",
    "title": {
      "vi": "Cháo Yến Mạch Tôm Tươi Bí Đỏ Bổ Dưỡng",
      "en": "Nourishing Oatmeal Porridge with Fresh Shrimp & Pumpkin"
    },
    "image": "/dishes/oat-chao-yen-mach-tom-bi-do.jpg",
    "category": {
      "vi": "Món Nước",
      "en": "Porridge & Soups"
    },
    "mealType": [
      "breakfast",
      "dinner"
    ],
    "region": "national",
    "diningType": [
      "home_cook"
    ],
    "isPopular": true,
    "popularityScore": 96,
    "dietaryTags": {
      "vi": [
        "Yến mạch",
        "Bổ não",
        "Giàu Vitamin A",
        "Trẻ em & người lớn thích"
      ],
      "en": [
        "Oatmeal",
        "Brain Food",
        "Vitamin A",
        "Family Friendly"
      ]
    },
    "time": "20m",
    "servings": 2,
    "calories": 260,
    "protein": 19,
    "fat": 5,
    "carbs": 35,
    "servingSize": {
      "vi": "1 tô cháo vàng óng (~350g)",
      "en": "1 golden bowl (~350g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia (NIN)",
      "en": "National Institute of Nutrition (NIN)"
    },
    "recipeSource": {
      "vi": "Cẩm Nang Dinh Dưỡng Gia Đình & Bếp Mẹ Bé",
      "en": "Family Nutrition & Healthy Mom Kitchen"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Yến mạch cán dẹt",
          "en": "Rolled oats"
        },
        "amount": "80g"
      },
      {
        "name": {
          "vi": "Tôm sú tươi bóc vỏ băm nhỏ",
          "en": "Fresh peeled shrimp chopped"
        },
        "amount": "120g"
      },
      {
        "name": {
          "vi": "Bí đỏ gọt vỏ hấp chín tán nhuyễn",
          "en": "Pumpkin steamed & pureed"
        },
        "amount": "100g"
      },
      {
        "name": {
          "vi": "Hành tím băm",
          "en": "Minced shallot"
        },
        "amount": "1 củ"
      },
      {
        "name": {
          "vi": "Dầu ô-liu hoặc bơ lạt",
          "en": "Olive oil or butter"
        },
        "amount": "1 thìa cà phê"
      },
      {
        "name": {
          "vi": "Nước lọc",
          "en": "Water"
        },
        "amount": "500ml"
      },
      {
        "name": {
          "vi": "Gia vị mắm muối tiêu",
          "en": "Seasonings"
        },
        "amount": "Vừa đủ"
      }
    ],
    "instructions": {
      "vi": [
        "Tôm bóc vỏ, rút chỉ đen, băm nhỏ ướp chút đầu hành lá và tiêu.",
        "Bí đỏ cắt miếng nhỏ luộc hoặc hấp chín tới rồi dùng thìa tán mịn.",
        "Phi thơm hành tím với chút dầu ô-liu, xào nhanh tôm săn đỏ hồng.",
        "Đun sôi 500ml nước, cho bí đỏ tán mịn và yến mạch vào khuấy đều trên lửa nhỏ vừa trong 4 phút.",
        "Trút tôm xào vào nồi cháo đảo đều thêm 1 phút, nêm chút nước mắm thanh ngọt tự nhiên từ bí và tôm rồi tắt bếp."
      ],
      "en": [
        "Peel and devein shrimp, roughly mince and season with scallions and pepper.",
        "Steam pumpkin chunks until tender and mash into a smooth puree.",
        "Sauté shallots in olive oil, quickly cook shrimp until pink.",
        "Bring 500ml water to boil, stir in mashed pumpkin and rolled oats; simmer for 4 minutes.",
        "Fold in sautéed shrimp, cook 1 min more, season with fish sauce, and serve warm."
      ]
    }
  },
  {
    "id": "oat-chao-yen-mach-uc-ga-nam",
    "title": {
      "vi": "Cháo Yến Mạch Ức Gà Nấm Hương Giàu Đạm",
      "en": "High Protein Chicken Breast & Shiitake Oatmeal Congee"
    },
    "image": "/dishes/oat-chao-yen-mach-uc-ga-nam.jpg",
    "category": {
      "vi": "Món Nước",
      "en": "Porridge & Soups"
    },
    "mealType": [
      "breakfast",
      "lunch",
      "dinner"
    ],
    "region": "national",
    "diningType": [
      "home_cook"
    ],
    "isPopular": true,
    "popularityScore": 97,
    "dietaryTags": {
      "vi": [
        "Yến mạch",
        "High Protein",
        "Tăng cơ giảm mỡ",
        "Eat Clean"
      ],
      "en": [
        "Oatmeal",
        "High Protein",
        "Fitness",
        "Clean Eating"
      ]
    },
    "time": "20m",
    "servings": 2,
    "calories": 310,
    "protein": 29,
    "fat": 6,
    "carbs": 34,
    "servingSize": {
      "vi": "1 tô cháo (~380g)",
      "en": "1 bowl (~380g)"
    },
    "nutritionSource": {
      "vi": "USDA Food Data Central & Viện Dinh Dưỡng Quốc Gia",
      "en": "USDA Food Data Central & NIN"
    },
    "recipeSource": {
      "vi": "Bếp Eat Clean & Fitness Nutrition Vietnam",
      "en": "Fitness Nutrition & Healthy Lifestyle Vietnam"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Yến mạch cán dẹt",
          "en": "Rolled oats"
        },
        "amount": "80g"
      },
      {
        "name": {
          "vi": "Ức gà phi lê thái hạt lựu hoặc xé phay",
          "en": "Chicken breast diced or shredded"
        },
        "amount": "150g"
      },
      {
        "name": {
          "vi": "Nấm hương tươi hoặc nấm đông cô thái lát",
          "en": "Fresh shiitake mushrooms sliced"
        },
        "amount": "50g"
      },
      {
        "name": {
          "vi": "Gừng tươi đập dập băm nhỏ",
          "en": "Fresh ginger minced"
        },
        "amount": "1 lát"
      },
      {
        "name": {
          "vi": "Hành hoa, ngò rí, tiêu đen",
          "en": "Scallions, cilantro, black pepper"
        },
        "amount": "Vừa đủ"
      },
      {
        "name": {
          "vi": "Nước dùng gà trong",
          "en": "Clear chicken stock"
        },
        "amount": "500ml"
      }
    ],
    "instructions": {
      "vi": [
        "Ức gà rửa sạch cắt hạt lựu, ướp chút gừng băm, muối và tiêu.",
        "Xào thơm ức gà cùng nấm hương trên chảo chống dính với 1/2 thìa cà phê dầu mè cho thơm.",
        "Đun sôi nước dùng gà, cho yến mạch vào khuấy đều tay trên lửa nhỏ vừa trong 4 phút.",
        "Trút gà và nấm hương vào nấu cùng thêm 2 phút cho thịt gà mềm ngọt ngấm đều vào cháo yến mạch.",
        "Múc ra tô, rắc nhiều hành hoa, tiêu đen ấm bụng, lý tưởng cho người tập gym và ăn kiêng."
      ],
      "en": [
        "Dice chicken breast, season with minced ginger, salt, and pepper.",
        "Sauté chicken and sliced shiitake in sesame oil until fragrant and cooked.",
        "Bring chicken broth to a boil, stir in rolled oats and simmer for 4 minutes.",
        "Add chicken and mushrooms, simmer 2 mins until rich and creamy.",
        "Ladle into bowls, top with fresh scallions and black pepper; perfect muscle-fuel meal."
      ]
    }
  },
  {
    "id": "oat-chao-yen-mach-trung-pho-mai",
    "title": {
      "vi": "Cháo Yến Mạch Trứng Gà Phô Mai Béo Bùi",
      "en": "Creamy Egg & Cheese Savory Breakfast Oatmeal"
    },
    "image": "/dishes/oat-chao-yen-mach-trung-pho-mai.jpg",
    "category": {
      "vi": "Món Nước",
      "en": "Porridge & Soups"
    },
    "mealType": [
      "breakfast"
    ],
    "region": "national",
    "diningType": [
      "home_cook"
    ],
    "isPopular": true,
    "popularityScore": 94,
    "dietaryTags": {
      "vi": [
        "Yến mạch",
        "Bữa sáng 5 phút",
        "Béo ngậy",
        "Giàu canxi"
      ],
      "en": [
        "Oatmeal",
        "5-Min Breakfast",
        "Calcium Rich",
        "Comfort Food"
      ]
    },
    "time": "8m",
    "servings": 1,
    "calories": 320,
    "protein": 16,
    "fat": 14,
    "carbs": 32,
    "servingSize": {
      "vi": "1 tô nhỏ (~300g)",
      "en": "1 bowl (~300g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia (NIN)",
      "en": "National Institute of Nutrition (NIN)"
    },
    "recipeSource": {
      "vi": "Món Ngon Dinh Dưỡng Cho Gia Đình",
      "en": "Family Nutrition & Quick Breakfasts"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Yến mạch cán dẹt",
          "en": "Rolled oats"
        },
        "amount": "50g"
      },
      {
        "name": {
          "vi": "Trứng gà ta",
          "en": "Farm fresh egg"
        },
        "amount": "1 quả"
      },
      {
        "name": {
          "vi": "Phô mai con bò cười hoặc Cheddar",
          "en": "Laughing Cow cheese / Cheddar"
        },
        "amount": "1 viên (~15g)"
      },
      {
        "name": {
          "vi": "Nước lọc hoặc sữa tươi không đường",
          "en": "Water or unsweetened milk"
        },
        "amount": "250ml"
      },
      {
        "name": {
          "vi": "Hạt tiêu, hành lá, chút muối",
          "en": "Pepper, scallions, pinch of salt"
        },
        "amount": "Vừa đủ"
      }
    ],
    "instructions": {
      "vi": [
        "Đun sôi 250ml nước hoặc sữa tươi không đường trong nồi nhỏ.",
        "Cho yến mạch vào khuấy đều trên lửa nhỏ trong 3 phút cho yến mạch nở dẻo mịn.",
        "Đập 1 quả trứng gà vào nồi, nhanh tay dùng đũa khuấy tơi cho trứng hòa quyện tạo thành những sợi vân trứng mềm mượt.",
        "Thả viên phô mai vào dầm tan cho cháo ngậy béo ngào ngạt.",
        "Nêm chút muối tiêu, rắc hành hoa thái nhỏ, dùng nóng ngay cho bữa sáng tràn đầy năng lượng."
      ],
      "en": [
        "Bring water or unsweetened milk to a gentle simmer in a small pot.",
        "Add rolled oats and stir on low heat for 3 minutes until smooth and thickened.",
        "Crack in an egg and whisk vigorously to create silky, tender egg ribbons throughout.",
        "Melt cheese wedge into the warm oatmeal for a rich, luscious creaminess.",
        "Season with salt and cracked pepper, garnish with scallions, and enjoy immediately."
      ]
    }
  },
  {
    "id": "oat-chao-yen-mach-bo-bam-dau-ha-lan",
    "title": {
      "vi": "Cháo Yến Mạch Thịt Bò Bằm Đậu Hà Lan Bổ Máu",
      "en": "Minced Beef & Green Pea Iron-Rich Oatmeal Porridge"
    },
    "image": "/dishes/oat-chao-yen-mach-bo-bam-dau-ha-lan.jpg",
    "category": {
      "vi": "Món Nước",
      "en": "Porridge & Soups"
    },
    "mealType": [
      "breakfast",
      "lunch",
      "dinner"
    ],
    "region": "national",
    "diningType": [
      "home_cook"
    ],
    "isPopular": true,
    "popularityScore": 95,
    "dietaryTags": {
      "vi": [
        "Yến mạch",
        "Bổ máu giàu sắt",
        "Dinh dưỡng cao"
      ],
      "en": [
        "Oatmeal",
        "Iron Rich",
        "Nutrient Dense",
        "Healthy"
      ]
    },
    "time": "20m",
    "servings": 2,
    "calories": 330,
    "protein": 26,
    "fat": 9,
    "carbs": 36,
    "servingSize": {
      "vi": "1 tô cháo (~350g)",
      "en": "1 bowl (~350g)"
    },
    "nutritionSource": {
      "vi": "Bảng Thành Phần Thực Phẩm Việt Nam - Viện Dinh Dưỡng NIN",
      "en": "Vietnam Food Composition Table - NIN"
    },
    "recipeSource": {
      "vi": "Viện Dinh Dưỡng Ứng Dụng (NIN Vietnam)",
      "en": "Applied Nutrition Institute Vietnam"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Yến mạch cán dẹt",
          "en": "Rolled oats"
        },
        "amount": "80g"
      },
      {
        "name": {
          "vi": "Thịt thăn bò băm nhỏ",
          "en": "Minced beef tenderloin"
        },
        "amount": "120g"
      },
      {
        "name": {
          "vi": "Đậu Hà Lan tươi",
          "en": "Fresh green peas"
        },
        "amount": "50g"
      },
      {
        "name": {
          "vi": "Tỏi băm, gừng tươi",
          "en": "Minced garlic, ginger"
        },
        "amount": "Vừa đủ"
      },
      {
        "name": {
          "vi": "Nước dùng hoặc nước lọc",
          "en": "Broth or water"
        },
        "amount": "500ml"
      },
      {
        "name": {
          "vi": "Dầu hào, nước mắm, tiêu",
          "en": "Oyster sauce, fish sauce, pepper"
        },
        "amount": "Vừa đủ"
      }
    ],
    "instructions": {
      "vi": [
        "Thịt bò băm ướp với tỏi băm, 1/2 thìa cà phê dầu hào và tiêu trong 10 phút.",
        "Xào thịt bò nhanh tay trên lửa lớn vừa chín tái thì trút riêng ra đĩa.",
        "Đun sôi nước, cho đậu Hà Lan và yến mạch vào nấu nhỏ lửa trong 4 phút đến khi hạt đậu mềm ngọt, cháo nở sánh.",
        "Trút thịt bò vào đảo đều 1 phút cho thịt chín mềm mọng nước.",
        "Nêm lại gia vị vừa ăn, múc ra tô rắc ngò rí và tiêu đen dùng nóng."
      ],
      "en": [
        "Marinate minced beef with garlic, oyster sauce, and pepper for 10 mins.",
        "Flash-sear beef in skillet over high heat until just cooked; set aside.",
        "Boil broth, add green peas and rolled oats; simmer for 4 minutes until peas are sweet and tender.",
        "Return minced beef to the porridge, stir for 1 minute.",
        "Season to taste, garnish with cilantro and black pepper; serve hot."
      ]
    }
  },
  {
    "id": "oat-overnight-oats-hoa-qua",
    "title": {
      "vi": "Yến Mạch Ngâm Sữa Chua Qua Đêm (Overnight Oats) Hoa Quả & Hạt Chia",
      "en": "Berry & Chia Overnight Oats with Greek Yogurt"
    },
    "image": "/dishes/oat-overnight-oats-hoa-qua.jpg",
    "category": {
      "vi": "Món Tráng Miệng",
      "en": "Dessert"
    },
    "mealType": [
      "breakfast",
      "snack"
    ],
    "region": "international",
    "diningType": [
      "home_cook"
    ],
    "isPopular": true,
    "popularityScore": 99,
    "dietaryTags": {
      "vi": [
        "Yến mạch",
        "Overnight Oats",
        "Eat Clean",
        "Không cần nấu",
        "Giảm cân"
      ],
      "en": [
        "Overnight Oats",
        "No Cook",
        "High Fiber",
        "Clean Eating",
        "Probiotic"
      ]
    },
    "time": "5m (ủ qua đêm)",
    "servings": 1,
    "calories": 310,
    "protein": 14,
    "fat": 7,
    "carbs": 48,
    "servingSize": {
      "vi": "1 hũ thủy tinh (~300g)",
      "en": "1 mason jar (~300g)"
    },
    "nutritionSource": {
      "vi": "USDA Food Data Central",
      "en": "USDA Food Data Central"
    },
    "recipeSource": {
      "vi": "Savoury Days - Healthy Breakfast Ideas",
      "en": "Savoury Days Healthy Kitchen"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Yến mạch cán dẹt (Rolled oats)",
          "en": "Rolled oats"
        },
        "amount": "50g"
      },
      {
        "name": {
          "vi": "Sữa tươi không đường hoặc sữa hạt",
          "en": "Unsweetened or almond milk"
        },
        "amount": "100ml"
      },
      {
        "name": {
          "vi": "Sữa chua Hy Lạp hoặc sữa chua không đường",
          "en": "Greek yogurt"
        },
        "amount": "80g"
      },
      {
        "name": {
          "vi": "Hạt chia",
          "en": "Chia seeds"
        },
        "amount": "1 thìa cà phê (~5g)"
      },
      {
        "name": {
          "vi": "Mật ong nguyên chất",
          "en": "Pure honey"
        },
        "amount": "1 thìa cà phê"
      },
      {
        "name": {
          "vi": "Trái cây tươi (chuối, dâu tây, việt quất)",
          "en": "Fresh berries & sliced banana"
        },
        "amount": "60g"
      }
    ],
    "instructions": {
      "vi": [
        "Cho yến mạch cán dẹt, hạt chia vào hũ thủy tinh sạch.",
        "Rót sữa tươi không đường, sữa chua Hy Lạp và mật ong vào hũ.",
        "Dùng thìa khuấy thật đều cho các nguyên liệu hòa quyện vào nhau.",
        "Đậy kín nắp hũ thủy tinh, cất vào ngăn mát tủ lạnh ủ ít nhất 4 tiếng hoặc qua đêm (để hạt yến mạch và hạt chia nở dẻo mịn mát lạnh tự nhiên mà không cần nấu nướng).",
        "Sáng hôm sau lấy hũ ra, xếp trái cây tươi thái lát lên trên cùng, có thể rắc thêm chút hạnh nhân lát và thưởng thức ngay."
      ],
      "en": [
        "Add rolled oats and chia seeds into a clean mason jar.",
        "Pour in milk, Greek yogurt, and honey.",
        "Stir thoroughly until completely combined.",
        "Seal tightly and refrigerate overnight (or at least 4 hours) to allow oats and chia to soften into a pudding.",
        "In the morning, top with fresh berries, sliced banana, and toasted almond flakes. Enjoy chilled!"
      ]
    }
  },
  {
    "id": "oat-banh-chuoi-yen-mach-noi-chien",
    "title": {
      "vi": "Bánh Chuối Yến Mạch Nướng Nồi Chiên Không Dầu",
      "en": "Healthy Air-Fryer Banana Oat Baked Bread"
    },
    "image": "/dishes/oat-banh-chuoi-yen-mach-noi-chien.jpg",
    "category": {
      "vi": "Món Tráng Miệng",
      "en": "Dessert"
    },
    "mealType": [
      "breakfast",
      "snack"
    ],
    "region": "international",
    "diningType": [
      "home_cook"
    ],
    "isPopular": true,
    "popularityScore": 97,
    "dietaryTags": {
      "vi": [
        "Yến mạch",
        "Không bột mì",
        "Không đường tinh luyện",
        "Eat Clean"
      ],
      "en": [
        "Flourless",
        "No Refined Sugar",
        "Clean Eating",
        "Baked Oats"
      ]
    },
    "time": "25m",
    "servings": 4,
    "calories": 220,
    "protein": 8,
    "fat": 6,
    "carbs": 34,
    "servingSize": {
      "vi": "1 miếng bánh (~120g)",
      "en": "1 slice (~120g)"
    },
    "nutritionSource": {
      "vi": "USDA Food Data Central",
      "en": "USDA Food Data Central"
    },
    "recipeSource": {
      "vi": "Bếp Bánh Healthy Savoury Days",
      "en": "Savoury Days Healthy Bakery"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Chuối tiêu chín ngọt",
          "en": "Ripe sweet bananas"
        },
        "amount": "2 quả lớn"
      },
      {
        "name": {
          "vi": "Yến mạch cán dẹt xay thô",
          "en": "Rolled oats coarsely ground"
        },
        "amount": "120g"
      },
      {
        "name": {
          "vi": "Trứng gà",
          "en": "Egg"
        },
        "amount": "2 quả"
      },
      {
        "name": {
          "vi": "Sữa tươi không đường",
          "en": "Unsweetened milk"
        },
        "amount": "50ml"
      },
      {
        "name": {
          "vi": "Bột nở (baking powder), bột quế",
          "en": "Baking powder, cinnamon"
        },
        "amount": "1 thìa cà phê"
      },
      {
        "name": {
          "vi": "Hạnh nhân lát, nho khô",
          "en": "Almond slices, raisins"
        },
        "amount": "30g"
      }
    ],
    "instructions": {
      "vi": [
        "Dùng nĩa dầm nhuyễn 1.5 quả chuối chín trong tô (nửa quả còn lại thái lát mỏng để trang trí mặt bánh).",
        "Đập 2 quả trứng gà và rót sữa tươi vào tô chuối, đánh đều tay.",
        "Cho bột yến mạch xay, bột nở và chút bột quế vào trộn đều thành hỗn hợp sệt mịn.",
        "Lót giấy nến vào khuôn nướng, đổ bột bánh vào, xếp các lát chuối và rắc hạnh nhân, nho khô lên mặt.",
        "Cho vào nồi chiên không dầu nướng ở nhiệt độ 160°C trong 20-25 phút đến khi bánh chín vàng ruộm, xiên tăm rút ra khô ráo thơm nức mùi chuối quế."
      ],
      "en": [
        "Mash 1.5 ripe bananas in a bowl with a fork; slice the remaining half for topping.",
        "Whisk eggs and milk into the mashed bananas until smooth.",
        "Fold in ground rolled oats, baking powder, and a dash of ground cinnamon.",
        "Line a baking pan with parchment paper, pour batter in, arrange banana slices and sprinkle almonds on top.",
        "Air fry at 160°C (320°F) for 20-25 minutes until golden brown and a toothpick inserted comes out clean."
      ]
    }
  },
  {
    "id": "oat-pancake-chuoi-yen-mach",
    "title": {
      "vi": "Bánh Pancake Yến Mạch Chuối Sữa Chua Giảm Cân",
      "en": "Fluffy Banana Oat Protein Pancakes"
    },
    "image": "/dishes/oat-pancake-chuoi-yen-mach.jpg",
    "category": {
      "vi": "Món Tráng Miệng",
      "en": "Dessert"
    },
    "mealType": [
      "breakfast",
      "snack"
    ],
    "region": "international",
    "diningType": [
      "home_cook"
    ],
    "isPopular": true,
    "popularityScore": 96,
    "dietaryTags": {
      "vi": [
        "Yến mạch",
        "Ăn sáng healthy",
        "Không dầu mỡ",
        "Dễ làm 10 phút"
      ],
      "en": [
        "Pancakes",
        "Healthy Breakfast",
        "Quick & Easy",
        "Fitness"
      ]
    },
    "time": "15m",
    "servings": 2,
    "calories": 240,
    "protein": 10,
    "fat": 5,
    "carbs": 39,
    "servingSize": {
      "vi": "3-4 chiếc bánh nhỏ (~150g)",
      "en": "3-4 mini pancakes (~150g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia (NIN)",
      "en": "National Institute of Nutrition (NIN)"
    },
    "recipeSource": {
      "vi": "Eat Clean Vui Khỏe - Healthy Lifestyle VN",
      "en": "Clean Eating & Healthy Lifestyle VN"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Yến mạch cán dẹt",
          "en": "Rolled oats"
        },
        "amount": "80g"
      },
      {
        "name": {
          "vi": "Chuối tiêu chín",
          "en": "Ripe banana"
        },
        "amount": "1 quả"
      },
      {
        "name": {
          "vi": "Trứng gà",
          "en": "Egg"
        },
        "amount": "1 quả"
      },
      {
        "name": {
          "vi": "Sữa tươi không đường",
          "en": "Unsweetened milk"
        },
        "amount": "60ml"
      },
      {
        "name": {
          "vi": "Mật ong, việt quất tươi ăn kèm",
          "en": "Honey, fresh blueberries"
        },
        "amount": "Vừa đủ"
      }
    ],
    "instructions": {
      "vi": [
        "Cho yến mạch, chuối chín, trứng gà và sữa tươi vào máy xay sinh tố xay nhuyễn mịn trong 1 phút.",
        "Làm nóng chảo chống dính trên lửa nhỏ vừa, không cần dùng dầu mỡ hoặc chỉ quét lớp dầu mỏng.",
        "Múc một muôi bột đổ vào giữa chảo tạo hình tròn bánh pancake xinh xắn.",
        "Khi mặt bánh xuất hiện các bọt khí li ti (khoảng 2 phút), khéo léo lật mặt bánh và rán thêm 1-2 phút cho vàng đều hai mặt.",
        "Xếp các lớp bánh chồng lên nhau, rưới mật ong và thêm hoa quả tươi thưởng thức nóng hổi."
      ],
      "en": [
        "Add oats, banana, egg, and milk into a blender; blend on high for 1 minute until smooth.",
        "Heat a non-stick skillet over medium-low heat without oil.",
        "Ladle small circles of batter onto the hot pan.",
        "When bubbles form on the surface (about 2 mins), flip gently and cook for 1-2 minutes until golden on both sides.",
        "Stack high, drizzle pure honey, and garnish with fresh blueberries."
      ]
    }
  },
  {
    "id": "oat-sup-yen-mach-cua-nam-tuyet",
    "title": {
      "vi": "Súp Yến Mạch Cua Bể Nấm Tuyết Thanh Nhẹ",
      "en": "Light Crab & Snow Fungus Oatmeal Soup"
    },
    "image": "/dishes/oat-sup-yen-mach-cua-nam-tuyet.jpg",
    "category": {
      "vi": "Món Nước",
      "en": "Porridge & Soups"
    },
    "mealType": [
      "lunch",
      "dinner"
    ],
    "region": "national",
    "diningType": [
      "home_cook"
    ],
    "isPopular": true,
    "popularityScore": 92,
    "dietaryTags": {
      "vi": [
        "Yến mạch",
        "Thanh nhẹ",
        "Giàu canxi",
        "Món khai vị"
      ],
      "en": [
        "Seafood Soup",
        "Oatmeal",
        "Appetizer",
        "Light"
      ]
    },
    "time": "25m",
    "servings": 4,
    "calories": 190,
    "protein": 16,
    "fat": 4,
    "carbs": 23,
    "servingSize": {
      "vi": "1 chén súp (~250g)",
      "en": "1 bowl (~250g)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia (NIN)",
      "en": "National Institute of Nutrition (NIN)"
    },
    "recipeSource": {
      "vi": "Ẩm thực Dinh Dưỡng Khách Sạn & Cơm Gia Đình",
      "en": "Vietnamese Healthy Banquet Cuisine"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Yến mạch cán dẹt",
          "en": "Rolled oats"
        },
        "amount": "60g"
      },
      {
        "name": {
          "vi": "Thịt cua bể tươi gỡ sẵn",
          "en": "Fresh crab meat"
        },
        "amount": "150g"
      },
      {
        "name": {
          "vi": "Nấm tuyết ngâm nở cắt nhỏ",
          "en": "Snow fungus soaked & chopped"
        },
        "amount": "50g"
      },
      {
        "name": {
          "vi": "Lòng trắng trứng gà đánh tan",
          "en": "Egg whites"
        },
        "amount": "2 quả"
      },
      {
        "name": {
          "vi": "Nước dùng gà trong ngọt",
          "en": "Chicken broth"
        },
        "amount": "700ml"
      },
      {
        "name": {
          "vi": "Hành ngò, tiêu trắng, dầu mè",
          "en": "Cilantro, white pepper, sesame oil"
        },
        "amount": "Vừa đủ"
      }
    ],
    "instructions": {
      "vi": [
        "Xào thịt cua với chút hành khô và dầu mè cho thơm.",
        "Đun sôi nước dùng gà, cho nấm tuyết và yến mạch vào khuấy đều trên lửa nhỏ trong 5 phút.",
        "Hạ nhỏ lửa, rót từ từ lòng trắng trứng vào nồi súp đồng thời dùng đũa khuấy một chiều tạo vân mây trắng đẹp mắt.",
        "Trút thịt cua xào vào súp, nêm chút muối và hạt nêm vừa vị thanh ngọt tự nhiên.",
        "Múc ra chén rắc tiêu sọ trắng và ngò rí, dùng nóng khai vị cực kỳ bổ dưỡng."
      ],
      "en": [
        "Sauté fresh crab meat lightly with shallots and a drop of sesame oil.",
        "Bring chicken stock to a simmer, add snow fungus and rolled oats; cook gently for 5 minutes.",
        "Slowly swirl in egg whites in a circular motion to create delicate white ribbon clouds.",
        "Gently fold in cooked crab meat; season delicately with salt and white pepper.",
        "Serve steaming hot garnished with fresh cilantro."
      ]
    }
  },
  {
    "id": "oat-granola-mat-ong-hat-dinh-duong",
    "title": {
      "vi": "Granola Yến Mạch Mật Ong & Hạt Dinh Dưỡng Nướng Giòn",
      "en": "Homemade Crunchy Honey Nut Oat Granola"
    },
    "image": "/dishes/oat-granola-mat-ong-hat-dinh-duong.jpg",
    "category": {
      "vi": "Món Tráng Miệng",
      "en": "Dessert"
    },
    "mealType": [
      "breakfast",
      "snack"
    ],
    "region": "international",
    "diningType": [
      "home_cook"
    ],
    "isPopular": true,
    "popularityScore": 98,
    "dietaryTags": {
      "vi": [
        "Yến mạch",
        "Granola",
        "Giòn rụm",
        "Ăn vặt lành mạnh",
        "Bảo quản lâu"
      ],
      "en": [
        "Granola",
        "High Fiber",
        "Healthy Snack",
        "Crunchy",
        "Meal Prep"
      ]
    },
    "time": "30m",
    "servings": 8,
    "calories": 240,
    "protein": 7,
    "fat": 11,
    "carbs": 29,
    "servingSize": {
      "vi": "1 khẩu phần (~50g)",
      "en": "1 serving (~50g)"
    },
    "nutritionSource": {
      "vi": "USDA Food Data Central",
      "en": "USDA Food Data Central"
    },
    "recipeSource": {
      "vi": "Bếp Nhà Healthy - Tự Làm Granola Tại Nhà",
      "en": "Homemade Granola & Clean Eating Guide"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Yến mạch cán dẹt nguyên hạt",
          "en": "Rolled oats"
        },
        "amount": "250g"
      },
      {
        "name": {
          "vi": "Hạt hạnh nhân, hạt điều, hạt bí xanh",
          "en": "Almonds, cashews, pumpkin seeds"
        },
        "amount": "120g"
      },
      {
        "name": {
          "vi": "Nho khô hoặc nam việt quất sấy",
          "en": "Dried cranberries or raisins"
        },
        "amount": "60g"
      },
      {
        "name": {
          "vi": "Mật ong nguyên chất",
          "en": "Pure honey"
        },
        "amount": "60ml"
      },
      {
        "name": {
          "vi": "Dầu dừa tinh khiết",
          "en": "Melted coconut oil"
        },
        "amount": "30ml"
      },
      {
        "name": {
          "vi": "Bột quế thơm, chút muối hồng",
          "en": "Cinnamon powder, pinch of salt"
        },
        "amount": "1 thìa cà phê"
      }
    ],
    "instructions": {
      "vi": [
        "Trộn đều yến mạch, các loại hạt dinh dưỡng (hạnh nhân, hạt điều cắt đôi, hạt bí), bột quế và chút muối trong âu lớn.",
        "Hòa tan mật ong và dầu dừa, rưới đều lên hỗn hợp hạt rồi đảo thật kỹ cho từng hạt yến mạch thấm đẫm lớp áo bóng.",
        "Dàn đều granola lên khay nướng có lót giấy nến.",
        "Nướng ở 150°C trong lò hoặc nồi chiên không dầu khoảng 20-25 phút, cứ mỗi 8 phút lại đảo đều một lần cho hạt vàng giòn đều.",
        "Lấy ra để nguội hoàn toàn cho granola thật giòn rụm, trộn nho khô vào rồi cất hũ thủy tinh kín ăn dần cùng sữa chua hoặc sữa tươi."
      ],
      "en": [
        "Combine rolled oats, mixed nuts (almonds, cashews, pumpkin seeds), cinnamon, and salt in a large bowl.",
        "Whisk honey and melted coconut oil, pour over oat mixture, and toss thoroughly until glistening.",
        "Spread evenly on a parchment-lined baking sheet.",
        "Bake at 150°C (300°F) for 20-25 minutes, stirring every 8 minutes for even golden crispiness.",
        "Cool completely so it hardens to maximum crunch, mix in dried cranberries, and store in airtight jars."
      ]
    }
  },
  {
    "id": "oat-sua-yen-mach-hat-sen",
    "title": {
      "vi": "Sữa Yến Mạch Hạt Sen Mật Ong Nấu Ấm Ngủ Ngon",
      "en": "Warm Lotus Seed & Oat Milk for Restful Sleep"
    },
    "image": "/dishes/oat-sua-yen-mach-hat-sen.jpg",
    "category": {
      "vi": "Món Nước",
      "en": "Porridge & Soups"
    },
    "mealType": [
      "breakfast",
      "snack"
    ],
    "region": "national",
    "diningType": [
      "home_cook"
    ],
    "isPopular": true,
    "popularityScore": 93,
    "dietaryTags": {
      "vi": [
        "Yến mạch",
        "Sữa hạt thuần chay",
        "Ngủ ngon",
        "Tốt cho tim mạch"
      ],
      "en": [
        "Oat Milk",
        "Plant Based",
        "Sleep Aid",
        "Heart Healthy"
      ]
    },
    "time": "20m",
    "servings": 4,
    "calories": 140,
    "protein": 5,
    "fat": 3,
    "carbs": 24,
    "servingSize": {
      "vi": "1 ly ấm (~250ml)",
      "en": "1 warm glass (~250ml)"
    },
    "nutritionSource": {
      "vi": "Viện Dinh Dưỡng Quốc Gia (NIN)",
      "en": "National Institute of Nutrition (NIN)"
    },
    "recipeSource": {
      "vi": "Cẩm Nang Sữa Hạt Dinh Dưỡng Gia Đình",
      "en": "Family Plant Milk Guide"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Yến mạch cán dẹt",
          "en": "Rolled oats"
        },
        "amount": "60g"
      },
      {
        "name": {
          "vi": "Hạt sen tươi bỏ tâm",
          "en": "Fresh lotus seeds cored"
        },
        "amount": "80g"
      },
      {
        "name": {
          "vi": "Nước lọc",
          "en": "Filtered water"
        },
        "amount": "800ml"
      },
      {
        "name": {
          "vi": "Mật ong hoặc đường phèn",
          "en": "Honey or rock sugar"
        },
        "amount": "2 thìa canh"
      },
      {
        "name": {
          "vi": "Lá dứa (lá nếp)",
          "en": "Pandan leaves"
        },
        "amount": "2 lá"
      }
    ],
    "instructions": {
      "vi": [
        "Hạt sen luộc chín mềm bở với lá dứa trong 15 phút.",
        "Yến mạch ngâm nước ấm 10 phút cho mềm rồi vớt ra xả nhẹ.",
        "Cho hạt sen, yến mạch và nước ấm vào máy xay sinh tố xay thật nhuyễn mịn.",
        "Lọc qua rây hoặc túi lọc lấy sữa sánh mịn, cho vào nồi đun lăn tăn cùng mật ong hoặc đường phèn nhỏ lửa trong 3 phút.",
        "Rót ra ly uống ấm vào buổi tối giúp an thần, thư thái tinh thần và ngủ ngon giấc."
      ],
      "en": [
        "Boil lotus seeds with pandan leaves for 15 minutes until tender and soft.",
        "Soak rolled oats in warm water for 10 minutes; drain gently.",
        "Blend lotus seeds, oats, and warm water in a high-speed blender until silky smooth.",
        "Strain through a fine mesh, gently simmer with honey or rock sugar for 3 minutes on low.",
        "Serve warm before bedtime for a comforting and deeply restorative sleep."
      ]
    }
  },
  {
    "id": "oat-banh-quy-yen-mach-nho-kho",
    "title": {
      "vi": "Bánh Quy Yến Mạch Hạnh Nhân Nho Khô Giòn Thơm",
      "en": "Chewy & Crispy Oatmeal Raisin Almond Cookies"
    },
    "image": "/dishes/oat-banh-quy-yen-mach-nho-kho.jpg",
    "category": {
      "vi": "Món Tráng Miệng",
      "en": "Dessert"
    },
    "mealType": [
      "snack"
    ],
    "region": "international",
    "diningType": [
      "home_cook"
    ],
    "isPopular": true,
    "popularityScore": 95,
    "dietaryTags": {
      "vi": [
        "Yến mạch",
        "Bánh quy healthy",
        "Ăn vặt văn phòng",
        "Dễ làm"
      ],
      "en": [
        "Oatmeal Cookies",
        "Healthy Baking",
        "Snack",
        "High Fiber"
      ]
    },
    "time": "25m",
    "servings": 6,
    "calories": 180,
    "protein": 5,
    "fat": 7,
    "carbs": 26,
    "servingSize": {
      "vi": "2 chiếc bánh quy (~60g)",
      "en": "2 cookies (~60g)"
    },
    "nutritionSource": {
      "vi": "USDA Food Data Central",
      "en": "USDA Food Data Central"
    },
    "recipeSource": {
      "vi": "Savoury Days Bakeshop & Healthy Treats",
      "en": "Savoury Days Bakeshop"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Yến mạch cán dẹt",
          "en": "Rolled oats"
        },
        "amount": "150g"
      },
      {
        "name": {
          "vi": "Nho khô hoặc quả nam việt quất",
          "en": "Raisins or cranberries"
        },
        "amount": "50g"
      },
      {
        "name": {
          "vi": "Hạnh nhân băm nhỏ",
          "en": "Chopped almonds"
        },
        "amount": "40g"
      },
      {
        "name": {
          "vi": "Bơ lạt đun chảy hoặc dầu dừa",
          "en": "Melted butter or coconut oil"
        },
        "amount": "40g"
      },
      {
        "name": {
          "vi": "Mật ong hoặc đường nâu",
          "en": "Honey or brown sugar"
        },
        "amount": "3 thìa canh"
      },
      {
        "name": {
          "vi": "Trứng gà",
          "en": "Egg"
        },
        "amount": "1 quả"
      },
      {
        "name": {
          "vi": "Bột quế, vani, muối",
          "en": "Cinnamon, vanilla, pinch of salt"
        },
        "amount": "Vừa đủ"
      }
    ],
    "instructions": {
      "vi": [
        "Đánh tan trứng gà với bơ lạt đun chảy, mật ong và vani trong âu.",
        "Trút yến mạch, nho khô, hạnh nhân băm, bột quế và chút muối vào trộn đều thành khối kết dính dẻo quánh.",
        "Múc từng viên bột tròn đặt lên khay nướng có lót giấy nến, dùng thìa ấn hơi dẹt xuống thành hình bánh quy.",
        "Nướng ở 170°C trong 12-15 phút đến khi viền bánh vàng nâu giòn rụm.",
        "Để bánh nguội trên giá cho bánh giòn tan bên ngoài, dẻo bùi ngọt ngào bên trong."
      ],
      "en": [
        "Whisk egg, melted butter, honey, and vanilla extract together in a bowl.",
        "Fold in rolled oats, raisins, chopped almonds, cinnamon, and a pinch of salt until a sticky dough forms.",
        "Scoop spoonfuls onto a parchment-lined baking sheet and flatten into cookie rounds.",
        "Bake at 170°C (340°F) for 12-15 minutes until edges are golden and crisp.",
        "Cool on a wire rack to achieve a crispy exterior and chewy, satisfying center."
      ]
    }
  },
  {
    "id": "kr-tokbokki-pho-mai",
    "title": {
      "vi": "Bánh Gạo Cay Hàn Quốc Phô Mai Kéo Sợi (Tteokbokki)",
      "en": "Korean Spicy Cheesy Rice Cakes (Tteokbokki)"
    },
    "image": "/dishes/kr-tokbokki-pho-mai.jpg",
    "category": {
      "vi": "Món Mặn",
      "en": "Savory Dish"
    },
    "mealType": [
      "lunch",
      "dinner",
      "snack"
    ],
    "region": "korea",
    "diningType": [
      "home_cook",
      "eat_out"
    ],
    "isPopular": true,
    "popularityScore": 99,
    "dietaryTags": {
      "vi": [
        "Hàn Quốc",
        "Món hot giới trẻ",
        "Cay ngọt",
        "Phô mai kéo sợi"
      ],
      "en": [
        "Korean Street Food",
        "Spicy Sweet",
        "Cheesy",
        "Popular"
      ]
    },
    "time": "20m",
    "servings": 3,
    "calories": 450,
    "protein": 16,
    "fat": 14,
    "carbs": 65,
    "servingSize": {
      "vi": "1 dĩa lớn (~350g)",
      "en": "1 plate (~350g)"
    },
    "nutritionSource": {
      "vi": "Bộ Nông nghiệp & Thực phẩm Hàn Quốc (MAFRA)",
      "en": "Ministry of Agriculture, Food and Rural Affairs (Korea)"
    },
    "recipeSource": {
      "vi": "Ẩm thực Hàn Quốc - Maangchi & Bếp Hàn Quốc Tại Nhà",
      "en": "Maangchi Authentic Korean Street Food"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Bánh gạo Hàn Quốc (Tteokbokki tteok)",
          "en": "Korean rice cake sticks"
        },
        "amount": "350g"
      },
      {
        "name": {
          "vi": "Chả cá Hàn Quốc (Eomuk / Odeng) thái miếng",
          "en": "Korean fish cakes sliced"
        },
        "amount": "150g"
      },
      {
        "name": {
          "vi": "Phô mai Mozzarella bào sợi kéo màng",
          "en": "Shredded Mozzarella cheese"
        },
        "amount": "80g"
      },
      {
        "name": {
          "vi": "Tương ớt Hàn Quốc (Gochujang)",
          "en": "Korean red chili paste (Gochujang)"
        },
        "amount": "2.5 thìa canh"
      },
      {
        "name": {
          "vi": "Ớt bột Hàn Quốc (Gochugaru)",
          "en": "Korean red chili flakes"
        },
        "amount": "1 thìa canh"
      },
      {
        "name": {
          "vi": "Nước tương, đường cát, tỏi băm",
          "en": "Soy sauce, sugar, minced garlic"
        },
        "amount": "1 thìa canh"
      },
      {
        "name": {
          "vi": "Nước dùng cá cơm hoặc nước lọc",
          "en": "Anchovy kelp stock or water"
        },
        "amount": "400ml"
      },
      {
        "name": {
          "vi": "Trứng gà luộc, hành boa-rô, mè trắng rang",
          "en": "Boiled egg, leek, toasted sesame"
        },
        "amount": "Vừa đủ"
      }
    ],
    "instructions": {
      "vi": [
        "Bánh gạo ngâm nước ấm 10 phút cho mềm dẻo. Chả cá cắt miếng tam giác vừa ăn.",
        "Hòa tan tương ớt Gochujang, ớt bột Gochugaru, nước tương, đường và tỏi băm vào 400ml nước dùng cá cơm trong chảo sâu lòng.",
        "Đun sôi nước sốt đỏ rực trên lửa vừa, cho bánh gạo và chả cá vào đảo đều.",
        "Đun liu riu trong 6-8 phút đến khi nước sốt keo lại sóng sánh bám đều quanh từng thỏi bánh gạo dai dẻo.",
        "Cho hành boa-rô cắt vát và trứng luộc bổ đôi vào chảo.",
        "Rải phô mai Mozzarella lên trên mặt bánh, đậy nắp 2 phút cho phô mai tan chảy béo ngậy kéo sợi, rắc mè rang thưởng thức nóng hổi."
      ],
      "en": [
        "Soak rice cakes in warm water for 10 minutes until pliable; slice fish cakes into triangles.",
        "In a deep skillet, mix Gochujang, chili flakes, soy sauce, sugar, and garlic into anchovy stock.",
        "Bring sauce to a lively simmer, then add rice cakes and fish cakes.",
        "Cook over medium-low heat for 6-8 minutes until sauce reduces to a glossy, thick crimson glaze.",
        "Add sliced scallions/leeks and halved boiled eggs.",
        "Scatter mozzarella cheese on top, cover for 2 minutes until bubbly and melted. Garnish with sesame seeds."
      ]
    }
  },
  {
    "id": "kr-kimbap-truyen-thong",
    "title": {
      "vi": "Cơm Cuộn Rong Biển Kimbap Truyền Thống Hàn Quốc (Gimbap)",
      "en": "Traditional Korean Seaweed Rice Rolls (Gimbap)"
    },
    "image": "/dishes/kr-kimbap-truyen-thong.jpg",
    "category": {
      "vi": "Món Cuốn & Trộn",
      "en": "Rolls & Salads"
    },
    "mealType": [
      "breakfast",
      "lunch",
      "dinner",
      "snack"
    ],
    "region": "korea",
    "diningType": [
      "home_cook",
      "eat_out"
    ],
    "isPopular": true,
    "popularityScore": 99,
    "dietaryTags": {
      "vi": [
        "Hàn Quốc",
        "Cơm cuộn dã ngoại",
        "Đủ dinh dưỡng",
        "Đẹp mắt"
      ],
      "en": [
        "Korean Classic",
        "Picnic Food",
        "Nutritious Roll",
        "Balanced Meal"
      ]
    },
    "time": "35m",
    "servings": 4,
    "calories": 380,
    "protein": 15,
    "fat": 10,
    "carbs": 58,
    "servingSize": {
      "vi": "1 cuộn cắt khoanh (~250g)",
      "en": "1 roll sliced (~250g)"
    },
    "nutritionSource": {
      "vi": "Korean Food Composition Database (RDA Korea)",
      "en": "Korean Food Composition Database (RDA Korea)"
    },
    "recipeSource": {
      "vi": "Korean Bapsang - Authentic Home Cooking",
      "en": "Korean Bapsang Traditional Kitchen"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Lá rong biển cuộn kimbap (Gim)",
          "en": "Roasted seaweed sheets (Gim)"
        },
        "amount": "4 lá"
      },
      {
        "name": {
          "vi": "Cơm dẻo trộn dầu mè và chút muối",
          "en": "Warm cooked rice seasoned with sesame oil & salt"
        },
        "amount": "3 chén (~400g)"
      },
      {
        "name": {
          "vi": "Trứng gà chiên thái sợi dài",
          "en": "Rolled egg strips"
        },
        "amount": "3 quả"
      },
      {
        "name": {
          "vi": "Cà rốt xào chín tới",
          "en": "Julienned carrot sautéed"
        },
        "amount": "1 củ"
      },
      {
        "name": {
          "vi": "Rau bina (cải bó xôi) chần bóp dầu mè",
          "en": "Blanched spinach seasoned with sesame oil"
        },
        "amount": "100g"
      },
      {
        "name": {
          "vi": "Củ cải vàng muối Hàn Quốc (Danmuji)",
          "en": "Yellow pickled radish strips"
        },
        "amount": "4 dải"
      },
      {
        "name": {
          "vi": "Xúc xích hoặc thanh cua / chả cá",
          "en": "Sausage, crab sticks or ham"
        },
        "amount": "150g"
      },
      {
        "name": {
          "vi": "Dầu mè thơm quết mặt bánh, mè rang",
          "en": "Sesame oil for brushing & seeds"
        },
        "amount": "Vừa đủ"
      }
    ],
    "instructions": {
      "vi": [
        "Cơm nóng trộn đều với 1 thìa canh dầu mè và chút xíu muối cho dậy mùi thơm mộc mạc.",
        "Cà rốt thái sợi xào sơ, rau chân vịt chần nước sôi vắt ráo bóp chút muối dầu mè, trứng chiên thái dải dài.",
        "Đặt lá rong biển lên mành tre cuộn kimbap, mặt nhám ngửa lên trên.",
        "Dàn đều một lớp cơm mỏng phủ 2/3 bề mặt lá rong biển.",
        "Xếp lần lượt trứng, củ cải vàng, cà rốt, rau chân vịt, thanh cua/xúc xích vào giữa.",
        "Dùng tay và mành tre cuộn tròn thật chặt và đều tay.",
        "Thoa lớp dầu mè bóng bẩy lên thân cuộn kimbap, rắc mè rang rồi dùng dao sắc thoa dầu cắt thành từng khoanh tròn dày 1.5cm đẹp mắt."
      ],
      "en": [
        "Toss freshly cooked warm rice with sesame oil and a pinch of salt.",
        "Prepare fillings: sauté carrot strips, blanch and season spinach with sesame oil, slice rolled omelet into ribbons.",
        "Place a seaweed sheet shiny side down onto a bamboo rolling mat.",
        "Spread a thin, even layer of rice over two-thirds of the seaweed.",
        "Line up egg strips, yellow pickled radish, carrots, spinach, and crab sticks across the center.",
        "Roll tightly and firmly using the bamboo mat.",
        "Brush roll with toasted sesame oil, sprinkle sesame seeds, and slice into 1.5cm rounds with an oiled sharp knife."
      ]
    }
  },
  {
    "id": "kr-bibimbap-com-tron",
    "title": {
      "vi": "Cơm Trộn Hàn Quốc Thố Đá Sốt Gochujang (Bibimbap)",
      "en": "Korean Stone Pot Mixed Rice Bowl (Dolsot Bibimbap)"
    },
    "image": "/dishes/kr-bibimbap-com-tron.jpg",
    "category": {
      "vi": "Món Mặn",
      "en": "Savory Dish"
    },
    "mealType": [
      "lunch",
      "dinner"
    ],
    "region": "korea",
    "diningType": [
      "home_cook",
      "eat_out"
    ],
    "isPopular": true,
    "popularityScore": 99,
    "dietaryTags": {
      "vi": [
        "Hàn Quốc",
        "Quốc hồn ẩm thực",
        "Đầy đủ 5 màu ngũ hành",
        "Nhiều rau củ"
      ],
      "en": [
        "Korean National Dish",
        "Bibimbap",
        "Nutrient Balanced",
        "Gochujang Sauce"
      ]
    },
    "time": "30m",
    "servings": 2,
    "calories": 520,
    "protein": 26,
    "fat": 16,
    "carbs": 68,
    "servingSize": {
      "vi": "1 thố đá lớn (~450g)",
      "en": "1 stone bowl (~450g)"
    },
    "nutritionSource": {
      "vi": "Korean Food Composition Database (RDA Korea)",
      "en": "Korean Food Composition Database (RDA Korea)"
    },
    "recipeSource": {
      "vi": "Ẩm thực Cung Đình Jeonju & Maangchi",
      "en": "Jeonju Bibimbap Heritage & Maangchi"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Cơm trắng nóng dẻo",
          "en": "Warm steamed rice"
        },
        "amount": "2 bát"
      },
      {
        "name": {
          "vi": "Thịt thăn bò băm xào tương tỏi",
          "en": "Ground beef sautéed with soy garlic"
        },
        "amount": "150g"
      },
      {
        "name": {
          "vi": "Trứng gà ốp la lòng đào hoặc lòng đỏ sống",
          "en": "Sunny-side egg with runny yolk"
        },
        "amount": "2 quả"
      },
      {
        "name": {
          "vi": "Nấm đông cô thái sợi xào",
          "en": "Shiitake mushroom strips"
        },
        "amount": "60g"
      },
      {
        "name": {
          "vi": "Cà rốt xào giòn",
          "en": "Julienned carrot"
        },
        "amount": "60g"
      },
      {
        "name": {
          "vi": "Giá đỗ Hàn Quốc chần bóp dầu mè",
          "en": "Soybean sprouts seasoned"
        },
        "amount": "80g"
      },
      {
        "name": {
          "vi": "Rau cải bó xôi chần",
          "en": "Seasoned blanched spinach"
        },
        "amount": "80g"
      },
      {
        "name": {
          "vi": "Kim chi cải thảo cắt nhỏ",
          "en": "Chopped Napa cabbage kimchi"
        },
        "amount": "60g"
      },
      {
        "name": {
          "vi": "Sốt Bibimbap đặc chế (Gochujang, dầu mè, mật ong, giấm, tỏi băm)",
          "en": "Bibimbap sauce (Gochujang, honey, sesame oil)"
        },
        "amount": "4 thìa canh"
      }
    ],
    "instructions": {
      "vi": [
        "Xào riêng từng loại rau củ (cà rốt, nấm hương, giá đỗ, rau bina) với chút muối và dầu mè để giữ màu sắc tươi tắn.",
        "Thịt bò băm xào chín thơm với xì dầu, tỏi băm và đường.",
        "Quết lớp dầu mè quanh thố đá hoặc âu sứ lớn, xới cơm trắng nóng vào giữa.",
        "Xếp các loại rau củ, kim chi và thịt bò thành từng góc tròn xung quanh mặt cơm tạo 5 màu sắc ngũ hành rực rỡ.",
        "Đặt quả trứng gà ốp la lòng đào vào chính giữa, rắc mè rang thơm phức.",
        "Rưới đẫm sốt tương ớt Gochujang chua cay mặn ngọt, dùng thìa trộn đều toàn bộ từ dưới lên trên và thưởng thức nóng hổi xèo xèo."
      ],
      "en": [
        "Sauté each vegetable topping separately (carrots, mushrooms, bean sprouts, spinach) with sesame oil and salt.",
        "Stir-fry ground beef with soy sauce, garlic, and a hint of sugar until savory.",
        "Brush an earthenware bowl with sesame oil, add warm rice in the center.",
        "Arrange the colorful vegetables, kimchi, and beef in radiant sections atop the rice.",
        "Place a sunny-side egg right in the center and sprinkle with toasted sesame seeds.",
        "Add the sweet, spicy Gochujang bibimbap sauce; stir vigorously together and enjoy piping hot."
      ]
    }
  },
  {
    "id": "kr-canh-kim-chi-thit-ba-chi",
    "title": {
      "vi": "Canh Kim Chi Hầm Thịt Ba Chỉ Đậu Phụ Non (Kimchi Jjigae)",
      "en": "Rich Kimchi Stew with Pork Belly & Tofu (Kimchi Jjigae)"
    },
    "image": "/dishes/kr-canh-kim-chi-thit-ba-chi.jpg",
    "category": {
      "vi": "Món Canh",
      "en": "Soup"
    },
    "mealType": [
      "lunch",
      "dinner"
    ],
    "region": "korea",
    "diningType": [
      "home_cook",
      "eat_out"
    ],
    "isPopular": true,
    "popularityScore": 98,
    "dietaryTags": {
      "vi": [
        "Hàn Quốc",
        "Ấm áp ngày đông",
        "Chua cay đậm đà",
        "Hao cơm"
      ],
      "en": [
        "Kimchi Stew",
        "Cozy",
        "Spicy & Sour",
        "Comfort Food"
      ]
    },
    "time": "30m",
    "servings": 4,
    "calories": 340,
    "protein": 22,
    "fat": 22,
    "carbs": 12,
    "servingSize": {
      "vi": "1 nồi canh nóng (~450g)",
      "en": "1 stew bowl (~450g)"
    },
    "nutritionSource": {
      "vi": "Korean Food Composition Database (RDA Korea)",
      "en": "Korean Food Composition Database (RDA Korea)"
    },
    "recipeSource": {
      "vi": "Baek Jong-won Korean Home Cuisine & Korean Bapsang",
      "en": "Baek Jong-won Authentic Korean Home Cooking"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Kim chi cải thảo chua vừa thái khúc",
          "en": "Aged sour Napa cabbage kimchi"
        },
        "amount": "300g"
      },
      {
        "name": {
          "vi": "Nước cốt kim chi",
          "en": "Kimchi brine"
        },
        "amount": "100ml"
      },
      {
        "name": {
          "vi": "Thịt ba chỉ heo thái mỏng",
          "en": "Pork belly sliced"
        },
        "amount": "250g"
      },
      {
        "name": {
          "vi": "Đậu hũ non cắt lát vuông",
          "en": "Silken tofu sliced"
        },
        "amount": "1 hộp (~250g)"
      },
      {
        "name": {
          "vi": "Hành boa-rô, hành tây thái múi cau",
          "en": "Leek & onion wedged"
        },
        "amount": "1 cây"
      },
      {
        "name": {
          "vi": "Tương ớt Gochujang, ớt bột Gochugaru, tỏi băm",
          "en": "Gochujang, Gochugaru, garlic"
        },
        "amount": "Vừa đủ"
      },
      {
        "name": {
          "vi": "Nước dùng cá cơm hoặc nước hầm xương",
          "en": "Anchovy broth or water"
        },
        "amount": "600ml"
      }
    ],
    "instructions": {
      "vi": [
        "Cho thịt ba chỉ vào nồi xào trên lửa vừa cho săn lại và tiết mỡ tự nhiên.",
        "Trút kim chi chua vào xào cùng thịt trong 4-5 phút cho ngấm đẫm vị béo của thịt.",
        "Thêm 1 thìa canh tương ớt Gochujang, ớt bột và tỏi băm đảo đều.",
        "Đổ nước dùng và nước cốt kim chi vào đun sôi bùng, hạ nhỏ lửa đậy nắp hầm trong 15 phút cho thịt mềm rục, nước canh chua cay đậm đà.",
        "Xếp đậu hũ non và hành boa-rô lên trên, đun sôi thêm 2-3 phút, dùng nóng sôi sùng sục cùng cơm trắng."
      ],
      "en": [
        "Sauté sliced pork belly in a pot over medium heat until browned and fat renders.",
        "Add kimchi and stir-fry for 4-5 minutes so it soaks in the pork juices.",
        "Add Gochujang, chili flakes, and minced garlic; stir thoroughly.",
        "Pour in broth and kimchi juice, bring to boil, then simmer covered for 15 minutes.",
        "Gently slide in silken tofu slices and leeks; cook for 2-3 minutes more and serve bubbling hot with white rice."
      ]
    }
  },
  {
    "id": "kr-canh-rong-bien-thit-bo",
    "title": {
      "vi": "Canh Rong Biển Thịt Bò Hàn Quốc (Miyeok-guk)",
      "en": "Traditional Korean Seaweed Beef Soup (Miyeok-guk)"
    },
    "image": "/dishes/kr-canh-rong-bien-thit-bo.jpg",
    "category": {
      "vi": "Món Canh",
      "en": "Soup"
    },
    "mealType": [
      "breakfast",
      "lunch",
      "dinner"
    ],
    "region": "korea",
    "diningType": [
      "home_cook"
    ],
    "isPopular": true,
    "popularityScore": 97,
    "dietaryTags": {
      "vi": [
        "Hàn Quốc",
        "Canh sinh nhật truyền thống",
        "Bổ máu",
        "Tốt cho phụ nữ sau sinh"
      ],
      "en": [
        "Birthday Soup",
        "Seaweed Soup",
        "Postpartum Healing",
        "Nourishing"
      ]
    },
    "time": "25m",
    "servings": 4,
    "calories": 180,
    "protein": 19,
    "fat": 8,
    "carbs": 8,
    "servingSize": {
      "vi": "1 tô canh (~400g)",
      "en": "1 bowl (~400g)"
    },
    "nutritionSource": {
      "vi": "Viện Nghiên cứu Thực phẩm Hàn Quốc (KFRI)",
      "en": "Korea Food Research Institute (KFRI)"
    },
    "recipeSource": {
      "vi": "Korean Bapsang - Traditional Birthday Soup Guide",
      "en": "Korean Bapsang Traditional Soups"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Rong biển khô Hàn Quốc (Miyeok)",
          "en": "Dried Korean sea mustard (Miyeok)"
        },
        "amount": "25g"
      },
      {
        "name": {
          "vi": "Thịt thăn bò hoặc bắp bò thái mỏng",
          "en": "Beef sirloin sliced thinly"
        },
        "amount": "180g"
      },
      {
        "name": {
          "vi": "Dầu mè thơm Hàn Quốc nguyên chất",
          "en": "Pure Korean sesame oil"
        },
        "amount": "2 thìa canh"
      },
      {
        "name": {
          "vi": "Tỏi băm nhuyễn",
          "en": "Minced garlic"
        },
        "amount": "1.5 thìa canh"
      },
      {
        "name": {
          "vi": "Xì dầu súp Hàn Quốc (Guk-ganjang)",
          "en": "Korean soup soy sauce"
        },
        "amount": "2 thìa canh"
      },
      {
        "name": {
          "vi": "Nước lọc",
          "en": "Water"
        },
        "amount": "1 lít"
      }
    ],
    "instructions": {
      "vi": [
        "Rong biển khô ngâm nước lạnh 15 phút cho nở to mềm, bóp rửa sạch rồi cắt khúc 4-5cm, vắt ráo nước.",
        "Cho dầu mè thơm vào nồi, xào thơm tỏi băm và thịt bò trên lửa vừa cho thịt săn chín tái.",
        "Trút rong biển vào xào cùng thịt bò trong 2-3 phút, nêm xì dầu súp Guk-ganjang đảo đều cho ngấm vị mộc mạc thơm lừng dầu mè.",
        "Đổ 1 lít nước lọc vào đun sôi, hớt bọt rồi hạ nhỏ lửa đun liu riu trong 15-20 phút cho nước canh chuyển sang màu trắng đục ngọt lịm từ thịt và rong biển.",
        "Nếm lại vừa khẩu vị thanh tao, múc ra tô húp nóng bồi bổ sức khỏe."
      ],
      "en": [
        "Soak dried seaweed in cold water for 15 mins; rinse, chop into bite-sized lengths, and drain.",
        "Heat sesame oil in a pot; sauté minced garlic and sliced beef over medium heat until browned.",
        "Add seaweed and stir-fry with beef for 2-3 minutes; season with soup soy sauce.",
        "Pour in 1 liter of water, bring to boil, skim foam, and simmer gently for 15-20 minutes until the broth turns milky and rich.",
        "Adjust seasoning and ladle into warm bowls for deep, restorative nourishment."
      ]
    }
  },
  {
    "id": "kr-thit-nuong-samgyeopsal",
    "title": {
      "vi": "Thịt Ba Chỉ Nướng Hàn Quốc Cuốn Lá Mè Sốt Ssamjang (Samgyeopsal)",
      "en": "Korean Grilled Pork Belly Lettuce Wraps (Samgyeopsal)"
    },
    "image": "/dishes/kr-thit-nuong-samgyeopsal.jpg",
    "category": {
      "vi": "Món Mặn",
      "en": "Savory Dish"
    },
    "mealType": [
      "lunch",
      "dinner"
    ],
    "region": "korea",
    "diningType": [
      "home_cook",
      "eat_out"
    ],
    "isPopular": true,
    "popularityScore": 99,
    "dietaryTags": {
      "vi": [
        "K-BBQ",
        "Món nướng quốc dân",
        "Sốt Ssamjang",
        "Tụ tập bạn bè"
      ],
      "en": [
        "K-BBQ",
        "Grilled Pork",
        "Ssamjang Dip",
        "Crowd Pleaser"
      ]
    },
    "time": "25m",
    "servings": 4,
    "calories": 460,
    "protein": 28,
    "fat": 36,
    "carbs": 6,
    "servingSize": {
      "vi": "1 phần nướng đầy đủ (~300g)",
      "en": "1 wrap platter (~300g)"
    },
    "nutritionSource": {
      "vi": "Bộ Nông nghiệp & Thực phẩm Hàn Quốc (MAFRA)",
      "en": "Ministry of Agriculture, Food and Rural Affairs (Korea)"
    },
    "recipeSource": {
      "vi": "Ẩm thực Nướng Hàn Quốc - K-BBQ Guide & Maangchi",
      "en": "Authentic Korean BBQ Guide"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Thịt ba chỉ heo tươi thái dải dày",
          "en": "Fresh pork belly strips (thick cut)"
        },
        "amount": "600g"
      },
      {
        "name": {
          "vi": "Sốt chấm thịt nướng Ssamjang",
          "en": "Ssamjang dipping sauce"
        },
        "amount": "1 bát"
      },
      {
        "name": {
          "vi": "Lá mè Hàn Quốc (Kkaennip) & xà lách tươi",
          "en": "Korean perilla leaves & fresh lettuce"
        },
        "amount": "1 rổ lớn"
      },
      {
        "name": {
          "vi": "Tỏi tép thái lát, ớt sừng xanh cắt khoanh",
          "en": "Sliced garlic & green Korean chili"
        },
        "amount": "Vừa đủ"
      },
      {
        "name": {
          "vi": "Kim chi cải thảo nướng kèm",
          "en": "Grilled kimchi side"
        },
        "amount": "1 đĩa"
      },
      {
        "name": {
          "vi": "Dầu mè pha muối tiêu để chấm thịt",
          "en": "Sesame oil with salt & pepper dip"
        },
        "amount": "1 đĩa nhỏ"
      }
    ],
    "instructions": {
      "vi": [
        "Làm nóng chảo nướng hoặc bếp nướng không khói trên bàn ăn.",
        "Xếp các dải thịt ba chỉ heo, tép tỏi và kim chi lên mặt chảo nướng xèo xèo.",
        "Nướng vàng giòn cạnh một mặt rồi lật mặt kia, dùng kéo cắt thịt thành từng miếng vuông vừa ăn.",
        "Khi thịt xém vàng giòn bì mà mọng nước, gắp ra cuốn cùng lá xà lách và lá mè.",
        "Thêm lát tỏi nướng, kim chi nướng và quệt một thìa sốt Ssamjang đậm đà, cuộn tròn thưởng thức trọn vẹn miếng nướng béo giòn thơm lừng."
      ],
      "en": [
        "Preheat a Korean tabletop grill pan or cast-iron skillet.",
        "Lay thick pork belly strips, whole garlic cloves, and kimchi on the sizzling grill.",
        "Grill until golden-crisp on both sides, then use kitchen shears to cut into bite-sized pieces.",
        "Pick a fresh lettuce leaf, top with a Korean perilla leaf, a piece of sizzling pork, grilled garlic, and kimchi.",
        "Dollop savory sweet Ssamjang paste on top, wrap into a single bite, and savor the explosive burst of flavors."
      ]
    }
  },
  {
    "id": "kr-ga-ran-sot-cay-ngot",
    "title": {
      "vi": "Gà Rán Giòn Sốt Cay Ngọt Hàn Quốc (Yangnyeom Chicken)",
      "en": "Korean Sweet & Spicy Crispy Fried Chicken (Yangnyeom)"
    },
    "image": "/dishes/kr-ga-ran-sot-cay-ngot.jpg",
    "category": {
      "vi": "Món Mặn",
      "en": "Savory Dish"
    },
    "mealType": [
      "lunch",
      "dinner",
      "snack"
    ],
    "region": "korea",
    "diningType": [
      "home_cook",
      "eat_out"
    ],
    "isPopular": true,
    "popularityScore": 98,
    "dietaryTags": {
      "vi": [
        "Hàn Quốc",
        "Gà rán giòn rụm",
        "Sốt cay ngọt",
        "Chimaek"
      ],
      "en": [
        "Korean Fried Chicken",
        "Ultra Crispy",
        "Sweet & Spicy",
        "Yangnyeom"
      ]
    },
    "time": "35m",
    "servings": 4,
    "calories": 480,
    "protein": 31,
    "fat": 26,
    "carbs": 32,
    "servingSize": {
      "vi": "1 đĩa gà sốt (~350g)",
      "en": "1 plate (~350g)"
    },
    "nutritionSource": {
      "vi": "Korean Food Composition Database (RDA Korea)",
      "en": "Korean Food Composition Database (RDA Korea)"
    },
    "recipeSource": {
      "vi": "Maangchi's Famous Korean Fried Chicken & Bếp Hàn",
      "en": "Maangchi Authentic Korean Fried Chicken"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Đùi gà cánh gà chặt khúc vừa ăn",
          "en": "Chicken wings & drumsticks"
        },
        "amount": "600g"
      },
      {
        "name": {
          "vi": "Bột bắp hoặc tinh bột khoai tây chiên giòn",
          "en": "Potato starch / cornstarch"
        },
        "amount": "80g"
      },
      {
        "name": {
          "vi": "Tương ớt Hàn Quốc Gochujang",
          "en": "Gochujang paste"
        },
        "amount": "2 thìa canh"
      },
      {
        "name": {
          "vi": "Tương cà (ketchup), mật ong hoặc siro bắp",
          "en": "Ketchup, honey / corn syrup"
        },
        "amount": "3 thìa canh"
      },
      {
        "name": {
          "vi": "Tỏi băm nhuyễn, dầu mè, mè rang",
          "en": "Minced garlic, sesame oil, toasted sesame"
        },
        "amount": "Vừa đủ"
      },
      {
        "name": {
          "vi": "Dầu ăn chiên gà 2 lần",
          "en": "Frying oil"
        },
        "amount": "300ml"
      }
    ],
    "instructions": {
      "vi": [
        "Gà ướp chút muối tiêu và gừng băm trong 15 phút, áo đều một lớp tinh bột khoai tây khô.",
        "Chiên gà lần 1 ngập dầu ở nhiệt độ 160°C trong 8 phút cho chín tới, vớt ra để ráo dầu 5 phút.",
        "Chiên gà lần 2 ở 180°C trong 2-3 phút cho lớp vỏ ngoài giòn tan siêu rụm, vàng ươm không ỉu.",
        "Pha sốt Yangnyeom: phi thơm tỏi băm, đun sôi tương ớt Gochujang, tương cà, mật ong và chút nước cho sệt lại bóng mượt.",
        "Trút gà chiên vào chảo đảo nhanh tay trong 30 giây cho lớp sốt đỏ au bám đều quanh từng miếng gà, rắc mè rang và thưởng thức giòn tan."
      ],
      "en": [
        "Season chicken with salt, pepper, and ginger; coat thoroughly in potato starch.",
        "First fry: deep fry at 160°C (320°F) for 8 minutes until cooked through; rest for 5 mins.",
        "Second fry: flash-fry at 180°C (350°F) for 2-3 minutes for extreme, long-lasting crunch.",
        "Make Yangnyeom glaze: simmer minced garlic, Gochujang, ketchup, honey, and a splash of water until syrupy.",
        "Toss crispy chicken briskly in the sauce for 30s until thoroughly glazed; scatter toasted sesame and serve."
      ]
    }
  },
  {
    "id": "kr-mi-tron-tuong-den",
    "title": {
      "vi": "Mì Trộn Tương Đen Hàn Quốc (Jajangmyeon)",
      "en": "Korean Black Bean Sauce Noodles (Jajangmyeon)"
    },
    "image": "/dishes/kr-mi-tron-tuong-den.jpg",
    "category": {
      "vi": "Món Nước",
      "en": "Noodles"
    },
    "mealType": [
      "lunch",
      "dinner"
    ],
    "region": "korea",
    "diningType": [
      "home_cook",
      "eat_out"
    ],
    "isPopular": true,
    "popularityScore": 97,
    "dietaryTags": {
      "vi": [
        "Hàn Quốc",
        "Sốt tương đen Chunjang",
        "Đậm đà",
        "Món ăn quốc dân"
      ],
      "en": [
        "Black Bean Noodles",
        "Jajangmyeon",
        "Savory Sweet",
        "Comfort Food"
      ]
    },
    "time": "25m",
    "servings": 2,
    "calories": 510,
    "protein": 22,
    "fat": 16,
    "carbs": 68,
    "servingSize": {
      "vi": "1 tô mì lớn (~450g)",
      "en": "1 large bowl (~450g)"
    },
    "nutritionSource": {
      "vi": "Korean Food Composition Database (RDA Korea)",
      "en": "Korean Food Composition Database (RDA Korea)"
    },
    "recipeSource": {
      "vi": "Incheon Chinatown Heritage & Baek Jong-won",
      "en": "Incheon Chinese-Korean Culinary Heritage"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Mì tươi sợi to Hàn Quốc",
          "en": "Fresh thick wheat noodles"
        },
        "amount": "300g"
      },
      {
        "name": {
          "vi": "Sốt tương đen Hàn Quốc (Chunjang)",
          "en": "Korean black bean paste (Chunjang)"
        },
        "amount": "3 thìa canh"
      },
      {
        "name": {
          "vi": "Thịt ba chỉ heo thái hạt lựu",
          "en": "Diced pork belly"
        },
        "amount": "150g"
      },
      {
        "name": {
          "vi": "Hành tây, bắp cải, bí ngòi thái hạt lựu",
          "en": "Diced onion, cabbage, zucchini"
        },
        "amount": "200g"
      },
      {
        "name": {
          "vi": "Bột năng hòa nước tạo độ sánh",
          "en": "Starch slurry"
        },
        "amount": "1 thìa canh"
      },
      {
        "name": {
          "vi": "Đường cát, dầu ăn, dưa chuột thái sợi",
          "en": "Sugar, oil, julienned cucumber"
        },
        "amount": "Vừa đủ"
      }
    ],
    "instructions": {
      "vi": [
        "Xào tương đen Chunjang với 2 thìa dầu ăn trên lửa nhỏ trong 2-3 phút để khử vị chát đắng, dậy mùi thơm béo ngậy.",
        "Xào thịt ba chỉ săn thơm, cho hành tây, bắp cải và bí ngòi vào xào chín tới.",
        "Trút tương đen đã xào vào chảo rau thịt, thêm chút nước và đường đun sôi lăn tăn.",
        "Rót từ từ nước bột năng vào khuấy đều cho sốt tương đen sẫm màu óng ánh sánh đặc.",
        "Luộc mì tươi dai mềm, vớt ra tô, rưới đẫm sốt tương đen nóng hổi lên trên, xếp dưa leo thái sợi thanh mát và trộn đều thưởng thức."
      ],
      "en": [
        "Fry black bean paste (Chunjang) in oil over low heat for 2-3 mins to remove bitterness and unlock rich umami.",
        "Brown diced pork belly in a wok; add diced onion, cabbage, and zucchini; stir-fry until tender.",
        "Mix fried black bean paste into vegetables, add water and sugar; bring to a simmer.",
        "Stir in starch slurry to transform into a glossy, velvety black gravy.",
        "Cook fresh chewy noodles, place in bowls, spoon generous black bean sauce over, top with fresh cucumber ribbons, and toss thoroughly."
      ]
    }
  },
  {
    "id": "kr-mien-tron-japchae",
    "title": {
      "vi": "Miến Trộn Hàn Quốc Thịt Bò Rau Củ Dầu Mè (Japchae)",
      "en": "Korean Stir-fried Glass Noodles with Beef & Veggies (Japchae)"
    },
    "image": "/dishes/kr-mien-tron-japchae.jpg",
    "category": {
      "vi": "Món Cuốn & Trộn",
      "en": "Rolls & Salads"
    },
    "mealType": [
      "lunch",
      "dinner"
    ],
    "region": "korea",
    "diningType": [
      "home_cook",
      "eat_out"
    ],
    "isPopular": true,
    "popularityScore": 98,
    "dietaryTags": {
      "vi": [
        "Hàn Quốc",
        "Miến khoai lang dai mềm",
        "Thơm lừng dầu mè",
        "Mâm tiệc"
      ],
      "en": [
        "Korean Glass Noodles",
        "Sweet Potato Noodles",
        "Sesame Oil",
        "Party Dish"
      ]
    },
    "time": "30m",
    "servings": 4,
    "calories": 380,
    "protein": 18,
    "fat": 12,
    "carbs": 52,
    "servingSize": {
      "vi": "1 đĩa miến trộn (~300g)",
      "en": "1 plate (~300g)"
    },
    "nutritionSource": {
      "vi": "Korean Food Composition Database (RDA Korea)",
      "en": "Korean Food Composition Database (RDA Korea)"
    },
    "recipeSource": {
      "vi": "Korean Bapsang - Festive Royal Japchae",
      "en": "Korean Bapsang Festive Recipes"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Miến khoai lang Hàn Quốc (Dangmyeon)",
          "en": "Korean sweet potato glass noodles"
        },
        "amount": "250g"
      },
      {
        "name": {
          "vi": "Thịt thăn bò thái sợi mỏng",
          "en": "Beef sirloin strips"
        },
        "amount": "150g"
      },
      {
        "name": {
          "vi": "Nấm hương nấm mộc nhĩ thái sợi",
          "en": "Shiitake & wood ear strips"
        },
        "amount": "60g"
      },
      {
        "name": {
          "vi": "Cà rốt, hành tây, ớt chuông đỏ thái sợi",
          "en": "Julienned carrot, onion, bell pepper"
        },
        "amount": "150g"
      },
      {
        "name": {
          "vi": "Rau cải bó xôi chần bóp dầu mè",
          "en": "Blanched seasoned spinach"
        },
        "amount": "100g"
      },
      {
        "name": {
          "vi": "Nước tương xì dầu, đường nâu, dầu mè, tỏi băm, mè rang",
          "en": "Soy sauce, brown sugar, sesame oil, garlic, sesame"
        },
        "amount": "Vừa đủ"
      }
    ],
    "instructions": {
      "vi": [
        "Luộc miến khoai lang trong nước sôi 6-7 phút cho sợi trong veo dai mềm, vớt ra xả nước lạnh rồi xóc với 1 thìa dầu mè và xì dầu.",
        "Xào thịt bò và nấm với tỏi băm, nước tương và đường cho chín tới.",
        "Xào riêng từng loại rau củ (cà rốt, hành tây, ớt chuông) giữ độ giòn ngọt và màu sắc tươi sáng.",
        "Cho miến, thịt bò, nấm và tất cả rau củ vào âu lớn.",
        "Rưới hỗn hợp sốt xì dầu, đường nâu, dầu mè thơm lừng, dùng tay đeo găng bóp trộn nhẹ nhàng cho thấm đều từng sợi miến.",
        "Bày ra đĩa rắc nhiều mè rang thơm nức, ăn nóng hoặc ăn nguội đều tuyệt ngon."
      ],
      "en": [
        "Boil sweet potato noodles for 6-7 mins until chewy-translucent; shock in cold water and toss with sesame oil.",
        "Stir-fry beef strips and mushrooms with soy sauce, garlic, and sugar until tender.",
        "Sauté carrots, onions, and bell peppers separately to preserve their crisp texture and vibrant colors.",
        "Combine noodles, beef, mushrooms, seasoned spinach, and stir-fried vegetables in a large bowl.",
        "Pour seasoned soy sauce, brown sugar, and generous sesame oil; toss gently by hand.",
        "Mound onto a platter, shower with toasted sesame seeds, and serve warm or at room temperature."
      ]
    }
  },
  {
    "id": "kr-banh-xeo-kim-chi",
    "title": {
      "vi": "Bánh Xèo Kim Chi Giòn Rụm Hàn Quốc (Kimchijeon)",
      "en": "Crispy Korean Kimchi Pancakes (Kimchijeon)"
    },
    "image": "/dishes/kr-banh-xeo-kim-chi.jpg",
    "category": {
      "vi": "Món Mặn",
      "en": "Savory Dish"
    },
    "mealType": [
      "lunch",
      "dinner",
      "snack"
    ],
    "region": "korea",
    "diningType": [
      "home_cook",
      "eat_out"
    ],
    "isPopular": true,
    "popularityScore": 95,
    "dietaryTags": {
      "vi": [
        "Hàn Quốc",
        "Bánh xèo giòn tan",
        "Chua cay đậm đà",
        "Món nhắm"
      ],
      "en": [
        "Kimchi Pancake",
        "Crispy Edges",
        "Appetizer",
        "Rainy Day Food"
      ]
    },
    "time": "20m",
    "servings": 3,
    "calories": 290,
    "protein": 10,
    "fat": 12,
    "carbs": 36,
    "servingSize": {
      "vi": "1 chiếc bánh lớn (~220g)",
      "en": "1 large pancake (~220g)"
    },
    "nutritionSource": {
      "vi": "Korean Food Composition Database (RDA Korea)",
      "en": "Korean Food Composition Database (RDA Korea)"
    },
    "recipeSource": {
      "vi": "Maangchi Easy Korean Pancakes & Bếp Nhà",
      "en": "Maangchi Classic Korean Pancakes"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Kim chi cải thảo chua thái nhỏ",
          "en": "Sour kimchi finely chopped"
        },
        "amount": "200g"
      },
      {
        "name": {
          "vi": "Nước cốt kim chi",
          "en": "Kimchi juice"
        },
        "amount": "50ml"
      },
      {
        "name": {
          "vi": "Bột mì đa dụng và bột bắp giòn",
          "en": "All-purpose flour & cornstarch"
        },
        "amount": "120g"
      },
      {
        "name": {
          "vi": "Hành lá, hành tây thái mỏng",
          "en": "Scallions & sliced onion"
        },
        "amount": "1 nhánh"
      },
      {
        "name": {
          "vi": "Thịt heo ba chỉ băm nhỏ hoặc mực xắt lát (tùy thích)",
          "en": "Minced pork or squid strips"
        },
        "amount": "80g"
      },
      {
        "name": {
          "vi": "Nước chấm: xì dầu pha giấm, mè rang và ớt",
          "en": "Soy vinegar dipping sauce"
        },
        "amount": "1 chén"
      }
    ],
    "instructions": {
      "vi": [
        "Trộn đều bột mì, bột bắp, nước cốt kim chi, kim chi băm nhỏ, hành lá và thịt băm trong âu thành hỗn hợp sệt vừa phải.",
        "Làm nóng chảo chống dính với 2 thìa canh dầu ăn trên lửa vừa lớn.",
        "Múc bột đổ vào chảo, dùng muôi dàn thật mỏng đều khắp mặt chảo.",
        "Chiên trong 3-4 phút đến khi viền bánh vàng ruộm giòn tan, lật mặt bánh và chiên tiếp mặt còn lại cho giòn rụm.",
        "Cắt bánh thành từng miếng vuông vừa ăn, chấm nước tương chua ngọt pha giấm tỏi ớt mè rang."
      ],
      "en": [
        "In a mixing bowl, combine chopped kimchi, kimchi juice, flour, cornstarch, scallions, and pork into a batter.",
        "Heat a generous amount of oil in a non-stick skillet over medium-high heat.",
        "Pour in batter and spread thinly and evenly across the pan.",
        "Fry for 3-4 minutes until the edges are sizzling, golden, and ultra-crisp; flip and crisp the second side.",
        "Cut into squares, serve with seasoned soy-vinegar dipping sauce."
      ]
    }
  },
  {
    "id": "kr-canh-tuong-doenjang",
    "title": {
      "vi": "Canh Tương Đậu Bí Ngòi Nấm Kim Châm Hàn Quốc (Doenjang Jjigae)",
      "en": "Korean Fermented Soybean Paste Stew (Doenjang Jjigae)"
    },
    "image": "/dishes/kr-canh-tuong-doenjang.jpg",
    "category": {
      "vi": "Món Canh",
      "en": "Soup"
    },
    "mealType": [
      "lunch",
      "dinner"
    ],
    "region": "korea",
    "diningType": [
      "home_cook"
    ],
    "isPopular": true,
    "popularityScore": 96,
    "dietaryTags": {
      "vi": [
        "Hàn Quốc",
        "Tương đậu lên men",
        "Mộc mạc ấm bụng",
        "Tốt cho tiêu hóa"
      ],
      "en": [
        "Doenjang Jjigae",
        "Fermented Stew",
        "Comfort Food",
        "Probiotic"
      ]
    },
    "time": "25m",
    "servings": 4,
    "calories": 190,
    "protein": 15,
    "fat": 7,
    "carbs": 16,
    "servingSize": {
      "vi": "1 tô đất nóng (~400g)",
      "en": "1 bowl (~400g)"
    },
    "nutritionSource": {
      "vi": "Korean Food Composition Database (RDA Korea)",
      "en": "Korean Food Composition Database (RDA Korea)"
    },
    "recipeSource": {
      "vi": "Bếp Cơm Gia Đình Hàn Quốc - Korean Bapsang",
      "en": "Korean Bapsang Home Cooking"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Tương đậu Hàn Quốc (Doenjang)",
          "en": "Korean fermented soybean paste (Doenjang)"
        },
        "amount": "3 thìa canh"
      },
      {
        "name": {
          "vi": "Đậu phụ trắng cắt khối vuông",
          "en": "Firm tofu cubed"
        },
        "amount": "1 bìa (~200g)"
      },
      {
        "name": {
          "vi": "Bí ngòi Hàn Quốc cắt lát",
          "en": "Korean zucchini sliced"
        },
        "amount": "1/2 quả (~100g)"
      },
      {
        "name": {
          "vi": "Khoai tây cắt khối nhỏ, nấm kim châm",
          "en": "Potato cubes & enoki mushrooms"
        },
        "amount": "100g"
      },
      {
        "name": {
          "vi": "Hành boa-rô, ớt xanh cắt lát, tỏi băm",
          "en": "Leek, green chili, minced garlic"
        },
        "amount": "Vừa đủ"
      },
      {
        "name": {
          "vi": "Nước dùng cá cơm khô và rong biển",
          "en": "Anchovy kelp stock"
        },
        "amount": "600ml"
      }
    ],
    "instructions": {
      "vi": [
        "Nấu sôi nước dùng cá cơm và rong biển trong thố đất, vớt bỏ xác cá cơm.",
        "Dùng rây tán tan tương đậu Doenjang vào nồi nước dùng đun sôi.",
        "Cho khoai tây và bí ngòi vào nấu trong 6-8 phút cho củ mềm ngọt.",
        "Thêm nấm kim châm, đậu phụ cắt khối, tỏi băm và ớt xanh vào nấu sôi bùng thêm 3 phút.",
        "Rắc hành boa-rô thái vát, nhấc thố đất còn sôi lục bục ra bàn ăn cùng cơm nóng và kim chi."
      ],
      "en": [
        "Simmer anchovy and kelp stock in an earthenware pot, remove solids.",
        "Dissolve fermented soybean paste (Doenjang) through a strainer into the bubbling stock.",
        "Add potato cubes and zucchini slices; simmer for 6-8 minutes until tender.",
        "Add tofu cubes, enoki mushrooms, minced garlic, and green chili; boil for 3 minutes.",
        "Finish with sliced leeks; serve bubbling hot at the table alongside rice and kimchi."
      ]
    }
  },
  {
    "id": "kr-trung-hap-gyeran-jjim",
    "title": {
      "vi": "Trứng Hấp Thố Hàn Quốc Bồng Bềnh Như Mây (Gyeran Jjim)",
      "en": "Korean Volcano Steamed Egg Soufflé (Gyeran Jjim)"
    },
    "image": "/dishes/kr-trung-hap-gyeran-jjim.jpg",
    "category": {
      "vi": "Món Mặn",
      "en": "Savory Dish"
    },
    "mealType": [
      "breakfast",
      "lunch",
      "dinner"
    ],
    "region": "korea",
    "diningType": [
      "home_cook",
      "eat_out"
    ],
    "isPopular": true,
    "popularityScore": 97,
    "dietaryTags": {
      "vi": [
        "Hàn Quốc",
        "Bồng bềnh xốp mịn",
        "Món ăn kèm K-BBQ",
        "Nhanh gọn"
      ],
      "en": [
        "Korean Steamed Egg",
        "Soufflé",
        "Fluffy Cloud",
        "K-BBQ Side"
      ]
    },
    "time": "10m",
    "servings": 2,
    "calories": 180,
    "protein": 15,
    "fat": 12,
    "carbs": 3,
    "servingSize": {
      "vi": "1 thố đất (~200g)",
      "en": "1 bowl (~200g)"
    },
    "nutritionSource": {
      "vi": "Korean Food Composition Database (RDA Korea)",
      "en": "Korean Food Composition Database (RDA Korea)"
    },
    "recipeSource": {
      "vi": "Baek Jong-won Classic Diner Recipes & Bếp Hàn",
      "en": "Baek Jong-won Korean Diner Classics"
    },
    "ingredients": [
      {
        "name": {
          "vi": "Trứng gà tươi",
          "en": "Fresh eggs"
        },
        "amount": "4 quả"
      },
      {
        "name": {
          "vi": "Nước dùng cá cơm hoặc nước lọc",
          "en": "Anchovy broth or water"
        },
        "amount": "120ml"
      },
      {
        "name": {
          "vi": "Dầu mè thơm Hàn Quốc",
          "en": "Sesame oil"
        },
        "amount": "1 thìa cà phê"
      },
      {
        "name": {
          "vi": "Hành boa-rô thái nhỏ, cà rốt băm nhuyễn",
          "en": "Scallions & minced carrot"
        },
        "amount": "2 thìa canh"
      },
      {
        "name": {
          "vi": "Nước mắm tôm tép muối Hàn Quốc (Saeujeot) hoặc muối, tiêu",
          "en": "Salted shrimp (Saeujeot) or salt, pepper"
        },
        "amount": "1 thìa cà phê"
      }
    ],
    "instructions": {
      "vi": [
        "Đập 4 quả trứng vào thố đất nhỏ, thêm nước dùng cá cơm, mắm tép Saeujeot và dầu mè đánh tan đều.",
        "Đặt thố đất trực tiếp lên bếp đun trên lửa vừa nhỏ, liên tục dùng thìa khuấy đều từ đáy lên thành thố trong 2-3 phút cho trứng bắt đầu đông đặc sền sệt khoảng 70-80%.",
        "Rắc hành hoa và cà rốt băm lên mặt.",
        "Lấy một chiếc thố hoặc bát tô úp ngược lên miệng thố đất tạo vòm kín giữ nhiệt.",
        "Hạ lửa nhỏ nhất nấu thêm 2 phút, trứng sẽ nở phồng bồng bềnh hình vòm nón như đám mây xốp mịn, mở nắp dùng ngay khi còn bốc khói ngào ngạt."
      ],
      "en": [
        "Whisk eggs, anchovy broth, salted shrimp (or salt), and sesame oil together in a small earthenware pot.",
        "Place pot directly over medium-low heat; stir continuously from the bottom for 2-3 mins until curdled and 80% set.",
        "Scatter minced scallions and carrots on top.",
        "Cover with an inverted dome bowl of the same size to trap steam.",
        "Lower heat to minimum for 2 minutes; the egg will expand into a spectacular puffy soufflé volcano. Serve immediately while steaming!"
      ]
    }
  }
];
