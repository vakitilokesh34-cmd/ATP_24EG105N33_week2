/**
 * Hey there! This file is all about playing around with functions in JavaScript.
 * We'll look at how to declare them, how to store them in variables, 
 * and even how to make functions that spit out other functions!
 */

// 1. The Classic Way (Function Declaration)
// This is the standard way to write a function. It's like giving a recipe a name.
function test() {
  return 100; // Let's just return a simple number for now.
}

console.log(test()); // Let's see what it gives us!
let result = test(); // We can also save that result to use it later.

// 2. The Modern Way (Function Expression)
// Here, we're treating a function like a value and assigning it to a variable.
let test1 = function() {
  return 100;
};

let result1 = test1(); // Running the function via its variable name.
console.log(result1);

// 3. The "Function Factory" (Higher-Order Function)
// This is where it gets cool. A function that returns another function!
let test2 = function() {
  // When you call test2, it hands you back this inner function.
  return function() {
    return 100;
  };
};

let result2 = test2(); // result2 is now that inner function.
console.log(result2()); // And calling result2 finally gives us our 100.


