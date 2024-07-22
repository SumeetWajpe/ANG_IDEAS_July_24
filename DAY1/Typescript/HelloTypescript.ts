// var s = "Hello Typescript !"; // type inferencing
// s = 100;

var s: string = "Hello Typescript !"; // type annotation
console.log(s);

var n: number;
var b: boolean;

var x: any;
x = 100;
x = "Bye !";
x = [10, 20];
x = { name: "IDEAS", city: "Pune" };

// functions
function Add(x: number, y: number): number | string {
  if (x < 0) {
    return "x should be greater than zero !";
  }
  return x + y;
}

var result: number | string = Add(10, 20);

// Optional Parameters

// function PrintBook(author: string, title: string, numOfPages?: number) {
//   console.log(author, title, numOfPages);
// }

// PrintBook("Dr. APJ Abdul Kalam", "Wings Of Fire");

/// Default Parameters

function PrintBook(
  author: string = "Unknown",
  title: string = "Unknown",
  numOfPages: number = 0,
) {
  console.log(author, title, numOfPages);
}

PrintBook(undefined, "XYZ", 200);

let y: number = 100;
// 100 line
// let y = 200;

// const PI: number = 3.15;
// PI = 3.1454; // Error

// const PI: number; // Error - define
// PI = 3.15; // Error

const company = { name: "IDEAS", city: "Pune" };
company.city = "Bengaluru";
console.log(company);

// Arrow Functions

// var Square = function (x) {
//   return x * x;
// };

// OR

// var Square = x => {
//   return x * x;
// };

// OR

var Square = x => x * x;
console.log(Square(10));

// var cars = ["BMW", "AUDI", "MERC"];
// cars.forEach(function (car) {
//   console.log(car);
// });
// // OR

// cars.forEach(car => console.log(car));

// The Problem

function Emp() {
  this.salary = 200000;

  setTimeout(() => {
    console.log(this.salary);
  }, 2000);
}

var e = new Emp();

// Spread  Operator
// With Arrays
// var cars: string[] = ["BMW", "AUDI", "MERC"];
// var moreCars: string[] = ["Maruti", "Honda"];

// var allCars: string[] = [...cars, ...moreCars];
// console.log(allCars);

// with Object

// let person = { name: "Alcaraz", age: 21, sport: "Lawn Tennis" };
// let player = { ...person, sport: "Tennis" };
// console.log(player);
// OR

// var cars: Array<string> = new Array<string>();// Generics

// Destructuring
// with Arrays

var cars: string[] = ["BMW", "AUDI", "MERC"];
// let firstCar, secondCar;
// firstCar = cars[0];
// secondCar = cars[1];
// OR

// let [firstCar, , , secondCar = "Unknown"] = cars;

// with Objects
let person = {
  fname: "Carlos Alcaraz",
  age: 21,
  details: { sport: "Tennis", seedNo: 3 },
};
// let fname, age;
// fname = person.fname;
// age = fname.age;

// OR

let {
  fname: FULLNAME,
  age,
  details: { sport },
} = person;


