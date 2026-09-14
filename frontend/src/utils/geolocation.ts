export interface DetectedLocation {
  region: 'north' | 'central' | 'south' | 'all';
  cityName: string;
  isAuto: boolean;
  latitude?: number;
  longitude?: number;
}

export async function detectUserLocation(): Promise<DetectedLocation> {
  // 1. Try Browser Geolocation API
  if (typeof window !== 'undefined' && 'geolocation' in navigator) {
    try {
      const position = await new Promise<GeolocationPosition>((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject, {
          timeout: 4000,
          maximumAge: 3600000, // 1 hour cache
          enableHighAccuracy: false
        });
      });

      const lat = position.coords.latitude;
      const lon = position.coords.longitude;

      // Classify Vietnam coordinates by latitude
      if (lat >= 19.5) {
        return {
          region: 'north',
          cityName: 'Hà Nội & Bắc Bộ',
          isAuto: true,
          latitude: lat,
          longitude: lon
        };
      } else if (lat >= 14.5 && lat < 19.5) {
        return {
          region: 'central',
          cityName: 'Đà Nẵng & Miền Trung',
          isAuto: true,
          latitude: lat,
          longitude: lon
        };
      } else {
        return {
          region: 'south',
          cityName: 'Sài Gòn & Nam Bộ',
          isAuto: true,
          latitude: lat,
          longitude: lon
        };
      }
    } catch (geoError) {
      // User denied permission or timeout, proceed to IP fallback
    }
  }

  // 2. Fallback: Fast IP Geolocation Check (Non-blocking with 2s timeout)
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 2000);
    const res = await fetch('https://freeipapi.com/api/json', {
      signal: controller.signal
    });
    clearTimeout(timeoutId);

    if (res.ok) {
      const data = await res.json();
      const lat = data.latitude;
      const cityName = data.cityName || 'Hà Nội';

      if (typeof lat === 'number') {
        if (lat >= 19.5) {
          return { region: 'north', cityName: cityName || 'Hà Nội', isAuto: true };
        } else if (lat >= 14.5 && lat < 19.5) {
          return { region: 'central', cityName: cityName || 'Đà Nẵng', isAuto: true };
        } else {
          return { region: 'south', cityName: cityName || 'TP. Hồ Chí Minh', isAuto: true };
        }
      }
    }
  } catch (ipError) {
    // Network error or aborted, fallback to default
  }

  // 3. Default: Hanoi & Northern Vietnam
  return {
    region: 'north',
    cityName: 'Hà Nội & Bắc Bộ',
    isAuto: true
  };
}
