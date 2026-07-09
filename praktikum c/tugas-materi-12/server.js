// server.js - HTTP Server dengan routing lengkap

const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');

// Data biodata (bisa diubah sesuai kebutuhan)
const biodata = {
    nama: "Haydy Haidar Khalifi",
    nim: "2025806036",
    jurusan: "Teknik Informatika",
    fakultas: "Ilmu Komputer",
    semester: 2,
    tanggalLahir: "24 Agustus 2007",
    alamat: "Kp. Pasirandu Desa Kadu Kec. Curug Kab. Tangerang Banten",
    email: "haydyhaidarkhalifi@gmail.com",
    noHP: "081389389265",
    hobi: ["Menggambar", "Coding", "Fotografi"],
    skill: ["JavaScript", "Python", "React", "Node.js"]
};

// Fungsi untuk membuat template HTML
function generateHTML(title, content, additionalStyles = '') {
    return `
    <!DOCTYPE html>
    <html lang="id">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${title}</title>
        <style>
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
            body {
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                min-height: 100vh;
                display: flex;
                justify-content: center;
                align-items: center;
                padding: 20px;
            }
            .container {
                background: white;
                border-radius: 20px;
                padding: 40px;
                max-width: 800px;
                width: 100%;
                box-shadow: 0 20px 60px rgba(0,0,0,0.3);
            }
            h1 {
                color: #333;
                border-bottom: 3px solid #667eea;
                padding-bottom: 10px;
                margin-bottom: 20px;
                text-align: center;
            }
            .nav {
                display: flex;
                gap: 15px;
                justify-content: center;
                margin-bottom: 30px;
                flex-wrap: wrap;
            }
            .nav a {
                text-decoration: none;
                color: white;
                background: #667eea;
                padding: 10px 20px;
                border-radius: 10px;
                transition: transform 0.3s, background 0.3s;
            }
            .nav a:hover {
                background: #764ba2;
                transform: translateY(-2px);
            }
            .info-item {
                padding: 12px;
                margin: 8px 0;
                background: #f8f9fa;
                border-radius: 8px;
                border-left: 4px solid #667eea;
            }
            .info-item strong {
                color: #333;
                display: inline-block;
                min-width: 120px;
            }
            .hobi-list, .skill-list {
                display: flex;
                flex-wrap: wrap;
                gap: 10px;
                margin-top: 10px;
            }
            .hobi-item, .skill-item {
                background: #667eea;
                color: white;
                padding: 5px 15px;
                border-radius: 20px;
                font-size: 14px;
            }
            ${additionalStyles}
        </style>
    </head>
    <body>
        <div class="container">
            <h1>${title}</h1>
            <div class="nav">
                <a href="/">🏠 Beranda</a>
                <a href="/profil">👤 Profil</a>
                <a href="/mata-kuliah">📚 Mata Kuliah</a>
                <a href="/kontak">📞 Kontak</a>
            </div>
            ${content}
        </div>
    </body>
    </html>
    `;
}

