export interface DetailedLocation {
  region: 'north' | 'central' | 'south' | 'all';
  city: string;
  district: string;
  ward?: string;
  fullAddress: string;
  isAuto: boolean;
  latitude?: number;
  longitude?: number;
}

// Rich administrative hierarchy for Vietnam top culinary hubs
export interface CityLocationData {
  name: string;
  region: 'north' | 'central' | 'south';
  districts: {
    name: string;
    wards: string[];
  }[];
}

export const VIETNAM_LOCATIONS: Record<string, CityLocationData> = {
  hanoi: {
    name: 'Hà Nội',
    region: 'north',
    districts: [
      {
        name: 'Quận Cầu Giấy',
        wards: ['Phường Dịch Vọng Hậu', 'Phường Dịch Vọng', 'Phường Nghĩa Tân', 'Phường Mai Dịch', 'Phường Quan Hoa', 'Phường Trung Hòa', 'Phường Yên Hòa', 'Phường Nghĩa Đô']
      },
      {
        name: 'Quận Hoàn Kiếm',
        wards: ['Phường Hàng Trống', 'Phường Hàng Bạc', 'Phường Tràng Tiền', 'Phường Hàng Đào', 'Phường Cửa Đông', 'Phường Phan Chu Trinh', 'Phường Lý Thái Tổ', 'Phường Hàng Gai', 'Phường Đồng Xuân']
      },
      {
        name: 'Quận Ba Đình',
        wards: ['Phường Kim Mã', 'Phường Giảng Võ', 'Phường Điện Biên', 'Phường Liễu Giai', 'Phường Đội Cấn', 'Phường Ngọc Khánh', 'Phường Quán Thánh', 'Phường Cống Vị', 'Phường Thành Công']
      },
      {
        name: 'Quận Đống Đa',
        wards: ['Phường Láng Hạ', 'Phường Ô Chợ Dừa', 'Phường Văn Miếu', 'Phường Kim Liên', 'Phường Trung Liệt', 'Phường Khâm Thiên', 'Phường Cát Linh', 'Phường Quốc Tử Giám', 'Phường Láng Thượng']
      },
      {
        name: 'Quận Hai Bà Trưng',
        wards: ['Phường Bách Khoa', 'Phường Minh Khai', 'Phường Lê Đại Hành', 'Phường Đồng Tâm', 'Phường Phố Huế', 'Phường Trương Định', 'Phường Thanh Nhàn']
      },
      {
        name: 'Quận Tây Hồ',
        wards: ['Phường Quảng An', 'Phường Yên Phụ', 'Phường Thụy Khuê', 'Phường Nhật Tân', 'Phường Xuân La', 'Phường Bưởi', 'Phường Tứ Liên']
      },
      {
        name: 'Quận Thanh Xuân',
        wards: ['Phường Nhân Chính', 'Phường Khương Mai', 'Phường Thanh Xuân Bắc', 'Phường Khương Trung', 'Phường Hạ Đình', 'Phường Thanh Xuân Trung']
      },
      {
        name: 'Quận Nam Từ Liêm',
        wards: ['Phường Mỹ Đình 1', 'Phường Mỹ Đình 2', 'Phường Mễ Trì', 'Phường Trung Văn', 'Phường Tây Mỗ', 'Phường Đại Mỗ', 'Phường Phú Đô']
      },
      {
        name: 'Quận Bắc Từ Liêm',
        wards: ['Phường Cổ Nhuế 1', 'Phường Cổ Nhuế 2', 'Phường Xuân Đỉnh', 'Phường Phúc Diễn', 'Phường Minh Khai']
      },
      {
        name: 'Quận Long Biên',
        wards: ['Phường Ngọc Lâm', 'Phường Bồ Đề', 'Phường Gia Thụy', 'Phường Đức Giang', 'Phường Sài Đồng']
      },
      {
        name: 'Quận Hà Đông',
        wards: ['Phường Quang Trung', 'Phường Yết Kiêu', 'Phường Nguyễn Trãi', 'Phường Văn Quán', 'Phường Mộ Lao', 'Phường La Khê']
      }
    ]
  },
  saigon: {
    name: 'TP. Hồ Chí Minh',
    region: 'south',
    districts: [
      {
        name: 'Quận 1',
        wards: ['Phường Bến Nghé', 'Phường Bến Thành', 'Phường Tân Định', 'Phường Đa Kao', 'Phường Phạm Ngũ Lão', 'Phường Nguyễn Thái Bình', 'Phường Cầu Kho']
      },
      {
        name: 'Quận 3',
        wards: ['Phường Võ Thị Sáu', 'Phường 1', 'Phường 2', 'Phường 3', 'Phường 4', 'Phường 5', 'Phường 9', 'Phường 11']
      },
      {
        name: 'Quận 5',
        wards: ['Phường 1', 'Phường 2', 'Phường 5', 'Phường 7', 'Phường 11', 'Phường 12', 'Phường 14']
      },
      {
        name: 'Quận 7',
        wards: ['Phường Tân Phong', 'Phường Tân Phú', 'Phường Phú Mỹ', 'Phường Tân Thuận Đông', 'Phường Tân Quy']
      },
      {
        name: 'Quận 10',
        wards: ['Phường 1', 'Phường 2', 'Phường 4', 'Phường 10', 'Phường 12', 'Phường 14', 'Phường 15']
      },
      {
        name: 'Quận Bình Thạnh',
        wards: ['Phường 1', 'Phường 2', 'Phường 14', 'Phường 19', 'Phường 25', 'Phường 26', 'Phường 27']
      },
      {
        name: 'Quận Phú Nhuận',
        wards: ['Phường 1', 'Phường 2', 'Phường 7', 'Phường 8', 'Phường 9', 'Phường 15']
      },
      {
        name: 'TP. Thủ Đức',
        wards: ['Phường Thảo Điền', 'Phường An Phú', 'Phường Hiệp Phú', 'Phường Linh Trung', 'Phường Linh Chiểu']
      }
    ]
  },
  danang: {
    name: 'Đà Nẵng',
    region: 'central',
    districts: [
      {
        name: 'Quận Hải Châu',
        wards: ['Phường Thạch Thang', 'Phường Hải Châu 1', 'Phường Phước Ninh', 'Phường Bình Thuận', 'Phường Thuận Phước']
      },
      {
        name: 'Quận Sơn Trà',
        wards: ['Phường An Hải Bắc', 'Phường Phước Mỹ', 'Phường Thọ Quang', 'Phường Nại Hiên Đông']
      },
      {
        name: 'Quận Ngũ Hành Sơn',
        wards: ['Phường Mỹ An', 'Phường Khuê Mỹ', 'Phường Hòa Quý', 'Phường Hòa Hải']
      },
      {
        name: 'Quận Thanh Khê',
        wards: ['Phường Vĩnh Trung', 'Phường Tân Chính', 'Phường Thạc Gián', 'Phường Chính Gián']
      }
    ]
  },
  hue: {
    name: 'Thừa Thiên Huế',
    region: 'central',
    districts: [
      {
        name: 'TP. Huế',
        wards: ['Phường Vĩnh Ninh', 'Phường Phú Nhuận', 'Phường Thuận Lộc', 'Phường Vỹ Dạ', 'Phường Kim Long', 'Phường Tây Lộc']
      }
    ]
  },
  haiphong: {
    name: 'Hải Phòng',
    region: 'north',
    districts: [
      {
        name: 'Quận Hồng Bàng',
        wards: ['Phường Hoàng Văn Thụ', 'Phường Phan Bội Châu', 'Phường Minh Khai', 'Phường Quán Toan']
      },
      {
        name: 'Quận Ngô Quyền',
        wards: ['Phường Lạc Viên', 'Phường Cầu Đất', 'Phường Lương Khánh Thiện', 'Phường Đằng Giang']
      },
      {
        name: 'Quận Lê Chân',
        wards: ['Phường An Biên', 'Phường Cát Dài', 'Phường Niệm Nghĩa', 'Phường Kênh Dương']
      }
    ]
  }
};

