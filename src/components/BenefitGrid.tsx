import { BENEFITS } from '../lib/config'

export default function BenefitGrid() {
  return (
    <section className="px-4 py-14 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-screen-xl">
        <div className="mb-10 max-w-3xl">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.24em] text-[#1F7A5A]">
            Apa yang Anda Dapatkan
          </p>
          <h2 className="display-title text-3xl leading-tight font-bold text-[#1E2A26] sm:text-4xl">
            Semua dirancang untuk membantu resto jualan lebih rapi.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-8 text-[#5D6B66]">
            Bukan sekadar website. Mibebi membantu menu Anda terlihat lebih menarik, lebih mudah
            dibagikan, dan lebih nyaman dipakai pelanggan saat ingin pesan.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {BENEFITS.map(({ id, Icon, title, desc }, index) => (
            <article
              key={id}
              className="group rise-in relative overflow-hidden rounded-[28px] border border-[#E7DDD1] bg-[linear-gradient(180deg,#FFFDFC_0%,#FFF7EE_100%)] p-5 shadow-[0_18px_50px_rgba(30,42,38,0.06)]"
              style={{ animationDelay: `${index * 70}ms` }}
            >
              <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-[radial-gradient(circle,rgba(99,199,166,0.18),transparent_68%)] transition duration-300 group-hover:scale-125" />

              <div className="relative">
                <div className="mb-4 inline-flex rounded-2xl border border-[#CFEBDD] bg-white px-3 py-3 shadow-[0_12px_32px_rgba(31,122,90,0.08)]">
                  <Icon size={20} className="text-[#1F7A5A]" aria-hidden="true" />
                </div>

                <div className="mb-3 flex items-center justify-between gap-3">
                  <h3 className="text-base font-bold text-[#1E2A26]">{title}</h3>
                  <span className="rounded-full bg-[#F4FBF8] px-2.5 py-1 text-[11px] font-semibold text-[#1F7A5A]">
                    Membantu
                  </span>
                </div>

                <p className="m-0 text-sm leading-7 text-[#5D6B66]">{desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
