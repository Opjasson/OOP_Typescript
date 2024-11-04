"use strict";
// Inheritance
class Template {
    constructor(firstName, lastName, job) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.job = job;
    }
    getFullName() {
        return `Hallo nama saya ${this.firstName} ${this.lastName} saya sebagai ${this.job}`;
    }
}
class Employee extends Template {
}
const budi = new Employee("budi", "setiadi", "Manager");
console.log(budi.getFullName());
