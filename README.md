# DSMBC Preview

## Tentang DSMBC

**Data Science Mini Bootcamp (DSMBC)** adalah mini bootcamp berbasis proyek yang diselenggarakan oleh **Departemen Data Science, Basic Computing Community (BCS), Fakultas Ilmu Komputer**.

Melalui tema **“Data Odyssey: A Journey from Data to Intelligence”**, DSMBC mengajak peserta menjelajahi dunia Data Science secara praktis. Selama dua minggu, peserta akan mempelajari bagaimana data diproses, dianalisis, dan diubah menjadi insight yang bermakna melalui proyek-proyek dunia nyata.

Website ini menjadi media informasi dan representasi digital DSMBC, sekaligus memperkenalkan perjalanan belajar peserta dalam membangun kompetensi di bidang Data Science.

## A Hero’s Odyssey

Embark on a transformative journey through **“A Hero’s Odyssey”**, where every participant becomes a traveler on an epic quest to grow into a Data Science professional.

Sepanjang perjalanan, peserta akan:

- Membangun kemampuan teknis yang esensial di bidang Data Science.
- Mengembangkan pola pikir pemecahan masalah.
- Memahami proses pengolahan dan analisis data.
- Mengenal penerapan machine learning melalui proyek nyata.
- Mengembangkan kemampuan yang dibutuhkan untuk menghadapi dunia Data Science.

Setiap tahap dalam perjalanan dirancang sebagai bagian dari proses transformasi: dari mengenal data, menemukan pola, menghasilkan insight, hingga mengubah data menjadi kecerdasan yang dapat digunakan untuk mengambil keputusan.

## Data Odyssey: A Journey from Data to Intelligence

**Data Odyssey** merupakan project-based mini bootcamp selama **dua minggu** yang memberikan pengalaman langsung dalam mempelajari alur kerja Data Science.

Peserta akan mengeksplorasi berbagai tahapan, mulai dari:

1. Memahami permasalahan dan kebutuhan data.
2. Mengumpulkan serta menyiapkan data.
3. Melakukan eksplorasi dan analisis data.
4. Menemukan pola dan insight dari data.
5. Menerapkan konsep machine learning.
6. Mengomunikasikan hasil analisis melalui proyek yang relevan.

Dengan pendekatan berbasis proyek, DSMBC dirancang untuk membantu peserta menghubungkan konsep yang dipelajari dengan studi kasus dan kebutuhan dunia nyata.

## Fitur Website

- Landing page bertema perjalanan dan eksplorasi Data Science.
- Informasi mengenai DSMBC dan Data Odyssey.
- Penyajian alur perjalanan peserta secara visual.
- Animasi interaktif untuk meningkatkan pengalaman pengguna.
- Desain responsif untuk perangkat desktop maupun mobile.

## Tech Stack

Berikut teknologi utama yang digunakan dalam pengembangan website DSMBC. Versi di bawah mengacu pada deklarasi dependency di `package.json`.

### Core

| Teknologi | Versi | Keterangan |
| --- | --- | --- |
| Next.js | `16.3.4` | Framework React untuk aplikasi web dan routing berbasis App Router |
| React | `19.2.8` | Library untuk membangun antarmuka pengguna |
| React DOM | `19.2.8` | Integrasi React dengan DOM browser |
| TypeScript | `^5` | Static typing untuk pengembangan yang lebih aman dan terstruktur |

### Styling dan UI

| Teknologi | Versi | Keterangan |
| --- | --- | --- |
| Tailwind CSS | `^4` | Utility-first CSS framework |
| `@tailwindcss/postcss` | `^4` | Integrasi Tailwind CSS dengan PostCSS |
| `tailwind-merge` | `^3.7.0` | Menggabungkan dan mengoptimalkan class Tailwind yang konflik |
| `clsx` | `^2.1.1` | Membantu menyusun class name secara kondisional |
| Lucide React | `^1.47.0` | Koleksi ikon untuk antarmuka React |

### Animasi

| Teknologi | Versi | Keterangan |
| --- | --- | --- |
| GSAP | `^3.15.0` | Library animasi performa tinggi untuk pengalaman visual interaktif |
| `@gsap/react` | `^2.1.2` | Integrasi GSAP dengan React |

### Development Tools

| Teknologi | Versi | Keterangan |
| --- | --- | --- |
| ESLint | `^9` | Linting dan pemeriksaan kualitas kode |
| `eslint-config-next` | `16.3.4` | Konfigurasi ESLint untuk Next.js |
| `@types/node` | `^20` | Type definitions untuk Node.js |
| `@types/react` | `^19` | Type definitions untuk React |
| `@types/react-dom` | `^19` | Type definitions untuk React DOM |
| `babel-plugin-react-compiler` | `1.0.0` | Plugin React Compiler untuk optimasi kode React |

> Catatan: dependency dengan awalan `^` dapat menggunakan versi minor atau patch terbaru yang masih kompatibel sesuai aturan semver. Untuk instalasi yang sepenuhnya konsisten, gunakan lockfile yang tersedia di repository.

## Menjalankan Project Secara Lokal

### Prasyarat

Pastikan Node.js dan package manager telah terpasang di perangkat Anda. Versi Node.js yang digunakan sebaiknya mengikuti kompatibilitas Next.js `16.3.4`.

### Instalasi

Clone repository, lalu masuk ke direktori project:

```bash
git clone https://github.com/fahrypratama17/dsmbc-preview.git
cd dsmbc-preview
