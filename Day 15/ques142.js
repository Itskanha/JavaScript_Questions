// 2. **Demonstrate variable scoping with `let`:**  


let y = 1; // Global scope variable
console.log("Outside block:", y); // Output: Outside block: 1

if (true) {
    let y = 2; // This is a different variable, scoped to this block
    console.log("Inside block:", y); // Output: Inside block: 2
}

console.log("After block:", y); // Output: After block: 1
