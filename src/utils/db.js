// const mysql = require('mysql');
// // require('dotenv').config();

// const db = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: '',
//   database: 'db_mahasiswa',
// });

// db.connect((error) => {
//   if (error) {
//     console.error('Gagal menyambungkan ke database: ', error);
//   } else {
//     console.log('Berhasil menyambungkan ke database');
//   }
// });

// module.exports = db;

const Sequelize = require('sequelize');
const sequelize = new Sequelize({
  database: 'db_mahasiswa',
  username: 'root',
  password: '',
  host: 'localhost',
  port: 3306,
  dialect: 'mysql',
});

module.exports = sequelize;

//   Penjelasan file:

// app/utils/db.js berisi konfigurasi koneksi ke database MySQL menggunakan Sequelize.

// Di dalamnya, kita menggunakan Sequelize untuk membuat objek sequelize yang mewakili koneksi ke database.

// Konfigurasi seperti nama database, username, password, host, port, dan dialect (mysql) disesuaikan dengan pengaturan database MySQL Anda.

// Objek sequelize diekspor agar dapat digunakan di tempat lain dalam aplikasi.
