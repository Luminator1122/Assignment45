"use strict";
// Question No.22
// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// 	• Tests for equality and inequality with strings
// 	• Tests using the lower case function
// 	• Numerical tests involving equality and inequality, greater than and less than, greater than or equal 	to, and less than or equal to
// 	• Tests using "and" and "or" operators
// 	• Test whether an item is in a array
// 	• Test whether an item is not in a array
let string1 = "Mango";
let string2 = "Grapes";
console.log("Are string1 and string2 equal? I predict False.");
console.log(string1 == string2);
console.log("Are string1 and string2 not equal? I predict True.");
console.log(string1 != string2);
let name1 = "Zahid";
let name2 = "Iqbal";
console.log("Are name1 and name2 equal ignoring case? I predict True.");
console.log(name1.toLowerCase() == name2.toLowerCase());
// • Tests using the lower case function
console.log("Are name1 and name2 not equal ignoring case? I predict False.");
console.log(name1.toLowerCase() != name2.toLowerCase());
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array
let valueNumber1 = 40;
let valueNumber2 = 20;
console.log("Are valueNumber1 and valueNumber2 equal ? I predict False.");
console.log(valueNumber1 == valueNumber2);
console.log("Are valueNumber1 and valueNumber2 not equal ? I predict True.");
console.log("This is - ", valueNumber1 != valueNumber2, "- that valueNumber1 and valueNumber2 are not equal");
console.log("Are valueNumber1 is less than valueNumber2  ? I predict False.");
console.log("This is - ", valueNumber1 < valueNumber2, "- that valueNumber1 is less than valueNumber2");
console.log("Are valueNumber1 is greater than valueNumber2  ? I predict True.");
console.log("This is - ", valueNumber1 > valueNumber2, "- that valueNumber1 is  greater than  valueNumber2");
console.log("Are valueNumber1 is greater than or equal to valueNumber2  ? I predict True.");
console.log("This is - ", valueNumber1 >= valueNumber2, "- that valueNumber1 is  greater than or equal to valueNumber2");
console.log("Are valueNumber1 is less than  or equal to valueNumber2  ? I predict False.");
console.log("This is - ", valueNumber1 <= valueNumber2, "- that valueNumber1 is  less than  or equal to valueNumber2");
// • Tests using "and" and "or" operators
let personAge = 45;
let personCity = "Chiniot";
let personCity2 = "Karachi";
if (personAge > 18 && personCity == "Chiniot") {
    console.log(`You are a gentle person`);
}
else {
    console.log(`You should be kept under observation`);
}
;
if (personCity == "Chiniot" || personCity2 == "Karachi") {
    console.log("It is equally GOOD");
}
else {
    console.log("Try to choose a better place of li");
}
// • Test whether an item is in a array
// • Test whether an item is not in a array
let citiesOfPakistan = ["Karachi", "Islamabad", "Faisalabad", "Chiniot"];
let theCity = "Faisalabad";
if (citiesOfPakistan.includes(theCity)) {
    console.log(`Your city ${theCity} includes in Pakistan`);
}
let theCity2 = "Tokyo";
if (citiesOfPakistan.includes(theCity2)) {
    console.log(`Your city ${theCity} includes in Pakistan`);
}
else {
    console.log(`Your city ${theCity2} does not includes in Pakistan`);
}
