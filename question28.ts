// 28.	Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
let userNames:string[]=["Admin","Mohsin","Arjun", "Karan"]
for (let index = 0; index < userNames.length; index++) {
    var element = userNames[index];
    console.log("Hello Dear-",element," - Welcome to Hussnain Traders")
}
// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
for (let index = 0; index < userNames.length; index++) {
    var element = userNames[index];
if (element=="Admin")
{
    console.log("Hello-",element,"- Sir !, Would you like to see a Status Report Pls.")}
    else
    {
        console.log("Hello Dear-",element," - Thank you log in again")

    }    
}
// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.


export {};