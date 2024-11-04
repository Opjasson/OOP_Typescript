"use strict";
class Person {
    constructor(name) {
        this.name = name;
    }
}
class Employee extends Person {
    constructor(name, departement) {
        super(name);
        this.departement = departement;
    }
    sayHello() {
        return `Hallo nama saya ${this.name}, saya sebagai ${this.departement}`;
    }
}
const budi = new Employee("Budi", "Manager");
console.log(budi.sayHello());
