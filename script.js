var studentName = "Fahad"  //studentName variable
var studentAge = 21  //studentAge variable
var isEnrolled = true  //isEnrolled variable

//Logs the 3 variables to the console
console.log(`The name of the student is ${studentName}. His age is ${studentAge} years old. It is ${isEnrolled} that he is enrolled in the course.`)

let favoriteNumber = "77" //A text value or a number as a String type
let travelDistance = 260.8  //A floating-point number
let arrival = false  //A boolean data type variable

console.log("My friend is taking '77' minutes to arrive at the gathering." + `He still has to travel ${travelDistance} kilometers to arrive at the gathering. ${favoriteNumber} minutes later, the arrival of my friend is ${arrival}`)

//An object
const friend = {
    name: "Tony",
    age: 21
}

//Object 2
const friend2 = {
    name: "Bruce",
    age: 22
}

console.log(`My friends are ${friend.name} and ${friend2.name}. ${friend.name} is ${friend.age} years old and ${friend2.name} is ${friend2.age} years old.`)

//Array
let favoriteHeroes = ['Spiderman', 'Batman', 'Superman', 'Shazam', 'Cyborg', 'Hulk']
console.log(`My favourite super hero is ${favoriteHeroes[4]}.`)  //Only shows the fifth superhero (Cyborg) from the array
favoriteHeroes.push('Flash')  //Adds the Flash into the array
favoriteHeroes.push('Aquaman')  //Adds Aqauman into the array
console.log(`Here are my favourite super heroes: ${favoriteHeroes}`)  //Logs the updated array to the console
favoriteHeroes.pop() //Removes Aquaman from the array
console.log(`Here is the updated list of my favourite super heroes: ${favoriteHeroes}`)  //Logs the updated array to the console

//Comparison Operators
let x = 144
let y = 360
console.log(144 === x)  //Uses the strict equals operator
console.log("360" == y)  //Uses the non-strict equals Operator
console.log("360" === y)
console.log(x < y)  //Uses the less than Operator
console.log(x >= y)  //Uses the greater or equal Operator
console.log(x != y)  //Uses the not equal Operator
console.log(x !== y)  //Also uses the Not equal Operator

//Logical Operators
let a = "Bowser"
let b = "Dimentio"
let c = "Bowser"
let d = "Fawful"
console.log(a && b)  //Uses the AND Operator
console.log(a && c)
console.log(a || b)  //Uses the OR Operator
console.log(a || c)
console.log(c && d)
console.log(d && a)
console.log(!b)  //Uses the NOT Operator. The output for this will be false.
console.log(!!a) //The output for this will be true.

//Arithmetic Operators
let m = 235
let l = 420
console.log(`The sum of ${m} and ${l} is: ${m+l}`)  //Addition Operator
console.log(`The difference of ${m} and ${l} is: ${m-l}`)  //Subtraction Operator
console.log(`The difference of ${l} and ${m} is: ${l-m}`)
console.log(`The product of ${m} and ${l} is: ${m*l}`)  //Multiplication Operator
console.log(`The division of ${m} and ${l} is: ${m/l}`)  //Division Operator
console.log(`The division of ${l} and ${m} is: ${l/m}`) 
console.log(`The remainder of ${m} and ${l} is: ${m%l}`)  //Remainder or Modulus Operator
console.log(`The remainder of ${l} and ${m} is: ${l%m}`)