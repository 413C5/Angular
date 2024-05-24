//When putting a type with a function, we are definyng the return data type
const addNumbers = (a: number, b: number): Number => {
    return a + b;

}

//Values that can be undefined must be at the end
const multiply = (a: number, base: number, b?: number): number => {
    if (b === undefined) {
        return a * base
    } else {
        return a * b * base
    }
}

//We can also pass objects as an argument, for that we need to use interfaces
interface Character {
    name: string;
    hp: number;
    showHp: () => void;
}

const strider:Character={
    name:'Strider',
    hp:50,
    showHp(){
        console.log(`HP is ${this.hp}`)
    }
}

const healCharacter = (character: Character, amount: number):void => {

    character.hp += amount
}



//console.log(addNumbers(1,2))
//console.log(multiply(2,2))
healCharacter(strider,10)
strider.showHp()


export { }