// Reverse geocode coordinates to district and ward
export async function reverseGeocodeCoords(lat: number, lon: number): Promise<{
  city: string;
  district: string;
  ward?: string;
  region: 'north' | 'central' | 'south';
}> {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 2500);

    const res = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json&accept-language=vi`, {
      signal: controller.signal,
      headers: {
        'User-Agent': 'QMealApp/2.0 (contact@qmeal.vn)'
      }
    });
    clearTimeout(timeoutId);

    if (res.ok) {
      const data = await res.json();
      const addr = data.address || {};
      const ward = addr.suburb || addr.quarter || addr.neighbourhood || addr.village;
      const district = addr.city_district || addr.district || addr.county || addr.town;
      const city = addr.city || addr.state || addr.province || 'Hà Nội';

      let region: 'north' | 'central' | 'south' = 'north';
      if (lat >= 19.5) region = 'north';
      else if (lat >= 14.5) region = 'central';
      else region = 'south';

      return {
        city: city.replace('Thành phố ', ''),
        district: district || (region === 'north' ? 'Quận Cầu Giấy' : region === 'central' ? 'Quận Hải Châu' : 'Quận 1'),
        ward: ward || undefined,
        region
      };
    }
  } catch (err) {
    // Non-blocking fallback
  }

  // Coordinate bounding estimation for Hanoi
  if (lat >= 19.5) {
    // Check approximate district based on Hanoi center offset
    let district = 'Quận Cầu Giấy';
    let ward = 'Phường Dịch Vọng Hậu';
    if (lon > 105.84) {
      district = 'Quận Hoàn Kiếm';
      ward = 'Phường Hàng Trống';
    } else if (lat < 21.01) {
      district = 'Quận Đống Đa';
      ward = 'Phường Láng Hạ';
    }

    return {
      city: 'Hà Nội',
      district,
      ward,
      region: 'north'
    };
  } else if (lat >= 14.5) {
    return {
      city: 'Đà Nẵng',
      district: 'Quận Hải Châu',
      ward: 'Phường Thạch Thang',
      region: 'central'
    };
  } else {
    return {
      city: 'TP. Hồ Chí Minh',
      district: 'Quận 1',
      ward: 'Phường Bến Nghé',
      region: 'south'
    };
  }
}

export async function detectUserLocation(): Promise<DetailedLocation> {
  // 1. Try Browser Geolocation API
  if (typeof window !== 'undefined' && 'geolocation' in navigator) {
    try {
      const position = await new Promise<GeolocationPosition>((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject, {
          timeout: 3500,
          maximumAge: 3600000,
          enableHighAccuracy: false
        });
      });

      const lat = position.coords.latitude;
      const lon = position.coords.longitude;

      const geo = await reverseGeocodeCoords(lat, lon);
      const fullAddress = geo.ward 
        ? `${geo.ward}, ${geo.district}, ${geo.city}`
        : `${geo.district}, ${geo.city}`;

      return {
        region: geo.region,
        city: geo.city,
        district: geo.district,
        ward: geo.ward,
        fullAddress,
        isAuto: true,
        latitude: lat,
        longitude: lon
      };
    } catch (geoError) {
      // Permission denied or timeout
    }
  }

  // 2. Default fallback for Northern user: Dịch Vọng Hậu, Cầu Giấy, Hà Nội
  return {
    region: 'north',
    city: 'Hà Nội',
    district: 'Quận Cầu Giấy',
    ward: 'Phường Dịch Vọng Hậu',
    fullAddress: 'Phường Dịch Vọng Hậu, Quận Cầu Giấy, Hà Nội',
    isAuto: true
  };
}
