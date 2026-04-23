import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import BenefitGrid from '../components/BenefitGrid'
import HeroComparison from '../components/HeroComparison'
import HowItWorksSection from '../components/HowItWorksSection'
import LeadCaptureModal from '../components/LeadCaptureModal'
import ProofStrip from '../components/ProofStrip'
import ScarcityBar from '../components/ScarcityBar'
import StickyLeadCTA from '../components/StickyLeadCTA'
import { trackEvent } from '../lib/analytics'

export const Route = createFileRoute('/')({ component: LandingPage })

function LandingPage() {
  const [modalOpen, setModalOpen] = useState(false)

  function openModal(source: string) {
    trackEvent('lead_form_open', { source_cta: source })
    setModalOpen(true)
  }

  return (
    <>
      <ScarcityBar />

      <main className="relative overflow-hidden pb-28 pt-[44px]">
        <div className="pointer-events-none absolute left-[-160px] top-16 h-[360px] w-[360px] rounded-full bg-[radial-gradient(circle,rgba(99,199,166,0.24),transparent_68%)]" />
        <div className="pointer-events-none absolute right-[-180px] top-24 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(245,138,44,0.18),transparent_70%)]" />
        <div className="pointer-events-none absolute inset-x-0 top-[520px] h-px bg-[linear-gradient(90deg,transparent,rgba(31,122,90,0.12),transparent)]" />

        <HeroComparison onCtaClick={() => openModal('hero')} />
        <ProofStrip />
        <BenefitGrid />
        <HowItWorksSection onCtaClick={() => openModal('journey')} />

        <section className="px-4 pb-8 pt-6 sm:px-6 sm:pb-10">
          <div className="mx-auto max-w-screen-xl">
            <div className="overflow-hidden rounded-[32px] border border-[#E7DDD1] bg-[linear-gradient(135deg,#1F7A5A_0%,#15523D_100%)] px-6 py-8 text-white shadow-[0_24px_80px_rgba(31,122,90,0.24)] sm:px-8 sm:py-10 lg:flex lg:items-center lg:justify-between lg:gap-10">
              <div className="max-w-2xl">
                <p className="mb-2 text-xs font-bold uppercase tracking-[0.24em] text-[#D7F5EA]">
                  Slot Terbatas Hari Ini
                </p>
                <h2 className="display-title text-3xl leading-tight sm:text-4xl">
                  Bikin resto Anda terlihat lebih siap jualan,
                  <br className="hidden sm:block" /> lebih rapi, dan lebih profesional.
                </h2>
                <p className="mt-3 max-w-xl text-sm leading-7 text-white/80 sm:text-base">
                  Cocok untuk owner resto yang ingin mulai digital tanpa repot ketik menu satu per
                  satu dari awal.
                </p>
              </div>

              <div className="mt-6 flex flex-col gap-3 lg:mt-0 lg:min-w-[280px]">
                <button
                  type="button"
                  onClick={() => openModal('final_section')}
                  className="rounded-2xl bg-white px-5 py-4 text-base font-semibold text-[#15523D] shadow-[0_12px_32px_rgba(0,0,0,0.12)] transition hover:-translate-y-0.5"
                >
                  Klaim Slot Gratis Sekarang
                </button>
                <p className="text-xs text-white/75">
                  Cocok untuk warung makan, cafe, resto rumahan, dan usaha kuliner yang ingin
                  mulai digital tanpa ribet.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#E7DDD1] bg-[#FFFDFC] px-4 py-8 pb-32 text-[#5D6B66] sm:px-6">
        <div className="mx-auto flex max-w-screen-xl flex-col gap-3 text-sm sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="m-0 font-semibold text-[#1E2A26]">Mibebi</p>
            <p className="m-0 mt-1 max-w-xl text-xs leading-6">
              Membantu resto tampil lebih profesional dengan website gratis dan poles AI untuk
              menu digital.
            </p>
          </div>
          <p className="m-0 text-xs">&copy; {new Date().getFullYear()} Mibebi. Semua hak dilindungi.</p>
        </div>
      </footer>

      <StickyLeadCTA onClick={() => openModal('sticky')} />
      <LeadCaptureModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  )
}
