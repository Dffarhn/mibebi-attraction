export const SEO_CONFIG = {
  siteName: 'Mibebi',
  siteUrl: (import.meta.env.VITE_SITE_URL as string) || 'https://mibebi.com',
  title: 'Mibebi - Website Resto dalam 5 Menit, Gratis!',
  description:
    'Ubah foto menu jadi website pesan antar profesional dalam 5 menit. Gratis, mudah, dan dibantu AI untuk owner resto, warung makan, dan cafe.',
  keywords: [
    'website resto',
    'landing page resto',
    'menu digital restoran',
    'website pesan antar',
    'scan menu AI',
    'AI untuk restoran',
    'digitalisasi restoran',
    'website restoran gratis',
    'QR menu restoran',
    'Mibebi',
  ],
  ogImage: '/LogoMibebiTransparan.png',
  locale: 'id_ID',
  twitterCard: 'summary_large_image',
  themeColor: '#FFF8EE',
}

export function getCanonicalUrl(pathname = '/') {
  const path = pathname === '/' ? '' : pathname
  return `${SEO_CONFIG.siteUrl}${path}`
}

export function getStructuredData() {
  const websiteUrl = getCanonicalUrl('/')

  return [
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: SEO_CONFIG.siteName,
      url: websiteUrl,
      logo: `${SEO_CONFIG.siteUrl}${SEO_CONFIG.ogImage}`,
      description: SEO_CONFIG.description,
      sameAs: [],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: SEO_CONFIG.siteName,
      url: websiteUrl,
      description: SEO_CONFIG.description,
      inLanguage: 'id-ID',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      serviceType: 'Pembuatan website resto dan digitalisasi menu berbasis AI',
      name: 'Website Gratis & Poles AI Mibebi',
      provider: {
        '@type': 'Organization',
        name: SEO_CONFIG.siteName,
        url: websiteUrl,
      },
      areaServed: {
        '@type': 'Country',
        name: 'Indonesia',
      },
      availableLanguage: ['id-ID'],
      description: SEO_CONFIG.description,
      offers: {
        '@type': 'Offer',
        availability: 'https://schema.org/LimitedAvailability',
        price: '0',
        priceCurrency: 'IDR',
      },
    },
  ]
}
