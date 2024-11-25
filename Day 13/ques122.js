// 2. **Post data to an API:**  
//    ```javascript
//    postData('https://api.example.com/data', { name: 'Alice' }).then(response => console.log(response)); // Output: Response from API
//    ```

// Define the API endpoint URL
let api = "https://api.example.com/data";

// Define the data to be sent in the POST request
let dataToPost = {
    name: 'Alice'
};

// Function to post data to the API
function postData(url, data) {
    // Start the fetch call with POST method
    return fetch(url, {
        method: 'POST', // Set the request method to POST
        headers: {
            'Content-Type': 'application/json' // Set content type to JSON
        },
        body: JSON.stringify(data) // Convert the data object to a JSON string
    })
    .then(response => {
        // Check if the response status indicates success
        if (!response.ok) {
            throw new Error("Post request failed");
        }
        // Parse the response as JSON if successful
        return response.json();
    })
    .then(data => {
        // Log "Response from API" along with the actual data returned from the API
        console.log("Response from API:", data);
    })
    .catch(error => {
        // Log an error message if the request fails
        console.error("Post request failed:", error.message);
    });
}

// Call the postData function with the API URL and data
postData(api, dataToPost);
