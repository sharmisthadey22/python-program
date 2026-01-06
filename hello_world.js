//console.log("Hello, World!");



// Q1) Write a program to create an array and 
//     a) insert an item "1" in the array and print the array;
//     b) insert an item 1 in the array and print the array;
//     c) insert an item
// {
//         name:"Sharmistha";
//         age: 30;
//         father: "xyz";
//         mother: "xyz1";
//     }
//       in the array at index 1 and print the array;
//      d) remove age from the item 1 and print the array;
//      e) add item "school" at item 1 and print the array;
//      f) print the value of "father" from index 1 and print the array;
//      g) create two variable "a" and "b", add them and push the item in the array. Print the array. 
//      h) create two variable "a" and "b", subtract them and push the item in the array. Print the array. 
//      i) create two variable "a" and "b", multiply them and push the item in the array. Print the array. 
//      j) create two variable "a" and "b", divide them and push the item in the array. Print the array. 
//      k) create two variable "a" and "b", check "a" equals "b" and push the item in the array. Print the array. 
//      l) create two variable "a" and "b", check "a" not equals "b" and push the item in the array. Print the array. 
//      m) create two variable "a" and "b", check "a" equals "b" and push the opposite value in the array. Print the array.

//Initialize an empty array called
'my Array'
let myArray = [];

console.log( "---Initial Array---");
console.log(myArray);

//a) Insert an item "1" in the array and print the array.
console.log("\na) Insert string'1");
myArray.push("1");
console.log( myArray);
//b) Insert an item 1 in the array and print the array.
console.log("\nb) Insert number 1");
myArray.push(1);
console.log(myArray);
//c) Insert an item {name :"Sharmistha" , age:30, father:"xyz", mother:"xyz1"} in the array at index 1 and print the array.
console.log("\nc) Insert object at index 1");
const newItemC = {
    name : "Sharmistha",
    age: 30,
    father: "xyz",
    mother: "xyz1"
};
myArray.splice(1,0,newItemC);  //splice()method use karke index, or item ko data insert kar rahe hain  
console.log(myArray); //bina removeing karke existing elements ko shift kar deta hai right side me  ghusa deta hai append ka kam karta hai 
//d) remove age from the item 1 and print the array.
console.log("\nd) remove age from item at index 1");// item 1 (index 1 me jo object hai usme se age property  add karna hai )
if (myArray.length>1 && typeof myArray[1]==='object'&& myArray[1]!==null) {
    delete myArray[1].age; //object ke ander se property ko remove karna hai or delete key word use karna hai .
}
console.log(myArray);
//e) add item "school" at item 1 and print the array.
console.log("\ne) add item 'school' at item 1");
if (myArray.length>1 && typeof myArray[1]==='object'&& myArray[1]!==null) {
myArray[1].school = "abc school"; // object me new property add karna hai.
}
console.log(myArray);
//f) print the value of "father" form index 1 and prind the array.
console.log("\nf) print the value of 'father' form index 1");
if (myArray.length>1 && typeof myArray[1]==='object'&& myArray[1]!==null) {
    console.log("father:", myArray[1].father); // object ke ander se property ko access karna hai.
}
console.log(myArray); //array ke ander koi change nahe hua hai sarf print kiya hai

//g) create two variable "a" and "b", add them and push the item in the array. print the array.
console.log("\ng) create two variable 'a' and 'b', add them and push the item in the array.");
let a = 10;   //
let b = 5;
let sum = a+b;  //kuchh kam nahe dono variable ko + kar array me push karna hai bus.
myArray.push(sum);
console.log(myArray);
//h) create two variable "a" and "b", subtract them and push the item in the array. print the array.
console.log("\nh) create two variable 'a' and 'b', subtract them and push");
let a_h = 10;
let b_h = 5;
let diff = a_h - b_h; // bus sem he hai  dono variable ko - karke array me push karna hai.
myArray.push(diff);
console.log(myArray);
//i) create two variable "a" and "b", multiply them and push the item in the array. print the array.
console.log("\ni) create two variable 'a' and 'b', multiply them and push");
let a_i = 10;
let b_i =5;
let property =a_i * b_i; // dono variable ko * karke array me push karna hai bus .
myArray.push(property);
console.log(myArray);
//j) create two variable "a" and "b", divide them and push the item in the array. print the array.
console.log("\nj) create two variable 'a' and 'b', divide them and push");
let a_j =10;
let b_j =5;
let quotient = a_j / b_j; // dono variable ko / karke array me push karna hai bus.
myArray.push(quotient);
console.log(myArray);
//k) create two variable "a" and "b", check "a" equals "b" and push the item in the array.print the array.
console.log("\nk) create two variable 'a' and 'b', check 'a' equals 'b' and push");

