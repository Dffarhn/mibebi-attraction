import { MessageCircleMore } from 'lucide-react'

type Props = {
  onClick: () => void
}

export default function StickyLeadCTA({ onClick }: Props) {
  return (
    <div className="fixed bottom-5 right-4 z-40 sm:bottom-6 sm:right-6">
      <button
        type="button"
        onClick={onClick}
        aria-label="Amankan slot website gratis"
        className="group flex h-[60px] items-center gap-3 rounded-full bg-[#1F7A5A] px-5 text-sm font-semibold text-white shadow-[0_20px_48px_rgba(31,122,90,0.32)] transition hover:-translate-y-0.5 hover:bg-[#176449] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1F7A5A] focus-visible:ring-offset-2 sm:h-16 sm:px-6 sm:text-base"
      >
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/16">
          <MessageCircleMore size={18} aria-hidden="true" />
        </span>
        <span className="hidden sm:inline">Amankan Slot Gratis</span>
        <span className="sm:hidden">Slot Gratis</span>
      </button>
    </div>
  )
}
