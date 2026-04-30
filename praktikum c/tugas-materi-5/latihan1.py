# Program Konversi Suhu
# Mendukung: Celcius, Fahrenheit, Kelvin, Reamur

def tampilkan_menu():
    """Menampilkan menu utama"""
    print("\n" + "="*40)
    print("     PROGRAM KONVERSI SUHU")
    print("="*40)
    print("1. Celcius ke Fahrenheit")
    print("2. Celcius ke Kelvin")
    print("3. Celcius ke Reamur")
    print("4. Fahrenheit ke Celcius")
    print("5. Fahrenheit ke Kelvin")
    print("6. Fahrenheit ke Reamur")
    print("7. Kelvin ke Celcius")
    print("8. Kelvin ke Fahrenheit")
    print("9. Kelvin ke Reamur")
    print("10. Reamur ke Celcius")
    print("11. Reamur ke Fahrenheit")
    print("12. Reamur ke Kelvin")
    print("0. Keluar")
    print("="*40)

def konversi_celcius():
    """Konversi dari Celcius"""
    print("\n--- Konversi dari Celcius ---")
    c = float(input("Masukkan suhu dalam Celcius: "))
    
    f = (c * 9/5) + 32
    k = c + 273.15
    r = c * 4/5
    
    print("\n=== HASIL KONVERSI ===")
    print(f"{c}°C = {f:.2f}°F")
    print(f"{c}°C = {k:.2f}K")
    print(f"{c}°C = {r:.2f}°Ré")

def konversi_fahrenheit():
    """Konversi dari Fahrenheit"""
    print("\n--- Konversi dari Fahrenheit ---")
    f = float(input("Masukkan suhu dalam Fahrenheit: "))
    
    c = (f - 32) * 5/9
    k = (f - 32) * 5/9 + 273.15
    r = (f - 32) * 4/9
    
    print("\n=== HASIL KONVERSI ===")
    print(f"{f}°F = {c:.2f}°C")
    print(f"{f}°F = {k:.2f}K")
    print(f"{f}°F = {r:.2f}°Ré")

def konversi_kelvin():
    """Konversi dari Kelvin"""
    print("\n--- Konversi dari Kelvin ---")
    k = float(input("Masukkan suhu dalam Kelvin: "))
    
    if k < 0:
        print("⚠️  Peringatan: Suhu Kelvin tidak boleh negatif!")
    
    c = k - 273.15
    f = (k - 273.15) * 9/5 + 32
    r = (k - 273.15) * 4/5
    
    print("\n=== HASIL KONVERSI ===")
    print(f"{k}K = {c:.2f}°C")
    print(f"{k}K = {f:.2f}°F")
    print(f"{k}K = {r:.2f}°Ré")

def konversi_reamur():
    """Konversi dari Reamur"""
    print("\n--- Konversi dari Reamur ---")
    r = float(input("Masukkan suhu dalam Reamur: "))
    
    c = r * 5/4
    f = (r * 9/4) + 32
    k = (r * 5/4) + 273.15
    
    print("\n=== HASIL KONVERSI ===")
    print(f"{r}°Ré = {c:.2f}°C")
    print(f"{r}°Ré = {f:.2f}°F")
    print(f"{r}°Ré = {k:.2f}K")

def konversi_single():
    """Konversi single (satu jenis konversi saja)"""
    print("\n" + "="*40)
    print("      KONVERSI SINGLE")
    print("="*40)
    print("1. Celcius → Fahrenheit")
    print("2. Celcius → Kelvin")
    print("3. Celcius → Reamur")
    print("4. Fahrenheit → Celcius")
    print("5. Kelvin → Celcius")
    print("6. Reamur → Celcius")
    
    pilihan = input("\nPilih konversi (1-6): ")
    
    if pilihan == '1':
        c = float(input("Celcius: "))
        f = (c * 9/5) + 32
        print(f"\n{c}°C = {f:.2f}°F")
    
    elif pilihan == '2':
        c = float(input("Celcius: "))
        k = c + 273.15
        print(f"\n{c}°C = {k:.2f}K")
    
    elif pilihan == '3':
        c = float(input("Celcius: "))
        r = c * 4/5
        print(f"\n{c}°C = {r:.2f}°Ré")
    
    elif pilihan == '4':
        f = float(input("Fahrenheit: "))
        c = (f - 32) * 5/9
        print(f"\n{f}°F = {c:.2f}°C")
    
    elif pilihan == '5':
        k = float(input("Kelvin: "))
        c = k - 273.15
        print(f"\n{k}K = {c:.2f}°C")
    
    elif pilihan == '6':
        r = float(input("Reamur: "))
        c = r * 5/4
        print(f"\n{r}°Ré = {c:.2f}°C")
    
    else:
        print("❌ Pilihan tidak valid!")

def main():
    """Fungsi utama program"""
    print("\n" + "="*40)
    print("   SELAMAT DATANG DI")
    print("   PROGRAM KONVERSI SUHU")
    print("="*40)
    
    while True:
        tampilkan_menu()
        pilihan = input("\nMasukkan pilihan Anda (0-12): ")
        
        if pilihan == '1':
            konversi_celcius()
        elif pilihan == '2':
            konversi_fahrenheit()
        elif pilihan == '3':
            konversi_kelvin()
        elif pilihan == '4':
            konversi_reamur()
        elif pilihan == '5':
            konversi_single()
        elif pilihan == '0':
            print("\nTerima kasih telah menggunakan program ini!")
            print("Sampai jumpa! 👋")
            break
        else:
            print("\n❌ Pilihan tidak valid! Silakan coba lagi.")
        
        # Tanya apakah ingin melanjutkan
        if pilihan != '0':
            lanjut = input("\nIngin konversi lagi? (y/n): ").lower()
            if lanjut != 'y':
                print("\nTerima kasih! Sampai jumpa! 👋")
                break

# Menjalankan program
if __name__ == "__main__":
    main()