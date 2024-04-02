// Date 16-3-2024
// This is "Ambreen",and you are watching the solution of the problem no 23 in typescript assignment.

// Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction \n
//for the results of each test. Your code should look something like this:

//let car = 'subaru';

//console.log("Is car == 'subaru'? I predict True.")

//console.log(car == 'subaru')

//• Look closely at your results, and make sure you understand why each line evaluates to True or False.

//• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
// creating car variable
let car : string = 'subaru';

// Test no 1
console.log("Is car ==='subaru'? I predict True");
console.log(car === 'subaru');

// Test no 2

console.log("Is car =='subaru'? I predict True");
console.log(car == 'subaru');

// Test no 3

console.log("Is car !='Honda'? I predict True");
console.log(car != 'Honda');

// Test no 4 

console.log("Is car !='Ford'? I predict True");
console.log(car != 'Ford');

// Test no 5

console.log("Is car.Upper case =='SUBARU'? I predict True");
console.log(car.toUpperCase() === 'SUBARU');

// Test no 6


console.log("Is car =='SUBARU'? I predict fales");
console.log(car == 'SUBARU');

// Test no 7 
console.log("Is car ==='SUBARU'? I predict fales");
console.log(car === 'SUBARU');

// Test no 8

console.log("Is car ==='Train'? I predict fales");
console.log(car === 'Train');

// Test no 9

console.log("Is car ==='Bus'? I predict fales");
console.log(car === 'Bus');

// Test no 10


console.log("Is car ==='Cycle'? I predict fales");
console.log(car === 'Cycle');
