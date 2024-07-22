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


