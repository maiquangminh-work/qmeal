export default function Footer({ language }: { language: 'vi' | 'en' }) {
  const t = {
    vi: {
      about: 'Về QMeal',
      desc: 'Nền tảng hướng dẫn nấu ăn và tìm kiếm quán ăn ẩm thực thông minh, kết hợp bản đồ và dinh dưỡng.',
      features: 'Tính năng',
      legal: 'Pháp lý',
      rights: 'Bản quyền thuộc về QMeal. Mọi quyền được bảo lưu.'
    },
    en: {
      about: 'About QMeal',
      desc: 'A smart recipe guide and restaurant finder platform, featuring integrated maps and nutrition facts.',
      features: 'Features',
      legal: 'Legal',
      rights: 'Copyright QMeal. All rights reserved.'
    }
  }[language];

  return (
    <footer className="bg-white border-t border-stone-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg overflow-hidden">
                <img src="/logo.jpg" alt="Logo" className="w-full h-full object-cover" />
              </div>
              <span className="text-2xl font-black text-orange-600 tracking-tighter">QMeal</span>
            </div>
            <p className="text-stone-500 max-w-sm">{t.desc}</p>
          </div>
          
          <div>
            <h4 className="font-bold text-stone-900 mb-4">{t.features}</h4>
            <ul className="space-y-2 text-stone-500">
              <li className="hover:text-orange-500 cursor-pointer transition-colors">Gacha</li>
              <li className="hover:text-orange-500 cursor-pointer transition-colors">Smart Fridge</li>
              <li className="hover:text-orange-500 cursor-pointer transition-colors">Hands-free Cook</li>
              <li className="hover:text-orange-500 cursor-pointer transition-colors">Maps</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-stone-900 mb-4">{t.legal}</h4>
            <ul className="space-y-2 text-stone-500">
              <li className="hover:text-orange-500 cursor-pointer transition-colors">Terms of Service</li>
              <li className="hover:text-orange-500 cursor-pointer transition-colors">Privacy Policy</li>
              <li className="hover:text-orange-500 cursor-pointer transition-colors">Cookie Policy</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-stone-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-stone-400 text-sm">© 2026 {t.rights}</p>
        </div>
      </div>
    </footer>
  );
}