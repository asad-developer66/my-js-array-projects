// chapter 15-16







// Question 1:

// Declare an empty array using JS literal notation to store student names in future.

// Answer 

// let studentNames = [];

// Question 2:

// Declare an empty array using JS object notation to store student names in future.

// Answer 

// let studentNames2 = new Array();


// Question 3:


// Declare and initialize a strings array.

// Answer 

// let fruits = ["Apple", "Mango", "Banana", "Orange"];



// Question 4:

// Declare and initialize a numbers array.

// Answer 

// let numbers = [10, 20, 30, 40, 50];


// Question 5:

// Declare and initialize a boolean array.


// Answer 
// let boolValues = [true, false, true, false];


// Question 6:

// Declare and initialize a mixed array.


// Answer 
// let mixedArray = ["Ali", 25, true, 45.5];


// Question 7:

// Declare and Initialize an array and store available education qualifications in Pakistan
// (e.g. SSC, HSC, BCS, BS, BCOM, MS, M. Phil., PhD).
// Show the listed qualifications in your browser.

// Answer 

// let education = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "MPhil", "PhD"];
// document.write("<h3>Qualifications in Pakistan:</h3>");
// for (let i = 0; i < education.length; i++) {
//   document.write((i + 1) + ") " + education[i] + "<br>");
// }


// Question 8:

// Write a program to store 3 student names in an array.
// Take another array to store the score of these three students.
// Assume that total marks are 500 for each student.
// Display the scores & percentages of students.

// Answer 


// let students = ["Ali", "Ahmed", "Sara"];
// let scores = [400, 350, 480];
// let totalMarks = 500;

// for (let i = 0; i < students.length; i++) {
//   let percentage = (scores[i] / totalMarks) * 100;
//   document.write(students[i] + " scored " + scores[i] + 
//   " marks (" + percentage + "%)<br>");
// }


// Question 9:

// Initialize an array with color names. Display the array elements in your browser.

// a. Ask the user what color he/she wants to add to the beginning & add that color to the beginning of the array. Display the updated array.
// b. Ask the user what color he/she wants to add to the end & add that color to the end of the array. Display the updated array.
// c. Add two more colors to the beginning of the array. Display the updated array.
// d. Delete the first color in the array. Display the updated array.
// e. Delete the last color in the array. Display the updated array.
// f. Ask the user at which index he/she wants to add a color & color name. Then add the color to desired position/index. Display the updated array.
// g. Ask the user at which index he/she wants to delete color(s) & how many colors he/she wants to delete. Then remove the same number of color(s) from user-defined position/index. Display the updated array.

// // Answer 

// let colors = ["Red", "Green", "Blue"];
// document.write(colors + "<br>");

// a
// let startColor = prompt("Add color to start:");
// colors.unshift(startColor);
// document.write(colors + "<br>");

// b
// let endColor = prompt("Add color to end:");
// colors.push(endColor);
// document.write(colors + "<br>");

// c
// colors.unshift("Purple", "Orange");
// document.write(colors + "<br>");

// d
// colors.shift();
// document.write(colors + "<br>");

// e
// colors.pop();
// document.write(colors + "<br>");

// f
// let indexAdd = +prompt("At which index to add color?");
// let colorAdd = prompt("Which color?");
// colors.splice(indexAdd, 0, colorAdd);
// document.write(colors + "<br>");

// g
// let indexDel = +prompt("At which index to delete color(s)?");
// let countDel = +prompt("How many colors to delete?");
// colors.splice(indexDel, countDel);
// document.write(colors + "<br>");

// Question 10:

// Write a program to store student scores in an array & sort the array in ascending order using Array’s sort method.

// Answer 

// let scores = [320, 230, 480, 120];
// document.write("Scores: " + scores + "<br>");
// scores.sort();
// document.write("Ordered Scores: " + scores);


// Question 11:
// Write a program to initialize an array with city names.
// Copy 3 array elements from cities array to selectedCities array.

// Answer 

// let cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
// let selectedCities = cities.slice(1, 4);
// document.write("Cities list: " + cities + "<br>");
// document.write("Selected cities: " + selectedCities);



