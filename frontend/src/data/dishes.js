export const DISHES_DATA = [
  // =========================================================================
  // 1. MÓN CƠM GIA ĐÌNH: MÓN MẶN CHỦ ĐẠO (ĐẬM ĐÀ, ĐƯA CƠM)
  // =========================================================================
  {
    id: 'thit-kho-tau',
    name: 'Thịt Kho Tàu Nước Dừa Trứng Cút',
    englishName: 'Braised Pork Belly with Eggs in Coconut Water',
    mealCategory: 'dinner',
    dishType: 'man',
    prepTime: 20,
    cookTime: 40,
    difficulty: 'Dễ',
    calories: 580,
    popularityScore: 99,
    isHomeCooked: true,
    isRecipeOfDay: true,
    isPopular: true,
    isHealthy: false,
    tags: ['home', 'dry', 'specialty'],
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1000&q=80',
    author: 'Mẹ Nấu',
    description: 'Thịt ba chỉ thái vuông vức kho mềm rục cùng nước dừa xiêm béo ngọt thanh, ngấm đều vào từng quả trứng cút nâu bóng đậm đà đưa cơm.',
    ingredients: [
      { name: 'Thịt ba chỉ rút sườn', quantity: 400, unit: 'g', isCore: true, key: 'thit_heo' },
      { name: 'Trứng cút (hoặc trứng vịt)', quantity: 12, unit: 'quả', isCore: true, key: 'trung' },
      { name: 'Nước dừa tươi', quantity: 1, unit: 'trái (350ml)', isCore: true, key: 'nuoc_dua' },
      { name: 'Hành tím, tỏi băm', quantity: 3, unit: 'củ', isCore: false, key: 'toi_ot' },
      { name: 'Nước mắm ngon, hạt tiêu, đường màu', quantity: 0, unit: 'Vừa đủ', isCore: false, key: 'gia_vi' }
    ],
    steps: [
      'Thịt ba chỉ bóp muối giấm rửa sạch, thái miếng vuông dày chừng 3cm. Luộc sơ qua nước sôi 2 phút rồi vớt ra xả sạch.',
      'Ướp thịt với 2 thìa nước mắm ngon, 1 thìa đường, tiêu, hành tỏi băm nhuyễn trong ít nhất 30 phút.',
      'Luộc chín trứng cút, ngâm nước lạnh cho dễ bóc sạch vỏ.',
      'Thắng nước màu cánh gián từ 1 thìa đường, trút thịt vào đảo săn đều cho ngấm màu.',
      'Đổ nước dừa tươi ngập mặt thịt, đun sôi rồi hạ nhỏ lửa đun liu riu 30 phút cho thịt mềm.',
      'Thả trứng cút vào kho thêm 10 phút cho trứng ngấm màu nâu óng, nêm lại chút nước mắm cho vừa khẩu vị rồi tắt bếp.'
    ],
    nearbyRestaurants: [
      {
        name: 'Quán Cơm Niêu Sài Gòn',
        address: '27 Tú Xương, P.7, Q.3, TP.HCM',
        distance: '1.2 km',
        priceRange: '60.000đ - 120.000đ',
        rating: 4.8,
        openHours: '10:00 - 22:00'
      },
      {
        name: 'Bếp Cơm Gia Đình Cô Ba',
        address: '15 Huỳnh Thúc Kháng, Đống Đa, Hà Nội',
        distance: '0.9 km',
        priceRange: '45.000đ - 70.000đ',
        rating: 4.6,
        openHours: '10:30 - 21:00'
      }
    ]
  },

  {
    id: 'suon-xao-chua-ngot',
    name: 'Sườn Xào Chua Ngọt Miền Bắc',
    englishName: 'Sweet and Sour Pork Ribs',
    mealCategory: 'dinner',
    dishType: 'man',
    prepTime: 15,
    cookTime: 25,
    difficulty: 'Dễ',
    calories: 520,
    popularityScore: 98,
    isHomeCooked: true,
    isPopular: true,
    isHealthy: false,
    tags: ['home', 'dry', 'specialty'],
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1000&q=80',
    author: 'Chef Bếp Việt',
    description: 'Từng miếng sườn non chặt khúc vàng rộm, áo lớp sốt dấm đường cà chua sánh kẹo, chua thanh ngọt dịu kích thích vị giác cả người lớn lẫn trẻ nhỏ.',
    ingredients: [
      { name: 'Sườn non heo tươi', quantity: 500, unit: 'g', isCore: true, key: 'suon_heo' },
      { name: 'Cà chua chín mọng', quantity: 2, unit: 'quả', isCore: true, key: 'ca_chua' },
      { name: 'Hành khô, tỏi băm', quantity: 2, unit: 'củ', isCore: false, key: 'toi_ot' },
      { name: 'Nước mắm, giấm gạo (hoặc chanh)', quantity: 2, unit: 'thìa canh', isCore: false, key: 'gia_vi' },
      { name: 'Đường cát, tương cà, tiêu xay', quantity: 0, unit: 'Vừa đủ', isCore: false, key: 'gia_vi' }
    ],
    steps: [
      'Sườn non chặt khúc vừa ăn chừng 3-4cm, chần qua nước sôi cùng chút muối để khử mùi hôi, rửa lại sạch sẽ.',
      'Ướp sườn với chút hạt nêm, nước mắm và tiêu trong 15 phút.',
      'Cho sườn vào chảo rán lửa vừa cho vàng đều hai mặt, vớt ra đĩa để ráo dầu.',
      'Pha nước sốt chua ngọt: 2 thìa nước mắm, 2 thìa đường, 2 thìa giấm gạo, 1 thìa tương cà và 3 thìa nước lọc, khuấy tan.',
      'Phi thơm hành tỏi băm, xào cà chua cho nhuyễn mịn rồi trút sườn đã rán và bát nước sốt vào đảo đều.',
      'Đun nhỏ lửa đến khi nước sốt sệt lại bao phủ óng ánh quanh từng miếng sườn là hoàn tất.'
    ],
    nearbyRestaurants: [
      {
        name: 'Cơm Niêu Thúy Nga',
        address: '110 B2 Nguyễn Chí Thanh, Ba Đình, Hà Nội',
        distance: '1.5 km',
        priceRange: '65.000đ - 110.000đ',
        rating: 4.7,
        openHours: '10:00 - 21:30'
      }
    ]
  },

  {
    id: 'ca-loc-kho-to',
    name: 'Cá Lóc Kho Tộ Tiêu Sọ Nam Bộ',
    englishName: 'Claypot Braised Snakehead Fish with Peppercorns',
    mealCategory: 'dinner',
    dishType: 'man',
    prepTime: 20,
    cookTime: 30,
    difficulty: 'Vừa',
    calories: 420,
    popularityScore: 96,
    isHomeCooked: true,
    isPopular: true,
    isHealthy: true,
    tags: ['home', 'dry', 'specialty'],
    image: 'https://images.unsplash.com/photo-1534939561126-855b8675edd7?auto=format&fit=crop&w=1000&q=80',
    author: 'Má Bảy Miền Tây',
    description: 'Thịt cá lóc chắc nịch, ướp nước mắm cốt đậm đà, kho trong tộ đất riu riu cùng thịt mỡ và tiêu xanh cay nồng thơm lừng.',
    ingredients: [
      { name: 'Cá lóc đồng (cắt khúc)', quantity: 500, unit: 'g', isCore: true, key: 'ca_loc' },
      { name: 'Thịt ba chỉ (thái con chì)', quantity: 100, unit: 'g', isCore: true, key: 'thit_heo' },
      { name: 'Hành tím, tỏi, ớt hiểm', quantity: 3, unit: 'củ', isCore: false, key: 'toi_ot' },
      { name: 'Tiêu sọ đập dập & hành lá', quantity: 1, unit: 'nhánh', isCore: false, key: 'hanh_la' },
      { name: 'Nước mắm cá cơm, nước màu dừa, đường', quantity: 0, unit: 'Vừa đủ', isCore: false, key: 'gia_vi' }
    ],
    steps: [
      'Cá lóc đánh vảy, làm sạch ruột, xát muối và chanh khử sạch nhớt, cắt khúc dày 2.5cm.',
      'Ướp cá với nước mắm, đường, hạt tiêu, nước màu dừa, hành tỏi băm trong 25 phút.',
      'Xào thịt ba chỉ cho ra bớt mỡ trong tộ đất, vớt thịt ra giữ lại mỡ.',
      'Xếp khúc cá vào tộ đất, trút nước ướp cá và thịt ba chỉ vào đun sôi lửa lớn 5 phút.',
      'Hạ lửa nhỏ liu riu, rải thêm ớt hiểm và hạt tiêu sọ, kho đến khi nước kho cạn sánh sệt.',
      'Rắc nhiều hành lá thái nhỏ và tiêu xay lên trên, dùng nóng cùng cơm trắng và đĩa rau luộc.'
    ],
    nearbyRestaurants: [
      {
        name: 'Quán Bụi - Hương Vị Quê Nhà',
        address: '19 Ngô Văn Năm, Bến Nghé, Q.1, TP.HCM',
        distance: '2.1 km',
        priceRange: '75.000đ - 140.000đ',
        rating: 4.8,
        openHours: '09:00 - 22:30'
      }
    ]
  },

  {
    id: 'dau-phu-nhoi-thit',
    name: 'Đậu Phụ Nhồi Thịt Sốt Cà Chua',
    englishName: 'Tofu Stuffed with Minced Pork in Tomato Sauce',
    mealCategory: 'lunch',
    dishType: 'man',
    prepTime: 15,
    cookTime: 15,
    difficulty: 'Dễ',
    calories: 390,
    popularityScore: 95,
    isHomeCooked: true,
    isPopular: true,
    isHealthy: true,
    tags: ['home', 'quick', 'budget'],
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1000&q=80',
    author: 'Bếp Nhà Tôi',
    description: 'Miếng đậu phụ vàng ươm nhồi đầy ắp nhân thịt băm nấm mộc nhĩ giòn sần sật, áo đẫm nước sốt cà chua đỏ au thơm ngát mùi hành ngò.',
    ingredients: [
      { name: 'Đậu phụ mơ (đậu trắng)', quantity: 4, unit: 'miếng', isCore: true, key: 'dau_phu' },
      { name: 'Thịt heo xay nhuyễn', quantity: 200, unit: 'g', isCore: true, key: 'thit_heo' },
      { name: 'Cà chua chín', quantity: 3, unit: 'quả', isCore: true, key: 'ca_chua' },
      { name: 'Mộc nhĩ ngâm nở băm nhỏ', quantity: 2, unit: 'tai', isCore: false, key: 'nam' },
      { name: 'Hành lá, hạt nêm, tiêu', quantity: 0, unit: 'Vừa đủ', isCore: false, key: 'hanh_la' }
    ],
    steps: [
      'Trộn đều thịt xay với mộc nhĩ băm, hành hoa thái nhỏ, 1 thìa hạt nêm, chút tiêu trong 10 phút.',
      'Cắt đậu phụ làm đôi, rạch một đường giữa hoặc khoét bớt ruột, nhồi nhân thịt vào vừa vặn.',
      'Bắc chảo dầu nóng, rán vàng mặt đậu phụ có nhân thịt để cố định nhân, vớt ra đĩa.',
      'Phi thơm hành khô, cho cà chua thái hạt lựu vào xào nhuyễn cùng chút gia vị tạo thành sốt sệt.',
      'Xếp các miếng đậu nhồi thịt vào chảo sốt, đậy vung đun nhỏ lửa 10 phút cho đậu ngấm sốt.',
      'Rắc hành lá thái nhỏ và chút tiêu xay lên trên, tắt bếp và gắp ra đĩa sâu lòng.'
    ],
    nearbyRestaurants: [
      {
        name: 'Cơm Bình Dân 88',
        address: '88 Thái Thịnh, Đống Đa, Hà Nội',
        distance: '0.5 km',
        priceRange: '35.000đ - 50.000đ',
        rating: 4.5,
        openHours: '10:00 - 20:30'
      }
    ]
  },

  {
    id: 'trung-duc-thit',
    name: 'Trứng Chiên Thịt Băm Mộc Nhĩ',
    englishName: 'Vietnamese Minced Pork Fried Omelette',
    mealCategory: 'lunch',
    dishType: 'man',
    prepTime: 5,
    cookTime: 10,
    difficulty: 'Dễ',
    calories: 340,
    popularityScore: 97,
    isHomeCooked: true,
    isPopular: true,
    isHealthy: false,
    tags: ['home', 'quick', 'budget'],
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=1000&q=80',
    author: 'Cơm Sinh Viên',
    description: 'Món ăn siêu nhanh chỉ mất 15 phút: trứng vịt hoặc gà đánh bông cùng thịt băm thơm phức, mộc nhĩ giòn dai, viền mép vàng ruộm béo ngậy.',
    ingredients: [
      { name: 'Trứng gà hoặc trứng vịt', quantity: 4, unit: 'quả', isCore: true, key: 'trung' },
      { name: 'Thịt heo xay', quantity: 150, unit: 'g', isCore: true, key: 'thit_heo' },
      { name: 'Mộc nhĩ ngâm nở thái sợi', quantity: 2, unit: 'tai', isCore: false, key: 'nam' },
      { name: 'Hành tím băm, hành lá', quantity: 1, unit: 'nhánh', isCore: false, key: 'hanh_la' },
      { name: 'Nước mắm ngon, hạt nêm, tiêu', quantity: 0, unit: 'Vừa đủ', isCore: false, key: 'gia_vi' }
    ],
    steps: [
      'Đập 4 quả trứng vào tô, thêm thịt băm, mộc nhĩ thái nhỏ, hành hoa, 1 thìa nước mắm và tiêu.',
      'Dùng đũa đánh bông đều hỗn hợp cho thịt tơi và tan đều trong trứng.',
      'Đun nóng chảo với 2 thìa canh dầu ăn, đổ toàn bộ hỗn hợp trứng thịt vào dàn đều chảo.',
      'Hạ lửa nhỏ vừa, đậy vung chừng 4-5 phút cho thịt bên trong chín đều.',
      'Mở vung, khéo léo lật mặt trứng rán thêm 2 phút cho cả hai mặt vàng ruộm thơm lừng.',
      'Cắt miếng tam giác hoặc vuông vừa ăn, chấm cùng nước mắm tỏi ớt ăn với cơm nóng.'
    ],
    nearbyRestaurants: [
      {
        name: 'Quán Cơm Sinh Viên Bách Khoa',
        address: 'Tạ Quang Bửu, Hai Bà Trưng, Hà Nội',
        distance: '0.8 km',
        priceRange: '25.000đ - 40.000đ',
        rating: 4.6,
        openHours: '10:00 - 21:00'
      }
    ]
  },

  {
    id: 'thit-rang-chay-canh',
    name: 'Thịt Ba Chỉ Rang Cháy Cạnh Lá Chanh',
    englishName: 'Crispy Caramelized Pork Belly with Lime Leaves',
    mealCategory: 'dinner',
    dishType: 'man',
    prepTime: 10,
    cookTime: 15,
    difficulty: 'Dễ',
    calories: 510,
    popularityScore: 96,
    isHomeCooked: true,
    isPopular: true,
    isHealthy: false,
    tags: ['home', 'dry', 'quick'],
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1000&q=80',
    author: 'Bếp Cơm Bắc',
    description: 'Thịt ba chỉ thái mỏng đảo sém vàng giòn rụm cạnh, tươm mỡ béo ngậy quyện nước mắm đường mặn ngọt và thoang thoảng hương lá chanh tươi nức mũi.',
    ingredients: [
      { name: 'Thịt ba chỉ heo tươi', quantity: 400, unit: 'g', isCore: true, key: 'thit_heo' },
      { name: 'Lá chanh tươi thái chỉ', quantity: 6, unit: 'lá', isCore: false, key: 'hanh_la' },
      { name: 'Hành khô băm', quantity: 2, unit: 'củ', isCore: false, key: 'toi_ot' },
      { name: 'Nước mắm cốt, đường cát, tiêu xay', quantity: 0, unit: 'Vừa đủ', isCore: false, key: 'gia_vi' }
    ],
    steps: [
      'Thịt ba chỉ rửa sạch, thái lát mỏng vừa ăn.',
      'Cho thịt vào chảo không cần dầu, đảo lửa vừa cho thịt tự tiết mỡ và sém cạnh vàng giòn.',
      'Múc bớt mỡ thừa ra chén, cho hành khô băm vào phi thơm cùng thịt.',
      'Cho 2 thìa nước mắm ngon và 1 thìa đường vào đảo thật nhanh tay trên lửa lớn cho đường keo lại.',
      'Tắt bếp, rắc lá chanh thái chỉ và hạt tiêu xay vào đảo đều rồi múc ra đĩa ăn kèm dưa chua.'
    ],
    nearbyRestaurants: [
      {
        name: 'Quán Cơm Bắc Phố Cổ',
        address: '32 Hàng Bè, Hoàn Kiếm, Hà Nội',
        distance: '1.8 km',
        priceRange: '45.000đ - 80.000đ',
        rating: 4.7,
        openHours: '10:30 - 21:00'
      }
    ]
  },

  // =========================================================================
  // 2. MÓN CƠM GIA ĐÌNH: MÓN CANH THANH MÁT & BỔ DƯỠNG
  // =========================================================================
  {
    id: 'canh-cua-rau-day',
    name: 'Canh Cua Đồng Nấu Rau Đay Mướp Mồng Tơi',
    englishName: 'Crab Meat Soup with Malabar Spinach and Jute Leaves',
    mealCategory: 'dinner',
    dishType: 'canh',
    prepTime: 20,
    cookTime: 15,
    difficulty: 'Vừa',
    calories: 220,
    popularityScore: 99,
    isHomeCooked: true,
    isPopular: true,
    isHealthy: true,
    tags: ['home', 'soup', 'healthy', 'specialty'],
    image: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1000&q=80',
    author: 'Bếp Cơm Mẹ Nấu',
    description: 'Món canh linh hồn của mâm cơm hè miền Bắc: riêu cua đóng bánh chắc nịch, nước canh ngọt lịm từ cua đồng xay cùng rau đay mướp hương mướt mát, ăn kèm cà pháo giòn rụm.',
    ingredients: [
      { name: 'Cua đồng tươi giã/xay', quantity: 300, unit: 'g', isCore: true, key: 'cua_dong' },
      { name: 'Rau đay & mồng tơi', quantity: 1, unit: 'bó (250g)', isCore: true, key: 'muop_rau_day' },
      { name: 'Mướp hương tươi', quantity: 1, unit: 'trái', isCore: true, key: 'muop_rau_day' },
      { name: 'Hành khô phi thơm', quantity: 1, unit: 'củ', isCore: false, key: 'toi_ot' },
      { name: 'Mắm tôm Bắc ngon, muối hạt', quantity: 0, unit: 'Vừa đủ', isCore: false, key: 'gia_vi' }
    ],
    steps: [
      'Hòa cua xay với 800ml nước lọc và 1/2 thìa muối, bóp kỹ rồi lọc qua rây 2-3 lần lấy nước cốt trong, bỏ bã xác.',
      'Rau đay, mồng tơi nhặt lá non, rửa sạch thái nhỏ. Mướp gọt vỏ chẻ đôi thái vát xéo.',
      'Đổ nước cua vào nồi, bật lửa vừa đun liu riu, khuấy nhẹ vòng tròn để gạch cua không bén đáy.',
      'Khi nước sôi lăn tăn, mảng thịt riêu cua sẽ kết tảng nổi lên mặt, khéo léo gạt riêu cua sang một bên.',
      'Thả mướp hương và rau thái nhỏ vào, nêm chút mắm tôm ngon và hạt nêm cho vừa miệng.',
      'Canh sôi bùng lại chừng 1-2 phút là rau chín xanh mướt, múc ra tô lớn thưởng thức cùng cà pháo muối chua.'
    ],
    nearbyRestaurants: [
      {
        name: 'Nhà Hàng Cơm Quê Ánh Tuyết',
        address: '25 Mã Mây, Hàng Buồm, Hoàn Kiếm, Hà Nội',
        distance: '1.4 km',
        priceRange: '60.000đ - 110.000đ',
        rating: 4.8,
        openHours: '10:00 - 22:00'
      }
    ]
  },

  {
    id: 'canh-chua-ca-loc',
    name: 'Canh Chua Cá Lóc Nam Bộ',
    englishName: 'Southern Vietnamese Sour Fish Soup',
    mealCategory: 'dinner',
    dishType: 'canh',
    prepTime: 20,
    cookTime: 15,
    difficulty: 'Vừa',
    calories: 280,
    popularityScore: 98,
    isHomeCooked: true,
    isPopular: true,
    isHealthy: true,
    tags: ['home', 'soup', 'healthy', 'specialty'],
    image: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1000&q=80',
    author: 'Má Bảy Miền Tây',
    description: 'Vị chua thanh mát của nước me hòa cùng vị ngọt tự nhiên của khóm dứa, cà chua, dọc mùng giòn xốp và cá lóc đồng tươi roi rói thơm lừng ngò om ngò gai.',
    ingredients: [
      { name: 'Cá lóc đồng (đầu + đuôi)', quantity: 400, unit: 'g', isCore: true, key: 'ca_loc' },
      { name: 'Cà chua & dứa (khóm)', quantity: 2, unit: 'quả/miếng', isCore: true, key: 'ca_chua' },
      { name: 'Dọc mùng (bạc hà), đậu bắp', quantity: 150, unit: 'g', isCore: true, key: 'rau_muong' },
      { name: 'Me vắt chín chua', quantity: 50, unit: 'g', isCore: false, key: 'gia_vi' },
      { name: 'Ngò gai, ngò om, ớt sừng, tỏi phi', quantity: 0, unit: 'Vừa đủ', isCore: false, key: 'hanh_la' }
    ],
    steps: [
      'Cá lóc xát muối chanh rửa sạch nhớt, cắt khúc vừa ăn.',
      'Dọc mùng tước vỏ thái vát, bóp muối rửa sạch vắt ráo. Đậu bắp cắt vát. Dứa thái lát tam giác.',
      'Dầm me với 1 bát nước ấm, lọc lấy nước cốt me chua.',
      'Phi thơm tỏi băm với chút dầu, xào sơ cà chua và dứa cho ra màu đỏ đẹp mắt.',
      'Đổ 1 lít nước lọc và nước cốt me vào đun sôi, thả cá lóc vào nấu chín trong 7-8 phút, hớt sạch bọt.',
      'Cho đậu bắp, dọc mùng vào đun thêm 2 phút, nêm nước mắm, đường cho cân bằng vị chua ngọt.',
      'Múc ra tô, rắc ngò gai, ngò om, ớt cay và tỏi phi vàng thơm lừng lên trên.'
    ],
    nearbyRestaurants: [
      {
        name: 'Quán Đồng Quê Nam Bộ',
        address: '45 Đinh Tiên Hoàng, Đa Kao, Q.1, TP.HCM',
        distance: '1.9 km',
        priceRange: '70.000đ - 130.000đ',
        rating: 4.8,
        openHours: '10:00 - 22:00'
      }
    ]
  },

  {
    id: 'canh-ngao-nau-chua',
    name: 'Canh Ngao Nấu Chua Dứa Cà Chua',
    englishName: 'Sour Clam Soup with Pineapple and Tomatoes',
    mealCategory: 'lunch',
    dishType: 'canh',
    prepTime: 15,
    cookTime: 10,
    difficulty: 'Dễ',
    calories: 180,
    popularityScore: 95,
    isHomeCooked: true,
    isPopular: true,
    isHealthy: true,
    tags: ['home', 'soup', 'quick', 'budget'],
    image: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1000&q=80',
    author: 'Bếp Cơm Nhanh',
    description: 'Món canh chua thanh tao nhẹ bụng: nước ngao luộc ngọt lịm tự nhiên hòa cùng dứa thơm và cà chua, thêm chút thì là hành hoa thơm lừng.',
    ingredients: [
      { name: 'Ngao sống (nghêu tươi)', quantity: 800, unit: 'g', isCore: true, key: 'ngao' },
      { name: 'Cà chua chín', quantity: 2, unit: 'quả', isCore: true, key: 'ca_chua' },
      { name: 'Dứa tươi thái lát', quantity: 1/4, unit: 'trái', isCore: false, key: 'ca_chua' },
      { name: 'Hành hoa, rau răm hoặc thì là', quantity: 1, unit: 'nhánh', isCore: false, key: 'hanh_la' },
      { name: 'Hành khô, nước mắm ngon', quantity: 0, unit: 'Vừa đủ', isCore: false, key: 'gia_vi' }
    ],
    steps: [
      'Ngao ngâm nước vo gạo cùng vài lát ớt 1 tiếng để nhả sạch cát, rửa sạch vỏ ngoài.',
      'Cho ngao vào nồi với 800ml nước đun sôi đến khi ngao há miệng thì tắt bếp.',
      'Vớt ngao ra nhặt lấy ruột, nước luộc ngao để lắng rồi gạn lấy phần nước trong.',
      'Phi thơm hành khô, xào cà chua và ruột ngao với chút hạt nêm cho đậm đà.',
      'Đổ nước luộc ngao và dứa vào đun sôi 3 phút, nêm nếm lại vừa miệng.',
      'Tắt bếp, cho hành hoa, rau răm thái nhỏ vào rồi múc ra bát ăn nóng.'
    ],
    nearbyRestaurants: [
      {
        name: 'Quán Cơm Văn Phòng Cầu Giấy',
        address: '52 Duy Tân, Dịch Vọng Hậu, Cầu Giấy, Hà Nội',
        distance: '0.7 km',
        priceRange: '35.000đ - 60.000đ',
        rating: 4.6,
        openHours: '10:30 - 20:30'
      }
    ]
  },

  {
    id: 'canh-cai-thit-bam',
    name: 'Canh Cải Ngọt Thịt Băm Gừng Tươi',
    englishName: 'Sweet Mustard Green Soup with Minced Pork',
    mealCategory: 'dinner',
    dishType: 'canh',
    prepTime: 10,
    cookTime: 10,
    difficulty: 'Dễ',
    calories: 160,
    popularityScore: 97,
    isHomeCooked: true,
    isPopular: true,
    isHealthy: true,
    tags: ['home', 'soup', 'quick', 'healthy'],
    image: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1000&q=80',
    author: 'Cơm Gia Đình',
    description: 'Món canh nhanh gọn 10 phút ấm bụng: cải ngọt xanh giòn nấu thịt nạc băm ngọt nước, điểm xuyết vài lát gừng tươi thơm nồng ấm áp.',
    ingredients: [
      { name: 'Rau cải ngọt tươi', quantity: 300, unit: 'g', isCore: true, key: 'rau_cai' },
      { name: 'Thịt heo nạc băm', quantity: 150, unit: 'g', isCore: true, key: 'thit_heo' },
      { name: 'Gừng tươi đập dập', quantity: 1, unit: 'nhánh nhỏ', isCore: false, key: 'toi_ot' },
      { name: 'Hành khô, nước mắm, hạt nêm', quantity: 0, unit: 'Vừa đủ', isCore: false, key: 'gia_vi' }
    ],
    steps: [
      'Rau cải nhặt gốc rửa sạch, thái khúc dài 3cm. Gừng đập dập.',
      'Ướp thịt băm với chút hạt nêm và tiêu.',
      'Phi thơm hành khô, xào săn thịt băm rồi đổ 800ml nước lọc vào đun sôi.',
      'Hớt sạch bọt cho nước canh trong, thả vài lát gừng đập dập vào.',
      'Nước sôi bùng thả rau cải vào đun nhanh trên lửa lớn 2 phút cho rau chín xanh mướt.',
      'Nêm lại chút nước mắm cho dậy mùi thơm rồi tắt bếp múc ra tô.'
    ],
    nearbyRestaurants: [
      {
        name: 'Quán Cơm Gia Đình Bách Khoa',
        address: '18 Lê Thanh Nghị, Hai Bà Trưng, Hà Nội',
        distance: '1.0 km',
        priceRange: '30.000đ - 55.000đ',
        rating: 4.5,
        openHours: '10:00 - 21:00'
      }
    ]
  },

  // =========================================================================
  // 3. MÓN CƠM GIA ĐÌNH: MÓN XÀO & RAU LUỘC (CÂN BẰNG CHẤT XƠ)
  // =========================================================================
  {
    id: 'rau-muong-xao-toi',
    name: 'Rau Muống Xào Tỏi Giòn Xanh',
    englishName: 'Stir-Fried Morning Glory with Garlic',
    mealCategory: 'dinner',
    dishType: 'xao',
    prepTime: 10,
    cookTime: 5,
    difficulty: 'Dễ',
    calories: 140,
    popularityScore: 99,
    isHomeCooked: true,
    isPopular: true,
    isHealthy: true,
    tags: ['home', 'quick', 'budget', 'healthy'],
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1000&q=80',
    author: 'Bếp Cơm Việt',
    description: 'Món rau xào quốc dân xuất hiện trên mọi bàn ăn Việt: cọng rau muống giòn sần sật, xanh ngắt óng ả, ngập tràn tỏi phi thơm nức mũi.',
    ingredients: [
      { name: 'Rau muống non ngắt ngọn', quantity: 1, unit: 'bó (350g)', isCore: true, key: 'rau_muong' },
      { name: 'Tỏi ta tươi đập dập', quantity: 2, unit: 'củ', isCore: true, key: 'toi_ot' },
      { name: 'Dầu ăn, nước mắm ngon, hạt nêm', quantity: 0, unit: 'Vừa đủ', isCore: false, key: 'gia_vi' }
    ],
    steps: [
      'Rau muống nhặt bỏ lá già và cọng cứng, rửa sạch ngâm nước muối loãng 5 phút rồi vớt ráo.',
      'Đun nồi nước sôi với chút muối, chần nhanh rau muống trong 30 giây rồi vớt ngay vào âu nước đá để rau giòn và xanh ngắt.',
      'Bắc chảo lên bếp với 2 thìa dầu ăn, phi thơm 1/2 lượng tỏi đập dập.',
      'Bật lửa lớn tối đa, trút rau muống vào đảo thật nhanh tay, nêm 1 thìa nước mắm ngon và chút hạt nêm.',
      'Cho nốt phần tỏi còn lại vào đảo thêm 30 giây rồi tắt bếp trút ra đĩa thưởng thức ngay.'
    ],
    nearbyRestaurants: [
      {
        name: 'Quán Cơm Bình Dân Phố Huế',
        address: '122 Phố Huế, Hai Bà Trưng, Hà Nội',
        distance: '1.2 km',
        priceRange: '25.000đ - 45.000đ',
        rating: 4.6,
        openHours: '10:00 - 21:00'
      }
    ]
  },

  {
    id: 'bap-cai-xao-ca-chua',
    name: 'Bắp Cải Xào Cà Chua Chín Mọng',
    englishName: 'Stir-Fried Cabbage with Ripe Tomatoes',
    mealCategory: 'lunch',
    dishType: 'xao',
    prepTime: 8,
    cookTime: 7,
    difficulty: 'Dễ',
    calories: 120,
    popularityScore: 94,
    isHomeCooked: true,
    isPopular: true,
    isHealthy: true,
    tags: ['home', 'quick', 'budget', 'healthy'],
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1000&q=80',
    author: 'Cơm Gia Đình',
    description: 'Món rau xào thanh đạm giá rẻ: bắp cải thái sợi giòn ngọt tự nhiên quyện vị chua thanh của cà chua, thơm mùi hành hoa tươi rói.',
    ingredients: [
      { name: 'Bắp cải tươi', quantity: 350, unit: 'g', isCore: true, key: 'bap_cai' },
      { name: 'Cà chua chín', quantity: 2, unit: 'quả', isCore: true, key: 'ca_chua' },
      { name: 'Hành tím, hành lá', quantity: 1, unit: 'nhánh', isCore: false, key: 'hanh_la' },
      { name: 'Dầu ăn, hạt nêm, tiêu xay', quantity: 0, unit: 'Vừa đủ', isCore: false, key: 'gia_vi' }
    ],
    steps: [
      'Bắp cải rửa sạch, thái sợi dày chừng 0.8cm. Cà chua bổ múi cau.',
      'Phi thơm hành khô băm với dầu ăn, trút cà chua vào xào cho mềm ra màu đỏ.',
      'Cho bắp cải vào xào đều trên lửa lớn, nêm 1.5 thìa hạt nêm.',
      'Đảo nhanh tay trong 3-4 phút cho bắp cải vừa chín tới vẫn giữ độ giòn ngọt.',
      'Rắc hành lá thái khúc và tiêu xay vào đảo đều rồi tắt bếp múc ra đĩa.'
    ],
    nearbyRestaurants: [
      {
        name: 'Cơm Niêu Sinh Viên',
        address: '60 Chùa Láng, Đống Đa, Hà Nội',
        distance: '1.5 km',
        priceRange: '25.000đ - 40.000đ',
        rating: 4.5,
        openHours: '10:00 - 20:30'
      }
    ]
  },

  // =========================================================================
  // 4. MÓN ĂN SÁNG & ĐẶC SẢN QUỐC HỒN QUỐC TÚY
  // =========================================================================
  {
    id: 'pho-bo-tai-lan',
    name: 'Phở Bò Tái Lăn Hà Nội',
    englishName: 'Hanoi Stir-fried Rare Beef Pho',
    mealCategory: 'breakfast',
    dishType: 'an_sang',
    prepTime: 20,
    cookTime: 35,
    difficulty: 'Vừa',
    calories: 520,
    popularityScore: 99,
    isHomeCooked: false,
    isRecipeOfDay: false,
    isPopular: true,
    isHealthy: false,
    tags: ['soup', 'specialty'],
    image: 'https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?auto=format&fit=crop&w=1000&q=80',
    author: 'Chef Tuấn Hưng',
    description: 'Thịt bò tươi xào lăn nhanh trên lửa lớn cùng tỏi thơm nức, chan nước dùng ninh xương đậm đà thơm mùi quế hồi và ngập tràn hành hoa tươi rói.',
    ingredients: [
      { name: 'Bánh phở tươi', quantity: 500, unit: 'g', isCore: true, key: 'bun' },
      { name: 'Thịt bò phi lê hoặc thăn mềm', quantity: 300, unit: 'g', isCore: true, key: 'thit_bo' },
      { name: 'Hành lá, hành tây, ngò gai', quantity: 100, unit: 'g', isCore: true, key: 'hanh_la' },
      { name: 'Gừng, tỏi tươi đập dập', quantity: 50, unit: 'g', isCore: false, key: 'toi_ot' },
      { name: 'Nước dùng ninh xương bò, quế hồi', quantity: 0, unit: 'Vừa đủ', isCore: false, key: 'gia_vi' }
    ],
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
        openHours: '06:00 - 20:30'
      },
      {
        name: 'Phở Bò Gia Truyền Bát Đàn',
        address: '49 Bát Đàn, Hoàn Kiếm, Hà Nội',
        distance: '1.4 km',
        priceRange: '60.000đ - 85.000đ',
        rating: 4.7,
        openHours: '06:00 - 10:30 & 18:00 - 20:30'
      }
    ]
  },

  {
    id: 'com-tam-suon-bi-cha',
    name: 'Cơm Tấm Sườn Bì Chả Trứng',
    englishName: 'Saigon Broken Rice with Grilled Pork Chop',
    mealCategory: 'lunch',
    dishType: 'man',
    prepTime: 25,
    cookTime: 20,
    difficulty: 'Vừa',
    calories: 680,
    popularityScore: 99,
    isHomeCooked: false,
    isPopular: true,
    isHealthy: false,
    tags: ['dry', 'specialty'],
    image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=1000&q=80',
    author: 'Cô Ba Sài Gòn',
    description: 'Hạt cơm tấm thơm dẻo ăn cùng sườn cốt lết nướng than hoa vàng óng ngấm gia vị sả mật ong, chả trứng hấp béo ngậy, bì dai giòn và nước mắm kẹo pha chuẩn vị miền Nam.',
    ingredients: [
      { name: 'Gạo tấm thơm', quantity: 300, unit: 'g', isCore: true, key: 'gao' },
      { name: 'Sườn cốt lết heo tươi', quantity: 4, unit: 'miếng (500g)', isCore: true, key: 'thit_heo' },
      { name: 'Trứng gà (chả trứng + ốp la)', quantity: 3, unit: 'quả', isCore: true, key: 'trung' },
      { name: 'Mỡ hành, dưa leo, cà chua', quantity: 1, unit: 'phần', isCore: false, key: 'hanh_la' },
      { name: 'Nước mắm kẹo chua ngọt, đồ chua', quantity: 0, unit: 'Vừa đủ', isCore: false, key: 'gia_vi' }
    ],
    steps: [
      'Ướp sườn với sả băm, tỏi băm, mật ong, nước mắm, chút sữa đặc và dầu ăn trong ít nhất 1-2 tiếng.',
      'Làm chả trứng: Trộn thịt xay, nấm mèo băm, miến, trứng gà, hạt nêm rồi hấp 20 phút. Quết lòng đỏ lên mặt và hấp tiếp 5 phút không đậy nắp.',
      'Nấu cơm tấm bằng nồi cơm điện với lượng nước vừa phải để hạt cơm tơi xốp.',
      'Nướng sườn trên than hồng hoặc nồi chiên không dầu ở 180°C trong 15 phút, trở mặt quết sốt nướng thêm 7 phút.',
      'Xới cơm tấm ra đĩa, đặt sườn nướng, chả trứng, bì, trứng ốp la, dưa leo cà chua, rưới mỡ hành thơm phức.'
    ],
    nearbyRestaurants: [
      {
        name: 'Cơm Tấm Ba Ghiền',
        address: '84 Đặng Văn Ngữ, P.10, Phú Nhuận, TP.HCM',
        distance: '1.1 km',
        priceRange: '65.000đ - 110.000đ',
        rating: 4.8,
        openHours: '07:00 - 21:00'
      },
      {
        name: 'Cơm Tấm Phúc Lộc Thọ',
        address: 'Nhiều chi nhánh trên toàn quốc',
        distance: '0.6 km',
        priceRange: '45.000đ - 70.000đ',
        rating: 4.6,
        openHours: '06:00 - 22:00'
      }
    ]
  },

  {
    id: 'banh-mi-chao-dac-biet',
    name: 'Bánh Mì Chảo Thập Cẩm Pa Tê Trứng',
    englishName: 'Vietnamese Pan-Fried Combo Banh Mi',
    mealCategory: 'breakfast',
    dishType: 'an_sang',
    prepTime: 5,
    cookTime: 10,
    difficulty: 'Dễ',
    calories: 460,
    popularityScore: 94,
    isHomeCooked: true,
    isPopular: true,
    isHealthy: false,
    tags: ['quick', 'budget'],
    image: 'https://images.unsplash.com/photo-1626804475297-41608ea09aeb?auto=format&fit=crop&w=1000&q=80',
    author: 'Bếp Cụ Rùa',
    description: 'Chiếc chảo gang nóng xèo xèo với trứng ốp la lòng đào, pate béo ngậy rán cháy cạnh, xúc xích, bò lát mềm mọng cùng sốt cà chua tiêu đen đậm đà chấm cùng bánh mì giòn rụm.',
    ingredients: [
      { name: 'Bánh mì nóng giòn', quantity: 2, unit: 'ổ', isCore: true, key: 'banh_mi' },
      { name: 'Trứng gà tươi', quantity: 2, unit: 'quả', isCore: true, key: 'trung' },
      { name: 'Pa tê gan heo', quantity: 80, unit: 'g', isCore: true, key: 'thit_heo' },
      { name: 'Thịt bò thái mỏng', quantity: 60, unit: 'g', isCore: false, key: 'thit_bo' },
      { name: 'Sốt cà chua tiêu đen, dưa leo', quantity: 0, unit: 'Vừa đủ', isCore: false, key: 'ca_chua' }
    ],
    steps: [
      'Làm nóng chảo gang trên bếp với chút bơ thơm.',
      'Đập 2 quả trứng gà vào chảo làm ốp la lòng đào.',
      'Cho miếng pate gan, lát bò ướp tiêu vào đảo nhanh tay quanh chảo.',
      'Rưới 2 muỗng canh sốt cà chua tiêu đen sôi lục bục vào chảo.',
      'Rắc ngò rí, tiêu xay và mang ra ăn nóng ngay cùng bánh mì giòn giòn.'
    ],
    nearbyRestaurants: [
      {
        name: 'Bánh Mì Chảo Cột Điện Quán',
        address: '71 Đặng Văn Ngữ, Đống Đa, Hà Nội',
        distance: '1.2 km',
        priceRange: '35.000đ - 55.000đ',
        rating: 4.6,
        openHours: '07:00 - 22:00'
      }
    ]
  },

  {
    id: 'goi-cuon-tom-thit',
    name: 'Gỏi Cuốn Tôm Thịt Chấm Tương Đậu',
    englishName: 'Fresh Vietnamese Spring Rolls with Shrimp and Pork',
    mealCategory: 'snack',
    dishType: 'an_vat',
    prepTime: 20,
    cookTime: 10,
    difficulty: 'Dễ',
    calories: 260,
    popularityScore: 96,
    isHomeCooked: true,
    isPopular: true,
    isHealthy: true,
    tags: ['healthy', 'quick', 'specialty'],
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1000&q=80',
    author: 'Healthy Kitchen',
    description: 'Thanh đạm, ít calo, nhiều chất xơ: tôm sú luộc đỏ au chẻ đôi cùng lát thịt ba chỉ mỏng tang, bún tươi và ngập tràn rau sống cuốn trong bánh tráng dẻo thơm, chấm tương đen xay bùi béo.',
    ingredients: [
      { name: 'Tôm sú tươi', quantity: 200, unit: 'g', isCore: true, key: 'tom' },
      { name: 'Thịt ba chỉ heo luộc', quantity: 200, unit: 'g', isCore: true, key: 'thit_heo' },
      { name: 'Bánh tráng dẻo & Bún tươi', quantity: 200, unit: 'g', isCore: true, key: 'bun' },
      { name: 'Xà lách, rau thơm, hẹ lá', quantity: 150, unit: 'g', isCore: true, key: 'rau_muong' },
      { name: 'Tương đen, bơ đậu phộng, ớt xay', quantity: 0, unit: 'Vừa đủ', isCore: false, key: 'gia_vi' }
    ],
    steps: [
      'Luộc tôm với chút giấm cho ngọt thịt, bóc vỏ bỏ chỉ đen, chẻ đôi theo chiều dọc.',
      'Thịt ba chỉ luộc chín tới cùng củ hành tím, ngâm nước lạnh rồi thái lát thật mỏng.',
      'Nhúng nhẹ bánh tráng qua nước ấm cho dẻo, trải lên thớt phẳng.',
      'Xếp xà lách, rau thơm, bún tươi, thịt ba chỉ, đặt 2-3 nửa con tôm ngửa mặt đỏ xuống dưới và cọng hẹ thò ra ngoài.',
      'Gấp hai mép bánh tráng và cuộn tròn thật chặt tay.',
      'Pha tương đen với bơ đậu phộng, chút tỏi ớt băm phi thơm và rắc đậu phộng rang giã dập lên trên chấm kèm.'
    ],
    nearbyRestaurants: [
      {
        name: 'Gỏi Cuốn Tôm Nhảy',
        address: '424 Lạc Long Quân, P.5, Q.11, TP.HCM',
        distance: '2.5 km',
        priceRange: '10.000đ - 15.000đ / cuốn',
        rating: 4.7,
        openHours: '11:00 - 20:00'
      }
    ]
  }
];
