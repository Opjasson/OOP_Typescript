class Perkenalan {
    name : string;
    kelas : number;

    constructor(name: string, kelas: number){
        this.name = name;
        this.kelas = kelas;
    }

    sayHello(name : string): void{
        console.log(`Hallo nama saya ${name} kelas ${this.kelas}`)
    }
}

const kenalan = new Perkenalan("jasson",12)
kenalan.sayHello("jasson")
