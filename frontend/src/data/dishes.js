export const DISHES_DATA = [
  {
    id: 'pho-bo-tai-lan',
    name: 'Phở Bò Tái Lăn Hà Nội',
    englishName: 'Hanoi Stir-fried Rare Beef Pho',
    mealCategory: 'breakfast',
    tags: ['soup', 'specialty'],
    image: 'https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?auto=format&fit=crop&w=1000&q=80',
    cookTime: 35,
    difficulty: 'Vừa',
    calories: 520,
    rating: 4.9,
    reviewsCount: 246,
    author: 'Chef Tuấn Hưng',
    description: 'Thịt bò tươi xào lăn nhanh trên lửa lớn cùng tỏi thơm nức, chan nước dùng ninh xương đậm đà thơm mùi quế hồi và ngập tràn hành hoa tươi rói.',
    isRecipeOfDay: true,
    isPopular: true,
    isHealthy: false,
    ingredients: [
      { name: 'Bánh phở tươi', amount: '500g' },
      { name: 'Thịt bò phi lê hoặc thăn mềm', amount: '300g' },
      { name: 'Xương ống bò (nấu nước dùng)', amount: '1kg' },
      { name: 'Hành lá, hành tây, ngò gai', amount: '100g' },
      { name: 'Gừng, tỏi tươi đập dập', amount: '50g' },
      { name: 'Hoa hồi, thảo quả, quế thanh', amount: '1 gói nhỏ' },
      { name: 'Gia vị: Nước mắm cốt, hạt nêm, tiêu sọ, giấm tỏi ớt', amount: 'Vừa đủ' }
    ],
    ingredientKeys: ['thit_bo', 'hanh_la', 'toi_ot', 'bun'],
    steps: [
      'Ninh xương bò cùng gừng nướng, hành nướng, hồi quế trong ít nhất 2 giờ để lấy nước dùng trong và ngọt thanh.',
      'Thái thịt bò mỏng tang ngang thớ, ướp với chút tỏi băm, tiêu và hạt nêm trong 15 phút.',
      'Bật bếp lửa cực lớn, phi tỏi thơm rồi trút thịt bò vào đảo thật nhanh tay (chừng 40 giây) cho bò chín tái lăn.',
      'Trần bánh phở qua nước sôi, xếp vào bát tô, rải thịt bò tái lăn lên trên, thêm ngập hành lá chẻ và ngò gai.',
      'Chan nước dùng sôi sùng sục ngập bánh phở, thưởng thức ngay cùng chanh tươi, giấm tỏi và quẩy giòn.'
    ],
    nearbyRestaurants: [
      {
        name: 'Phở Thìn Lò Đúc',
        address: '13 Lò Đúc, Q. Hai Bà Trưng, Hà Nội',
        distance: '0.8 km',
        priceRange: '70.000đ - 90.000đ',
        rating: 4.8,
        openHours: '06:00 - 20:30',
        mapQuery: 'Pho Thin Lo Duc Hanoi'
      },
      {
        name: 'Phở Bò Gia Truyền Bát Đàn',
        address: '49 Bát Đàn, Hoàn Kiếm, Hà Nội',
        distance: '1.4 km',
        priceRange: '60.000đ - 85.000đ',
        rating: 4.7,
        openHours: '06:00 - 10:30 & 18:00 - 20:30',
        mapQuery: 'Pho Bat Dan Hanoi'
      },
      {
        name: 'Phở Lý Quốc Sư',
        address: '10 Lý Quốc Sư, Hàng Trống, Hà Nội',
        distance: '1.9 km',
        priceRange: '65.000đ - 95.000đ',
        rating: 4.6,
        openHours: '06:30 - 22:00',
        mapQuery: 'Pho Ly Quoc Su Hanoi'
      }
    ]
  },
  {
    id: 'com-tam-suon-bi-cha',
    name: 'Cơm Tấm Sườn Bì Chả Trứng',
    englishName: 'Saigon Broken Rice with Grilled Pork Chop',
    mealCategory: 'lunch',
    tags: ['dry', 'specialty'],
    image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=1000&q=80',
    cookTime: 40,
    difficulty: 'Vừa',
    calories: 680,
    rating: 4.9,
    reviewsCount: 312,
    author: 'Cô Ba Sài Gòn',
    description: 'Hạt cơm tấm thơm dẻo ăn cùng sườn cốt lết nướng than hoa vàng óng ngấm gia vị sả mật ong, chả trứng hấp béo ngậy, bì dai giòn và nước mắm kẹo pha chuẩn vị miền Nam.',
    isRecipeOfDay: false,
    isPopular: true,
    isHealthy: false,
    ingredients: [
      { name: 'Gạo tấm thơm', amount: '300g' },
      { name: 'Sườn cốt lết heo tươi', amount: '4 miếng (500g)' },
      { name: 'Thịt heo xay + nấm mèo (làm chả trứng)', amount: '150g' },
      { name: 'Trứng gà (1 quả trộn, 1 lòng đỏ phết mặt)', amount: '3 quả' },
      { name: 'Bì heo luộc thái sợi + thính gạo', amount: '100g' },
      { name: 'Sả băm, hành tím, tỏi, mật ong, dầu hào, sữa đặc', amount: 'Vừa đủ' },
      { name: 'Mỡ hành, đồ chua (củ cải, cà rốt), dưa leo, cà chua', amount: 'Ăn kèm' }
    ],
    ingredientKeys: ['thit_heo', 'trung', 'gao', 'ca_chua', 'dua_leo', 'hanh_la', 'toi_ot'],
    steps: [
      'Ướp sườn với sả băm, tỏi băm, mật ong, nước mắm, chút sữa đặc và dầu ăn trong ít nhất 1-2 tiếng (hoặc qua đêm).',
      'Làm chả trứng: Trộn thịt xay, nấm mèo băm, miến, trứng gà, hạt nêm rồi hấp 20 phút. Quết lòng đỏ lên mặt và hấp tiếp 5 phút không đậy nắp.',
      'Nấu cơm tấm bằng nồi cơm điện với lượng nước vừa phải để hạt cơm tơi xốp.',
      'Nướng sườn trên than hồng hoặc nồi chiên không dầu ở 180°C trong 15 phút, trở mặt quết sốt ướp nướng thêm 7 phút.',
      'Làm mỡ hành xèo thơm. Pha nước mắm chua ngọt sệt kẹo.',
      'Xới cơm tấm ra đĩa, đặt sườn nướng, chả trứng, bì, trứng ốp la, dưa leo cà chua, rưới mỡ hành và chén nước mắm ớt.'
    ],
    nearbyRestaurants: [
      {
        name: 'Cơm Tấm Ba Ghiền',
        address: '84 Đặng Văn Ngữ, P.10, Phú Nhuận, TP.HCM',
        distance: '1.1 km',
        priceRange: '65.000đ - 110.000đ',
        rating: 4.8,
        openHours: '07:00 - 21:00',
        mapQuery: 'Com Tam Ba Ghien Ho Chi Minh'
      },
      {
        name: 'Cơm Tấm Phúc Lộc Thọ',
        address: 'Nhiều chi nhánh trên toàn quốc',
        distance: '0.6 km',
        priceRange: '45.000đ - 70.000đ',
        rating: 4.6,
        openHours: '06:00 - 22:00',
        mapQuery: 'Com Tam Phuc Loc Tho'
      }
    ]
  },
  {
    id: 'banh-mi-chao-dac-biet',
    name: 'Bánh Mì Chảo Thập Cẩm Pa Tê Trứng',
    englishName: 'Vietnamese Pan-Fried Combo Banh Mi',
    mealCategory: 'breakfast',
    tags: ['quick', 'budget'],
    image: 'https://images.unsplash.com/photo-1626804475297-41608ea09aeb?auto=format&fit=crop&w=1000&q=80',
    cookTime: 15,
    difficulty: 'Dễ',
    calories: 460,
    rating: 4.8,
    reviewsCount: 189,
    author: 'Bếp Cụ Rùa',
    description: 'Chiếc chảo gang nóng xèo xèo với trứng ốp la lòng đào, pate béo ngậy rán cháy cạnh, xúc xích, bò lát mềm mọng cùng sốt cà chua tiêu đen đậm đà chấm cùng bánh mì giòn rụm.',
    isRecipeOfDay: false,
    isPopular: true,
    isHealthy: false,
    ingredients: [
      { name: 'Bánh mì nóng giòn', amount: '2 ổ' },
      { name: 'Trứng gà', amount: '2 quả' },
      { name: 'Pate gan heo béo', amount: '60g' },
      { name: 'Xúc xích hoặc lạp xưởng', amount: '1 cây' },
      { name: 'Thịt bò thái mỏng (nếu thích)', amount: '60g' },
      { name: 'Cà chua chín mọng làm sốt', amount: '2 quả' },
      { name: 'Bơ thực vật, tỏi băm, tiêu đen, dưa leo', amount: 'Vừa đủ' }
    ],
    ingredientKeys: ['banh_mi', 'trung', 'thit_heo', 'thit_bo', 'ca_chua', 'dua_leo', 'toi_ot'],
    steps: [
      'Xào cà chua băm nhuyễn với chút bơ, tỏi băm, tương cà, dầu hào và tiêu để có nước sốt sánh mịn đỏ tươi.',
      'Bắc chảo gang lên bếp, cho chút bơ tan chảy, đập trứng gà làm ốp la giữ nguyên lòng đào.',
      'Cho pate, xúc xích khía vát và thịt bò vào chiên xém các cạnh quanh chảo.',
      'Rưới 2-3 thìa sốt cà chua sôi sùng sục vào giữa chảo, rắc tiêu đen và cọng ngò tươi.',
      'Dọn ra chảo khi còn sôi réo rắt, xé bánh mì chấm ngập sốt và lòng đỏ trứng béo bùi.'
    ],
    nearbyRestaurants: [
      {
        name: 'Bánh Mì Chảo Cột Điện Quán',
        address: '71 Đặng Văn Ngữ, Trung Tự, Đống Đa, Hà Nội',
        distance: '0.9 km',
        priceRange: '35.000đ - 55.000đ',
        rating: 4.6,
        openHours: '08:00 - 21:30',
        mapQuery: 'Banh Mi Chao Cot Dien Quan Hanoi'
      },
      {
        name: 'Bánh Mì Chảo Chảo Cười',
        address: '103 Nam Đồng, Đống Đa, Hà Nội',
        distance: '1.2 km',
        priceRange: '40.000đ - 60.000đ',
        rating: 4.5,
        openHours: '07:00 - 22:00',
        mapQuery: 'Banh Mi Chao Cuoi Hanoi'
      }
    ]
  },
  {
    id: 'bun-bo-hue',
    name: 'Bún Bò Huế Cố Đô Chuẩn Vị',
    englishName: 'Hue Royal Spicy Beef Noodle Soup',
    mealCategory: 'lunch',
    tags: ['soup', 'specialty'],
    image: 'https://images.unsplash.com/photo-1576577445504-6af96477db52?auto=format&fit=crop&w=1000&q=80',
    cookTime: 50,
    difficulty: 'Khó',
    calories: 590,
    rating: 4.9,
    reviewsCount: 380,
    author: 'Mệ Kéo Cố Đô',
    description: 'Nước dùng nồng nàn hương sả cây quyện cùng mắm ruốc Huế trứ danh, ớt sa tế cay cay bốc khói, hòa cùng sợi bún to, thịt bắp bò giòn sần sật, chả cua và tiết luộc mềm mướt.',
    isRecipeOfDay: false,
    isPopular: true,
    isHealthy: false,
    ingredients: [
      { name: 'Bún sợi to Huế', amount: '500g' },
      { name: 'Bắp bò hoa, nạm bò', amount: '400g' },
      { name: 'Xương ống hoặc giò heo', amount: '500g' },
      { name: 'Mắm ruốc Huế chuẩn', amount: '2 thìa canh' },
      { name: 'Sả cây đập dập', amount: '6 cây' },
      { name: 'Hạt điều màu làm dầu màu, ớt sa tế', amount: 'Vừa đủ' },
      { name: 'Rau sống: Hoa chuối bào, giá đỗ, húng quế, chanh', amount: 'Ăn kèm' }
    ],
    ingredientKeys: ['thit_bo', 'thit_heo', 'bun', 'hanh_la', 'toi_ot'],
    steps: [
      'Khuấy mắm ruốc với nước lạnh, để lắng lấy phần nước trong ngọt thơm mùi ruốc bỏ cặn.',
      'Hầm xương heo, bắp bò cùng sả đập dập và nước ruốc đã lọc trong khoảng 1 giờ cho ngọt nước.',
      'Vớt bắp bò ra ngâm nước lạnh rồi thái lát mỏng vừa ăn.',
      'Phi thơm ớt màu điều, sả băm cho vào nồi nước dùng để tạo màu đỏ cam lóng lánh đặc trưng.',
      'Xếp bún vào tô, bày bắp bò, chả cua, giò heo, rắc hành ngò thái nhỏ rồi chan nước dùng sôi sùng sục cay nồng.'
    ],
    nearbyRestaurants: [
      {
        name: 'Bún Bò Huế Mụ Rơi',
        address: 'Nguyễn Chí Thanh, TP. Huế / Chi nhánh Hà Nội & TP.HCM',
        distance: '1.5 km',
        priceRange: '50.000đ - 70.000đ',
        rating: 4.8,
        openHours: '06:30 - 21:00',
        mapQuery: 'Bun Bo Hue Quan'
      },
      {
        name: 'Bún Bò Gốc Huế O Xuân',
        address: 'Quang Trung, Hoàn Kiếm, Hà Nội',
        distance: '2.0 km',
        priceRange: '55.000đ - 75.000đ',
        rating: 4.7,
        openHours: '07:00 - 21:30',
        mapQuery: 'Bun Bo O Xuan Hanoi'
      }
    ]
  },
  {
    id: 'trung-chien-ca-chua',
    name: 'Trứng Xào Cà Chua Hành Hoa',
    englishName: 'Scrambled Eggs with Fresh Tomatoes',
    mealCategory: 'dinner',
    tags: ['quick', 'budget', 'healthy'],
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=1000&q=80',
    cookTime: 10,
    difficulty: 'Dễ',
    calories: 240,
    rating: 4.7,
    reviewsCount: 154,
    author: 'Cơm Nhà Mẹ Nấu',
    description: 'Món ăn quốc dân nhanh gọn cứu đói khi tủ lạnh chỉ còn trứng và cà chua. Miếng trứng mềm xốp, sốt cà chua chua ngọt dịu nhẹ quyện cùng hành hoa thơm lừng đưa cơm vô cùng.',
    isRecipeOfDay: false,
    isPopular: true,
    isHealthy: true,
    ingredients: [
      { name: 'Trứng gà tươi', amount: '3 - 4 quả' },
      { name: 'Cà chua chín đỏ', amount: '2 quả' },
      { name: 'Hành lá, hành khô băm', amount: '3 nhánh' },
      { name: 'Nước mắm ngon, tiêu sọ, hạt nêm', amount: 'Vừa đủ' }
    ],
    ingredientKeys: ['trung', 'ca_chua', 'hanh_la', 'toi_ot'],
    steps: [
      'Đập trứng ra bát, nêm 1 thìa nước mắm ngon, tiêu và chút hành hoa thái nhỏ rồi đánh tan đều.',
      'Cà chua thái múi cau hoặc băm hạt lựu.',
      'Phi thơm hành khô, cho trứng vào chảo đảo nhanh tay ở lửa vừa cho trứng chín tới mềm mịn rồi trút ra đĩa riêng.',
      'Xào cà chua trong chảo với chút gia vị cho nhừ ra nước sốt sền sệt đỏ đẹp.',
      'Đổ đĩa trứng vào đảo nhẹ tay cùng sốt cà chua trong 1 phút, rắc hành hoa tươi rồi tắt bếp.'
    ],
    nearbyRestaurants: [
      {
        name: 'Quán Cơm Bình Dân & Gia Đình',
        address: 'Các phố ẩm thực gần bạn',
        distance: '0.3 km',
        priceRange: '25.000đ - 35.000đ',
        rating: 4.5,
        openHours: '10:30 - 14:00 & 17:30 - 20:30',
        mapQuery: 'Com Binh Dan gan day'
      }
    ]
  },
  {
    id: 'goi-cuon-tom-thit',
    name: 'Gỏi Cuốn Tôm Thịt Chấm Tương Bơ Đậu Phộng',
    englishName: 'Fresh Vietnamese Spring Rolls with Peanut Dip',
    mealCategory: 'snack',
    tags: ['healthy', 'quick', 'specialty'],
    image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=1000&q=80',
    cookTime: 20,
    difficulty: 'Dễ',
    calories: 280,
    rating: 4.9,
    reviewsCount: 220,
    author: 'Chef Linh Đan',
    description: 'Tôm luộc đỏ au, thịt ba chỉ ngọt mềm cuộn cùng bún tươi, hẹ lá và rau thơm xanh mát trong lớp bánh tráng dẻo dai. Chấm cùng sốt tương đen bơ đậu phộng béo bùi say đắm.',
    isRecipeOfDay: false,
    isPopular: true,
    isHealthy: true,
    ingredients: [
      { name: 'Bánh tráng dẻo cuộn gỏi', amount: '1 xấp' },
      { name: 'Tôm tươi luộc bóc vỏ chẻ đôi', amount: '200g' },
      { name: 'Thịt ba chỉ heo luộc thái mỏng', amount: '200g' },
      { name: 'Bún tươi sợi nhỏ', amount: '200g' },
      { name: 'Hẹ lá, xà lách, rau thơm các loại', amount: '150g' },
      { name: 'Tương hột đen, bơ đậu phộng, tỏi phi', amount: 'Làm nước chấm' }
    ],
    ingredientKeys: ['tom', 'thit_heo', 'bun', 'hanh_la', 'toi_ot'],
    steps: [
      'Luộc tôm với chút muối, bóc vỏ bỏ chỉ đen rồi chẻ đôi theo chiều dọc.',
      'Luộc thịt ba chỉ chín tới, ngâm nước đá cho giòn rồi thái lát mỏng.',
      'Thấm ướt nhẹ bánh tráng, xếp lần lượt xà lách, rau thơm, bún, thịt luộc.',
      'Gấp hai mép bánh tráng lại, đặt 2-3 con tôm mặt đỏ úp xuống và cọng hẹ thò ra ngoài rồi cuộn chặt tay.',
      'Nấu tương đen với bơ đậu phộng, chút đường và nước cho sánh mịn, rắc đậu phộng rang giã dập và ớt băm.'
    ],
    nearbyRestaurants: [
      {
        name: 'Gỏi Cuốn Tôm Nhảy & Nem Nướng',
        address: '356 Lê Văn Sỹ, P.14, Q.3, TP.HCM',
        distance: '1.2 km',
        priceRange: '10.000đ - 12.000đ / cuốn',
        rating: 4.7,
        openHours: '10:00 - 21:00',
        mapQuery: 'Goi Cuon Sai Gon'
      }
    ]
  },
  {
    id: 'bun-cha-ha-noi',
    name: 'Bún Chả Nướng Than Hoa Hà Nội',
    englishName: 'Hanoi Char-grilled Pork with Rice Noodles',
    mealCategory: 'lunch',
    tags: ['dry', 'specialty'],
    image: 'https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=1000&q=80',
    cookTime: 45,
    difficulty: 'Vừa',
    calories: 610,
    rating: 4.9,
    reviewsCount: 420,
    author: 'Nghệ Nhân Hà Nội',
    description: 'Chả băm viên nặn tròn béo ngậy và chả miếng ba chỉ ướp gia vị nước hàng thốt nốt, nướng xém cạnh trên than hoa đỏ rực. Thả vào bát nước mắm ấm chua ngọt điểm xuyết đu đủ xanh giòn tan.',
    isRecipeOfDay: false,
    isPopular: true,
    isHealthy: false,
    ingredients: [
      { name: 'Bún tươi lá hoặc sợi nhỏ', amount: '500g' },
      { name: 'Thịt ba chỉ heo thái lát mỏng', amount: '300g' },
      { name: 'Thịt nạc vai heo băm nhỏ', amount: '300g' },
      { name: 'Nước hàng thắng màu cánh gián', amount: '2 thìa canh' },
      { name: 'Hành khô, sả, tỏi băm, hạt tiêu, nước mắm', amount: 'Vừa đủ' },
      { name: 'Đu đủ xanh, cà rốt tỉa hoa làm dưa góp', amount: '1 bát nhỏ' },
      { name: 'Rau kinh giới, tía tô, xà lách, mùi ta', amount: 'Ăn kèm' }
    ],
    ingredientKeys: ['thit_heo', 'bun', 'ca_rot', 'toi_ot', 'hanh_la'],
    steps: [
      'Ướp riêng thịt ba chỉ và thịt băm với nước mắm, hành tỏi băm, tiêu, nước hàng thốt nốt ít nhất 1 giờ.',
      'Viên thịt băm thành từng viên tròn dẹt vừa ăn. Xếp thịt lên vỉ nướng trên than hoa đỏ hồng.',
      'Quạt lửa đều tay, lật trở liên tục đến khi chả chín vàng ươm, xém cạnh thơm nức mũi.',
      'Pha nước mắm: Nước ấm + đường + chanh + nước mắm theo tỷ lệ 5:1:1:1, thêm tỏi ớt băm và dưa góp đu đủ.',
      'Bày bún ra đĩa, rau sống ra rổ, thả chả nướng nóng hổi ngập vào bát nước chấm chua ngọt.'
    ],
    nearbyRestaurants: [
      {
        name: 'Bún Chả Hương Liên (Bún Chả Obama)',
        address: '24 Lê Văn Hưu, Phan Chu Trinh, Hai Bà Trưng, Hà Nội',
        distance: '1.6 km',
        priceRange: '50.000đ - 70.000đ',
        rating: 4.6,
        openHours: '08:00 - 20:30',
        mapQuery: 'Bun Cha Huong Lien Hanoi'
      },
      {
        name: 'Bún Chả Đắc Kim',
        address: 'Số 1 Hàng Mành, Hoàn Kiếm, Hà Nội',
        distance: '2.1 km',
        priceRange: '60.000đ - 90.000đ',
        rating: 4.5,
        openHours: '08:30 - 21:00',
        mapQuery: 'Bun Cha Dac Kim Hang Manh'
      }
    ]
  },
  {
    id: 'canh-chua-ca-loc',
    name: 'Canh Chua Cá Lóc Nam Bộ',
    englishName: 'Southern Vietnamese Sour Fish Soup',
    mealCategory: 'dinner',
    tags: ['soup', 'healthy', 'specialty'],
    image: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1000&q=80',
    cookTime: 30,
    difficulty: 'Vừa',
    calories: 340,
    rating: 4.8,
    reviewsCount: 198,
    author: 'Má Bảy Miền Tây',
    description: 'Vị chua thanh mát từ me dốt chín hòa cùng vị ngọt thơm của cá lóc đồng, dứa chín, đậu bắp giòn rụm, giá đỗ và bạc hà (dọc mùng), rắc thêm ngò gai ngò om thơm nức mũi.',
    isRecipeOfDay: false,
    isPopular: false,
    isHealthy: true,
    ingredients: [
      { name: 'Cá lóc đồng làm sạch cắt khúc', amount: '500g' },
      { name: 'Dứa (thơm) gọt vỏ cắt lát', amount: '1/4 quả' },
      { name: 'Cà chua cắt múi cau', amount: '2 quả' },
      { name: 'Đậu bắp, bạc hà (dọc mùng)', amount: '100g' },
      { name: 'Giá đỗ, me chín lấy nước cốt', amount: '100g' },
      { name: 'Ngò gai, rau om (ngổ), ớt sừng, tỏi phi', amount: 'Vừa đủ' }
    ],
    ingredientKeys: ['ca_chua', 'toi_ot', 'hanh_la'],
    steps: [
      'Nấu sôi nước me lọc lấy nước chua thanh.',
      'Phi tỏi thơm trút cá lóc vào xào săn nhẹ các mặt rồi trút nước sôi vào đun.',
      'Khi cá vừa chín tới, hớt bọt rồi lần lượt cho dứa, cà chua, đậu bắp, bạc hà vào nấu sôi 3 phút.',
      'Nêm nếm nước mắm ngon, đường phèn sao cho có vị chua ngọt cân bằng đặc trưng Nam Bộ.',
      'Tắt bếp, cho giá đỗ, rắc rau om ngò gai thái nhỏ, ớt lát và tỏi phi thơm lên trên mặt.'
    ],
    nearbyRestaurants: [
      {
        name: 'Quán Cơm Niêu Sài Gòn',
        address: '59 Hồ Xuân Hương, P.6, Q.3, TP.HCM',
        distance: '1.8 km',
        priceRange: '80.000đ - 150.000đ',
        rating: 4.7,
        openHours: '10:00 - 22:00',
        mapQuery: 'Com Nieu Sai Gon'
      }
    ]
  },
  {
    id: 'banh-xeo-mien-tay',
    name: 'Bánh Xèo Giòn Rụm Miền Tây Tôm Thịt',
    englishName: 'Crispy Southern Vietnamese Crepe',
    mealCategory: 'snack',
    tags: ['specialty'],
    image: 'https://images.unsplash.com/photo-1555126634-323283e090fa?auto=format&fit=crop&w=1000&q=80',
    cookTime: 35,
    difficulty: 'Vừa',
    calories: 520,
    rating: 4.8,
    reviewsCount: 275,
    author: 'Bếp Bánh Xèo Bà Dưỡng',
    description: 'Vỏ bánh vàng ươm mỏng giòn rụm thơm nức mùi nước cốt dừa và bột nghệ, bên trong ôm trọn tôm tươi, thịt ba rọi ngọt béo, giá đỗ giòn ngọt, cuốn cùng cả rổ rau rừng tươi xanh.',
    isRecipeOfDay: false,
    isPopular: true,
    isHealthy: false,
    ingredients: [
      { name: 'Bột bánh xèo pha sẵn + bột nghệ', amount: '400g' },
      { name: 'Nước cốt dừa béo ngậy', amount: '200ml' },
      { name: 'Tôm đất nhỏ hoặc tôm sú', amount: '250g' },
      { name: 'Thịt ba rọi heo thái mỏng', amount: '250g' },
      { name: 'Giá đỗ, hành tây, hành lá cắt nhỏ', amount: '200g' },
      { name: 'Rau ăn kèm: Cải bẹ xanh, xà lách, rau thơm', amount: '1 rổ lớn' }
    ],
    ingredientKeys: ['tom', 'thit_heo', 'hanh_la', 'toi_ot'],
    steps: [
      'Pha bột bánh xèo với nước cốt dừa, nước lọc, hành lá cắt nhỏ và chút bia cho vỏ giòn lâu.',
      'Xào sơ tôm, thịt ba chỉ nêm chút gia vị cho đậm đà rồi múc ra đĩa riêng.',
      'Làm nóng chảo sâu lòng, láng một lớp dầu mỏng. Múc 1 vá bột tráng tròn mỏng đều khắp mặt chảo.',
      'Xếp tôm thịt và giá đỗ lên một nửa bánh, đậy nắp trong 2-3 phút cho bột chín và viền bánh giòn cong lên.',
      'Gấp đôi bánh xèo lại, gắp ra đĩa lót lá chuối. Dùng kéo cắt miếng cuốn rau cải xanh chấm nước mắm tỏi ớt.'
    ],
    nearbyRestaurants: [
      {
        name: 'Bánh Xèo Mười Xiềm',
        address: '204 Nguyễn Trãi, P. Phạm Ngũ Lão, Q.1, TP.HCM',
        distance: '2.3 km',
        priceRange: '60.000đ - 110.000đ',
        rating: 4.6,
        openHours: '09:30 - 22:00',
        mapQuery: 'Banh Xeo Muoi Xiem'
      }
    ]
  },
  {
    id: 'bo-luc-lac',
    name: 'Bò Lúc Lắc Khoai Tây Chiên Giòn',
    englishName: 'Vietnamese Shaking Beef with Crispy Fries',
    mealCategory: 'dinner',
    tags: ['dry', 'specialty'],
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1000&q=80',
    cookTime: 25,
    difficulty: 'Dễ',
    calories: 550,
    rating: 4.8,
    reviewsCount: 168,
    author: 'Chef David Thái',
    description: 'Những viên thịt bò mềm ngọt thái quân cờ được áp chảo lắc đều tay với sốt bơ tỏi dầu hào đậm vị, ăn cùng ớt chuông, hành tây giòn ngọt và đĩa khoai tây chiên vàng ruộm.',
    isRecipeOfDay: false,
    isPopular: true,
    isHealthy: false,
    ingredients: [
      { name: 'Thịt thăn bò mềm thái vuông 2x2cm', amount: '400g' },
      { name: 'Ớt chuông xanh đỏ, hành tây', amount: '150g' },
      { name: 'Khoai tây cắt que chiên giòn', amount: '200g' },
      { name: 'Bơ nhạt, tỏi băm, xì dầu, dầu hào, tiêu đen', amount: 'Vừa đủ' }
    ],
    ingredientKeys: ['thit_bo', 'toi_ot', 'hanh_la'],
    steps: [
      'Ướp bò viên với dầu hào, xì dầu, tỏi băm và chút tiêu xay trong 20 phút.',
      'Chiên vàng khoai tây que ngập dầu cho giòn tan ráo dầu.',
      'Phi thơm tỏi trong chảo gang lửa lớn, trút bò vào lắc chảo liên tục trong 2 phút để bề mặt xém vàng mà bên trong vẫn mềm ngọt hồng hào.',
      'Thêm hành tây, ớt chuông và chút bơ nhạt vào đảo nhanh 1 phút rồi tắt bếp.',
      'Trút bò ra đĩa cùng khoai tây chiên, chấm muối tiêu chanh tươi chua cay.'
    ],
    nearbyRestaurants: [
      {
        name: 'Quán Bò Beefsteak & Bò Lúc Lắc',
        address: 'Khu phố Tây Bùi Viện / Tạ Hiện',
        distance: '1.7 km',
        priceRange: '80.000đ - 140.000đ',
        rating: 4.7,
        openHours: '11:00 - 23:00',
        mapQuery: 'Bo Luc Lac Gan Day'
      }
    ]
  },
  {
    id: 'banh-trang-nuong',
    name: 'Bánh Tráng Nướng Đà Lạt "Pizza Việt Nam"',
    englishName: 'Dalat Crispy Grilled Rice Paper Pizza',
    mealCategory: 'snack',
    tags: ['quick', 'budget'],
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1000&q=80',
    cookTime: 10,
    difficulty: 'Dễ',
    calories: 310,
    rating: 4.9,
    reviewsCount: 290,
    author: 'Bé Bánh Tráng Đà Lạt',
    description: 'Món ăn vặt đường phố siêu hot: Bánh tráng nướng giòn rụm trên than hồng quết trứng cút, bơ thơm, tép khô, khô bò xé sợi, xúc xích và sốt mayonnaise tương ớt cay nồng.',
    isRecipeOfDay: false,
    isPopular: true,
    isHealthy: false,
    ingredients: [
      { name: 'Bánh tráng nướng loại dày', amount: '5 cái' },
      { name: 'Trứng cút hoặc trứng gà', amount: '5 quả' },
      { name: 'Tép khô rim cay ngọt, ruốc thịt', amount: '50g' },
      { name: 'Khô bò xé, xúc xích thái mỏng', amount: '50g' },
      { name: 'Hành lá phi, sốt mayonnaise, tương ớt', amount: 'Vừa đủ' }
    ],
    ingredientKeys: ['trung', 'thit_heo', 'hanh_la', 'toi_ot'],
    steps: [
      'Đặt bánh tráng lên vỉ nướng than hoặc chảo chống dính ở lửa nhỏ.',
      'Đập 1-2 quả trứng cút vào giữa bánh, dùng thìa quết đều trứng cùng chút bơ và hành hoa khắp mặt bánh.',
      'Rắc tép khô, xúc xích, ruốc thịt và khô bò xé sợi lên trên.',
      'Nướng xoay tròn bánh tráng cho giòn đều đến khi trứng chín vàng thơm phức.',
      'Xịt đều sốt tương ớt và sốt mayonnaise zigzag, gấp đôi bánh lại và cắn ngay khi còn nóng hổi giòn rụm.'
    ],
    nearbyRestaurants: [
      {
        name: 'Bánh Tráng Nướng Đà Lạt Hoàng Diệu',
        address: 'Gần trường đại học & khu phố ăn vặt',
        distance: '0.5 km',
        priceRange: '20.000đ - 30.000đ',
        rating: 4.8,
        openHours: '15:00 - 22:30',
        mapQuery: 'Banh Trang Nuong Da Lat'
      }
    ]
  },
  {
    id: 'lau-ga-la-e',
    name: 'Lẩu Gà Lá É Phú Yên - Đà Lạt',
    englishName: 'Chicken Hotpot with Holy Basil Leaves',
    mealCategory: 'dinner',
    tags: ['soup', 'specialty'],
    image: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1000&q=80',
    cookTime: 40,
    difficulty: 'Vừa',
    calories: 580,
    rating: 4.9,
    reviewsCount: 340,
    author: 'Lẩu Gà Tao Ngộ',
    description: 'Nồi lẩu bốc khói nghi ngút với nước dùng thơm cay the mát độc đáo từ lá é tươi dập nhỏ và ớt hiểm xanh, thịt gà ta chắc ngọt dai ngon cùng nấm sò và măng tươi chua giòn.',
    isRecipeOfDay: false,
    isPopular: true,
    isHealthy: true,
    ingredients: [
      { name: 'Gà ta thả vườn chặt miếng vừa ăn', amount: '1.2 kg' },
      { name: 'Lá é tươi rửa sạch để ráo', amount: '300g' },
      { name: 'Ớt hiểm xanh giã dập', amount: '10 quả' },
      { name: 'Măng củ luộc thái lát, nấm sò (nấm bào ngư)', amount: '200g' },
      { name: 'Nước dừa tươi', amount: '1 quả' },
      { name: 'Bún tươi hoặc mì ăn kèm', amount: '500g' }
    ],
    ingredientKeys: ['thit_ga', 'nam', 'bun', 'toi_ot'],
    steps: [
      'Giã dập một nửa phần lá é cùng ớt hiểm xanh và chút muối hạt để ướp thịt gà trong 30 phút.',
      'Phi tỏi thơm xào săn thịt gà cho ngấm đều gia vị cay the nồng nàn.',
      'Đổ nước dừa tươi và nước lọc vào nồi nấu sôi, hạ nhỏ lửa ninh gà trong 20 phút cho mềm ngọt.',
      'Cho măng chua và nấm sò vào nồi lẩu đun sôi sùng sục.',
      'Đặt nồi lên bếp lẩu mini giữa bàn ăn, nhúng từng nắm lá é tươi vào nồi nước sôi trong 5 giây rồi vớt ra ăn liền cùng bún.'
    ],
    nearbyRestaurants: [
      {
        name: 'Lẩu Gà Lá É Tao Ngộ',
        address: 'Đường 3 Tháng 4, TP. Đà Lạt / Các chi nhánh Hà Nội & TP.HCM',
        distance: '2.5 km',
        priceRange: '200.000đ - 300.000đ / nồi (3-4 người)',
        rating: 4.9,
        openHours: '10:00 - 22:00',
        mapQuery: 'Lau Ga La E Tao Ngo'
      }
    ]
  }
];
