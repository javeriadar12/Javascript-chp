// ---------------Question 1-------------
// let character = +prompt("Enter a character:");

// Check if the input is a number
// if (!isNaN(character)) {
//     console.log(character + " is a number.");
// } else {
//     // Convert the character to ASCII code
//     let ASCII = character.charCodeAt(0);

//     // Check if the input is an uppercase letter
//     if (ASCII >= 65 && ASCII <= 90) {
//         console.log(character + " is an uppercase letter.");
//     }
//     // Check if the input is a lowercase letter
//     else if (ASCII >= 97 && ASCII <= 122) {
//         console.log(character + " is a lowercase letter.");
//     }
//     // Otherwise, the input is neither a number, uppercase letter, nor lowercase letter
//     else {
//         console.log(character + " is neither a number, uppercase letter, nor lowercase letter.");
//     }
// }

// -----------------Question 2----------------
// let firstNumber = +prompt("Enter the first integer:");
// let secondNumber = +prompt("Enter the second integer:");
// if (firstNumber === secondNumber) {
//     console.log("The two integers are equal.");
// } else {
//     // Find the larger number
//     let largerNumber = firstNumber > secondNumber ? firstNumber : secondNumber;

//     console.log("The larger number is: " + largerNumber);
// }

// ------------Question 3-------------------
// let number = +prompt("Enter a number:");
// if (number > 0) {
//     console.log("The number is positive.");
// }
// else if (number < 0) {
//     console.log("The number is negative.");
// }
// else {
//     console.log("The number is zero.");
// }

// --------------Question 4------------------
// let character = +prompt("Enter a character:");

// Convert the character to lowercase for easier comparison
// character = character.toLowerCase();

// // Check if the character is a vowel
// let theVowel = false;

// if (
//     character === "a" 
//     character === "e" 
//     character === "i" 
//     character === "o"
//     character === "u"
// ) {
//     theVowel = true;
// }

// // Display the result
// if (theVowel) {
//     console.log("The character is a vowel.");
// } else {
//     console.log("The character is not a vowel.");
// }

// -------------Question 6----------------
// let greeting;
// let hour = 13;
// if (hour < 18) {
//   greeting = "Good day";
// } else {
//   greeting = "Good evening";
// }

// -------------Question 7------------------
// let time = +prompt("Enter the time in 24-hour format (e.g., 1900 for 7pm):");
// if (hour >= 0 && hour < 12) {
//     console.log("Good morning!");
// } else if (hour >= 12 && hour < 18) {
//     console.log("Good afternoon!");
// } else if (hour >= 18 && hour < 21) {
//     console.log("Good evening!");
// } else if (hour >= 21 && hour <= 23) {
//     console.log("Good night!");
// } else {
//     console.log("Invalid time format!");
// }