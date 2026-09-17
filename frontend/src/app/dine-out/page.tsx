'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { useStore } from '@/store/useStore';
import { dineOutCategories, DineOutCategory } from '@/data/dineOutCategories';
import { 
  Sparkles, 
  MapPin, 
  Dices, 
  Users, 
  Heart, 
  DollarSign, 
  ChevronRight, 
  X, 
  Lightbulb, 
  Compass, 
  ArrowLeft,
  Flame,
  CheckCircle2,
  ExternalLink
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { playWinSound, playTickSound } from '@/utils/sound';

export default function DineOutPage() {
  const { language } = useStore();

  const [selectedOccasion, setSelectedOccasion] = useState<'all' | 'couple' | 'group' | 'family' | 'solo'>('all');
  const [selectedBudget, setSelectedBudget] = useState<'all' | 'budget' | 'medium' | 'premium'>('all');
  const [activeCategory, setActiveCategory] = useState<DineOutCategory | null>(null);
  
  // Gacha state
  const [isGachaModalOpen, setIsGachaModalOpen] = useState(false);
  const [isRolling, setIsRolling] = useState(false);
  const [rolledWinner, setRolledWinner] = useState<DineOutCategory | null>(null);

  const t = {
    vi: {
      back: 'Trang chủ',
      badge: 'Ẩm Thực Phố Xá & Nhà Hàng',
      title: 'Hôm Nay Đi Ăn Gì?',
      subtitle: 'Dẹp tan câu hỏi "Ăn gì cũng được" — Khám phá 8 đại tiệc lẩu, nướng, ốc, buffet, sushi chuẩn vị nhất cùng bạn bè và người thương!',
      spinBtn: '🎲 Quay Chọn Kèo Ăn Ngẫu Nhiên',
      spinning: 'ĐANG CHỐT KÈO ĂN...',
      filterOccasion: 'Dịp đi ăn:',
      filterBudget: 'Ngân sách:',
      occasions: {
        all: 'Tất cả',
        couple: 'Hẹn hò 2 người 💑',
        group: 'Tụ tập bạn bè 🍻',
        family: 'Gia đình quây quần 👨‍👩‍👧‍👦',
        solo: 'Đi ăn 1 mình 🚶'
      },
      budgets: {
        all: 'Tất cả mức giá',
        budget: 'Bình dân (<150k)',
        medium: 'Hợp lý (150k - 250k)',
        premium: 'Thả ga & Sang xịn (>250k)'
      },
      mustTry: 'Món "ruột" phải thử:',
      viewDetails: 'Xem bí kíp & Menu',
      findNearby: 'Tìm quán gần bạn',
      tipsTitle: 'Bí kíp ăn ngon & lưu ý:',
      subTypesTitle: 'Các biến tấu phong phú:',
      allMustTryTitle: 'Danh sách món ngon nhất định phải gọi:',
      winnerTitle: '🎉 Kèo ăn hôm nay của bạn:',
      spinAgain: 'Quay lại món khác',
      lockDeal: 'Chốt kèo & Tìm quán ngay'
    },
    en: {
      back: 'Home',
      badge: 'Street Food & Dine Out',
      title: 'Where To Eat Today?',
      subtitle: 'No more "Anything is fine" arguments — Explore hotpot, BBQ, street seafood, buffet and sushi with your friends and lovers!',
      spinBtn: '🎲 Random Dine-Out Picker',
      spinning: 'CHOOSING TODAY\'S MEAL...',
      filterOccasion: 'Occasion:',
      filterBudget: 'Budget:',
      occasions: {
        all: 'All',
        couple: 'Date Night 💑',
        group: 'Friends Gathering 🍻',
        family: 'Family Dinner 👨‍👩‍👧‍👦',
        solo: 'Solo Dining 🚶'
      },
      budgets: {
        all: 'All Budgets',
        budget: 'Budget (<150k)',
        medium: 'Moderate (150k - 250k)',
        premium: 'Premium / Buffet (>250k)'
      },
      mustTry: 'Must-try highlights:',
      viewDetails: 'View Tips & Menu',
      findNearby: 'Find near you',
      tipsTitle: 'Insider Tips & Secrets:',
      subTypesTitle: 'Popular variations:',
      allMustTryTitle: 'Signature dishes you must order:',
      winnerTitle: '🎉 Today\'s Winning Meal:',
      spinAgain: 'Roll again',
      lockDeal: 'Lock in & Find restaurants'
    }
  }[language];

  // Filter logic
  const filteredCategories = useMemo(() => {
    return dineOutCategories.filter((item) => {
      const matchOccasion = selectedOccasion === 'all' || item.occasions.includes(selectedOccasion);
      const matchBudget = selectedBudget === 'all' || item.budgetTier === selectedBudget;
      return matchOccasion && matchBudget;
    });
  }, [selectedOccasion, selectedBudget]);

  // Roll Gacha
  const handleStartGacha = () => {
    setIsGachaModalOpen(true);
    setIsRolling(true);
    setRolledWinner(null);

    const candidates = filteredCategories.length > 0 ? filteredCategories : dineOutCategories;
    let counter = 0;
    const totalFlips = 20;

    const interval = setInterval(() => {
      counter++;
      const randomItem = candidates[Math.floor(Math.random() * candidates.length)];
      setRolledWinner(randomItem);
      playTickSound();

      if (counter >= totalFlips) {
        clearInterval(interval);
        const finalWinner = candidates[Math.floor(Math.random() * candidates.length)];
        setRolledWinner(finalWinner);
        setIsRolling(false);
        playWinSound();

        try {
          confetti({
            particleCount: 90,
            spread: 70,
            origin: { y: 0.6 }
          });
        } catch {}
      }
    }, 110);
  };

  const openGoogleMaps = (query: string) => {
    const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 pb-20">
      {/* Top Banner / Navigation */}
      <header className="bg-gradient-to-r from-orange-600 via-amber-600 to-rose-600 text-white pt-8 pb-14 px-4 sm:px-6 lg:px-8 relative overflow-hidden shadow-lg">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 -mt-8 -mr-8 w-64 h-64 rounded-full bg-white/10 blur-2xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -mb-8 -ml-8 w-64 h-64 rounded-full bg-amber-400/20 blur-2xl pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex items-center justify-between mb-6">
            <Link 
              href="/"
              className="inline-flex items-center gap-2 bg-black/20 hover:bg-black/30 backdrop-blur-md px-4 py-2 rounded-2xl text-xs sm:text-sm font-semibold transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>{t.back}</span>
            </Link>

            <div className="inline-flex items-center gap-1.5 bg-amber-400/30 backdrop-blur-md px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-amber-100 border border-amber-300/30">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{t.badge}</span>
            </div>
          </div>

          <div className="max-w-2xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white mb-3 drop-shadow-xs">
              {t.title}
            </h1>
            <p className="text-sm sm:text-base text-orange-100 leading-relaxed drop-shadow-xs">
              {t.subtitle}
            </p>
          </div>

          {/* Quick Random Gacha CTA */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <button
              onClick={handleStartGacha}
              className="bg-white hover:bg-orange-50 text-orange-700 font-extrabold px-6 py-3.5 rounded-2xl shadow-xl hover:shadow-2xl transition-all flex items-center gap-2.5 transform hover:-translate-y-0.5 active:scale-95 text-sm sm:text-base border border-orange-200 cursor-pointer"
            >
              <Dices className="w-5 h-5 text-orange-600 animate-spin" style={{ animationDuration: '4s' }} />
              <span>{t.spinBtn}</span>
            </button>
            <span className="text-xs text-orange-100/90 font-medium">
              ✨ Dành riêng cho những lúc cả nhóm bảo: &quot;Ăn gì cũng được!&quot;
            </span>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-20 space-y-6">
        {/* Filters Card */}
        <section className="bg-white rounded-3xl p-5 sm:p-6 shadow-xl border border-stone-200/80 space-y-4">
          {/* Occasion Filters */}
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-stone-600 mb-2.5 flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5 text-orange-500" />
              <span>{t.filterOccasion}</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {(['all', 'couple', 'group', 'family', 'solo'] as const).map((occ) => (
                <button
                  key={occ}
                  onClick={() => setSelectedOccasion(occ)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                    selectedOccasion === occ
                      ? 'bg-orange-600 text-white shadow-md shadow-orange-600/30'
                      : 'bg-stone-100 text-stone-600 hover:bg-stone-200/80'
                  }`}
                >
                  {t.occasions[occ]}
                </button>
              ))}
            </div>
          </div>

          <div className="h-px bg-stone-100" />

          {/* Budget Filters */}
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-stone-600 mb-2.5 flex items-center gap-1.5">
              <DollarSign className="w-3.5 h-3.5 text-emerald-500" />
              <span>{t.filterBudget}</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {(['all', 'budget', 'medium', 'premium'] as const).map((bud) => (
                <button
                  key={bud}
                  onClick={() => setSelectedBudget(bud)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                    selectedBudget === bud
                      ? 'bg-stone-900 text-white shadow-md'
                      : 'bg-stone-100 text-stone-600 hover:bg-stone-200/80'
                  }`}
                >
                  {t.budgets[bud]}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Categories Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6">
          {filteredCategories.map((category) => (
            <article
              key={category.id}
              className="bg-white rounded-3xl overflow-hidden border border-stone-200/80 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              {/* Card Image Banner */}
              <div className="relative h-48 sm:h-52 w-full overflow-hidden">
                <img
                  src={category.image}
                  alt={language === 'vi' ? category.name : category.nameEn}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
                
                {/* Price tag */}
                <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-xs font-black text-stone-800 shadow-md flex items-center gap-1">
                  <span>💰</span>
                  <span>{language === 'vi' ? category.priceRange : category.priceRangeEn}</span>
                </div>

                {/* Big Category Title & Icon */}
                <div className="absolute bottom-3 left-4 right-4">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-2xl drop-shadow">{category.icon}</span>
                    <h2 className="text-lg sm:text-xl font-black text-white drop-shadow">
                      {language === 'vi' ? category.name : category.nameEn}
                    </h2>
                  </div>
                  <p className="text-xs text-stone-200 line-clamp-1">
                    {language === 'vi' ? category.tagline : category.taglineEn}
                  </p>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                {/* Vibe description */}
                <div className="bg-amber-50/80 border border-amber-200/60 rounded-2xl p-3 text-xs text-amber-900 flex items-start gap-2">
                  <span className="text-base flex-shrink-0">✨</span>
                  <span>{language === 'vi' ? category.vibe : category.vibeEn}</span>
                </div>

                {/* Must-try preview */}
                <div>
                  <h3 className="text-xs font-bold text-stone-600 uppercase tracking-wider mb-2 flex items-center gap-1">
                    <Flame className="w-3.5 h-3.5 text-orange-500" />
                    <span>{t.mustTry}</span>
                  </h3>
                  <div className="space-y-1.5">
                    {category.mustTryDishes.slice(0, 3).map((dish, i) => (
                      <div key={i} className="text-xs text-stone-700 flex items-center gap-2">
                        <CheckCircle2 className={`w-3.5 h-3.5 flex-shrink-0 ${dish.highlight ? 'text-orange-500' : 'text-stone-300'}`} />
                        <span className={`line-clamp-1 ${dish.highlight ? 'font-bold text-stone-900' : ''}`}>
                          {dish.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="pt-2 flex items-center gap-2 border-t border-stone-100">
                  <button
                    onClick={() => setActiveCategory(category)}
                    className="flex-1 bg-stone-100 hover:bg-orange-50 hover:text-orange-700 hover:border-orange-200 border border-stone-200 text-stone-800 font-bold py-2.5 px-3 rounded-2xl text-xs transition-colors flex items-center justify-center gap-1.5"
                  >
                    <span>{t.viewDetails}</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => openGoogleMaps(category.mapsQuery)}
                    className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2.5 px-4 rounded-2xl text-xs transition-all shadow-sm hover:shadow-md flex items-center gap-1.5"
                    title={t.findNearby}
                  >
                    <MapPin className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">{t.findNearby}</span>
                    <ExternalLink className="w-3 h-3 opacity-70" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </section>
      </main>

      {/* Category Detail Modal */}
      {activeCategory && (
        <div 
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setActiveCategory(null)}
        >
          <div 
            className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-stone-200 relative flex flex-col animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Image Header */}
            <div className="relative h-48 sm:h-60 w-full overflow-hidden flex-shrink-0">
              <img
                src={activeCategory.image}
                alt={activeCategory.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              
              <button
                onClick={() => setActiveCategory(null)}
                className="absolute top-3 right-3 w-9 h-9 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center backdrop-blur-md transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="absolute bottom-4 left-5 right-5">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-3xl">{activeCategory.icon}</span>
                  <h3 className="text-xl sm:text-2xl font-black text-white">
                    {language === 'vi' ? activeCategory.name : activeCategory.nameEn}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-stone-200">
                  {language === 'vi' ? activeCategory.tagline : activeCategory.taglineEn}
                </p>
              </div>
            </div>

            {/* Modal Body Content */}
            <div className="p-6 space-y-6 flex-1">
              {/* Key metadata pills */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="bg-amber-100 text-amber-900 border border-amber-200 px-3 py-1 rounded-xl text-xs font-bold">
                  💰 {language === 'vi' ? activeCategory.priceRange : activeCategory.priceRangeEn}
                </span>
                <span className="bg-stone-100 text-stone-800 border border-stone-200 px-3 py-1 rounded-xl text-xs font-semibold">
                  👥 {activeCategory.occasions.map(o => t.occasions[o]).join(' • ')}
                </span>
              </div>

              {/* Sub-types */}
              <div>
                <h4 className="text-xs font-black uppercase tracking-wider text-stone-500 mb-3 flex items-center gap-1.5">
                  <Compass className="w-4 h-4 text-orange-500" />
                  <span>{t.subTypesTitle}</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeCategory.subTypes.map((sub, i) => (
                    <div key={i} className="bg-stone-50 border border-stone-200/80 rounded-2xl p-3">
                      <div className="font-bold text-xs text-stone-900">{sub.name}</div>
                      <div className="text-[11px] text-stone-500 mt-1 leading-relaxed">{sub.desc}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* All Must-Try dishes */}
              <div>
                <h4 className="text-xs font-black uppercase tracking-wider text-stone-500 mb-3 flex items-center gap-1.5">
                  <Flame className="w-4 h-4 text-orange-500" />
                  <span>{t.allMustTryTitle}</span>
                </h4>
                <div className="space-y-2">
                  {activeCategory.mustTryDishes.map((dish, i) => (
                    <div 
                      key={i} 
                      className={`p-3 rounded-2xl border transition-all ${
                        dish.highlight 
                          ? 'bg-orange-50/70 border-orange-200 text-orange-950' 
                          : 'bg-white border-stone-200/70 text-stone-800'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold">{dish.name}</span>
                        {dish.highlight && (
                          <span className="bg-orange-500 text-white text-[10px] font-black px-2 py-0.5 rounded-full uppercase">
                            Must Try
                          </span>
                        )}
                      </div>
                      <p className="text-[11px] text-stone-600 mt-1">{dish.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Insider Tips */}
              <div className="bg-emerald-50/70 border border-emerald-200 rounded-2xl p-4">
                <h4 className="text-xs font-bold text-emerald-900 mb-2 flex items-center gap-1.5">
                  <Lightbulb className="w-4 h-4 text-emerald-600" />
                  <span>{t.tipsTitle}</span>
                </h4>
                <ul className="space-y-1.5 text-xs text-emerald-800/90 list-disc list-inside">
                  {activeCategory.insiderTips.map((tip, i) => (
                    <li key={i} className="leading-relaxed">{tip}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Modal Bottom Actions */}
            <div className="p-4 bg-stone-50 border-t border-stone-200 flex items-center justify-end gap-3">
              <button
                onClick={() => setActiveCategory(null)}
                className="px-4 py-2.5 rounded-2xl text-xs font-bold text-stone-600 hover:bg-stone-200 transition-colors"
              >
                Đóng
              </button>
              <button
                onClick={() => openGoogleMaps(activeCategory.mapsQuery)}
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-5 py-2.5 rounded-2xl text-xs transition-all shadow-md flex items-center gap-2"
              >
                <MapPin className="w-4 h-4" />
                <span>Mở Google Maps tìm quán</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-75" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Gacha Winner Modal */}
      {isGachaModalOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => !isRolling && setIsGachaModalOpen(false)}
        >
          <div 
            className="bg-stone-900 text-white rounded-3xl max-w-md w-full p-6 shadow-2xl border border-stone-700 relative text-center flex flex-col items-center animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {!isRolling && (
              <button
                onClick={() => setIsGachaModalOpen(false)}
                className="absolute top-4 right-4 text-stone-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            )}

            <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-orange-500 to-amber-400 flex items-center justify-center shadow-lg shadow-orange-500/30 mb-4">
              <Dices className={`w-7 h-7 text-white ${isRolling ? 'animate-spin' : ''}`} />
            </div>

            <h3 className="text-lg font-black tracking-tight mb-1">
              {isRolling ? t.spinning : t.winnerTitle}
            </h3>

            {rolledWinner && (
              <div className="my-5 w-full bg-stone-800/90 border border-stone-700 rounded-2xl p-4 flex flex-col items-center space-y-3">
                <span className="text-4xl">{rolledWinner.icon}</span>
                <h4 className="text-xl font-black text-amber-400">
                  {language === 'vi' ? rolledWinner.name : rolledWinner.nameEn}
                </h4>
                <p className="text-xs text-stone-300">
                  {language === 'vi' ? rolledWinner.tagline : rolledWinner.taglineEn}
                </p>

                <div className="bg-stone-900/90 border border-stone-800 rounded-xl p-3 w-full text-left">
                  <div className="text-[11px] font-bold text-orange-400 uppercase tracking-wider mb-1">
                    Gợi ý món ruột:
                  </div>
                  <div className="text-xs text-stone-200">
                    {rolledWinner.mustTryDishes.slice(0, 2).map(d => d.name).join(' • ')}
                  </div>
                </div>
              </div>
            )}

            <div className="w-full flex flex-col gap-2 mt-2">
              {!isRolling && rolledWinner && (
                <>
                  <button
                    onClick={() => {
                      setIsGachaModalOpen(false);
                      openGoogleMaps(rolledWinner.mapsQuery);
                    }}
                    className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-extrabold py-3 rounded-2xl text-xs sm:text-sm transition-all shadow-lg flex items-center justify-center gap-2"
                  >
                    <MapPin className="w-4 h-4" />
                    <span>{t.lockDeal}</span>
                  </button>

                  <button
                    onClick={handleStartGacha}
                    className="w-full bg-stone-800 hover:bg-stone-700 text-stone-300 font-bold py-2.5 rounded-2xl text-xs transition-colors"
                  >
                    {t.spinAgain}
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
