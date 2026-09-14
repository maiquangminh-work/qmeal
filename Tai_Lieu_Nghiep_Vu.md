# TÀI LIỆU YÊU CẦU NGHIỆP VỤ (BRD) & KIẾN TRÚC KỸ THUẬT DỰ ÁN QMEAL
> **Dự án:** QMeal - Nền Tảng Gợi Ý Món Ăn & Dinh Dưỡng Chuẩn Vị Việt Nam  
> **Phiên bản:** 2.3.0 (Tự Động Nhận Diện Vị Trí Thiết Bị, Giao Diện Gợi Ý 3 Món Cá Nhân Hóa/Phổ Biến & Image Proxy Bất Tử)  
> **Cập nhật lần cuối:** 14/09/2026  
> **Tác giả:** Đội ngũ phát triển QMeal  
> **Mục đích tài liệu:** Lưu trữ toàn bộ tri thức nghiệp vụ, thuật toán gợi ý (Recommendation Engine), kiến trúc hệ thống, bản đồ hóa ẩm thực vùng miền và quy chuẩn giao diện để bất kỳ máy tính hoặc kỹ sư nào đọc vào cũng có thể nắm bắt 100% nghiệp vụ và triển khai/vận hành hệ thống một cách chính xác kể cả khi chưa kéo mã nguồn.

---

## 1. TỔNG QUAN DỰ ÁN (PROJECT OVERVIEW)

### 1.1. Bối cảnh & Tuyên ngôn sứ mệnh
"Hôm nay ăn gì?" là bài toán thường nhật gây mất thời gian và căng thẳng nhất cho hàng chục triệu người Việt Nam mỗi ngày. Hầu hết các ứng dụng hiện tại hoặc chỉ tập trung vào đặt đồ ăn bên ngoài (food delivery) hoặc là những trang blog công thức dài dòng, không tính toán dinh dưỡng, không tối ưu cho thiết bị di động khi đang nấu ăn, và thiếu tính giải trí.

**QMeal ra đời nhằm giải quyết triệt để vấn đề này với sứ mệnh:**
1. **Quyết định bữa ăn tức thì:** Cung cấp tính năng vòng quay giải trí may mắn (Lucky Meal Reel) và gợi ý theo thời gian thực để chốt bữa ăn chỉ trong vài giây, có nút quay lại trang chủ tiện lợi.
2. **Linh hoạt giữa Tự Nấu & Đi Ăn Ngoài:** Một chạm để xem công thức rảnh tay hoặc mở bản đồ/đặt ship ShopeeFood, GrabFood.
3. **Minh bạch dinh dưỡng khoa học & Nguồn công thức:** 100% số liệu calo, protein, fat, carbs được đối chiếu từ **Viện Dinh Dưỡng Quốc Gia Việt Nam (NIN)**; công thức có trích dẫn di sản ẩm thực rõ ràng hiển thị trực tiếp trên thẻ món ăn và trang chi tiết.
4. **Hình ảnh thực tế chuẩn xác 100%:** Toàn bộ 123 món ăn đều có ảnh thật đã nấu chín, tuyệt đối không trùng lặp, không lấy ảnh sinh học/thực vật thô, có cơ chế tự động fallback chống lỗi mạng.
5. **Chuẩn hóa cho người Việt & Khách quốc tế:** Hỗ trợ song ngữ hoàn hảo (Tiếng Việt & English), tôn vinh văn hóa ẩm thực 3 miền.
6. **Hệ thống Gợi Ý Thông Minh Đa Chiều (Smart Recommendation Engine):** Tự động tính toán điểm phù hợp kết hợp Khung giờ sinh học, Khẩu vị & Vị trí địa lý (Hà Nội & Bắc Bộ là trọng tâm mặc định), Phương thức dùng bữa (Tự nấu vs Ăn ngoài/Đặt ship), và Mục tiêu dinh dưỡng.
7. **Trải nghiệm Giao diện Impeccable (Editorial UI/UX):** Loại bỏ triệt để các emoji vụn vặt và phong cách template AI; xây dựng giao diện sang trọng, phân cấp thông tin chuẩn tạp chí ẩm thực, tối ưu thao tác một tay.

### 1.2. Chân dung người dùng mục tiêu (User Personas)
- **Persona A - Dân văn phòng bận rộn:** Cần quyết định nhanh bữa trưa trong 3 phút, ưu tiên quán ăn gần công ty hoặc đặt ship giao tận nơi.
- **Persona B - Người nội trợ / Sinh viên tự nấu:** Mở tủ lạnh thấy còn vài nguyên liệu thừa, cần biết nấu món gì nhanh, ngon, đủ chất và không lãng phí thực phẩm.
- **Persona C - Người theo dõi sức khỏe / Gymer:** Quan tâm chính xác lượng Calo, Protein, Carbs, Fat trong từng bát phở, đĩa cơm để tính toán macro hàng ngày.
- **Persona D - Khách du lịch / Người nước ngoài:** Muốn khám phá ẩm thực Việt Nam chuẩn vị bằng giao diện tiếng Anh, hiểu được nguồn gốc và văn hóa món ăn.

