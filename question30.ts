// 30.	Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.

let current_users: String[] = ["johncena", "vikram", "jango", "zylo", "Sena"]
let new_users: String[] = ["vicky", "Shanzy", "vikram", "Jamal", "Kami", "Sena"]

function arraysAreEqual1(arry1: any[], arry2: any[]): any {
    for (let i = 0; i < arry1.length; i++) {
       var element = arry1[i]
        for (let j = 0; j < arry2.length; j++) {
             var elements = arry2[i];
            if (arry1[i] == arry2[j]) {
                console.log( "you need to find a new User Name")
            }
            else {
                console.log("The User_name is available")
            }

        }
    }
}

 arraysAreEqual1(new_users, current_users);
