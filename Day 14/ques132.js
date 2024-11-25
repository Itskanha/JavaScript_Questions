// 2. **Use a callback function to handle success:**  
//    ```javascript
//    fetchDataWithCallback('https://api.example.com/data', data => console.log(data)); // Output: Fetched data
//    ```


// Function to fetch data and handle it with a callback
function fetchDataWithCallback(url, callback) {
    fetch(url)
        .then(response => {
            // Check if the response is successful
            if (!response.ok) {
                throw new Error(`Error ${response.status}: ${response.statusText}`);
            }
            return response.json(); // Parse the response as JSON
        })
        .then(data => {
            callback(data); // Call the callback function with the fetched data
        })
        .catch(err => {
            console.error("Fetch error:", err.message); // Log any errors that occur
        });
}

// Example usage of fetchDataWithCallback
fetchDataWithCallback('https://api.example.com/data', data => {
    console.log("Fetched data:", data); // Output: Fetched data
});
