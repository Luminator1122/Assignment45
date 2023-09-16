"use strict";
// 40.	Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
Object.defineProperty(exports, "__esModule", { value: true });
// let magician_Names:string[]=["Jackal","neelam Jajjaa","Saddhu","Bangali Baba"]
// function show_magicians(names:string[])
// {
//         console.log(names)
// }
// show_magicians(magician_Names)
//Phase Great
let magician_Names = ["Jackal", "neelam Jajjaa", "Saddhu", "Bangali Baba"];
function show_magicians(names) {
    console.log(names, "The Great");
}
show_magicians(magician_Names);
