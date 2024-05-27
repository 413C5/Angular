export class Person {
  /*  public name?: string;
  private address?: string; */

  /* constructor(name: string, address: string) {
    this.name = "Alejandro";
    this.address = "Washington";
  }
 */
  //Another way to create a constructor, the short way
  constructor(
    public name: string,
    public lastName: string,
    private address: string = "No address"
  ) {}
}

//Class extension
export class Hero extends Person {
  constructor(
    public alterEgo: string,
    public age: number,
    public realName: string
  ) {
    //Super is the constructor of the parnt class
    super(realName, "New York");
  }
}

//Composition
export class Hero2 {
  //public person: Person;
  constructor(
    public alterEgo: string,
    public age: number,
    public realName: string,
    public person: Person
  ) {
    //this.person = new Person(realName);
  }
}

const ironman = new Person("Tony", "Stark");

const ironman2 = new Hero("War machine", 45, "Rody");

const person = new Person("Pepper", "New York", "Potts");
const ironman3 = new Hero2("Rescue", 35, "Pepper", person);

console.log(ironman);
console.log(ironman2);
console.log(ironman3);
