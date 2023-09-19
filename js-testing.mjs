// function type 1
function doSomething() {
    console.log('hello');
}
doSomething();

// function type 2
const saySomething = function () {
    console.log('something');
}
saySomething();

// arrow type
const x = () => console.log('x');
x()

// object
const obj = { a: 1, b: 2, c: 3 }
console.log(obj['a']);

// array
const arr = [1, 2, 3];
console.log(arr[1]);
console.log(Array.isArray(arr));
console.log(arr.length);

// destructuring - like unpacking in Python
let [a, b, ...rest] = [10, 20, 30, 40, 50];
console.log(rest);

// templating
const myName = 'Heisenberg';
const myString = `Hello ${myName}`;
console.log(myString);

// ternary operators
const orange = {
    isApple: false
}
const message = orange.isApple ? 'It\'s an apple!' : "It\'s an orange!";
console.log(message);

// imports
import { myVariable, numberOne, numberTwo } from "./js-testing-import-export.mjs";
console.log(`Hello there, ${myVariable} - ${numberOne} - ${numberTwo}`);
