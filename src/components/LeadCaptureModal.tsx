import { useEffect, useRef, useState } from 'react'
import { X, Loader2, CheckCircle, AlertCircle, ShieldCheck, MessageCircleMore } from 'lucide-react'
import { submitLead } from '../lib/leads'
import { buildWhatsAppUrl } from '../lib/config'
import { trackEvent } from '../lib/analytics'

type Props = {
  isOpen: boolean
  onClose: () => void
}

type Status = 'idle' | 'submitting' | 'success' | 'error'

type FormFields = {
  nama: string
  namaRestoran: string
  kota: string
}

export default function LeadCaptureModal({ isOpen, onClose }: Props) {
  const modalRef = useRef<HTMLDivElement>(null)
  const [form, setForm] = useState<FormFields>({ nama: '', namaRestoran: '', kota: '' })
  const [errors, setErrors] = useState<Partial<FormFields>>({})
  const [status, setStatus] = useState<Status>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  // Body scroll lock
  useEffect(() => {
    if (!isOpen) return
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  // Focus trap + Escape key
  useEffect(() => {
    if (!isOpen) return

    const focusFirst = () => {
      const el = modalRef.current?.querySelector<HTMLElement>(
        'input:not([disabled]), button:not([disabled])',
      )
      el?.focus()
    }
    const raf = requestAnimationFrame(focusFirst)

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        onClose()
        return
      }
      if (e.key !== 'Tab' || !modalRef.current) return

      const focusable = [
        ...modalRef.current.querySelectorAll<HTMLElement>(
          'button:not([disabled]), input:not([disabled]), [tabindex]:not([tabindex="-1"])',
        ),
      ]
      const first = focusable[0]
      const last = focusable[focusable.length - 1]

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last?.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first?.focus()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => {
      cancelAnimationFrame(raf)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose])

  // Reset form when modal closes
  useEffect(() => {
    if (!isOpen) {
      setForm({ nama: '', namaRestoran: '', kota: '' })
      setErrors({})
      setStatus('idle')
      setErrorMsg('')
    }
  }, [isOpen])

  function validate(): boolean {
    const errs: Partial<FormFields> = {}
    if (!form.nama.trim()) errs.nama = 'Nama wajib diisi'
    if (!form.namaRestoran.trim()) errs.namaRestoran = 'Nama restoran wajib diisi'
    if (!form.kota.trim()) errs.kota = 'Kota wajib diisi'
    setErrors(errs)
    return Object.keys(errs).length === 0
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (status === 'submitting') return
    if (!validate()) return

    const trimmed = {
      nama: form.nama.trim(),
      namaRestoran: form.namaRestoran.trim(),
      kota: form.kota.trim(),
    }

    setStatus('submitting')
    trackEvent('lead_form_submit_attempt', { city: trimmed.kota })

    try {
      await submitLead(trimmed)
      setStatus('success')
      trackEvent('lead_form_submit_success', { city: trimmed.kota })

      setTimeout(() => {
        const url = buildWhatsAppUrl(trimmed.nama, trimmed.namaRestoran, trimmed.kota)
        window.open(url, '_blank', 'noopener,noreferrer')
        trackEvent('whatsapp_redirect')
        onClose()
      }, 1200)
    } catch (err) {
      console.error('[mibebi] Lead submission error:', err)
      setStatus('error')
      setErrorMsg('Gagal menyimpan data. Silakan coba lagi.')
      trackEvent('lead_form_submit_failed')
    }
  }

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center p-0 sm:items-center sm:p-4"
      aria-modal="true"
      role="dialog"
      aria-labelledby="modal-title"
    >
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-[#1E2A26]/50 backdrop-blur-sm"
        onClick={status === 'submitting' ? undefined : onClose}
        aria-hidden="true"
      />

      {/* Dialog */}
      <div
        ref={modalRef}
        className="relative w-full rounded-t-3xl border border-[#E7DDD1] bg-[#FFFDFC] px-5 pt-6 pb-8 shadow-[0_24px_80px_rgba(30,42,38,0.18)] sm:max-w-lg sm:rounded-[32px] sm:px-8 sm:pt-8 sm:pb-10"
      >
        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          disabled={status === 'submitting'}
          className="absolute right-4 top-4 rounded-full p-2 text-[#5D6B66] transition hover:bg-[#E7DDD1] hover:text-[#1E2A26] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1F7A5A]"
          aria-label="Tutup modal"
        >
          <X size={20} aria-hidden="true" />
        </button>

        {/* Handle bar (mobile) */}
        <div className="mx-auto mb-5 h-1 w-10 rounded-full bg-[#E7DDD1] sm:hidden" aria-hidden="true" />

        {status === 'success' ? (
          <SuccessState />
        ) : (
          <>
            <div className="mb-5 rounded-[24px] bg-[linear-gradient(135deg,#F4FBF8_0%,#FFF3E6_100%)] px-4 py-4">
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-[11px] font-semibold text-[#1F7A5A] shadow-[0_8px_20px_rgba(31,122,90,0.08)]">
                  <ShieldCheck size={12} aria-hidden="true" />
                  Data singkat saja
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-[11px] font-semibold text-[#C96A5A] shadow-[0_8px_20px_rgba(201,106,90,0.08)]">
                  <MessageCircleMore size={12} aria-hidden="true" />
                  Langsung dibantu tim Mibebi
                </span>
              </div>

              <p className="mt-4 mb-1 text-xs font-bold uppercase tracking-widest text-[#1F7A5A]">
                Slot Terbatas
              </p>
              <h2 id="modal-title" className="display-title mb-2 text-2xl font-bold text-[#1E2A26]">
                Klaim Slot Website Gratis
              </h2>
              <p className="text-sm leading-7 text-[#5D6B66]">
                Isi data singkat ini agar tim Mibebi bisa langsung bantu aktivasi website gratis
                untuk resto Anda.
              </p>
            </div>

            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              <FormField
                id="nama"
                label="Nama Anda"
                type="text"
                placeholder="Contoh: Budi Santoso"
                value={form.nama}
                error={errors.nama}
                disabled={status === 'submitting'}
                onChange={(v) =>
                  setForm((f) => ({ ...f, nama: v }))
                }
                onFocus={() => {
                  if (errors.nama) setErrors((prev) => ({ ...prev, nama: undefined }))
                }}
              />
              <FormField
                id="namaRestoran"
                label="Nama Restoran"
                type="text"
                placeholder="Contoh: Warung Bu Sari"
                value={form.namaRestoran}
                error={errors.namaRestoran}
                disabled={status === 'submitting'}
                onChange={(v) =>
                  setForm((f) => ({ ...f, namaRestoran: v }))
                }
                onFocus={() => {
                  if (errors.namaRestoran) {
                    setErrors((prev) => ({ ...prev, namaRestoran: undefined }))
                  }
                }}
              />
              <FormField
                id="kota"
                label="Kota"
                type="text"
                placeholder="Contoh: Surabaya"
                value={form.kota}
                error={errors.kota}
                disabled={status === 'submitting'}
                onChange={(v) =>
                  setForm((f) => ({ ...f, kota: v }))
                }
                onFocus={() => {
                  if (errors.kota) setErrors((prev) => ({ ...prev, kota: undefined }))
                }}
              />

              <div className="rounded-[20px] border border-[#E7DDD1] bg-[#FFFCFA] px-4 py-3 text-xs leading-6 text-[#5D6B66]">
                Setelah klik tombol, Anda akan langsung diarahkan untuk ngobrol dengan tim Mibebi
                lewat WhatsApp.
              </div>

              {status === 'error' && (
                <div className="flex items-start gap-2 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                  <AlertCircle size={16} className="mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span>{errorMsg}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="mt-2 flex w-full items-center justify-center gap-2 rounded-2xl bg-[#1F7A5A] py-4 text-base font-semibold text-white shadow-[0_18px_40px_rgba(31,122,90,0.24)] transition hover:bg-[#176449] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1F7A5A] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {status === 'submitting' ? (
                  <>
                    <Loader2 size={18} className="animate-spin" aria-hidden="true" />
                    Menyimpan...
                  </>
                ) : (
                  'Klaim Slot & Hubungi Admin via WA'
                )}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  )
}

type FormFieldProps = {
  id: string
  label: string
  type: string
  placeholder: string
  value: string
  error?: string
  disabled: boolean
  onChange: (value: string) => void
  onFocus: () => void
}

function FormField({
  id,
  label,
  type,
  placeholder,
  value,
  error,
  disabled,
  onChange,
  onFocus,
}: FormFieldProps) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-semibold text-[#1E2A26]">
        {label}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        disabled={disabled}
        autoComplete="off"
        onChange={(e) => onChange(e.target.value)}
        onFocus={onFocus}
        aria-describedby={error ? `${id}-error` : undefined}
        aria-invalid={!!error}
        className={[
          'w-full rounded-2xl border px-4 py-3.5 text-sm text-[#1E2A26] outline-none transition placeholder:text-[#5D6B66]/60',
          'focus:border-[#1F7A5A] focus:ring-2 focus:ring-[#1F7A5A]/20',
          'disabled:cursor-not-allowed disabled:opacity-60',
          error
            ? 'border-red-400 bg-red-50 focus:border-red-500 focus:ring-red-200'
            : 'border-[#E7DDD1] bg-white',
        ]
          .filter(Boolean)
          .join(' ')}
      />
      {error && (
        <p id={`${id}-error`} role="alert" className="mt-1 text-xs text-red-600">
          {error}
        </p>
      )}
    </div>
  )
}

function SuccessState() {
  return (
    <div className="flex flex-col items-center py-4 text-center">
      <div className="mb-4 flex h-[72px] w-[72px] items-center justify-center rounded-full bg-[#1F7A5A]/10">
        <CheckCircle size={36} className="text-[#1F7A5A]" aria-hidden="true" />
      </div>
      <h2 className="display-title mb-2 text-2xl font-bold text-[#1E2A26]">
        Slot Berhasil Diklaim!
      </h2>
      <p className="max-w-sm text-sm leading-7 text-[#5D6B66]">
        Mengalihkan ke WhatsApp admin...
        <br />
        Anda akan segera dihubungi untuk proses aktivasi.
      </p>
    </div>
  )
}