---

## 2. KIẾN TRÚC KỸ THUẬT & CÔNG NGHỆ (TECH STACK)

| Thành phần | Công nghệ lựa chọn | Lý do kiến trúc & Ưu điểm |
| :--- | :--- | :--- |
| **Framework** | **Next.js 16 (App Router)** | Render Server-Side (SSR/SSG) tối ưu SEO, hỗ trợ Turbopack biên dịch siêu tốc, cấu trúc file-system routing hiện đại. |
| **Giao diện (UI)** | **Tailwind CSS + Lucide Icons** | Thiết kế Mobile-First đáp ứng mọi kích thước màn hình; bộ icon vector sắc nét, đồng bộ. |
| **Quản lý State** | **Zustand (with LocalStorage)** | Quản lý giỏ hàng đi chợ, danh sách yêu thích, cài đặt ngôn ngữ nhẹ hơn Redux gấp 10 lần, lưu trữ bền vững trên máy người dùng. |
| **Âm thanh** | **Web Audio API (`sound.ts`)** | Tự sinh âm thanh bằng Oscillator tần số (tiếng bánh xe quay lách cách và chuông reo chiến thắng), **không cần tải file mp3**, zero-latency, 0kb dung lượng tài nguyên mạng. |
| **Hiệu ứng** | **Canvas-Confetti** | Hiệu ứng bắn pháo hoa rực rỡ khi trúng Vòng quay và khi hoàn thành món ăn, tạo cảm xúc hào hứng. |
| **Tương tác phần cứng** | **Screen Wake Lock API** | Giữ màn hình điện thoại/tablet luôn bật trong suốt quá trình nấu, chống tắt màn hình khi tay đầu bếp đang ướt/dính dầu mỡ. |
| **Dữ liệu Dinh dưỡng** | **NIN Data Model (vietnameseRecipes.ts)** | 123 món ăn định hình chuẩn TypeScript, trích dẫn chính danh Viện Dinh Dưỡng Quốc Gia, phục vụ tính toán trực tiếp client & server. |
| **Cơ sở dữ liệu** | **Prisma ORM + SQLite (Dev)** | Sẵn sàng scale lên PostgreSQL/MySQL trên Supabase/Railway cho các tính năng tài khoản người dùng Phase 2. |

---

## 3. ĐẶC TẢ CHI TIẾT CÁC TÍNH NĂNG NGHIỆP VỤ (CORE FEATURES)

### 3.1. Vòng quay Gacha Mở Hòm Ẩm Thực (Lucky Meal Reel - `/gacha`)
- **Khái niệm:** Mô phỏng cơ chế cuộn băng chuyền giải trí hồi hộp, người dùng bấm quay để hệ thống lướt qua hàng chục món ăn hấp dẫn và từ từ dừng lại ở món ăn chiến thắng. Giao diện trang bị nút quay lại Trang Chủ ngay trên cùng.
- **Quy tắc thuật toán:**
  1. Lấy danh sách món ăn từ database theo bộ lọc hiện tại (hoặc toàn bộ).
  2. Tạo một băng chuyền (reel) gồm 45 thẻ món ăn ngẫu nhiên.
  3. Chọn trước vị trí trúng thưởng (Winning Index) ngẫu nhiên từ vị trí thứ 34 đến 40.
  4. Tính toán tọa độ cuộn pixel chính xác đến tâm màn hình kèm độ lệch ngẫu nhiên (jitter) `[-20px, +20px]` để tạo cảm giác cơ học chân thực:
     $$\text{TargetOffset} = -\left(\text{Index} \times \text{CardWidth} - \frac{\text{ContainerWidth}}{2} + \frac{\text{CardWidth}}{2} + \text{Jitter}\right)$$
  5. Kích hoạt hiệu ứng cuộn CSS với đường cong giảm tốc mượt mà: `cubic-bezier(0.12, 0.8, 0.22, 1)` trong thời gian chuẩn $5.0$ giây.
  6. **Cơ chế âm thanh cơ học (Web Audio API):**
     - Tạo bộ đếm chu kỳ tick với tần số giảm dần theo thời gian:
       $$\text{TickGap} = 50 + (\text{Progress})^3 \times 350 \text{ (ms)}$$
     - Càng gần điểm dừng, tiếng lách cách càng thưa dần tạo cảm giác hồi hộp tột độ.
     - Khi kim chỉ vào đúng món trúng: Ngắt tick, phát âm thanh chuông chiến thắng (Win Chime) và bắn pháo hoa mừng `confetti`.
- **Bộ lọc trước khi quay (Pre-spin Filters):**
  - Bữa ăn: `Tất cả`, `Sáng`, `Trưa`, `Xế / Vặt`, `Tối`.
