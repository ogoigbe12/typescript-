// function signatures

//example 1
let greet: (a: string, b: string) => void

greet= (name: string, greeting: string)=>{
    console.log(`${name} say hello, ${greeting}`)
}

//example 2
let calc: (a: number, b: number, c: string) => number

calc= (numOne: number, numTwo: number, action: string)=>{
    if(action === 'add'){
        return numOne + numTwo
    }else{
        return numOne - numTwo
    }
    
}

//example3
let logDetials: (obj: {name: string, age: number})=> void

type person = {name: string, age: number}

logDetials= (sammie:person) => {
    console.log(`${sammie.name} is ${sammie.age} years old`)
}