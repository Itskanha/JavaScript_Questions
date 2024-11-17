// 7. **Create a timeout using promises:**  
//    ```javascript
//    // Logs "Timeout completed" after 2 seconds.
//    ```


async function timeout(ms) {
    // Wait for a promise that resolves after `ms` milliseconds.
    await new Promise((resolve) => setTimeout(resolve, ms));
}

// Call the `timeout` function with a 2000 ms (2 seconds) delay.
timeout(2000)
    // When the promise resolves, log that the timeout is completed.
    .then(() => {
        console.log("Timeout is completed!");
    })
    // Catch and log any potential errors that may occur.
    .catch((error) => {
        console.log(`Error: ${error}`);
    });

