# Lab5Webb
# Lab5Web — Praktikum 5: JavaScript Dasar dan Manipulasi HTML

| | |
|---|---|
| **Nama** | Suyatno |
| **NIM** | 312510129 |
| **Mata Kuliah** | Pemrograman Web |
| **Pertemuan** | 6 |

---

## 1. Tujuan Praktikum

1. Memahami sintaks dasar JavaScript dan cara menyisipkan JavaScript pada HTML.
2. Menggunakan variabel, tipe data, operator, percabangan, perulangan, dan function.
3. Menampilkan informasi melalui console, alert, prompt, dan elemen HTML.
4. Memanipulasi konten serta gaya elemen HTML menggunakan JavaScript.
5. Membuat interaksi sederhana pada form dan melakukan validasi input.
6. Mendokumentasikan pekerjaan praktikum beserta hasil pengujiannya.

## 2. Hasil Praktikum

### Latihan 1 — Menampilkan Output

**Tujuan:** mengenali cara menampilkan output pada halaman dan Console.

**Langkah kerja:** mengubah isi elemen `#pesan` dengan `textContent` dan mencetak pesan yang sama ke Console dengan `console.log()`.

**Hasil:** teks pada halaman berubah menjadi "Hello World" dan pesan yang sama muncul di Console. Perbedaannya, output halaman terlihat oleh pengguna, sedangkan output Console hanya terlihat melalui Developer Tools.

### Latihan 2 — Alert dan Prompt

**Tujuan:** memahami dialog `alert()` dan `prompt()` serta penanganan masukan pengguna.

**Langkah kerja:** meminta nama melalui `prompt()`, lalu menampilkan sapaan dengan `alert()` dan `textContent`. Masukan diperiksa agar tidak kosong.

**Hasil pengujian:**

| Skenario | Hasil |
|---|---|
| Memasukkan nama | Muncul alert sapaan dan halaman menampilkan "Selamat datang, [nama]." |
| Menekan Cancel | `prompt()` mengembalikan `null`; muncul alert "Nama belum diisi." |
| Input kosong | Muncul alert "Nama belum diisi." |


### Latihan 3 — Function dan Operasi Aritmetika

**Tujuan:** menggunakan function dengan parameter untuk operasi aritmetika.

**Langkah kerja:** membuat function `operasiDasar(a, b)` yang mencetak hasil penjumlahan, pengurangan, perkalian, pembagian, dan modulus. Pembagian dilindungi dari pembagi nol.

**Hasil:** pemanggilan `operasiDasar(9, 4)` menghasilkan:

```
Penjumlahan: 13
Pengurangan: 5
Perkalian: 36
Pembagian: 2.25
Modulus: 1
```

---

### Latihan 4 — Seleksi Kondisi if–else

**Tujuan:** menggunakan `if–else` dan mengonversi string hasil `prompt()` menjadi number.

**Langkah kerja:** meminta nilai melalui `prompt()`, mengonversinya dengan `Number()`, memvalidasi rentang 0–100, lalu menentukan status lulus (nilai ≥ 60).

**Hasil pengujian:**

| Masukan | Hasil |
|---|---|
| 75 | Lulus |
| 40 | Belum lulus |
| 150 | Input nilai tidak valid |
| abc | Input nilai tidak valid |
| (kosong / Cancel) | Input nilai tidak valid |

### Latihan 5 — Seleksi Kondisi switch

**Tujuan:** menggunakan `switch` untuk memilih tindakan berdasarkan nilai tertentu.

**Langkah kerja:** meminta angka 1–5 melalui `prompt()` dan menampilkan nama bilangannya. Setiap `case` menggunakan string karena `prompt()` mengembalikan string.

**Hasil:** masukan 1–5 menampilkan "Bilangan satu" sampai "Bilangan lima". Masukan di luar rentang menampilkan "Pilihan tidak tersedia".


### Latihan 6 — Form Bilangan Genap atau Ganjil

**Tujuan:** membuat interaksi form sederhana dengan validasi input.

**Langkah kerja:** menambahkan form bilangan dan tombol "Periksa" yang memanggil `cekBilangan()`. Fungsi memeriksa apakah masukan kosong atau bukan bilangan bulat, lalu menentukan genap/ganjil dengan operator `%`.

**Hasil pengujian:**

| Masukan | Hasil |
|---|---|
| 8 | Bilangan genap |
| 7 | Bilangan ganjil |
| -4 | Bilangan genap |
| 0 | Bilangan genap |
| 3.5 | Masukkan bilangan bulat yang valid. |
| (kosong) | Masukkan bilangan bulat yang valid. |

