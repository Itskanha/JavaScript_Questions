// 8. **Resolve a promise after a random time:**  
//    ```javascript
//    // Logs "Resolved after random delay" after a random delay (up to 3 seconds).
//    ```

// Define an asynchronous function that resolves after a random delay
async function resolveAfterRandomDelay() {
    // Generate a random delay between 0 and 3000 milliseconds (3 seconds)
    let delay = Math.floor(Math.random() * 3000);
    console.log(delay); // Log the generated delay for debugging

    // Return a promise that resolves after the random delay
    return await new Promise((resolve) => {
        setTimeout(() => {
            // Resolve the promise with a message after the delay
            resolve("Resolved after random delay");
        }, delay);
    });
}

// Call the function and handle the resolved promise
resolveAfterRandomDelay()
    .then(message => {
        // Log the resolved message when the promise is fulfilled
        console.log(message);
    })
    .catch((error) => {
        // Log any errors that occur during the execution
        console.log(error);
    });
