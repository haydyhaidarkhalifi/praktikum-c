// Buat program tabel perkalian
#include <stdio.h>

int main() {
    int angka;
    
    printf("=====================================\n");
    printf("      PROGRAM TABEL PERKALIAN\n");
    printf("=====================================\n");
    
    printf("Masukkan angka yang ingin ditampilkan: ");
    scanf("%d", &angka);
    
    printf("\n=== Tabel Perkalian %d ===\n", angka);
    for(int i = 1; i <= 10; i++) {
        printf("%d x %2d = %3d\n", angka, i, angka * i);
    }
    
    return 0;
}