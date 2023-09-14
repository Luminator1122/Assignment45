"use strict";
//question no 3 Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
let personName = "KASHIF";
var lowerpersonname = personName.toLowerCase();
console.log(lowerpersonname);
let personName1 = "kashif";
let uppercase = personName1.toUpperCase();
console.log(uppercase);
var friends = "usman adnan asif umer waseem salyana faisal zeeshan irfan imran";
var arrayofFriends = friends.split(" ");
var tiTlecaseFriends = "";
for (let i = 0; i < arrayofFriends.length; i++) {
    tiTlecaseFriends += arrayofFriends[i].charAt(0).toUpperCase() + arrayofFriends[i].slice(1).toLowerCase() + " ";
}
console.log(tiTlecaseFriends);
