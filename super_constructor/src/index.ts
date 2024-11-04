class Person {
    name : string;
    constructor(name: string){
        this.name = name
    }
}

class Employee extends Person {
    departement : string;
    constructor(name : string, departement : string){
        super(name)
        this.departement = departement
    }

    sayHello(): string{
        return `Hallo nama saya ${this.name}, saya sebagai ${this.departement}`
    }
}

const budi = new Employee("Budi","Manager");
console.log(budi.sayHello()); 