import { BadgeCheck, ChefHat, MessageCircleMore, SendHorizonal } from 'lucide-react'

const items = [
  {
    Icon: ChefHat,
    title: 'Cocok untuk bisnis kuliner',
    desc: 'Dibuat untuk warung makan, cafe, dan resto yang ingin tampil lebih rapi tanpa ribet.',
  },
  {
    Icon: SendHorizonal,
    title: 'Cepat mulai dipakai',
    desc: 'Menu lebih mudah dibagikan ke pelanggan lewat WhatsApp, media sosial, atau link langsung.',
  },
  {
    Icon: MessageCircleMore,
    title: 'Lebih enak untuk promosi',
    desc: 'Tampilan yang rapi membuat calon pelanggan lebih nyaman melihat menu dan memesan.',
  },
  {
    Icon: BadgeCheck,
    title: 'Terlihat lebih profesional',
    desc: 'Kesan pertama resto Anda naik kelas tanpa perlu mulai dari sistem yang rumit.',
  },
]

export default function ProofStrip() {
  return (
    <section className="px-4 py-4 sm:px-6 sm:py-6">
      <div className="mx-auto max-w-screen-xl">
        <div className="grid gap-3 rounded-[30px] border border-[#E7DDD1] bg-white/75 p-4 shadow-[0_18px_50px_rgba(30,42,38,0.05)] backdrop-blur-sm sm:grid-cols-2 sm:p-5 xl:grid-cols-4">
          {items.map(({ Icon, title, desc }) => (
            <article key={title} className="rounded-[24px] bg-[#FFFCFA] px-4 py-4">
              <div className="mb-3 inline-flex rounded-2xl bg-[#F4FBF8] p-2.5">
                <Icon size={18} className="text-[#1F7A5A]" aria-hidden="true" />
              </div>
              <h3 className="m-0 text-sm font-bold text-[#1E2A26]">{title}</h3>
              <p className="m-0 mt-2 text-sm leading-6 text-[#5D6B66]">{desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
