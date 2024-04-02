// Date 12-3-2024
// This is"Ambreen",and you are watching the solution of the problem no 14 in typescript assignment.

// Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite?\n
// Make a list that includes at least three people you’d like to invite to dinner. \n
// Then use your list to print a message to each person, inviting them to dinner.

// Q-no:15 Changing Guest List: You just heard that one of your guests can’t make the dinner, \n
//so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

//• Start with your program from Exercise 14. Add a print statement at the end of your program \n
//stating the name of the guest who can’t make it.

//• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

//• Print a second set of invitation messages, one for each person who is still in your list.

let Guest_List : string[] = ['Arshad Kalam Khan','Amjad Kalam Khan','Ghayaz Uddin'];

// for(let i=0; i<Guest_List.length; i ++ ){
//     console.log('Dear Mr. ' + Guest_List[i] + ', \n\n it is our pleasure to invite you in our party.\n\n Thank you!\n\n' )
    
// }
let absent_Guest : string = 'Amjad Kalam Khan';
let new_Guest : string = 'Saim Khan';
Guest_List[1] =  new_Guest ;

for(let i=0; i< Guest_List.length; i++){
    console.log('Dear Mr. ' + Guest_List[i] + ', \n\nIt is our pleasure to invite you in our party.\n\n Thank you!\n\n ');
}

console.log(`Mr.${absent_Guest} is not coming to the party.`);
console.log('Good News! we find the big table so we invite 3 more guests')
Guest_List.unshift('Sarim Khan');
Guest_List.splice(2,0,'Nadeem Sidiqui');
Guest_List.push('Muhammad Umar Khan');

for(let i=0; i< Guest_List.length; i++){
    console.log('Dear Mr. ' + Guest_List[i] + ', \n\nIt is our pleasure to invite you in our party.\n\n Thank you!\n\n ');
}