- **Nút bật/tắt âm thanh:** Cho phép người dùng tắt tiếng khi ở văn phòng hoặc nơi công cộng.
- **Thẻ chiến thắng:** Hiển thị nút "Xem Cách Nấu Ngay" (dẫn sang trang công thức) và nút "Quay Lại".

---

### 3.2. Bộ Tính Khẩu Phần & Dinh Dưỡng Tự Động (`recipeScaler.ts`)
- **Vấn đề giải quyết:** Công thức gốc tính cho 4 người ăn. Nếu người dùng ở 1 mình hoặc nhà có 6 người ăn, việc tự nhẩm tính nguyên liệu và calo rất dễ sai lệch.
- **Quy tắc tính toán:**
  - Tỷ lệ co giãn: $\text{Ratio} = \frac{\text{TargetServings}}{\text{BaselineServings}}$ (với `BaselineServings` mặc định là 4 hoặc lấy từ dữ liệu món).
  - **Co giãn nguyên liệu (String Parsing):**
    - Nhận diện các định dạng số đo thông dụng: `"500g"`, `"1.5 kg"`, `"2 củ"`, `"3 thìa canh"`.
    - Nhận diện phân số: `"1/2 bát"`, `"1/4 quả"` $\rightarrow$ chuyển đổi phân số nhân với tỷ lệ $\rightarrow$ định dạng lại kết quả.
    - Làm tròn thông minh: Nếu là số nguyên thì giữ nguyên số nguyên, nếu có số lẻ thì giữ tối đa 1 chữ số thập phân (`toFixed(1)`).
  - **Co giãn chỉ số dinh dưỡng (Nutrition Macros):**
    - $\text{Calories}_{\text{mới}} = \text{round}\left(\frac{\text{Calories}_{\text{gốc}}}{\text{BaselineServings}} \times \text{TargetServings}\right)$
    - $\text{Protein}_{\text{mới}} = \text{round}\left(\frac{\text{Protein}_{\text{gốc}}}{\text{BaselineServings}} \times \text{TargetServings}, 1\right)$
    - Tương tự cho Chất béo (**Fat**) và Tinh bột (**Carbs**).
  - Giao diện có nút `+` / `-` kèm dòng thông báo: `(Đã tính theo X khẩu phần)`.

---

### 3.3. Chế Độ Nấu Rảnh Tay & Giữ Màn Hình Luôn Sáng (Hands-free Cooking Mode)
- **Vấn đề giải quyết:** Khi đang xào nấu, nêm nếm gia vị, tay người dùng ướt hoặc dính dầu. Màn hình điện thoại sau 30 giây tự tắt bắt người dùng phải lau tay mở khóa, gây ức chế lớn.
- **Cơ chế Screen Wake Lock API:**
  - Khi người dùng bấm `Bắt đầu Nấu ▶`, hệ thống yêu cầu quyền giữ màn hình: `navigator.wakeLock.request('screen')`.
  - Hiển thị badge trạng thái màu vàng ấm: `💡 Màn hình luôn sáng`.
  - Tự động hủy (release) wake lock khi người dùng thoát chế độ nấu hoặc chuyển trang để tiết kiệm pin.
- **Trải nghiệm nấu từng bước (Step-by-step UI):**
  - Giao diện nền tối tương phản cao (`stone-950`), chữ to rõ ràng (`text-2xl` - `text-3xl`), dễ đọc từ khoảng cách 1 mét khi để điện thoại trên kệ bếp.
  - Thanh tiến độ hiển thị phần trăm bước nấu.
  - Hỗ trợ phím tắt bàn phím: Phím mũi tên `→` hoặc `Space` để sang bước tiếp theo; phím `←` để lùi lại; phím `ESC` để thoát.
  - **Ngăn kéo nguyên liệu nhanh (Ingredients Drawer):** Bấm nút `Nguyên liệu` ở góc trên để trượt ra danh sách nguyên liệu kèm định lượng đã co giãn, giúp đầu bếp kiểm tra lượng muối, đường, thịt mà không bị thoát bước nấu.
  - **Màn hình chúc mừng (Celebration):** Khi bấm `Hoàn Thành 🍲` ở bước cuối cùng, hệ thống kích hoạt pháo hoa chúc mừng và đưa ra lời chúc bữa ăn ngon miệng.

---

### 3.4. Tủ Lạnh Thông Minh (Smart Fridge Ingredient Matching - `/fridge`)
- **Ý nghĩa:** Giải quyết bài toán tận dụng thực phẩm có sẵn, giảm lãng phí thức ăn.
- **Cách thức hoạt động:**
  1. Người dùng chọn các nguyên liệu đang có trong nhà (Thịt gà, Trứng, Cà chua, Hành lá...).
  2. Thuật toán quét toàn bộ cơ sở dữ liệu món ăn, chuẩn hóa tên nguyên liệu (loại bỏ dấu cách thừa, chuyển về chữ thường).
  3. Tính toán tỷ lệ phần trăm khớp:
     $$\text{Tỷ lệ khớp} = \frac{\text{Số nguyên liệu có sẵn trong món}}{\text{Tổng số nguyên liệu của món}} \times 100\%$$
  4. Phân loại kết quả:
     - **Nấu được ngay (100% Khớp):** Có đủ mọi nguyên liệu cần thiết.
     - **Thiếu 1-2 nguyên liệu:** Gợi ý danh sách nguyên liệu còn thiếu và cung cấp nút **"Thêm nguyên liệu còn thiếu vào Giỏ Đi Chợ"** chỉ với 1 click.

---

### 3.5. Giỏ Đi Chợ Thông Minh (Smart Grocery Cart - `/grocery`)
- Tự động gộp nguyên liệu cần mua khi người dùng bấm "Thêm vào giỏ đi chợ" từ trang chi tiết món hoặc từ tủ lạnh.
- Giao diện có checkbox để người dùng đánh dấu các món đã bỏ vào xe đẩy khi đi siêu thị/chợ.
- Lưu trữ trạng thái trong `localStorage` thông qua Zustand, tắt trình duyệt mở lại không bị mất danh sách.

---

### 3.6. Ngữ Cảnh Thời Gian Thực (Time-of-Day Engine - `timeContext.ts`)
- Hệ thống tự động phân tích giờ hiện tại trên thiết bị người dùng để đưa ra lời chào và gợi ý món ăn chuẩn xác theo 5 khung giờ vàng:

| Khung giờ | Phân loại bữa | Lời chào & Định hướng ẩm thực | Món ăn đề xuất tiêu biểu |
| :--- | :--- | :--- | :--- |
| **05:00 - 10:00** | **Bữa Sáng** | 🌅 Nạp năng lượng khởi đầu ngày mới. Món ăn nóng sốt, nhẹ bụng, tỉnh táo. | Phở bò, Bánh mì kẹp, Bún thang, Bánh cuốn |
| **10:00 - 14:00** | **Bữa Trưa** | ☀️ Giờ cơm trưa nạp năng lượng tiếp sức. Món no bụng, đậm đà, bổ dưỡng. | Cơm tấm sườn bì chả, Cơm gia đình, Bún bò Huế |
| **14:00 - 17:00** | **Xế / Ăn Vặt** | 🧋 Giờ ăn xế & giải lao chiều. Đồ ăn vặt thanh mát, ngọt ngào, xua tan mệt mỏi. | Gỏi cuốn, Bánh tráng trộn, Chè bà ba, Nem rán |
| **17:00 - 22:00** | **Bữa Tối** | 🍲 Bữa tối ấm cúng sum vầy bên gia đình. Món canh ngọt, món kho đậm vị. | Canh chua cá lóc, Thịt kho tàu, Cá bống kho tộ |
| **22:00 - 05:00** | **Ăn Đêm** | 🌙 Cú đêm đói bụng? Món khuya ấm bụng, nhẹ nhàng, dễ tiêu hóa. | Cháo sườn, Mì gà tần, Bánh bao nóng |

---

### 3.7. Ăn Ngoài & Đặt Ship Siêu Tốc (Eat-Out & Delivery Shortcuts)
- **Đặt Ship Tận Nơi:** Trong tab "Ra Quán Ăn / Ăn Ngoài", tích hợp 2 nút gọi món trực tiếp:
  - **ShopeeFood:** `https://shopeefood.vn/search?q={Tên_Món}`
  - **GrabFood:** `https://food.grab.com/vn/vi/restaurants?search={Tên_Món}`
- **Bản đồ Google Maps:** Nhúng iframe Google Maps với query động hiển thị các quán ăn có bán món này quanh tọa độ của người dùng.
- **Danh sách quán gợi ý:** Hiển thị địa chỉ, khoảng cách (km), khung giá dự kiến (35k - 60k), đánh giá sao và nút chỉ đường tức thì.

---

### 3.8. Quy Chuẩn Dữ Liệu Dinh Dưỡng Viện Dinh Dưỡng Quốc Gia (NIN Standard)
- **Quy tắc bất khả xâm phạm:** Không tự bịa đặt hay sinh số liệu calo ngẫu nhiên.
- Mọi món ăn trong cơ sở dữ liệu chính quy (`vietnameseRecipes.ts`) đều được đối chiếu từ:
  > **Bảng Thành Phần Thực Phẩm Việt Nam** - Do **Viện Dinh Dưỡng Quốc Gia (NIN) - Bộ Y Tế** ban hành.
- Mỗi món ăn có huy hiệu bảo chứng `Đã kiểm chứng bởi Viện Dinh Dưỡng Quốc Gia (NIN)` kèm trích dẫn văn bản và quy chuẩn khẩu phần tham chiếu (ví dụ: 1 bát tiêu chuẩn ~650g).

---

