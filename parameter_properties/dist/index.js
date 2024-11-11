"use strict";
class Person {
    // Jika ingin merubah Parameter properties harus menuliskan visibilitynya *public
    constructor(name) {
        this.name = name;
    }
}
const budi = new Person("jasson");
console.log(budi.name);
budi.name = "jeko";
console.log(budi.name);
