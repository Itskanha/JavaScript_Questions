// 10. **Check response status in fetch:**  
//     ```javascript
//     fetchData('https://api.example.com/data').then(response => {
//         if (response.ok) {
//             console.log('Success:', response);
//         } else {
//             console.log('Error:', response.status);
//         }
//     });
//     ```

// Function to fetch data and check response status
function fetchData(url) {
    return fetch(url)
        .then(response => {
            // Check if the response status is OK (status code 200-299)
            if (response.ok) {
                console.log('Success:', response); // Log success if response is OK
                return response.json(); // Parse and return the response as JSON
            } else {
                console.log('Error:', response.status); // Log the error status
                throw new Error(`Error: ${response.status}`); // Throw an error for non-OK responses
            }
        });
}

// Example usage of fetchData
fetchData('https://api.example.com/data')
    .then(data => {
        // If successful, log the fetched data
        console.log("Fetched data:", data); // Output: Fetched data
    })
    .catch(err => {
        // Log any errors that occur during fetching
        console.error("Fetch error:", err.message); // Output: Error message
    });