import React from 'react';
import Logo from './Logo';
import { Heart, Send, Sparkles } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-300 pt-16 pb-24 md:pb-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Newsletter Section (Inspired by NomNom / Cook mockup) */}
        <div className="bg-gradient-to-r from-brand-900/60 via-stone-800 to-amber-950/40 rounded-3xl p-6 sm:p-10 border border-brand-800/40 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="inline-flex items-center gap-1 text-xs font-bold text-brand-400 uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              Đăng Ký Nhận Gợi Ý Hàng Ngày
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white font-heading">
              Không Còn Phải Đau Đầu Nghĩ "Hôm Nay Ăn Gì"
            </h3>
            <p className="text-xs sm:text-sm text-stone-400 max-w-md">
              Nhận thực đơn 4 bữa tự động mỗi sáng kèm mẹo nấu ăn và gợi ý quán ngon xung quanh.
            </p>
          </div>

          <div className="w-full md:w-auto flex-1 max-w-md">
            <form onSubmit={(e) => { e.preventDefault(); alert('Cảm ơn bạn đã đăng ký nhận thực đơn từ QMeal!'); }} className="flex gap-2">
              <input
                type="email"
                placeholder="Nhập email của bạn..."
                required
                className="w-full px-4 py-3 rounded-xl bg-stone-900/90 border border-stone-700 text-sm text-white placeholder-stone-500 focus:outline-none focus:ring-2 focus:ring-brand-500"
              />
              <button
                type="submit"
                className="px-5 py-3 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-bold text-sm shadow-warm-md flex items-center gap-2 transition-all flex-shrink-0"
              >
                <span>Đăng ký</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>

        {/* Links & Brand Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          <div className="space-y-4 md:col-span-2">
            <div className="inline-block p-1 bg-white rounded-2xl">
              <Logo size="md" />
            </div>
            <p className="text-sm text-stone-400 leading-relaxed max-w-md">
              Nền tảng gợi ý thực đơn và chọn món ăn Việt Nam toàn diện. Tích hợp bản đồ quán ăn và công thức tự nấu thông minh giúp bạn luôn có những bữa ăn trọn vị và hạnh phúc.
            </p>
            <div className="flex items-center gap-3 text-xs text-stone-400">
              <span>Được xây dựng với niềm tự hào ẩm thực Việt 🇻🇳</span>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Tính Năng Cốt Lõi
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li><a href="#meals-section" className="hover:text-brand-400 transition-colors">4 Buổi Ăn Trong Ngày</a></li>
              <li><button onClick={() => window.dispatchEvent(new CustomEvent('open-fridge'))} className="hover:text-brand-400 transition-colors">Tủ Lạnh Có Gì? (Smart Fridge)</button></li>
              <li><button onClick={() => window.dispatchEvent(new CustomEvent('open-gacha'))} className="hover:text-brand-400 transition-colors">Gacha Mở Hòm CS:GO</button></li>
              <li><a href="#meals-section" className="hover:text-brand-400 transition-colors">Tích Hợp Google Maps Quán Ăn</a></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Liên Hệ & Đóng Góp
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li><span>Email: contact@qmeal.vn</span></li>
              <li><span>Cộng đồng yêu ẩm thực Việt</span></li>
              <li><span>Bản quyền © {new Date().getFullYear()} QMeal / VinaMeal</span></li>
            </ul>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-stone-800/80 text-center text-xs text-stone-500 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} QMeal Platform. Mọi quyền được bảo lưu.</p>
          <p className="flex items-center gap-1">
            Thiết kế theo chuẩn <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" /> & Văn hóa ẩm thực Việt Nam
          </p>
        </div>

      </div>
    </footer>
  );
}
