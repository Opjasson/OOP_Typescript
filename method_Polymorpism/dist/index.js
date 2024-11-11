"use strict";
class Emloyee {
    constructor(name) {
        this.name = name;
    }
}
class Manager extends Emloyee {
}
class Direktur extends Manager {
}
function sayHello(name) {
    console.log(`Hallo nama saya ${name.name}`);
}
sayHello(new Emloyee("jasson"));
sayHello(new Manager("jasson"));
sayHello(new Direktur("Jasson"));
