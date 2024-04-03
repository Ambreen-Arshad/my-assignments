// Date 19-3-2024
// This is "Ambreen",and you are watching the solution of the problem no 38 in typescript assignment.
// Cities: Write a function called describe_city() that accepts the name of a city and its country. \n
// The function should print a simple sentence, such as Karachi is in Pakistan. \n
// Give the parameter for the country a default value. Call your function for three different cities,\n
// at least one of which is not in the default country.
function describe_city(city, country = 'Default Country.') {
    console.log(`${city} is in ${country}`);
}
describe_city('Karachi', 'Pakistan');
describe_city('Tokyo', 'Japan');
describe_city('Paris');
export {};
