// Date 21-3-2024
// This is "Ambreen",and you are watching the solution of the problem no 41 in typescript assignment.
// Great Magicians: Start with a copy of your program from Exercise 41. \n
// Write a function called make_great() that modifies the array of magicians by adding the phrase \n
//the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
let magician = ['Harry Potter', 'Hermione Granger', 'Ron Weasley', 'Albus Dumbledore'];
function copyArray(arr) {
    return [...arr];
}
function make_great(magicianArray) {
    for (let i = 0; i < magician.length; i++) {
        magician[i] = 'The Great  ' + magicianArray[i];
    }
}
function show_magicians(magician) {
    magician.forEach(element => {
        console.log(element);
    });
}
make_great(magician);
show_magicians(magician);
const copyMagicianArray = copyArray(magician);
make_great(copyMagicianArray);
console.log('\n\nThis is my orignal array :  ');
show_magicians(magician);
console.log('\n\nThis is my modfied copy of the array :  ');
show_magicians(copyMagicianArray);
export {};
