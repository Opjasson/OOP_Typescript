"use strict";
// Contoh Polymorphism atau inheritance/pewarisan
class BangungDatar {
    constructor(name) {
        this.name = name;
    }
}
class Persegi extends BangungDatar {
}
class Segitiga extends Persegi {
}
let BangunKotak = new BangungDatar("bangun kotak");
console.log(BangunKotak);
BangunKotak = new Persegi("bangun kotak");
console.log(BangunKotak);
BangunKotak = new Segitiga("bangun kotak");
console.log(BangunKotak);
