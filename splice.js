/**
 * In this file, we're looking at how to reach deep into an object 
 * and update a specific value within a nested array.
 */

const employees = [
  {
    eno: 101,
    name: 'Ravi',
    marks: [78, 82, 91],
  },
  {
    eno: 102,
    name: 'Bhanu',
    marks: [65, 70, 68],
  },
  {
    eno: 103,
    name: 'Sneha',
    marks: [88, 92, 95]
  },
  {
    eno: 104,
    name: 'Kiran',
    marks: [55, 60, 58],
  },
  {
    eno: 105,
    name: 'Anitha',
    marks: [90, 85, 87],
  },
];

// Let's find 'Sneha' in our list and update her last mark.
for (v in employees) {
  if (employees[v].name === 'Sneha') {
    // We found her! Now we use .splice() to change her last mark to 75.
    // .splice(position, how many to remove, new value)
    employees[v].marks.splice(employees[v].marks.length - 1, 1, 75);
  }
}

console.log("Updated Employees:", employees);