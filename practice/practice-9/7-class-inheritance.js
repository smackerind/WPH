class Person {
  constructor(nama, umur) {
    this.nama = nama;
    this.umur = umur;
  }

  berbicara() {
    console.log(`${this.nama} sedang berbicara.....`);
  }
}

class Student extends Person {
  constructor(nama, umur, nis) {
    super(nama, umur);
    this.nis = nis;
  }

  printNIS() {
    console.log(this.nis + '\n' + this.umur);
    console.log('----------------------------------');
  }
}

const budi = new Student('Budi', 12, '12391239132');
budi.berbicara();
budi.printNIS();

const rudi = new Student('Rudi', 23, '1291239192');
rudi.berbicara();
rudi.printNIS();

class Teacher extends Person {
  constructor(nama, nik) {
    super(nama);
    this.nik = nik;
  }

  printNIK() {
    console.log(this.nik);
    console.log('----------------------------------');
  }
}

const dicky = new Teacher('Dicky', '12319239132');
dicky.berbicara();
dicky.printNIK();
