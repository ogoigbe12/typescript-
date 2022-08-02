// type aliases
type StringorNum = string|Number
type objwithNum = {name:string, uid: string|number}


const longDetails = (uid: StringorNum, item: string)=>{
    console.log(`${item} has a uid of ${uid}`)
}

const greet = (user: objwithNum)=>{
    console.log(`${user. name} says hi`);
    
}