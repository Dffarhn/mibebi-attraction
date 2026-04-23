import {
  ScanLine,
  Sparkles,
  Globe,
  MessageCircleHeart,
  UtensilsCrossed,
  Bell,
  QrCode,
  BarChart3,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export const CONFIG = {
  whatsappNumber: (import.meta.env.VITE_WHATSAPP_NUMBER as string) || '6281234567890',
  leadEndpointUrl: (import.meta.env.VITE_LEAD_ENDPOINT_URL as string) || '',
  slotCount: 20,
} as const

export type Benefit = {
  id: string
  Icon: LucideIcon
  title: string
  desc: string
}

export const BENEFITS: Benefit[] = [
  {
    id: '1',
    Icon: ScanLine,
    title: 'Scan Menu AI',
    desc: 'Membantu Anda mulai jualan digital tanpa capek ketik menu.',
  },
  {
    id: '2',
    Icon: Sparkles,
    title: 'Percantik Menu AI',
    desc: 'Membantu foto makanan Anda terlihat seperti hasil fotografer profesional.',
  },
  {
    id: '3',
    Icon: Globe,
    title: 'Website Gratis',
    desc: 'Membantu resto Anda punya "pintu masuk" digital yang keren.',
  },
  {
    id: '4',
    Icon: MessageCircleHeart,
    title: 'AI Psychological Message',
    desc: 'Membantu Anda berterima kasih otomatis agar pelanggan balik lagi.',
  },
  {
    id: '5',
    Icon: UtensilsCrossed,
    title: 'Lastbite Integration',
    desc: 'Membantu mengubah potensi makanan sisa menjadi profit.',
  },
  {
    id: '6',
    Icon: Bell,
    title: 'Reminder & Voucher',
    desc: 'Membantu menyapa kembali pelanggan lama yang sudah jarang mampir.',
  },
  {
    id: '7',
    Icon: QrCode,
    title: 'QR Meja',
    desc: 'Membantu tim Anda tetap santai melayani pelanggan saat jam sibuk.',
  },
  {
    id: '8',
    Icon: BarChart3,
    title: 'Laporan Harian',
    desc: 'Membantu Anda pantau bisnis lewat email tanpa perlu rekap manual.',
  },
]

export function buildWhatsAppUrl(nama: string, namaRestoran: string, kota: string): string {
  const msg =
    `Halo Mibebi, saya ${nama} dari ${namaRestoran} di ${kota}. ` +
    `Saya baru saja mendaftar di website dan ingin mengamankan slot aktivasi ` +
    `Website Gratis & Poles AI. Mohon dibantu prosesnya.`
  return `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(msg)}`
}
