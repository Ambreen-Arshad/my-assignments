// Date 20-3-2024
// This is "Ambreen",and you are watching the solution of the problem no 40 in typescript assignment.

// Album: Write a function called make_album() that builds a Object describing a music album.\n
// The function should take in an artist name and an album title, \n
// and it should return a Object containing these two pieces of information. \n
// Use the function to make three dictionaries representing different albums. \n
// Print each return value to show that Objects are storing the album information correctly. \n
// Add an optional parameter to make_album() that allows you to store the number of tracks on an album. \n
// If the calling line includes a value for the number of tracks, add that value to the album’s Object. \n
// Make at least one new function call that includes the number of tracks on an album.

function make_album(artist : string,title : string,tracks ? : number){

    const album : {

        artist : string , title : string , tracks ? : number} = {

    artist : artist,
    title  : title
}
if(tracks !== undefined){
    album.tracks = tracks ;
}
return album;
}
const album1 = make_album('Shehzad Roy','Zindagi');
console.log(album1);

const album2 = make_album('Ali Zafar','Jhoom', 12);
console.log(album2);

const album3 = make_album('Junaid Jamshed','Us Rah Par');
console.log(album3);