let a_k =10;
let b_k =10;
let isEqual = (a_k === b_k); // dono ko same ki na check karna hai  or boolean ko array me push karna hai.
myArray.push(isEqual);
console.log(myArray);
//l) create two variable"a" and "b", check "a" not equals "b" and push the item in the array.print the array.
console.log("\nl) create two variable 'a' and 'b', check 'a' not equals 'b' and push");
let a_l =10;
let b_l =5;
let isnotEqual = (a_l !== b_l); // dono same  nahe hai  check karna hai  or boolean ko array me push karna hai.
myArray.push(isnotEqual);
console.log(myArray);
//m) create two variable "a" and "b", check "a" not equals "b" and push the item in the array.print the array.
console.log("\nm) create two variable 'a' and 'b', check 'a' not equals 'b' and push the opposite (negation)");
let a_m =10;
let b_m =10;
let isnotEqual2 = (!(a_m == b_m)); // dono same  hai  ka nahe  check karna hai bus or boolean pe opposite value array me push karna hai bus .
myArray.push(isnotEqual2);
console.log(myArray);


// // Initialize an empty array
// let myArray = [];
// console.log("Initial array: " + myArray);

// // a) insert an item "1" in the array and print the array
// myArray.push("1");
// console.log("a) After inserting '1' (string): " + myArray);

// // b) insert an item 1 in the array and print the array
// myArray.push(1);
// console.log("b) After inserting 1 (number): " + myArray);

// // c) insert a complex object in the array at index 1 and print the array
// const complexObject = {
//     name: "Sharmistha",
//     age: 30,
//     father: "xyz",
//     mother: "xyz1"
// };
// myArray.splice(1, 0, complexObject); // Splice to insert at index 1 without removing existing
// console.log("c) After inserting object at index 1:", myArray);

// // d) remove 'age' from the item at index 1 and print the array
// // The item at index 1 is now the complexObject
// delete myArray[1].age;
// console.log("d) After removing 'age' from item at index 1:", myArray);

// // e) add item "school" to the item at index 1 and print the array
// // Assuming "add item" means adding a property to the object
// myArray[1].school = "Example School";
// console.log("e) After adding 'school' property to item at index 1:", myArray);

// // f) print the value of "father" from index 1 and print the array
// console.log("f) Value of 'father' at index 1: " + myArray[1].father);
// console.log("   Current array:", myArray);

// // g) create two variable "a" and "b", add them and push the item in the array. Print the array.
// let a_g = 5;
// let b_g = 10;
// myArray.push(a_g + b_g);
// console.log("g) After adding a + b (15) to the array: " + myArray);

// // h) create two variable "a" and "b", subtract them and push the item in the array. Print the array.
// let a_h = 20;
// let b_h = 5;
// myArray.push(a_h - b_h);
// console.log("h) After subtracting a - b (15) to the array: " + myArray);

// // i) create two variable "a" and "b", multiply them and push the item in the array. Print the array.
// let a_i = 3;
// let b_i = 4;
// myArray.push(a_i * b_i);
// console.log("i) After multiplying a * b (12) to the array: " + myArray);

// // j) create two variable "a" and "b", divide them and push the item in the array. Print the array.
// let a_j = 100;
// let b_j = 10;
// myArray.push(a_j / b_j);
// console.log("j) After dividing a / b (10) to the array: " + myArray);

// // k) create two variable "a" and "b", check "a" equals "b" and push the item in the array. Print the array.
// let a_k = 5;
// let b_k = 5;
// myArray.push(a_k === b_k); // Using strict equality (===)
// console.log("k) After checking a === b (true) to the array: " + myArray);

// // l) create two variable "a" and "b", check "a" not equals "b" and push the item in the array. Print the array.
// let a_l = 5;
// let b_l = 10;
// myArray.push(a_l !== b_l); // Using strict inequality (!==)
// console.log("l) After checking a !== b (true) to the array: " + myArray);

// // m) create two variable "a" and "b", check "a" equals "b" and push the opposite value in the array. Print the array.
// let a_m = 5;
// let b_m = 5;
// myArray.push(!(a_m === b_m)); // Check equality, then use logical NOT (!) for the opposite value
// console.log("m) After checking a === b and pushing the opposite value (false) to the array: " + myArray);

