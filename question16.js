"use strict";
// Question No.16
// Seeing the World: Think of at least five places in the world you’d like to visit.
//1 	• Store the locations in a array. Make sure the array is not in alphabetical order.
let places = ["ZilaCouncil", "Jeddah", "Islamabad", "Dubai", "Palestine"];
// 2	• Print your array in its original order.
console.log(places);
// 	3• Print your array in alphabetical order without modifying the actual list.
//let alphabeticplaces=places.sort()
console.log([...places].sort());
// 	4• Show that your array is still in its original order by printing it.
console.log(places);
// 	5• Print your array in reverse alphabetical order without changing the order of the original list.
console.log([...places].reverse());
// 	6• Show that your array is still in its original order by printing it again.
console.log(places);
// 	7• Reverse the order of your list. Print the array to show that its order has changed.
console.log(places.reverse());
// 	8• Reverse the order of your list again. Print the list to show it’s back to its original order. (reverse to original)
console.log(places.reverse());
// 	9• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been 	changed.
console.log(places.sort());
