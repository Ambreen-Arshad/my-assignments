// Date 14-3-2024
// This is "Ambreen",and you are watching the solution of the problem no21 in typescript assignment.

// They think of something you could store in a TypeScript Object.\n
// Write a program that creates Objects containing these items.

// const personName_Array : string[] = ['person','car','bird'];

// Datatype of person object
interface person{
    age:number,
    name:string,
    nationality:string,
    student:boolean
}
// person object
let person:person={
    age:38,
    name:"Ambreen",
    nationality:"Pakistani",
    student:true
}
// ptint person
console.log(person);
// Datatype of car object
interface car {
    maker : string ,
    color : string ,
    automatic : boolean
}

// car object
let car : car  = {
    maker : 'Toyota',
    color : 'Black',
    automatic : true
}
// print car
console.log(car); 
//Datatype of bird object
interface bird {
    name : string,
    color : string,
    age :  number,
    beauty : boolean
}

// bird object
let bird : bird  = {
    name : 'parote',
    color : 'green',
    age : 9 ,
    beauty : true
}
// print bird
console.log(bird);