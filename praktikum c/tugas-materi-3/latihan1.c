// Buat program menentukan bilangan ganjil/genap
#include <stdio.h>

int main() {
    int bilangan;
    
    printf("Masukkan bilangan: ");
    scanf("%d", &bilangan);
    
    if (bilangan % 2 == 0) {
        printf("%d adalah bilangan GENAP\n", bilangan);
    } else {
        printf("%d adalah bilangan GANJIL\n", bilangan);
    }
    
    return 0;
}