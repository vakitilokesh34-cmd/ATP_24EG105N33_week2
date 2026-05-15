/**
 * Welcome to the 'All-in-One' JavaScript guide! 
 * We're going to cover everything from how functions work to managing 
 * collections like arrays and objects. Think of this as your JS sandbox.
 */

/* 
 * 1. FUNCTIONS ARE JUST VALUES
 * In JS, you can treat functions like any other variable. 
 * You can save them, pass them around, and even return them.
 */

/*
let createGame = function(nameOfPlayer) {
  // This function returns ANOTHER function. It's like a factory!
  return function(level) {
    console.log(`Hello ${nameOfPlayer}, You are at level ${level}`);
  };
};

// We create a specific version of our 'level tracker' for Ravi.
let createLevel = createGame("Ravi"); 
createLevel(1); // Ravi is starting out...
createLevel(2); // He's moving up!
createLevel(3);

// 2. CALLBACKS (Passing functions as helpers)
let test = function(a) {
  // We're expecting 'a' to be a function, and we just run it here.
  console.log(a()); 
};

test(function() {
  console.log("Hey, I'm a callback!");
});

// 3. REAL-WORLD CALLBACK: A Payment Flow
let makePayment = function(amount, paymentType) {
  console.log(`Starting a payment for $${amount}...`);
  paymentType(); // Now we call the specific payment method.
};

let UPIPayment = function() {
  console.log("Done via UPI!");
};

let cardPayment = function() {
  console.log("Done via Card!");
};

makePayment(2000, UPIPayment);
makePayment(3000, cardPayment);

// 4. CLOSURES (The 'Memory' of Functions)
// Functions can 'remember' the variables that were around when they were created.
let sum = function(x) {
  return function(y) {
    return x + y; // It still remembers what 'x' was!
  };
};

let addTen = sum(10);
console.log(addTen(20)); // Gives us 30 because it remembered the 10.

// 5. ARRAYS (Lists of stuff)
let marks = [20, 35, 29, 49, 17];
let names = ['Lokesh', 'Ritesh', 'Nagesh'];

console.log("Let's look at some marks:");
for (let v of marks) {
  console.log(v);
}

// 6. OBJECTS (Key-Value pairs)
// Like a mini-database for a single thing (in this case, a student).
let Student = {
  sid: 100,
  sname: "Lokesh",
  sage: 19,
  course: "B.tech"
};

console.log("Student ID is:", Student.sid); 
console.log("Their name is:", Student['sname']); 

// Let's loop through everything we know about this student.
for (let v in Student) {
  console.log(`${v}: ${Student[v]}`); 
}

// 7. ARRAY OF OBJECTS (The most common data structure)
let emps = [
  { eno: 1, name: "Bhanu" },
  { eno: 2, name: "Lokesh" },
  { eno: 3, name: "Sathish" }
];

console.log("Our Employee List:");
for (let v of emps) {
  console.log(`ID: ${v.eno}, Name: ${v.name}`);
}

// 8. PUTTING IT ALL TOGETHER (Complex Objects with Logic)
let student = {
  rollNo: 1,
  firstName: "Lokesh",
  lastName: "Vakiti",
  marks: [90, 60, 40, 30, 40],
  address: {
    city: "Hyd",
    pincode: 508256
  },
  // A method to get the full name
  getFullName: function() {
    return this.firstName + " " + this.lastName;
  },
  // A method to calculate the average mark
  averageMarks: function() {
    let sum = 0;
    for (let i = 0; i < this.marks.length; i++) {
      sum += this.marks[i];
    }
    return sum / this.marks.length;
  }
};

console.log("Full Name:", student.getFullName());
console.log("Average Score:", student.averageMarks());
*/

// 9. MESSING WITH ARRAYS (CRUD Operations)
// Let's take a simple array and see how we can change it on the fly.
let testArray = [10, 20, 30];

// --- Adding Items ---

// .push() puts it at the very end
testArray.push(40);

// .unshift() squeezes it into the very front
testArray.unshift(1);

// .splice() is like a multi-tool. 
// Here, we go to index 4, delete 0 things, and drop in 456.
testArray.splice(4, 0, 456);

console.log("After adding stuff:", testArray);

// --- Removing Items ---

// .shift() takes the first one out
let res = testArray.shift();

// .pop() takes the last one out
let res1 = testArray.pop();

// .splice() again! 
// This time, start at index 2 and delete 3 items.
let res2 = testArray.splice(2, 3);

console.log("After deleting stuff:", testArray);

// --- Updating Items ---

// .splice() can also replace!
// Go to index 2, remove 1 item, and put 33 in its place.
let res4 = testArray.splice(2, 1, 33);

console.log("After the update:", testArray);
