/**
 * Analyzes current device hour and returns bilingual real-time context for meal recommendations.
 */
export interface TimeContextInfo {
  period: 'breakfast' | 'lunch' | 'snack' | 'dinner' | 'night';
  greeting: { vi: string; en: string };
  subGreeting: { vi: string; en: string };
  badgeText: { vi: string; en: string };
  icon: string;
  suggestedCategory: { vi: string; en: string };
}

export function getTimeContext(): TimeContextInfo {
  const hour = new Date().getHours();

  if (hour >= 5 && hour < 10) {
    return {
      period: 'breakfast',
      icon: '🌅',
      greeting: {
        vi: 'Chào buổi sáng! Nạp năng lượng khởi đầu ngày mới',
        en: 'Good morning! Energize your day with a great meal'
      },
      subGreeting: {
        vi: 'Phở bò, bánh mì nóng giòn, bún thang - nhanh gọn, ấm bụng và tỉnh táo.',
        en: 'Hot pho, crispy banh mi, delicate rice noodles - quick and comforting.'
      },
      badgeText: {
        vi: '🌅 Giờ Bữa Sáng (05:00 - 10:00)',
        en: '🌅 Breakfast Time (05:00 - 10:00)'
      },
      suggestedCategory: {
        vi: 'Bữa Sáng',
        en: 'Breakfast'
      }
    };
  } else if (hour >= 10 && hour < 14) {
    return {
      period: 'lunch',
      icon: '☀️',
      greeting: {
        vi: 'Đến giờ cơm trưa rồi! Nghỉ tay nạp năng lượng tiếp sức',
        en: 'Lunchtime! Take a break and recharge'
      },
      subGreeting: {
        vi: 'Cơm tấm sườn bì chả, cơm gia đình đậm đà hay một tô bún bò Huế cay nồng?',
        en: 'Broken rice with pork chops, savory family dishes or spicy beef noodles?'
      },
      badgeText: {
        vi: '☀️ Giờ Cơm Trưa (10:00 - 14:00)',
        en: '☀️ Lunchtime (10:00 - 14:00)'
      },
      suggestedCategory: {
        vi: 'Cơm Gia Đình',
        en: 'Rice Dishes'
      }
    };
  } else if (hour >= 14 && hour < 17) {
    return {
      period: 'snack',
      icon: '☕',
      greeting: {
        vi: 'Giờ quà chiều & ăn xế thanh mát cùng bạn bè',
        en: 'Afternoon snack time! Light bites with friends'
      },
      subGreeting: {
        vi: 'Gỏi cuốn tôm thịt, bánh xèo giòn rụm, bánh khọt đổi vị giữa giờ.',
        en: 'Fresh summer rolls, crispy savory pancakes and street food treats.'
      },
      badgeText: {
        vi: '☕ Giờ Ăn Xế (14:00 - 17:00)',
        en: '☕ Afternoon Tea & Snacks (14:00 - 17:00)'
      },
      suggestedCategory: {
        vi: 'Ăn Vặt',
        en: 'Street Food'
      }
    };
  } else if (hour >= 17 && hour < 21) {
    return {
      period: 'dinner',
      icon: '🌙',
      greeting: {
        vi: 'Bữa tối sum vầy ấm cúng sau một ngày dài',
        en: 'Cozy dinner time after a long day'
      },
      subGreeting: {
        vi: 'Thịt kho tàu mềm rục, canh chua cá lóc miền Tây, cá kho tộ đậm đà cơm mẹ nấu.',
        en: 'Braised caramelized pork, sweet and sour soup, claypot savory fish.'
      },
      badgeText: {
        vi: '🌙 Bữa Cơm Tối (17:00 - 21:00)',
        en: '🌙 Dinner Time (17:00 - 21:00)'
      },
      suggestedCategory: {
        vi: 'Cơm Gia Đình',
        en: 'Home Cooking'
      }
    };
  } else {
    return {
      period: 'night',
      icon: '✨',
      greeting: {
        vi: 'Gợi ý món ăn khuya ấm bụng, nhẹ tiêu cho đêm muộn',
        en: 'Late night cravings? Warm and light options'
      },
      subGreeting: {
        vi: 'Món nước nóng hổi thanh nhẹ dễ tiêu hóa giúp bạn ngủ ngon hơn.',
        en: 'Hot clear noodle soups that are gentle on the stomach.'
      },
      badgeText: {
        vi: '✨ Ăn Đêm Nhẹ Bụng (Sau 21:00)',
        en: '✨ Late Night Comfort (After 21:00)'
      },
      suggestedCategory: {
        vi: 'Món Nước',
        en: 'Noodle Soup'
      }
    };
  }
}