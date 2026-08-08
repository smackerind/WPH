"use strict";

// MEMBACA INPUT USER DI TERMINAL (node.js)
const prompt = require("prompt-sync")({ sigint: true });

// OPERASI MATEMATIKA
function penjumlahan(a, b) {
    return a + b;
}

function pengurangan(a, b) {
    return a - b;
}

function perkalian(a,b){
    return a * b;
}

function pangkat(a,b){
    return a ** b;
}

function pembagian(a,b){
    if (b === 0) {
        console.log("Error: Pembagian dengan nol tidak diperbolehkan.");
        return 'notApplicable';
    }
    return a / b;
}

function modulo(a,b){
    if (b === 0) {
        console.log("Error: Modulo dengan nol tidak diperbolehkan.");
        return 'Not Applicable';
    }
    return a % b;
}

// PENGECEKAN USER INPUT ANGKA YANG SESUAI
function mintaAngka(pesan){
    while (true){
        const input = prompt(pesan);
        const angka = Number(input);
        if (input !== null && input.trim() !== "" && !isNaN(angka)){
            return angka;
        }
    console.log(" input tidak valid. Masukkan angka yang bener.\n");
    }
}

// MEMILIH OPERATOR YANG SESUAI
function mintaOperator(){
    const operatorValid = ["+","-","*","**","/","%"];
    while (true){
        const op = prompt ("\n Pilih operator '+' atau '-' atau '*' atau '**' atau '/' atau '%' :");
        if (operatorValid.includes(op)) {
            return op;
        }
        console.log("Operator tidak valid. Silakan pilih operator yang benar.(+,-,*,**,/,%)");
    }
}

// ANALISA HASIL
function analisisHasil(hasil){
    console.log("--------Analisa Hasil--------");

    if (typeof hasil === "number"){
        const tanda = hasil > 0 ? "positif" : hasil < 0 ? "negatif" : "nol";
        const jenis = Number.isInteger(hasil) ? "Bilangan Bulat / Integer" : "Bilangan Desimal";

        console.log (" Tipe Data Hasil : " + typeof hasil);
        console.log (" Tanda           : " + tanda);
        console.log (" Jenis           : " + jenis);

        if (Number.isInteger(hasil)){
            const genapGanjil = hasil % 2 === 0 ? "Genap" : "Ganjil";
            console.log (" Genap / Ganjil  : " + genapGanjil);
        }
    }
        else if (typeof hasil === "string"){
         console.log("Warning " + hasil);
        }
        else {
            const pesan = hasil ?? "Tidak Ada Hasil (Null/Undefined)";
            console.log(" " + pesan);
        }
}

// TAMPILAN MENU UTAMA
console.log("=================================");
console.log("   KALKULATOR INTERAKTIF (CLI)");
console.log("=================================");
console.log('Ketik "no" saat ditanya untuk berhenti.');

while(true) {
const a = mintaAngka("Masukkan angka pertama :");
const op = mintaOperator();
const b = mintaAngka("Masukkan angka kedua:");

// MEMERIKSA OPERTOR YANG DIBERIKAN USER DAN MEMBERIKAN HASILNYA
let hasil;
    switch (op) {
        case "+": hasil = penjumlahan(a,b);
        break;
        case "-": hasil = pengurangan(a,b);
        break;
        case "*": hasil = perkalian(a,b);
        break;
        case "**": hasil = pangkat(a,b);
        break;
        case "/": hasil = pembagian(a,b);
        break;
        case "%": hasil = modulo(a,b);
        break;
        default: hasil = "Operator tidak valid.";
    }

    // HASIL PERHITUNGAN
    console.log("\n " +a+ " " +op+ " " +b+ " = " +hasil+ "\n");

    analisisHasil(hasil);

    //EXIT
    const lanjut = prompt('\n Apakah lanjut hitung lagi ? (Yes/No): ');
    if (lanjut !== null && ['No','NO','no','n','o','nO'].includes (lanjut.trim().toLowerCase()) ) {
        console.log("\n Terima kasih telah menggunakan kalkulator. Sampai jumpa kembali");
        break;
    }
    console.log("");
}