// 6. **Create a promise that rejects:**  
//    ```javascript
//    createRejectedPromise().catch(err => console.log(err)); // Output: "Promise rejected!"
//    ```

// Function that creates a promise that always rejects
function createRejectedPromise() {
    return new Promise((_, reject) => {
        reject("Promise rejected!"); // Reject the promise with a message
    });
}

// Using the rejected promise and handling the rejection
createRejectedPromise()
    .catch(err => {
        console.log(err); // Output: "Promise rejected!"
    });
