//var, let, const
//var has global scope...
//let and const are introduced later and have block level scope...which is good and recommended

let age2 = 30;
age2 = 31;
console.log(age2);

const age1 = 30; //use this unless u know r going to reassign it!!

console.log(age1);

const name = "Samrat"; //Semicolons are not mandatory. U can have double or single quotes!!
const age = 23; //number
const rating = 4.5; //float or double actually doesnt exist in js.... So this act as number
const isCool = true; //boolean
const null_value = null; //this is a null data type
const x = undefined; //This is undefined data type
let y; //this is also undefined dayta type

console.log(typeof rating);

// String operations

//1.Concatenation
console.log("My name is " + name + " and I am " + age);
//Above is the old school way of doing it!!
//After ES6, this is the new way of doing it:
console.log(`My name is ${name} and my age is ${age}`);

//2.Properties
const s = "Hello World!!";
console.log(s.length); //As this is a property, we dont need braces!!... If we need braces, it is a method!!

//3.Methods
console.log(s.substring(0, 7).toUpperCase());

console.log(s.split("")); //split method splits the string to arrays... if '' then split by each charecter... else we can also specify any other seperator like ', ' or just ' 'and all the words seperated by these will be turned to arrays

//Arrays

const A = ["apple"];
A[1] = "hello!!";
console.log(A[0]);

//There is a bunch of functions that can be used for arrays, push(), pop(), isArray(), unshift(), indexOf(), etc. Go and find them

const person = {
  fname: "Shiladitya",
  lname: "Chatterji",
  hobbies: ["movies", "books", "music"],
  address: {
    street: "B M Lane",
    city: "Kolkata"
  }
};
console.log(person.hobbies[0]);
