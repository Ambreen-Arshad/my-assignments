// Date 26-3-2024
// This is "Ambreen",and you are watching the solution of the problem no 45 in typescript assignment.

// Cars: Write a function that stores information about a car in a Object. \n
// The function should always receive a manufacturer and a model name. \n
// It should then accept an arbitrary number of keyword arguments. \n
// Call the function with the required information and two other name-value pairs, \n
// such as a color or an optional feature. Print the Object that’s returned to make sure all the information \n
// was stored correctly.

import { features } from "process";

function storeCarInfo(manufacturer : string, modelName : string, ...extraOption :{

[key : string] : any}[]) : object {
    const carInfo = {
        manufacturer,
        modelName,
        ...Object.assign({},...extraOption)
    }
    return carInfo;
};

let answare = storeCarInfo('Honda','Civic',{color : 'black'},{features : ['Navigation','Power window']})

console.log(answare);