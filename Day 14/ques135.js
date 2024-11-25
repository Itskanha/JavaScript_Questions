// 5. **Handle promise rejection with `.catch()`:**  
//    ```javascript
//    promiseThatMightFail().catch(err => console.log(err)); // Output: Error message
//    ```

// Function that returns a promise that might fail
function promiseThatMightFail() {
    return new Promise((resolve, reject) => {
        // Simulate a random success or failure
        const randomOutcome = Math.random();
        if (randomOutcome > 0.5) {
            resolve("Success!"); // Resolve the promise if outcome is greater than 0.5
        } else {
            reject("Error: Something went wrong!"); // Reject the promise if outcome is 0.5 or less
        }
    });
}

// Using the promise and handling rejection
promiseThatMightFail()
    .then(result => {
        console.log(result); // Log success message if resolved
    })
    .catch(err => {
        console.log(err); // Output: Error message if rejected
    });
