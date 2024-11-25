// 1. **Fetch data from a public API:**  
//    ```javascript
//    fetchData('https://api.example.com/data').then(data => console.log(data)); // Output: Fetched data
//    ```

// Define the API endpoint URL
let api = "https://api.example.com/data";

// Log "Fetch data" to indicate the fetch process has started
console.log("Fetch data");

fetch(api)
    .then(response => {
        // Check if the response status indicates success (status code in the 200-299 range)
        if (!response.ok) {
            // If response is not okay, throw an error to handle in catch block
            throw new Error("Fetch failed");
        }
        // Parse the response as JSON if it's successful
        return response.json();
    })
    .then(data => {
        // Log "Fetched data" if data was successfully fetched and parsed
        console.log("Fetched data");
        console.log(data); // Optional: Log the actual data to the console
    })
    .catch(error => {
        // Log "Fetch failed" if an error occurs during the fetch
        console.error("Fetch failed");
    });
