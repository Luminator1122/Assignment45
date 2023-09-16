// 41.	Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.

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
let orig_magician_Names: string[] = [...magician_Names]
let new_function_call = make_great(orig_magician_Names)
console.log(new_function_call)
let new_show_magicians = show_magicians(orig_magician_Names)
console.log(new_show_magicians)
let new_show_magicians1 = show_magicians(great_magicians)
console.log(new_show_magicians1)


export { };