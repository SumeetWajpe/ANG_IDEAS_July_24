// interface
// interface IPerson {
//   fname: string;
//   age: number;
// }

// OR
type Person = {
  fname: string;
  age: number;
};

// let person: Person = {
//   fname: "Carlos Alcaraz",
//   age: 21,
//   xyz: 123,
// };

// class
class Car {
  name: string;
  speed: number;

  constructor(name: string = "BMW", speed: number = 200) {
    this.name = name;
    this.speed = speed;
  }

  accelerate(): string {
    // return "The car " + this.name + " is running @ " + this.speed + " kmph !";
    return `The car ${this.name} is running @ ${this.speed} kmph !`;
  }
}

// var carObj = new Car();
// carObj.accelerate();

class JamesBondCar extends Car {
  canFly: boolean = false;
  constructor(name: string, speed: number, canFly: boolean) {
    super(name, speed);
    this.canFly = canFly;
  }

  accelerate(): string {
    return super.accelerate() + " Can Fly ? :" + this.canFly;
  }
}

var jbc = new JamesBondCar("Aston Martin", 400, true);
console.log(jbc.accelerate());

class EnhancedCar {
  constructor(public name: string = "AUDI", public speed: number = 300) {}
}

interface IPerson {
  fname?: string;
  age?: number;
  walk?: () => void;
}

interface IPlayer extends IPerson {}

class CPerson implements IPlayer {}

// Generics

var people: Array<Person> = new Array<Person>();

// function Swap<T>(x:T,y:T){

// }

// Swap<number>()

class Point<T> {
  x: T;
  y: T;
}

var pointToBeNoted = new Point<number>();

// function Addition(x, y) {
//   return x + y;
// }

var multiLineStr = `FIRST LINE
SECOND LINE
LAST LINE !`;
console.log(multiLineStr);
