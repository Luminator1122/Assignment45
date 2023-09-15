// 27.	Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
var myFruits:string[]=["Banana", "Apple","Mangoe","PineApples","Orange","Gava"]
for (let index = 0; index < myFruits.length; index++)
{
    var element = myFruits[index];
    if (element=="Banana")
    {
        console.log("Bana is my Favourite Fruit")
    }
    if (element=="Apple")
    {
        console.log("Apple is my Favourite Fruit")
    }
    if (element=="Mangoe")
    {
        console.log("Mangoe is my Favourite Fruit")
    }
    if (element=="PineApple")
    {
        console.log("PineApple is my Favourite Fruit")
    }
    if (element=="Orange")
    {
        console.log("Orange is my Favourite Fruit")
    }
}