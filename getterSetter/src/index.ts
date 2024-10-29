class Get_Set{
    private _name : string = "Jasson";
    
    public get name() : string {
        if(this._name){
            return this._name;
        }else {
            return "empty"
        }
    }

    
    public set Name(v : string) {
        if(v !== ""){
            this._name = v
        }
    }
}

// Getter dan setter bisa digunakan saat property bersifat private unntuk mendapatkan data dan set data
let getterSetter = new Get_Set()
console.log(getterSetter.name)
getterSetter.Name = "rudi"
console.log(getterSetter.name)

