// 40.	Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.

let magician_Names: string[] = ["Jackal", "neelam Jajjaa", "Saddhu", "Bangali Baba"]
function show_magicians(names: string[]) {
        return names
}
let showMagicians = show_magicians(magician_Names)
console.log(showMagicians)
//Phase Great
function make_great(names: string[]): string[] {
        let great_magicians: string[] = [];
        for (let name of names) { great_magicians.push(`${name} the Great`) }
        return great_magicians
}


let great_magicians = make_great(magician_Names)
console.log(great_magicians)

let oldshow_magicians = show_magicians(great_magicians);
console.log(oldshow_magicians);
export { };