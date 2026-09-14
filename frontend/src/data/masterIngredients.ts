export interface MasterIngredient {
  id: string;
  name: {
    vi: string;
    en: string;
  };
  category: 'meat' | 'seafood' | 'vegetable' | 'mushroom' | 'egg_tofu' | 'carb' | 'herb_spice' | 'pantry';
  icon: string;
  aliases: string[]; // Keywords & variations for autocomplete and matching
  commonStaple?: boolean; // Gia vị/nguyên liệu thường trực trong bếp
}

export const MASTER_INGREDIENTS: MasterIngredient[] = [
  // ================= 1. THỊT (MEAT) =================
  {
    id: 'thit-ba-chi',
    name: { vi: 'Thịt ba chỉ (ba rọi)', en: 'Pork belly' },
    category: 'meat',
    icon: '🥓',
    aliases: ['thit ba chi', 'ba chi', 'ba roi', 'thịt ba rọi', 'thit heo ba chi', 'thịt lợn ba chỉ']
  },
  {
    id: 'thit-thap-cam-heo',
    name: { vi: 'Thịt nạc heo (thịt lợn)', en: 'Lean pork' },
    category: 'meat',
    icon: '🥩',
    aliases: ['thit heo', 'thit lon', 'nac heo', 'nac vai', 'thịt nạc dăm', 'thịt mông']
  },
  {
    id: 'thit-heo-xay',
    name: { vi: 'Thịt heo xay (thịt băm)', en: 'Minced pork' },
    category: 'meat',
    icon: '🥣',
    aliases: ['thit xay', 'thit bam', 'thịt băm', 'thit lon xay', 'gio song']
  },
  {
    id: 'suon-heo',
    name: { vi: 'Sườn heo (sườn non)', en: 'Pork ribs' },
    category: 'meat',
    icon: '🍖',
    aliases: ['suon heo', 'suon non', 'sườn lợn', 'suon sun', 'sườn sụn']
  },
  {
    id: 'mong-gio',
    name: { vi: 'Chân giò / Móng giò', en: 'Pork trotter / hock' },
    category: 'meat',
    icon: '🍖',
    aliases: ['mong gio', 'chan gio', 'thịt chân giò', 'gio heo']
  },
  {
    id: 'thit-bo',
    name: { vi: 'Thịt bò (thăn bò, nạm bò)', en: 'Beef' },
    category: 'meat',
    icon: '🥩',
    aliases: ['thit bo', 'bo', 'thit than bo', 'bap bo', 'nam bo', 'bò tái', 'thăn bò', 'bắp bò']
  },
  {
    id: 'xuong-bo',
    name: { vi: 'Xương bò (ninh nước dùng)', en: 'Beef marrow bones' },
    category: 'meat',
    icon: '🦴',
    aliases: ['xuong bo', 'xuong ong bo', 'duoi bo', 'xương hầm']
  },
  {
    id: 'thit-ga',
    name: { vi: 'Thịt gà (gà ta, ức gà)', en: 'Chicken' },
    category: 'meat',
    icon: '🍗',
    aliases: ['thit ga', 'ga', 'uc ga', 'dui ga', 'canh ga', 'gà ta', 'thịt gà xé']
  },
  {
    id: 'thit-vit',
    name: { vi: 'Thịt vịt', en: 'Duck' },
    category: 'meat',
    icon: '🍗',
    aliases: ['thit vit', 'vit', 'thịt ngan', 'ngan']
  },
  {
    id: 'gio-lua',
    name: { vi: 'Giò lụa (chả lụa)', en: 'Vietnamese pork sausage (Gio lua)' },
    category: 'meat',
    icon: '🥢',
    aliases: ['gio lua', 'cha lua', 'giò tai', 'chả quế', 'chả cốm']
  },
  {
    id: 'bo-kho-xe',
    name: { vi: 'Bò khô xé sợi', en: 'Dried beef jerky strips' },
    category: 'meat',
    icon: '🥩',
    aliases: ['bo kho', 'thit bo kho', 'bò khô']
  },

  // ================= 2. THỦY HẢI SẢN (SEAFOOD) =================
  {
    id: 'tom-tuoi',
    name: { vi: 'Tôm tươi (tôm sú, tôm đồng)', en: 'Fresh shrimp' },
    category: 'seafood',
    icon: '🦐',
    aliases: ['tom', 'tom tuoi', 'tom su', 'tom dong', 'tép', 'tôm khô', 'tep dong']
  },
  {
    id: 'cua-dong',
    name: { vi: 'Cua đồng (riêu cua)', en: 'Field crab (paddy crab)' },
    category: 'seafood',
    icon: '🦀',
    aliases: ['cua dong', 'rieu cua', 'cua', 'thịt cua', 'gạch cua']
  },
  {
    id: 'ghe-bien',
    name: { vi: 'Ghẹ biển / Cua biển', en: 'Sea crab / Blue crab' },
    category: 'seafood',
    icon: '🦀',
    aliases: ['ghe', 'cua bien', 'thit ghe', 'thịt cua biển']
  },
  {
    id: 'muc-tuoi',
    name: { vi: 'Mực tươi (mực ống, mực lá)', en: 'Fresh squid' },
    category: 'seafood',
    icon: '🦑',
    aliases: ['muc', 'muc ong', 'muc la', 'mực tươi', 'mực nhồi']
  },
  {
    id: 'ca-loc',
    name: { vi: 'Cá lóc (cá quả)', en: 'Snakehead fish' },
    category: 'seafood',
    icon: '🐟',
    aliases: ['ca loc', 'ca qua', 'cá lóc đồng', 'phi le ca loc']
  },
  {
    id: 'ca-chep',
    name: { vi: 'Cá chép', en: 'Carp fish' },
    category: 'seafood',
    icon: '🐟',
    aliases: ['ca chep', 'cá chép giòn', 'khúc cá chép']
  },
  {
    id: 'ca-dieu-hong',
    name: { vi: 'Cá điêu hồng (cá rô phi)', en: 'Red tilapia' },
    category: 'seafood',
    icon: '🐟',
    aliases: ['ca dieu hong', 'ca ro phi', 'cá điêu hồng chiên']
  },
  {
    id: 'ca-bong',
    name: { vi: 'Cá bống', en: 'Goby fish' },
    category: 'seafood',
    icon: '🐟',
    aliases: ['ca bong', 'ca bong cat', 'cá bống kho']
  },
  {
    id: 'ca-nuc',
    name: { vi: 'Cá nục / Cá thu', en: 'Scad / Mackerel' },
    category: 'seafood',
    icon: '🐟',
    aliases: ['ca nuc', 'ca thu', 'ca bien']
  },
  {
    id: 'ca-thac-lac',
    name: { vi: 'Cá thát lát (chả cá)', en: 'Clown knifefish (fish paste)' },
    category: 'seafood',
    icon: '🐟',
    aliases: ['ca thac lac', 'cha ca thac lac', 'chả cá']
  },
  {
    id: 'ngao-ngheu',
    name: { vi: 'Ngao / Nghêu tươi', en: 'Fresh clams' },
    category: 'seafood',
    icon: '🦪',
    aliases: ['ngao', 'ngheu', 'ngao chua', 'nghêu trắng']
  },
  {
    id: 'oc-buou',
    name: { vi: 'Ốc nhồi / Ốc bươu', en: 'Snails (Apple snails)' },
    category: 'seafood',
    icon: '🐚',
    aliases: ['oc', 'oc buou', 'oc nhoi', 'oc van', 'thịt ốc']
  },
  {
    id: 'luon-dong',
    name: { vi: 'Lươn đồng', en: 'Swamp eel' },
    category: 'seafood',
    icon: '🐟',
    aliases: ['luon', 'luon dong', 'lươn giòn', 'thịt lươn']
  },
  {
    id: 'hen-dong',
    name: { vi: 'Hến đồng', en: 'Baby basket clams' },
    category: 'seafood',
    icon: '🦪',
    aliases: ['hen', 'hen dong', 'thịt hến']
  },

  // ================= 3. TRỨNG & ĐẬU (EGGS & TOFU) =================
  {
    id: 'trung-ga',
    name: { vi: 'Trứng gà', en: 'Chicken eggs' },
    category: 'egg_tofu',
    icon: '🥚',
    aliases: ['trung ga', 'trung', 'hột gà'],
    commonStaple: true
  },
  {
    id: 'trung-vit',
    name: { vi: 'Trứng vịt', en: 'Duck eggs' },
    category: 'egg_tofu',
    icon: '🥚',
    aliases: ['trung vit', 'hột vịt']
  },
  {
    id: 'trung-cut',
    name: { vi: 'Trứng cút', en: 'Quail eggs' },
    category: 'egg_tofu',
    icon: '🥚',
    aliases: ['trung cut', 'hột cút']
  },
  {
    id: 'dau-phu',
    name: { vi: 'Đậu phụ (đậu hũ)', en: 'Tofu' },
    category: 'egg_tofu',
    icon: '🧈',
    aliases: ['dau phu', 'dau hu', 'đậu phụ mơ', 'đậu hũ trắng', 'đậu rán']
  },

  // ================= 4. RAU CỦ QUẢ (VEGETABLES) =================
  {
    id: 'ca-chua',
    name: { vi: 'Cà chua', en: 'Tomato' },
    category: 'vegetable',
    icon: '🍅',
    aliases: ['ca chua', 'cà chua chín'],
    commonStaple: true
  },
  {
    id: 'rau-muong',
    name: { vi: 'Rau muống', en: 'Water spinach (Morning glory)' },
    category: 'vegetable',
    icon: '🥬',
    aliases: ['rau muong', 'muống non']
  },
  {
    id: 'bap-cai',
    name: { vi: 'Bắp cải (cải bắp)', en: 'Cabbage' },
    category: 'vegetable',
    icon: '🥬',
    aliases: ['bap cai', 'cai bap', 'lá bắp cải']
  },
  {
    id: 'cai-ngong',
    name: { vi: 'Rau cải ngồng / Cải ngọt', en: 'Choy sum / Gai lan' },
    category: 'vegetable',
    icon: '🥬',
    aliases: ['cai ngong', 'cai ngot', 'cải bẹ xanh', 'rau cai']
  },
  {
    id: 'rau-ngot',
    name: { vi: 'Rau ngót', en: 'Katuk (Sweet leaf)' },
    category: 'vegetable',
    icon: '🌿',
    aliases: ['rau ngot', 'lá rau ngót']
  },
  {
    id: 'rau-mong-toi',
    name: { vi: 'Rau mồng tơi & Rau đay', en: 'Malabar spinach & Jute potherb' },
    category: 'vegetable',
    icon: '🥬',
    aliases: ['rau mong toi', 'rau day', 'mồng tơi']
  },
  {
    id: 'bi-dao',
    name: { vi: 'Bí đao (bí xanh)', en: 'Winter melon' },
    category: 'vegetable',
    icon: '🥒',
    aliases: ['bi dao', 'bi xanh', 'bí đao']
  },
  {
    id: 'bau-sao',
    name: { vi: 'Quả bầu', en: 'Bottle gourd' },
    category: 'vegetable',
    icon: '🥒',
    aliases: ['bau', 'qua bau', 'bầu non']
  },
  {
    id: 'muop-huong',
    name: { vi: 'Mướp hương', en: 'Luffa (Sponge gourd)' },
    category: 'vegetable',
    icon: '🥒',
    aliases: ['muop', 'muop huong', 'quả mướp']
  },
  {
    id: 'kho-qua',
    name: { vi: 'Mướp đắng (khổ qua)', en: 'Bitter melon' },
    category: 'vegetable',
    icon: '🥒',
    aliases: ['kho qua', 'muop dang', 'trái khổ qua']
  },
  {
    id: 'hoa-thien-ly',
    name: { vi: 'Hoa thiên lý', en: 'Telosma cordata flowers' },
    category: 'vegetable',
    icon: '🌸',
    aliases: ['hoa thien ly', 'thien ly']
  },
  {
    id: 'su-su',
    name: { vi: 'Su su', en: 'Chayote' },
    category: 'vegetable',
    icon: '🍐',
    aliases: ['su su', 'qua su su', 'ngọn su su']
  },
  {
    id: 'dau-cove',
    name: { vi: 'Đậu cô ve (đậu que)', en: 'Green beans' },
    category: 'vegetable',
    icon: '🫘',
    aliases: ['dau cove', 'dau que', 'đậu cove']
  },
  {
    id: 'dau-bap',
    name: { vi: 'Đậu bắp', en: 'Okra' },
    category: 'vegetable',
    icon: '🫘',
    aliases: ['dau bap', 'bắp non']
  },
  {
    id: 'bong-cai',
    name: { vi: 'Súp lơ (bông cải xanh / trắng)', en: 'Broccoli / Cauliflower' },
    category: 'vegetable',
    icon: '🥦',
    aliases: ['sup lo', 'bong cai', 'bông cải xanh']
  },
  {
    id: 'mang-tay',
    name: { vi: 'Măng tây', en: 'Asparagus' },
    category: 'vegetable',
    icon: '🌱',
    aliases: ['mang tay']
  },
  {
    id: 'mang-chua',
    name: { vi: 'Măng chua / Măng tươi', en: 'Sour bamboo shoots' },
    category: 'vegetable',
    icon: '🎍',
    aliases: ['mang chua', 'mang tuoi', 'măng lá', 'măng củ']
  },
  {
    id: 'doc-mung',
    name: { vi: 'Dọc mùng (bạc hà)', en: 'Alocasia odora stems' },
    category: 'vegetable',
    icon: '🌱',
    aliases: ['doc mung', 'bac ha', 'dọc mùng tước vỏ']
  },
  {
    id: 'khoai-tay',
    name: { vi: 'Khoai tây', en: 'Potato' },
    category: 'vegetable',
    icon: '🥔',
    aliases: ['khoai tay', 'củ khoai tây']
  },
  {
    id: 'ca-rot',
    name: { vi: 'Cà rốt', en: 'Carrot' },
    category: 'vegetable',
    icon: '🥕',
    aliases: ['ca rot', 'củ cà rốt']
  },
  {
    id: 'khoai-mo',
    name: { vi: 'Khoai mỡ / Khoai sọ', en: 'Purple yam / Taro' },
    category: 'vegetable',
    icon: '🍠',
    aliases: ['khoai mo', 'khoai so', 'khoai môn']
  },
  {
    id: 'cu-sen',
    name: { vi: 'Củ sen / Ngó sen', en: 'Lotus root / stem' },
    category: 'vegetable',
    icon: '🪷',
    aliases: ['cu sen', 'ngo sen', 'hạt sen']
  },
  {
    id: 'gia-do',
    name: { vi: 'Giá đỗ tươi', en: 'Bean sprouts' },
    category: 'vegetable',
    icon: '🌱',
    aliases: ['gia do', 'gia song', 'giá']
  },
  {
    id: 'du-du-xanh',
    name: { vi: 'Đu đủ xanh', en: 'Green papaya' },
    category: 'vegetable',
    icon: '🍈',
    aliases: ['du du', 'du du xanh', 'đu đủ bào sợi']
  },
  {
    id: 'xoai-xanh',
    name: { vi: 'Xoài xanh', en: 'Green mango' },
    category: 'vegetable',
    icon: '🥭',
    aliases: ['xoai xanh', 'xoài chua']
  },
  {
    id: 'dua-leo',
    name: { vi: 'Dưa chuột (dưa leo)', en: 'Cucumber' },
    category: 'vegetable',
    icon: '🥒',
    aliases: ['dua chuot', 'dua leo']
  },

  // ================= 5. NẤM (MUSHROOMS) =================
  {
    id: 'nam-huong',
    name: { vi: 'Nấm hương (nấm đông cô)', en: 'Shiitake mushrooms' },
    category: 'mushroom',
    icon: '🍄',
    aliases: ['nam huong', 'nam dong co', 'nấm hương khô']
  },
  {
    id: 'moc-nhi',
    name: { vi: 'Mộc nhĩ (nấm mèo)', en: 'Wood ear fungus' },
    category: 'mushroom',
    icon: '🍄',
    aliases: ['moc nhi', 'nam meo', 'mộc nhĩ ngâm']
  },
  {
    id: 'nam-dui-ga',
    name: { vi: 'Nấm đùi gà', en: 'King oyster mushroom' },
    category: 'mushroom',
    icon: '🍄',
    aliases: ['nam dui ga']
  },
  {
    id: 'nam-rom',
    name: { vi: 'Nấm rơm', en: 'Straw mushroom' },
    category: 'mushroom',
    icon: '🍄',
    aliases: ['nam rom', 'nấm rơm tươi']
  },
  {
    id: 'nam-kim-cham',
    name: { vi: 'Nấm kim châm', en: 'Enoki mushroom' },
    category: 'mushroom',
    icon: '🍄',
    aliases: ['nam kim cham']
  },

  // ================= 6. TINH BỘT & BÚN PHỞ (CARBS & NOODLES) =================
  {
    id: 'banh-pho',
    name: { vi: 'Bánh phở tươi', en: 'Fresh flat rice noodles' },
    category: 'carb',
    icon: '🍜',
    aliases: ['banh pho', 'pho tuoi', 'bánh phở Hà Nội']
  },
  {
    id: 'bun-tuoi',
    name: { vi: 'Bún tươi (bún sợi nhỏ/bún Huế)', en: 'Fresh rice vermicelli' },
    category: 'carb',
    icon: '🍜',
    aliases: ['bun tuoi', 'bun soi nho', 'bun to', 'bún lá']
  },
  {
    id: 'banh-mi',
    name: { vi: 'Bánh mì giòn', en: 'Vietnamese baguette' },
    category: 'carb',
    icon: '🥖',
    aliases: ['banh mi', 'ổ bánh mì']
  },
  {
    id: 'mien-dong',
    name: { vi: 'Miến dong (bún tàu)', en: 'Cellophane / Glass noodles' },
    category: 'carb',
    icon: '🍜',
    aliases: ['mien', 'mien dong', 'bun tau']
  },
  {
    id: 'hu-tieu',
    name: { vi: 'Hủ tiếu dai / Mì Quảng', en: 'Hu Tieu noodles / Mi Quang' },
    category: 'carb',
    icon: '🍜',
    aliases: ['hu tieu', 'mi quang', 'bánh canh', 'cao lầu']
  },
  {
    id: 'banh-trang',
    name: { vi: 'Bánh tráng cuốn / Bánh đa nem', en: 'Rice paper wrappers' },
    category: 'carb',
    icon: '🫓',
    aliases: ['banh trang', 'banh da nem', 'bánh tráng mè']
  },
  {
    id: 'gao-nep',
    name: { vi: 'Gạo nếp (nấu xôi)', en: 'Glutinous sticky rice' },
    category: 'carb',
    icon: '🍚',
    aliases: ['gao nep', 'nep cai hoa vang', 'gạo nếp']
  },
  {
    id: 'com-nguoi',
    name: { vi: 'Cơm nguội (để chiên/rang)', en: 'Cooked rice' },
    category: 'carb',
    icon: '🍚',
    aliases: ['com', 'com nguoi', 'cơm tấm']
  },

  // ================= 7. RAU THƠM & THẢO MỘC (HERBS & AROMATICS) =================
  {
    id: 'hanh-la',
    name: { vi: 'Hành lá (hành hoa)', en: 'Scallions / Spring onions' },
    category: 'herb_spice',
    icon: '🌱',
    aliases: ['hanh la', 'hanh hoa', 'đầu hành'],
    commonStaple: true
  },
  {
    id: 'hanh-tay',
    name: { vi: 'Hành tây', en: 'Yellow / White onion' },
    category: 'herb_spice',
    icon: '🧅',
    aliases: ['hanh tay', 'củ hành tây']
  },
  {
    id: 'gung-tuoi',
    name: { vi: 'Gừng tươi', en: 'Fresh ginger' },
    category: 'herb_spice',
    icon: '🫚',
    aliases: ['gung', 'gung tuoi', 'nhánh gừng'],
    commonStaple: true
  },
  {
    id: 'toi',
    name: { vi: 'Tỏi tươi', en: 'Garlic' },
    category: 'herb_spice',
    icon: '🧄',
    aliases: ['toi', 'toi bam', 'củ tỏi'],
    commonStaple: true
  },
  {
    id: 'hanh-kho',
    name: { vi: 'Hành khô (hành tím)', en: 'Shallots' },
    category: 'herb_spice',
    icon: '🧅',
    aliases: ['hanh kho', 'hanh tim', 'hành phi'],
    commonStaple: true
  },
  {
    id: 'ot-tuoi',
    name: { vi: 'Ớt tươi (ớt chỉ thiên)', en: 'Fresh chili' },
    category: 'herb_spice',
    icon: '🌶️',
    aliases: ['ot', 'ot tuoi', 'ớt hiểm', 'ớt bột'],
    commonStaple: true
  },
  {
    id: 'chanh-tuoi',
    name: { vi: 'Chanh tươi (quất / tắc)', en: 'Fresh lime / Calamansi' },
    category: 'herb_spice',
    icon: '🍋',
    aliases: ['chanh', 'quat', 'tac', 'nước cốt chanh'],
    commonStaple: true
  },
  {
    id: 'sa-cay',
    name: { vi: 'Sả cây', en: 'Lemongrass' },
    category: 'herb_spice',
    icon: '🌾',
    aliases: ['sa', 'sa cay', 'sả băm']
  },
  {
    id: 'rau-mui',
    name: { vi: 'Rau mùi (ngò rí) & Mùi tàu (ngò gai)', en: 'Cilantro & Sawtooth herb' },
    category: 'herb_spice',
    icon: '🌿',
    aliases: ['rau mui', 'ngo ri', 'mui tau', 'ngo gai']
  },
  {
    id: 'hung-que',
    name: { vi: 'Húng quế / Kinh giới / Tía tô', en: 'Thai basil & Perilla' },
    category: 'herb_spice',
    icon: '🌿',
    aliases: ['hung que', 'kinh gioi', 'tia to', 'rau thơm']
  },
  {
    id: 'thi-la',
    name: { vi: 'Thì là', en: 'Fresh dill' },
    category: 'herb_spice',
    icon: '🌿',
    aliases: ['thi la', 'rau thì là']
  },
  {
    id: 'nghe-tuoi',
    name: { vi: 'Nghệ tươi (hoặc bột nghệ)', en: 'Fresh turmeric' },
    category: 'herb_spice',
    icon: '🫚',
    aliases: ['nghe', 'nghe tuoi', 'bot nghe']
  },
  {
    id: 'rieng-tuoi',
    name: { vi: 'Củ riềng & Mẻ chua', en: 'Galangal & Fermented rice (Me)' },
    category: 'herb_spice',
    icon: '🫚',
    aliases: ['rieng', 'cu rieng', 'me chua', 'com me']
  },
  {
    id: 'qua-sau',
    name: { vi: 'Quả sấu / Me chua / Quả dọc', en: 'Dracontomelon (Sau) / Tamarind' },
    category: 'herb_spice',
    icon: '🫒',
    aliases: ['sau', 'qua sau', 'me', 'me chua', 'tai chua']
  },

  // ================= 8. GIA VỊ BẾP ĐẶC TRƯNG (PANTRY STAPLES) =================
  {
    id: 'nuoc-mam',
    name: { vi: 'Nước mắm truyền thống', en: 'Fish sauce' },
    category: 'pantry',
    icon: '🍶',
    aliases: ['nuoc mam', 'mam ngon'],
    commonStaple: true
  },
  {
    id: 'mam-tom',
    name: { vi: 'Mắm tôm Bắc', en: 'Shrimp paste' },
    category: 'pantry',
    icon: '🥣',
    aliases: ['mam tom', 'mắm tôm']
  },
  {
    id: 'mam-ruoc',
    name: { vi: 'Mắm ruốc Huế / Mắm nêm', en: 'Fermented shrimp/anchovy sauce' },
    category: 'pantry',
    icon: '🥣',
    aliases: ['mam ruoc', 'mam nem']
  },
  {
    id: 'dau-hao',
    name: { vi: 'Dầu hào / Dầu mè', en: 'Oyster sauce / Sesame oil' },
    category: 'pantry',
    icon: '🍶',
    aliases: ['dau hao', 'dau me', 'xì dầu', 'nước tương'],
    commonStaple: true
  },
  {
    id: 'tieu-den',
    name: { vi: 'Hạt tiêu (tiêu xay)', en: 'Black pepper' },
    category: 'pantry',
    icon: '🧂',
    aliases: ['tieu', 'hat tieu', 'tiêu xay'],
    commonStaple: true
  },
  {
    id: 'duong-thot-not',
    name: { vi: 'Đường phèn / Đường thốt nốt (nước hàng)', en: 'Palm sugar / Caramel sauce' },
    category: 'pantry',
    icon: '🍯',
    aliases: ['duong', 'nuoc hang', 'nước màu', 'duong phen'],
    commonStaple: true
  },
  {
    id: 'nuoc-dua',
    name: { vi: 'Nước dừa tươi', en: 'Fresh coconut water' },
    category: 'pantry',
    icon: '🥥',
    aliases: ['nuoc dua', 'nuoc cot dua', 'cơm dừa']
  }
];

