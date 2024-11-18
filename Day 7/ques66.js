// 6. **Implement a function that returns a memoized version of a function:**  
//    ```javascript
//    const memoizedFib = memoize(fib);
//    console.log(memoizedFib(5)); // Output: 5
//    ```

// Simple recursive Fibonacci function
function fib(n) {
    if (n <= 1) return n; // Base cases
    return fib(n - 1) + fib(n - 2); // Recursive calls
}


// Memoization function
function memoize(fn) {
    const cache = {}; // Object to store cached results
    return function(...args) {
        const key = JSON.stringify(args); // Create a unique key for the arguments
        if (cache[key]) {
            return cache[key]; // Return cached result if available
        }
        const result = fn(...args); // Call the original function
        cache[key] = result; // Store the result in cache
        return result; // Return the result
    };
}

// Usage
const memoizedFib = memoize(fib);
console.log(memoizedFib(5)); // Output: 5
