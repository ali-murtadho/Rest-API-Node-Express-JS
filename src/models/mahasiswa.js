const { DataTypes } = require('sequelize');
const sequelize = require('../utils/db');
const Jurusan = require('./jurusan');

const Mahasiswa = sequelize.define('Mahasiswa', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nama: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  nim: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
  },
});

Mahasiswa.belongsTo(Jurusan, { foreignKey: 'jurusanId' });
Jurusan.hasMany(Mahasiswa, { foreignKey: 'jurusanId' });

module.exports = Mahasiswa;

/*
Penjelasan file:

1. Di kedua file, kita mengimpor `DataTypes` dari Sequelize dan objek `sequelize` dari file `app/utils/db.js`.
2. Di `app/models/jurusan.js`, kita mendefinisikan model `Jurusan` menggunakan `sequelize.define()`. Model ini memiliki kolom `id` sebagai primary key yang auto-increment, `namaJurusan` sebagai nama jurusan, `createdAt` dan `updatedAt` sebagai kolom tanggal pembuatan dan pembaruan.
3. Di `app/models/mahasiswa.js`, kita mendefinisikan model `Mahasiswa` yang memiliki kolom yang sama seperti yang Anda berikan: `id`, `nama`, `nim`, `createdAt`, dan `updatedAt`.
4. Kita juga mengimpor model `Jurusan` dari file `app/models/jurusan.js` untuk menentukan hubungan antara Mahasiswa dan Jurusan.
5. Menggunakan `Mahasiswa.belongsTo(Jurusan, { foreignKey: 'jurusanId' })`, kita menentukan bahwa Mahasiswa memiliki relasi many-to-one dengan Jurusan, dengan `jurusanId` sebagai foreign key di tabel Mahasiswa.
6. Sebaliknya, menggunakan `Jurusan.hasMany(Mahasiswa, { foreignKey: 'jurusanId' })`, kita menentukan bahwa Jurusan memiliki relasi one-to-many dengan Mahasiswa.
7. Akhirnya, kita mengimpor model `Mahasiswa` dan `Jurusan` dari modul ini.

Pastikan model-model ini sesuai dengan struktur tabel yang diinginkan dalam database Anda. Anda juga dapat menambahkan kolom-kolom atau relasi tambahan sesuai dengan kebutuhan aplikasi Anda.
*/
