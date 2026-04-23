import { Zap } from 'lucide-react'
import { CONFIG } from '../lib/config'

export default function ScarcityBar() {
  return (
    <div
      role="banner"
      aria-label="Penawaran terbatas"
      className="fixed left-0 right-0 top-0 z-50 flex min-h-[44px] items-center justify-center gap-2 bg-[#F58A2C] px-4 py-2 text-sm font-semibold text-white"
    >
      <Zap size={14} aria-hidden="true" className="flex-shrink-0 fill-white" />
      <span>Sisa Slot Aktivasi Gratis Hari Ini: {CONFIG.slotCount} Resto</span>
    </div>
  )
}
