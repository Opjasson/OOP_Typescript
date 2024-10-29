class Car {
    merek : string;
    harga : number;

    // Jika tidak diberi console log tidak akan tercetak/ akan tercetak sebagai objeck
    constructor(merek: string, harga: number){
        this.merek = merek;
        this.harga = harga;
        console.log(`Merek mobil ${merek} harga ${harga}`)
    }
}

const pajero = new Car("Pajero",15000);
// pajero.harga mengambil property Car
pajero.harga = 20000;

console.log(pajero)

// Default value

class Makanan {
    nama : string = "nasi goreng";
    harga : number;

    
    constructor(harga: number){
        this.harga = harga
        // this untuk mengakses property class
        // bisa langsung mencetak properti didalam constructor langsung
        console.log("Nama makanan " + this.nama + " Harga " + harga)
    }
}

const pesan = new Makanan(20000)
console.log(pesan)
