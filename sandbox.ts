// any type

 let age: any = 25

 age = true
 console.log(age);
 age = 'hello'
 console.log(age);
 age = {name: 'sammie'}
 console.log(age);
 
 let mixed: any [] = []
 mixed.push(24)
 mixed.push('sammie')
 mixed.push(true)
 console.log(mixed);

 let ninja: {name: any, age: any }
 ninja = {name: 'sammie', age: 20}
 console.log(ninja);
 
 