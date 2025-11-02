Repositori ini dibuat untuk memenuhi Ujian Tengah Semester (UTS) mata kuliah Pemrograman Web.

- *Nama:* Devina Kartika (123140036)
- *Kelas:* PAW RA
  
---

## 🚀 Live Demo

Aplikasi ini telah di-deploy menggunakan Vercel.

[Live Demo](https://uts-pemweb-123140036-dvn.vercel.app/)

---

# Baca Nusantara

*BacaNusantara* adalah aplikasi *perpustakaan digital* yang dirancang untuk memudahkan pengguna dalam mengakses dan membaca buku dalam format digital. Aplikasi ini menggabungkan kemudahan pencarian, pengelolaan daftar baca, serta penyaringan konten untuk memberikan pengalaman membaca digital yang efisien dan menyenangkan.
*Baca Nusantara* memungkinkan pengguna untuk mencari buku dari *Open Library API* secara langsung tanpa memerlukan API key. Pengguna dapat menelusuri buku berdasarkan *judul* atau *penulis, melihat detail singkat, serta menambahkan buku ke **daftar bacaan pribadi (reading list). Aplikasi ini dikembangkan menggunakan **React.js* dengan tampilan modern berbasis *Tailwind CSS*, memastikan antarmuka yang ringan, responsif, dan mudah digunakan.

---

## Screenshot Aplikasi
![Tampilan](https://github.com/dvnkrtk/uts-pemweb-123140036-dvn/blob/main/src/public/Tampilan.png )
![Detail](https://github.com/dvnkrtk/uts-pemweb-123140036-dvn/blob/main/src/public/Detail.png )
![Reading List](https://github.com/dvnkrtk/uts-pemweb-123140036-dvn/blob/main/src/public/Reading%20List.png)

## Fitur Utama

- *Pencarian Buku:* Cari buku berdasarkan judul atau nama penulis.  
- *Tampilan Cover:* Menampilkan sampul buku dari API Open Library.  
- *Reading List:* Tambahkan buku ke daftar bacaan pribadi.  
- *Hapus Buku:* Hapus buku dari daftar bacaan.  
- *Penyimpanan Lokal:* Data daftar bacaan tersimpan otomatis di localStorage.   

---

## Teknologi yang Digunakan

- *React.js* – library JavaScript untuk membangun UI interaktif  
- *Tailwind CSS* – framework styling responsif dan modern  
- *Open Library API* – sumber data buku gratis tanpa API key  
- *React Hooks (useState, useEffect)* – pengelolaan state dan efek  
- *Vite* – sebagai build tool untuk performa tinggi  

---

## Cara Instalasi dan Menjalankan

1.  Clone repository ini:
    bash
    git clone https://github.com/dvnkrtk/uts-pemweb-123140036-dvn 
    cd uts-pemweb-123140036-dvn 
    
2.  Install dependencies:
    bash
    npm install
    
3.  *Buat file .env*
    Buat file bernama .env di root proyek (sejajar dengan package.json) dan tambahkan API Key Anda dari https://openlibrary.org/developers/api 

4.  Jalankan server development:
    bash
    npm run dev
    
    Aplikasi akan berjalan di http://localhost:5173.
