// Inheritance
class Template {
    constructor (private firstName: string,private lastName: string, private job: string){}
    getFullName() : string{
        return `Hallo nama saya ${this.firstName} ${this.lastName}, saya sebagai ${this.job}`
    }
}

class Employee extends Template{
    
}

const budi = new Employee("budi","setiadi","Manager")
console.log(budi.getFullName())

