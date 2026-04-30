# Program Hitung Rata-rata Sederhana

print("="*40)
print("   PROGRAM HITUNG RATA-RATA")
print("="*40)

# Input jumlah data
n = int(input("Masukkan jumlah data: "))

# Inisialisasi variabel
total = 0

# Input data satu per satu
for i in range(1, n + 1):
    nilai = float(input(f"Masukkan data ke-{i}: "))
    total += nilai

# Hitung rata-rata
rata_rata = total / n

# Tampilkan hasil
print("\n" + "="*40)
print(f"Total seluruh data: {total}")
print(f"Jumlah data: {n}")
print(f"Rata-rata: {rata_rata:.2f}")
print("="*40)
