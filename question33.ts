// 33.	Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal.
//  • Modify your program to print a statement about each animal, such as A dog would make a great pet. 
//• Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!
let myAnimals: string[] = ["Buffalo", "Camel","Cow","Goat"]
for (let index = 0; index < myAnimals.length; index++) {
    var element = myAnimals[index];
    console.log(element)
}
console.log("***********")
for (let index = 0; index < myAnimals.length; index++) {
    var element = myAnimals[index];
    if (element == "Buffalo") {
        console.log("I Like",element,"It gives me milk")
    }
    else if
        (element == "Camel") {
        console.log(element,". is known as the King of Desert.")
    }
    else if
        (element == "Cow") {
        console.log(element, "is very beautiful and wise Animal")
    }
    else if
    (element == "Goat") {
    console.log(element,"is a big source of delicious meat. we sacrifice on Eid Ul Adha")}
}
console.log("*****  Statement ******")

console.log("These Animals are Halal and Source of Fresh Pure Milk. Muslims sacrifice on the event of Eid Ul Adha")