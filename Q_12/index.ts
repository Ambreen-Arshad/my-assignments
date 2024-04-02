// Date 12-3-2024
// This is "Ambreen",and you are watching the solution of the problem no 12 in typescript assignment.

// Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, \n
// print a message to them. The text of each message should be the same, but each message \n
//should be personalized with the person’s name.

let personName : string[] = ['Arshad','Alisha','Saim','Alishba','Sarim','Umar'];
const message : string = 'Welcome home with lots of happiness :';
for(let i = 0; i< personName.length; i ++ ){
console.log(message + personName [i] );
}