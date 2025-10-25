# Marker AR untuk Demo
Proyek ini menggunakan **preset marker 'hiro'** dari AR.js, sehingga Anda tidak perlu file .patt lokal.
Langkah penggunaan:
1) Buka `sdg13.html` dari ponsel dan izinkan kamera.
2) Tampilkan marker 'hiro' di layar lain atau cetak (pola kotak hitam klasik).
3) Arahkan kamera ke marker tersebut untuk memunculkan objek AR.

Saat siap membuat marker khusus (mis. logo SDGs 13), gunakan generator pola AR.js untuk membuat file `.patt`
dan ganti elemen `<a-marker preset="hiro">` menjadi `<a-marker type="pattern" url="assets/markers/custom.patt">`.