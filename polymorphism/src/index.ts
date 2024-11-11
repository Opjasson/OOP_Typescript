// Contoh Polymorphism

class BangungDatar {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
}

class Persegi extends BangungDatar {}

class Segitiga extends Persegi {}

let BangunKotak: BangungDatar = new BangungDatar("bangun kotak");
console.log(BangunKotak);

BangunKotak = new Persegi("bangun kotak");
console.log(BangunKotak);

BangunKotak = new Segitiga("bangun kotak");
console.log(BangunKotak);
