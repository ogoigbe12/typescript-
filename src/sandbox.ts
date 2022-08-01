//function
let greet: Function

greet = () => {
    console.log('hello,again');
}
greet()

const add = (a: number, b: number, c: string|number = 10): void => {
    console.log(a + b)
    console.log(c);
    
} 
add(5, 24, '20')

const minus = (a: number, b: number): number =>{
    return a + b
}
let result = minus(10,24)
