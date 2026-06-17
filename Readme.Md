# 🌸 Alfess

Sebuah proyek web statis interaktif berbasis HTML, CSS, dan JavaScript murni yang dirancang dengan gaya **Apple-Style Glassmorphism UI**. Web ini dibuat khusus dan didedikasikan kepada Ariva Kinanti Zalfa.

---

## ✨ Fitur Utama

- **Glassmorphic UI (Liquid Glass):** Desain modern bernuansa _soft-pink_ dan _purple_ menggunakan efek `backdrop-filter: blur()` dan gradasi dinamis untuk kenyamanan visual.
- **Apple-Style Modals:** Menampilkan konten surat (_First Mail_), sematan pemutar musik, dan media secara interaktif menggunakan pop-up modal ala Apple tanpa library eksternal.
- **Smart Audio & Video Sync:** \* Musik latar (`src/miab.mp3`) akan otomatis berputar setelah interaksi pertama pengguna.
  - _Auto-pause:_ Musik latar akan berhenti otomatis jika pengguna memutar video di dalam menu "Dreams" (`src/inmydreams.mp4`), dan akan berputar kembali saat video dijeda atau selesai.
- **Responsive Layout:** Navigasi adaptif yang mendukung tampilan Desktop dan Mobile (menggunakan sistem _Hamburger Menu_).
- **Fitur Pendukung:** Terintegrasi langsung dengan sub-proyek `Kalkulator 2` dan halaman `Scrapbook Walkman`.

---

## 📂 Struktur Repositori

```text
├── index.html                  # Halaman utama (Homepage Proyek)
├── script.js                   # Logika interaksi, pop-up, dan sinkronisasi audio
├── style.css                   # Pengaturan gaya, animasi blob, dan Glassmorphism
├── scrapbook_walkman.html      # Halaman arsip rekaman (Lost Record)
├── kalkulator 2/               # Sub-aplikasi tambahan
│   ├── index.html
│   ├── script.js
│   └── styles.css
└── src/                        # Folder aset media (Gambar, Audio, Video)
    ├── My-Melody.png
    ├── melodi2.png
    ├── melodi3.png
    ├── feelmyrhythm.jpeg
    ├── miab.mp3                # Musik latar utama
    └── inmydreams.mp4          # Video konten Dreams
```
