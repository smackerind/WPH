class Kendaraan {
  constructor(nama, jumlahRoda) {
    this.nama = nama;
    this.jumlahRoda = jumlahRoda;
  }

  berjalan() {
    console.log(`${this.nama} sedang berjalan dengan ${this.jumlahRoda} roda`);
    console.log('--------------');
  }
}

const motor = new Kendaraan('R15', 2);
motor.berjalan();

const mobil = new Kendaraan('BMW', 4);
mobil.berjalan();

class Person {
  greet() {}
}

const budi = new Person();

console.log(Object.getPrototypeOf(budi) === Person.prototype);
