// 7. **Cancel a fetch request:**  
//    ```javascript
//    const controller = new AbortController();
//    fetchData('https://api.example.com/data', { signal: controller.signal }).catch(err => console.log(err)); // Output: Fetch request canceled
//    ```

// Function to fetch data with the ability to cancel the request
function fetchData(url, options) {
    return fetch(url, options)
        .then(response => {
            // Check if the response is successful
            if (!response.ok) {
                throw new Error(`Error ${response.status}: ${response.statusText}`);
            }
            // Parse and return the response as JSON
            return response.json();
        });
}

// Example usage of AbortController to cancel a fetch request
const controller = new AbortController(); // Create a new AbortController instance

// Call the fetchData function with the abort signal
fetchData('https://api.example.com/data', { signal: controller.signal })
    .then(data => {
        // Log the fetched data if successful
        console.log("Fetched data:", data);
    })
    .catch(err => {
        // Log the error message if the fetch fails or is canceled
        if (err.name === 'AbortError') {
            console.log("Fetch request canceled"); // Output: Fetch request canceled
        } else {
            console.log("Error:", err.message);
        }
    });

// Simulate canceling the fetch request after 100ms
setTimeout(() => {
    controller.abort(); // Cancel the fetch request
}, 100);
