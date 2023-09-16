"use strict";
// 42.	Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
function my_Sandwich(...ingr) {
    for (let index = 0; index < ingr.length; index++) {
        var ingred = ingr[index];
        console.log(ingred);
    }
    console.log("Its Tasty as u desire. Enjoy the Desired Sandwich");
}
my_Sandwich("jam", "butter", "Garlic Sauce", "cheeze");
console.log("************************************");
my_Sandwich("Egg Fried Pieces", "Crushed Pineapple", "Chilli Sauce", "cheeze");
console.log("////////////////////////////////////////////////");
my_Sandwich("Jelly Beans", "crushed fried meat", "Beans", "Mix Crushed Vegetbles");
