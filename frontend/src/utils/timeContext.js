/**
 * Analyzes the current device hour and returns the real-time context for meal recommendation.
 */
export function getTimeContext() {
  const hour = new Date().getHours();

  if (hour >= 5 && hour < 10) {
    return {
      period: 'breakfast',
      suggestedTab: 'breakfast',
      greeting: 'Chào buổi sáng! Nạp năng lượng khởi đầu ngày mới 🌅',
      subGreeting: 'Phở bò tái lăn, bánh mì chảo, xôi nóng - nhanh gọn, ấm bụng và tỉnh táo.',
      badgeText: '🌅 Giờ Bữa Sáng (05:00 - 10:00)',
      ctaText: 'Khám Phá Món Sáng'
    };
  } else if (hour >= 10 && hour < 14) {
    return {
      period: 'lunch',
      suggestedTab: 'lunch',
      greeting: 'Đến giờ cơm trưa rồi! Nghỉ tay nạp năng lượng tiếp sức ☀️',
      subGreeting: 'Cơm tấm sườn bì chả, đậu sốt cà chua, canh ngao chua thanh mát đưa cơm.',
      badgeText: '☀️ Giờ Bữa Trưa (10:00 - 14:00)',
      ctaText: 'Xem Món Cơm Trưa'
    };
  } else if (hour >= 14 && hour < 17) {
    return {
      period: 'snack',
      suggestedTab: 'snack',
      greeting: 'Giờ trà chiều & ăn xế nhẹ nhàng cùng bạn bè ☕',
      subGreeting: 'Gỏi cuốn tôm thịt thanh mát, đồ ăn nhẹ lành mạnh giải lao chiều.',
      badgeText: '☕ Giờ Ăn Xế / Chiều (14:00 - 17:00)',
      ctaText: 'Xem Món Ăn Vặt'
    };
  } else if (hour >= 17 && hour < 21) {
    return {
      period: 'dinner',
      suggestedTab: 'combos',
      greeting: 'Bữa tối sum vầy - Ấm cúng bên mâm cơm gia đình 🌙',
      subGreeting: 'Thịt kho tàu, canh cua mồng tơi, sườn chua ngọt, rau muống xào tỏi.',
      badgeText: '🌙 Mâm Cơm Gia Đình (17:00 - 21:00)',
      ctaText: 'Xem Mâm Cơm Tối'
    };
  } else {
    return {
      period: 'night',
      suggestedTab: 'snack',
      greeting: 'Gợi ý món ăn khuya ấm bụng, nhẹ tiêu cho đêm muộn 🍜',
      subGreeting: 'Món nước nóng hổi, thanh đạm dễ tiêu hóa giúp bạn ngủ ngon.',
      badgeText: '🌙 Ăn Đêm Nhẹ Bụng (Sau 21:00)',
      ctaText: 'Xem Món Ăn Khuya'
    };
  }
}
