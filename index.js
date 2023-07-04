// This is my first JavaScript code!
console.log('Hello World');

// variables
// used to be called with 'var' but now use 'let'
// user meaningful names for variables
// variables cannot start with a number
// variables cannot contain a space or hyphen
// use camelCase

let name = 'verbal';
console.log(name);

// multiple variables get called inidividually
let firstName = 'Jean-Claude';
let lastName = 'Van Damme';
console.log(firstName, lastName);

// constants
// cannot be changed unlike variables
const interestRate = 0.3;
console.log(interestRate);

// primitives (value-types)
// string, number, boolean, undefined, null
let face = 'my_face'; // string literal
let age = 30; // number literal
let isApproved = true; // boolean literal
let favoriteTaco = undefined; // undefined is both a type and a value
let biggestMoon = null; // null (clears value of variable)

// typeof operator (returns the value-type)
// e.g. typeof favoriteTaco

console.log(typeof isApproved)

// reference types
// object, array, function

// object
// objects have properties
// curly braces {} denote an object literal
let person = { 
	name: 'Mosh',
	age: 30
};
console.log(person);

// dot notation to access a property
person.name = 'John'; // preferred for aesthetics

// bracket notation to access a property
person['name'] = 'Mary'; // bracket is useful if a user is selecting input at runtime
// e.g.
let selection = 'name';
person[selection] = 'Mary';
console.log(person.name);

// array
// stores lists
// arrays are types of objects
// let selectedColors = [] // array literal (empty)
let selectedColors = ['red', 'black'];
console.log(selectedColors)

// to display an element of an array call it by its position 0, 1...
console.log(selectedColors[0]) // logs red

// arrays can be expanded
selectedColors[2] = 'green';
console.log(selectedColors);
// different types can be stored in the same array
selectedColors[3] = 99;
console.log(selectedColors);

// properties can be called from the array object
console.log(selectedColors.length); // logs the length of the array

// functions
// set of statements that performs a task or calculates a value
// example of a function that performs a task
function greet() {
	console.log('Hello World');
}

greet();

// function inputs
function greeter(names) { // the names variable is a parameter which is only meaningful inside the function
	console.log('Hello ' + names);
}

greeter('John'); // john is an argument which is the value of a parameter
greeter('Mary');
// functions can have multiple inputs
function greetest(gangstaName, wuTangName) {
	console.log('Hello ' + gangstaName + ' ' +  wuTangName);
}

// this will return a "Bob undefined"
greetest('Bob')
// works as intended
greetest('blood', 'bearfacekillah');

// example of a function that calculates a value
function square(number) {
	return number * number;
}
// display function
console.log(square(2));
// set to variable then display
let number = square(2);
console.log(number);
