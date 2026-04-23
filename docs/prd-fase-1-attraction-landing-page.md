# PRD Fase 1

## Mibebi "Attraction" Landing Page & Lead Capture

## 1. Ringkasan

Fase 1 berfokus pada landing page mobile-first untuk memvalidasi minat pemilik restoran terhadap layanan Mibebi, lalu mengubah minat tersebut menjadi lead yang masuk ke Google Sheets atau email sebelum diarahkan ke WhatsApp admin.

Landing page harus menjawab 3 hal dalam waktu singkat:

1. Mibebi mengubah menu resto yang berantakan menjadi tampilan digital yang profesional.
2. Mibebi membantu operasional resto, bukan sekadar membuat website.
3. Pengguna cukup isi data singkat untuk mengamankan slot gratis dan lanjut ngobrol di WhatsApp.

## 2. Tujuan Produk

### Tujuan Utama

- Mengkomunikasikan value proposition Mibebi dalam 5 sampai 10 detik pertama.
- Mendorong user klik CTA utama dan mengisi form lead.
- Menyimpan data lead sebelum redirect ke WhatsApp.

### Tujuan Bisnis

- Mengumpulkan database calon resto: nama PIC, nama resto, dan kota.
- Mengarahkan lead hangat ke admin WhatsApp dengan konteks yang sudah lengkap.
- Menciptakan sense of urgency melalui scarcity bar dan CTA yang konsisten.

### Non-Goal Fase 1

- Belum membangun dashboard admin.
- Belum ada integrasi CRM kompleks.
- Belum ada A/B testing otomatis.
- Belum ada counter slot dinamis real-time.

## 3. Target Pengguna

Pemilik resto, warung makan, cafe kecil, dan pengelola usaha kuliner yang:

- Masih menggunakan foto menu manual, buku menu fisik, atau chat WhatsApp berantakan.
- Belum punya website ordering yang terlihat profesional.
- Ingin mulai digital tanpa proses ribet.
- Responsif terhadap janji hasil cepat, gratis, dan mudah dipakai.

## 4. Nilai Utama yang Harus Terasa

- Cepat: website bisa aktif dalam 5 menit.
- Mudah: tidak perlu ketik manual menu satu per satu.
- Profesional: tampilan menu naik kelas dengan bantuan AI.
- Menguntungkan: membantu penjualan, repeat order, dan efisiensi operasional.

## 5. Struktur Halaman

Urutan halaman direkomendasikan sebagai berikut:

1. Scarcity bar di paling atas.
2. Hero section dengan visual before vs after.
3. Benefit grid 8 poin.
4. Sticky CTA di bawah viewport mobile.
5. Modal form lead.

Halaman dibuat single-page tanpa navigasi yang mengalihkan fokus user.

## 6. Layout & UX Detail

### 6.1 Prinsip Layout

- Mobile-first sebagai baseline utama.
- Konten harus mudah dipindai dengan satu tangan.
- Jarak antar section lega, tetapi tetap padat informasi.
- CTA selalu terlihat tanpa perlu scroll jauh.
- Hindari blok teks panjang. Gunakan headline kuat, subheadline singkat, dan card benefit yang jelas.

### 6.2 Wireframe Mobile

```text
+--------------------------------------------------+
| Scarcity Bar                                     |
| Sisa Slot Aktivasi Gratis Hari Ini: 20 Resto     |
+--------------------------------------------------+
| HERO                                             |
| Headline                                         |
| Subheadline                                      |
| [Before image]  [After mockup]                   |
| Label Dulu / Sekarang                            |
| CTA utama                                        |
+--------------------------------------------------+
| BENEFIT GRID                                     |
| 8 card benefit                                   |
+--------------------------------------------------+
| Sticky Bottom CTA                                |
+--------------------------------------------------+
| Modal Lead Form                                  |
| Nama Anda                                        |
| Nama Restoran                                    |
| Kota                                             |
| Submit                                           |
+--------------------------------------------------+
```

### 6.3 Wireframe Desktop

- Scarcity bar full width.
- Hero memakai komposisi 2 kolom:
  kiri untuk copywriting, kanan untuk visual before vs after.
- Benefit grid 2 kolom di tablet, 4 kolom di desktop.
- Sticky CTA tetap muncul di bawah, namun ukuran lebih ramping agar tidak terasa mengganggu.

## 7. Detail Section

### 7.1 Scarcity Bar

Tujuan: memunculkan urgensi sejak pertama halaman dibuka.

Konten:

- Teks: `Sisa Slot Aktivasi Gratis Hari Ini: 20 Resto`

