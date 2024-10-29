"use strict";
class Get_Set {
    constructor() {
        this._name = "Jasson";
    }
    get name() {
        if (this._name) {
            return this._name;
        }
        else {
            return "empty";
        }
    }
    set Name(v) {
        if (v !== "") {
            this._name = v;
        }
    }
}
let getterSetter = new Get_Set();
console.log(getterSetter.name);
getterSetter.Name = "rudi";
console.log(getterSetter.name);
