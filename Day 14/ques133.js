// 3. **Chain multiple promises together:**  
//    ```javascript
//    promise1()
//        .then(result => promise2(result))
//        .then(finalResult => console.log(finalResult)); // Output: Final result
//    ```

// Function that returns a promise resolving to a value after a delay
function promise1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("First result"); // Resolve with "First result" after 1 second
        }, 1000);
    });
}

// Function that takes a value and returns a promise resolving to another value after a delay
function promise2(input) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Final result from: ${input}`); // Resolve with a message based on input after 2 seconds
        }, 2000);
    });
}

// Chaining multiple promises
promise1()
    .then(result => {
        console.log("Received:", result); // Log the result of promise1
        return promise2(result); // Pass the result to promise2
    })
    .then(finalResult => {
        console.log(finalResult); // Output: Final result from: First result
    })
    .catch(err => {
        console.error("Error:", err); // Handle any errors
    });
