const kendaraan = {
  nama: '',
  jumlahRoda: 0,
  berjalan() {
    console.log(`${this.nama} sedang berjalan dengan ${this.jumlahRoda} roda`);
    console.log('--------------');
  },
};

const sepeda = Object.create(kendaraan);
sepeda.nama = 'BMX';
sepeda.jumlahRoda = 2;

console.log(sepeda.nama);
console.log(sepeda.jumlahRoda);
sepeda.berjalan();

const mobil = Object.create(kendaraan);
mobil.nama = 'BMW';
mobil.jumlahRoda = 4;

console.log(mobil.nama);
console.log(mobil.jumlahRoda);
mobil.berjalan();

const bmwe30 = Object.create(mobil);
bmwe30.nama = 'BMW e30';
bmwe30.berjalan();

const motor = Object.create(kendaraan);
motor.nama = 'BMW';
motor.jumlahRoda = 2;

console.log(motor.nama);
console.log(motor.jumlahRoda);
motor.berjalan();

const becak = Object.create(kendaraan);
becak.nama = 'Becak Ucup';
becak.jumlahRoda = 3;

console.log(becak.nama);
console.log(becak.jumlahRoda);
becak.berjalan();
