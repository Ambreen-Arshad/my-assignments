"use strict";
// Date 18-3-2024
// This is "Ambreen",and you are watching the solution of the problem no 31 in typescript assignment.
Object.defineProperty(exports, "__esModule", { value: true });
// No Users: Add an if test to Exercise 30 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.
let userName = ['admin', 'alisha', 'saim', 'alishba', 'sarim', 'umar'];
if (userName.length === 0) {
    console.log(' We need to find some users!');
}
else {
    userName = [];
    console.log('All user Name have been removed ' + userName.length);
}
