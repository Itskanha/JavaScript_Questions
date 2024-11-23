// 1. **Generate a random integer between two values:**  
//    ```javascript
//    console.log(getRandomInt(1, 10)); // Output: A random integer between 1 and 10
//    ```

function getRandomInt(numStart, numEnd) {
    
    // Generate a random integer between numStart and numEnd (inclusive)
    let random = Math.floor(Math.random() * (numEnd - numStart + 1)) + numStart;
    
    // Return the random integer
    return random;
}

// Example usage: Get a random integer between 6 and 10
console.log(getRandomInt(6, 10)); // Output: A random integer between 6 and 10
