class Sayhello {
    constructor(){
        console.log("Hallo Newbie")
    }
}



class Perkenalan {
    readonly id : number;
    nama : string;
    // parameter constructor bisa langsung digunakan atau bisa di inisialisasikan dahulu dengan type properti
    constructor(nama : string, id : number ){
        this.nama = nama
        this.id = id
        console.log(`Hallo nama saya ${nama} nomor ${id}`)
    }
}

new Perkenalan("Jasson", 3)
new Sayhello()
