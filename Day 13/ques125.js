// 5. **Make multiple API calls and handle responses:**  
//    ```javascript
//    fetchMultiple(['url1', 'url2']).then(responses => console.log(responses)); // Output: Array of responses
//    ```

// Function to fetch data from multiple URLs
function fetchMultiple(urls) {
    // Map each URL to a fetch call and store them in an array
    const fetchPromises = urls.map(url => 
        fetch(url)
            .then(response => {
                // Check if the response is successful
                if (!response.ok) {
                    throw new Error(`Error ${response.status} for ${url}`);
                }
                // Parse the response as JSON
                return response.json();
            })
            .catch(error => {
                // Log an error if the fetch fails for this URL
                console.error(`Fetch failed for ${url}:`, error.message);
                // Return a placeholder or null to continue with other fetches
                return null;
            })
    );

    // Use Promise.all to wait until all fetch requests are completed
    return Promise.all(fetchPromises);
}

// Example usage with multiple URLs
fetchMultiple(['https://api.example.com/data1', 'https://api.example.com/data2'])
    .then(responses => {
        // Log an array of responses, with null for failed requests
        console.log("Array of responses:", responses); // Output: Array of responses
    })
    .catch(error => {
        // Handle errors that occur if Promise.all itself fails (rare)
        console.error("Error with multiple fetches:", error.message);
    });
