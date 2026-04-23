import { ArrowRight, Clock3, Gift, ScanSearch, Sparkles, Star } from 'lucide-react'
import { trackEvent } from '../lib/analytics'

type Props = {
  onCtaClick: () => void
}

const trustPoints = [
  'Tanpa ketik menu satu per satu',
  'Tampilan lebih profesional dalam hitungan menit',
  'Lebih mudah dibagikan ke calon pelanggan',
]

const menuCards = [
  { title: 'Nasi Goreng Spesial', price: 'Rp 15.000', tone: 'orange' },
  { title: 'Mie Ayam Bakso', price: 'Rp 13.000', tone: 'mint' },
  { title: 'Es Teh Manis', price: 'Rp 5.000', tone: 'cream' },
] as const

export default function HeroComparison({ onCtaClick }: Props) {
  function handleCtaClick() {
    trackEvent('hero_cta_click')
    onCtaClick()
  }

  return (
    <section className="px-4 py-8 sm:px-6 sm:py-10 lg:py-14">
      <div className="mx-auto max-w-screen-xl">
        <div className="rise-in">
          <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-[#E7DDD1] bg-white/85 px-3 py-2 shadow-[0_10px_30px_rgba(30,42,38,0.06)]">
            <img
              src="/LogoMibebiTransparan.png"
              alt="Logo Mibebi"
              className="h-10 w-auto sm:h-12"
            />
            <div className="pr-1 text-left">
              <p className="m-0 text-sm font-bold text-[#1E2A26]">Mibebi</p>
              <p className="m-0 text-[11px] uppercase tracking-[0.18em] text-[#5D6B66]">
                Website resto + poles AI
              </p>
            </div>
          </div>

          <div className="mb-5 flex flex-wrap gap-2">
            {[
              { Icon: Sparkles, label: 'AI Powered' },
              { Icon: Gift, label: 'Gratis Aktivasi' },
              { Icon: Clock3, label: 'Siap dalam 5 Menit' },
            ].map(({ Icon, label }) => (
              <span
                key={label}
                className="inline-flex items-center gap-2 rounded-full border border-[#CFEBDD] bg-white/80 px-3 py-1.5 text-xs font-semibold text-[#1F7A5A] shadow-[0_8px_24px_rgba(31,122,90,0.08)]"
              >
                <Icon size={13} aria-hidden="true" />
                {label}
              </span>
            ))}
          </div>

          <h1 className="display-title max-w-4xl text-[2.45rem] leading-[0.98] font-bold tracking-[-0.03em] text-[#1E2A26] sm:text-[3.6rem]">
            Ubah foto menu yang
            <span className="text-[#C96A5A]"> ribet</span> jadi website pesan antar yang
            <span className="text-[#1F7A5A]"> siap jualan</span>.
          </h1>

          <p className="mt-5 max-w-3xl text-base leading-8 text-[#5D6B66] sm:text-lg">
            Mibebi membantu owner resto naik kelas tanpa repot entry menu manual. Foto menu lama
            Anda dipoles AI, ditata ulang, lalu disiapkan jadi halaman digital yang terlihat lebih
            bersih, lebih meyakinkan, dan lebih gampang dibagikan ke pelanggan.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
            <button
              type="button"
              onClick={handleCtaClick}
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#1F7A5A] px-6 py-4 text-base font-semibold text-white shadow-[0_18px_40px_rgba(31,122,90,0.28)] transition hover:-translate-y-0.5 hover:bg-[#176449] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1F7A5A] focus-visible:ring-offset-2"
            >
              Amankan Slot Website Gratis
              <ArrowRight size={18} aria-hidden="true" />
            </button>
            <div className="rounded-2xl border border-[#E7DDD1] bg-white/80 px-4 py-3 text-left text-sm text-[#5D6B66] shadow-[0_12px_30px_rgba(30,42,38,0.06)]">
              <p className="m-0 font-semibold text-[#1E2A26]">Gratis untuk aktivasi awal</p>
              <p className="m-0 mt-1 text-xs">
                Cukup isi data singkat, lalu tim kami bantu proses aktivasinya.
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {[
              ['5 menit', 'untuk mulai tampil lebih profesional'],
              ['Tanpa ribet', 'tidak perlu entry menu satu per satu'],
              ['20 slot', 'aktivasi gratis yang tersedia hari ini'],
            ].map(([value, label]) => (
              <div
                key={value}
                className="rounded-[24px] border border-[#E7DDD1] bg-white/85 px-4 py-4 shadow-[0_16px_40px_rgba(30,42,38,0.05)] backdrop-blur-sm"
              >
                <p className="m-0 text-2xl font-bold text-[#1E2A26]">{value}</p>
                <p className="m-0 mt-1 text-sm leading-6 text-[#5D6B66]">{label}</p>
              </div>
            ))}
          </div>

          <ul className="mt-8 grid gap-3 text-sm text-[#41514C] sm:grid-cols-3">
            {trustPoints.map((item) => (
              <li key={item} className="flex items-start gap-2 rounded-2xl bg-[#FFFDFC]/80 px-3 py-3">
                <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#D7F5EA] text-[#1F7A5A]">
                  <Star size={12} fill="currentColor" aria-hidden="true" />
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rise-in relative mt-10" style={{ animationDelay: '120ms' }}>
          <div className="absolute inset-x-8 top-8 h-24 rounded-full bg-[radial-gradient(circle,rgba(31,122,90,0.22),transparent_72%)] blur-2xl" />
          <div className="rounded-[36px] border border-[#E7DDD1] bg-[linear-gradient(180deg,rgba(255,253,252,0.92),rgba(255,248,238,0.92))] p-4 shadow-[0_24px_80px_rgba(30,42,38,0.08)] sm:p-6 lg:p-8">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <p className="m-0 text-xs font-bold uppercase tracking-[0.22em] text-[#1F7A5A]">
                  Before vs After
                </p>
                <h2 className="mt-2 max-w-2xl text-xl font-semibold text-[#1E2A26] sm:text-2xl lg:text-[2rem]">
                  Dari daftar menu seadanya ke etalase digital yang enak dilihat.
                </h2>
              </div>
              <div className="rounded-full bg-[#FFF3E6] px-3 py-1 text-xs font-semibold text-[#C96A5A]">
                Owner-friendly
              </div>
            </div>

            <div className="mt-6 grid gap-4 lg:grid-cols-[0.9fr_0.14fr_1.18fr] lg:items-center">
              <div className="rounded-[26px] border border-[#D8C39A] bg-[linear-gradient(135deg,#F6E8C8_0%,#EFD59B_100%)] p-4 shadow-[0_18px_44px_rgba(103,72,22,0.18)] sm:p-5">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="m-0 text-[11px] font-bold uppercase tracking-[0.24em] text-[#7A5521]">
                      Dulu
                    </p>
                    <h3 className="mt-1 text-lg font-semibold text-[#593B1A]">Ribet & Berantakan</h3>
                  </div>
                  <div className="rounded-full bg-white/55 px-2 py-1 text-[10px] font-semibold text-[#7A5521]">
                    Manual
                  </div>
                </div>

                <div className="mt-4 space-y-3 rounded-[20px] border border-[#C9A46E] bg-[#F9EED5] p-4">
                  <div className="flex items-center justify-between border-b border-dashed border-[#C9A46E] pb-2 text-[11px] font-semibold text-[#6A4921]">
                    <span>Buku menu fotokopi</span>
                    <span>update manual</span>
                  </div>
                  {[
                    ['Nasi Goreng', '15rb'],
                    ['Mie Ayam', '13rb'],
                    ['Es Teh', '5rb'],
                    ['Soto Ayam', '18rb'],
                  ].map(([name, price], index) => (
                    <div
                      key={name}
                      className={[
                        'flex items-center justify-between text-sm text-[#6A4921]',
                        index === 3 ? 'opacity-50 line-through' : '',
                      ].join(' ')}
                    >
                      <span>{name}</span>
                      <span>{price}</span>
                    </div>
                  ))}
                  <div className="rounded-2xl bg-white/50 px-3 py-2 text-[11px] leading-5 text-[#7A5521]">
                    Foto makanan tidak seragam, menu sering dicoret, dan susah dibagikan.
                  </div>
                </div>
              </div>

              <div className="flex justify-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#1F7A5A] text-white shadow-[0_16px_40px_rgba(31,122,90,0.28)]">
                  <ScanSearch size={22} aria-hidden="true" />
                </div>
              </div>

              <div className="relative">
                <div className="absolute -right-2 -top-3 rounded-full bg-[#1F7A5A] px-3 py-1 text-[11px] font-semibold text-white shadow-[0_12px_28px_rgba(31,122,90,0.2)]">
                  Sekarang: Digital & Profesional
                </div>
                <div className="mx-auto w-[min(100%,360px)] rounded-[32px] bg-[#1E2A26] p-2 shadow-[0_28px_80px_rgba(0,0,0,0.22)] sm:w-[min(100%,420px)]">
                  <div className="overflow-hidden rounded-[26px] bg-[#FFFDFC]">
                    <div className="bg-[linear-gradient(135deg,#1F7A5A,#15523D)] px-4 pb-4 pt-5 text-white sm:px-5">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="m-0 text-sm font-semibold sm:text-base">Warung Bu Sari</p>
                          <p className="m-0 mt-1 text-[11px] text-white/70">
                            Website menu siap dibagikan
                          </p>
                        </div>
                        <div className="rounded-full bg-white/15 px-2 py-1 text-[10px] font-semibold">
                          Delivery
                        </div>
                      </div>
                      <div className="mt-4 rounded-[22px] bg-white/12 px-3 py-3 backdrop-blur-sm">
                        <p className="m-0 text-[11px] uppercase tracking-[0.22em] text-[#D7F5EA]">
                          Tampilan yang lebih menggugah
                        </p>
                        <p className="m-0 mt-1 text-sm leading-6 text-white/85">
                          Menu jadi lebih rapi, mudah discan pelanggan, dan enak dipromosikan.
                        </p>
                      </div>
                    </div>

                    <div className="space-y-3 px-4 py-4 sm:px-5">
                      {menuCards.map((item) => (
                        <div
                          key={item.title}
                          className="flex items-center gap-3 rounded-[20px] border border-[#EFE4D8] bg-[#FFFCFA] p-3 shadow-[0_8px_22px_rgba(30,42,38,0.04)]"
                        >
                          <div
                            className={[
                              'h-12 w-12 rounded-2xl sm:h-14 sm:w-14',
                              item.tone === 'orange'
                                ? 'bg-[linear-gradient(135deg,#FFD2A6,#F5B266)]'
                                : item.tone === 'mint'
                                  ? 'bg-[linear-gradient(135deg,#9BE3C8,#63C7A6)]'
                                  : 'bg-[linear-gradient(135deg,#F4EBDC,#E7DDD1)]',
                            ].join(' ')}
                            aria-hidden="true"
                          />
                          <div className="min-w-0 flex-1">
                            <p className="m-0 truncate text-sm font-semibold text-[#1E2A26] sm:text-base">
                              {item.title}
                            </p>
                            <p className="m-0 mt-1 text-xs leading-5 text-[#5D6B66]">
                              Foto lebih bersih, copy lebih rapi
                            </p>
                          </div>
                          <span className="text-sm font-semibold text-[#1F7A5A] sm:text-base">
                            {item.price}
                          </span>
                        </div>
                      ))}

                      <div className="grid grid-cols-2 gap-3">
                        <div className="rounded-[22px] bg-[#F4FBF8] px-4 py-3">
                          <p className="m-0 text-[11px] uppercase tracking-[0.18em] text-[#1F7A5A]">
                            CTA
                          </p>
                          <p className="m-0 mt-1 text-sm font-semibold text-[#1E2A26]">
                            Pesan Sekarang
                          </p>
                        </div>
                        <div className="rounded-[22px] bg-[#FFF3E6] px-4 py-3">
                          <p className="m-0 text-[11px] uppercase tracking-[0.18em] text-[#C96A5A]">
                            AI Polish
                          </p>
                          <p className="m-0 mt-1 text-sm font-semibold text-[#1E2A26]">
                            Visual lebih meyakinkan
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-4 left-4 rounded-2xl border border-[#E7DDD1] bg-white px-4 py-3 shadow-[0_18px_44px_rgba(30,42,38,0.08)]">
                  <p className="m-0 text-xs font-semibold text-[#1E2A26]">Efek yang ingin terasa</p>
                  <p className="m-0 mt-1 text-xs text-[#5D6B66]">
                    Lebih rapi, lebih enak dibagikan, lebih pantas untuk closing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
