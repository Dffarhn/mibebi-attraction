import { CONFIG } from './config'

export type LeadData = {
  nama: string
  namaRestoran: string
  kota: string
}

export async function submitLead(data: LeadData): Promise<void> {
  const payload = {
    timestamp: new Date().toISOString(),
    nama: data.nama,
    nama_restoran: data.namaRestoran,
    kota: data.kota,
    source: typeof window !== 'undefined' ? window.location.href : '',
    referrer: typeof document !== 'undefined' ? document.referrer : '',
    user_agent: typeof navigator !== 'undefined' ? navigator.userAgent : '',
    landing_page: typeof window !== 'undefined' ? window.location.pathname : '/',
  }

  if (!CONFIG.leadEndpointUrl) {
    if (typeof window !== 'undefined') {
      const existing = window.localStorage.getItem('mibebi_leads')
      const leads = existing ? (JSON.parse(existing) as unknown[]) : []
      leads.push({ ...payload, transport: 'local_fallback' })
      window.localStorage.setItem('mibebi_leads', JSON.stringify(leads))
    }

    console.warn(
      '[mibebi:lead] No endpoint configured; lead stored locally for development fallback.',
    )
    return
  }

  const res = await fetch(CONFIG.leadEndpointUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })

  if (!res.ok) {
    throw new Error(`Lead submission failed: HTTP ${res.status}`)
  }
}
