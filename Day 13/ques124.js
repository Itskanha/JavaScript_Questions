// 4. **Fetch user data and display it:**  
//    ```javascript
//    fetchUserData().then(user => console.log(user.name)); // Output: User name
//    ```


// Define the API endpoint URL
let api = "https://api.example.com/user";

// Function to fetch user data
function fetchUserData() {
    return fetch(api)
        .then(response => {
            // Check if the response is successful
            if (!response.ok) {
                throw new Error(`Error ${response.status}: ${response.statusText}`);
            }
            // Parse and return the response as JSON
            return response.json();
        })
        .catch(error => {
            // Log an error message if fetching data fails
            console.error("Failed to fetch user data:", error.message);
            // Re-throw the error if further handling is needed
            throw error;
        });
}

// Call the fetchUserData function and display the user's name
fetchUserData()
    .then(user => {
        // Assuming the response has a `name` property for the user
        console.log("User name:", user.name); // Output: User name
    })
    .catch(error => {
        // Handle errors that occur in fetchUserData or display logic
        console.log("Error message:", error.message);
    });