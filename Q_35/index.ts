// Date 19-3-2024
// This is "Ambreen",and you are watching the solution of the problem no 35 in typescript assignment.

// Animals: Think of at least three different animals that have a common characteristic. \n
// Store the names of these animals in a list, and then use a for loop to print out the name of each animal. \n
//• Modify your program to print a statement about each animal, such as A dog would make a great pet. \n
//• Add a line at the end of your program stating what these animals have in common. \n
//You could print a sentence such as Any of these animals would make a great pet!


let animals : string[] = ['dog','cat','rabbit'];

for(let animal of animals){

    console.log(` such as A ${animal} would make a great pet.`);
}


console.log(` Any of these animals would make a great pet!`);