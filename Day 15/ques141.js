// 1. **Demonstrate variable scoping with `var`:**  


var x = 1; // Global scope variable
console.log("Outside block:", x); // Output: Outside block: 1

if (true) {
    var x = 2; // Same variable as the outer x, not block-scoped
    console.log("Inside block:", x); // Output: Inside block: 2
}

console.log("After block:", x); // Output: After block: 2
