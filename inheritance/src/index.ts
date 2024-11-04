// Inheritance
class Employee {
    constructor (private firstName: string,private lastName: string, private job: string){}
    getFullName() : string{
        return `Hallo nama saya ${this.firstName} ${this.lastName} saya sebagai ${this.job}`
    }
}

class Manager extends Employee{
    constructor(firstName: string,lastName: string,job : string){
        super(firstName,lastName,job)
    }
}

const budi = new Manager("budi","setiadi","Manager")
console.log(budi.getFullName()) 
