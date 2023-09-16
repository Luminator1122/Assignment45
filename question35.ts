// 35.	Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
function make_shirt(txt:string)
{
    var size:string="Large"
    console.log("My Shirt should of size -",size,"- and '",txt,"' should b printed on it")
}
make_shirt("* I love TypeScript *")
console.log("**************")

function make_shirt1(size:string,)
{
    var txt:string=("Shahid Afridi - 10")
    console.log("My Shirt should of size -",size,"- and '",txt,"' should b printed on it")
}
make_shirt1("-Medium-")
make_shirt1("-Large-")
console.log("**************")
function make_shirt3(size:string,)
{
    var txt:string=("Ronaldo - 10")
    console.log("My Shirt should of size -",size,"- and '",txt,"' should b printed on it")
}
make_shirt3("-Extra Large-")