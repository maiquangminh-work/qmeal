# TÀI LIỆU YÊU CẦU NGHIỆP VỤ (BRD) - ỨNG DỤNG GỢI Ý MÓN ĂN VIỆT NAM

## 1. Tổng quan dự án (Project Overview)
**Tên dự án (Dự kiến):** VinaMeal / Cooking_Choosing
**Mục tiêu:** Xây dựng một nền tảng web giúp người dùng giải quyết câu hỏi "Hôm nay ăn gì?" cho các bữa ăn trong ngày (Sáng, Trưa, Xế/Vặt, Tối). Hệ thống cung cấp giải pháp toàn diện: từ tự nấu (gợi ý công thức dựa trên nguyên liệu sẵn có) đến đi ăn ngoài (tích hợp bản đồ quán ăn), cùng với tính năng giải trí "Gacha" để chọn món ngẫu nhiên.

**Đối tượng người dùng mục tiêu:** 
- Sinh viên, nhân viên văn phòng không có nhiều thời gian nghĩ ngợi về bữa ăn.
- Những người nội trợ muốn tìm ý tưởng nấu ăn từ nguyên liệu sẵn có trong tủ lạnh.
- Những nhóm bạn cần công cụ để chốt món ăn ngẫu nhiên một cách vui vẻ.

---

## 2. Tính năng cốt lõi (Core Features)

### 2.1. Quản lý và Hiển thị Món ăn theo Bữa
- Phân loại món ăn theo 4 buổi chính: Sáng, Trưa, Chiều (Xế/Đồ ăn vặt), Tối.
- Hiển thị danh sách món ăn dưới dạng thẻ (Card) hấp dẫn với hình ảnh, tên món, và thẻ tag (VD: #MónNước, #ĂnVặt, #TựNấu).

### 2.2. Chi tiết Món ăn (Tự nấu & Ăn ngoài)
Mỗi món ăn khi bấm vào sẽ cung cấp 2 tuỳ chọn (hoặc 1 trong 2 tuỳ thuộc vào món):
- **Tự nấu (Công thức):** Danh sách nguyên liệu cần thiết, các bước thực hiện, video hướng dẫn (nếu có), thời gian nấu, mức độ khó.
- **Ăn ngoài (Bản đồ):** Tích hợp Google Maps / Mapbox hiển thị các quán ăn/nhà hàng gần vị trí của người dùng có bán món ăn đó. Hiển thị thông tin quán: Đánh giá, khoảng cách, giá cả ước tính, giờ mở cửa.

### 2.3. Hệ thống Gợi ý (Recommendation System)
- **Gợi ý theo nguyên liệu:** Người dùng nhập các nguyên liệu họ đang có (VD: Thịt lợn, cà chua, hành lá), hệ thống sẽ truy xuất dữ liệu và đề xuất các món ăn có thể nấu từ những nguyên liệu đó.
- **Gợi ý theo kiểu đồ ăn/sở thích:** Bộ lọc nâng cao cho phép người dùng chọn loại đồ ăn họ đang thèm (Đồ nước, Khô, Chiên rán, Hấp, Chay...).
- Hệ thống có thể học hỏi từ lịch sử tìm kiếm/yêu thích của người dùng để đưa ra gợi ý thông minh hơn (Dành cho Phase 2).

### 2.4. Hệ thống Chọn món Ngẫu nhiên (Gacha System)
- Chức năng giải trí giúp người dùng vượt qua hội chứng "không biết ăn gì".
- **Giao diện Gacha:** Giống như vòng quay may mắn hoặc mở hòm (case opening) của game CS:GO. Giao diện chạy lướt qua nhiều món ăn và dừng lại ở 1 món "trúng thưởng".
- **Phân loại Gacha:**
  - Quay món ăn theo bữa (Sáng/Trưa/Tối).
  - Quay món ăn theo mức giá (Bình dân/Cao cấp).
  - Quay món theo thể loại (Món nước/Món khô).

### 2.5. Tài khoản & Cá nhân hoá (User System)
- Đăng nhập/Đăng ký (Email, Google, Facebook).
- Lưu lại danh sách các món yêu thích, các quán ăn "ruột".
- Lịch sử đã quay Gacha hoặc các món đã nấu.

---

## 3. Yêu cầu Phi chức năng (Non-Functional Requirements)

### 3.1. Trải nghiệm người dùng (UX/UI)
- Giao diện thân thiện, hiện đại, mang hơi hướng văn hoá ẩm thực Việt Nam nhưng vẫn trẻ trung.
- Tối ưu hoá cho thiết bị di động (Mobile-first design) vì phần lớn người dùng sẽ dùng điện thoại để tìm chỗ ăn.
- Hiệu ứng Gacha/Quay số cần mượt mà, có âm thanh phấn khích, hồi hộp để tăng tương tác.

### 3.2. Hiệu năng & Tích hợp
- Tích hợp API Bản đồ (Google Maps API hoặc OpenStreetMap/Mapbox) với khả năng định vị người dùng (Geolocation).
- Tốc độ tải trang nhanh, hiển thị hình ảnh món ăn chất lượng nhưng được tối ưu dung lượng (Lazy loading).

---

## 4. Luồng người dùng cơ bản (User Flows)

**Luồng 1: Người dùng có nguyên liệu và muốn tự nấu**
Trang chủ -> Vào mục "Tủ lạnh có gì?" -> Nhập/Chọn nguyên liệu (VD: Trứng, Cà chua) -> Hệ thống hiển thị: Cơm cà chua trứng xào, Canh cà chua trứng -> Xem chi tiết công thức nấu.

**Luồng 2: Người dùng muốn đi ăn nhưng không biết ăn gì**
Trang chủ -> Vào mục "Gacha / Mở hòm món ăn" -> Chọn filter "Bữa trưa" & "Món nước" -> Nhấn nút Quay -> Hiệu ứng lướt hình ảnh -> Dừng lại ở "Bún Bò Huế" -> Nhấn "Tìm quán gần đây" -> Hiển thị bản đồ với các quán Bún Bò Huế xung quanh.

---

## 5. Kế hoạch thiết kế và phát triển tiếp theo (Next Steps)
1. **Thiết kế Wireframe & UI/UX:** Xây dựng bản vẽ khung giao diện và thiết kế chi tiết (Figma).
2. **Thiết kế Database:** Xây dựng cơ sở dữ liệu các món ăn, nguyên liệu, tags, và công thức.
3. **Lựa chọn Tech Stack:** 
   - Frontend: ReactJS / Next.js / VueJS.
   - Backend: Node.js / Python (để xử lý hệ thống gợi ý tốt hơn).
   - Database: MongoDB hoặc PostgreSQL.
4. **Thu thập dữ liệu (Data Collection):** Cào dữ liệu (Crawl) hoặc tự nhập liệu một số lượng món ăn cơ bản của Việt Nam.
