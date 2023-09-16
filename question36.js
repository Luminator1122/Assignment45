"use strict";
// 36.	Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.
function describe_city(cty, ctry) {
    console.log(cty, "is in", ctry);
}
describe_city("Karachi", "Pakistan");
console.log("**************");
function describe_city1(cty) {
    var ctry = "Pakistan";
    console.log(cty, "is in", ctry);
}
describe_city1("Multan");
describe_city1("Faisalabad");
describe_city1("Islamabad");
describe_city1("New York");
