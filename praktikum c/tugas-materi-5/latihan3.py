# Program Loop 1-100 dengan Format Rapi

print("="*40)
print("   LOOP ANGKA 1-100 (TABEL)")
print("="*40)

# Tampilkan dalam 10 kolom
for i in range(1, 101):
    print(f"{i:4}", end=" ")
    if i % 10 == 0:
        print()  # Pindah baris setiap 10 angka