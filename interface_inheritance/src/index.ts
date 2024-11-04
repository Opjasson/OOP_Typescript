interface nama {
    name: string;
}

interface canSayHello {
    sayHello(name: string): void;
}

class Person implements nama, canSayHello {
    name: string;

    constructor(name : string){
        this.name = name
    }

    sayHello(name: string): void {
        console.log(`Hallo ${name}, my name is ${this.name}`)
    }
}

const budi = new Person("Budi darmawangi")
budi.sayHello("jordy")
