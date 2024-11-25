// 7. **Use `Promise.race()` to handle the first resolved promise:**  
//    ```javascript
//    Promise.race([promise1(), promise2()]).then(result => console.log(result)); // Output: Result of the first resolved promise
//    ```


// Function that returns a promise resolving after a delay
function promise1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Result from promise 1"); // Resolves after 1 second
        }, 1000);
    });
}

// Function that returns a promise resolving after a longer delay
function promise2() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Result from promise 2"); // Resolves after 2 seconds
        }, 2000);
    });
}

// Using Promise.race to handle the first resolved promise
Promise.race([promise1(), promise2()])
    .then(result => {
        console.log(result); // Output: Result from promise 1
    })
    .catch(err => {
        console.error("Error:", err); // Handle any potential errors
    });
