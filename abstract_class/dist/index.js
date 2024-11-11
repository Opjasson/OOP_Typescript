"use strict";
class Emloyee {
    constructor(id) {
        this.id = id;
    }
}
class SuperEmloyee extends Emloyee {
    constructor(id, name) {
        super(id);
        this.name = name;
    }
    sayHello(name) {
        console.log(`hallo nama saya ${name}`);
    }
}
const budi = new SuperEmloyee(2, "jasson");
console.log(budi.id);
budi.sayHello("jasson");