### Latihan 7 — Mengubah Warna Halaman

**Tujuan:** memanipulasi gaya elemen melalui DOM.

**Langkah kerja:** membuat satu function `ubahWarnaLatar(warna)` yang dipanggil oleh tiga tombol dengan argumen berbeda, sehingga tidak ada kode berulang.

**Hasil:** tombol "Latar Hijau", "Latar Putih", dan "Latar Kuning" mengubah `backgroundColor` pada `document.body` sesuai pilihan.

### Latihan 8 — DOM dan Checkbox Menu Makanan

**Tujuan:** menggunakan *event listener* dan manipulasi DOM untuk menghitung total otomatis.

**Langkah kerja:** memilih seluruh checkbox berkelas `.menu` dengan `querySelectorAll()`, memasang *event listener* `change` pada masing-masing, lalu menjumlahkan nilai checkbox yang dicentang dan menampilkannya dengan format `id-ID`.

**Hasil:** total berubah otomatis saat checkbox dicentang atau dilepas. Contoh: Ayam Goreng (5.000) + Telur Dadar (2.500) menghasilkan total Rp7.500.

### Eksperimen Mandiri (Bagian G)

Seluruh eksperimen dikerjakan pada folder `eksperimen-mandiri/`.

| No | Eksperimen | Hasil |
|---|---|---|
| 1 | Latihan 3 dengan dua masukan dari `prompt()` dikonversi ke number | Operasi dasar berjalan untuk masukan valid. Cancel, input kosong, dan non-angka ditolak dengan alert. |
| 2 | Tabel perkalian 7 dengan perulangan `for` | Menampilkan `7 x 1 = 7` sampai `7 x 10 = 70`. |
| 3 | Function `cekGenap(angka)` | Mengembalikan `true` untuk bilangan genap dan `false` untuk ganjil. |
| 4 | Validasi form kolom tidak boleh kosong | Muncul pesan error merah jika ada kolom kosong, dan pesan sukses hijau jika semua terisi. |
| 5 | Latihan 8 dengan tambahan menu | Ditambahkan Nasi Putih (Rp3.000) dan Es Teh (Rp2.000); total tetap terhitung otomatis. |
| 6 | Tombol tampil/sembunyi elemen | Tombol mengubah `style.display` elemen dan label tombol berganti antara "Sembunyikan" dan "Tampilkan". |
<img width="933" height="954" alt="G  Js" src="https://github.com/user-attachments/assets/8771484a-007a-411c-b1a7-df87d4d14ba0" />
<img width="1384" height="997" alt="G html" src="https://github.com/user-attachments/assets/9f4b77ae-105d-4b54-b951-50a8a472d2ec" />

<img width="1075" height="992" alt="G  hasil" src="https://github.com/user-attachments/assets/f58017f5-8c19-4f82-b27b-b73fa24b52be" />

### Mini Project — Kalkulator Nilai Mahasiswa

**Tujuan:** menghitung nilai akhir, predikat, dan status kelulusan dari nilai tugas, UTS, dan UAS.

**Langkah kerja:** menambahkan form input tiga komponen nilai, memvalidasi rentang 0–100, memisahkan proses perhitungan (`hitungNilaiAkhir`, `tentukanPredikat`) dari tampilan hasil, lalu menampilkan hasil pada halaman HTML.

<img width="1919" height="820" alt="10  mini project" src="https://github.com/user-attachments/assets/ab93dbfa-bfcf-46bc-a785-392a5650fdc7" />


<img width="1919" height="995" alt="10  mini project upgrade" src="https://github.com/user-attachments/assets/aa6af76c-efdf-41e8-b63f-16412ed588da" />


---

## 6. Jawaban Pertanyaan dan Tugas (Bagian H)

Jawaban pertanyaan 1–7 disusun pada berkas [Jawaban lab5.docx](https://github.com/user-attachments/files/33908839/Jawaban.lab5.docx)


## 7. Kesimpulan

Melalui praktikum ini, penulis dapat menggunakan variabel, tipe data, operator, percabangan, perulangan, dan function pada JavaScript, serta memanipulasi elemen HTML melalui DOM. Praktikum ini juga menunjukkan pentingnya validasi masukan, misalnya karena `prompt()` selalu mengembalikan string dan `Number("")` menghasilkan `0`.

## 8. Referensi

1. Flanagan, D. (2020). *JavaScript: The Definitive Guide* (7th ed.). O'Reilly Media.
2. MDN Web Docs. *JavaScript Guide*. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide
