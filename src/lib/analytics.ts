type EventParams = Record<string, string | undefined>

export function trackEvent(name: string, params?: EventParams): void {
  if (typeof window !== 'undefined' && typeof (window as any).gtag === 'function') {
    ;(window as any).gtag('event', name, {
      ...params,
      timestamp: new Date().toISOString(),
    })
  }
  console.log('[mibebi:track]', name, params)
}
