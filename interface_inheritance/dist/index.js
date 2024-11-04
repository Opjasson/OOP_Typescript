"use strict";
class Person {
    constructor(name) {
        this.name = name;
    }
    sayHello(name) {
        console.log(`Hallo ${name}, my name is ${this.name}`);
    }
}
const budi = new Person("Budi darmawangi");
budi.sayHello("jordy");
