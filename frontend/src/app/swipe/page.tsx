'use client';
import { useState, useEffect } from 'react';
import { Link } from 'next-view-transitions';
import { motion, useMotionValue, useTransform, AnimatePresence } from 'framer-motion';
import { useStore } from '@/store/useStore';
import { vietnameseRecipes, MasterRecipe } from '@/data/vietnameseRecipes';
import { Heart, X, ChevronLeft, ChefHat, Flame, Clock } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function SwipePage() {
  const { language, toggleFavorite, isFavorite } = useStore();
  const [cards, setCards] = useState<MasterRecipe[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Shuffle recipes and set state
    const shuffled = [...vietnameseRecipes].sort(() => 0.5 - Math.random());
    setCards(shuffled.slice(0, 20)); // Take 20 for swiping session
    document.title = language === 'vi' ? 'Lướt Món Ăn | QMeal' : 'Swipe Meals | QMeal';
  }, [language]);

  const handleSwipe = (direction: 'left' | 'right', recipe: MasterRecipe) => {
    if (direction === 'right') {
      // Save to favorites
      if (!isFavorite(recipe.id)) {
        toggleFavorite({
          id: recipe.id,
          title: recipe.title[language] || recipe.title.vi,
          image: recipe.image,
          time: recipe.time,
          rating: 4.8,
          tags: recipe.dietaryTags[language] || recipe.dietaryTags.vi
        });
        
        try {
          confetti({
            particleCount: 40,
            spread: 60,
            origin: { x: 0.8, y: 0.8 },
            colors: ['#ea580c', '#f43f5e', '#f59e0b']
          });
        } catch {}
      }
    }
    
    setTimeout(() => {
      setCurrentIndex(prev => prev + 1);
    }, 150);
  };

  return (
    <div className="min-h-screen bg-[#faf9f6] flex flex-col overflow-hidden fixed inset-0">
      {/* Header */}
      <div className="px-4 py-4 flex items-center justify-between z-10 bg-white/50 backdrop-blur-md border-b border-stone-200">
        <Link href="/" className="p-2 rounded-full bg-stone-100 text-stone-600 hover:bg-stone-200 active:scale-95 transition-all">
          <ChevronLeft className="w-6 h-6" />
        </Link>
        <div className="text-center">
          <h1 className="text-lg font-black text-stone-900 tracking-tight">
            {language === 'vi' ? 'Khám Phá' : 'Discovery'}
          </h1>
          <p className="text-[10px] font-bold text-stone-500 uppercase tracking-widest">
            {language === 'vi' ? 'Vuốt để chọn món' : 'Swipe to pick'}
          </p>
        </div>
        <Link href="/favorites" className="relative p-2 rounded-full bg-orange-50 text-orange-600 hover:bg-orange-100 active:scale-95 transition-all">
          <Heart className="w-5 h-5 fill-current" />
        </Link>
      </div>

      {/* Card Stack Area */}
      <div className="flex-1 relative w-full max-w-md mx-auto flex items-center justify-center p-4">
        {currentIndex >= cards.length && cards.length > 0 ? (
          <div className="text-center space-y-4 p-8 bg-white rounded-3xl shadow-xl z-20">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <ChefHat className="w-8 h-8" />
            </div>
            <h2 className="text-2xl font-black text-stone-900">
              {language === 'vi' ? 'Hết món rồi!' : "That's all!"}
            </h2>
            <p className="text-stone-500 text-sm">
              {language === 'vi' 
                ? 'Bạn đã lướt hết danh sách gợi ý. Hãy xem những món bạn đã thích nhé.'
                : 'You have swiped through all suggestions. Check your favorites.'}
            </p>
            <Link href="/favorites" className="block w-full py-3.5 bg-orange-600 text-white font-bold rounded-xl mt-6">
              {language === 'vi' ? 'Xem Món Đã Thích' : 'View Favorites'}
            </Link>
          </div>
        ) : (
          <AnimatePresence>
            {cards.map((recipe, index) => {
              if (index < currentIndex || index > currentIndex + 1) return null;
              const isTop = index === currentIndex;
              return (
                <SwipeCard 
                  key={recipe.id}
                  recipe={recipe}
                  isTop={isTop}
                  onSwipe={(dir) => handleSwipe(dir, recipe)}
                  language={language}
                />
              );
            }).reverse()}
          </AnimatePresence>
        )}
      </div>

      {/* Static Footer Hint */}
      <div className="pb-8 pt-4 px-6 text-center z-10 flex items-center justify-center gap-8">
        <div className="flex flex-col items-center gap-1.5 opacity-60">
          <div className="w-14 h-14 rounded-full bg-stone-200 text-stone-500 flex items-center justify-center shadow-inner">
            <X className="w-7 h-7 stroke-[3]" />
          </div>
          <span className="text-[10px] font-bold uppercase tracking-widest text-stone-500">
            {language === 'vi' ? 'Bỏ qua (Trái)' : 'Skip (Left)'}
          </span>
        </div>
        <div className="flex flex-col items-center gap-1.5">
          <div className="w-14 h-14 rounded-full bg-orange-100 text-orange-500 flex items-center justify-center shadow-inner">
            <Heart className="w-7 h-7 fill-current" />
          </div>
          <span className="text-[10px] font-bold uppercase tracking-widest text-orange-600">
            {language === 'vi' ? 'Thích (Phải)' : 'Like (Right)'}
          </span>
        </div>
      </div>
    </div>
  );
}