Guideline visual:

- Posisi fixed atau sticky di paling atas.
- Tinggi sekitar 40 sampai 48 px.
- Gunakan warna kontras hangat agar berbeda dari area utama.
- Tambahkan icon kecil seperti petir, alarm, atau badge untuk menarik perhatian, tapi jangan berlebihan.

Rekomendasi tone:

- Terlihat mendesak, tetapi tetap terpercaya.
- Jangan memakai copy yang terlalu agresif atau terkesan scam.

### 7.2 Hero Impact

Tujuan: menjelaskan transformasi inti dalam satu layar pertama.

Konten wajib:

- Headline: `Ubah Foto Menu Jadi Website Pesan Antar dalam 5 Menit. Gratis!`
- Sub-headline: `Gunakan teknologi AI untuk mempercantik tampilan menu Anda tanpa perlu ketik manual.`

Visual wajib:

- Kiri: foto buku menu lecek, menu print, atau tampilan manual.
- Label kiri: `Dulu: Ribet & Berantakan`
- Kanan: mockup HP berisi website Mibebi yang bersih, modern, dan menampilkan foto makanan estetik.
- Label kanan: `Sekarang: Digital & Profesional`

Arahan layout:

- Pada mobile, copy muncul lebih dulu, visual menyusul tepat di bawahnya.
- Before dan after bisa ditampilkan side-by-side bila cukup, atau stacked card dengan pemisah visual yang jelas.
- Mockup HP harus menjadi focal point utama.
- Tambahkan badge kecil seperti `AI Powered`, `Gratis`, atau `5 Menit` bila membantu menegaskan value.

Arahan UX:

- CTA utama dapat ditempatkan di hero sebagai tombol pertama.
- Hero harus cukup kuat walaupun user hanya melihat 1 screen pertama.

### 7.3 Benefit Grid

Tujuan: memperluas persepsi bahwa Mibebi membantu banyak sisi bisnis resto.

Format card:

- Icon
- Judul singkat
- Deskripsi dengan pola "Membantu ..."

Daftar benefit:

1. `Scan Menu AI`
   Membantu Anda mulai jualan digital tanpa capek ketik menu.
2. `Percantik Menu AI`
   Membantu foto makanan Anda terlihat seperti hasil fotografer profesional.
3. `Website Gratis`
   Membantu resto Anda punya "pintu masuk" digital yang keren.
4. `AI Psychological Message`
   Membantu Anda berterima kasih otomatis agar pelanggan balik lagi.
5. `Lastbite Integration`
   Membantu mengubah potensi makanan sisa menjadi profit.
6. `Reminder & Voucher`
   Membantu menyapa kembali pelanggan lama yang sudah jarang mampir.
7. `QR Meja`
   Membantu tim Anda tetap santai melayani pelanggan saat jam sibuk.
8. `Laporan Harian`
   Membantu Anda pantau bisnis lewat email tanpa perlu rekap manual.

Arahan layout:

- Mobile: 1 kolom atau 2 kolom kecil jika tetap terbaca.
- Tablet: 2 kolom.
- Desktop: 4 kolom x 2 baris.
- Card tidak boleh terlalu tinggi; usahakan scanning cepat.

Arahan visual:

- Icon memakai gaya yang konsisten.
- Gunakan card dengan radius cukup besar agar terasa modern dan ramah.
- Tambahkan efek hover ringan di desktop, tapi jangan bergantung pada hover untuk mobile.

## 8. CTA & Lead Capture

### 8.1 Sticky CTA Button

Konten tombol:

- `Amankan Slot Website Gratis`

Perilaku:

- Muncul tetap di bagian bawah layar.
- Selalu visible di mobile.
- Klik tombol membuka modal tanpa reload.

UX detail:

- Tambahkan safe-area padding untuk perangkat dengan bottom inset.
- Di desktop, boleh tetap sticky namun dengan lebar terbatas.
- Tombol harus terlihat sebagai aksi primer paling penting di halaman.

### 8.2 Modal Lead Form

Tujuan: menangkap data minimum yang cukup untuk follow-up admin.

Field wajib:

1. `Nama Anda`
2. `Nama Restoran`
3. `Kota`

Tombol submit:

- `Klaim Slot & Hubungi Admin via WA`

State yang wajib ada:

- Default
- Focus
- Error validation
- Submitting/loading
- Success sebelum redirect
- Failure jika penyimpanan gagal

Validasi minimum:

