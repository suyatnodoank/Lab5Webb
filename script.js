function hitungNilaiAkhir(tugas, uts, uas) {
    return (tugas * 0.30) + (uts * 0.30) + (uas * 0.40);
}

function tentukanPredikat(nilai) {
    if (nilai >= 85) return "A";
    if (nilai >= 75) return "B";
    if (nilai >= 60) return "C";
    if (nilai >= 50) return "D";
    return "E";
}

function isValid(nilai) {
    return nilai >= 0 && nilai <= 100;
}

function prosesDanTampilkanNilai(tugas, uts, uas) {
    console.log(`=== INPUT NILAI: Tugas(${tugas}), UTS(${uts}), UAS(${uas}) ===`);

    if (!isValid(tugas) || !isValid(uts) || !isValid(uas)) {
        console.log("Error: Semua komponen nilai harus berada di rentang 0 sampai 100!\n");
        return;
    }

    const akhir = hitungNilaiAkhir(tugas, uts, uas);
    const predikat = tentukanPredikat(akhir);
    const status = akhir >= 60 ? "Lulus" : "Belum lulus";

    // Tampilan hasil
    console.log("Hasil Kelulusan:");
    console.log("- Nilai Akhir :", akhir.toFixed(2));
    console.log("- Predikat    :", predikat);
    console.log("- Status      :", status);
    console.log("===============================================\n");
}

prosesDanTampilkanNilai(85, 78, 88);

prosesDanTampilkanNilai(60, 55, 65);

prosesDanTampilkanNilai(40, 30, 45);

prosesDanTampilkanNilai(105, 80, 75);
