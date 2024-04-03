"use strict";
// Date 19-3-2024
// This is "Ambreen",and you are watching the solution of the problem no 34 in typescript assignment.
Object.defineProperty(exports, "__esModule", { value: true });
// Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array,\n
// and then use a for loop to print the name of each pizza.
//• Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza.\n
// For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
//• Add a line at the end of your program, outside the for loop, that states how much you like pizza. \n
//The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, \n
//such as I really love pizza!
let Pizzas = ['Pepperoni', 'Cuban', 'BBQ Pizza'];
for (let pizza of Pizzas) {
    console.log(`I like ${Pizzas} pizza.`);
}
console.log(`I really love pizza!`);
