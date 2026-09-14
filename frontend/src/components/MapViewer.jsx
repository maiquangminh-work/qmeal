import React, { useState } from 'react';
import { MapPin, Navigation, Clock, DollarSign, Star, ExternalLink, Heart } from 'lucide-react';

export default function MapViewer({ dish }) {
  const restaurants = dish.nearbyRestaurants || [];
  const [selectedRestaurant, setSelectedRestaurant] = useState(restaurants[0] || null);

  const defaultQuery = selectedRestaurant 
    ? `${selectedRestaurant.name} ${selectedRestaurant.address}`
    : `${dish.name} quán ăn gần đây`;

  const mapEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(defaultQuery)}&t=&z=14&ie=UTF8&iwloc=&output=embed`;
  const directMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(defaultQuery)}`;

  return (
    <div className="space-y-6">
      
      {/* Map Header Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-brand-50 border border-brand-200/80 rounded-2xl p-4">
        <div>
          <h4 className="text-sm font-bold text-brand-900 flex items-center gap-2">
            <MapPin className="w-4 h-4 text-brand-600" />
            Các Quán Bán "{dish.name}" Quanh Đây
          </h4>
          <p className="text-xs text-brand-700 mt-0.5">
            Bản đồ Google Maps hiển thị các địa điểm nổi tiếng có bán món ăn này gần vị trí của bạn
          </p>
        </div>

        <a
          href={directMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-brand-600 hover:bg-brand-700 text-white text-xs font-bold shadow-sm transition-all flex-shrink-0"
        >
          <span>Mở Google Maps</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* Quick Delivery Shortcuts (ShopeeFood / GrabFood) */}
      <div className="bg-stone-50/90 border border-stone-200/80 rounded-2xl p-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-xs">
        <div className="flex items-center gap-2 text-xs text-stone-700">
          <span className="text-lg">🛵</span>
          <span className="font-semibold">Lười nấu? Đặt ship món <strong className="text-stone-900 font-bold">"{dish.name}"</strong> giao siêu tốc:</span>
        </div>

        <div className="flex items-center gap-2 flex-wrap">
          <a
            href={`https://shopeefood.vn/search?q=${encodeURIComponent(dish.name)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3.5 py-1.5 rounded-xl bg-[#ee4d2d] hover:bg-[#d73211] text-white font-bold text-xs flex items-center gap-1.5 transition-all shadow-xs active:scale-95"
          >
            <span>ShopeeFood</span>
            <ExternalLink className="w-3 h-3" />
          </a>

          <a
            href={`https://food.grab.com/vn/vi/restaurants?search=${encodeURIComponent(dish.name)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3.5 py-1.5 rounded-xl bg-[#00b14f] hover:bg-[#009643] text-white font-bold text-xs flex items-center gap-1.5 transition-all shadow-xs active:scale-95"
          >
            <span>GrabFood</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>

      {/* Google Maps Embed Frame */}
      <div className="relative rounded-2xl overflow-hidden border border-stone-300 shadow-md bg-stone-100 aspect-[16/9] sm:aspect-[21/9]">
        <iframe
          title={`Bản đồ Google Maps cho ${dish.name}`}
          src={mapEmbedUrl}
          className="w-full h-full border-0"
          loading="lazy"
          allowFullScreen
        ></iframe>
      </div>

      {/* List of Nearby Restaurants */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h5 className="text-xs font-bold uppercase tracking-wider text-stone-500">
            Danh sách quán gợi ý ({restaurants.length} địa điểm)
          </h5>
          <button className="text-[10px] font-bold text-brand-600 bg-brand-50 px-2 py-1 rounded-md flex items-center gap-1 border border-brand-200">
            <Navigation className="w-3 h-3" />
            Vị trí của tôi
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {restaurants.map((place, idx) => {
            const isSelected = selectedRestaurant?.name === place.name;
            const placeDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(`${place.name} ${place.address}`)}`;
            
            // Strictly use provided data, no fake randoms
            const tiktokHearts = place.tiktokHearts || '--';
            const reviewsCount = place.reviewsCount || '--';

            return (
              <div
                key={idx}
                onClick={() => setSelectedRestaurant(place)}
                className={`p-4 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'border-brand-500 bg-brand-50/40 shadow-warm-md scale-[1.02]'
                    : 'border-stone-200 hover:border-brand-300 bg-white hover:shadow-warm-sm'
                }`}
              >
                <div>
                  <div className="flex items-start justify-between gap-2">
                    <h6 className="font-bold text-stone-900 text-sm sm:text-base leading-tight">
                      {place.name}
                    </h6>
                  </div>

                  <p className="text-xs text-stone-500 mt-1.5 flex items-start gap-1">
                    <MapPin className="w-3.5 h-3.5 text-stone-400 flex-shrink-0 mt-0.5" />
                    <span className="line-clamp-2 leading-relaxed">{place.address}</span>
                  </p>
                </div>

                {/* Social Proof Badges */}
                <div className="mt-3 flex items-center gap-2 flex-wrap">
                  <div className="flex items-center gap-1 bg-amber-50 border border-amber-200 px-2 py-1 rounded text-[10px] font-bold text-amber-700">
                    <Star className="w-3 h-3 fill-amber-500 text-amber-500" />
                    <span>{place.rating} ({reviewsCount} GG Maps)</span>
                  </div>
                  <div className="flex items-center gap-1 bg-rose-50 border border-rose-200 px-2 py-1 rounded text-[10px] font-bold text-rose-700">
                    <Heart className="w-3 h-3 fill-rose-500 text-rose-500" />
                    <span>{tiktokHearts} TikTok</span>
                  </div>
                </div>

                <div className="mt-3 pt-3 border-t border-stone-100 flex items-center justify-between text-xs">
                  <div className="space-y-1">
                    <div className="flex items-center gap-1 text-emerald-600 font-bold">
                      <Navigation className="w-3.5 h-3.5" />
                      <span>Cách bạn {place.distance}</span>
                    </div>
                    <div className="text-[11px] font-medium text-stone-500">
                      🕒 {place.openHours} • 💰 {place.priceRange}
                    </div>
                  </div>

                  <a
                    href={placeDirectionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="px-3 py-2 rounded-xl bg-stone-900 hover:bg-brand-600 text-white font-bold text-xs flex items-center gap-1.5 transition-colors flex-shrink-0 shadow-sm"
                  >
                    <span>Đường đi</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
}
