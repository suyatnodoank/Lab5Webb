// ===== G1: operasi dasar, input dari prompt dikonversi ke number =====
function operasiDasar(a, b) {
  const baris = [
    "Penjumlahan: " + (a + b),
    "Pengurangan: " + (a - b),
    "Perkalian: " + (a * b),
    "Pembagian: " + (b !== 0 ? a / b : "Tidak dapat dibagi nol"),
    "Modulus: " + (b !== 0 ? a % b : "Tidak dapat dibagi nol")
  ];
  baris.forEach((teks) => console.log(teks));
  document.getElementById("hasilOperasi").textContent = baris.join("\n");
}

document.getElementById("btnOperasi").addEventListener("click", () => {
  const inputA = prompt("Masukkan bilangan pertama:");
  const inputB = prompt("Masukkan bilangan kedua:");

  // prompt() mengembalikan null kalau Cancel, dan "" kalau kosong
  if (inputA === null || inputB === null ||
      inputA.trim() === "" || inputB.trim() === "") {
    alert("Input tidak boleh kosong.");
    return;
  }

  const a = Number(inputA);
  const b = Number(inputB);

  if (Number.isNaN(a) || Number.isNaN(b)) {
    alert("Input harus berupa angka.");
    return;
  }

  operasiDasar(a, b);
});

// ===== G2: tabel perkalian 7 (1 sampai 10) =====
let tabel = "";
for (let i = 1; i <= 10; i++) {
  tabel += "7 x " + i + " = " + (7 * i) + "\n";
}
document.getElementById("tabelKali").textContent = tabel;

// ===== G3: function cekGenap =====
function cekGenap(angka) {
  return angka % 2 === 0;
}

document.getElementById("btnGenap").addEventListener("click", () => {
  const input = document.getElementById("inputGenap").value;
  const angka = Number(input);
  const hasil = document.getElementById("hasilGenap");

  if (input.trim() === "" || !Number.isInteger(angka)) {
    hasil.textContent = "Masukkan bilangan bulat yang valid.";
  } else {
    hasil.textContent = cekGenap(angka)
      ? angka + " adalah bilangan genap (true)"
      : angka + " adalah bilangan ganjil (false)";
  }
});

// ===== G4: validasi form, kolom tidak boleh kosong =====
document.getElementById("formDaftar").addEventListener("submit", (e) => {
  e.preventDefault(); // cegah halaman reload
  const nama = document.getElementById("nama").value.trim();
  const email = document.getElementById("email").value.trim();
  const pesan = document.getElementById("pesanForm");

  if (nama === "" || email === "") {
    pesan.style.color = "red";
    pesan.textContent = "Semua kolom wajib diisi.";
  } else {
    pesan.style.color = "green";
    pesan.textContent = "Data berhasil dikirim. Halo, " + nama + "!";
  }
});

// ===== G5: menu makanan, total otomatis =====
const daftarMenu = document.querySelectorAll(".menu");
daftarMenu.forEach((item) => item.addEventListener("change", hitungTotal));

function hitungTotal() {
  let total = 0;
  daftarMenu.forEach((item) => {
    if (item.checked) total += Number(item.value);
  });
  document.getElementById("total").textContent = total.toLocaleString("id-ID");
}

// ===== G6: tombol tampil/sembunyi elemen =====
const btnToggle = document.getElementById("btnToggle");
const teksToggle = document.getElementById("teksToggle");

btnToggle.addEventListener("click", () => {
  const tersembunyi = teksToggle.style.display === "none";
  teksToggle.style.display = tersembunyi ? "block" : "none";
  btnToggle.textContent = tersembunyi ? "Sembunyikan" : "Tampilkan";
});