### 3.9. Thanh Điều Hướng Đáy Màn Hình Di Động (`MobileBottomNav.tsx`)
- Tối ưu cho thao tác một tay trên điện thoại thông minh (One-handed navigation).
- Thiết kế 5 tab cố định ở cạnh đáy:
  1. **Trang Chủ (Home)**
  2. **Tủ Lạnh (Fridge)**
  3. **Quay Gacha (Dices - Nút tròn nổi màu cam ở trung tâm)**
  4. **Đi Chợ (Grocery - Kèm badge số lượng nguyên liệu cần mua)**
  5. **Yêu Thích (Favorites - Kèm badge số món đã lưu)**
- Toàn bộ layout có lớp đệm đáy `pb-16 sm:pb-0` để nội dung không bao giờ bị thanh điều hướng che khuất.

---

### 3.10. Kiến Trúc Hỗ Trợ Đa Ngôn Ngữ Song Hành (Bilingual VI/EN)
- Hỗ trợ chuyển đổi mượt mà giữa Tiếng Việt và Tiếng Anh (`vi` / `en`) thông qua toggle trên thanh Navbar.
- Mọi dữ liệu món ăn trong cơ sở dữ liệu đều có cấu trúc song ngữ:
  ```typescript
  title: { vi: "Phở Bò Tái", en: "Rare Beef Pho" },
  category: { vi: "Món Nước", en: "Noodle Soups" },
  instructions: {
    vi: ["Hầm xương bò trong 6 tiếng...", "Chần bánh phở qua nước sôi..."],
    en: ["Simmer beef bones for 6 hours...", "Blanch pho noodles in boiling water..."]
  }
  ```

---

### 3.11. Hệ Thống Gợi Ý Thông Minh Đa Chiều (Smart Recommendation Engine - `SmartRecommendationHero.tsx`)
- **Vấn đề giải quyết:** Người dùng không muốn mất thời gian chọn lọc thủ công. Hệ thống cần tự động nhận diện người dùng đang ở đâu, khung giờ nào và sở thích ăn uống ra sao để gợi ý ngay **3 món ăn tối ưu nhất**.
- **Định dạng hiển thị 3 món chuẩn (Editorial 3-Dish Grid):**
  - Chuyển đổi từ 4 cột sang **3 cột (`grid-cols-1 md:grid-cols-3`)** tạo sự nổi bật, hình ảnh ẩm thực to rõ, tỉ lệ hoàn hảo và không gây ngợp mắt cho người dùng.
- **Mô hình Chấm điểm Phù hợp Đa chiều (Multi-factor Scoring Engine):**
  Tổng điểm $S$ của một món ăn được tính theo hàm mục tiêu:
  $$S = S_{\text{region}} + S_{\text{taste\_or\_pop}} + S_{\text{time}} + S_{\text{dining}} + S_{\text{criteria}}$$
  1. **Khớp Vị Trí Địa Lý Tự Động ($S_{\text{region}}$ - Trọng số: 40 điểm):**
     - Món đúng vùng đã nhận diện (`recipe.region === selectedRegion`): $+40$ điểm.
     - Món quốc dân phổ biến cả nước (`recipe.region === 'national'`): $+25$ điểm.
     - Món thuộc vùng miền khác (ví dụ đang ở Hà Nội nhưng món thuộc Miền Nam): $-60$ điểm (loại trừ ngay món sai khu vực).
  2. **Cá Nhân Hóa hoặc Độ Phổ Biến ($S_{\text{taste\_or\_pop}}$ - Trọng số: 35 điểm):**
     - **Trường hợp đã có dữ liệu người dùng (Món yêu thích / Lịch sử xem):** Phân tích danh mục (`category`) và nhãn ăn kiêng (`dietaryTags`) mà người dùng quan tâm. Món ăn thuộc sở thích quen thuộc được cộng $+30 \rightarrow +50$ điểm $\rightarrow$ Gắn nhãn: `"Hợp khẩu vị của bạn"`.
     - **Trường hợp người dùng mới (Chưa có dữ liệu):** Tự động kích hoạt cơ chế chấm điểm phổ biến (`recipe.isPopular` hoặc `popularityScore >= 90`). Các món đặc sản kinh điển của địa phương (như Phở Bò, Bún Chả, Bún Thang tại Hà Nội) được cộng $+30$ điểm $\rightarrow$ Gắn nhãn: `"Món ngon phổ biến tại Hà Nội"`.
  3. **Khớp Bữa Ăn Theo Giờ Sinh Học ($S_{\text{time}}$ - Trọng số: 25 điểm):**
     - Bữa sáng (06:00 - 10:00), Bữa trưa (10:00 - 14:00), Xế chiều (14:00 - 17:00), Bữa tối (17:00 - 21:00), Ăn đêm (21:00 - 05:00).
     - Món ăn có tag bữa tương ứng: $+25$ điểm $\rightarrow$ Lý do: `"Chuẩn [Tên bữa]"`.
  4. **Khớp Phương Thức Dùng Bữa ($S_{\text{dining}}$ - Trọng số: 20 điểm):**
     - Món phù hợp tự nấu hoặc ăn quán theo lựa chọn: $+20$ điểm; không hỗ trợ: $-40$ điểm.
  5. **Khớp Tiêu Chí Dinh Dưỡng ($S_{\text{criteria}}$ - Trọng số: 20 điểm):**
     - Nấu nhanh $\le 25$p, Thanh đạm ít calo, Giàu đạm protein, Món mặn đưa cơm.
