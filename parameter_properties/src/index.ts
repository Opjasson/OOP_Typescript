class Person {
    // Jika ingin merubah Parameter properties harus menuliskan visibilitynya *public
   constructor (public name: string) {

   }
}

const budi = new Person("jasson")
console.log(budi.name)

budi.name = "jeko"
console.log(budi.name)