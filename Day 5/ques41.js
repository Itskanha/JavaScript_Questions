// 1. **Return a promise that resolves after a delay:**  
//    ```javascript
//    // Logs "Resolved after 1 second" after 1 second.
//    ```

// Create a new Promise that resolves or rejects after 1 second
const delayPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const success = true; // Change this to false to simulate an error
        if (success) {
            resolve("Resolved after 1 second"); // Call resolve if the operation is successful
        } else {
            reject("Something went wrong!"); // Call reject if there's an error
        }
    }, 1000); // Wait for 1 second before executing the function
});

// Handle the resolved promise
delayPromise
    .then((message) => {
        alert(message); // Show the resolved message in an alert
    })
    .catch((error) => {
        alert(`Error: ${error}`); // Show the error message if the promise is rejected
    });
