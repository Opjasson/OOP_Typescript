class Employee {
    constructor(public name: string) {}
}

class Manager extends Employee {}

class Direktur extends Manager {}

const sayHello = (employee: Employee) => {
    if (employee instanceof Direktur) {
        const direktur = employee as Direktur;
        console.log(`Saya ${direktur.name} sebagai Direktur`);
    } else if (employee instanceof Manager) {
        const manager = employee as Manager;
        console.log(`Saya ${manager.name} sebagai Manager`);
    } else {
        console.log(`Saya ${Employee.name} sebagai employee`);
    }
};

sayHello(new Direktur("jasson"));
sayHello(new Manager("robi"));
sayHello(new Employee("jordy"));
