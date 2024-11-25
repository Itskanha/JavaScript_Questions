// 8. **Fetch data and transform it:**  
//    ```javascript
//    fetchDataAndTransform('https://api.example.com/data', data => data.map(item => item.name)).then(names => console.log(names)); // Output: Array of names
//    ```

// Function to fetch data and apply a transformation
function fetchDataAndTransform(url, transformFn) {
    return fetch(url)
        .then(response => {
            // Check if the response is successful
            if (!response.ok) {
                throw new Error(`Error ${response.status}: ${response.statusText}`);
            }
            // Parse and return the response as JSON
            return response.json();
        })
        .then(data => {
            // Apply the transformation function to the fetched data
            return transformFn(data);
        });
}

// Example transformation function to extract names
const transformToNames = data => data.map(item => item.name);

// Example usage of fetchDataAndTransform
fetchDataAndTransform('https://api.example.com/data', transformToNames)
    .then(names => {
        // Log the array of names after transformation
        console.log("Array of names:", names); // Output: Array of names
    })
    .catch(err => {
        // Log the error message if the fetch fails or if there's an error in transformation
        console.error("Error:", err.message);
    });