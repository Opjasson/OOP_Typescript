abstract class Emloyee {
    readonly id : number;
    abstract name : string;

    constructor(id : number){
        this.id = id
    }
    
    abstract sayHello(name : string): void;

}

class SuperEmloyee extends Emloyee{
    name: string;

    constructor(id : number,name : string){
        super(id);
        this.name = name
    }

    sayHello(name: string): void {
        console.log(`hallo nama saya ${name}`)
    }
}

const budi = new SuperEmloyee(2, "jasson")
console.log(budi.id)

budi.sayHello("jasson")