// Date 19-3-2024
// This is "Ambreen",and you are watching the solution of the problem no 37 in typescript assignment.

// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that \n
// reads I love TypeScript. Make a large shirt and a medium shirt with the default message,\n
// and a shirt of any size with a different message.


function make_shirt(size : string = 'larg', text : string = 'I love Typescript.'){

    console.log(`creating a ${size} shirt with the messag : ${ text}`)

}
make_shirt();

make_shirt('Medium');

make_shirt('Small','I love Python');