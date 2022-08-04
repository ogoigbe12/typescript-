//interfaces test code
interface IsPerson {
    name: string,
    age: number,
    speak(a: string): void
    spend(b: number): number
}

const me: IsPerson ={
    name: 'sammie',
    age: 27,
    speak(text: string): void{
        console.log(text)
    },
    spend(amount: number): number{
        console.log('i spent', amount)
        return amount
    }
}

const greetPerson = (person: IsPerson) => {
    console.log('hello', person.name)
}
greetPerson(me)
console.log(me);
