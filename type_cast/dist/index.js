"use strict";
class Employee {
    constructor(name) {
        this.name = name;
    }
}
class Manager extends Employee {
}
class Direktur extends Manager {
}
const sayHello = (employee) => {
    if (employee instanceof Direktur) {
        const direktur = employee;
        console.log(`Saya ${direktur.name} sebagai Direktur`);
    }
    else if (employee instanceof Manager) {
        const manager = employee;
        console.log(`Saya ${manager.name} sebagai Manager`);
    }
    else {
        console.log(`Saya ${Employee.name} sebagai employee`);
    }
};
sayHello(new Direktur("jasson"));
sayHello(new Manager("robi"));
sayHello(new Employee("jordy"));
