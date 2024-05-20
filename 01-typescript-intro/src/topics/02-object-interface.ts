//Can specify types
const skills: (string | boolean | number)[] = ['Bash', 'Counter', 'Heal', true, 123]

//To use typing with objects we need to use interfaces
//Can also be used with other objects
interface Character {
    name: string,
    hp: (number | string),
    skills: string[],
    hometown?: string //Can use ? to denote that it can be undefined
}

const strider: Character = {
    name: 'Strider',
    hp: 100,
    skills: ['Bash', 'Counter']
}

strider.hometown='Rivendell'
console.table(strider)

export {}