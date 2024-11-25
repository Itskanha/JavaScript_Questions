// 9. **Convert a callback-based function to a promise-based function:**  
//    ```javascript
//    callbackToPromiseFunction().then(result => console.log(result)); // Output: Result from the converted function
//    ```

// Example of a callback-based function
function callbackBasedFunction(callback) {
    setTimeout(() => {
        // Simulate some asynchronous operation
        const result = "Result from the callback function";
        callback(null, result); // First argument is error, second is result
    }, 1000);
}

// Convert the callback-based function to a promise-based function
function callbackToPromiseFunction() {
    return new Promise((resolve, reject) => {
        callbackBasedFunction((error, result) => {
            if (error) {
                reject(error); // Reject the promise if there's an error
            } else {
                resolve(result); // Resolve the promise with the result
            }
        });
    });
}

// Using the promise-based function
callbackToPromiseFunction()
    .then(result => {
        console.log(result); // Output: Result from the callback function
    })
    .catch(err => {
        console.error("Error:", err); // Handle any potential errors
    });