- **Trình diễn kết quả (Top 3 Highlights):**
  - Trích xuất Top 3 món có điểm $S$ cao nhất.
  - Hiển thị nhãn vị trí kèm huy hiệu: `Gợi ý #1 • Hợp khẩu vị của bạn` hoặc `Gợi ý #1 • Món ngon phổ biến`.

---

### 3.12. Cơ Chế Tự Động Định Vị Vị Trí Thiết Bị (Geolocation Engine - `geolocation.ts`)
- **Tự động nhận diện không cần chọn vùng thủ công:**
  1. Trình duyệt gọi `navigator.geolocation.getCurrentPosition()`:
     - Vĩ độ $\ge 19.5^\circ\text{N} \rightarrow$ Gán vùng `north` (Hà Nội & Bắc Bộ).
     - $14.5^\circ\text{N} \le$ Vĩ độ $< 19.5^\circ\text{N} \rightarrow$ Gán vùng `central` (Đà Nẵng & Miền Trung).
     - Vĩ độ $< 14.5^\circ\text{N} \rightarrow$ Gán vùng `south` (Sài Gòn & Nam Bộ).
  2. Fallback qua IP Geolocation API với timeout 2 giây nếu người dùng không bật GPS.
  3. Fallback mặc định an toàn: Hà Nội & Bắc Bộ (`north`).
- **Giao diện tinh gọn:**
  - Hiển thị chấm xanh pulse sống động: `📍 Hà Nội & Bắc Bộ (Tự động)` kèm nút `[Đổi]` nhỏ cho phép người dùng chuyển vùng thủ công khi cần.

---

### 3.13. Triết Lý Thiết Kế Impeccable UI (Editorial Culinary Interface)
- **Đoạn tuyệt với "AI Template Clutter":**
  - Loại bỏ hoàn toàn việc nhồi nhét icon cảm xúc vô tội vạ (`🔥`, `⚡`, `🛒`, `🏛️`, `📖`, `🎯`, `✨`) ở các tiêu đề và nút bấm.
  - Chuyển đổi sang phong cách **Tạp chí Ẩm thực Đương đại (Contemporary Culinary Editorial)**: Tập trung vào typography sắc nét, viền mỏng tinh tế (`border-stone-200/80`), nền kem ấm (`bg-stone-50`), màu xanh ngọc lục bảo nhã nhặn (`emerald-700/800`) và cam đất ấm áp (`orange-600`).
- **Phân cấp thị giác chuẩn mực:**
  - Tiêu đề sử dụng font Serif/Sans kết hợp hài hòa, tiêu đề phụ hiển thị ngữ cảnh văn hóa và xuất xứ vùng miền trang nhã.
  - Thẻ món ăn (Recipe Card) có tỉ lệ khung hình `aspect-[16/10]` hiển thị món ăn đầy đặn, chân thực; huy hiệu xuất xứ và nguồn kiểm định Viện Dinh Dưỡng NIN được bố trí dạng viên thuốc (pill badge) thanh lịch, không gây rối mắt.

---

### 3.14. Hạ Tầng Ảnh Món Ăn Chuẩn Xác 100% & Image Proxy Route (`/api/image-proxy`)
- **Khắc phục triệt để vấn đề ảnh:**
  - Loại bỏ toàn bộ các ảnh không liên quan (mặt người, sườn nướng kiểu Tây, burger, khoai tây chiên).
  - 100% 123 món ăn sử dụng ảnh ẩm thực thật đã nấu chín của Việt Nam (Phở Bò, Bún Chả, Bún Riêu Cua, Nem Rán, v.v.).
- **Serverless Image Proxy Route (`/api/image-proxy`):**
  - Nhận tham số `?url=...` và tải ảnh về qua backend Next.js với đầy đủ User-Agent và Referer hợp lệ.
  - Gắn header caching mạnh mẽ: `Cache-Control: public, max-age=604800, stale-while-revalidate=86400`.
  - Nếu ảnh nguồn gặp bất kỳ sự cố mạng nào, proxy tự động trả về ảnh SVG ẩm thực trang nhã với mã HTTP 200 $\rightarrow$ **Tuyệt đối không bao giờ xuất hiện khung ảnh vỡ trên giao diện người dùng**.

## 4. MÔ HÌNH DỮ LIỆU & SCHEMA (DATA STRUCTURES)

