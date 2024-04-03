// Date 26-3-2024
// This is "Ambreen",and you are watching the solution of the problem no 44 in typescript assignment.
// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. \n
// The function should have one parameter that collects as many items as the function call provides, \n
// and it should print a summary of the sandwich that is being ordered. \n
// Call the function three times, using a different number of arguments each time.
function makeSandwich(items) {
    console.log('\n\nMake your Sandwich with :  ');
    items.forEach(Element => console.log("-  " + Element));
    console.log('Enjoy your Sandwich! ');
}
makeSandwich(['Ham', 'Cheese', 'Lettuce']);
makeSandwich(['Turkey', 'Bacon']);
makeSandwich(['Peanut butter', 'Jelly']);
export {};
