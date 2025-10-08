/*let a="Hello"
const b="pradip"
var c=101;
console.log(a)
console.log(b)
console.log(c)
*/

/*datatypes- 
 # Primitive - String,Number,Boolean,null,undefined,symbol,BigInt
 # Non-Primitive - Array, Function, Object
*/

let score = 100;
let score1 = 100.4;
const isloggedIn = false;
const outsideTemp = null;
let message = "Hello";

const id = Symbol("123"); // Symbol is a primitive data type introduced in ES6 (ECMAScript 2015) that represents a unique and immutable identifier.
const userid = Symbol("123");
console.log(id == userid);

let bigNumber = 1245678787n;
//console.log(typeof bigNumber);

const myfunction = function () {
  console.log("Hello world!");
};
myfunction();

console.log(typeof myfunction);
