const express = require('express');
const bodyParser = require('body-parser');
const mahasiswaRoutes = require('./src/routes/mahasiswaRoute');
const jurusanRoutes = require('./src/routes/jurusanRoute');

const app = express();

// Menggunakan middleware untuk parsing body request dalam format JSON
app.use(bodyParser.json());

// Menggunakan routes untuk Mahasiswa dan Jurusan
app.use('/api/mahasiswa', mahasiswaRoutes);
app.use('/api/jurusan', jurusanRoutes);

// Menjalankan server pada port tertentu
const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port http://localhost:${port}`);
});

// Penjelasan file:

// 1. File ini mengimpor modul `express` dan `body-parser` untuk keperluan aplikasi Express.js.
// 2. Membuat instance dari aplikasi Express dengan `const app = express()`.
// 3. Menggunakan middleware `body-parser` dengan `app.use(bodyParser.json())` untuk mem-parsing body request dalam format JSON.
// 4. Menggunakan routes yang telah didefinisikan untuk Mahasiswa dan Jurusan dengan `app.use('/api/mahasiswa', mahasiswaRoutes)` dan `app.use('/api/jurusan', jurusanRoutes)`. Hal ini mengarahkan permintaan yang masuk pada rute yang sesuai.
// 5. Menjalankan server dengan memanggil metode `listen()` pada aplikasi Express dengan menentukan port yang digunakan. Dalam contoh ini, server berjalan di port 3000. Pesan `Server running on port 3000` akan ditampilkan di konsol saat server berhasil dijalankan.

// Dengan demikian, file `index.js` ini bertanggung jawab untuk menjalankan aplikasi Express.js dan menghubungkan rute-rute yang telah didefinisikan.