- Semua field wajib diisi.
- Trim whitespace.
- Batasi input kosong atau karakter tidak relevan berlebihan.
- Tampilkan pesan error yang sederhana dan jelas.

Copy bantuan opsional:

- `Isi data singkat ini agar admin bisa langsung bantu aktivasi resto Anda.`

### 8.3 Flow Interaksi Form

1. User klik sticky CTA atau CTA di hero.
2. Modal terbuka tanpa refresh.
3. User isi 3 field.
4. User klik submit.
5. Frontend memicu event tracking submit.
6. Data dikirim ke Google Sheets via Google Apps Script atau SheetDB, atau ke email jika itu yang dipilih.
7. Setelah penyimpanan sukses terkonfirmasi, buka WhatsApp di tab baru.
8. Modal dapat ditutup otomatis atau menampilkan state singkat `Mengalihkan ke WhatsApp...`

Jika penyimpanan gagal:

- Jangan redirect ke WhatsApp.
- Tampilkan pesan error.
- Beri kesempatan user mengirim ulang.

## 9. Integrasi WhatsApp

### 9.1 Format Redirect

Gunakan format:

```text
https://wa.me/[NomorAdmin]?text=[PesanTerenkode]
```

### 9.2 Template Pesan

```text
Halo Mibebi, saya {Nama} dari {Nama Restoran} di {Kota}. Saya baru saja mendaftar di website dan ingin mengamankan slot aktivasi Website Gratis & Poles AI. Mohon dibantu prosesnya.
```

### 9.3 Rule Teknis

- Pesan harus URL-encoded.
- Gunakan data hasil trim.
- Redirect hanya dilakukan setelah penyimpanan lead sukses.
- Nomor admin harus configurable melalui environment variable atau config terpusat.

## 10. Data Handling

### 10.1 Data Minimum yang Disimpan

- Timestamp submit
- Nama
- Nama restoran
- Kota
- Source halaman atau campaign jika tersedia
- Status submit berhasil atau gagal

### 10.2 Opsi Penyimpanan

Prioritas implementasi:

1. Google Apps Script ke Google Sheets
2. SheetDB
3. Email fallback

### 10.3 Catatan Implementasi

- Request submit dilakukan async tanpa reload halaman.
- Pastikan ada response sukses eksplisit dari endpoint.
- Simpan log error di console minimal pada Fase 1.
- Jika memungkinkan, kirim juga `userAgent`, `referrer`, dan `landing_page` sebagai metadata.

## 11. Tracking & Analytics

Event minimum:

- `page_view`
- `hero_cta_click`
- `sticky_cta_click`
- `lead_form_open`
- `lead_form_submit_attempt`
- `lead_form_submit_success`
- `lead_form_submit_failed`
- `whatsapp_redirect`

Parameter event minimum:

- timestamp
- source_cta
- city jika tersedia
- restaurant_name jika kebijakan privasi mengizinkan

Catatan:

- Event submit harus tercatat sebelum redirect.
- Jika memakai analytics tool, gunakan event non-blocking.

## 12. Arah Visual & Penggunaan Warna

Halaman harus terasa modern, hangat, bersih, dan relevan untuk bisnis kuliner. Hindari nuansa terlalu korporat atau terlalu tech dingin.

### 12.1 Arah Visual

- Fokus utama pada transformasi visual menu yang tadinya kusam menjadi menggugah selera.
- Gunakan perpaduan background terang hangat dengan aksen hijau segar dan oranye aktif.
- Foto makanan harus terlihat lezat, cerah, dan profesional.
- Gunakan sudut rounded, bayangan lembut, dan spacing lega agar terkesan premium namun tetap ramah UMKM.

### 12.2 Rekomendasi Warna

Palet utama yang direkomendasikan:

- Primary brand green: `#1F7A5A`
- Secondary mint: `#63C7A6`
- Warm cream background: `#FFF8EE`
- Surface white: `#FFFDFC`
- Dark text: `#1E2A26`
- Muted text: `#5D6B66`
- Accent orange untuk urgency: `#F58A2C`
- Accent soft orange: `#FFD2A6`
- Border soft: `#E7DDD1`

### 12.3 Penggunaan Warna per Area

- Scarcity bar:
  background `#F58A2C`, text `#FFFFFF`
- Hero background:
  warm cream atau gradient halus dari `#FFF8EE` ke `#FFFDFC`
- CTA utama:
  background `#1F7A5A`, text `#FFFFFF`
- CTA hover atau active:
  background `#176449`
- Benefit card:
  background `#FFFDFC`, border `#E7DDD1`
