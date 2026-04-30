#include <stdio.h>
#include <string.h>

// Fungsi untuk menentukan grade berdasarkan nilai
char* tentukanGrade(float nilai) {
    if (nilai >= 85 && nilai <= 100) {
        return "A";
    } else if (nilai >= 75 && nilai < 85) {
        return "B";
    } else if (nilai >= 60 && nilai < 75) {
        return "C";
    } else if (nilai >= 40 && nilai < 60) {
        return "D";
    } else if (nilai >= 0 && nilai < 40) {
        return "E";
    } else {
        return "Invalid";
    }
}

// Fungsi untuk menampilkan informasi mahasiswa
void tampilkanInfo(char nama[], float nilai, char grade[]) {
    printf("\n===================================\n");
    printf("Nama Mahasiswa: %s\n", nama);
    printf("Nilai: %.2f\n", nilai);
    printf("Grade: %s\n", grade);
    printf("===================================\n");
}

int main() {
    int jumlahMahasiswa;
    char nama[100];
    float nilai;
    
    printf("=== PROGRAM INPUT NILAI MAHASISWA ===\n");
    printf("Masukkan jumlah mahasiswa: ");
    scanf("%d", &jumlahMahasiswa);
    
    // Perulangan untuk banyak mahasiswa
    for(int i = 1; i <= jumlahMahasiswa; i++) {
        printf("\n--- Mahasiswa ke-%d ---\n", i);
        
        // Input nama mahasiswa
        printf("Masukkan nama mahasiswa: ");
        scanf(" %[^\n]", nama);  // Membaca string dengan spasi
        
        // Input nilai dengan validasi
        do {
            printf("Masukkan nilai (0-100): ");
            scanf("%f", &nilai);
            
            if(nilai < 0 || nilai > 100) {
                printf("Nilai tidak valid! Masukkan nilai antara 0-100.\n");
            }
        } while(nilai < 0 || nilai > 100);
        
        // Panggil fungsi untuk menentukan grade
        char *grade = tentukanGrade(nilai);
        
        // Panggil fungsi untuk menampilkan info
        tampilkanInfo(nama, nilai, grade);
    }
    
    printf("\n=== PROGRAM SELESAI ===\n");
    return 0;
}