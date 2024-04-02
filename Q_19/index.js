// Date 12-3-2024
// This is"Ambreen",and you are watching the solution of the problem no 14 in typescript assignment.
// Q:14-Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite?\n
// Make a list that includes at least three people you’d like to invite to dinner. \n
// Then use your list to print a message to each person, inviting them to dinner.
// Q:no-15 Changing Guest List: You just heard that one of your guests can’t make the dinner, \n
//so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
//• Start with your program from Exercise 14. Add a print statement at the end of your program \n
//stating the name of the guest who can’t make it.
//• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// Q:16-More Guests: You just found a bigger dinner table, so now more space is available.\n
// Think of three more guests to invite to dinner.
//• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that\n
// you found a bigger dinner table.
//• Add one new guest to the beginning of your array.
//• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. \n
//• Print a new set of invitation messages, one for each person in your list.
//• Print a second set of invitation messages, one for each person who is still in your list.
// Q:17- Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner,\n
// and you have space for only two guests.
//• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite\n
// only two people for dinner.
//• Remove guests from your list one at a time until only two names remain in your list. \n
// Each time you pop a name from your list, print a message to that person letting them \n
// know you’re sorry you can’t invite them to dinner.
//• Print a message to each of the two people still on your list, letting them know they’re still invited.
//• Remove the last two names from your list, so you have an empty list. \n
// Print your list to make sure you actually have an empty list at the end of your program.
// Q:19-Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating \n
// the number of people you are inviting to dinner.
let Guest_List = ['Arshad Kalam Khan', 'Amjad Kalam Khan', 'Ghayaz Uddin'];
// for(let i=0; i<Guest_List.length; i ++ ){
//     console.log('Dear Mr. ' + Guest_List[i] + ', \n\n it is our pleasure to invite you in our party.\n\n Thank you!\n\n' )
// }
let absent_Guest = 'Amjad Kalam Khan';
let new_Guest = 'Saim Khan';
Guest_List[1] = new_Guest;
// for(let i=0; i< Guest_List.length; i++){
//     console.log('Dear Mr. ' + Guest_List[i] + ', \n\nIt is our pleasure to invite you in our party.\n\n Thank you!\n\n ')
// }
// console.log(`Mr.${absent_Guest} is not coming to the party.`);
// console.log('Good News! we find the big table so we invite 3 more guests')
Guest_List.unshift('Sarim Khan');
Guest_List.splice(2, 0, 'Nadeem Sidiqui');
Guest_List.push('Muhammad Umar Khan');
// for(let i=0; i< Guest_List.length; i++){
//     console.log('Dear Mr. ' + Guest_List[i] + ', \n\nIt is our pleasure to invite you in our party.\n\n Thank you!\n\n ')
// }
// console.log('\n Sorry we can not arrange big table,only two peoples will be invited.');
while (Guest_List.length > 2) {
    let remove_Guest = Guest_List.pop();
    // console.log(`Sorry Mr.${ remove_Guest}, you are not invited for Dinner.`);
}
// for(let i=0; i< Guest_List.length; i++){
//     console.log('Dear Mr. ' + Guest_List[i] + ', \n\nIt is our pleasure to invite you in our party.\n\n Thank you!\n\n ')
// }
Guest_List.splice(0, 2);
console.log(Guest_List);
// Exercise : 19
// print a message indicating the number of people you are inviting to dinner.
console.log(`Total number of Guest are : ${Guest_List.length}`);
export {};
