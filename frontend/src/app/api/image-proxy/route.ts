import { NextRequest, NextResponse } from 'next/server';

// 1x1 transparent GIF or minimal food SVG fallback
const FALLBACK_SVG = `<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400" viewBox="0 0 600 400" fill="none">
  <rect width="600" height="400" fill="#f5f5f4"/>
  <circle cx="300" cy="180" r="70" fill="#fed7aa"/>
  <circle cx="300" cy="180" r="50" fill="#ea580c" fill-opacity="0.2"/>
  <path d="M260 210 Q300 240 340 210" stroke="#ea580c" stroke-width="6" stroke-linecap="round"/>
  <text x="300" y="290" text-anchor="middle" fill="#78716c" font-family="system-ui, sans-serif" font-size="18" font-weight="600">QMeal • Ẩm Thực Việt Nam</text>
</svg>`;

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const imageUrl = searchParams.get('url');

  if (!imageUrl) {
    return new NextResponse(FALLBACK_SVG, {
      headers: { 'Content-Type': 'image/svg+xml' }
    });
  }

  try {
    const res = await fetch(imageUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
        'Accept': 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
        'Referer': imageUrl.includes('wikipedia.org') || imageUrl.includes('wikimedia.org') 
          ? 'https://vi.wikipedia.org/' 
          : 'https://unsplash.com/'
      },
      next: { revalidate: 86400 } // Cache 24h on server
    });

    if (!res.ok) {
      // Return SVG fallback with 200 so browser never renders an ugly error icon
      return new NextResponse(FALLBACK_SVG, {
        headers: {
          'Content-Type': 'image/svg+xml',
          'Cache-Control': 'public, max-age=3600'
        }
      });
    }

    const contentType = res.headers.get('content-type') || 'image/jpeg';
    const buffer = await res.arrayBuffer();

    return new NextResponse(buffer, {
      status: 200,
      headers: {
        'Content-Type': contentType,
        'Cache-Control': 'public, max-age=604800, stale-while-revalidate=86400',
        'Access-Control-Allow-Origin': '*'
      }
    });
  } catch (error) {
    return new NextResponse(FALLBACK_SVG, {
      headers: {
        'Content-Type': 'image/svg+xml',
        'Cache-Control': 'public, max-age=3600'
      }
    });
  }
}