// Helper: Strip Vietnamese diacritics for fast fuzzy matching
export function removeVietnameseDiacritics(str: string): string {
  if (!str) return '';
  return str
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/đ/g, 'd')
    .replace(/Đ/g, 'D')
    .toLowerCase()
    .trim();
}

// Fast Autocomplete Search against Master Ingredients
export function searchMasterIngredients(query: string, limit = 8): MasterIngredient[] {
  if (!query || query.trim().length === 0) {
    return MASTER_INGREDIENTS.filter(item => item.commonStaple).slice(0, limit);
  }

  const cleanQuery = removeVietnameseDiacritics(query);

  return MASTER_INGREDIENTS.filter(item => {
    if (removeVietnameseDiacritics(item.name.vi).includes(cleanQuery)) return true;
    if (item.name.en.toLowerCase().includes(cleanQuery)) return true;
    return item.aliases.some(alias => removeVietnameseDiacritics(alias).includes(cleanQuery));
  }).slice(0, limit);
}

// Smart Matcher: check if a recipe ingredient text matches a selected ingredient
export function matchRecipeIngredient(
  recipeIngredientText: string,
  userSelectedIngredient: MasterIngredient | string
): boolean {
  const cleanRecipeIng = removeVietnameseDiacritics(recipeIngredientText);

  if (typeof userSelectedIngredient === 'string') {
    const cleanUser = removeVietnameseDiacritics(userSelectedIngredient);
    // Direct or reverse contains
    if (cleanRecipeIng.includes(cleanUser) || cleanUser.includes(cleanRecipeIng)) return true;
    
    // Check against Master Ingredients list to find aliases
    const foundMaster = MASTER_INGREDIENTS.find(
      m => removeVietnameseDiacritics(m.name.vi) === cleanUser || m.aliases.some(a => removeVietnameseDiacritics(a) === cleanUser)
    );
    if (foundMaster) {
      if (cleanRecipeIng.includes(removeVietnameseDiacritics(foundMaster.name.vi))) return true;
      return foundMaster.aliases.some(a => cleanRecipeIng.includes(removeVietnameseDiacritics(a)));
    }
    return false;
  }

  // Check master ingredient id, name, and all its aliases
  const cleanVi = removeVietnameseDiacritics(userSelectedIngredient.name.vi);
  if (cleanRecipeIng.includes(cleanVi)) return true;

  for (const alias of userSelectedIngredient.aliases) {
    const cleanAlias = removeVietnameseDiacritics(alias);
    if (cleanRecipeIng.includes(cleanAlias)) return true;
  }

  return false;
}
