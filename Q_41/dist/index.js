// Date 21-3-2024
// This is "Ambreen",and you are watching the solution of the problem no 41 in typescript assignment.
// Magicians: Make a array of magician’s names. \n
// Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
let magician = ['Harry Potter', 'Hermione Granger', 'Ron Weasley', 'Albus Dumbledore'];
function show_magicians(magician) {
    magician.forEach(element => {
        console.log(element);
    });
}
show_magicians(magician);
export {};
