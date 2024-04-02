// Date 13-3-2024
// This is "Ambreen",and you are watching the solution of the problem no 18 in typescript assignment.
//• Sort to change your array so it’s stored in reverse alphabetical order. \n
//  Print the list to show that its order has changed.
// Seeing the World: Think of at least five places in the world you’d like to visit.
//• Store the locations in a array. Make sure the array is not in alphabetical order.
let places = ['Khan-e-Kaba`a', 'Burj Khalifa', 'Nagera Falls', 'Eifel Tower', 'Italy'];
//• Print your array in its original order.
console.log('original :' + places);
//• Print your array in alphabetical order without modifying the actual list.
console.log('copy :' + [...places].sort());
//• Show that your array is still in its original order by printing it.
console.log('original :' + places);
//• Print your array in reverse alphabetical order without changing the order of the original list.
console.log('original :' + [...places].sort().reverse());
// show that your array is still in its orignal order by printing it again.
console.log('original :' + places);
//• Reverse the order of your list. Print the array to show that its order has changed.
console.log('original :' + places.reverse());
//• Reverse the order of your list again. Print the list to show it’s back to its original order. 
console.log('original :' + places.reverse());
//• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log('original :' + places.sort());
//• Sort to change your array so it’s stored in reverse alphabetical order. \n
//  Print the list to show that its order has changed.
console.log('original :' + places.sort().reverse());
export {};
