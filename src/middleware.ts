import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const response = NextResponse.next();
  
  // Generate unique deployment ID for cache busting
  const deploymentId = process.env.VERCEL_DEPLOYMENT_ID || `local-${Date.now()}`;
  const buildId = process.env.VERCEL_BUILD_ID || `build-${Date.now()}`;
  
  // Add deployment tracking headers
  response.headers.set('X-Deployment-ID', deploymentId);
  response.headers.set('X-Build-ID', buildId);
  response.headers.set('X-Deployment-URL', process.env.VERCEL_DEPLOYMENT_URL || 'localhost');
  response.headers.set('X-Cache-Timestamp', new Date().toISOString());
  
  // Dynamic cache control based on route
  const pathname = request.nextUrl.pathname;
  
  if (pathname.startsWith('/_next/static/')) {
    // Static assets - long cache with immutable
    response.headers.set('Cache-Control', 'public, max-age=31536000, immutable');
  } else if (pathname.match(/\.(ico|png|jpg|jpeg|gif|svg|webp|avif)$/)) {
    // Images - medium cache
    response.headers.set('Cache-Control', 'public, max-age=86400, stale-while-revalidate=3600');
  } else if (pathname === '/' || pathname.startsWith('/api/')) {
    // Main pages and API routes - no cache with revalidation
    response.headers.set('Cache-Control', 'public, max-age=0, must-revalidate, stale-while-revalidate=60');
  } else {
    // Other routes - short cache
    response.headers.set('Cache-Control', 'public, max-age=300, stale-while-revalidate=600');
  }
  
  // Security headers
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-XSS-Protection', '1; mode=block');
  response.headers.set('Referrer-Policy', 'origin-when-cross-origin');
  
  // CSP for enhanced security
  response.headers.set(
    'Content-Security-Policy',
    "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline' https://vercel.live; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self' https://vitals.vercel-insights.com;"
  );
  
  // Add cache-busting query parameter for development
  if (process.env.NODE_ENV === 'development') {
    const url = request.nextUrl.clone();
    if (!url.searchParams.has('_cb')) {
      url.searchParams.set('_cb', Date.now().toString());
      return NextResponse.redirect(url);
    }
  }
  
  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};