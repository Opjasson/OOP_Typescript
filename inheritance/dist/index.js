"use strict";
// Inheritance
class Employee {
    constructor(firstName, lastName, job) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.job = job;
    }
    getFullName() {
        return `Hallo nama saya ${this.firstName} ${this.lastName} saya sebagai ${this.job}`;
    }
}
class Manager extends Employee {
    constructor(firstName, lastName, job) {
        super(firstName, lastName, job);
    }
}
const budi = new Manager("budi", "setiadi", "Manager");
console.log(budi.getFullName());
