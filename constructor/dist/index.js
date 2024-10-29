"use strict";
class Sayhello {
    constructor() {
        console.log("Hallo Newbie");
    }
}
class Perkenalan {
    constructor(nama, id) {
        this.nama = nama;
        this.id = id;
        console.log(`Hallo nama saya ${nama} nomor ${id}`);
    }
}
new Perkenalan("Jasson", 3);
new Sayhello();
