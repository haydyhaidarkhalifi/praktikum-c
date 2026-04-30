#include <stdio.h>
#include <stdlib.h>

struct Mahasiswa {
   char nama[50];
   int umur;
};

int main() {

   int n;
   printf("Jumlah mahasiswa: ");
   scanf("%d", &n);

   struct Mahasiswa *mhs;

   mhs = (struct Mahasiswa*) malloc(n * sizeof(struct Mahasiswa));

   for(int i = 0; i < n; i++) {
       printf("Nama: ");
       scanf("%s", mhs[i].nama);

       printf("Umur: ");
       scanf("%d", &mhs[i].umur);
   }

   printf("\nData:\n");

   for(int i = 0; i < n; i++) {
       printf("%s %d\n", mhs[i].nama, mhs[i].umur);
   }

   free(mhs);
}
