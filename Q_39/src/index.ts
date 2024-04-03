// Date 19-3-2024
// This is "Ambreen",and you are watching the solution of the problem no 39 in typescript assignment.

// City Names: Write a function called city_country() that takes in the name of a city and its country.\n
// The function should return a string formatted like this:

//"Lahore, Pakistan"

//Call your function with at least three city-country pairs, and print the value that’s returned.

function city_country(city :string , country :string){

    return`${city},${country}`;

}

console.log(city_country('Lahore','Pakistan'));

console.log(city_country('Pairs','France'));

console.log(city_country('Tokyo','Japan'));

console.log(city_country('Mumbay','India'));