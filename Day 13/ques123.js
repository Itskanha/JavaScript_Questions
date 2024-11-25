// 3. **Handle fetch errors gracefully:**  
//    ```javascript
//    fetchData('https://api.example.com/badurl').catch(err => console.log(err)); // Output: Error message
//    ```

// Define the API endpoint URL (in this case, an incorrect/bad URL)
let api = "https://api.example.com/badurl";

// Function to fetch data and handle errors gracefully
function fetchData(url) {
    return fetch(url)
        .then(response => {
            // Check if the response is not successful
            if (!response.ok) {
                // Throw an error with a custom message including the status code
                throw new Error(`Error ${response.status}: ${response.statusText}`);
            }
            // Parse the response as JSON if successful
            return response.json();
        })
        .catch(error => {
            // Log a user-friendly error message to the console
            console.error("An error occurred while fetching data:", error.message);
            // Optionally, rethrow the error if further handling is needed
            throw error;
        });
}

// Call the fetchData function with the API URL
fetchData(api)
    .then(data => console.log("Data fetched successfully:", data))
    .catch(error => console.log("Error message:", error.message)); // Output: Error message
