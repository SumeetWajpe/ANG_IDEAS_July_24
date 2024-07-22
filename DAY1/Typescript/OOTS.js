// interface
// interface IPerson {
//   fname: string;
//   age: number;
// }
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// let person: Person = {
//   fname: "Carlos Alcaraz",
//   age: 21,
//   xyz: 123,
// };
// class
var Car = /** @class */ (function () {
    function Car(name, speed) {
        if (name === void 0) { name = "BMW"; }
        if (speed === void 0) { speed = 200; }
        this.name = name;
        this.speed = speed;
    }
    Car.prototype.accelerate = function () {
        return "The car " + this.name + " is running @ " + this.speed + " kmph !";
    };
    return Car;
}());
// var carObj = new Car();
// carObj.accelerate();
var JamesBondCar = /** @class */ (function (_super) {
    __extends(JamesBondCar, _super);
    function JamesBondCar(name, speed, canFly) {
        var _this = _super.call(this, name, speed) || this;
        _this.canFly = false;
        _this.canFly = canFly;
        return _this;
    }
    JamesBondCar.prototype.accelerate = function () {
        return _super.prototype.accelerate.call(this) + " Can Fly ? :" + this.canFly;
    };
    return JamesBondCar;
}(Car));
var jbc = new JamesBondCar("Aston Martin", 400, true);
console.log(jbc.accelerate());
var EnhancedCar = /** @class */ (function () {
    function EnhancedCar(name, speed) {
        if (name === void 0) { name = "AUDI"; }
        if (speed === void 0) { speed = 300; }
        this.name = name;
        this.speed = speed;
    }
    return EnhancedCar;
}());
var CPerson = /** @class */ (function () {
    function CPerson() {
    }
    return CPerson;
}());
// Generics
var people = new Array();
// function Swap<T>(x:T,y:T){
// }
// Swap<number>()
var Point = /** @class */ (function () {
    function Point() {
    }
    return Point;
}());
var pointToBeNoted = new Point();
function Addition(x, y) {
    return x + y;
}
