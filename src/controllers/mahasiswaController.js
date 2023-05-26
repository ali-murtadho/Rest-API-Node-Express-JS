const Mahasiswa = require('../models/mahasiswa');
const Jurusan = require('../models/jurusan');

// Mendapatkan semua data Mahasiswa
exports.getAllMahasiswa = async (req, res) => {
  try {
    const mahasiswa = await Mahasiswa.findAll({
      include: [Jurusan],
    });
    res.json(mahasiswa);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Mendapatkan Mahasiswa berdasarkan ID
exports.getMahasiswaById = async (req, res) => {
  const { id } = req.params;

  try {
    const mahasiswa = await Mahasiswa.findByPk(id, {
      include: [Jurusan],
    });
    if (!mahasiswa) {
      return res.status(404).json({ error: 'Mahasiswa not found' });
    }
    res.json(mahasiswa);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Membuat Mahasiswa baru
exports.createMahasiswa = async (req, res) => {
  const { nama, nim, jurusanId } = req.body;

  try {
    const jurusan = await Jurusan.findByPk(jurusanId);
    if (!jurusan) {
      return res.status(404).json({ error: 'Jurusan not found' });
    }

    const mahasiswa = await Mahasiswa.create({
      nama,
      nim,
      jurusanId,
    });
    res.status(201).json(mahasiswa);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Memperbarui data Mahasiswa berdasarkan ID
exports.updateMahasiswa = async (req, res) => {
  const { id } = req.params;
  const { nama, nim, jurusanId } = req.body;

  try {
    const mahasiswa = await Mahasiswa.findByPk(id);
    if (!mahasiswa) {
      return res.status(404).json({ error: 'Mahasiswa not found' });
    }

    const jurusan = await Jurusan.findByPk(jurusanId);
    if (!jurusan) {
      return res.status(404).json({ error: 'Jurusan not found' });
    }

    mahasiswa.nama = nama;
    mahasiswa.nim = nim;
    mahasiswa.jurusanId = jurusanId;

    await mahasiswa.save();

    res.json(mahasiswa);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Menghapus Mahasiswa berdasarkan ID
exports.deleteMahasiswa = async (req, res) => {
  const { id } = req.params;

  try {
    const mahasiswa = await Mahasiswa.findByPk(id);
    if (!mahasiswa) {
      return res.status(404).json({ error: 'Mahasiswa not found' });
    }

    await mahasiswa.destroy();

    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Penjelasan file:

// 1. File ini mengimpor model Mahasiswa dan Jurusan dari direktori ../models.
// 2. getAllMahasiswa mengambil semua data Mahasiswa dari database menggunakan metode findAll() dari model `Mahasiswa`. Data Mahasiswa juga mencakup data Jurusan terkait, karena kita menggunakan opsi include: [Jurusan] dalam metode findAll(). Hasilnya dikirim sebagai respons dalam format JSON.

// 3. `getMahasiswaById` mengambil data Mahasiswa berdasarkan ID yang diberikan dalam parameter `req.params.id`. Metode `findByPk()` dari model `Mahasiswa` digunakan untuk mencari Mahasiswa dengan ID yang sesuai. Jika Mahasiswa tidak ditemukan, fungsi ini mengirimkan respons dengan status 404 dan pesan error yang sesuai. Jika ditemukan, data Mahasiswa beserta data Jurusan terkait dikirim sebagai respons dalam format JSON.

// 4. `createMahasiswa` membuat entitas Mahasiswa baru berdasarkan data yang diterima dalam `req.body`. Pertama, kita mencari Jurusan yang sesuai berdasarkan `jurusanId` yang diterima. Jika Jurusan tidak ditemukan, fungsi ini mengirimkan respons dengan status 404 dan pesan error yang sesuai. Jika Jurusan ditemukan, kita membuat Mahasiswa baru menggunakan metode `create()` dari model `Mahasiswa` dengan atribut `nama`, `nim`, dan `jurusanId`. Data Mahasiswa yang baru dibuat dikirim sebagai respons dengan status 201 dalam format JSON.

// 5. `updateMahasiswa` memperbarui data Mahasiswa berdasarkan ID yang diberikan dalam parameter `req.params.id` dengan data yang diterima dalam `req.body`. Pertama, kita mencari Mahasiswa yang sesuai berdasarkan ID. Jika Mahasiswa tidak ditemukan, fungsi ini mengirimkan respons dengan status 404 dan pesan error yang sesuai. Selanjutnya, kita mencari Jurusan yang sesuai berdasarkan `jurusanId` yang diterima. Jika Jurusan tidak ditemukan, fungsi ini mengirimkan respons dengan status 404 dan pesan error yang sesuai. Jika Mahasiswa dan Jurusan ditemukan, kita memperbarui atribut Mahasiswa yang sesuai dengan data yang diterima. Setelah itu, data Mahasiswa yang diperbarui dikirim sebagai respons dalam format JSON.

// 6. `deleteMahasiswa` menghapus entitas Mahasiswa berdasarkan ID yang diberikan dalam parameter `req.params.id`. Jika Mahasiswa tidak ditemukan, fungsi ini mengirimkan respons dengan status 404 dan pesan error yang sesuai. Jika Mahasiswa ditemukan, kita menggunakan metode `destroy()` untuk menghapus Mahasiswa. Respons dikirim dengan status 204 yang menunjukkan sukses tanpa ada konten dalam respons.

// Semua fungsi pengendali ini menangani kesalahan internal server dengan mengirimkan respons dengan status 500 dan pesan error yang sesuai jika terjadi kesalahan selama pemrosesan permintaan.
