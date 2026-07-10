const express = require("express");
const app = express();
const PORT = 3000;

// Middleware untuk parsing JSON
app.use(express.json());

// Middleware untuk serve file statis dari folder public
app.use(express.static("public"));

// Data awal mahasiswa (database sementara)
let mahasiswa = [
    {
        id: 1,
        nama: "Haydy Haidar Khalifi",
        nim: "2025806036",
        prodi: "Teknologi Informasi"
    }
];

// ===================
// READ ALL - GET /api/mahasiswa
// ===================
app.get("/api/mahasiswa", (req, res) => {
    res.json(mahasiswa);
});

// ===================
// READ BY ID - GET /api/mahasiswa/:id
// ===================
app.get("/api/mahasiswa/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const data = mahasiswa.find(m => m.id === id);
    
    if (data) {
        res.json(data);
    } else {
        res.status(404).json({
            message: "Data tidak ditemukan"
        });
    }
});

// ===================
// CREATE - POST /api/mahasiswa
// ===================
app.post("/api/mahasiswa", (req, res) => {
    const data = {
        id: Date.now(),  // Generate ID unik dari timestamp
        nama: req.body.nama,
        nim: req.body.nim,
        prodi: req.body.prodi
    };
    
    mahasiswa.push(data);
    res.status(201).json(data);
});

// ===================
// UPDATE - PUT /api/mahasiswa/:id
// ===================
app.put("/api/mahasiswa/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const index = mahasiswa.findIndex(m => m.id === id);
    
    if (index === -1) {
        return res.status(404).json({
            message: "Data tidak ditemukan"
        });
    }
    
    mahasiswa[index] = {
        id: id,
        nama: req.body.nama,
        nim: req.body.nim,
        prodi: req.body.prodi
    };
    
    res.json(mahasiswa[index]);
});

// ===================
// DELETE - DELETE /api/mahasiswa/:id
// ===================
app.delete("/api/mahasiswa/:id", (req, res) => {
    const id = parseInt(req.params.id);
    mahasiswa = mahasiswa.filter(m => m.id !== id);
    
    res.json({
        message: "Data berhasil dihapus"
    });
});

// ===================
// START SERVER
// ===================
app.listen(PORT, () => {
    console.log("Server berjalan di http://localhost:3000");
});