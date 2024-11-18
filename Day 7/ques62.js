// 2. **Compose two functions:**  
//    ```javascript
//    console.log(compose(double, addOne)(2)); // Output: 5
//    ```

// Function to double a number
function double(x) {
    return x * 2; // Returns double the input
}

// Function to add one to a number
function addOne(x) {
    return x + 1; // Returns input plus one
}

// Compose function that combines two functions
function compose(f, g) {
    return function(x) {
        return g(f(x)); // First apply f, then g to the result
    };
}

// Usage
console.log(compose(double, addOne)(2)); // Output: 5