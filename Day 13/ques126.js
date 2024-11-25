// 6. **Timeout for fetch requests:**  
//    ```javascript
//    fetchWithTimeout('https://api.example.com/data', 5000).then(data => console.log(data)).catch(err => console.log(err)); // Output: Fetched data or timeout error
//    ```

// Function to fetch data with a timeout
function fetchWithTimeout(url, timeout) {
    // Create a timeout promise that rejects after the specified time
    const timeoutPromise = new Promise((_, reject) => {
        setTimeout(() => {
            reject(new Error('Request timed out'));
        }, timeout);
    });

    // Create a fetch promise
    const fetchPromise = fetch(url)
        .then(response => {
            // Check if the response is successful
            if (!response.ok) {
                throw new Error(`Error ${response.status}: ${response.statusText}`);
            }
            // Parse and return the response as JSON
            return response.json();
        });

    // Return a promise that races the fetch promise against the timeout promise
    return Promise.race([fetchPromise, timeoutPromise]);
}

// Example usage of fetchWithTimeout
fetchWithTimeout('https://api.example.com/data', 5000)
    .then(data => {
        // Log the fetched data if successful
        console.log("Fetched data:", data); // Output: Fetched data
    })
    .catch(err => {
        // Log the error message if the fetch fails or times out
        console.log("Error:", err.message); // Output: Fetched data or timeout error
    });
