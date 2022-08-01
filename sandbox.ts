// explicit types
let character: string;
let age: number;
let isLoggedIn: boolean

age = 30

isLoggedIn = true

character = 'sammie'

//arrays
 let  sammie: string[] = []
 let oldage: number[] = []
sammie.push('yosh')
oldage.push[23]

//  sammie = ['sammie']

//union types for array we need ()
let mixed: (string|number|boolean)[]=[]
mixed.push('manu')
mixed.push(23)
mixed.push(true)
console.log(mixed);

let mid: string|boolean
mid='sammie'
mid= true



//objects
let sammieOne: object
sammieOne = {name:'abigirl', age: 18}

let sammieTwo: {
    name: string,
    age: number,
    beltColor: string
}
sammieTwo={name: 'lama',age: 20, beltColor: 'green'}