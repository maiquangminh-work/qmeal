export const MEAL_COMBOS_DATA = [
  {
    id: 'combo-thanh-mat-mua-he',
    name: 'Mâm Cơm Thanh Mát Mùa Hè',
    tagline: 'Giải nhiệt ngày oi bức với canh cua mồng tơi & thịt luộc cà pháo',
    servings: '3 - 4 người',
    estimatedCost: '110.000đ - 135.000đ',
    totalTime: '35 phút',
    image: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1000&q=80',
    dishes: [
      {
        role: 'Món Mặn',
        name: 'Thịt Ba Chỉ Luộc Giòn Bì',
        detail: 'Thịt ba rọi luộc vừa chín tới, ngâm đá giòn sần sật thái mỏng chấm mắm tép/mắm tôm chanh ớt',
        cookTime: 20
      },
      {
        role: 'Món Canh',
        name: 'Canh Cua Nấu Mồng Tơi & Mướp Hương',
        detail: 'Nước canh ngọt lịm từ cua đồng nguyên chất, gạch cua béo ngậy đóng tảng thơm lừng',
        cookTime: 15
      },
      {
        role: 'Món Rau & Phụ',
        name: 'Rau Muống Xào Tỏi & Cà Pháo Giòn',
        detail: 'Rau muống luộc sơ rồi xào lửa lớn với tỏi giã dập xanh mướt, ăn kèm bát cà pháo muối giòn tan',
        cookTime: 10
      }
    ],
    ingredients: [
      { name: 'Thịt ba chỉ heo tươi', amount: '400g', category: 'Thịt & Đạm' },
      { name: 'Cua đồng xay tươi', amount: '300g', category: 'Thịt & Đạm' },
      { name: 'Rau muống non', amount: '1 mớ', category: 'Rau củ' },
      { name: 'Rau mồng tơi & rau đay', amount: '1 mớ', category: 'Rau củ' },
      { name: 'Mướp hương gọt vỏ', amount: '1 quả nhỏ', category: 'Rau củ' },
      { name: 'Tỏi tươi & ớt hiểm', amount: '2 củ', category: 'Gia vị' },
      { name: 'Cà pháo muối giòn', amount: '1 bát nhỏ', category: 'Đồ chua & Phụ' },
      { name: 'Nước mắm, chanh tươi, mắm tôm', amount: 'Vừa đủ', category: 'Gia vị' }
    ]
  },
  {
    id: 'combo-dam-da-ngay-mua',
    name: 'Mâm Cơm Đậm Đà Ngày Mưa',
    tagline: 'Vị béo ngậy của thịt kho tàu kết hợp canh chua cá lóc & rau luộc',
    servings: '3 - 4 người',
    estimatedCost: '130.000đ - 160.000đ',
    totalTime: '45 phút',
    image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=1000&q=80',
    dishes: [
      {
        role: 'Món Mặn',
        name: 'Thịt Kho Tàu Trứng Cút Nước Dừa',
        detail: 'Miếng thịt ba chỉ mềm tan trong miệng, trứng cút ngấm nước dừa xiêm màu cánh gián óng ả',
        cookTime: 40
      },
      {
        role: 'Món Canh',
        name: 'Canh Chua Cá Lóc Nam Bộ',
        detail: 'Vị chua thanh mát của me, dứa thơm, đậu bắp hòa quyện ngọt lịm với thịt cá lóc đồng',
        cookTime: 25
      },
      {
        role: 'Món Rau & Phụ',
        name: 'Đậu Bắp & Bông Cải Luộc Chấm Kho Quẹt',
        detail: 'Rau củ luộc xanh ngọt giữ trọn vitamin, chấm cùng nước thịt kho đậm đà',
        cookTime: 10
      }
    ],
    ingredients: [
      { name: 'Thịt ba chỉ hoặc thịt đùi heo', amount: '500g', category: 'Thịt & Đạm' },
      { name: 'Trứng cút luộc bóc vỏ', amount: '15 quả', category: 'Thịt & Đạm' },
      { name: 'Cá lóc khúc tươi', amount: '350g', category: 'Thịt & Đạm' },
      { name: 'Nước dừa tươi', amount: '1 quả', category: 'Gia vị' },
      { name: 'Dứa, cà chua, đậu bắp', amount: '300g', category: 'Rau củ' },
      { name: 'Me vắt chín, ngò om, ngò gai', amount: '50g', category: 'Rau củ' },
      { name: 'Bông cải xanh / bắp cải', amount: '200g', category: 'Rau củ' },
      { name: 'Hành tím, tỏi khô, ớt sừng', amount: 'Vừa đủ', category: 'Gia vị' }
    ]
  },
  {
    id: 'combo-nhanh-gon-tiet-kiem',
    name: 'Mâm Cơm Nhanh Gọn Tiết Kiệm (Dưới 30 Phút)',
    tagline: 'Cực nhanh, đủ chất và chi phí chỉ dưới 80.000đ cho cả nhà',
    servings: '2 - 3 người',
    estimatedCost: '60.000đ - 85.000đ',
    totalTime: '20 phút',
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=1000&q=80',
    dishes: [
      {
        role: 'Món Mặn',
        name: 'Đậu Hũ Dồn Thịt Sốt Cà Chua',
        detail: 'Đậu hũ chiên vàng nhồi thịt băm đậm đà, quyện đẫm sốt cà chua đỏ mọng hành hoa',
        cookTime: 20
      },
      {
        role: 'Món Canh',
        name: 'Canh Cải Ngọt Nấu Thịt Băm',
        detail: 'Bát canh ngọt lành, thanh ruột, nấu nhanh chỉ mất 5 phút với gừng tươi thái chỉ',
        cookTime: 10
      },
      {
        role: 'Món Rau & Phụ',
        name: 'Trứng Chiên Cuộn Hành Tây',
        detail: 'Trứng gà đánh xốp chiên vàng ươm, thơm nức mùi hành hoa và tiêu xay',
        cookTime: 10
      }
    ],
    ingredients: [
      { name: 'Thịt nạc vai heo băm nhỏ', amount: '250g', category: 'Thịt & Đạm' },
      { name: 'Đậu hũ trắng', amount: '4 bìa', category: 'Thịt & Đạm' },
      { name: 'Trứng gà tươi', amount: '3 quả', category: 'Thịt & Đạm' },
      { name: 'Cà chua chín mọng', amount: '3 quả', category: 'Rau củ' },
      { name: 'Cải ngọt (hoặc cải mơ)', amount: '1 mớ', category: 'Rau củ' },
      { name: 'Hành lá, hành khô, gừng tươi', amount: '100g', category: 'Gia vị' },
      { name: 'Nước mắm, hạt tiêu, dầu hào', amount: 'Vừa đủ', category: 'Gia vị' }
    ]
  },
  {
    id: 'combo-thinh-soan-cuoi-tuan',
    name: 'Mâm Cơm Thịnh Soạn Cuối Tuần',
    tagline: 'Đãi cả nhà món ngon nhà hàng ngay tại căn bếp ấm cúng',
    servings: '4 - 5 người',
    estimatedCost: '180.000đ - 230.000đ',
    totalTime: '45 phút',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1000&q=80',
    dishes: [
      {
        role: 'Món Mặn',
        name: 'Bò Lúc Lắc Sốt Bơ Tỏi Khoai Tây',
        detail: 'Bò thăn thái quân cờ lắc lửa lớn mềm ngọt mọng nước, ăn kèm khoai tây chiên vàng ruộm',
        cookTime: 25
      },
      {
        role: 'Món Canh',
        name: 'Canh Sườn Hầm Rau Củ Bổ Dưỡng',
        detail: 'Sườn heo non ninh mềm ngọt lịm cùng ngô ngọt, cà rốt và khoai tây bở bùi',
        cookTime: 35
      },
      {
        role: 'Món Rau & Phụ',
        name: 'Salad Xà Lách Cà Chua Dầu Giấm',
        detail: 'Xà lách thủy canh giòn ngọt trộn sốt dầu giấm chua ngọt khai vị cân bằng độ ngấy',
        cookTime: 10
      }
    ],
    ingredients: [
      { name: 'Thịt thăn bò phi lê mềm', amount: '400g', category: 'Thịt & Đạm' },
      { name: 'Sườn non heo', amount: '400g', category: 'Thịt & Đạm' },
      { name: 'Khoai tây, cà rốt, ngô ngọt', amount: '500g', category: 'Rau củ' },
      { name: 'Xà lách caron, cà chua bi', amount: '200g', category: 'Rau củ' },
      { name: 'Ớt chuông xanh đỏ, hành tây', amount: '200g', category: 'Rau củ' },
      { name: 'Bơ lạt, tỏi băm, giấm táo, dầu mè', amount: 'Vừa đủ', category: 'Gia vị' }
    ]
  }
];
