// 8. **Implement a timeout for a promise:**  
//    ```javascript
//    promiseWithTimeout(3000).then(() => console.log('Completed')).catch(err => console.log(err)); // Output: Error if not completed in 3 seconds
//    ```

// Function that returns a promise that resolves after a delay
function longRunningPromise() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Promise completed!"); // Resolve after 5 seconds
        }, 5000);
    });
}

// Function to create a promise with a timeout
function promiseWithTimeout(timeout) {
    return Promise.race([
        longRunningPromise(), // The promise we want to complete
        new Promise((_, reject) => {
            setTimeout(() => {
                reject(new Error("Promise timed out!")); // Reject after timeout
            }, timeout);
        })
    ]);
}

// Using the promise with a timeout
promiseWithTimeout(3000)
    .then(result => {
        console.log(result); // This will not be executed if the promise times out
    })
    .catch(err => {
        console.log(err.message); // Output: "Promise timed out!"
    });