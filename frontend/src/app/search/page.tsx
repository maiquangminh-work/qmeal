'use client';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState, Suspense } from 'react';
import { useStore } from '@/store/useStore';
import RecipeCard from '@/components/ui/RecipeCard';
import Link from 'next/link';

function SearchContent() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';
  const { language } = useStore();

  const [results, setResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const t = {
    vi: {
      title: 'Kết quả tìm kiếm cho',
      found: 'món ăn phù hợp',
      loading: 'Đang tìm kiếm món ngon...',
      noResultsTitle: 'Không tìm thấy món ăn nào!',
      noResultsDesc: 'Hãy thử tìm kiếm với từ khóa khác như "chicken", "beef", "phở", "soup"...',
      exploreBtn: 'Khám phá trang chủ',
      backBtn: '← Quay lại'
    },
    en: {
      title: 'Search results for',
      found: 'matching recipes',
      loading: 'Searching delicious recipes...',
      noResultsTitle: 'No recipes found!',
      noResultsDesc: 'Try searching with another keyword like "chicken", "beef", "pho", "soup"...',
      exploreBtn: 'Explore Home',
      backBtn: '← Go back'
    }
  }[language];

  useEffect(() => {
    if (!query) {
      setResults([]);
      setLoading(false);
      return;
    }

    setLoading(true);
    fetch(`/api/search?q=${encodeURIComponent(query)}&lang=${language}`)
      .then(res => res.json())
      .then(json => {
        if (json.success) {
          setResults(json.data || []);
        } else {
          setResults([]);
        }
        setLoading(false);
      })
      .catch(() => {
        setResults([]);
        setLoading(false);
      });
  }, [query, language]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-10 min-h-[70vh]">
      {/* Header */}
      <div className="mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-200 pb-6">
        <div>
          <h1 className="text-3xl font-extrabold text-stone-900 tracking-tight">
            {t.title} <span className="text-orange-500">"{query}"</span>
          </h1>
          {!loading && (
            <p className="text-stone-500 mt-1 text-sm">
              {results.length} {t.found}
            </p>
          )}
        </div>
        <Link 
          href="/" 
          className="text-stone-500 hover:text-orange-500 font-bold text-sm transition-colors self-start sm:self-auto"
        >
          {t.backBtn}
        </Link>
      </div>

      {/* Loading state */}
      {loading && (
        <div className="flex flex-col items-center justify-center py-20">
          <div className="w-10 h-10 border-4 border-orange-500 border-t-transparent rounded-full animate-spin mb-4"></div>
          <p className="text-stone-500 font-medium">{t.loading}</p>
        </div>
      )}

      {/* Results grid */}
      {!loading && results.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {results.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      )}

      {/* Empty state */}
      {!loading && results.length === 0 && (
        <div className="text-center py-20 bg-white rounded-3xl border border-stone-100 shadow-sm max-w-2xl mx-auto p-8">
          <div className="text-6xl mb-4">🔍</div>
          <h2 className="text-2xl font-bold text-stone-900 mb-2">{t.noResultsTitle}</h2>
          <p className="text-stone-500 mb-8 max-w-md mx-auto">{t.noResultsDesc}</p>
          <Link 
            href="/"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-3.5 px-8 rounded-full shadow-lg shadow-orange-500/30 transition-all hover:scale-105"
          >
            {t.exploreBtn}
          </Link>
        </div>
      )}
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={
      <div className="flex items-center justify-center py-24">
        <div className="w-8 h-8 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    }>
      <SearchContent />
    </Suspense>
  );
}
