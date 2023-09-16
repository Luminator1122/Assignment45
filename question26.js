"use strict";
// question 26.	Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
var ageofPerson = 70;
// • If the person is less than 2 years old, print a message that the person is a baby.
if (ageofPerson < 2) {
    console.log("The person is a baby");
}
// • If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
else if (ageofPerson >= 2 && ageofPerson < 4) {
    console.log("The person is a Toddler");
}
// • If the person is at least 4 years old but less than 13, print a message that the person is a kid.
else if (ageofPerson >= 4 && ageofPerson < 13) {
    console.log("The person is a Kid");
}
// • If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
else if (ageofPerson >= 13 && ageofPerson < 20) {
    console.log("The person is a Teenager");
}
// • If the person is at least 20 years old but less than 65, print a message that the person is an adult.
else if (ageofPerson >= 20 && ageofPerson < 65) {
    console.log("The person is a Adult");
}
// • If the person is age 65 or older, print a message that the person is an elder.
else if (ageofPerson >= 65) {
    console.log("The person is an Elder");
}
