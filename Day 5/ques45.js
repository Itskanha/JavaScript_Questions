// 5. **Fetch and display data using `async/await`:**  
//    ```javascript
//    // Logs the fetched data from the API.
//    ```

async function fetchData() {
    // API endpoint to fetch user data
    let api = "https://jsonplaceholder.typicode.com/users/1";

    try {
        // Await the fetch call to get the response from the API
        let response = await fetch(api);

        // Check if the response is not OK (status code outside 200-299 range)
        if (!response.ok) {
            // Throw an error with the response status
            throw new Error(response.status);
        }

        // Await and parse the JSON from the response
        let data = await response.json();
      
        // Log the fetched data to the console
        console.log("Fetched data:", data);
    
    } catch (error) {
        // Log any errors that occurred during the fetch operation
        console.error("Error fetching data:", error.message);
    }
}

// Call the fetchData function to execute it
fetchData();