### 4.1. TypeScript Interface Chuẩn (`vietnameseRecipes.ts`)
```typescript
export interface MasterRecipe {
  id: string;                         // Mã định danh duy nhất (VD: "vn-pho-bo")
  title: {
    vi: string;                       // Tên tiếng Việt (VD: "Phở Bò Hà Nội")
    en: string;                       // Tên tiếng Anh (VD: "Hanoi Beef Pho")
  };
  image: string;                      // Link ảnh chất lượng cao đã kiểm định (HTTP 200, Unsplash CDN)
  category: {
    vi: string;                       // "Món Nước", "Cơm Gia Đình", "Món Cuốn"...
    en: string;                       // "Noodle Soups", "Rice Dishes", "Rolls"...
  };
  mealType: ('breakfast' | 'lunch' | 'dinner' | 'snack')[]; // Khung bữa ăn phù hợp
  region?: 'north' | 'central' | 'south' | 'national';      // Phân vùng ẩm thực (Bắc, Trung, Nam, Toàn quốc)
  diningType?: ('home_cook' | 'eat_out')[];                 // Thích hợp tự nấu tại nhà hay ra quán/ship
  dietaryTags: {
    vi: string[];                     // ["Giàu đạm", "Ít béo", "Nước dùng trong"]
    en: string[];                     // ["High Protein", "Low Fat", "Clear Broth"]
  };
  time: string;                       // Thời gian nấu (VD: "45 phút" / "45 mins")
  servings: number;                   // Khẩu phần chuẩn cơ sở (thường là 4 hoặc 2)
  calories: number;                   // Tổng năng lượng (kcal) chuẩn NIN
  protein: number;                    // Chất đạm (g)
  fat: number;                        // Chất béo (g)
  carbs: number;                      // Tinh bột (g)
  servingSize: {
    vi: string;                       // "1 tô tiêu chuẩn (650g)"
    en: string;                       // "1 standard bowl (650g)"
  };
  nutritionSource: {
    vi: string;                       // Nguồn Viện Dinh Dưỡng Quốc Gia (NIN)
    en: string;
  };
  recipeSource: {
    vi: string;                       // Di sản / Nghệ nhân / Sách công thức
    en: string;
  };
  ingredients: {
    name: { vi: string; en: string }; // Tên nguyên liệu song ngữ
    amount: string;                   // Định lượng chuẩn hóa (VD: "500g", "2 củ")
  }[];
  instructions: {
    vi: string[];                     // Danh sách các bước nấu tiếng Việt
    en: string[];                     // Danh sách các bước nấu tiếng Anh
  };
}
```

### 4.2. Mô hình Lưu Trữ Cục Bộ Zustand (`useStore.ts`)
```typescript
interface AppState {
  language: 'vi' | 'en';
  setLanguage: (lang: 'vi' | 'en') => void;
  selectedRegion: 'all' | 'north' | 'central' | 'south'; // Vùng miền mặc định: 'north'
  setRegion: (region: 'all' | 'north' | 'central' | 'south') => void;
  selectedDiningMode: 'all' | 'home_cook' | 'eat_out';    // Phương thức: 'all' | 'home_cook' | 'eat_out'
  setDiningMode: (mode: 'all' | 'home_cook' | 'eat_out') => void;
  favorites: string[];                // Danh sách recipe IDs yêu thích
  toggleFavorite: (id: string) => void;
  groceryList: {
    recipeName: string;
    items: { name: string; amount: string; checked: boolean }[];
  }[];
  addIngredientsToGrocery: (recipeName: string, ingredients: any[]) => void;
  toggleGroceryItem: (recipeName: string, index: number) => void;
  clearGroceryList: () => void;
}
```

---

## 5. CẤU TRÚC THƯ MỤC DỰ ÁN (PROJECT DIRECTORY STRUCTURE)

