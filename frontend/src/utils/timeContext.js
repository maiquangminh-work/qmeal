/**
 * Analyzes the current device hour and returns the real-time context for meal recommendation.
 */
export function getTimeContext() {
  const hour = new Date().getHours();

  if (hour >= 5 && hour < 10) {
    return {
      period: 'breakfast',
      suggestedTab: 'an_sang',
      greeting: 'Chào buổi sáng! Nạp năng lượng khởi đầu ngày mới 🌅',
      subGreeting: 'Phở bò tái lăn, bánh mì chảo, xôi nóng - nhanh gọn, ấm bụng và tỉnh táo.',
      badgeText: '🌅 Giờ Bữa Sáng (05:00 - 10:00)',
      ctaText: 'Khám Phá Món Sáng'
    };
  } else if (hour >= 10 && hour < 14) {
    return {
      period: 'lunch',
      suggestedTab: 'all',
      greeting: 'Đến giờ trưa rồi! Nghỉ tay nạp năng lượng tiếp sức ☀️',
      subGreeting: 'Ăn ngoài quán hay tự nấu mâm cơm gia đình?',
      badgeText: '☀️ Giờ Cơm Trưa (10:00 - 14:00)',
      ctaText: 'Xem Món Trưa'
    };
  } else if (hour >= 14 && hour < 17) {
    return {
      period: 'snack',
      suggestedTab: 'an_vat',
      greeting: 'Giờ trà chiều & ăn xế nhẹ nhàng cùng bạn bè ☕',
      subGreeting: 'Gỏi cuốn tôm thịt thanh mát, đồ ăn vặt đổi vị giữa giờ.',
      badgeText: '☕ Giờ Ăn Xế / Chiều (14:00 - 17:00)',
      ctaText: 'Xem Quà Chiều'
    };
  } else if (hour >= 17 && hour < 21) {
    return {
      period: 'dinner',
      suggestedTab: 'all',
      greeting: 'Bữa tối thư giãn sau một ngày dài 🌙',
      subGreeting: 'Bạn muốn tự nấu mâm cơm ấm cúng hay ra ngoài ăn cùng bạn bè?',
      badgeText: '🌙 Bữa Tối (17:00 - 21:00)',
      ctaText: 'Khám Phá Món Tối'
    };
  } else {
    return {
      period: 'night',
      suggestedTab: 'all',
      greeting: 'Gợi ý món ăn khuya ấm bụng, nhẹ tiêu cho đêm muộn 🍜',
      subGreeting: 'Món nước nóng hổi, thanh đạm dễ tiêu hóa giúp bạn ngủ ngon.',
      badgeText: '🌙 Ăn Đêm Nhẹ Bụng (Sau 21:00)',
      ctaText: 'Xem Món Ăn Đêm'
    };
  }
}
