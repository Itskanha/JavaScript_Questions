// 1. **Create a promise that resolves after a delay:**  
//    ```javascript
//    createDelayPromise(2000).then(() => console.log('Resolved!')); // Output: "Resolved!" after 2 seconds
//    ```

// Function to create a promise that resolves after a specified delay
function createDelayPromise(delay) {
    return new Promise((resolve) => {
        // Use setTimeout to resolve the promise after the specified delay
        setTimeout(() => {
            resolve(); // Resolve the promise
        }, delay);
    });
}

// Example usage of createDelayPromise
createDelayPromise(2000)
    .then(() => {
        console.log('Resolved!'); // Output: "Resolved!" after 2 seconds
    });
