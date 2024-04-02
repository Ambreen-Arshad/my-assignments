// Date 17-3-2024
// This is "Ambreen"and you are watching the solution of the problem no 27 in typescript assignment.


// • Write three versions of this program, making sure each message is printed for the appropriate color alien.

let alienColor : string = "green";

// • If the alien is green, print a message that the player earned 5 points.
// • If the alien is yellow, print a message that the player earned 10 points.
// • If the alien is red, print a message that the player earned 15 points.


// Version 1 of the program

if( alienColor === "green"){
    console.log("versino 1 The player earned 5 points");
}
else if(alienColor === "yellow"){
    console.log("The player earned 10 points");
}
else if(alienColor === "red"){
    console.log("The player earned 15 points");
}
else{
    console.log("Please select the right color");
}

// Version 2 of the program

alienColor = "yellow";

if( alienColor === "green"){
    console.log("The player earned 5 points");
}
else if(alienColor === "yellow"){
    console.log("version :2 The player earned 10 points");
}
else if(alienColor === "red"){
    console.log("The player earned 15 points");
}
else{
    console.log("Please select the right color")
}

// Version 3 of the program

alienColor = "red";

if( alienColor === "green"){
    console.log("The player earned 5 points");
}
else if(alienColor === "yellow"){
    console.log("The player earned 10 points");
}
else if(alienColor === "red"){
    console.log(" version : 3 The player earned 15 points");
}
else{
    console.log("Please select the right color")
}