// Membuat server HTTP
const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const pathname = parsedUrl.pathname;
    
    console.log(`Request: ${req.method} ${pathname}`);
    
    // Routing
    switch(pathname) {
        case '/':
            // Halaman utama
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            const homeContent = `
                <div style="text-align: center; padding: 20px 0;">
                    <h2 style="color: #667eea;">Selamat Datang di Praktikum Pemrograman Dasar</h2>
                    <p style="font-size: 18px; margin: 20px 0; color: #555;">
                        Selamat belajar pemrograman web dengan Node.js!
                    </p>
                    <p style="color: #777;">
                        Silahkan navigasi ke menu di atas untuk melihat informasi lebih lanjut.
                    </p>
                </div>
            `;
            res.end(generateHTML('Beranda', homeContent));
            break;
            
        case '/profil':
            // Halaman profil
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            const profilContent = `
                <div style="padding: 10px 0;">
                    <div class="info-item">
                        <strong>Nama Lengkap:</strong> ${biodata.nama}
                    </div>
                    <div class="info-item">
                        <strong>NIM:</strong> ${biodata.nim}
                    </div>
                    <div class="info-item">
                        <strong>Jurusan:</strong> ${biodata.jurusan}
                    </div>
                    <div class="info-item">
                        <strong>Fakultas:</strong> ${biodata.fakultas}
                    </div>
                    <div class="info-item">
                        <strong>Semester:</strong> ${biodata.semester}
                    </div>
                    <div class="info-item">
                        <strong>Tanggal Lahir:</strong> ${biodata.tanggalLahir}
                    </div>
                    <div class="info-item">
                        <strong>Alamat:</strong> ${biodata.alamat}
                    </div>
                    <div class="info-item">
                        <strong>Hobi:</strong>
                        <div class="hobi-list">
                            ${biodata.hobi.map(h => `<span class="hobi-item">${h}</span>`).join('')}
                        </div>
                    </div>
                    <div class="info-item">
                        <strong>Skill:</strong>
                        <div class="skill-list">
                            ${biodata.skill.map(s => `<span class="skill-item">${s}</span>`).join('')}
                        </div>
                    </div>
                </div>
            `;
            res.end(generateHTML('Profil Mahasiswa', profilContent));
            break;
            
        case '/mata-kuliah':
            // Halaman mata kuliah
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            const mkContent = `
                <div style="padding: 10px 0;">
                    <h3 style="color: #333; margin-bottom: 15px;">Daftar Mata Kuliah Semester ${biodata.semester}</h3>
                    <div class="info-item">
                        <strong>Pemrograman Dasar</strong>
                        <span style="color: #666; display: block; margin-top: 5px;"> Dosen: Rintis Mardika Sunarto</span>
                    </div>
                </div>
            `;
            res.end(generateHTML('Mata Kuliah', mkContent));
            break;
            
        case '/kontak':
            // Halaman kontak
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            const kontakContent = `
                <div style="padding: 10px 0;">
                    <div class="info-item">
                        <strong>📧 Email:</strong>
                        <span style="color: #667eea;">${biodata.email}</span>
                    </div>
                    <div class="info-item">
                        <strong>📱 No. HP:</strong>
                        <span style="color: #667eea;">${biodata.noHP}</span>
                    </div>
                    <div class="info-item">
                        <strong>📍 Alamat:</strong>
                        <span style="color: #667eea;">${biodata.alamat}</span>
                    </div>
                </div>
            `;
            res.end(generateHTML('Kontak', kontakContent));
            break;
            
        default:
            // Halaman tidak ditemukan (404)
            res.statusCode = 404;
            res.setHeader('Content-Type', 'text/html');
            const notFoundContent = `
                <div style="text-align: center; padding: 40px 0;">
                    <h1 style="font-size: 72px; color: #764ba2;">404</h1>
                    <h2 style="color: #333;">Halaman Tidak Ditemukan</h2>
                    <p style="color: #777; margin: 20px 0;">
                        Maaf, halaman yang Anda cari tidak tersedia.
                    </p>
                    <a href="/" style="
                        display: inline-block;
                        background: #667eea;
                        color: white;
                        padding: 10px 30px;
                        border-radius: 10px;
                        text-decoration: none;
                        margin-top: 20px;
                    ">Kembali ke Beranda</a>
                </div>
            `;
            res.end(generateHTML('404 - Halaman Tidak Ditemukan', notFoundContent));
    }
});

// Menentukan port
const PORT = 3000;

// Menjalankan server
server.listen(PORT, () => {
    console.log('='.repeat(60));
    console.log('🚀 Server berjalan di http://localhost:' + PORT);
    console.log('='.repeat(60));
    console.log('📋 Endpoint yang tersedia:');
    console.log('   - http://localhost:' + PORT + '/');
    console.log('   - http://localhost:' + PORT + '/profil');
    console.log('   - http://localhost:' + PORT + '/mata-kuliah');
    console.log('   - http://localhost:' + PORT + '/kontak');
    console.log('='.repeat(60));
    console.log('💡 Tekan Ctrl+C untuk menghentikan server');
});