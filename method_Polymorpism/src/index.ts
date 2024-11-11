class Emloyee {
    constructor(public name: string) {}
}

class Manager extends Emloyee {}

class Direktur extends Manager {}

function sayHello(name: Emloyee) {
    console.log(`Hallo nama saya ${name.name}`);
}

sayHello(new Emloyee("jasson"));
sayHello(new Manager("jasson"));
sayHello(new Direktur("Jasson"))