"use strict";
// 32.	Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
Object.defineProperty(exports, "__esModule", { value: true });
// • Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
// • Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!
let pizzaNames = ["Special Behari Pizza", "Malai Boti Pizza", "Kababish Pizza"];
for (let index = 0; index < pizzaNames.length; index++) {
    var element = pizzaNames[index];
    console.log(element);
    console.log("***********");
}
for (let index = 0; index < pizzaNames.length; index++) {
    var element = pizzaNames[index];
    console.log("I Like", element);
}
console.log("***********");
for (let index = 0; index < pizzaNames.length; index++) {
    var element = pizzaNames[index];
    if (element == "Special Behari Pizza") {
        console.log("I Like", element);
    }
    else if (element == "Malai Boti Pizza") {
        console.log("I Like", element, "It has always been my favourite");
    }
    else if (element == "Kababish Pizza") {
        console.log(element, "is very deliciou , I love to enjoy at lunch");
    }
}
console.log("I am always very keen to have pizza at lunch. I always like to eat pizza with friends who also like pizza. Behari Pizza and Kababish pizza are very tasty and Malai Boti is also very saucy and delicious. I like all pizza");
