### Day 14: Promises and Callbacks
1. **Create a promise that resolves after a delay:**  
   ```javascript
   createDelayPromise(2000).then(() => console.log('Resolved!')); // Output: "Resolved!" after 2 seconds
   ```

2. **Use a callback function to handle success:**  
   ```javascript
   fetchDataWithCallback('https://api.example.com/data', data => console.log(data)); // Output: Fetched data
   ```

3. **Chain multiple promises together:**  
   ```javascript
   promise1()
       .then(result => promise2(result))
       .then(finalResult => console.log(finalResult)); // Output: Final result
   ```

4. **Handle multiple promises with `Promise.all()`:**  
   ```javascript
   Promise.all([promise1(), promise2()]).then(results => console.log(results)); // Output: Array of results
   ```

5. **Handle promise rejection with `.catch()`:**  
   ```javascript
   promiseThatMightFail().catch(err => console.log(err)); // Output: Error message
   ```

6. **Create a promise that rejects:**  
   ```javascript
   createRejectedPromise().catch(err => console.log(err)); // Output: "Promise rejected!"
   ```

7. **Use `Promise.race()` to handle the first resolved promise:**  
   ```javascript
   Promise.race([promise1(), promise2()]).then(result => console.log(result)); // Output: Result of the first resolved promise
   ```

8. **Implement a timeout for a promise:**  
   ```javascript
   promiseWithTimeout(3000).then(() => console.log('Completed')).catch(err => console.log(err)); // Output: Error if not completed in 3 seconds
   ```

9. **Convert a callback-based function to a promise-based function:**  
   ```javascript
   callbackToPromiseFunction().then(result => console.log(result)); // Output: Result from the converted function
   ```

10. **Use async/await with error handling:**  
    ```javascript
    async function fetchDataAsync() {
        try {
            const data = await fetchData('https://api.example.com/data');
            console.log(data);
        } catch (err) {
            console.log(err);
        }
    }
    fetchDataAsync(); // Output: Fetched data or error message
    ```
