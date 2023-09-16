// Question No.21
// Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
// let car = 'subaru';
// console.log("Is car == 'subaru'? I predict True.")
// console.log(car == 'subaru')
// 	• Look closely at your results, and make sure you understand why each line evaluates to True or False.
// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False..

let my_Places = {
    
    Data_Darbar : 'lahore',
    Badshahi_Mosque : 'lahore',
    Shrine_of_Lal_Shahbaz_Qalandar : 'Sehwan Sharif Sindh',
    Faisal_Mosque : 'Islamabad',
    Blue_Mosque_Replica : 'Islamabad'
}
//test case-1
console.log("Is Data_Darbar == lahore? MY prediction  TRUE")
console.log(my_Places.Data_Darbar === 'lahore')
//test case-2
console.log("Is Data_Darbar == Faisalabad? MY prediction FALSE")
console.log(my_Places.Data_Darbar ===  'Faisalabad')
//test case-3
console.log("Is Shrine_of_Lal_Shahbaz_Qalandar == Sehwan Sharif Sindh? MY prediction  TRUE")
console.log(my_Places.Shrine_of_Lal_Shahbaz_Qalandar === 'Sehwan Sharif Sindh')
//test case-4
console.log("Is Shrine_of_Lal_Shahbaz_Qalandar == Faisalabad? MY prediction FALSE")
console.log(my_Places.Shrine_of_Lal_Shahbaz_Qalandar === 'Faisalabad')
//test case-5
console.log("Is Badshahi_Mosque == lahore? MY prediction  TRUE")
console.log(my_Places.Badshahi_Mosque === 'lahore')
//test case-6
console.log("Is Badshahi_Mosque == Islamabad? MY prediction  FALSE")
console.log(my_Places.Badshahi_Mosque === 'Islamabad')
//test case-7
console.log("Is Faisal_Mosque  == Islamabad? MY prediction  TRUE")
console.log(my_Places.Faisal_Mosque  === 'Islamabad')
//test case-8
console.log("Is Faisal_Mosque  == lahore? MY prediction  FALSE")
console.log(my_Places.Faisal_Mosque  === 'lahore')
//test case-9
console.log("Blue_Mosque_Replica == Islamabad? MY prediction TRUE")
console.log(my_Places.Blue_Mosque_Replica === 'Islamabad')
//test case-10
console.log("Is Blue_Mosque_Replica == lahore? MY prediction FALSE")
console.log(my_Places.Blue_Mosque_Replica === 'lahore')
