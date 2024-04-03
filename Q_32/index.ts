// Date 18-3-2024
// This is "Ambreen",and you are watching the solution of the problem no 32 in typescript assignment.

// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone \n
//has a unique username.
// • Make a list of five or more usernames called current_users.

// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also \n
//in the current_users list.

// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that \n
// the person will need to enter a new username. If a username has not been used, print a message saying that \n
//the username is available.

// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.

let current_users : string[] = ['Ambreen','AmBer','AmBy','Fatima','AliSha','AlisHba'];

let new_users : string[] = ['RaZia','AmBy','Farheen','AmbReen','AliShba','Mariyam'];

new_users.forEach(new_username =>{

    let lowerCase : string = new_username.toLowerCase();
    if(current_users.map(c_user =>c_user.toLowerCase()).includes(lowerCase)){
        console.log(`The username ${new_username}is not available.Please write a diffrent username`);
    }
    else{
        console.log(`The username ${new_username} is available.`);
    }
})