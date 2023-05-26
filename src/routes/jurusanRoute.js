const express = require('express');
const jurusanController = require('../controllers/jurusanController');

const router = express.Router();

// GET /api/jurusan
router.get('/', jurusanController.getAllJurusan);

// GET /api/jurusan/:id
router.get('/:id', jurusanController.getJurusanById);

// POST /api/jurusan
router.post('/', jurusanController.createJurusan);

// PUT /api/jurusan/:id
router.put('/:id', jurusanController.updateJurusan);

// DELETE /api/jurusan/:id
router.delete('/:id', jurusanController.deleteJurusan);

module.exports = router;

// Penjelasan file:

// 1. Kedua file menggunakan modul `express` untuk membuat objek router dan menentukan rute-rute terkait Mahasiswa dan Jurusan.
// 2. Di `mahasiswaRoutes.js`, kita mengimpor `mahasiswaController` dari `../controllers/mahasiswaController.js`, yang berisi pengendali permintaan terkait Mahasiswa.
// 3. Di `jurusanRoutes.js`, kita mengimpor `jurusanController` dari `../controllers/jurusanController.js`, yang berisi pengendali permintaan terkait Jurusan.
// 4. Setiap rute ditentukan menggunakan `router.<method>(path, controllerFunction)`, di mana `<method>` adalah metode HTTP seperti `get`, `post`, `put`, atau `delete`, `path` adalah jalur URL relatif untuk rute, dan `controllerFunction` adalah fungsi pengendali yang akan dijalankan ketika rute dipanggil.
// 5. Misalnya, `router.get('/', mahasiswaController.getAllMahasiswa)` menentukan rute `GET /api/mahasiswa` yang akan menjalankan fungsi `getAllMahasiswa` dari `mahasiswaController` saat dipanggil.
// 6. Setelah menentukan rute-rute, kita mengekspor router menggunakan `module.exports` agar dapat digunakan dalam file utama aplikasi.

// Pastikan Anda telah membuat pengendali (`mahasiswaController.js` dan `jurusanController.js`) yang sesuai dengan logika dan operasi yang Anda inginkan untuk setiap permintaan. Di pengendali, Anda akan mengakses model-model Mahasiswa dan Jurusan, dan melakukan operasi seperti mengambil data, membuat entitas baru, memperbarui data, atau menghapus entitas.
