// Fungsi menghitung luas lingkaran
#include <stdio.h>
#define PHI 3.14159

float hitungLuasLingkaran(float jari_jari) {
    return PHI * jari_jari * jari_jari;
}

int main() {
    float jari_jari, luas;
    
    printf("=== PROGRAM MENGHITUNG LUAS LINGKARAN ===\n");
    printf("Masukkan jari-jari lingkaran: ");
    scanf("%f", &jari_jari);
    
    luas = hitungLuasLingkaran(jari_jari);
    
    printf("\nHasil Perhitungan:\n");
    printf("Jari-jari: %.2f cm\n", jari_jari);
    printf("Luas Lingkaran: %.2f cm²\n", luas);
    
    return 0;
}