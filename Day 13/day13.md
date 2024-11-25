### Day 13: Fetch API and AJAX
1. **Fetch data from a public API:**  
   ```javascript
   fetchData('https://api.example.com/data').then(data => console.log(data)); // Output: Fetched data
   ```

2. **Post data to an API:**  
   ```javascript
   postData('https://api.example.com/data', { name: 'Alice' }).then(response => console.log(response)); // Output: Response from API
   ```

3. **Handle fetch errors gracefully:**  
   ```javascript
   fetchData('https://api.example.com/badurl').catch(err => console.log(err)); // Output: Error message
   ```

4. **Fetch user data and display it:**  
   ```javascript
   fetchUserData().then(user => console.log(user.name)); // Output: User name
   ```

5. **Make multiple API calls and handle responses:**  
   ```javascript
   fetchMultiple(['url1', 'url2']).then(responses => console.log(responses)); // Output: Array of responses
   ```

6. **Timeout for fetch requests:**  
   ```javascript
   fetchWithTimeout('https://api.example.com/data', 5000).then(data => console.log(data)).catch(err => console.log(err)); // Output: Fetched data or timeout error
   ```

7. **Cancel a fetch request:**  
   ```javascript
   const controller = new AbortController();
   fetchData('https://api.example.com/data', { signal: controller.signal }).catch(err => console.log(err)); // Output: Fetch request canceled
   ```

8. **Fetch data and transform it:**  
   ```javascript
   fetchDataAndTransform('https://api.example.com/data', data => data.map(item => item.name)).then(names => console.log(names)); // Output: Array of names
   ```

9. **Use async/await for fetch requests:**  
   ```javascript
   async function getData() {
       const data = await fetchData('https://api.example.com/data');
       console.log(data);
   }
   getData(); // Output: Fetched data
   ```

10. **Check response status in fetch:**  
    ```javascript
    fetchData('https://api.example.com/data').then(response => {
        if (response.ok) {
            console.log('Success:', response);
        } else {
            console.log('Error:', response.status);
        }
    });
    ```