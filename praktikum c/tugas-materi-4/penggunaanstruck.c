#include <stdio.h>

struct Mahasiswa {
   char nama[50];
   int umur;
   float ipk;
};

int main() {

   struct Mahasiswa mhs;

   printf("Nama: ");
   scanf("%s", mhs.nama);

   printf("Umur: ");
   scanf("%d", &mhs.umur);

   printf("IPK: ");
   scanf("%f", &mhs.ipk);

   printf("\nData:\n");
   printf("%s %d %.2f", mhs.nama, mhs.umur, mhs.ipk);

   return 0;
}
