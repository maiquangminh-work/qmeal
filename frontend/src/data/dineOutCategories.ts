export interface DineOutSubtype {
  name: string;
  desc: string;
}

export interface MustTryDish {
  name: string;
  desc: string;
  highlight?: boolean;
}

export interface DineOutCategory {
  id: string;
  name: string;
  nameEn: string;
  tagline: string;
  taglineEn: string;
  icon: string;
  image: string;
  priceRange: string;
  priceRangeEn: string;
  budgetTier: 'budget' | 'medium' | 'premium';
  occasions: ('couple' | 'group' | 'family' | 'solo')[];
  vibe: string;
  vibeEn: string;
  subTypes: DineOutSubtype[];
  mustTryDishes: MustTryDish[];
  insiderTips: string[];
  mapsQuery: string;
}

export const dineOutCategories: DineOutCategory[] = [
  {
    id: 'lau',
    name: 'Đại Tiệc Lẩu Nghi Ngút Khói',
    nameEn: 'Hotpot Feast',
    tagline: 'Ấm áp quây quần, nước lẩu đậm đà nhúng thịt bò, hải sản và rau nấm tươi mát',
    taglineEn: 'Warm gathering around steaming broths, dipping fresh beef, seafood and crisp veggies',
    icon: '🍲',
    image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=800&q=80',
    priceRange: '150.000đ - 280.000đ / người',
    priceRangeEn: '$6 - $12 / person',
    budgetTier: 'medium',
    occasions: ['group', 'family', 'couple'],
    vibe: 'Tụ tập bạn bè, lai rai chém gió, gia đình quây quần ngày mưa hay se lạnh',
    vibeEn: 'Social gatherings, casual chit-chat, family weekend dinners',
    subTypes: [
      { name: 'Lẩu Thái Chua Cay', desc: 'Nước dùng sả ớt lá chanh cay nồng kích thích vị giác, hợp nhúng hải sản và bò' },
      { name: 'Lẩu Riêu Cua Bắp Bò Sườn Sụn', desc: 'Vị chua thanh giấm bỗng, riêu cua thơm béo ngậy ăn kèm hoa chuối và rau muống' },
      { name: 'Lẩu Ếch Măng Cay', desc: 'Thịt ếch xào săn chắc cay xé lưỡi quyện cùng măng củ chua giòn, hợp nhậu bạn bè' },
      { name: 'Lẩu Bò Nhúng Giấm', desc: 'Nước lẩu giấm thanh mát, cuốn bánh tráng rau rừng cùng bắp bò, gầu bò tái ngọt' },
      { name: 'Lẩu Nấm Dưỡng Sinh', desc: 'Nước hầm xương gà ngọt dịu tự nhiên, bổ sung hơn 10 loại nấm quý thanh lọc cơ thể' },
      { name: 'Lẩu Tứ Xuyên / Haidilao', desc: 'Dầu cay tê hoa tiêu chuẩn Trung Hoa, kết hợp 2 ngăn nước cốt xương và cay tê' }
    ],
    mustTryDishes: [
      { name: 'Bắp bò hoa & gầu bò giòn', desc: 'Thịt bò tươi nhúng vừa chín tới giòn sần sật, ngọt lịm', highlight: true },
      { name: 'Sườn sụn non chặt miếng', desc: 'Ninh mềm trong nồi lẩu riêu, ăn giòn sần sật bùi bùi' },
      { name: 'Tôm sú nhảy & mực trứng', desc: 'Nhúng lẩu Thái sôi sùng sục, chấm muối ớt xanh thơm nức mũi', highlight: true },
      { name: 'Viên thả lẩu phô mai trứng nhím', desc: 'Cắn vào phô mai béo ngậy hoặc trứng cá nổ tanh tách' },
      { name: 'Đậu phụ non & nấm kim châm', desc: 'Hút trọn tinh túy nước lẩu ngọt thơm' }
    ],
    insiderTips: [
      'Nên nhúng thịt bò và hải sản theo từng đợt vừa ăn, không thả hết một lúc để tránh làm nguội nước lẩu và thịt bị dai.',
      'Gọi rau ăn kèm theo đợt sau cùng để nước lẩu không bị loãng và đổi vị quá sớm.',
      'Ăn lẩu riêu cua nên vớt gạch cua ra bát trước khi sôi bùng, tránh làm gạch cua bị tan nát hết vào nước.'
    ],
    mapsQuery: 'quán lẩu ngon gần đây'
  },
  {
    id: 'nuong',
    name: 'Nướng Than Hoa & K-BBQ Xèo Xèo',
    nameEn: 'BBQ & Grilled Meats',
    tagline: 'Mùi thơm khói quyến rũ, thịt nướng xèo xèo cuốn lá kim chấm sốt ssamjang đẫm vị',
    taglineEn: 'Sizzling charred meats, wrapped in fresh perilla leaves and rich ssamjang dipping sauces',
    icon: '🥩',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
    priceRange: '180.000đ - 350.000đ / người',
    priceRangeEn: '$8 - $15 / person',
    budgetTier: 'medium',
    occasions: ['group', 'couple', 'family'],
    vibe: 'Không khí sôi động, tiếng xèo xèo vui tai, nâng ly cùng hội bạn thân',
    vibeEn: 'Lively atmosphere, smoky aroma, great beer with close friends',
    subTypes: [
      { name: 'Nướng Than Hoa Vỉa Hè', desc: 'Bò nướng bơ tảng, nầm nướng sốt me, lòng nướng sa tế đậm chất đường phố' },
      { name: 'K-BBQ Thịt Nướng Hàn Quốc', desc: 'Ba chỉ heo samgyeopsal, sườn bò ướp galbi nướng trên chảo gang chống dính' },
      { name: 'Yakiniku Nướng Nhật Bản', desc: 'Thịt bò Wagyu/Black Angus thái lát mỏng, nướng lửa lớn giữ trọn vị mọng nước' },
      { name: 'Nướng Ngói Đà Lạt', desc: 'Thịt và nấm chín đều trên ngói đất nung thoa dầu, không bị cháy xém than chì' }
    ],
    mustTryDishes: [
      { name: 'Bò nướng tảng sốt trứng muối', desc: 'Miếng thăn bò dày ngọt thịt chấm ngập chén sốt trứng muối béo ngậy', highlight: true },
      { name: 'Ba chỉ heo ướp sốt cay Gochujang', desc: 'Nướng giòn rụm bên ngoài mọng nước bên trong cuốn rau xà lách lá kê', highlight: true },
      { name: 'Nầm bò giòn sốt me tiêu đen', desc: 'Nầm giòn dai sần sật quyện sốt me chua ngọt đậm đà' },
      { name: 'Dẻ sườn bò Mỹ ướp mật ong', desc: 'Thịt thơm lừng, vân mỡ tan chảy mềm tan trong miệng' },
      { name: 'Bánh mì nướng bơ mật ong', desc: 'Ăn kèm chống ngấy và quết sốt nướng cực dính' }
    ],
    insiderTips: [
      'Nên nướng thịt có vân mỡ trước để mỡ chảy ra bôi trơn vỉ, tránh để các miếng thịt nạc sau bị dính và cháy vỉ.',
      'Yêu cầu nhân viên thay vỉ nướng thường xuyên (sau 2-3 đợt nướng) để tránh tro đen bám vào thịt gây đắng.',
      'Đừng lật thịt liên tục! Hãy đợi mặt dưới xém vàng đẹp mắt rồi mới lật một lần duy nhất để giữ trọn nước ngọt bên trong.'
    ],
    mapsQuery: 'quán nướng bbq ngon gần đây'
  },
  {
    id: 'oc-hai-san',
    name: 'Ốc & Hải Sản Vỉa Hè Đậm Vị',
    nameEn: 'Street Snails & Fresh Seafood',
    tagline: 'Sốt bơ tỏi thơm lừng chấm bánh mì, ốc hương, sò huyết, hàu nướng mỡ hành chuẩn bài lai rai',
    taglineEn: 'Garlic butter sauce with crispy bread, sweet snails, grilled oysters and zesty seafood dips',
    icon: '🐚',
    image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=800&q=80',
    priceRange: '100.000đ - 220.000đ / người',
    priceRangeEn: '$4 - $9 / person',
    budgetTier: 'budget',
    occasions: ['group', 'couple', 'solo'],
    vibe: 'Bình dân, gió mát vỉa hè, bàn ghế nhựa rôm rả tiếng cười nói về đêm',
    vibeEn: 'Chill street vibes, late-night open air talks with friends',
    subTypes: [
      { name: 'Ốc Sài Gòn Đủ Loại Sốt', desc: 'Sốt trứng muối béo ngậy, bơ tỏi, hoàng kim cay tê, xào me chua ngọt' },
      { name: 'Ốc Luộc Mắm Gừng Hà Nội', desc: 'Ốc mít, ốc vặn luộc lá bưởi chấm bát nước mắm gừng ớt tỏi băm thơm nồng' },
      { name: 'Hải Sản Tươi Nướng Mỡ Hành', desc: 'Hàu, sò lông, tu hài nướng than rưới mỡ hành thơm phức và đậu phộng rang' }
    ],
    mustTryDishes: [
      { name: 'Ốc hương xào bơ tỏi + Bánh mì nóng', desc: 'Ốc hương giòn ngọt cắn sần sật, chấm bánh mì vét sạch đáy đĩa sốt', highlight: true },
      { name: 'Hàu nướng mỡ hành & phô mai', desc: 'Hàu sữa béo múp míp nướng thơm lừng, ngậy tan trên đầu lưỡi', highlight: true },
      { name: 'Ốc móng tay xào rau muống tỏi', desc: 'Thịt móng tay béo ngậy ăn cùng cọng rau muống xanh mướt giòn rụm' },
      { name: 'Sò điệp nướng trứng cút', desc: 'Trứng cút lòng đào béo ngậy kết hợp sò điệp tươi rói' },
      { name: 'Càng ghẹ rang muối ớt kéo sợi', desc: 'Vỏ phủ lớp muối ớt cay xè thơm nức, thịt ghẹ chắc ngọt lịm' }
    ],
    insiderTips: [
      'Luôn gọi thêm 2-3 ổ bánh mì nóng giòn để quết sạch nước sốt bơ tỏi hoặc trứng muối thần thánh.',
      'Hãy thử pha nước chấm: muối tiêu chanh thêm chút ớt tươi và đường để tạo độ cân bằng vị chua mặn ngọt.',
      'Quan sát quầy chọn ốc tươi sống bơi trong chậu, ốc còn sống khi chạm vào sẽ tự thụt râu khép nắp.'
    ],
    mapsQuery: 'quán ốc ngon gần đây'
  },
  {
    id: 'buffet',
    name: 'Thiên Đường Buffet Ăn Thả Ga',
    nameEn: 'All-You-Can-Eat Buffet',
    tagline: 'Ăn không giới hạn với hàng trăm món tươi ngon: hải sản, nướng lẩu, sushi và quầy tráng miệng',
    taglineEn: 'Unlimited feast with hundreds of fresh delights: seafood, grill, hotpot, sushi and dessert bar',
    icon: '🍱',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80',
    priceRange: '230.000đ - 450.000đ / người',
    priceRangeEn: '$10 - $20 / person',
    budgetTier: 'premium',
    occasions: ['group', 'family'],
    vibe: 'Rộng rãi mát lạnh, tiệc sinh nhật liên hoan, gia đình nhiều lứa tuổi ăn uống thoải mái',
    vibeEn: 'Spacious AC halls, company parties, birthday celebrations',
    subTypes: [
      { name: 'Buffet Hải Sản Tôm Cua', desc: 'Cua hấp, ghẹ nhảy bể, tôm càng xanh, bề bề rang muối ăn tẹt ga' },
      { name: 'Buffet Nướng & Lẩu Kết Hợp', desc: 'Vừa nướng thịt bò nhập khẩu vừa húp lẩu kim chi/thái chua cay' },
      { name: 'Buffet Dimsum Chuẩn Trung Hoa', desc: 'Hơn 50 món há cảo tôm, bánh bao kim sa, chân gà tàu xì hấp nóng hổi' },
      { name: 'Buffet Lẩu Băng Chuyền', desc: 'Thịt bò, hải sản và nấm lướt nhẹ trước mắt tha hồ nhặt theo sở thích' }
    ],
    mustTryDishes: [
      { name: 'Ghẹ tươi & Tôm càng xanh nướng', desc: 'Vét trọn các đĩa hải sản nóng hổi vừa ra lò từ quầy line', highlight: true },
      { name: 'Dẻ sườn bò ướp sốt hảo hạng', desc: 'Nướng xèo xèo ăn kèm kim chi giải ngấy' },
      { name: 'Hàu nướng phô mai bỏ lò', desc: 'Phô mai mozarella kéo sợi dai thơm béo' },
      { name: 'Quầy Sashimi cá hồi tươi', desc: 'Cắt lát dày dặn chấm wasabi cay nồng', highlight: true },
      { name: 'Kem tươi & Chè khúc bạch tráng miệng', desc: 'Chốt hạ bữa tiệc ngọt ngào, mát lạnh' }
    ],
    insiderTips: [
      'Quy tắc vàng ăn buffet: Ưu tiên hải sản đắt tiền và thịt bò tươi trước; tránh ăn quá nhiều cơm, mì hay nước ngọt có ga lúc đầu.',
      'Lấy thức ăn mỗi lần một lượng vừa phải để đồ luôn nóng hổi và không bị phạt tiền vì để thừa.',
      'Canh giờ quầy line vừa châm đợt hải sản nóng mới để ra lấy ngay những con cua, ghẹ béo nhất.'
    ],
    mapsQuery: 'quán buffet nướng lẩu ngon gần đây'
  },
  {
    id: 'sushi-nhat',
    name: 'Sushi & Ẩm Thực Nhật Bản Tinh Tế',
    nameEn: 'Sushi & Japanese Dining',
    tagline: 'Sashimi cá hồi béo mọng tươi rói, sushi thanh tao, mì ramen đậm đà nước hầm xương tonkotsu',
    taglineEn: 'Melt-in-mouth salmon sashimi, delicate nigiri, and rich steaming bowls of tonkotsu ramen',
    icon: '🍣',
    image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=800&q=80',
    priceRange: '200.000đ - 450.000đ / người',
    priceRangeEn: '$9 - $20 / person',
    budgetTier: 'premium',
    occasions: ['couple', 'solo', 'group'],
    vibe: 'Yên tĩnh, chỉn chu, decor gỗ ấm cúng, cực kỳ lý tưởng cho hẹn hò và tiếp khách',
    vibeEn: 'Tranquil wooden ambiance, refined dining, perfect for romantic dates',
    subTypes: [
      { name: 'Sushi & Sashimi Bar', desc: 'Cá hồi Na Uy, cá ngừ đại dương, sò đỏ, cá trích ép trứng tươi sống thượng hạng' },
      { name: 'Mì Ramen & Udon Truyền Thống', desc: 'Nước dùng ninh xương 12 tiếng béo ngậy kèm trứng ngâm lòng đào ajitsuke tamago' },
      { name: 'Izakaya Quán Nhậu Kiểu Nhật', desc: 'Xiên que nướng yakitori, bánh xèo okonomiyaki nhâm nhi cùng bia tươi' },
      { name: 'Cơm Donburi & Cà Ri Nhật', desc: 'Cơm lươn nướng unadon, cơm bò gyudon, cơm thịt heo chiên katsudon' }
    ],
    mustTryDishes: [
      { name: 'Sashimi Cá Hồi Bụng Béo (Shake Toro)', desc: 'Vân mỡ cá hồi đan xen hoàn mỹ, tan chảy ngay trên đầu lưỡi', highlight: true },
      { name: 'Nigiri Bò Wagyu Khò Lửa Sốt Teriyaki', desc: 'Thịt bò mọng nước xém thơm mùi khói quyện cơm giấm dẻo', highlight: true },
      { name: 'Maki Cuộn Cá Hồi Bơ Phô Mai', desc: 'Vị béo ngậy mềm mịn của quả bơ kết hợp trứng cá chuồn nổ tanh tách' },
      { name: 'Mì Tonkotsu Ramen Thịt Chashu', desc: 'Sợi mì tươi dai sần sật trong nước cốt xương heo trắng sữa đặc sánh' },
      { name: 'Trứng Hấp Chawanmushi Hải Sản', desc: 'Mịn như thạch, ngọt thanh từ tôm và nấm hương' }
    ],
    insiderTips: [
      'Khi ăn sushi, hãy chấm phần thịt/cá vào nước tương chứ không chấm phần cơm gạo giấm để cơm không bị rã rời.',
      'Gừng hồng chua ngọt (Gari) dùng để ăn giữa hai loại cá khác nhau giúp làm sạch vòm họng và cảm nhận trọn vẹn vị tươi mới.',
      'Không nên khuấy tan wasabi vào bát nước tương lớn; hãy đặt một ít wasabi trực tiếp lên miếng cá rồi chấm nhẹ tương.'
    ],
    mapsQuery: 'quán sushi nhật bản ngon gần đây'
  },
  {
    id: 'an-vat-via-he',
    name: 'Ăn Vặt & Món Nước Phố Xá',
    nameEn: 'Street Food & Noodles',
    tagline: 'Bún đậu mắm tôm thập cẩm, bún chả que tre, phở tái lăn, nem chua rán và bánh tráng cuốn',
    taglineEn: 'Legendary vermicelli with tofu & shrimp paste, grilled pork patties, street skewers & crispy snacks',
    icon: '🍜',
    image: 'https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?auto=format&fit=crop&w=800&q=80',
    priceRange: '45.000đ - 90.000đ / người',
    priceRangeEn: '$2 - $4 / person',
    budgetTier: 'budget',
    occasions: ['solo', 'couple', 'group'],
    vibe: 'Nhanh gọn, thơm lừng ngõ phố, vừa ăn vừa ngắm dòng xe cộ tấp nập',
    vibeEn: 'Casual, fast, deeply satisfying local street corners',
    subTypes: [
      { name: 'Bún Đậu Mắm Tôm Mẹt', desc: 'Đậu mơ rán giòn vỏ mềm ruột, chả cốm dẻo thơm, thịt chân giò luộc, dồi chiên' },
      { name: 'Bún Chả Than Hoa Hà Nội', desc: 'Chả băm chả miếng nướng xém cạnh trong bát nước chấm đu đủ cà rốt ấm nóng' },
      { name: 'Thiên Đường Xiên Que & Nem Chua', desc: 'Nem chua rán bùi bùi, khoai tây lắc phô mai, bánh tráng nướng trứng cút' },
      { name: 'Mì Cay 7 Cấp Độ Hàn Quốc', desc: 'Thố đất sôi sùng sục đầy ắp tôm mực bò Mỹ thử thách độ chịu cay' }
    ],
    mustTryDishes: [
      { name: 'Mẹt bún đậu thập cẩm đặc biệt', desc: 'Đầy đủ chả cốm, nem rán, lòng dồi, chấm bát mắm tôm đánh sủi bọt quất ớt', highlight: true },
      { name: 'Nem chua rán phố cổ nóng hổi', desc: 'Vỏ giòn rụm bên trong dẻo dai chấm tương ớt cay nồng' },
      { name: 'Bún chả nướng than hoa kẹp que tre', desc: 'Thơm nức mùi caramel thịt cháy cạnh ăn kèm đĩa bún sợi nhỏ tươi mới', highlight: true },
      { name: 'Bánh tráng nướng trứng bò khô', desc: 'Giòn rụm như pizza Việt Nam với sốt mayonnaise béo ngậy' },
      { name: 'Trứng cút lộn xào me chua cay', desc: 'Nước sốt sánh sệt rắc đậu phộng rau răm cực bánh cuốn' }
    ],
    insiderTips: [
      'Muốn ăn bún đậu mắm tôm chuẩn vị: Cho thêm 1 thìa đường, vắt 2 quả quất, chút ớt băm và 1 thìa dầu mỡ sôi từ chảo rán đậu rồi đánh bông bọt.',
      'Bún chả ngon nhất là lúc chả vừa nhấc khỏi vỉ nướng than hồng, ăn ngay khi bát nước mắm còn ấm.',
      'Đi ăn vặt buổi chiều từ 16h30 đến 19h là khung giờ các quán vừa chiên đồ mới giòn và ngon nhất.'
    ],
    mapsQuery: 'quán ăn vặt bún đậu ngon gần đây'
  },
  {
    id: 'tra-sua-cafe',
    name: 'Trà Sữa, Cà Phê & Chém Gió',
    nameEn: 'Milk Tea, Coffee & Chill',
    tagline: 'Trà sen vàng ngọt bùi, cà phê muối đậm đà, bingsu mát lạnh cùng không gian sống ảo chill hết nấc',
    taglineEn: 'Lotus seed tea, salted Vietnamese coffee, icy bingsu and aesthetic spaces to relax with friends',
    icon: '🧋',
    image: 'https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=800&q=80',
    priceRange: '35.000đ - 70.000đ / ly',
    priceRangeEn: '$1.5 - $3 / cup',
    budgetTier: 'budget',
    occasions: ['couple', 'group', 'solo'],
    vibe: 'Âm nhạc du dương, điều hòa mát rượi, góc chụp ảnh đẹp hoặc vỉa hè ngắm phố',
    vibeEn: 'Cozy background tunes, chill AC breeze, Instagrammable spots',
    subTypes: [
      { name: 'Cà Phê Đặc Sản Việt Nam', desc: 'Cà phê muối béo mặn, cà phê trứng ngậy mịn, bạc xỉu 3 tầng thơm ngọt' },
      { name: 'Trà Sữa Trân Châu Đài Loan', desc: 'Trà sữa ô long nướng, trà sữa trân châu đường đen, kem cheese macchiato mặn mà' },
      { name: 'Trà Trái Cây Thanh Nhiệt', desc: 'Trà sen vàng củ năng, trà ổi hồng dâu tây, trà đào cam sả thanh mát' },
      { name: 'Tráng Miệng Bingsu & Chè Thái', desc: 'Bingsu xoài tuyết bào mịn màng phủ kem vani, chè bưởi chè sầu thơm nức mũi' }
    ],
    mustTryDishes: [
      { name: 'Cà phê muối xứ Huế', desc: 'Lớp kem béo mằn mặn hòa quyện vị cà phê đậm đà đánh thức mọi giác quan', highlight: true },
      { name: 'Trà sen vàng kem macchiato', desc: 'Hạt sen bùi dẻo thơm, củ năng giòn sần sật trong nền trà ô long thơm ngát', highlight: true },
      { name: 'Trà sữa trân châu đường đen', desc: 'Trân châu dẻo mềm ấm nóng quyện sữa tươi thanh trùng béo ngậy' },
      { name: 'Bingsu dưa lưới tuyết sữa', desc: 'Tuyết sữa mềm tan xốp như mây cùng từng viên dưa lưới tươi giòn ngọt lịm' },
      { name: 'Trà đào cam sả truyền thống', desc: 'Vị sả thơm lừng kết hợp vị chua ngọt giải nhiệt ngày hè cực đỉnh' }
    ],
    insiderTips: [
      'Khi gọi trà sữa, mức đường đá lý tưởng của đa số quán là 50% đường và 70% đá để giữ được hương thơm tự nhiên của trà mà không bị quá ngọt.',
      'Muốn uống cà phê muối ngon, đừng khuấy vội! Hãy nhấp một ngụm đầu tiên để cảm nhận lớp kem mặn chảy qua vòm họng trước rồi mới thưởng thức cùng cà phê.',
      'Nếu muốn làm việc hoặc học tập, hãy chọn các quán cafe có bàn lớn có ổ cắm điện; nếu để tụ tập thì quán có ban công vỉa hè là chill nhất.'
    ],
    mapsQuery: 'quán cafe trà sữa đẹp gần đây'
  },
  {
    id: 'com-nieu-gia-dinh',
    name: 'Cơm Niêu & Ẩm Thực Gia Đình',
    nameEn: 'Claypot Rice & Family Cuisine',
    tagline: 'Cơm niêu cháy giòn rụm, cá kho tộ đậm đà, canh cua mồng tơi cà pháo chuẩn cơm mẹ nấu',
    taglineEn: 'Crispy scorched claypot rice, caramelized braised fish, sour soups and home-cooked comfort',
    icon: '🥘',
    image: 'https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&w=800&q=80',
    priceRange: '120.000đ - 220.000đ / người',
    priceRangeEn: '$5 - $10 / person',
    budgetTier: 'medium',
    occasions: ['family', 'group', 'solo'],
    vibe: 'Ấm cúng, mộc mạc, chén đĩa gốm sứ xưa, đậm đà tình cảm sum vầy bữa cơm truyền thống',
    vibeEn: 'Warm, rustic, vintage ceramic ware, comforting family meal feeling',
    subTypes: [
      { name: 'Cơm Niêu Cháy Đập', desc: 'Niêu đất đập vỡ lộ ra lớp cơm cháy vàng ruộm giòn tan rưới mỡ hành thơm phức' },
      { name: 'Ẩm Thực Bắc Bộ Chuẩn Vị', desc: 'Cá trắm kho riềng, thịt ba chỉ luộc chấm mắm tôm cà pháo, canh sấu sườn non' },
      { name: 'Ẩm Thực Miền Tây Sông Nước', desc: 'Cá kho tộ sền sệt kẹo đường, bông điên điển xào tép, canh chua cá lóc' }
    ],
    mustTryDishes: [
      { name: 'Cơm cháy niêu quẹt kho quẹt tóp mỡ', desc: 'Cơm cháy giòn rụm chấm nồi kho quẹt nâu óng thơm nức mùi nước mắm cốt', highlight: true },
      { name: 'Cá bống / Cá quả kho tộ đậm đà', desc: 'Thịt cá săn chắc ngấm gia vị tiêu ớt cay the, rưới nước kho lên cơm trắng nóng hổi', highlight: true },
      { name: 'Canh cua đồng rau mồng tơi cà pháo giòn', desc: 'Gạch cua béo ngậy thanh mát giải ngấy tức thì' },
      { name: 'Sườn xào chua ngọt óng ả', desc: 'Sườn non mềm róc xương sốt sánh vàng óng chua ngọt vừa vặn' },
      { name: 'Rau củ luộc thập cẩm chấm kho quẹt', desc: 'Đậu bắp, bầu non, cà rốt ngọt tự nhiên giữ nguyên độ giòn' }
    ],
    insiderTips: [
      'Đi ăn cơm niêu theo nhóm 3-4 người trở lên là hợp lý nhất để gọi được mâm cơm đầy đặn gồm món mặn, món xào và bát canh lớn.',
      'Hãy yêu cầu quán làm "cơm cháy hai mặt" nếu bạn và gia đình là tín đồ thích ăn giòn rụm rưới mỡ hành.',
      'Cơm niêu rất thích hợp để tiếp đãi người lớn tuổi trong gia đình hoặc tiếp khách đối tác muốn thưởng thức phong vị Việt mộc mạc.'
    ],
    mapsQuery: 'quán cơm niêu ngon gần đây'
  }
];
