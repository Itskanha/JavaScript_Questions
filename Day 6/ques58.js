// 8. **Gracefully handle asynchronous errors:**  
//    ```javascript
//    // Logs "Error: Failed to fetch" if fetching data fails.
//    ```


async function fetchData(url) {
    try {
        const response = await fetch(url);
        // Check if the response is not ok
        if (!response.ok) {
            throw new Error(`Failed to fetch: ${response.status}`);
        }
        const data = await response.json();
        console.log("Fetched data:", data);
        return data; // Return the fetched data if successful
    } catch (error) {
        console.error("Error:", error.message); // Log the error message
    }
}

// Example usage
fetchData("https://jsonplaceholder.typicode.com/posts/1")
    .then(data => console.log("Data fetched successfully:", data))
    .catch(error => console.error("Caught error:", error.message));
