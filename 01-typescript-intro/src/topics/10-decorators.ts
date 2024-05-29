const classDecorator = (constructor: any) => {
  return class extends constructor {
    newProperty = "New Property";
    hello = "override";
  };
};

//A decorator can be put as a property or as a method of a class, and modifies classes, methods and functions behaviour
@classDecorator
export class Superclass {
  public myProperty: string = "ABC123";

  print() {
    console.log("Hola mundo");
  }
}

const myClass = new Superclass();

console.log(Superclass);
console.log(myClass);
