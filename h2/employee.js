/**
 * This is our employee management playground.
 * We'll learn how to add, remove, and update employees in a list.
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

// 1. ADDING A NEW EMPLOYEE
// Let's squeeze Lokesh into the second spot (index 1).
employees.splice(1, 0, { eno: 202, name: 'Lokesh', marks: [90, 96, 97] });

// 2. REMOVING AN EMPLOYEE
// Let's find 'Kiran' and remove them from the list.
for (v in employees) {
  if (employees[v].name === 'Kiran') {
    employees.splice(v, 1); // Delete 1 item at the current position 'v'
  }
}
console.log("List after removing Kiran:", employees);

// 3. UPDATING AN EMPLOYEE'S INFO
// Now, let's find 'Sneha' and change her last mark from 95 to 75.
for (v in employees) {
  if (employees[v].name === 'Sneha') {
    // Go to her marks array, find the last item, and replace it.
    employees[v].marks.splice(employees[v].marks.length - 1, 1, 75);
  }
}
console.log("Final updated employee list:", employees);
