const Jurusan = require('../models/jurusan');
const Mahasiswa = require('../models/mahasiswa');

// Mendapatkan semua data Jurusan
exports.getAllJurusan = async (req, res) => {
  try {
    const jurusan = await Jurusan.findAll({
      include: [Mahasiswa],
    });
    res.json(jurusan);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Mendapatkan Jurusan berdasarkan ID
exports.getJurusanById = async (req, res) => {
  const { id } = req.params;

  try {
    const jurusan = await Jurusan.findByPk(id, {
      include: [Mahasiswa],
    });
    if (!jurusan) {
      return res.status(404).json({ error: 'Jurusan not found' });
    }
    res.json(jurusan);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Membuat Jurusan baru
exports.createJurusan = async (req, res) => {
  const { namaJurusan } = req.body;

  try {
    const jurusan = await Jurusan.create({
      namaJurusan,
    });
    res.status(201).json(jurusan);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Memperbarui data Jurusan berdasarkan ID
exports.updateJurusan = async (req, res) => {
  const { id } = req.params;
  const { namaJurusan } = req.body;

  try {
    const jurusan = await Jurusan.findByPk(id);
    if (!jurusan) {
      return res.status(404).json({ error: 'Jurusan not found' });
    }

    jurusan.namaJurusan = namaJurusan;

    await jurusan.save();

    res.json(jurusan);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Menghapus Jurusan berdasarkan ID
exports.deleteJurusan = async (req, res) => {
  const { id } = req.params;

  try {
    const jurusan = await Jurusan.findByPk(id);
    if (!jurusan) {
      return res.status(404).json({ error: 'Jurusan not found' });
    }

    await jurusan.destroy();

    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// File `app/controllers/jurusanController.js` merupakan pengendali permintaan terkait Jurusan dalam aplikasi REST API Express.js. Berikut adalah penjelasan untuk setiap fungsi pengendali yang ada di file tersebut:

// 1. `getAllJurusan` merupakan fungsi untuk mendapatkan semua data Jurusan dari database. Fungsi ini menggunakan metode `findAll()` dari model `Jurusan` untuk mengambil semua data Jurusan. Data Jurusan juga mencakup data Mahasiswa terkait karena menggunakan opsi `include: [Mahasiswa]`. Hasilnya dikirim sebagai respons dalam format JSON.

// 2. `getJurusanById` digunakan untuk mendapatkan data Jurusan berdasarkan ID yang diberikan dalam parameter `req.params.id`. Fungsi ini menggunakan metode `findByPk()` dari model `Jurusan` untuk mencari Jurusan dengan ID yang sesuai. Jika Jurusan tidak ditemukan, fungsi ini mengirimkan respons dengan status 404 dan pesan error yang sesuai. Jika ditemukan, data Jurusan beserta data Mahasiswa terkait dikirim sebagai respons dalam format JSON.

// 3. `createJurusan` berfungsi untuk membuat entitas Jurusan baru berdasarkan data yang diterima dalam `req.body`. Fungsi ini menggunakan metode `create()` dari model `Jurusan` untuk membuat Jurusan baru dengan atribut `namaJurusan` yang diterima. Data Jurusan yang baru dibuat dikirim sebagai respons dengan status 201 dalam format JSON.

// 4. `updateJurusan` digunakan untuk memperbarui data Jurusan berdasarkan ID yang diberikan dalam parameter `req.params.id`, dengan data yang diterima dalam `req.body`. Fungsi ini menggunakan metode `findByPk()` dari model `Jurusan` untuk mencari Jurusan dengan ID yang sesuai. Jika Jurusan tidak ditemukan, fungsi ini mengirimkan respons dengan status 404 dan pesan error yang sesuai. Jika ditemukan, data Jurusan diperbarui dengan atribut `namaJurusan` yang diterima dan disimpan menggunakan metode `save()`. Data Jurusan yang diperbarui dikirim sebagai respons dalam format JSON.

// 5. `deleteJurusan` berfungsi untuk menghapus entitas Jurusan berdasarkan ID yang diberikan dalam parameter `req.params.id`. Fungsi ini menggunakan metode `findByPk()` dari model `Jurusan` untuk mencari Jurusan dengan ID yang sesuai. Jika Jurusan tidak ditemukan, fungsi ini mengirimkan respons dengan status 404 dan pesan error yang sesuai. Jika Jurusan ditemukan, entitas Jurusan tersebut dihapus menggunakan metode `destroy()`. Respons dikirim dengan status 204 yang menunjukkan sukses tanpa ada konten dalam respons.

// Semua fungsi pengendali tersebut juga menangani kesalahan internal server dengan mengirimkan respons dengan status 500 dan pesan error yang sesuai jika terjadi kesalahan selama pemrosesan permintaan.
