// 4. **Fetch user data and handle errors:**  
//    ```javascript
//    // Logs the user data or an error message if fetching fails.
//    ```

// Define the API endpoint for fetching user data
let api = "https://jsonplaceholder.typicode.com/users/1"; // Example API for user data

// Fetch user data from the API
fetch(api)
    .then((response) => {
        // Check if the response is OK (status in the range 200-299)
        if (!response.ok) {
            throw new Error("Failed to fetch user data: " + response.status); // Throw an error if not OK
        }
        return response.json(); // Parse the JSON from the response
    })
    .then((data) => {
        // Handle the fetched user data here
        console.log("User data fetched successfully:", data); // Log the user data
    })
    .catch((error) => {
        // Handle any errors that occurred during the fetch
        console.error("Error fetching user data:", error.message); // Log the error message
    });