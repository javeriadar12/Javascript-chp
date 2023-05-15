// --------------Question 2----------------
// What will be the output in variables a, b & result after
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// Explain the output at each stage:
// --a;
// --a - --b;
// --a - --b + ++b;
// --a - --b + ++b + b--; 


// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;


// --a;

// The value of a is decremented by 1 (pre-decrement). So, a becomes 1.
// The output of this stage is undefined since it is only updating the value of a.
// --a - --b;

// The value of a is decremented by 1 (pre-decrement). So, a becomes 0.
// The value of b is decremented by 1 (pre-decrement). So, b becomes 0.
// The subtraction --a - --b is performed: 0 - 0 = 0.
// The output of this stage is 0.
// --a - --b + ++b;

// The value of a is decremented by 1 (pre-decrement). So, a becomes -1.
// The value of b is incremented by 1 (pre-increment). So, b becomes 1.
// The previous result 0 is added to ++b: 0 + 1 = 1.
// The output of this stage is 1.
// --a - --b + ++b + b--;

// The value of a is decremented by 1 (pre-decrement). So, a becomes -2.
// The value of b is decremented by 1 (post-decrement). So, b becomes 0.
// The previous result 1 is added to b-- (post-decrement): 1 + 1 = 2.
// The output of this stage is 2.
// At the end of the script:

// The value of a is -2.
// The value of b is 0.
// The value of result is 2.





// --------------Question 3------------------
// let name = prompt("Enter your name:");
// alert("Hello, " + name + "! Welcome!");

// ----------- Question 4------------------
// let number = +prompt("Enter a number:");

// if (isNaN(number)) {
//     number = 5;
// }

// let table;
// for (let i = 1; i <= 10; i++) {
//     table += number + " x " + i + " = " + number * i + "<br>";
// }

// document.write(table);

// -------------Question 6-----------------
// let subject1 = prompt("Enter the name of Subject 1:");
// let subject2 = prompt("Enter the name of Subject 2:");
// let subject3 = prompt("Enter the name of Subject 3:");

// let totalMarks = 100;

// Prompt the user to enter the obtained marks for each subject
// let obtainedMarks1 = +prompt("Enter the obtained marks for " + subject1 + ":");
// let obtainedMarks2 = +prompt("Enter the obtained marks for " + subject2 + ":");
// let obtainedMarks3 = +prompt("Enter the obtained marks for " + subject3 + ":");

// let totalObtainedMarks = obtainedMarks1 + obtainedMarks2 + obtainedMarks3;
// let percentage = (totalObtainedMarks / (3 * totalMarks)) * 100;
// let table = `
//     <table>
//         <tr>
//             <th>Subject</th>
//             <th>Total Marks</th>
//             <th>Obtained Marks</th>
//         </tr>
//         <tr>
//             <td>{subject1}</td>
//             <td>{totalMarks}</td>
//             <td>{obtainedMarks1}</td>
//         </tr>
//         <tr>
//             <td>{subject2}</td>
//             <td>{totalMarks}</td>
//             <td>{obtainedMarks2}</td>
//         </tr>
//         <tr>
//             <td>{subject3}</td>
//             <td>{totalMarks}</td>
//             <td>{obtainedMarks3}</td>
//         </tr>
//         <tr>
//             <td colspan="2">Total</td>
//             <td>{totalObtainedMarks}</td>
//         </tr>
//         <tr>
//             <td colspan="2">Percentage</td>
//             <td>{percentage}%</td>
//         </tr>
//     </table>
// `;

// Display the table on the browser
// document.write(table);