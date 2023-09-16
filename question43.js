"use strict";
// 43.	Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
Object.defineProperty(exports, "__esModule", { value: true });
class car {
    constructor(n, cm, clr, mdl, yr, eng, ches) {
        this.name = n;
        this.company = cm;
        this.color = clr;
        this.model = mdl;
        this.year = yr;
        this.engine = eng;
        this.chesis = ches;
    }
    myCarFunction() {
        return `Here is a ${this.name} car. it is made by ${this.company} having a beautiful ${this.color} Color and Model ${this.model}.`;
    }
}
var car1 = new car("Toyota yaris", "TOYOTA", "White", "Yaris-1.3", 2022, 1300, 5458796523);
var car2 = new car("Honda City", "HONDA", "Black", "City 1.8", 2023, 1800, 5652331523);
var myCars = [];
myCars.push(car1);
myCars.push(car2);
console.log(myCars);
console.log("********");
console.log(car1.myCarFunction());
console.log("********");
console.log(car2.myCarFunction());
