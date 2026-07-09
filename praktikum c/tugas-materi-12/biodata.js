// biodata.js - Menampilkan biodata mahasiswa di terminal

const biodata = {
    nama: "Haydy Haidar Khalifi",
    nim: "2025806036",
    jurusan: "Teknik Informatika",
    fakultas: "Ilmu Komputer",
    semester: 2,
    tanggalLahir: "24 Agustus 2007",
    alamat: "Kp. Pasirandu Desa Kadu Kec. Curug Kab. Tangerang Banten",
    email: "haydyhaidarkhalifi@gmail.com",
    noHP: "081389389265"
};

console.log("=".repeat(50));
console.log("BIODATA MAHASISWA");
console.log("=".repeat(50));
console.log(`Nama           : ${biodata.nama}`);
console.log(`NIM            : ${biodata.nim}`);
console.log(`Jurusan        : ${biodata.jurusan}`);
console.log(`Fakultas       : ${biodata.fakultas}`);
console.log(`Semester       : ${biodata.semester}`);
console.log(`Tanggal Lahir  : ${biodata.tanggalLahir}`);
console.log(`Alamat         : ${biodata.alamat}`);
console.log(`Email          : ${biodata.email}`);
console.log(`No. HP         : ${biodata.noHP}`);
console.log("=".repeat(50));