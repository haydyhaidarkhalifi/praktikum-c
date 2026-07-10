// Variabel global untuk menyimpan ID yang sedang diedit
let editId = null;

// ===================
// LOAD DATA
// ===================
async function loadData() {
    try {
        const response = await fetch("/api/mahasiswa");
        const data = await response.json();
        
        let html = "";
        data.forEach(item => {
            html += `
            <tr>
                <td>${item.nama}</td>
                <td>${item.nim}</td>
                <td>${item.prodi}</td>
                <td>
                    <button class="aksi-edit" onclick="edit(${item.id})">✏️ Edit</button>
                    <button class="aksi-hapus" onclick="hapus(${item.id})">🗑️ Delete</button>
                </td>
            </tr>
            `;
        });
        
        document.getElementById("tabelMahasiswa").innerHTML = html;
    } catch (error) {
        console.error("Error loading data:", error);
        alert("Gagal memuat data!");
    }
}

// ===================
// CREATE & UPDATE
// ===================
async function simpan() {
    // Ambil nilai dari input
    const mahasiswa = {
        nama: document.getElementById("nama").value,
        nim: document.getElementById("nim").value,
        prodi: document.getElementById("prodi").value
    };
    
    // Validasi: cek apakah semua field terisi
    if (!mahasiswa.nama || !mahasiswa.nim || !mahasiswa.prodi) {
        alert("Semua field harus diisi!");
        return;
    }
    
    try {
        if (editId === null) {
            // CREATE - POST request
            await fetch("/api/mahasiswa", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(mahasiswa)
            });
        } else {
            // UPDATE - PUT request
            await fetch("/api/mahasiswa/" + editId, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(mahasiswa)
            });
            editId = null;
        }
        
        // Reset form
        document.getElementById("nama").value = "";
        document.getElementById("nim").value = "";
        document.getElementById("prodi").value = "";
        
        // Reload data
        loadData();
    } catch (error) {
        console.error("Error saving data:", error);
        alert("Gagal menyimpan data!");
    }
}

// ===================
// DELETE
// ===================
async function hapus(id) {
    if (confirm("Apakah Anda yakin ingin menghapus data ini?")) {
        try {
            await fetch("/api/mahasiswa/" + id, {
                method: "DELETE"
            });
            loadData();
        } catch (error) {
            console.error("Error deleting data:", error);
            alert("Gagal menghapus data!");
        }
    }
}

// ===================
// EDIT
// ===================
async function edit(id) {
    try {
        const response = await fetch("/api/mahasiswa/" + id);
        const data = await response.json();
        
        // Isi form dengan data yang akan diedit
        document.getElementById("nama").value = data.nama;
        document.getElementById("nim").value = data.nim;
        document.getElementById("prodi").value = data.prodi;
        
        // Simpan ID untuk proses update
        editId = id;
        
        // Scroll ke form
        document.querySelector("h2").scrollIntoView({ behavior: 'smooth' });
    } catch (error) {
        console.error("Error loading edit data:", error);
        alert("Gagal memuat data untuk diedit!");
    }
}

// ===================
// LOAD PERTAMA KALI
// ===================
loadData();