function SwipeCard({ recipe, isTop, onSwipe, language }: any) {
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-200, 200], [-8, 8]);
  const scale = isTop ? 1 : 0.95;
  const yOffset = isTop ? 0 : 20;

  const likeOpacity = useTransform(x, [20, 100], [0, 1]);
  const nopeOpacity = useTransform(x, [-20, -100], [0, 1]);

  const handleDragEnd = (e: any, info: any) => {
    const offset = info.offset.x;
    const velocity = info.velocity.x;

    if (offset > 100 || velocity > 500) {
      onSwipe('right');
    } else if (offset < -100 || velocity < -500) {
      onSwipe('left');
    }
  };

  const getSafeUrl = (url: string) => {
    if (url?.includes('wikimedia.org') || url?.includes('wikipedia.org')) {
      return `/api/image-proxy?url=${encodeURIComponent(url)}`;
    }
    return url;
  };

  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center p-2"
      style={{ x, rotate, zIndex: isTop ? 10 : 0 }}
      initial={{ scale: 0.95, y: 30, opacity: 0 }}
      animate={{ scale, y: yOffset, opacity: 1 }}
      exit={{ x: x.get() > 0 ? 300 : -300, opacity: 0, transition: { duration: 0.2 } }}
      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
      drag={isTop ? "x" : false}
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={0.8}
      onDragEnd={handleDragEnd}
    >
      <div className="w-full h-[65vh] max-h-[600px] bg-white rounded-[32px] overflow-hidden shadow-2xl border border-stone-100 flex flex-col relative touch-none pointer-events-auto cursor-grab active:cursor-grabbing">
        
        <motion.div 
          className="absolute top-10 left-6 z-20 px-4 py-1.5 border-4 border-emerald-500 text-emerald-500 font-black text-3xl uppercase tracking-widest rounded-xl rotate-[-15deg] bg-white/90 backdrop-blur-sm"
          style={{ opacity: likeOpacity }}
        >
          {language === 'vi' ? 'LƯU LẠI' : 'LIKE'}
        </motion.div>
        
        <motion.div 
          className="absolute top-10 right-6 z-20 px-4 py-1.5 border-4 border-rose-500 text-rose-500 font-black text-3xl uppercase tracking-widest rounded-xl rotate-[15deg] bg-white/90 backdrop-blur-sm"
          style={{ opacity: nopeOpacity }}
        >
          {language === 'vi' ? 'BỎ QUA' : 'NOPE'}
        </motion.div>

        <div className="relative flex-1 bg-stone-100 overflow-hidden pointer-events-none">
          <img 
            src={getSafeUrl(recipe.image)} 
            alt={recipe.title[language] || recipe.title.vi}
            className="w-full h-full object-cover"
            draggable={false}
          />
          <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
          
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white pointer-events-none">
            <h2 className="text-3xl font-black mb-2 drop-shadow-md leading-tight">
              {recipe.title[language] || recipe.title.vi}
            </h2>
            <div className="flex flex-wrap items-center gap-3 text-sm font-semibold text-stone-200">
              <span className="flex items-center gap-1.5 bg-black/40 px-3 py-1.5 rounded-xl backdrop-blur-md">
                <Clock className="w-4 h-4 text-white" />
                {recipe.time}
              </span>
              <span className="flex items-center gap-1.5 bg-black/40 px-3 py-1.5 rounded-xl backdrop-blur-md">
                <Flame className="w-4 h-4 text-orange-400" />
                {recipe.calories} kcal
              </span>
            </div>
            
            <div className="flex flex-wrap gap-2 mt-4">
              {(recipe.dietaryTags[language] || recipe.dietaryTags.vi).slice(0, 3).map((tag: string, i: number) => (
                <span key={i} className="text-[11px] font-bold px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white border border-white/30">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