```
Cooking_Choosing/
├── .gitignore                     # Cấu hình bỏ qua file rác, portable node_bin, build cache
├── README.md                      # Giới thiệu tổng quan & hướng dẫn khởi động nhanh
├── Tai_Lieu_Nghiep_Vu.md          # TÀI LIỆU NÀY (Bản đặc tả nghiệp vụ & kiến trúc hoàn chỉnh)
├── run.bat                        # File khởi động nhanh 1-click cho Windows
├── node_bin/                      # Bộ binary Node.js portable (không commit git)
└── frontend/                      # Thư mục mã nguồn Next.js 16
    ├── package.json               # Danh sách thư viện: next, react 19, lucide-react, canvas-confetti, zustand
    ├── next.config.ts             # Cấu hình Next.js (cho phép load ảnh từ domain ngoài)
    ├── tailwind.config.js         # Cấu hình theme màu ấm ẩm thực (brand orange, amber)
    ├── tsconfig.json              # Cấu hình TypeScript nghiêm ngặt
    ├── prisma/                    # Schema database Prisma cho Phase 2
    │   └── schema.prisma
    └── src/
        ├── app/                   # Next.js App Router
        │   ├── layout.tsx         # Root Layout bọc Navbar, ClientFooter & MobileBottomNav
        │   ├── page.tsx           # Trang chủ (Hero, Lọc danh mục, Danh sách món nổi bật)
        │   ├── gacha/page.tsx     # Trang Vòng Quay Gacha CS:GO (Âm thanh Web Audio + Confetti)
        │   ├── fridge/page.tsx    # Trang Tủ Lạnh Có Gì (Thuật toán so khớp nguyên liệu)
        │   ├── grocery/page.tsx   # Trang Giỏ Đi Chợ (Checklist nguyên liệu đã mua)
        │   ├── favorites/page.tsx # Trang Danh Sách Món Yêu Thích
        │   ├── recipe/[id]/       # Trang Chi Tiết Món Ăn (Scaler, Cooking Mode Wake Lock, Eat-out)
        │   └── api/               # Serverless API Routes (/gacha, /fridge, /recipe, /search)
        ├── components/            # UI Components tái sử dụng
        │   ├── home/HeroSection.tsx
        │   ├── home/SmartRecommendationHero.tsx # Hero Gợi Ý Thông Minh Đa Chiều (Vùng miền, Giờ sinh học, Dining Mode)
        │   ├── layout/Navbar.tsx
        │   ├── layout/MobileBottomNav.tsx
        │   ├── layout/Footer.tsx
        │   └── ui/RecipeCard.tsx  # Thẻ món ăn Impeccable UI, chống vỡ ảnh 3 tầng, badge nguồn NIN
        ├── data/
        │   └── vietnameseRecipes.ts # 123 Món ăn Việt Nam chuẩn hóa dữ liệu Viện Dinh Dưỡng NIN, gắn nhãn vùng & cách dùng bữa
        ├── store/
        │   └── useStore.ts        # Zustand Global State (ngôn ngữ, giỏ hàng, yêu thích)
        └── utils/
            ├── recipeScaler.ts    # Thuật toán co giãn nguyên liệu & calo theo số khẩu phần
            ├── sound.ts           # Bộ sinh âm thanh cơ học tick & win bằng Web Audio API
            └── timeContext.ts     # Bộ nhận diện ngữ cảnh 5 khung giờ trong ngày
```

---

## 6. HƯỚNG DẪN KHỞI CHẠY & VẬN HÀNH (GETTING STARTED)

### 6.1. Khởi chạy trên Windows (Chưa cài đặt Node.js hệ thống)
Dự án đã tích hợp sẵn thư mục `node_bin/`. Chỉ cần click đúp vào file:
```cmd
run.bat
```
Hoặc mở PowerShell tại thư mục gốc và chạy:
```powershell
$env:PATH = "$PSScriptRoot\node_bin\node-v20.11.1-win-x64;" + $env:PATH
cd frontend
npm run dev
```
Truy cập trình duyệt: `http://localhost:3000`

### 6.2. Khởi chạy trên máy tính đã có sẵn Node.js (>= 18.17.0)
```bash
cd frontend
npm install
npm run dev
```

### 6.3. Kiểm tra và Build Production
```bash
cd frontend
npm run build
```
Kết quả build chuẩn: **Exit code 0**, 14 routes tĩnh và động được sinh ra không có bất kỳ lỗi TypeScript nào.

### 6.4. Triển khai lên Vercel (Production Deployment)
1. Kết nối kho lưu trữ GitHub `maiquangminh-work/qmeal` với Vercel.
2. Thiết lập **Root Directory** là `frontend`.
3. Framework Preset: **Next.js**.
4. Bấm **Deploy**. Vercel sẽ tự động tối ưu hóa các trang SSG/SSR và phân phối toàn cầu qua CDN Edge Network.

---

## 7. KẾ HOẠCH PHÁT TRIỂN TIẾP THEO (NEXT ROADMAP)

1. **Mở rộng cơ sở dữ liệu ẩm thực:**
   - Bổ sung tiếp tục để đạt mốc **~100 món ăn Việt Nam** thuộc đủ 3 miền Bắc - Trung - Nam, các món chay, món ăn vặt đường phố.
   - Giữ vững nguyên tắc: 100% món có ảnh thực tế (HTTP 200) và số liệu calo/macro đối chiếu Viện Dinh Dưỡng Quốc Gia (NIN).
2. **Tính năng Combo Bữa Cơm Gia Đình:**
   - Gợi ý mâm cơm 3 món chuẩn Việt: "1 Món Mặn + 1 Món Canh + 1 Món Rau Xào/Luộc" cân bằng dinh dưỡng.
3. **Cá nhân hóa theo thể trạng (AI Meal Planner):**
   - Người dùng nhập chiều cao, cân nặng, mục tiêu (Giảm cân / Tăng cơ / Ăn thanh đạm).
   - Hệ thống tự động đề xuất thực đơn cả tuần vừa vặn với mức Calo mục tiêu (TDEE).

