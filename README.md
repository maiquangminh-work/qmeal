# 🍲 QMeal - Nền Tảng Gợi Ý Món Ăn & Dinh Dưỡng Chuẩn Vị Việt Nam

> Giải quyết bài toán *"Hôm nay ăn gì?"* cho 4 bữa trong ngày với 100% dữ liệu ẩm thực Việt Nam chuẩn hóa, minh bạch dinh dưỡng (Viện Dinh Dưỡng Quốc Gia - NIN), hỗ trợ song ngữ (VI/EN).

[![Next.js 16](https://img.shields.io/badge/Next.js-16.3.4-black?logo=next.js)](https://nextjs.org/)
[![React 19](https://img.shields.io/badge/React-19.0.0-blue?logo=react)](https://react.dev/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

## 🌟 Tính Năng Nổi Bật (Key Features)

1. 🎰 **Vòng quay Gacha Mở Hòm CS:GO (`/gacha`)**:
   - Băng chuyền cuộn ngang mượt mà với đường cong giảm tốc cơ học `cubic-bezier`.
   - Hiệu ứng âm thanh cơ học tick và chuông thắng sinh bằng **Web Audio API** (0kb tài nguyên ngoài).
   - Bắn pháo hoa ăn mừng (`canvas-confetti`) khi trúng thưởng.
   - Bộ lọc theo khung bữa ăn: Sáng, Trưa, Xế, Tối, Tất cả.

2. 🧑‍🍳 **Chế Độ Nấu Rảnh Tay & Giữ Màn Hình Luôn Sáng (`Screen Wake Lock API`)**:
   - Tự động giữ màn hình điện thoại/tablet luôn sáng trong suốt quá trình nấu.
   - Giao diện tối tương phản cao, chữ to rõ ràng, điều hướng từng bước với thanh tiến độ và phím tắt bàn phím.
   - Ngăn kéo nguyên liệu nhanh (Quick Ingredients Drawer) để tra cứu định lượng tức thì.

3. ⚖️ **Bộ Tính Khẩu Phần & Dinh Dưỡng Tự Động (`recipeScaler`)**:
   - Tự động nhân/chia định lượng nguyên liệu (`500g`, `2 quả`, `1/2 bát`...) khi thay đổi số lượng người ăn (`+` / `-`).
   - Tự động tính toán lại tổng năng lượng (**Calories**) và các chỉ số macro (**Protein, Fat, Carbs**).

4. 🥬 **Tủ Lạnh Có Gì? (Smart Fridge Matching - `/fridge`)**:
   - Nhập các nguyên liệu sẵn có trong nhà để tìm món ăn có thể nấu được ngay.
   - Thống kê tỷ lệ trùng khớp và 1-click thêm các nguyên liệu còn thiếu vào Giỏ Đi Chợ.

5. 🛒 **Giỏ Đi Chợ Thông Minh (`/grocery`)**:
   - Danh sách nguyên liệu cần mua gom theo từng món ăn kèm checkbox gạch ngang khi đi chợ.
   - Lưu trữ bền vững (`LocalStorage`) qua Zustand.

6. 🛵 **Ăn Ngoài & Đặt Ship Siêu Tốc**:
   - Tích hợp 2 nút gọi món giao tận nơi qua **ShopeeFood** và **GrabFood**.
   - Nhúng bản đồ Google Maps và danh sách quán ăn xung quanh.

7. 🏛️ **Cam Kết Dữ Liệu Dinh Dưỡng Chuẩn Xác 100% (NIN Standard)**:
   - Toàn bộ số liệu calo, protein, fat, carbs được đối chiếu chính quy từ **Bảng Thành Phần Thực Phẩm Việt Nam - Viện Dinh Dưỡng Quốc Gia (Bộ Y Tế)**.

---

## 📖 Tài Liệu Nghiệp Vụ & Kiến Trúc Chi Tiết

👉 **Xem toàn bộ tài liệu đặc tả nghiệp vụ, thuật toán và cấu trúc hệ thống tại:**  
📘 [**Tai_Lieu_Nghiep_Vu.md**](./Tai_Lieu_Nghiep_Vu.md)

---

## 🚀 Hướng Dẫn Cài Đặt & Khởi Chạy

### Cách 1: Khởi chạy nhanh trên Windows (1-Click)
Nếu máy bạn chưa cài đặt Node.js, chỉ cần click đúp vào file:
```cmd
run.bat
```

### Cách 2: Khởi chạy thủ công (Yêu cầu Node.js >= 18.17.0)
```bash
# Di chuyển vào thư mục frontend
cd frontend

# Cài đặt thư viện phụ thuộc
npm install

# Khởi chạy server phát triển
npm run dev
```
Truy cập ứng dụng tại: `http://localhost:3000`

### Kiểm tra Build Production:
```bash
cd frontend
npm run build
```

---

## 📁 Cấu Trúc Thư Mục

```
Cooking_Choosing/
├── .gitignore               # Cấu hình loại trừ file tạm, cache, node_bin
├── README.md                # Giới thiệu dự án & Quickstart
├── Tai_Lieu_Nghiep_Vu.md    # Tài liệu đặc tả nghiệp vụ toàn diện (BRD)
├── run.bat                  # File khởi động nhanh trên Windows
└── frontend/                # Ứng dụng Next.js 16 App Router
    ├── src/
    │   ├── app/             # Các trang (Home, Gacha, Fridge, Grocery, Recipe, API)
    │   ├── components/      # UI components (Navbar, Hero, RecipeCard, MobileNav)
    │   ├── data/            # 21 Món ăn Việt Nam chuẩn Viện Dinh Dưỡng NIN
    │   ├── store/           # Zustand state management
    │   └── utils/           # scaler, sound engine, time context
    ├── package.json
    └── tailwind.config.js
```

---
© 2026 QMeal Team. Phát triển với tình yêu dành cho Ẩm thực Việt Nam 🇻🇳.
