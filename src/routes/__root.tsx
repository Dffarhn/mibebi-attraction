import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'
import { TanStackDevtools } from '@tanstack/react-devtools'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'

import { getCanonicalUrl, getStructuredData, SEO_CONFIG } from '../lib/seo'
import appCss from '../styles.css?url'

const structuredData = JSON.stringify(getStructuredData())

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: SEO_CONFIG.title },
      { name: 'description', content: SEO_CONFIG.description },
      { name: 'keywords', content: SEO_CONFIG.keywords.join(', ') },
      { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
      { name: 'author', content: SEO_CONFIG.siteName },
      { name: 'theme-color', content: SEO_CONFIG.themeColor },
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: SEO_CONFIG.siteName },
      { property: 'og:title', content: SEO_CONFIG.title },
      { property: 'og:description', content: SEO_CONFIG.description },
      { property: 'og:url', content: getCanonicalUrl('/') },
      { property: 'og:locale', content: SEO_CONFIG.locale },
      { property: 'og:image', content: `${SEO_CONFIG.siteUrl}${SEO_CONFIG.ogImage}` },
      { property: 'og:image:alt', content: 'Logo Mibebi dan landing page website resto berbasis AI' },
      { name: 'twitter:card', content: SEO_CONFIG.twitterCard },
      { name: 'twitter:title', content: SEO_CONFIG.title },
      { name: 'twitter:description', content: SEO_CONFIG.description },
      { name: 'twitter:image', content: `${SEO_CONFIG.siteUrl}${SEO_CONFIG.ogImage}` },
    ],
    links: [
      { rel: 'canonical', href: getCanonicalUrl('/') },
      { rel: 'stylesheet', href: appCss },
      { rel: 'icon', type: 'image/png', href: '/LogoMibebiTransparan.png' },
      { rel: 'apple-touch-icon', href: '/LogoMibebiTransparan.png' },
      { rel: 'manifest', href: '/manifest.json' },
      { rel: 'preload', as: 'image', href: '/LogoMibebiTransparan.png' },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <HeadContent />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: structuredData }} />
      </head>
      <body className="font-sans antialiased [overflow-wrap:anywhere]">
        {children}
        {import.meta.env.DEV ? (
          <TanStackDevtools
            config={{ position: 'bottom-right' }}
            plugins={[{ name: 'Tanstack Router', render: <TanStackRouterDevtoolsPanel /> }]}
          />
        ) : null}
        <Scripts />
      </body>
    </html>
  )
}
