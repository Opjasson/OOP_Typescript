"use strict";
class Car {
    // Jika tidak diberi console log tidak akan tercetak/ akan tercetak sebagai objeck
    constructor(merek, harga) {
        this.merek = merek;
        this.harga = harga;
        console.log(`Merek mobil ${merek} harga ${harga}`);
    }
}
const pajero = new Car("Pajero", 15000);
// pajero.harga mengambil property Car
pajero.harga = 20000;
console.log(pajero);
// Default value
class Makanan {
    constructor(harga) {
        this.nama = "nasi goreng";
        this.harga = harga;
        console.log("Nama makanan " + this.nama + " Harga " + harga);
    }
}
const pesan = new Makanan(20000);
console.log(pesan);
