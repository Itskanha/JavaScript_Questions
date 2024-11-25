// 4. **Handle multiple promises with `Promise.all()`:**  
//    ```javascript
//    Promise.all([promise1(), promise2()]).then(results => console.log(results)); // Output: Array of results
//    ```

// Function that returns a promise resolving to a value after a delay
function promise1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Result from promise 1"); // Resolve after 1 second
        }, 1000);
    });
}

// Function that returns a promise resolving to a value after a delay
function promise2() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Result from promise 2"); // Resolve after 2 seconds
        }, 2000);
    });
}

// Using Promise.all to handle multiple promises
Promise.all([promise1(), promise2()])
    .then(results => {
        console.log(results); // Output: Array of results
    })
    .catch(err => {
        console.error("Error:", err); // Handle any errors
    });
