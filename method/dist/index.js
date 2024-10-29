"use strict";
class Perkenalan {
    constructor(name, kelas) {
        this.name = name;
        this.kelas = kelas;
    }
    sayHello(name) {
        console.log(`Hallo nama saya ${name} kelas ${this.kelas}`);
    }
}
const kenalan = new Perkenalan("jasson", 12);
kenalan.sayHello("jasson");
console.log(kenalan);
