import { NextResponse, type NextRequest } from 'next/server'

const gonePatterns = [
  /^\/(?:blog|category|tag|author)(?:\/|$)/i,
  /^\/(?:feed|comments\/feed)\/?$/i,
  /^\/20(?:1[0-9]|2[0-6])\/(?:0[1-9]|1[0-2])(?:\/|$)/,
  /^\/(?:wp-admin|wp-login\.php|xmlrpc\.php)(?:\/|$)/i,
]

export function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  if (gonePatterns.some((pattern) => pattern.test(pathname))) {
    return new NextResponse('Gone', { status: 410 })
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|icon.png|apple-icon.png|.*\\.(?:png|jpg|jpeg|gif|svg|webp|avif|ico|css|js|map|txt|xml)$).*)',
  ],
}
