// Q.5 Fibonacci Sequence
// Write a function to generate the first `n` Fibonacci numbers.

function fibonacci(n) {
    let numbers = []; // Array to store Fibonacci numbers
    let a = 0; // First Fibonacci number
    let b = 1; // Second Fibonacci number
    let next; // Variable to hold the next Fibonacci number

    for (let i = 0; i < n; i++) {
        numbers.push(a); // Add the current Fibonacci number to the array
        next = a + b; // Calculate the next Fibonacci number
        a = b; // Update a to the next number in the sequence
        b = next; // Update b to the new next number
    }
    
    console.log(numbers); // Output the array of Fibonacci numbers
}

// Test the function
fibonacci(6); // Outputs: [0, 1, 1, 2, 3, 5]
