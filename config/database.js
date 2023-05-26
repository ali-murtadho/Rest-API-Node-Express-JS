//
const sequelize = require('../src/utils/db');

const Mahasiswa = require('../src/models/mahasiswa');
const Jurusan = require('../src/models/jurusan');

// Mahasiswa.belongsTo(Jurusan, { foreignKey: 'jurusanId' });
// Jurusan.hasMany(Mahasiswa, { foreignKey: 'jurusanId' });

// Sync models with the database
sequelize
  .sync({ force: false })
  .then(() => {
    console.log('Database synced');
  })
  .catch((error) => {
    console.error('Error syncing database:', error);
  });

// config/database.js berisi konfigurasi dan sinkronisasi model-model dengan database menggunakan Sequelize.

// Pertama, kita mengimpor objek sequelize dari file app/utils/db.js.

// Kemudian, kita mengimpor model-model yang akan digunakan (misalnya, Mahasiswa dan Jurusan).

// Berdasarkan hubungan antara model Mahasiswa dan Jurusan (misalnya, one-to-many), kita mendefinisikan asosiasi antara kedua model tersebut.
