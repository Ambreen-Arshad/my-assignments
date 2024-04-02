// Date 16-3-2024
// This is "Ambreen",and you are watching the solution of the problem no 24 in typescript assignment.
// More Conditional Tests: You don’t have to limit the number of tests you create to 10.\n
// If you want to try more comparisons, write more tests. Have at least one True and one False \n
// result for each of the following:
// Equality and inequality Test 1
console.log("Equality test with string :", "Apple" === "Apple");
// Equality and inequality Test 2
console.log("Inequality test with string : ", "Apple" != "orange");
// • Tests using the lower case function
console.log("LowerCasefunctiontest :", "HELLO".toLowerCase() === "hello");
// • Numerical tests involving equality 
console.log("Equlity test with number : ", 26 === 26);
// Numerical test involving inequality
console.log("Inequality test with number : ", 26 != 35);
// Greater than test
console.log("Greater than test : ", 10 > 5);
// Less than test
console.log("Less than test : ", 5 < 10);
//Greater than and equal to
console.log("Greater than and equal to test : ", 10 >= 10);
// Less than or equal to
console.log("Less than or equal to test :  ", 5 <= 10);
// • Tests using "and" operator
console.log("And operater test : ", 5 === 5 && 10 > 5);
//Test using "or" operators
console.log("or operater test : ", 5 === 5 || false);
// • Test whether an item is in a array
const fruits = ['Nashpati', 'Banana', 'Amrood'];
console.log('Test "Nashpati" is in the array : ', fruits.includes("Nashpati"));
// • Test whether an item is not in a array
console.log('Testing "Apple" is not in array : ', !fruits.includes('Apple'));
export {};
