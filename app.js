console.log("Hello World!\n==========\n");
console.log(
  "Follow the steps in the README.md file to complete the exercises:\n==========\n"
);

// Exercise 1
const firstName = "Bertrand";
let lastName = "Mercier";
var myAge = 28;
// Exercise 2
let fullName = firstName +" " + lastName;
let templateFullName ='${firstName} ${lastName}'
console log("fullName", fullName);
console log("templateFullName", templateFullName);

// Exercise 3
let myStory;
let city = "New York";
let pasttime = "coding, walking, reading, and exercising";
myStory ='My name is ${fullName}. I live in ${city}. I enjoy ${pasttime} and coding!';

console.log(myStory);