// Question 12:

// Write a program to create a single string from the below mentioned array:

// Answer 


// let arr = ["This ", " is ", " my ", " cat"];
// let sentence = arr.join("");
// document.write(sentence);

// Question 13:

// Create a new array.
// Store values one by one in such a way that you can access the values in the order in which they were stored.
// (FIFO – First In First Out)

// Answer 

// let fifo = [];
// fifo.push("Keyboard");
// fifo.push("Mouse");
// fifo.push("Printer");
// fifo.push("Monitor");

// document.write(fifo.shift() + "<br>");
// document.write(fifo.shift() + "<br>");
// document.write(fifo.shift() + "<br>");
// document.write(fifo.shift() + "<br>");





// Question 14:

// Create a new array.
// Store values one by one in such a way that you can access the values in reverse order.
// (LIFO – Last In First Out)

// Answer 
// let lifo = [];
// lifo.push("Keyboard");
// lifo.push("Mouse");
// lifo.push("Printer");
// lifo.push("Monitor");

// document.write(lifo.pop() + "<br>");
// document.write(lifo.pop() + "<br>");
// document.write(lifo.pop() + "<br>");
// document.write(lifo.pop() + "<br>");



// Question 15:

// Write a program to store phone manufacturers
// (Apple, Samsung, Motorola, Nokia, Sony & Haier) in an array.
// Display the following dropdown/select menu in your browser using document.write() method.

// Answer 

// let phones = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

// document.write("<select>");
// for (let i = 0; i < phones.length; i++) {
//   document.write("<option>" + phones[i] + "</option>");
// }
// document.write("</select>");






// chapter 17-20








// Question 1:


// Declare and initialize an empty multidimensional array. (Array of arrays)

// Answer 

// let multiArray = [[], [], []];

// Question 2:

// Declare and initialize a multidimensional array representing the following matrix:

// Answer 


// let matrix = [
//   [0, 1, 2, 3],
//   [1, 0, 1, 2],
//   [2, 1, 0, 1]
// ];

// for (let i = 0; i < matrix.length; i++) {
//   document.write(matrix[i].join(" ") + "<br>");
// }



// Question 5:

// Write a program to print items of the following array using for loop:
// fruits = ["apple", "banana", "mango", "orange", "strawberry"]

// Answer 



// let fruits = ["apple", "banana", "mango", "orange", "strawberry"];

// for (let i = 0; i < fruits.length; i++) {
//   document.write(fruits[i] + "<br>");
// }



// Question 7:


// You have an array:
// A = ["cake", "apple pie", "cookie", "chips", "patties"]

// Write a program to enable “search by user input” in an array.
// After searching, prompt the user whether the given item is found in the list or not.

// Answer 

// let bakeryItems = ["cake", "apple pie", "cookie", "chips", "patties"];
// let userInput = prompt("Welcome to ABC Bakery! What do you want to order?").toLowerCase();

// let found = false;

// for (let i = 0; i < bakeryItems.length; i++) {
//   if (bakeryItems[i] === userInput) {
//     found = true;
//     document.write(userInput + " is available at index " + i + " in our bakery.");
//     break;
//   }
// }

// if (!found) {
//   document.write("We are sorry. " + userInput + " is not available in our bakery.");
// }

// Question 8:

// Write a program to identify the largest number in the given array.
// A = [24, 53, 78, 91, 12]


// Answer 


// let A = [24, 53, 78, 91, 12];
// let largest = A[0];

// for (let i = 1; i < A.length; i++) {
//   if (A[i] > largest) {
//     largest = A[i];
//   }
// }

// document.write("Array items: " + A + "<br>");
// document.write("The largest number is " + largest);




// Question 9:

// Write a program to identify the smallest number in the given array.
// A = [24, 53, 78, 91, 12]

// Answer 

// let A = [24, 53, 78, 91, 12];
// let smallest = A[0];

// for (let i = 1; i < A.length; i++) {
//   if (A[i] < smallest) {
//     smallest = A[i];
//   }
// }

// document.write("Array items: " + A + "<br>");
// document.write("The smallest number is " + smallest);


