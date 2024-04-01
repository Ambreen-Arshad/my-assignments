// Date 11-3-2024
// This is "Ambreen",and you are watching the solution of the problem no 6 in typescript assignment.
// Stripping Names: Store a person’s name, and include some whitespace characters at the beginning \n
// and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. \n
//Print the name once, so the whitespace around the name is displayed. \n
// Then print the name after striping the white spaces.
const personName = '    \n\tMuhammad Umar Khan\t\n    ';
console.log(personName);
const without_whitespace = personName.trim();
console.log(without_whitespace);
export {};