- Badge atau highlight AI:
  mint `#63C7A6` dengan text gelap
- Label "Dulu":
  gunakan neutral yang sedikit kusam seperti `#C96A5A` atau abu hangat
- Label "Sekarang":
  gunakan hijau utama `#1F7A5A`

### 12.4 Rasio Visual

- 70% area terasa terang dan bersih.
- 20% area memakai warna brand hijau.
- 10% area memakai warna aksen oranye untuk urgency dan perhatian.

## 13. Tipografi

Karakter tipografi yang disarankan:

- Headline: serif modern atau display yang memberi kesan premium kuliner.
- Body: sans-serif yang sangat mudah dibaca di layar kecil.

Panduan ukuran:

- Mobile headline: 32 sampai 40 px
- Mobile subheadline: 16 sampai 18 px
- Section title: 24 sampai 28 px
- Body text: 14 sampai 16 px
- Button label: 15 sampai 16 px, semi-bold

Panduan copy:

- Headline harus langsung menjual hasil.
- Hindari istilah teknis AI yang terlalu kompleks.
- Utamakan bahasa yang terasa membantu, ringan, dan dekat dengan owner resto.

## 14. Komponen Teknis yang Perlu Dibuat

Daftar komponen frontend yang direkomendasikan:

1. `ScarcityBar`
2. `HeroComparison`
3. `BenefitGrid`
4. `StickyLeadCTA`
5. `LeadCaptureModal`
6. `LeadForm`
7. `WhatsAppRedirectHandler`

Jika memakai struktur route saat ini, implementasi utama kemungkinan berada di `src/routes/index.tsx` dengan komponen terpisah di `src/components`.

## 15. Responsivitas

### Mobile

- Lebar konten nyaman pada 360 sampai 430 px.
- Sticky CTA tidak menutupi input saat keyboard aktif.
- Gambar tetap tajam dan tidak terpotong secara buruk.

### Tablet

- Hero mulai 2 kolom bila ruang cukup.
- Benefit grid 2 kolom.

### Desktop

- Maksimal container sekitar 1120 sampai 1200 px.
- Hero 2 kolom stabil.
- Benefit grid 4 kolom.

## 16. Performance

Target:

- Initial load terasa cepat di jaringan mobile.
- Gambar hero memakai format WebP.
- Hindari file gambar terlalu besar.
- Target load utama di bawah 3 detik pada kondisi normal.

Checklist:

- Compress image before vs after.
- Gunakan ukuran responsive image bila tersedia.
- Tunda asset non-esensial.
- Minimalkan JavaScript yang tidak perlu.

## 17. Accessibility

Minimum requirement:

- Kontras teks dan background cukup.
- Semua tombol punya state fokus yang jelas.
- Modal bisa ditutup dengan tombol close dan `Esc`.
- Focus trap di dalam modal.
- Input punya label yang jelas.
- Image dekoratif diberi perlakuan yang tepat, image penting punya alt text deskriptif.

## 18. Acceptance Criteria

Landing page dianggap siap jika:

1. Hero before vs after tampil baik di mobile dan desktop.
2. Scarcity bar tampil mencolok di bagian atas.
3. Benefit grid menampilkan 8 value utama Mibebi.
4. Sticky CTA selalu terlihat di mobile.
5. Klik CTA membuka modal tanpa reload.
6. Form memvalidasi 3 input wajib.
7. Submit form mengirim data ke Google Sheets, SheetDB, atau email.
8. Redirect ke WhatsApp hanya terjadi setelah penyimpanan berhasil.
9. Pesan WhatsApp terisi dinamis sesuai input user.
10. Ada event tracking minimum untuk click, submit, success, dan redirect.
11. Halaman tetap nyaman digunakan pada koneksi mobile dan layar kecil.

## 19. Catatan Implementasi untuk Developer

- Gunakan pendekatan mobile-first.
- Pisahkan data benefit, copy, dan config WhatsApp ke konstanta agar mudah diubah.
- Simpan nomor WhatsApp admin dan endpoint lead capture di environment variable.
- Siapkan fallback UI jika endpoint lead capture tidak aktif.
- Pastikan state loading submit mencegah double-click.
- Jika memungkinkan, tambahkan toast atau inline feedback saat submit berhasil.

## 20. Backlog Opsional Setelah Fase 1

- Counter slot dinamis dari backend atau sheet.
- Testimoni atau logo resto.
- FAQ singkat untuk mengurangi keraguan.
- A/B test headline dan CTA.
- Integrasi analytics lebih lengkap.
- Notifikasi lead real-time ke admin.
