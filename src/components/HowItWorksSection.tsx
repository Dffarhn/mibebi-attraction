import { ArrowRight, Globe, QrCode, Sparkles } from 'lucide-react'

type Props = {
  onCtaClick: () => void
}

const items = [
  {
    number: '01',
    title: 'Menu Anda terlihat lebih meyakinkan',
    desc: 'Foto menu yang tadinya seadanya dipoles jadi tampilan yang lebih rapi, bersih, dan lebih enak dilihat pelanggan.',
    Icon: Sparkles,
  },
  {
    number: '02',
    title: 'Resto punya etalase digital sendiri',
    desc: 'Pelanggan bisa melihat menu lewat link atau website sederhana yang jauh lebih profesional dibanding kirim foto satu per satu.',
    Icon: Globe,
  },
  {
    number: '03',
    title: 'Lebih enak dibagikan saat promosi',
    desc: 'Cocok untuk dibagikan ke WhatsApp, Instagram, atau dipasang di QR meja agar pelanggan langsung lihat menu dengan cepat.',
    Icon: QrCode,
  },
] as const

export default function HowItWorksSection({ onCtaClick }: Props) {
  return (
    <section className="px-4 py-12 sm:px-6 sm:py-16">
      <div className="mx-auto max-w-screen-xl">
        <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <div className="rounded-[32px] border border-[#E7DDD1] bg-[linear-gradient(180deg,#FFFDFC_0%,#FFF7EE_100%)] px-6 py-7 shadow-[0_20px_60px_rgba(30,42,38,0.06)] sm:px-7 sm:py-8">
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.24em] text-[#1F7A5A]">
              Kenapa Ini Menarik
            </p>
            <h2 className="display-title text-3xl leading-tight font-bold text-[#1E2A26] sm:text-4xl">
              Bukan cuma bagus dilihat, tapi lebih enak dipakai jualan.
            </h2>
            <p className="mt-4 text-base leading-8 text-[#5D6B66]">
              Owner resto biasanya butuh hasil yang cepat terasa: menu terlihat lebih rapi, lebih
              gampang dibagikan, dan lebih meyakinkan saat dilihat pelanggan. Itu sebabnya Mibebi
              dibuat untuk membantu resto tampil lebih siap jualan tanpa proses yang bikin repot.
            </p>

            <div className="mt-6 rounded-[26px] bg-[#1E2A26] px-5 py-5 text-white shadow-[0_18px_50px_rgba(0,0,0,0.14)]">
              <p className="m-0 text-xs uppercase tracking-[0.22em] text-[#D7F5EA]">
                Yang Harus Terasa
              </p>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-white/82">
                <li>Lebih profesional saat pertama kali dilihat pelanggan.</li>
                <li>Lebih praktis saat dipakai untuk promosi dan share menu.</li>
                <li>Lebih cocok untuk resto yang ingin mulai digital tanpa ribet.</li>
                <li>Lebih meyakinkan untuk mengarahkan calon customer ke pemesanan.</li>
              </ul>
            </div>
          </div>

          <div className="grid gap-4">
            {items.map(({ number, title, desc, Icon }) => (
              <article
                key={number}
                className="rounded-[30px] border border-[#E7DDD1] bg-white px-5 py-5 shadow-[0_18px_44px_rgba(30,42,38,0.05)]"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-[#F4FBF8]">
                    <Icon size={22} className="text-[#1F7A5A]" aria-hidden="true" />
                  </div>
                  <div className="min-w-0">
                    <div className="mb-2 flex flex-wrap items-center gap-3">
                      <span className="rounded-full bg-[#FFF3E6] px-2.5 py-1 text-[11px] font-bold tracking-[0.18em] text-[#C96A5A]">
                        {number}
                      </span>
                      <h3 className="m-0 text-lg font-semibold text-[#1E2A26]">{title}</h3>
                    </div>
                    <p className="m-0 text-sm leading-7 text-[#5D6B66]">{desc}</p>
                  </div>
                </div>
              </article>
            ))}

            <button
              type="button"
              onClick={onCtaClick}
              className="inline-flex items-center justify-center gap-2 rounded-[24px] bg-[#1F7A5A] px-6 py-4 text-base font-semibold text-white shadow-[0_18px_40px_rgba(31,122,90,0.25)] transition hover:-translate-y-0.5 hover:bg-[#176449]"
            >
              Lanjut Klaim Slot Gratis
              <ArrowRight size={18} aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
