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
  {
    "id": "gao-te",
    "name": {
      "vi": "Gạo tẻ (gạo thơm, ST25, Jasmine)",
      "en": "White rice (ST25, Jasmine)"
    },
    "icon": "🍚",
    "commonStaple": true,
    "aliases": [
      "gao",
      "gạo",
      "gao te",
      "com",
      "cơm",
      "cơm nguội",
      "gao trang",
      "gao st25",
      "gao jasmine",
      "cơm trắng"
    ],
    "category": "carb"
  },
  {
    "id": "gao-nep",
    "name": {
      "vi": "Gạo nếp (nếp cái hoa vàng, nếp nương)",
      "en": "Glutinous sticky rice"
    },
    "icon": "🌾",
    "commonStaple": true,
    "aliases": [
      "gao nep",
      "nep",
      "nếp",
      "nep cai hoa vang",
      "nep nuong",
      "nep sap",
      "nep cam",
      "nep than",
      "xôi",
      "xoi"
    ],
    "category": "carb"
  },
  {
    "id": "gao-lut",
    "name": {
      "vi": "Gạo lứt (lứt đỏ, lứt tím, lứt đen)",
      "en": "Brown rice"
    },
    "icon": "🌾",
    "aliases": [
      "gao lut",
      "gạo lứt",
      "lut do",
      "lut den",
      "lut huyet rong",
      "cơm gạo lứt"
    ],
    "category": "carb"
  },
  {
    "id": "yen-mach",
    "name": {
      "vi": "Yến mạch (cán dẹt, nguyên hạt)",
      "en": "Rolled oats"
    },
    "icon": "🥣",
    "commonStaple": true,
    "aliases": [
      "yen mach",
      "yến mạch",
      "oats",
      "chao yen mach",
      "yen mach can det",
      "bot yen mach"
    ],
    "category": "carb"
  },
  {
    "id": "hat-ke",
    "name": {
      "vi": "Hạt kê",
      "en": "Millet"
    },
    "icon": "🌾",
    "aliases": [
      "hat ke",
      "kê",
      "hạt kê vàng",
      "cháo kê"
    ],
    "category": "carb"
  },
  {
    "id": "hat-bo-bo",
    "name": {
      "vi": "Hạt bo bo (ý dĩ)",
      "en": "Coix seed / Pearl barley"
    },
    "icon": "🌾",
    "aliases": [
      "bo bo",
      "hat bo bo",
      "y di",
      "ý dĩ",
      "hat y di"
    ],
    "category": "carb"
  },
  {
    "id": "bun-tuoi",
    "name": {
      "vi": "Bún tươi",
      "en": "Fresh rice vermicelli"
    },
    "icon": "🍜",
    "commonStaple": true,
    "aliases": [
      "bun",
      "bún",
      "bun tuoi",
      "bun roi",
      "bun la"
    ],
    "category": "carb"
  },
  {
    "id": "bun-kho",
    "name": {
      "vi": "Bún khô (bún gạo khô)",
      "en": "Dry rice vermicelli"
    },
    "icon": "🍜",
    "commonStaple": true,
    "aliases": [
      "bun kho",
      "bún khô",
      "bun gao",
      "bún gạo"
    ],
    "category": "carb"
  },
  {
    "id": "banh-pho-tuoi",
    "name": {
      "vi": "Bánh phở tươi",
      "en": "Fresh flat rice noodles (Pho)"
    },
    "icon": "🍜",
    "commonStaple": true,
    "aliases": [
      "banh pho",
      "bánh phở",
      "pho tuoi",
      "bánh phở tươi"
    ],
    "category": "carb"
  },
  {
    "id": "banh-pho-kho",
    "name": {
      "vi": "Bánh phở khô",
      "en": "Dry flat rice noodles"
    },
    "icon": "🍜",
    "aliases": [
      "banh pho kho",
      "pho kho",
      "bánh phở khô"
    ],
    "category": "carb"
  },
  {
    "id": "mien-dong",
    "name": {
      "vi": "Miến dong (miến sợi)",
      "en": "Glass noodles"
    },
    "icon": "🍜",
    "commonStaple": true,
    "aliases": [
      "mien",
      "miến",
      "mien dong",
      "miến dong",
      "bun tau",
      "bún tàu",
      "mien xao",
      "miến khô"
    ],
    "category": "carb"
  },
  {
    "id": "hu-tieu-kho",
    "name": {
      "vi": "Hủ tiếu (sợi dai, sợi mềm)",
      "en": "Tapioca rice noodles"
    },
    "icon": "🍜",
    "aliases": [
      "hu tieu",
      "hủ tiếu",
      "hu tieu my tho",
      "hu tieu sa dec",
      "soi hu tieu"
    ],
    "category": "carb"
  },
  {
    "id": "mi-trung",
    "name": {
      "vi": "Mì trứng (mì tươi, mì khô)",
      "en": "Egg noodles"
    },
    "icon": "🍜",
    "commonStaple": true,
    "aliases": [
      "mi trung",
      "mì trứng",
      "mi vang",
      "mì vàng",
      "mi soi"
    ],
    "category": "carb"
  },
  {
    "id": "mi-tom",
    "name": {
      "vi": "Mì tôm (mì ăn liền)",
      "en": "Instant noodles"
    },
    "icon": "🍜",
    "commonStaple": true,
    "aliases": [
      "mi tom",
      "mì tôm",
      "mi goi",
      "mì gói",
      "mi an lien",
      "mì tôm hảo hảo"
    ],
    "category": "carb"
  },
  {
    "id": "mi-udon",
    "name": {
      "vi": "Mì Udon Nhật Bản",
      "en": "Udon noodles"
    },
    "icon": "🍜",
    "aliases": [
      "udon",
      "mi udon",
      "mì udon"
    ],
    "category": "carb"
  },
  {
    "id": "mi-ramen",
    "name": {
      "vi": "Mì Ramen / Mì Soba",
      "en": "Ramen / Soba noodles"
    },
    "icon": "🍜",
    "aliases": [
      "ramen",
      "soba",
      "mi ramen",
      "mi soba"
    ],
    "category": "carb"
  },
  {
    "id": "banh-da-nem",
    "name": {
      "vi": "Bánh đa nem (ram cuốn nem)",
      "en": "Rice paper for spring rolls"
    },
    "icon": "🥟",
    "commonStaple": true,
    "aliases": [
      "banh da nem",
      "bánh đa nem",
      "ram",
      "banh ram",
      "vo ram",
      "vỏ ram hà tĩnh",
      "bánh tráng chả giò"
    ],
    "category": "carb"
  },
  {
    "id": "banh-trang-cuon",
    "name": {
      "vi": "Bánh tráng cuốn gỏi (dẻo)",
      "en": "Rice paper wrappers"
    },
    "icon": "🥟",
    "commonStaple": true,
    "aliases": [
      "banh trang",
      "bánh tráng",
      "banh trang cuon",
      "bánh tráng nhúng nước"
    ],
    "category": "carb"
  },
  {
    "id": "banh-trang-nuong",
    "name": {
      "vi": "Bánh tráng mè (bánh đa nướng)",
      "en": "Sesame rice crackers"
    },
    "icon": "🍘",
    "aliases": [
      "banh da",
      "bánh đa",
      "banh da do",
      "bánh đa mè",
      "banh trang me",
      "bánh đa vừng"
    ],
    "category": "carb"
  },
  {
    "id": "banh-da-cua",
    "name": {
      "vi": "Bánh đa cua đỏ Hải Phòng",
      "en": "Red crab noodles"
    },
    "icon": "🍜",
    "aliases": [
      "banh da cua",
      "bánh đa cua",
      "banh da do hai phong"
    ],
    "category": "carb"
  },
  {
    "id": "banh-canh-bot-gao",
    "name": {
      "vi": "Bánh canh (bột gạo / bột lọc)",
      "en": "Thick noodle soup cakes"
    },
    "icon": "🍜",
    "aliases": [
      "banh canh",
      "bánh canh",
      "soi banh canh",
      "banh canh bot loc"
    ],
    "category": "carb"
  },
  {
    "id": "banh-mi",
    "name": {
      "vi": "Bánh mì Việt Nam",
      "en": "Vietnamese baguette"
    },
    "icon": "🥖",
    "commonStaple": true,
    "aliases": [
      "banh mi",
      "bánh mì",
      "o banh mi",
      "banh mi gion",
      "bánh mì chuột"
    ],
    "category": "carb"
  },
  {
    "id": "banh-phong-tom",
    "name": {
      "vi": "Bánh phồng tôm",
      "en": "Prawn crackers"
    },
    "icon": "🍤",
    "aliases": [
      "banh phong tom",
      "bánh phồng tôm",
      "phong tom"
    ],
    "category": "carb"
  },
  {
    "id": "bot-gao",
    "name": {
      "vi": "Bột gạo tẻ",
      "en": "Rice flour"
    },
    "icon": "🥡",
    "commonStaple": true,
    "aliases": [
      "bot gao",
      "bột gạo",
      "bot gao te"
    ],
    "category": "carb"
  },
  {
    "id": "bot-nep",
    "name": {
      "vi": "Bột nếp",
      "en": "Glutinous rice flour"
    },
    "icon": "🥡",
    "commonStaple": true,
    "aliases": [
      "bot nep",
      "bột nếp",
      "bot gao nep"
    ],
    "category": "carb"
  },
  {
    "id": "bot-nang",
    "name": {
      "vi": "Bột năng (bột đao, bột lọc)",
      "en": "Tapioca starch"
    },
    "icon": "🥡",
    "commonStaple": true,
    "aliases": [
      "bot nang",
      "bột năng",
      "bot dao",
      "bot san loc",
      "tapioca starch"
    ],
    "category": "carb"
  },
  {
    "id": "bot-mi",
    "name": {
      "vi": "Bột mì đa dụng",
      "en": "All-purpose wheat flour"
    },
    "icon": "🥡",
    "commonStaple": true,
    "aliases": [
      "bot mi",
      "bột mì",
      "bot mi da dung",
      "flour"
    ],
    "category": "carb"
  },
  {
    "id": "bot-bap",
    "name": {
      "vi": "Bột bắp (bột ngô)",
      "en": "Cornstarch"
    },
    "icon": "🥡",
    "commonStaple": true,
    "aliases": [
      "bot bap",
      "bột bắp",
      "bot ngo",
      "bột ngô",
      "cornstarch"
    ],
    "category": "carb"
  },
  {
    "id": "bot-chien-gion",
    "name": {
      "vi": "Bột chiên giòn",
      "en": "Crispy frying batter"
    },
    "icon": "🥡",
    "commonStaple": true,
    "aliases": [
      "bot chien gion",
      "bột chiên giòn",
      "bot tam bot chien"
    ],
    "category": "carb"
  },
  {
    "id": "bot-chien-xu",
    "name": {
      "vi": "Bột chiên xù (Panko)",
      "en": "Panko breadcrumbs"
    },
    "icon": "🥡",
    "aliases": [
      "bot chien xu",
      "bột chiên xù",
      "panko"
    ],
    "category": "carb"
  },
  {
    "id": "bot-banh-xeo",
    "name": {
      "vi": "Bột bánh xèo / bánh khọt",
      "en": "Vietnamese pancake mix"
    },
    "icon": "🥡",
    "aliases": [
      "bot banh xeo",
      "bột bánh xèo",
      "bot banh khot"
    ],
    "category": "carb"
  },
  {
    "id": "bot-san-day",
    "name": {
      "vi": "Bột sắn dây",
      "en": "Kudzu root starch"
    },
    "icon": "🥡",
    "aliases": [
      "bot san day",
      "bột sắn dây",
      "san day"
    ],
    "category": "carb"
  },
  {
    "id": "ngo-ngot",
    "name": {
      "vi": "Ngô ngọt (bắp Mỹ)",
      "en": "Sweet corn"
    },
    "icon": "🌽",
    "commonStaple": true,
    "aliases": [
      "ngo",
      "ngô",
      "bap",
      "bắp",
      "ngo ngot",
      "bap my",
      "bắp ngọt",
      "hat bap"
    ],
    "category": "carb"
  },
  {
    "id": "ngo-nep",
    "name": {
      "vi": "Ngô nếp (bắp nếp dẻo)",
      "en": "Waxy corn"
    },
    "icon": "🌽",
    "aliases": [
      "ngo nep",
      "bap nep",
      "ngô nếp",
      "bắp nếp"
    ],
    "category": "carb"
  },
  {
    "id": "khoai-tay",
    "name": {
      "vi": "Khoai tây",
      "en": "Potato"
    },
    "icon": "🥔",
    "commonStaple": true,
    "aliases": [
      "khoai tay",
      "khoai tây",
      "potato"
    ],
    "category": "carb"
  },
  {
    "id": "khoai-lang",
    "name": {
      "vi": "Khoai lang (mật, tím, vàng)",
      "en": "Sweet potato"
    },
    "icon": "🍠",
    "commonStaple": true,
    "aliases": [
      "khoai lang",
      "khoai lang mat",
      "khoai lang tim",
      "khoai lang vang"
    ],
    "category": "carb"
  },
  {
    "id": "khoai-mon",
    "name": {
      "vi": "Khoai môn",
      "en": "Taro root"
    },
    "icon": "🥔",
    "aliases": [
      "khoai mon",
      "khoai môn",
      "mon sap",
      "taro"
    ],
    "category": "carb"
  },
  {
    "id": "khoai-so",
    "name": {
      "vi": "Khoai sọ",
      "en": "Small taro"
    },
    "icon": "🥔",
    "aliases": [
      "khoai so",
      "khoai sọ",
      "khoai so luoc"
    ],
    "category": "carb"
  },
  {
    "id": "san-khoai-mi",
    "name": {
      "vi": "Củ sắn (khoai mì)",
      "en": "Cassava / Yuca"
    },
    "icon": "🥔",
    "aliases": [
      "san",
      "khoai mi",
      "khoai mì",
      "củ mì",
      "củ sắn"
    ],
    "category": "carb"
  },
  {
    "id": "hat-sen-kho",
    "name": {
      "vi": "Hạt sen khô",
      "en": "Dried lotus seeds"
    },
    "icon": "🌰",
    "aliases": [
      "hat sen kho",
      "sen kho",
      "hạt sen khô"
    ],
    "category": "carb"
  },
  {
    "id": "hat-sen-tuoi",
    "name": {
      "vi": "Hạt sen tươi",
      "en": "Fresh lotus seeds"
    },
    "icon": "🌰",
    "aliases": [
      "hat sen",
      "hạt sen",
      "hat sen tuoi",
      "hạt sen tươi"
    ],
    "category": "carb"
  },
  {
    "id": "dau-phong-lac",
    "name": {
      "vi": "Đậu phộng (hạt lạc)",
      "en": "Peanuts"
    },
    "icon": "🥜",
    "commonStaple": true,
    "aliases": [
      "dau phong",
      "lac",
      "hạt lạc",
      "lạc rang",
      "dau phong rang",
      "hạt đậu phộng"
    ],
    "category": "carb"
  },
  {
    "id": "hat-dieu",
    "name": {
      "vi": "Hạt điều rang",
      "en": "Cashew nuts"
    },
    "icon": "🥜",
    "aliases": [
      "hat dieu",
      "hạt điều",
      "dieu rang"
    ],
    "category": "carb"
  },
  {
    "id": "me-vung-rang",
    "name": {
      "vi": "Hạt mè (vừng trắng, vừng đen)",
      "en": "Sesame seeds"
    },
    "icon": "🌱",
    "commonStaple": true,
    "aliases": [
      "me",
      "vung",
      "mè",
      "vừng",
      "me trang",
      "me den",
      "vung rang",
      "hạt mè"
    ],
    "category": "carb"
  },
  {
    "id": "quay-gion",
    "name": {
      "vi": "Quẩy giòn (ăn phở, cháo)",
      "en": "Fried dough cruller"
    },
    "icon": "🥖",
    "aliases": [
      "quay",
      "quẩy",
      "quay gion",
      "bánh quẩy"
    ],
    "category": "carb"
  },
  {
    "id": "thit-ba-chi",
    "name": {
      "vi": "Thịt ba chỉ (ba rọi heo)",
      "en": "Pork belly"
    },
    "icon": "🥓",
    "commonStaple": true,
    "aliases": [
      "thit ba chi",
      "ba chi",
      "ba roi",
      "thịt ba rọi",
      "thit heo ba chi",
      "thịt lợn ba chỉ"
    ],
    "category": "meat"
  },
  {
    "id": "thit-thap-cam-heo",
    "name": {
      "vi": "Thịt nạc heo (nạc vai, mông)",
      "en": "Lean pork"
    },
    "icon": "🥩",
    "commonStaple": true,
    "aliases": [
      "thit heo",
      "thit lon",
      "nac heo",
      "nac vai",
      "thịt nạc dăm",
      "thịt mông"
    ],
    "category": "meat"
  },
  {
    "id": "thit-heo-xay",
    "name": {
      "vi": "Thịt heo xay (thịt băm)",
      "en": "Minced pork"
    },
    "icon": "🥣",
    "commonStaple": true,
    "aliases": [
      "thit xay",
      "thit bam",
      "thịt băm",
      "thit lon xay",
      "gio song"
    ],
    "category": "meat"
  },
  {
    "id": "suon-heo",
    "name": {
      "vi": "Sườn heo (sườn non)",
      "en": "Pork ribs"
    },
    "icon": "🍖",
    "commonStaple": true,
    "aliases": [
      "suon heo",
      "suon non",
      "sườn lợn",
      "suon sun",
      "sườn sụn"
    ],
    "category": "meat"
  },
  {
    "id": "suon-sun-heo",
    "name": {
      "vi": "Sườn sụn heo",
      "en": "Pork cartilage ribs"
    },
    "icon": "🍖",
    "aliases": [
      "suon sun",
      "sườn sụn",
      "sun heo",
      "sụn lợn"
    ],
    "category": "meat"
  },
  {
    "id": "mong-gio",
    "name": {
      "vi": "Chân giò / Móng giò heo",
      "en": "Pork trotter / hock"
    },
    "icon": "🍖",
    "aliases": [
      "mong gio",
      "chan gio",
      "thịt chân giò",
      "gio heo"
    ],
    "category": "meat"
  },
  {
    "id": "tai-heo",
    "name": {
      "vi": "Tai heo (tai lợn giòn)",
      "en": "Pork ear"
    },
    "icon": "🥓",
    "aliases": [
      "tai heo",
      "tai lợn",
      "tai heo gion"
    ],
    "category": "meat"
  },
  {
    "id": "nong-heo",
    "name": {
      "vi": "Thịt nọng heo (má heo giòn)",
      "en": "Pork jowl"
    },
    "icon": "🥓",
    "aliases": [
      "nong heo",
      "nọng heo",
      "ma heo",
      "má heo"
    ],
    "category": "meat"
  },
  {
    "id": "mo-heo",
    "name": {
      "vi": "Mỡ heo (mỡ phần làm tóp mỡ)",
      "en": "Pork fatback / Lard"
    },
    "icon": "🥓",
    "aliases": [
      "mo heo",
      "mỡ heo",
      "top mo",
      "tóp mỡ",
      "mỡ lợn"
    ],
    "category": "meat"
  },
  {
    "id": "long-non-heo",
    "name": {
      "vi": "Lòng non heo",
      "en": "Pork small intestine"
    },
    "icon": "🥓",
    "aliases": [
      "long non",
      "lòng non",
      "long heo",
      "lòng lợn"
    ],
    "category": "meat"
  },
  {
    "id": "da-day-heo",
    "name": {
      "vi": "Dạ dày heo (bao tử heo)",
      "en": "Pork stomach"
    },
    "icon": "🥓",
    "aliases": [
      "da day heo",
      "dạ dày heo",
      "bao tu heo",
      "bao tử heo"
    ],
    "category": "meat"
  },
  {
    "id": "gan-heo",
    "name": {
      "vi": "Gan heo (gan lợn)",
      "en": "Pork liver"
    },
    "icon": "🥓",
    "aliases": [
      "gan heo",
      "gan lợn",
      "gan"
    ],
    "category": "meat"
  },
  {
    "id": "huyet-tiet-heo",
    "name": {
      "vi": "Huyết heo (tiết lợn)",
      "en": "Pork blood curd"
    },
    "icon": "🩸",
    "aliases": [
      "huyet",
      "tiết",
      "huyet heo",
      "tiết heo",
      "tiết luộc"
    ],
    "category": "meat"
  },
  {
    "id": "thit-bo-than",
    "name": {
      "vi": "Thịt thăn bò (bò mềm, bò xào)",
      "en": "Tenderloin beef"
    },
    "icon": "🥩",
    "commonStaple": true,
    "aliases": [
      "thit bo",
      "thăn bò",
      "bo xao",
      "bò mềm",
      "than bo"
    ],
    "category": "meat"
  },
  {
    "id": "thit-bo-bap",
    "name": {
      "vi": "Bắp bò (bắp hoa, bắp lõi rùa)",
      "en": "Beef shank"
    },
    "icon": "🥩",
    "commonStaple": true,
    "aliases": [
      "bap bo",
      "bắp bò",
      "bap hoa",
      "bắp hoa",
      "bắp bò luộc"
    ],
    "category": "meat"
  },
  {
    "id": "thit-bo-nam",
    "name": {
      "vi": "Nạm bò (gầu bò, gân bò)",
      "en": "Beef flank & brisket"
    },
    "icon": "🥩",
    "aliases": [
      "nam bo",
      "nạm bò",
      "gau bo",
      "gầu bò",
      "gan bo",
      "gân bò"
    ],
    "category": "meat"
  },
  {
    "id": "thit-bo-xay",
    "name": {
      "vi": "Thịt bò xay (bò băm)",
      "en": "Ground minced beef"
    },
    "icon": "🥩",
    "aliases": [
      "bo xay",
      "thịt bò băm",
      "bo bam"
    ],
    "category": "meat"
  },
  {
    "id": "suon-bo",
    "name": {
      "vi": "Sườn bò (dẻ sườn bò)",
      "en": "Beef short ribs"
    },
    "icon": "🍖",
    "aliases": [
      "suon bo",
      "sườn bò",
      "de suon bo",
      "dẻ sườn"
    ],
    "category": "meat"
  },
  {
    "id": "duoi-bo",
    "name": {
      "vi": "Đuôi bò (hầm thuốc bắc)",
      "en": "Oxtail"
    },
    "icon": "🍖",
    "aliases": [
      "duoi bo",
      "đuôi bò",
      "lẩu đuôi bò"
    ],
    "category": "meat"
  },
  {
    "id": "xuong-bo",
    "name": {
      "vi": "Xương ống bò (ninh nước dùng)",
      "en": "Beef marrow bones"
    },
    "icon": "🦴",
    "aliases": [
      "xuong bo",
      "xương bò",
      "xuong ong bo"
    ],
    "category": "meat"
  },
  {
    "id": "thit-ga-ta",
    "name": {
      "vi": "Thịt gà ta (gà thả vườn nguyên con)",
      "en": "Whole free-range chicken"
    },
    "icon": "🍗",
    "commonStaple": true,
    "aliases": [
      "thit ga",
      "gà",
      "ga ta",
      "thịt gà ta",
      "ga luoc"
    ],
    "category": "meat"
  },
  {
    "id": "uc-ga",
    "name": {
      "vi": "Ức gà (filet gà ăn kiêng)",
      "en": "Chicken breast"
    },
    "icon": "🍗",
    "commonStaple": true,
    "aliases": [
      "uc ga",
      "ức gà",
      "luon ga",
      "thit ga eat clean"
    ],
    "category": "meat"
  },
  {
    "id": "dui-ga",
    "name": {
      "vi": "Đùi gà (tỏi gà, má đùi)",
      "en": "Chicken drumsticks & thighs"
    },
    "icon": "🍗",
    "commonStaple": true,
    "aliases": [
      "dui ga",
      "đùi gà",
      "toi ga",
      "tỏi gà",
      "ma dui ga"
    ],
    "category": "meat"
  },
  {
    "id": "canh-ga",
    "name": {
      "vi": "Cánh gà",
      "en": "Chicken wings"
    },
    "icon": "🍗",
    "aliases": [
      "canh ga",
      "cánh gà",
      "canh ga chien mam"
    ],
    "category": "meat"
  },
  {
    "id": "chan-ga",
    "name": {
      "vi": "Chân gà (chân gà sả tắc)",
      "en": "Chicken feet"
    },
    "icon": "🍗",
    "aliases": [
      "chan ga",
      "chân gà",
      "chan ga rut xuong"
    ],
    "category": "meat"
  },
  {
    "id": "long-me-ga",
    "name": {
      "vi": "Lòng mề gà",
      "en": "Chicken giblets"
    },
    "icon": "🍗",
    "aliases": [
      "long me ga",
      "mề gà",
      "me ga",
      "lòng gà"
    ],
    "category": "meat"
  },
  {
    "id": "thit-vit",
    "name": {
      "vi": "Thịt vịt (vịt cỏ, vịt xiêm)",
      "en": "Duck meat"
    },
    "icon": "🍗",
    "aliases": [
      "thit vit",
      "vịt",
      "vit co",
      "vit quay",
      "vit luoc"
    ],
    "category": "meat"
  },
  {
    "id": "thit-ngan",
    "name": {
      "vi": "Thịt ngan (ngan dé)",
      "en": "Muscovy duck"
    },
    "icon": "🍗",
    "aliases": [
      "ngan",
      "thịt ngan",
      "ngan chay toi",
      "ngan luoc"
    ],
    "category": "meat"
  },
  {
    "id": "thit-chim-cut",
    "name": {
      "vi": "Chim cút",
      "en": "Quail meat"
    },
    "icon": "🍗",
    "aliases": [
      "chim cut",
      "chim cút",
      "chim cút nướng"
    ],
    "category": "meat"
  },
  {
    "id": "thit-bo-cau",
    "name": {
      "vi": "Thịt bồ câu (hầm hạt sen)",
      "en": "Pigeon / Squab"
    },
    "icon": "🍗",
    "aliases": [
      "bo cau",
      "bồ câu",
      "chim bo cau",
      "cháo bồ câu"
    ],
    "category": "meat"
  },
  {
    "id": "thit-ech",
    "name": {
      "vi": "Thịt ếch đồng (ếch xào, lẩu ếch)",
      "en": "Frog meat"
    },
    "icon": "🐸",
    "aliases": [
      "thit ech",
      "ếch",
      "ech dong",
      "ếch xào lăn",
      "lẩu ếch"
    ],
    "category": "meat"
  },
  {
    "id": "thit-de",
    "name": {
      "vi": "Thịt dê (dê núi Ninh Bình)",
      "en": "Goat meat"
    },
    "icon": "🥩",
    "aliases": [
      "thit de",
      "thịt dê",
      "de nui",
      "lẩu dê"
    ],
    "category": "meat"
  },
  {
    "id": "gio-lua",
    "name": {
      "vi": "Giò lụa (chả lụa heo)",
      "en": "Vietnamese pork roll"
    },
    "icon": "🍥",
    "commonStaple": true,
    "aliases": [
      "gio lua",
      "giò lụa",
      "cha lua",
      "chả lụa",
      "giò"
    ],
    "category": "meat"
  },
  {
    "id": "gio-thu",
    "name": {
      "vi": "Giò thủ (giò xào giòn)",
      "en": "Head cheese / Ear roll"
    },
    "icon": "🍥",
    "aliases": [
      "gio thu",
      "giò thủ",
      "gio xao",
      "giò xào"
    ],
    "category": "meat"
  },
  {
    "id": "cha-que",
    "name": {
      "vi": "Chả quế",
      "en": "Cinnamon pork roll"
    },
    "icon": "🍥",
    "aliases": [
      "cha que",
      "chả quế"
    ],
    "category": "meat"
  },
  {
    "id": "cha-com",
    "name": {
      "vi": "Chả cốm Hà Nội",
      "en": "Green rice pork patties"
    },
    "icon": "🍥",
    "aliases": [
      "cha com",
      "chả cốm",
      "chả cốm bún đậu"
    ],
    "category": "meat"
  },
  {
    "id": "nem-chua",
    "name": {
      "vi": "Nem chua (Thanh Hóa, Bình Định)",
      "en": "Fermented pork roll"
    },
    "icon": "🥓",
    "aliases": [
      "nem chua",
      "nem chua rán",
      "nem nuong"
    ],
    "category": "meat"
  },
  {
    "id": "lap-xuong",
    "name": {
      "vi": "Lạp xưởng (tươi, khô)",
      "en": "Chinese / Vietnamese sausage"
    },
    "icon": "🌭",
    "commonStaple": true,
    "aliases": [
      "lap xuong",
      "lạp xưởng",
      "lap xuong tuoi",
      "lap xuong mai que lo"
    ],
    "category": "meat"
  },
  {
    "id": "cha-bong-ruoc",
    "name": {
      "vi": "Chà bông heo (ruốc thịt)",
      "en": "Pork floss"
    },
    "icon": "🥡",
    "commonStaple": true,
    "aliases": [
      "cha bong",
      "chà bông",
      "ruoc",
      "ruốc",
      "ruốc thịt lợn"
    ],
    "category": "meat"
  },
  {
    "id": "xuc-xich",
    "name": {
      "vi": "Xúc xích",
      "en": "Sausage"
    },
    "icon": "🌭",
    "commonStaple": true,
    "aliases": [
      "xuc xich",
      "xúc xích",
      "hotdog"
    ],
    "category": "meat"
  },
  {
    "id": "dam-bong",
    "name": {
      "vi": "Dăm bông (thịt nguội)",
      "en": "Ham / Jambon"
    },
    "icon": "🥓",
    "aliases": [
      "dam bong",
      "dăm bông",
      "thịt nguội",
      "jambon"
    ],
    "category": "meat"
  },
  {
    "id": "pate-gan",
    "name": {
      "vi": "Pate gan (pate bánh mì)",
      "en": "Liver pate"
    },
    "icon": "🥣",
    "commonStaple": true,
    "aliases": [
      "pate",
      "pa tê",
      "pate gan",
      "pate cot den"
    ],
    "category": "meat"
  },
  {
    "id": "tom-su-the",
    "name": {
      "vi": "Tôm sú / Tôm thẻ tươi",
      "en": "Black tiger shrimp / White shrimp"
    },
    "icon": "🦐",
    "commonStaple": true,
    "aliases": [
      "tom",
      "tôm",
      "tom su",
      "tom the",
      "tôm tươi",
      "tom song",
      "tom hap"
    ],
    "category": "seafood"
  },
  {
    "id": "tom-cang-xanh",
    "name": {
      "vi": "Tôm càng xanh",
      "en": "Giant freshwater prawn"
    },
    "icon": "🦐",
    "aliases": [
      "tom cang",
      "tôm càng",
      "tom cang xanh"
    ],
    "category": "seafood"
  },
  {
    "id": "tom-dong-tep",
    "name": {
      "vi": "Tôm đồng / Tép tươi",
      "en": "Freshwater baby shrimp"
    },
    "icon": "🦐",
    "aliases": [
      "tom dong",
      "tôm đồng",
      "tep",
      "tép",
      "tep riu",
      "tôm riu"
    ],
    "category": "seafood"
  },
  {
    "id": "tom-kho",
    "name": {
      "vi": "Tôm khô (nấu canh, kho quẹt)",
      "en": "Dried shrimp"
    },
    "icon": "🦐",
    "commonStaple": true,
    "aliases": [
      "tom kho",
      "tôm khô",
      "tép khô"
    ],
    "category": "seafood"
  },
  {
    "id": "ca-loc-qua",
    "name": {
      "vi": "Cá lóc (cá quả, cá chuối)",
      "en": "Snakehead fish"
    },
    "icon": "🐟",
    "commonStaple": true,
    "aliases": [
      "ca loc",
      "cá lóc",
      "ca qua",
      "cá quả",
      "ca chuoi",
      "phi le ca loc"
    ],
    "category": "seafood"
  },
  {
    "id": "ca-ro-dong",
    "name": {
      "vi": "Cá rô đồng",
      "en": "Anabas climbing perch"
    },
    "icon": "🐟",
    "aliases": [
      "ca ro",
      "cá rô",
      "ca ro dong",
      "canh ca ro"
    ],
    "category": "seafood"
  },
  {
    "id": "ca-dieu-hong",
    "name": {
      "vi": "Cá diêu hồng",
      "en": "Red tilapia"
    },
    "icon": "🐟",
    "commonStaple": true,
    "aliases": [
      "ca dieu hong",
      "cá diêu hồng",
      "ca ro phi do"
    ],
    "category": "seafood"
  },
  {
    "id": "ca-ro-phi",
    "name": {
      "vi": "Cá rô phi",
      "en": "Tilapia"
    },
    "icon": "🐟",
    "commonStaple": true,
    "aliases": [
      "ca ro phi",
      "cá rô phi",
      "ca ro phi phi le"
    ],
    "category": "seafood"
  },
  {
    "id": "ca-chep",
    "name": {
      "vi": "Cá chép (nấu dưa, om dưa)",
      "en": "Carp"
    },
    "icon": "🐟",
    "aliases": [
      "ca chep",
      "cá chép",
      "ca chep gion",
      "chép om dưa"
    ],
    "category": "seafood"
  },
  {
    "id": "ca-basa-tra",
    "name": {
      "vi": "Cá basa / Cá tra",
      "en": "Basa / Pangasius catfish"
    },
    "icon": "🐟",
    "aliases": [
      "ca basa",
      "cá basa",
      "ca tra",
      "phi le ca basa"
    ],
    "category": "seafood"
  },
  {
    "id": "ca-tre",
    "name": {
      "vi": "Cá trê (kho gừng, nướng)",
      "en": "Clarias catfish"
    },
    "icon": "🐟",
    "aliases": [
      "ca tre",
      "cá trê",
      "ca tre dong"
    ],
    "category": "seafood"
  },
  {
    "id": "ca-keo",
    "name": {
      "vi": "Cá kèo (lẩu cá kèo)",
      "en": "Goby fish"
    },
    "icon": "🐟",
    "aliases": [
      "ca keo",
      "cá kèo",
      "lau ca keo"
    ],
    "category": "seafood"
  },
  {
    "id": "ca-bong",
    "name": {
      "vi": "Cá bống (kho tiêu kho tộ)",
      "en": "Round goby fish"
    },
    "icon": "🐟",
    "aliases": [
      "ca bong",
      "cá bống",
      "ca bong kho tieu"
    ],
    "category": "seafood"
  },
  {
    "id": "ca-hoi",
    "name": {
      "vi": "Cá hồi (phi lê, đầu cá hồi)",
      "en": "Salmon"
    },
    "icon": "🐟",
    "commonStaple": true,
    "aliases": [
      "ca hoi",
      "cá hồi",
      "phi le ca hoi",
      "dau ca hoi"
    ],
    "category": "seafood"
  },
  {
    "id": "ca-thu",
    "name": {
      "vi": "Cá thu (cắt lát, sốt cà)",
      "en": "Mackerel steak"
    },
    "icon": "🐟",
    "commonStaple": true,
    "aliases": [
      "ca thu",
      "cá thu",
      "ca thu sot ca",
      "ca thu mot nang"
    ],
    "category": "seafood"
  },
  {
    "id": "ca-nuc",
    "name": {
      "vi": "Cá nục (kho cà, hấp cuốn)",
      "en": "Scad fish"
    },
    "icon": "🐟",
    "commonStaple": true,
    "aliases": [
      "ca nuc",
      "cá nục",
      "ca nuc kho ca",
      "ca nuc hap"
    ],
    "category": "seafood"
  },
  {
    "id": "ca-ngu",
    "name": {
      "vi": "Cá ngừ (kho thơm, kho nước dừa)",
      "en": "Tuna"
    },
    "icon": "🐟",
    "aliases": [
      "ca ngu",
      "cá ngừ",
      "ca ngu dai duong"
    ],
    "category": "seafood"
  },
  {
    "id": "ca-bac-ma",
    "name": {
      "vi": "Cá bạc má (chiên giòn, kho)",
      "en": "Chub mackerel"
    },
    "icon": "🐟",
    "aliases": [
      "ca bac ma",
      "cá bạc má"
    ],
    "category": "seafood"
  },
  {
    "id": "ca-chim",
    "name": {
      "vi": "Cá chim (trắng, đen)",
      "en": "Pomfret fish"
    },
    "icon": "🐟",
    "aliases": [
      "ca chim",
      "cá chim",
      "ca chim trang"
    ],
    "category": "seafood"
  },
  {
    "id": "ca-trich",
    "name": {
      "vi": "Cá trích (gỏi cá trích)",
      "en": "Herring"
    },
    "icon": "🐟",
    "aliases": [
      "ca trich",
      "cá trích",
      "goi ca trich"
    ],
    "category": "seafood"
  },
  {
    "id": "ca-com",
    "name": {
      "vi": "Cá cơm (kho tiêu, lăn bột)",
      "en": "Anchovy"
    },
    "icon": "🐟",
    "aliases": [
      "ca com",
      "cá cơm",
      "ca com sanh"
    ],
    "category": "seafood"
  },
  {
    "id": "cua-bien",
    "name": {
      "vi": "Cua biển (cua thịt, cua gạch)",
      "en": "Mud crab"
    },
    "icon": "🦀",
    "aliases": [
      "cua bien",
      "cua biển",
      "cua thit",
      "cua gach",
      "cua ca mau"
    ],
    "category": "seafood"
  },
  {
    "id": "cua-dong",
    "name": {
      "vi": "Cua đồng (gạch cua giã nấu bún riêu)",
      "en": "Paddy field crab"
    },
    "icon": "🦀",
    "commonStaple": true,
    "aliases": [
      "cua dong",
      "cua đồng",
      "gach cua",
      "gạch cua",
      "thit cua dong"
    ],
    "category": "seafood"
  },
  {
    "id": "ghe-xanh",
    "name": {
      "vi": "Ghẹ xanh",
      "en": "Blue swimmer crab"
    },
    "icon": "🦀",
    "aliases": [
      "ghe",
      "ghẹ",
      "ghe xanh",
      "thit ghe"
    ],
    "category": "seafood"
  },
  {
    "id": "muc-ong",
    "name": {
      "vi": "Mực ống tươi",
      "en": "Squid"
    },
    "icon": "🦑",
    "commonStaple": true,
    "aliases": [
      "muc",
      "mực",
      "muc ong",
      "mực ống",
      "muc xao"
    ],
    "category": "seafood"
  },
  {
    "id": "muc-la-nang",
    "name": {
      "vi": "Mực lá / Mực nang",
      "en": "Cuttlefish"
    },
    "icon": "🦑",
    "aliases": [
      "muc la",
      "mực lá",
      "muc nang",
      "mực nang"
    ],
    "category": "seafood"
  },
  {
    "id": "muc-kho",
    "name": {
      "vi": "Mực khô / Mực một nắng",
      "en": "Dried squid"
    },
    "icon": "🦑",
    "aliases": [
      "muc kho",
      "mực khô",
      "muc mot nang"
    ],
    "category": "seafood"
  },
  {
    "id": "bach-tuoc",
    "name": {
      "vi": "Bạch tuộc",
      "en": "Baby octopus"
    },
    "icon": "🐙",
    "aliases": [
      "bach tuoc",
      "bạch tuộc",
      "bach tuoc nuong"
    ],
    "category": "seafood"
  },
  {
    "id": "ngao-ngheu",
    "name": {
      "vi": "Ngao trắng (nghêu)",
      "en": "Clams"
    },
    "icon": "🦪",
    "commonStaple": true,
    "aliases": [
      "ngao",
      "nghêu",
      "ngao trang",
      "nghêu hấp sả",
      "canh ngao"
    ],
    "category": "seafood"
  },
  {
    "id": "hen-song",
    "name": {
      "vi": "Hến tươi (ruột hến)",
      "en": "Baby river clams"
    },
    "icon": "🦪",
    "aliases": [
      "hen",
      "hến",
      "ruot hen",
      "hến xào",
      "canh hến"
    ],
    "category": "seafood"
  },
  {
    "id": "so-huyet",
    "name": {
      "vi": "Sò huyết",
      "en": "Blood cockles"
    },
    "icon": "🦪",
    "aliases": [
      "so huyet",
      "sò huyết",
      "so huyet xao toi"
    ],
    "category": "seafood"
  },
  {
    "id": "so-diep",
    "name": {
      "vi": "Sò điệp (cồi sò điệp)",
      "en": "Scallops"
    },
    "icon": "🦪",
    "aliases": [
      "so diep",
      "sò điệp",
      "coi so diep"
    ],
    "category": "seafood"
  },
  {
    "id": "hau-sua",
    "name": {
      "vi": "Hàu sữa",
      "en": "Oysters"
    },
    "icon": "🦪",
    "aliases": [
      "hau",
      "hàu",
      "hau sua",
      "hàu nướng mỡ hành"
    ],
    "category": "seafood"
  },
  {
    "id": "vem-xanh",
    "name": {
      "vi": "Vẹm xanh",
      "en": "Green mussels"
    },
    "icon": "🦪",
    "aliases": [
      "vem xanh",
      "vẹm xanh",
      "vem"
    ],
    "category": "seafood"
  },
  {
    "id": "oc-buou-nhoi",
    "name": {
      "vi": "Ốc bươu / Ốc nhồi",
      "en": "Apple snails"
    },
    "icon": "🐚",
    "aliases": [
      "oc",
      "ốc",
      "oc buou",
      "ốc bươu",
      "oc nhoi",
      "thit oc"
    ],
    "category": "seafood"
  },
  {
    "id": "oc-mong-tay",
    "name": {
      "vi": "Ốc móng tay",
      "en": "Razor clams"
    },
    "icon": "🐚",
    "aliases": [
      "oc mong tay",
      "ốc móng tay",
      "mong tay xao rau muong"
    ],
    "category": "seafood"
  },
  {
    "id": "oc-huong",
    "name": {
      "vi": "Ốc hương",
      "en": "Spotted babylon snails"
    },
    "icon": "🐚",
    "aliases": [
      "oc huong",
      "ốc hương"
    ],
    "category": "seafood"
  },
  {
    "id": "cha-ca-thac-lac",
    "name": {
      "vi": "Chả cá thác lác (nạo sống)",
      "en": "Featherback fish paste"
    },
    "icon": "🍥",
    "commonStaple": true,
    "aliases": [
      "cha ca",
      "chả cá",
      "thac lac",
      "cá thác lác",
      "cha ca thac lac"
    ],
    "category": "seafood"
  },
  {
    "id": "cha-ca-nha-trang",
    "name": {
      "vi": "Chả cá chiên / hấp Nha Trang",
      "en": "Fried fish cake"
    },
    "icon": "🍥",
    "aliases": [
      "cha ca nha trang",
      "chả cá hấp",
      "chả cá chiên"
    ],
    "category": "seafood"
  },
  {
    "id": "thanh-cua-surimi",
    "name": {
      "vi": "Thanh cua (Surimi)",
      "en": "Crab stick"
    },
    "icon": "🦀",
    "aliases": [
      "thanh cua",
      "surimi",
      "cua vien"
    ],
    "category": "seafood"
  },
  {
    "id": "rau-muong",
    "name": {
      "vi": "Rau muống",
      "en": "Water spinach (Morning glory)"
    },
    "icon": "🥬",
    "commonStaple": true,
    "aliases": [
      "rau muong",
      "rau muống",
      "muống xào",
      "canh rau muống"
    ],
    "category": "vegetable"
  },
  {
    "id": "rau-ngot",
    "name": {
      "vi": "Rau ngót",
      "en": "Katuk / Sweet leaf"
    },
    "icon": "🥬",
    "commonStaple": true,
    "aliases": [
      "rau ngot",
      "rau ngót",
      "ngót nấu thịt"
    ],
    "category": "vegetable"
  },
  {
    "id": "rau-mong-toi",
    "name": {
      "vi": "Rau mồng tơi",
      "en": "Malabar spinach"
    },
    "icon": "🥬",
    "commonStaple": true,
    "aliases": [
      "mong toi",
      "mồng tơi",
      "canh mồng tơi"
    ],
    "category": "vegetable"
  },
  {
    "id": "rau-day",
    "name": {
      "vi": "Rau đay (nấu canh cua)",
      "en": "Jute leaves"
    },
    "icon": "🥬",
    "aliases": [
      "rau day",
      "rau đay",
      "canh rau đay"
    ],
    "category": "vegetable"
  },
  {
    "id": "rau-cai-ngot",
    "name": {
      "vi": "Cải ngọt",
      "en": "Choy sum"
    },
    "icon": "🥬",
    "commonStaple": true,
    "aliases": [
      "cai ngot",
      "cải ngọt",
      "rau cải"
    ],
    "category": "vegetable"
  },
  {
    "id": "rau-cai-be-xanh",
    "name": {
      "vi": "Cải bẹ xanh (cải cay, cải đắng)",
      "en": "Mustard greens"
    },
    "icon": "🥬",
    "aliases": [
      "cai be xanh",
      "cải bẹ xanh",
      "cai cay",
      "cải đắng"
    ],
    "category": "vegetable"
  },
  {
    "id": "rau-cai-thia",
    "name": {
      "vi": "Cải thìa (cải chíp)",
      "en": "Bok choy"
    },
    "icon": "🥬",
    "commonStaple": true,
    "aliases": [
      "cai thia",
      "cải thìa",
      "cai chip",
      "cải chíp",
      "bok choy"
    ],
    "category": "vegetable"
  },
  {
    "id": "rau-cai-cuc",
    "name": {
      "vi": "Cải cúc (tần ô)",
      "en": "Garland chrysanthemum"
    },
    "icon": "🥬",
    "aliases": [
      "cai cuc",
      "cải cúc",
      "tan o",
      "tần ô"
    ],
    "category": "vegetable"
  },
  {
    "id": "rau-bap-cai",
    "name": {
      "vi": "Bắp cải trắng",
      "en": "Cabbage"
    },
    "icon": "🥬",
    "commonStaple": true,
    "aliases": [
      "bap cai",
      "bắp cải",
      "bắp cải luộc",
      "bắp cải xào"
    ],
    "category": "vegetable"
  },
  {
    "id": "bap-cai-tim",
    "name": {
      "vi": "Bắp cải tím",
      "en": "Red purple cabbage"
    },
    "icon": "🥬",
    "aliases": [
      "bap cai tim",
      "bắp cải tím",
      "cải tím"
    ],
    "category": "vegetable"
  },
  {
    "id": "cai-thao",
    "name": {
      "vi": "Cải thảo",
      "en": "Napa cabbage"
    },
    "icon": "🥬",
    "commonStaple": true,
    "aliases": [
      "cai thao",
      "cải thảo",
      "bắp cải thảo"
    ],
    "category": "vegetable"
  },
  {
    "id": "xa-lach",
    "name": {
      "vi": "Xà lách (xà lách mỡ, búp, lolo)",
      "en": "Lettuce"
    },
    "icon": "🥗",
    "commonStaple": true,
    "aliases": [
      "xa lach",
      "xà lách",
      "rau song",
      "rau sống"
    ],
    "category": "vegetable"
  },
  {
    "id": "rau-cang-cua",
    "name": {
      "vi": "Rau càng cua",
      "en": "Peperomia pellucida"
    },
    "icon": "🥗",
    "aliases": [
      "rau cang cua",
      "càng cua trộn"
    ],
    "category": "vegetable"
  },
  {
    "id": "rau-ma",
    "name": {
      "vi": "Rau má",
      "en": "Pennywort"
    },
    "icon": "🌱",
    "aliases": [
      "rau ma",
      "rau má",
      "canh rau má"
    ],
    "category": "vegetable"
  },
  {
    "id": "rau-den",
    "name": {
      "vi": "Rau dền (dền đỏ, dền cơm)",
      "en": "Amaranth greens"
    },
    "icon": "🥬",
    "aliases": [
      "rau den",
      "rau dền",
      "den do",
      "dền đỏ"
    ],
    "category": "vegetable"
  },
  {
    "id": "bong-dien-dien",
    "name": {
      "vi": "Bông điên điển",
      "en": "Sesbania flowers"
    },
    "icon": "🌼",
    "aliases": [
      "dien dien",
      "điên điển",
      "bong dien dien"
    ],
    "category": "vegetable"
  },
  {
    "id": "hoa-chuoi",
    "name": {
      "vi": "Hoa chuối (bắp chuối bào)",
      "en": "Banana blossom"
    },
    "icon": "🌺",
    "aliases": [
      "hoa chuoi",
      "bắp chuối",
      "hoa chuối bào",
      "nom hoa chuoi"
    ],
    "category": "vegetable"
  },
  {
    "id": "hoa-thien-ly",
    "name": {
      "vi": "Hoa thiên lý",
      "en": "Telosma cordata flowers"
    },
    "icon": "🌼",
    "aliases": [
      "thien ly",
      "thiên lý",
      "hoa thien ly",
      "canh thien ly"
    ],
    "category": "vegetable"
  },
  {
    "id": "ngo-sen",
    "name": {
      "vi": "Ngó sen tươi",
      "en": "Lotus stem / rootlet"
    },
    "icon": "🌱",
    "aliases": [
      "ngo sen",
      "ngó sen",
      "gỏi ngó sen"
    ],
    "category": "vegetable"
  },
  {
    "id": "cu-sen",
    "name": {
      "vi": "Củ sen",
      "en": "Lotus root"
    },
    "icon": "🥔",
    "aliases": [
      "cu sen",
      "củ sen",
      "canh củ sen"
    ],
    "category": "vegetable"
  },
  {
    "id": "mang-tay",
    "name": {
      "vi": "Măng tây",
      "en": "Asparagus"
    },
    "icon": "🥦",
    "aliases": [
      "mang tay",
      "măng tây",
      "mang tay xao"
    ],
    "category": "vegetable"
  },
  {
    "id": "bong-cai-xanh",
    "name": {
      "vi": "Bông cải xanh (súp lơ xanh / trắng)",
      "en": "Broccoli / Cauliflower"
    },
    "icon": "🥦",
    "commonStaple": true,
    "aliases": [
      "bong cai",
      "bông cải",
      "sup lo",
      "súp lơ",
      "broccoli"
    ],
    "category": "vegetable"
  },
  {
    "id": "dau-cove",
    "name": {
      "vi": "Đậu cô ve (đậu que)",
      "en": "Green beans"
    },
    "icon": "🫘",
    "commonStaple": true,
    "aliases": [
      "dau cove",
      "đậu cô ve",
      "dau que",
      "đậu que",
      "đậu bắp"
    ],
    "category": "vegetable"
  },
  {
    "id": "dau-bap",
    "name": {
      "vi": "Đậu bắp",
      "en": "Okra"
    },
    "icon": "🌱",
    "commonStaple": true,
    "aliases": [
      "dau bap",
      "đậu bắp",
      "okra"
    ],
    "category": "vegetable"
  },
  {
    "id": "dau-ha-lan",
    "name": {
      "vi": "Đậu Hà Lan (trái, hạt)",
      "en": "Snow peas / Green peas"
    },
    "icon": "🫘",
    "aliases": [
      "dau ha lan",
      "đậu Hà Lan"
    ],
    "category": "vegetable"
  },
  {
    "id": "ca-chua",
    "name": {
      "vi": "Cà chua",
      "en": "Tomato"
    },
    "icon": "🍅",
    "commonStaple": true,
    "aliases": [
      "ca chua",
      "cà chua",
      "tomato"
    ],
    "category": "vegetable"
  },
  {
    "id": "ca-tim",
    "name": {
      "vi": "Cà tím",
      "en": "Eggplant / Aubergine"
    },
    "icon": "🍆",
    "commonStaple": true,
    "aliases": [
      "ca tim",
      "cà tím",
      "cà tím nướng"
    ],
    "category": "vegetable"
  },
  {
    "id": "ca-phao",
    "name": {
      "vi": "Cà pháo (cà muối giòn)",
      "en": "Thai round eggplant"
    },
    "icon": "⚪",
    "commonStaple": true,
    "aliases": [
      "ca phao",
      "cà pháo",
      "ca muoi",
      "cà muối"
    ],
    "category": "vegetable"
  },
  {
    "id": "dua-leo",
    "name": {
      "vi": "Dưa leo (dưa chuột)",
      "en": "Cucumber"
    },
    "icon": "🥒",
    "commonStaple": true,
    "aliases": [
      "dua leo",
      "dưa leo",
      "dua chuot",
      "dưa chuột"
    ],
    "category": "vegetable"
  },
  {
    "id": "qua-bau",
    "name": {
      "vi": "Quả bầu",
      "en": "Calabash / Bottle gourd"
    },
    "icon": "🥒",
    "commonStaple": true,
    "aliases": [
      "bau",
      "bầu",
      "qua bau",
      "canh bầu"
    ],
    "category": "vegetable"
  },
  {
    "id": "bi-dao",
    "name": {
      "vi": "Bí đao (bí xanh)",
      "en": "Winter melon"
    },
    "icon": "🥒",
    "commonStaple": true,
    "aliases": [
      "bi dao",
      "bí đao",
      "bi xanh",
      "bí xanh",
      "canh bí đao"
    ],
    "category": "vegetable"
  },
  {
    "id": "bi-do",
    "name": {
      "vi": "Bí đỏ (bí ngô)",
      "en": "Pumpkin"
    },
    "icon": "🎃",
    "commonStaple": true,
    "aliases": [
      "bi do",
      "bí đỏ",
      "bi ngo",
      "bí ngô",
      "canh bí đỏ"
    ],
    "category": "vegetable"
  },
  {
    "id": "muop-huong",
    "name": {
      "vi": "Mướp hương",
      "en": "Luffa / Sponge gourd"
    },
    "icon": "🥒",
    "commonStaple": true,
    "aliases": [
      "muop",
      "mướp",
      "muop huong",
      "mướp hương",
      "canh mướp"
    ],
    "category": "vegetable"
  },
  {
    "id": "kho-qua",
    "name": {
      "vi": "Khổ qua (mướp đắng)",
      "en": "Bitter melon"
    },
    "icon": "🥒",
    "commonStaple": true,
    "aliases": [
      "kho qua",
      "khổ qua",
      "muop dang",
      "mướp đắng"
    ],
    "category": "vegetable"
  },
  {
    "id": "su-su",
    "name": {
      "vi": "Su su (quả, ngọn su su)",
      "en": "Chayote"
    },
    "icon": "🍐",
    "commonStaple": true,
    "aliases": [
      "su su",
      "ngon su su",
      "ngọn su su"
    ],
    "category": "vegetable"
  },
  {
    "id": "su-hao",
    "name": {
      "vi": "Su hào",
      "en": "Kohlrabi"
    },
    "icon": "🥔",
    "aliases": [
      "su hao",
      "su hào",
      "su hào xào"
    ],
    "category": "vegetable"
  },
  {
    "id": "cu-cai-trang",
    "name": {
      "vi": "Củ cải trắng",
      "en": "Daikon white radish"
    },
    "icon": "🥕",
    "commonStaple": true,
    "aliases": [
      "cu cai",
      "củ cải",
      "cu cai trang",
      "củ cải trắng",
      "daikon"
    ],
    "category": "vegetable"
  },
  {
    "id": "ca-rot",
    "name": {
      "vi": "Cà rốt",
      "en": "Carrot"
    },
    "icon": "🥕",
    "commonStaple": true,
    "aliases": [
      "ca rot",
      "cà rốt",
      "carrot"
    ],
    "category": "vegetable"
  },
  {
    "id": "cu-den",
    "name": {
      "vi": "Củ dền đỏ",
      "en": "Beetroot"
    },
    "icon": "🥔",
    "aliases": [
      "cu den",
      "củ dền"
    ],
    "category": "vegetable"
  },
  {
    "id": "doc-mung-bac-ha",
    "name": {
      "vi": "Dọc mùng (bạc hà nấu canh chua)",
      "en": "Elephant ear stalk"
    },
    "icon": "🌱",
    "commonStaple": true,
    "aliases": [
      "doc mung",
      "dọc mùng",
      "bac ha",
      "bạc hà"
    ],
    "category": "vegetable"
  },
  {
    "id": "mang-tuoi",
    "name": {
      "vi": "Măng tươi (măng củ, măng tre)",
      "en": "Fresh bamboo shoots"
    },
    "icon": "🎋",
    "aliases": [
      "mang tuoi",
      "măng tươi",
      "mang cu",
      "măng tre"
    ],
    "category": "vegetable"
  },
  {
    "id": "mang-kho",
    "name": {
      "vi": "Măng khô (nấu canh măng ngan)",
      "en": "Dried bamboo shoots"
    },
    "icon": "🎋",
    "aliases": [
      "mang kho",
      "măng khô",
      "mang luoi lon"
    ],
    "category": "vegetable"
  },
  {
    "id": "mang-chua",
    "name": {
      "vi": "Măng chua (ngâm tỏi ớt)",
      "en": "Sour fermented bamboo"
    },
    "icon": "🎋",
    "aliases": [
      "mang chua",
      "măng chua",
      "mang ngam"
    ],
    "category": "vegetable"
  },
  {
    "id": "dua-cai-chua",
    "name": {
      "vi": "Dưa cải chua (dưa muối)",
      "en": "Pickled mustard greens"
    },
    "icon": "🥬",
    "commonStaple": true,
    "aliases": [
      "dua chua",
      "dưa chua",
      "dua cai",
      "dưa cải",
      "dua muoi"
    ],
    "category": "vegetable"
  },
  {
    "id": "cu-kieu",
    "name": {
      "vi": "Củ kiệu (ngâm chua ngọt)",
      "en": "Pickled scallion bulbs"
    },
    "icon": "🧅",
    "aliases": [
      "cu kieu",
      "củ kiệu",
      "kiệu muối"
    ],
    "category": "vegetable"
  },
  {
    "id": "gia-do",
    "name": {
      "vi": "Giá đỗ tươi",
      "en": "Bean sprouts"
    },
    "icon": "🌱",
    "commonStaple": true,
    "aliases": [
      "gia",
      "giá",
      "gia do",
      "giá đỗ"
    ],
    "category": "vegetable"
  },
  {
    "id": "he-la",
    "name": {
      "vi": "Hẹ lá",
      "en": "Garlic chives"
    },
    "icon": "🌱",
    "commonStaple": true,
    "aliases": [
      "he",
      "hẹ",
      "he la",
      "lá hẹ"
    ],
    "category": "vegetable"
  },
  {
    "id": "can-tay",
    "name": {
      "vi": "Cần tây (xào bò, mực)",
      "en": "Celery"
    },
    "icon": "🥬",
    "commonStaple": true,
    "aliases": [
      "can tay",
      "cần tây",
      "rau cần"
    ],
    "category": "vegetable"
  },
  {
    "id": "can-nuoc",
    "name": {
      "vi": "Rau cần nước (nấu cá chép)",
      "en": "Water dropwort"
    },
    "icon": "🥬",
    "aliases": [
      "can nuoc",
      "cần nước",
      "rau can"
    ],
    "category": "vegetable"
  },
  {
    "id": "hanh-tay",
    "name": {
      "vi": "Hành tây (trắng, tím)",
      "en": "Onion"
    },
    "icon": "🧅",
    "commonStaple": true,
    "aliases": [
      "hanh tay",
      "hành tây",
      "củ hành tây"
    ],
    "category": "vegetable"
  },
  {
    "id": "ot-chuong",
    "name": {
      "vi": "Ớt chuông (đỏ, vàng, xanh)",
      "en": "Bell pepper"
    },
    "icon": "🫑",
    "commonStaple": true,
    "aliases": [
      "ot chuong",
      "ớt chuông",
      "ớt đà lạt"
    ],
    "category": "vegetable"
  },
  {
    "id": "dua-thom-khom",
    "name": {
      "vi": "Dứa (thơm / khóm nấu canh chua)",
      "en": "Pineapple"
    },
    "icon": "🍍",
    "commonStaple": true,
    "aliases": [
      "dua",
      "dứa",
      "thom",
      "thơm",
      "khom",
      "khóm"
    ],
    "category": "vegetable"
  },
  {
    "id": "chuoi-xanh",
    "name": {
      "vi": "Chuối xanh (nấu ốc chuối đậu)",
      "en": "Green plantain"
    },
    "icon": "🍌",
    "aliases": [
      "chuoi xanh",
      "chuối xanh",
      "chuoi chat"
    ],
    "category": "vegetable"
  },
  {
    "id": "qua-sau",
    "name": {
      "vi": "Quả sấu tươi / sấu ngâm",
      "en": "Dracontomelon fruit (Sau)"
    },
    "icon": "🍏",
    "aliases": [
      "sau",
      "sấu",
      "qua sau",
      "vịt om sấu"
    ],
    "category": "vegetable"
  },
  {
    "id": "tai-chua",
    "name": {
      "vi": "Tai chua (nấu canh riêu)",
      "en": "Dried Garcinia cowa"
    },
    "icon": "🍃",
    "aliases": [
      "tai chua",
      "quả tai chua"
    ],
    "category": "vegetable"
  },
  {
    "id": "rong-bien-kho",
    "name": {
      "vi": "Rong biển khô (nấu canh, cuộn)",
      "en": "Dried seaweed / Nori"
    },
    "icon": "🌿",
    "commonStaple": true,
    "aliases": [
      "rong bien",
      "rong biển",
      "la kim",
      "seaweed"
    ],
    "category": "vegetable"
  },
  {
    "id": "cu-nang-ma-thay",
    "name": {
      "vi": "Củ năng (củ mã thầy)",
      "en": "Water chestnut"
    },
    "icon": "🥔",
    "aliases": [
      "cu nang",
      "củ năng",
      "ma thay",
      "mã thầy"
    ],
    "category": "vegetable"
  },
  {
    "id": "rau-nhut",
    "name": {
      "vi": "Rau nhút (rau rút nấu canh)",
      "en": "Water mimosa"
    },
    "icon": "🌿",
    "aliases": [
      "rau nhut",
      "rau rút",
      "canh rau rut"
    ],
    "category": "vegetable"
  },
  {
    "id": "rau-dang",
    "name": {
      "vi": "Rau đắng (ăn lẩu cá kèo, cháo cá)",
      "en": "Bitter herb"
    },
    "icon": "🌿",
    "aliases": [
      "rau dang",
      "rau đắng"
    ],
    "category": "vegetable"
  },
  {
    "id": "ngo-gai-rau-om",
    "name": {
      "vi": "Ngò gai & Rau ôm (ngò om)",
      "en": "Culantro & Rice paddy herb"
    },
    "icon": "🌿",
    "commonStaple": true,
    "aliases": [
      "ngo gai",
      "ngò gai",
      "mui tau",
      "mùi tàu",
      "rau om",
      "ngò om"
    ],
    "category": "vegetable"
  },
  {
    "id": "nam-huong-kho",
    "name": {
      "vi": "Nấm hương khô (nấm đông cô)",
      "en": "Dried shiitake mushrooms"
    },
    "icon": "🍄",
    "commonStaple": true,
    "aliases": [
      "nam huong",
      "nấm hương",
      "nam dong co",
      "nấm đông cô",
      "shiitake"
    ],
    "category": "mushroom"
  },
  {
    "id": "nam-huong-tuoi",
    "name": {
      "vi": "Nấm hương tươi",
      "en": "Fresh shiitake mushrooms"
    },
    "icon": "🍄",
    "aliases": [
      "nam huong tuoi",
      "nấm hương tươi"
    ],
    "category": "mushroom"
  },
  {
    "id": "nam-rom",
    "name": {
      "vi": "Nấm rơm tươi",
      "en": "Straw mushrooms"
    },
    "icon": "🍄",
    "commonStaple": true,
    "aliases": [
      "nam rom",
      "nấm rơm"
    ],
    "category": "mushroom"
  },
  {
    "id": "nam-kim-cham",
    "name": {
      "vi": "Nấm kim châm",
      "en": "Enoki mushrooms"
    },
    "icon": "🍄",
    "commonStaple": true,
    "aliases": [
      "nam kim cham",
      "nấm kim châm",
      "kim cham"
    ],
    "category": "mushroom"
  },
  {
    "id": "nam-dui-ga",
    "name": {
      "vi": "Nấm đùi gà (King oyster)",
      "en": "King oyster mushrooms"
    },
    "icon": "🍄",
    "commonStaple": true,
    "aliases": [
      "nam dui ga",
      "nấm đùi gà"
    ],
    "category": "mushroom"
  },
  {
    "id": "nam-bao-ngu",
    "name": {
      "vi": "Nấm bào ngư (nấm sò trắng, xám)",
      "en": "Oyster mushrooms"
    },
    "icon": "🍄",
    "commonStaple": true,
    "aliases": [
      "nam bao ngu",
      "nấm bào ngư",
      "nam so",
      "nấm sò"
    ],
    "category": "mushroom"
  },
  {
    "id": "moc-nhi",
    "name": {
      "vi": "Mộc nhĩ (nấm mèo đen)",
      "en": "Wood ear mushrooms"
    },
    "icon": "🍄",
    "commonStaple": true,
    "aliases": [
      "moc nhi",
      "mộc nhĩ",
      "nam meo",
      "nấm mèo"
    ],
    "category": "mushroom"
  },
  {
    "id": "nam-tuyet",
    "name": {
      "vi": "Nấm tuyết (ngân nhĩ)",
      "en": "Snow fungus"
    },
    "icon": "🍄",
    "aliases": [
      "nam tuyet",
      "nấm tuyết",
      "ngan nhi",
      "ngân nhĩ"
    ],
    "category": "mushroom"
  },
  {
    "id": "nam-mo",
    "name": {
      "vi": "Nấm mỡ (trắng, nâu)",
      "en": "Button mushrooms"
    },
    "icon": "🍄",
    "aliases": [
      "nam mo",
      "nấm mỡ"
    ],
    "category": "mushroom"
  },
  {
    "id": "nam-hai-san",
    "name": {
      "vi": "Nấm hải sản (bạch tuyết)",
      "en": "White beech mushrooms"
    },
    "icon": "🍄",
    "aliases": [
      "nam hai san",
      "nấm hải sản",
      "nam bach tuyet"
    ],
    "category": "mushroom"
  },
  {
    "id": "nam-shimeji",
    "name": {
      "vi": "Nấm linh chi nâu (Shimeji)",
      "en": "Brown beech mushrooms"
    },
    "icon": "🍄",
    "aliases": [
      "nam shimeji",
      "nấm linh chi nâu",
      "shimeji"
    ],
    "category": "mushroom"
  },
  {
    "id": "nam-moi",
    "name": {
      "vi": "Nấm mối",
      "en": "Termite mushrooms"
    },
    "icon": "🍄",
    "aliases": [
      "nam moi",
      "nấm mối"
    ],
    "category": "mushroom"
  },
  {
    "id": "nam-tram",
    "name": {
      "vi": "Nấm tràm Phú Quốc",
      "en": "Melaleuca mushrooms"
    },
    "icon": "🍄",
    "aliases": [
      "nam tram",
      "nấm tràm"
    ],
    "category": "mushroom"
  },
  {
    "id": "nam-linh-chi",
    "name": {
      "vi": "Nấm linh chi (hãm trà, hầm)",
      "en": "Lingzhi reishi"
    },
    "icon": "🍄",
    "aliases": [
      "nam linh chi",
      "nấm linh chi"
    ],
    "category": "mushroom"
  },
  {
    "id": "nam-bung-cu-ga",
    "name": {
      "vi": "Nấm bụng dê (Morel)",
      "en": "Morel mushrooms"
    },
    "icon": "🍄",
    "aliases": [
      "nam bung de",
      "nấm bụng dê"
    ],
    "category": "mushroom"
  },
  {
    "id": "nam-tai-meo-trang",
    "name": {
      "vi": "Nấm tai mèo trắng",
      "en": "White wood ear"
    },
    "icon": "🍄",
    "aliases": [
      "nam meo trang",
      "mộc nhĩ trắng"
    ],
    "category": "mushroom"
  },
  {
    "id": "nam-ngoc-cham",
    "name": {
      "vi": "Nấm ngọc châm",
      "en": "Hypsizygus marmoreus"
    },
    "icon": "🍄",
    "aliases": [
      "nam ngoc cham",
      "nấm ngọc châm"
    ],
    "category": "mushroom"
  },
  {
    "id": "nam-kim-dinh",
    "name": {
      "vi": "Nấm kim đỉnh (hoàng kim)",
      "en": "Golden oyster mushrooms"
    },
    "icon": "🍄",
    "aliases": [
      "nam kim dinh",
      "nấm kim đỉnh"
    ],
    "category": "mushroom"
  },
  {
    "id": "trung-ga",
    "name": {
      "vi": "Trứng gà tươi (gà ta, gà công nghiệp)",
      "en": "Chicken eggs"
    },
    "icon": "🥚",
    "commonStaple": true,
    "aliases": [
      "trung ga",
      "trứng gà",
      "trung",
      "trứng",
      "long do trung ga"
    ],
    "category": "egg_tofu"
  },
  {
    "id": "trung-vit",
    "name": {
      "vi": "Trứng vịt",
      "en": "Duck eggs"
    },
    "icon": "🥚",
    "commonStaple": true,
    "aliases": [
      "trung vit",
      "trứng vịt"
    ],
    "category": "egg_tofu"
  },
  {
    "id": "trung-cut",
    "name": {
      "vi": "Trứng cút (tươi, luộc)",
      "en": "Quail eggs"
    },
    "icon": "🥚",
    "commonStaple": true,
    "aliases": [
      "trung cut",
      "trứng cút"
    ],
    "category": "egg_tofu"
  },
  {
    "id": "trung-vit-lon",
    "name": {
      "vi": "Trứng vịt lộn (hột vịt lộn)",
      "en": "Balut fertilized duck egg"
    },
    "icon": "🥚",
    "aliases": [
      "trung vit lon",
      "trứng vịt lộn",
      "hot vit lon",
      "hột vịt lộn"
    ],
    "category": "egg_tofu"
  },
  {
    "id": "trung-muoi",
    "name": {
      "vi": "Trứng muối (lòng đỏ trứng muối)",
      "en": "Salted egg yolk"
    },
    "icon": "🥚",
    "aliases": [
      "trung muoi",
      "trứng muối",
      "long do trung muoi"
    ],
    "category": "egg_tofu"
  },
  {
    "id": "trung-bac-thao",
    "name": {
      "vi": "Trứng bắc thảo",
      "en": "Century preserved egg"
    },
    "icon": "🥚",
    "aliases": [
      "trung bac thao",
      "trứng bắc thảo",
      "bách thảo"
    ],
    "category": "egg_tofu"
  },
  {
    "id": "dau-phu-trang",
    "name": {
      "vi": "Đậu phụ tươi (đậu hũ trắng)",
      "en": "Fresh white tofu"
    },
    "icon": "🧈",
    "commonStaple": true,
    "aliases": [
      "dau phu",
      "đậu phụ",
      "dau hu",
      "đậu hũ",
      "dau phu trang",
      "đậu trắng"
    ],
    "category": "egg_tofu"
  },
  {
    "id": "dau-phu-chien",
    "name": {
      "vi": "Đậu phụ rán (chiên vàng)",
      "en": "Fried tofu"
    },
    "icon": "🧈",
    "commonStaple": true,
    "aliases": [
      "dau phu ran",
      "đậu rán",
      "dau hu chien",
      "đậu hũ chiên"
    ],
    "category": "egg_tofu"
  },
  {
    "id": "dau-hu-non",
    "name": {
      "vi": "Đậu hũ non (Silken tofu)",
      "en": "Silken soft tofu"
    },
    "icon": "🧈",
    "commonStaple": true,
    "aliases": [
      "dau hu non",
      "đậu hũ non",
      "tofu non"
    ],
    "category": "egg_tofu"
  },
  {
    "id": "tau-hu-ky-kho",
    "name": {
      "vi": "Tàu hũ ky khô (váng đậu khô)",
      "en": "Dried beancurd skin / Yuba"
    },
    "icon": "🥢",
    "aliases": [
      "tau hu ky",
      "tàu hũ ky",
      "vang dau",
      "váng đậu",
      "phù trúc"
    ],
    "category": "egg_tofu"
  },
  {
    "id": "tau-hu-ky-tuoi",
    "name": {
      "vi": "Tàu hũ ky tươi (lá tàu hũ dẻo)",
      "en": "Fresh beancurd sheets"
    },
    "icon": "🥢",
    "aliases": [
      "tau hu ky tuoi",
      "tàu hũ ky lá tươi"
    ],
    "category": "egg_tofu"
  },
  {
    "id": "dau-hu-trung",
    "name": {
      "vi": "Đậu hũ trứng (Egg tofu)",
      "en": "Egg tofu tube"
    },
    "icon": "🧈",
    "aliases": [
      "dau hu trung",
      "đậu hũ trứng"
    ],
    "category": "egg_tofu"
  },
  {
    "id": "chao-dau-phu",
    "name": {
      "vi": "Chao (đậu phụ nhự)",
      "en": "Fermented tofu / Chao"
    },
    "icon": "🧈",
    "aliases": [
      "chao",
      "đậu hũ chao",
      "chao đỏ",
      "chao môn"
    ],
    "category": "egg_tofu"
  },
  {
    "id": "dau-xanh-tach-vo",
    "name": {
      "vi": "Đậu xanh cà (đã bóc vỏ)",
      "en": "Split peeled mung beans"
    },
    "icon": "🫘",
    "commonStaple": true,
    "aliases": [
      "dau xanh",
      "đậu xanh",
      "dau xanh ca",
      "đậu xanh không vỏ"
    ],
    "category": "egg_tofu"
  },
  {
    "id": "dau-xanh-nguyen-hat",
    "name": {
      "vi": "Đậu xanh nguyên hạt",
      "en": "Whole mung beans"
    },
    "icon": "🫘",
    "aliases": [
      "dau xanh nguyen hat",
      "đậu xanh có vỏ"
    ],
    "category": "egg_tofu"
  },
  {
    "id": "dau-den",
    "name": {
      "vi": "Đậu đen (xanh lòng)",
      "en": "Black beans"
    },
    "icon": "🫘",
    "commonStaple": true,
    "aliases": [
      "dau den",
      "đậu đen",
      "che dau den"
    ],
    "category": "egg_tofu"
  },
  {
    "id": "dau-do",
    "name": {
      "vi": "Đậu đỏ",
      "en": "Red azuki beans"
    },
    "icon": "🫘",
    "commonStaple": true,
    "aliases": [
      "dau do",
      "đậu đỏ",
      "che dau do"
    ],
    "category": "egg_tofu"
  },
  {
    "id": "dau-nanh",
    "name": {
      "vi": "Đậu nành (đậu tương)",
      "en": "Soybeans"
    },
    "icon": "🫘",
    "aliases": [
      "dau nanh",
      "đậu nành",
      "dau tuong",
      "đậu tương"
    ],
    "category": "egg_tofu"
  },
  {
    "id": "dau-trang",
    "name": {
      "vi": "Đậu trắng",
      "en": "White navy beans"
    },
    "icon": "🫘",
    "aliases": [
      "dau trang",
      "đậu trắng"
    ],
    "category": "egg_tofu"
  },
  {
    "id": "dau-ngu",
    "name": {
      "vi": "Đậu ngự",
      "en": "Lima beans"
    },
    "icon": "🫘",
    "aliases": [
      "dau ngu",
      "đậu ngự"
    ],
    "category": "egg_tofu"
  },
  {
    "id": "hat-chia",
    "name": {
      "vi": "Hạt chia",
      "en": "Chia seeds"
    },
    "icon": "🌱",
    "aliases": [
      "hat chia",
      "hạt chia"
    ],
    "category": "egg_tofu"
  },
  {
    "id": "sua-dau-nanh",
    "name": {
      "vi": "Sữa đậu nành nguyên chất",
      "en": "Soy milk"
    },
    "icon": "🥛",
    "aliases": [
      "sua dau nanh",
      "sữa đậu nành"
    ],
    "category": "egg_tofu"
  },
  {
    "id": "sua-tuoi-khong-duong",
    "name": {
      "vi": "Sữa tươi không đường",
      "en": "Unsweetened fresh milk"
    },
    "icon": "🥛",
    "commonStaple": true,
    "aliases": [
      "sua tuoi",
      "sữa tươi",
      "sua khong duong"
    ],
    "category": "egg_tofu"
  },
  {
    "id": "sua-dac",
    "name": {
      "vi": "Sữa đặc có đường (Ông Thọ)",
      "en": "Sweetened condensed milk"
    },
    "icon": "🥫",
    "commonStaple": true,
    "aliases": [
      "sua dac",
      "sữa đặc",
      "sua ong tho",
      "sữa ông thọ"
    ],
    "category": "egg_tofu"
  },
  {
    "id": "nuoc-cot-dua",
    "name": {
      "vi": "Nước cốt dừa (đóng lon / tươi)",
      "en": "Coconut milk / cream"
    },
    "icon": "🥥",
    "commonStaple": true,
    "aliases": [
      "nuoc cot dua",
      "nước cốt dừa",
      "cot dua",
      "cốt dừa"
    ],
    "category": "egg_tofu"
  },
  {
    "id": "nuoc-dua-tuoi",
    "name": {
      "vi": "Nước dừa tươi xiêm",
      "en": "Fresh coconut water"
    },
    "icon": "🥥",
    "commonStaple": true,
    "aliases": [
      "nuoc dua",
      "nước dừa",
      "dua xiem",
      "dừa xiêm"
    ],
    "category": "egg_tofu"
  },
  {
    "id": "hanh-la",
    "name": {
      "vi": "Hành lá (hành hoa)",
      "en": "Scallions / Spring onion"
    },
    "icon": "🌱",
    "commonStaple": true,
    "aliases": [
      "hanh la",
      "hành lá",
      "hanh hoa",
      "dau hanh"
    ],
    "category": "herb_spice"
  },
  {
    "id": "ngo-ri",
    "name": {
      "vi": "Ngò rí (rau mùi ta)",
      "en": "Coriander / Cilantro"
    },
    "icon": "🌿",
    "commonStaple": true,
    "aliases": [
      "ngo ri",
      "ngò rí",
      "rau mui",
      "rau mùi",
      "rau ngo"
    ],
    "category": "herb_spice"
  },
  {
    "id": "hung-que",
    "name": {
      "vi": "Húng quế (rau quế ăn phở)",
      "en": "Thai basil"
    },
    "icon": "🌿",
    "commonStaple": true,
    "aliases": [
      "hung que",
      "húng quế",
      "rau que",
      "rau quế"
    ],
    "category": "herb_spice"
  },
  {
    "id": "hung-lui",
    "name": {
      "vi": "Húng lủi (húng láng, bạc hà)",
      "en": "Spearmint"
    },
    "icon": "🌿",
    "commonStaple": true,
    "aliases": [
      "hung lui",
      "húng lủi",
      "hung lang",
      "húng bạc hà"
    ],
    "category": "herb_spice"
  },
  {
    "id": "tia-to",
    "name": {
      "vi": "Tía tô",
      "en": "Perilla leaves"
    },
    "icon": "🍃",
    "commonStaple": true,
    "aliases": [
      "tia to",
      "tía tô",
      "la tia to"
    ],
    "category": "herb_spice"
  },
  {
    "id": "kinh-gioi",
    "name": {
      "vi": "Kinh giới",
      "en": "Vietnamese balm"
    },
    "icon": "🍃",
    "commonStaple": true,
    "aliases": [
      "kinh gioi",
      "kinh giới",
      "rau kinh gioi"
    ],
    "category": "herb_spice"
  },
  {
    "id": "rau-ram",
    "name": {
      "vi": "Rau răm",
      "en": "Vietnamese coriander"
    },
    "icon": "🌿",
    "commonStaple": true,
    "aliases": [
      "rau ram",
      "rau răm"
    ],
    "category": "herb_spice"
  },
  {
    "id": "diep-ca",
    "name": {
      "vi": "Diếp cá (rau dấp cá)",
      "en": "Fish mint"
    },
    "icon": "🍃",
    "aliases": [
      "diep ca",
      "diếp cá",
      "dap ca",
      "dấp cá"
    ],
    "category": "herb_spice"
  },
  {
    "id": "thi-la",
    "name": {
      "vi": "Thì là (nấu cá, chả cá)",
      "en": "Dill"
    },
    "icon": "🌿",
    "commonStaple": true,
    "aliases": [
      "thi la",
      "thì là",
      "cay thi la"
    ],
    "category": "herb_spice"
  },
  {
    "id": "la-lot",
    "name": {
      "vi": "Lá lốt (bò cuốn lá lốt)",
      "en": "Wild betel leaf (Piper lolot)"
    },
    "icon": "🍃",
    "commonStaple": true,
    "aliases": [
      "la lot",
      "lá lốt",
      "lot"
    ],
    "category": "herb_spice"
  },
  {
    "id": "la-mo",
    "name": {
      "vi": "Lá mơ lông (mơ tam thể)",
      "en": "Paederia lanuginosa"
    },
    "icon": "🍃",
    "aliases": [
      "la mo",
      "lá mơ",
      "mo long"
    ],
    "category": "herb_spice"
  },
  {
    "id": "la-chanh",
    "name": {
      "vi": "Lá chanh tươi (ăn gà luộc)",
      "en": "Kaffir lime leaves"
    },
    "icon": "🍃",
    "commonStaple": true,
    "aliases": [
      "la chanh",
      "lá chanh",
      "lá chanh thái"
    ],
    "category": "herb_spice"
  },
  {
    "id": "sa-cay",
    "name": {
      "vi": "Sả cây (sả băm, đập dập)",
      "en": "Lemongrass"
    },
    "icon": "🎋",
    "commonStaple": true,
    "aliases": [
      "sa",
      "sả",
      "sa cay",
      "củ sả",
      "sa bam",
      "sả băm"
    ],
    "category": "herb_spice"
  },
  {
    "id": "gung-tuoi",
    "name": {
      "vi": "Gừng tươi",
      "en": "Ginger"
    },
    "icon": "🫚",
    "commonStaple": true,
    "aliases": [
      "gung",
      "gừng",
      "gung tuoi",
      "gừng sợi"
    ],
    "category": "herb_spice"
  },
  {
    "id": "nghe-tuoi",
    "name": {
      "vi": "Nghệ tươi (củ nghệ vàng)",
      "en": "Turmeric root"
    },
    "icon": "🫚",
    "commonStaple": true,
    "aliases": [
      "nghe",
      "nghệ",
      "nghe vang",
      "củ nghệ"
    ],
    "category": "herb_spice"
  },
  {
    "id": "rieng-tuoi",
    "name": {
      "vi": "Củ riềng tươi",
      "en": "Galangal root"
    },
    "icon": "🫚",
    "commonStaple": true,
    "aliases": [
      "rieng",
      "riềng",
      "cu rieng",
      "củ riềng",
      "riềng xay"
    ],
    "category": "herb_spice"
  },
  {
    "id": "hanh-tim",
    "name": {
      "vi": "Hành tím (hành khô ta)",
      "en": "Shallots"
    },
    "icon": "🧅",
    "commonStaple": true,
    "aliases": [
      "hanh tim",
      "hành tím",
      "hanh kho",
      "hành khô",
      "shallots"
    ],
    "category": "herb_spice"
  },
  {
    "id": "toi-ta",
    "name": {
      "vi": "Tỏi (tỏi ta, tỏi cô đơn Lý Sơn)",
      "en": "Garlic"
    },
    "icon": "🧄",
    "commonStaple": true,
    "aliases": [
      "toi",
      "tỏi",
      "toi bam",
      "tỏi băm",
      "toi ly son",
      "garlic"
    ],
    "category": "herb_spice"
  },
  {
    "id": "ot-hiem-do",
    "name": {
      "vi": "Ớt hiểm (ớt đỏ cay)",
      "en": "Bird’s eye chili"
    },
    "icon": "🌶️",
    "commonStaple": true,
    "aliases": [
      "ot",
      "ớt",
      "ot hiem",
      "ớt hiểm",
      "ot do",
      "ớt đỏ",
      "ot cay"
    ],
    "category": "herb_spice"
  },
  {
    "id": "ot-sung",
    "name": {
      "vi": "Ớt sừng không cay (tỉa hoa)",
      "en": "Horn chili"
    },
    "icon": "🌶️",
    "aliases": [
      "ot sung",
      "ớt sừng",
      "ot khong cay"
    ],
    "category": "herb_spice"
  },
  {
    "id": "chanh-tuoi",
    "name": {
      "vi": "Chanh tươi (chanh không hạt)",
      "en": "Lime / Lemon"
    },
    "icon": "🍋",
    "commonStaple": true,
    "aliases": [
      "chanh",
      "chanh tuoi",
      "nuoc cot chanh",
      "chanh không hạt"
    ],
    "category": "herb_spice"
  },
  {
    "id": "quat-tac",
    "name": {
      "vi": "Quất tươi (trái tắc)",
      "en": "Calamansi"
    },
    "icon": "🍊",
    "commonStaple": true,
    "aliases": [
      "quat",
      "quất",
      "tac",
      "tắc",
      "trái tắc"
    ],
    "category": "herb_spice"
  },
  {
    "id": "me-chua",
    "name": {
      "vi": "Me chua (me vắt, cốt me)",
      "en": "Tamarind pulp"
    },
    "icon": "🫘",
    "commonStaple": true,
    "aliases": [
      "me",
      "me chua",
      "cot me",
      "cốt me",
      "me vat"
    ],
    "category": "herb_spice"
  },
  {
    "id": "giam-bong",
    "name": {
      "vi": "Giấm bỗng rượu nếp",
      "en": "Fermented wine lees vinegar"
    },
    "icon": "🍶",
    "commonStaple": true,
    "aliases": [
      "giam bong",
      "giấm bỗng",
      "bong ruou"
    ],
    "category": "herb_spice"
  },
  {
    "id": "com-me",
    "name": {
      "vi": "Mẻ chua (cơm mẻ ngấu)",
      "en": "Fermented rice paste (Me)"
    },
    "icon": "🍚",
    "commonStaple": true,
    "aliases": [
      "me chua",
      "mẻ",
      "com me",
      "cơm mẻ"
    ],
    "category": "herb_spice"
  },
  {
    "id": "la-cam",
    "name": {
      "vi": "Lá cẩm (nhuộm xôi tím)",
      "en": "Magenta plant leaf"
    },
    "icon": "🍃",
    "aliases": [
      "la cam",
      "lá cẩm"
    ],
    "category": "herb_spice"
  },
  {
    "id": "la-dua-nep",
    "name": {
      "vi": "Lá dứa (lá nếp thơm)",
      "en": "Pandan leaves"
    },
    "icon": "🍃",
    "commonStaple": true,
    "aliases": [
      "la dua",
      "lá dứa",
      "la nep",
      "lá nếp",
      "pandan"
    ],
    "category": "herb_spice"
  },
  {
    "id": "la-chuoi",
    "name": {
      "vi": "Lá chuối tươi (gói bánh, nem)",
      "en": "Banana leaves"
    },
    "icon": "🍃",
    "aliases": [
      "la chuoi",
      "lá chuối"
    ],
    "category": "herb_spice"
  },
  {
    "id": "hoa-hoi-tai-vi",
    "name": {
      "vi": "Hoa hồi (tai vị khô)",
      "en": "Star anise"
    },
    "icon": "⭐",
    "commonStaple": true,
    "aliases": [
      "hoa hoi",
      "hoa hồi",
      "tai vi",
      "tai vị",
      "star anise"
    ],
    "category": "herb_spice"
  },
  {
    "id": "que-chi",
    "name": {
      "vi": "Quế chi (thanh quế khô)",
      "en": "Cinnamon stick"
    },
    "icon": "🪵",
    "commonStaple": true,
    "aliases": [
      "que",
      "quế",
      "que chi",
      "thanh quế",
      "cinnamon"
    ],
    "category": "herb_spice"
  },
  {
    "id": "thao-qua",
    "name": {
      "vi": "Thảo quả khô",
      "en": "Black cardamom"
    },
    "icon": "🌰",
    "commonStaple": true,
    "aliases": [
      "thao qua",
      "thảo quả"
    ],
    "category": "herb_spice"
  },
  {
    "id": "hat-doi",
    "name": {
      "vi": "Hạt dổi rừng",
      "en": "Wild forest seeds (Doi)"
    },
    "icon": "🌰",
    "aliases": [
      "hat doi",
      "hạt dổi"
    ],
    "category": "herb_spice"
  },
  {
    "id": "mac-khen",
    "name": {
      "vi": "Mắc khén Tây Bắc",
      "en": "Wild pepper (Mac khen)"
    },
    "icon": "🌿",
    "aliases": [
      "mac khen",
      "mắc khén"
    ],
    "category": "herb_spice"
  },
  {
    "id": "tieu-xanh",
    "name": {
      "vi": "Tiêu xanh tươi (nguyên chùm)",
      "en": "Fresh green peppercorns"
    },
    "icon": "🫛",
    "aliases": [
      "tieu xanh",
      "tiêu xanh"
    ],
    "category": "herb_spice"
  },
  {
    "id": "toi-tay-toro",
    "name": {
      "vi": "Hành baro (tỏi tây Leek)",
      "en": "Leek"
    },
    "icon": "🌱",
    "aliases": [
      "baro",
      "hành baro",
      "toi tay",
      "tỏi tây",
      "leek"
    ],
    "category": "herb_spice"
  },
  {
    "id": "la-oregano-rosemary",
    "name": {
      "vi": "Lá hương thảo & Xạ hương",
      "en": "Rosemary & Thyme"
    },
    "icon": "🌿",
    "aliases": [
      "rosemary",
      "thyme",
      "huong thao",
      "hương thảo"
    ],
    "category": "herb_spice"
  },
  {
    "id": "la-que-chay",
    "name": {
      "vi": "Lá nguyệt quế (Bay leaf)",
      "en": "Bay leaves"
    },
    "icon": "🍃",
    "aliases": [
      "la nguyet que",
      "lá nguyệt quế",
      "bay leaf"
    ],
    "category": "herb_spice"
  },
  {
    "id": "vani-ong",
    "name": {
      "vi": "Ống Vani (bột vani làm bánh)",
      "en": "Vanilla essence / powder"
    },
    "icon": "🧴",
    "aliases": [
      "vani",
      "ống vani",
      "vanilla"
    ],
    "category": "herb_spice"
  },
  {
    "id": "nuoc-mam",
    "name": {
      "vi": "Nước mắm truyền thống",
      "en": "Fish sauce"
    },
    "icon": "🍶",
    "commonStaple": true,
    "aliases": [
      "nuoc mam",
      "nước mắm",
      "mam ngon",
      "nuoc mam ca com",
      "fish sauce"
    ],
    "category": "pantry"
  },
  {
    "id": "nuoc-tuong",
    "name": {
      "vi": "Nước tương (xì dầu)",
      "en": "Soy sauce"
    },
    "icon": "🍶",
    "commonStaple": true,
    "aliases": [
      "nuoc tuong",
      "nước tương",
      "xi dau",
      "xì dầu",
      "soy sauce"
    ],
    "category": "pantry"
  },
  {
    "id": "hac-xi-dau",
    "name": {
      "vi": "Hắc xì dầu (nước tương đen)",
      "en": "Dark soy sauce"
    },
    "icon": "🍶",
    "aliases": [
      "hac xi dau",
      "hắc xì dầu",
      "nuoc tuong den"
    ],
    "category": "pantry"
  },
  {
    "id": "dau-hao",
    "name": {
      "vi": "Dầu hào",
      "en": "Oyster sauce"
    },
    "icon": "🍶",
    "commonStaple": true,
    "aliases": [
      "dau hao",
      "dầu hào",
      "oyster sauce"
    ],
    "category": "pantry"
  },
  {
    "id": "dau-an",
    "name": {
      "vi": "Dầu ăn thực vật",
      "en": "Cooking oil"
    },
    "icon": "🫗",
    "commonStaple": true,
    "aliases": [
      "dau an",
      "dầu ăn",
      "dau thuc vat",
      "cooking oil"
    ],
    "category": "pantry"
  },
  {
    "id": "dau-me-vung",
    "name": {
      "vi": "Dầu mè thơm (dầu vừng)",
      "en": "Toasted sesame oil"
    },
    "icon": "🫗",
    "commonStaple": true,
    "aliases": [
      "dau me",
      "dầu mè",
      "dau vung",
      "sesame oil"
    ],
    "category": "pantry"
  },
  {
    "id": "dau-mau-dieu",
    "name": {
      "vi": "Dầu màu điều (thắng từ hạt điều)",
      "en": "Annatto oil"
    },
    "icon": "🫗",
    "commonStaple": true,
    "aliases": [
      "dau mau dieu",
      "dầu màu điều",
      "dau dieu",
      "hat dieu mau"
    ],
    "category": "pantry"
  },
  {
    "id": "bo-thuc-vat-dong-vat",
    "name": {
      "vi": "Bơ nhạt / Bơ Tường An",
      "en": "Butter / Margarine"
    },
    "icon": "🧈",
    "commonStaple": true,
    "aliases": [
      "bo",
      "bơ",
      "bo lat",
      "bơ lạt",
      "bo tuong an"
    ],
    "category": "pantry"
  },
  {
    "id": "mam-tom",
    "name": {
      "vi": "Mắm tôm Bắc đặc sản",
      "en": "Fermented shrimp paste"
    },
    "icon": "🥣",
    "commonStaple": true,
    "aliases": [
      "mam tom",
      "mắm tôm"
    ],
    "category": "pantry"
  },
  {
    "id": "mam-tep",
    "name": {
      "vi": "Mắm tép Hàng Bè",
      "en": "Fermented small shrimp paste"
    },
    "icon": "🥣",
    "commonStaple": true,
    "aliases": [
      "mam tep",
      "mắm tép",
      "mam tep chung thit"
    ],
    "category": "pantry"
  },
  {
    "id": "mam-ca-linh-loc",
    "name": {
      "vi": "Mắm cá linh / Mắm cá sặc",
      "en": "Fermented mud carp paste"
    },
    "icon": "🥣",
    "aliases": [
      "mam ca linh",
      "mắm cá linh",
      "mam ca sac",
      "mam lau"
    ],
    "category": "pantry"
  },
  {
    "id": "mam-nem",
    "name": {
      "vi": "Mắm nêm pha sẵn",
      "en": "Fermented anchovy dipping sauce"
    },
    "icon": "🥣",
    "commonStaple": true,
    "aliases": [
      "mam nem",
      "mắm nêm",
      "mam nem da nang"
    ],
    "category": "pantry"
  },
  {
    "id": "mam-ruoc",
    "name": {
      "vi": "Mắm ruốc Huế",
      "en": "Fermented krill paste"
    },
    "icon": "🥣",
    "commonStaple": true,
    "aliases": [
      "mam ruoc",
      "mắm ruốc",
      "mam ruoc hue"
    ],
    "category": "pantry"
  },
  {
    "id": "muoi-tinh",
    "name": {
      "vi": "Muối tinh (muối iot)",
      "en": "Fine salt"
    },
    "icon": "🧂",
    "commonStaple": true,
    "aliases": [
      "muoi",
      "muối",
      "muoi tinh",
      "muoi iot",
      "salt"
    ],
    "category": "pantry"
  },
  {
    "id": "muoi-hot",
    "name": {
      "vi": "Muối hột (muối biển hạt to)",
      "en": "Coarse sea salt"
    },
    "icon": "🧂",
    "commonStaple": true,
    "aliases": [
      "muoi hot",
      "muối hột",
      "muoi bien"
    ],
    "category": "pantry"
  },
  {
    "id": "bot-canh",
    "name": {
      "vi": "Bột canh Hải Châu",
      "en": "Seasoning soup powder"
    },
    "icon": "🧂",
    "commonStaple": true,
    "aliases": [
      "bot canh",
      "bột canh",
      "bot canh hai chau"
    ],
    "category": "pantry"
  },
  {
    "id": "hat-nem",
    "name": {
      "vi": "Hạt nêm thịt thăn / nấm",
      "en": "Seasoning granules"
    },
    "icon": "🧂",
    "commonStaple": true,
    "aliases": [
      "hat nem",
      "hạt nêm",
      "knorr",
      "ajingon"
    ],
    "category": "pantry"
  },
  {
    "id": "mi-chinh-bot-ngot",
    "name": {
      "vi": "Mì chính (bột ngọt Ajinomoto)",
      "en": "Monosodium glutamate (MSG)"
    },
    "icon": "🧂",
    "commonStaple": true,
    "aliases": [
      "mi chinh",
      "mì chính",
      "bot ngot",
      "bột ngọt",
      "msg"
    ],
    "category": "pantry"
  },
  {
    "id": "duong-cat-trang",
    "name": {
      "vi": "Đường cát trắng",
      "en": "Granulated white sugar"
    },
    "icon": "🍬",
    "commonStaple": true,
    "aliases": [
      "duong",
      "đường",
      "duong cat",
      "duong trang",
      "sugar"
    ],
    "category": "pantry"
  },
  {
    "id": "duong-vang",
    "name": {
      "vi": "Đường vàng (đường hoa mai)",
      "en": "Cane brown sugar"
    },
    "icon": "🍬",
    "commonStaple": true,
    "aliases": [
      "duong vang",
      "đường vàng",
      "duong hoa mai",
      "đường mía"
    ],
    "category": "pantry"
  },
  {
    "id": "duong-phen",
    "name": {
      "vi": "Đường phèn",
      "en": "Rock sugar"
    },
    "icon": "🍬",
    "commonStaple": true,
    "aliases": [
      "duong phen",
      "đường phèn"
    ],
    "category": "pantry"
  },
  {
    "id": "duong-thot-not",
    "name": {
      "vi": "Đường thốt nốt An Giang",
      "en": "Palm sugar"
    },
    "icon": "🍬",
    "commonStaple": true,
    "aliases": [
      "duong thot not",
      "đường thốt nốt",
      "thot not"
    ],
    "category": "pantry"
  },
  {
    "id": "nuoc-hang-mau",
    "name": {
      "vi": "Nước hàng (nước màu dừa Bến Tre)",
      "en": "Caramel cooking sauce"
    },
    "icon": "🍯",
    "commonStaple": true,
    "aliases": [
      "nuoc hang",
      "nước hàng",
      "nuoc mau",
      "nước màu",
      "keo dang"
    ],
    "category": "pantry"
  },
  {
    "id": "mat-ong",
    "name": {
      "vi": "Mật ong nguyên chất",
      "en": "Pure honey"
    },
    "icon": "🍯",
    "commonStaple": true,
    "aliases": [
      "mat ong",
      "mật ong",
      "honey"
    ],
    "category": "pantry"
  },
  {
    "id": "tieu-den-xay",
    "name": {
      "vi": "Tiêu đen xay nhuyễn",
      "en": "Ground black pepper"
    },
    "icon": "🧂",
    "commonStaple": true,
    "aliases": [
      "tieu",
      "tiêu",
      "tieu den",
      "tiêu đen",
      "tieu xay",
      "pepper"
    ],
    "category": "pantry"
  },
  {
    "id": "tieu-so-trang",
    "name": {
      "vi": "Tiêu sọ (tiêu trắng)",
      "en": "White pepper"
    },
    "icon": "🧂",
    "commonStaple": true,
    "aliases": [
      "tieu so",
      "tiêu sọ",
      "tieu trang"
    ],
    "category": "pantry"
  },
  {
    "id": "ngu-vi-huong",
    "name": {
      "vi": "Gói bột ngũ vị hương",
      "en": "Five-spice powder"
    },
    "icon": "📦",
    "commonStaple": true,
    "aliases": [
      "ngu vi huong",
      "ngũ vị hương",
      "bột ngũ vị"
    ],
    "category": "pantry"
  },
  {
    "id": "bot-ca-ri",
    "name": {
      "vi": "Bột cà ri (Curry powder)",
      "en": "Curry powder"
    },
    "icon": "📦",
    "commonStaple": true,
    "aliases": [
      "ca ri",
      "cà ri",
      "bot ca ri",
      "bột cà ri"
    ],
    "category": "pantry"
  },
  {
    "id": "bot-nghe",
    "name": {
      "vi": "Bột nghệ vàng",
      "en": "Turmeric powder"
    },
    "icon": "📦",
    "commonStaple": true,
    "aliases": [
      "bot nghe",
      "bột nghệ",
      "tinh bot nghe"
    ],
    "category": "pantry"
  },
  {
    "id": "bot-ot-han-quoc",
    "name": {
      "vi": "Ớt bột Hàn Quốc (nấu mì, làm kim chi)",
      "en": "Korean gochugaru chili powder"
    },
    "icon": "🌶️",
    "commonStaple": true,
    "aliases": [
      "ot bot",
      "ớt bột",
      "gochugaru",
      "ớt bột hàn quốc"
    ],
    "category": "pantry"
  },
  {
    "id": "sa-te-tom",
    "name": {
      "vi": "Sa tế tôm cay",
      "en": "Shrimp satay chili sauce"
    },
    "icon": "🌶️",
    "commonStaple": true,
    "aliases": [
      "sa te",
      "sa tế",
      "sa te tom",
      "ot sa te"
    ],
    "category": "pantry"
  },
  {
    "id": "tuong-ot",
    "name": {
      "vi": "Tương ớt (Chinsu, Sriracha)",
      "en": "Chili sauce (Sriracha)"
    },
    "icon": "🥫",
    "commonStaple": true,
    "aliases": [
      "tuong ot",
      "tương ớt",
      "chinsu",
      "sriracha"
    ],
    "category": "pantry"
  },
  {
    "id": "tuong-ca",
    "name": {
      "vi": "Tương cà (Ketchup)",
      "en": "Tomato ketchup"
    },
    "icon": "🥫",
    "commonStaple": true,
    "aliases": [
      "tuong ca",
      "tương cà",
      "ketchup"
    ],
    "category": "pantry"
  },
  {
    "id": "tuong-den-hoisin",
    "name": {
      "vi": "Tương đen ăn phở (Hoisin sauce)",
      "en": "Hoisin sweet sauce"
    },
    "icon": "🥫",
    "commonStaple": true,
    "aliases": [
      "tuong den",
      "tương đen",
      "hoisin",
      "tương ngọt"
    ],
    "category": "pantry"
  },
  {
    "id": "tuong-ban",
    "name": {
      "vi": "Tương bần Hưng Yên",
      "en": "Fermented soybean paste (Ban)"
    },
    "icon": "🍶",
    "commonStaple": true,
    "aliases": [
      "tuong ban",
      "tương bần",
      "tuong nep"
    ],
    "category": "pantry"
  },
  {
    "id": "giam-gao",
    "name": {
      "vi": "Giấm gạo lên men",
      "en": "Rice vinegar"
    },
    "icon": "🍶",
    "commonStaple": true,
    "aliases": [
      "giam",
      "giấm",
      "giam gao",
      "giấm trắng",
      "vinegar"
    ],
    "category": "pantry"
  },
  {
    "id": "giam-tao",
    "name": {
      "vi": "Giấm táo",
      "en": "Apple cider vinegar"
    },
    "icon": "🍶",
    "aliases": [
      "giam tao",
      "giấm táo"
    ],
    "category": "pantry"
  },
  {
    "id": "ruou-mai-que-lo",
    "name": {
      "vi": "Rượu mai quế lộ",
      "en": "Mai Que Lo cooking wine"
    },
    "icon": "🍾",
    "aliases": [
      "mai que lo",
      "rượu mai quế lộ",
      "ruou thom"
    ],
    "category": "pantry"
  },
  {
    "id": "ruou-trang-nau-an",
    "name": {
      "vi": "Rượu trắng nấu ăn (khử tanh)",
      "en": "White cooking rice wine"
    },
    "icon": "🍾",
    "commonStaple": true,
    "aliases": [
      "ruou trang",
      "rượu trắng",
      "ruou gao",
      "rượu nấu ăn"
    ],
    "category": "pantry"
  },
  {
    "id": "mirin-nhat",
    "name": {
      "vi": "Rượu gia vị Mirin Nhật",
      "en": "Japanese Mirin cooking wine"
    },
    "icon": "🍾",
    "aliases": [
      "mirin",
      "rượu mirin"
    ],
    "category": "pantry"
  },
  {
    "id": "sot-mayonnaise",
    "name": {
      "vi": "Sốt Mayonnaise",
      "en": "Mayonnaise"
    },
    "icon": "🧴",
    "commonStaple": true,
    "aliases": [
      "mayo",
      "mayonnaise",
      "sot mayone"
    ],
    "category": "pantry"
  },
  {
    "id": "muoi-tay-ninh",
    "name": {
      "vi": "Muối tôm Tây Ninh (chấm trái cây)",
      "en": "Tay Ninh shrimp salt"
    },
    "icon": "🧂",
    "aliases": [
      "muoi tom",
      "muối tôm",
      "muối tây ninh"
    ],
    "category": "pantry"
  },
  {
    "id": "sot-bbq",
    "name": {
      "vi": "Xốt ướp thịt nướng BBQ",
      "en": "BBQ marinade sauce"
    },
    "icon": "🥫",
    "aliases": [
      "sot uop thit",
      "xốt nướng",
      "bbq"
    ],
    "category": "pantry"
  },
  {
    "id": "tinh-dau-buoi",
    "name": {
      "vi": "Nước hoa bưởi (nấu chè)",
      "en": "Grapefruit blossom water"
    },
    "icon": "💧",
    "aliases": [
      "hoa buoi",
      "nước hoa bưởi",
      "huong buoi"
    ],
    "category": "pantry"
  },
  {
    "id": "tra-xanh-kho",
    "name": {
      "vi": "Trà xanh khô (chè Thái Nguyên)",
      "en": "Dried green tea"
    },
    "icon": "🍵",
    "aliases": [
      "tra",
      "trà",
      "che thai nguyen",
      "trà xanh"
    ],
    "category": "pantry"
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
    if (cleanRecipeIng.includes(cleanUser) || cleanUser.includes(cleanRecipeIng)) return true;
    
    const foundMaster = MASTER_INGREDIENTS.find(
      m => removeVietnameseDiacritics(m.name.vi) === cleanUser || m.aliases.some(a => removeVietnameseDiacritics(a) === cleanUser)
    );
    if (foundMaster) {
      if (cleanRecipeIng.includes(removeVietnameseDiacritics(foundMaster.name.vi))) return true;
      return foundMaster.aliases.some(a => cleanRecipeIng.includes(removeVietnameseDiacritics(a)));
    }
    return false;
  }

  const cleanVi = removeVietnameseDiacritics(userSelectedIngredient.name.vi);
  if (cleanRecipeIng.includes(cleanVi)) return true;

  for (const alias of userSelectedIngredient.aliases) {
    const cleanAlias = removeVietnameseDiacritics(alias);
    if (cleanRecipeIng.includes(cleanAlias)) return true;
  }

  return false;
}
