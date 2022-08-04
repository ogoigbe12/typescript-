//GENERICS

const addUID = <T extends {name: string}>(obj: T)=>{
    let uid = Math.floor(Math.random()*100)
    return {...obj, uid}
}

let docOne = addUID({name:'sammie', age: 26})

console.log(docOne.age);

//GENERICS WITH interfaces
interface Resource<T>{
    uid: number
    resorceName: string
    data: T
}

const docThree: Resource<object> ={
    uid: 1,
    resorceName: 'person',
    data: {name: 'sammie'}

}

const docFour: Resource<string[]> = {
    uid: 2,
    resorceName: 'soccer list',
    data: ['boot', 'short', 'top' ]
}
console.log(docThree, docFour);
