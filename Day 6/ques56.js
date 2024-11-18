
// 6. **Retry fetching data upon failure:**  
//    ```javascript
//    // Logs attempt failures or the fetched data after retries.
//    ```

async function fetchCommentsWithRetry(url, retries = 3) {
    // Loop for the number of retries
    for (let attempt = 1; attempt <= retries; attempt++) {
        try {
            // Attempt to fetch data from the given URL
            let response = await fetch(url);
            
            // Check if the response is not ok (status not in the range 200-299)
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            // Parse the JSON data from the response
            let data = await response.json();
            console.log("Fetched comments:", data); // Log the fetched comments
            return data; // Return the comments if fetch is successful
        } catch (error) {
            // Log the error message for the current attempt
            console.error(`Attempt ${attempt} failed: ${error.message}`);
            // If this was the last attempt, throw an error
            if (attempt === retries) {
                throw new Error("All attempts to fetch comments failed.");
            }
        }
    }
}

// Example usage with comments endpoint
fetchCommentsWithRetry("https://jsonplaceholder.typicode.com/comments")
    .then((comments) => console.log("Comments fetched successfully:", comments))
    .catch((error) => console.error(error.message));
