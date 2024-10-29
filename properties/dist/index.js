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
