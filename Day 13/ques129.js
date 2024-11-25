// 9. **Use async/await for fetch requests:**  
//    ```javascript
//    async function getData() {
//        const data = await fetchData('https://api.example.com/data');
//        console.log(data);
//    }
//    getData(); // Output: Fetched data
//    ```

// Function to fetch data from a given URL
async function fetchData(url) {
    const response = await fetch(url); // Wait for the fetch to complete
    if (!response.ok) {
        throw new Error(`Error ${response.status}: ${response.statusText}`); // Check for errors
    }
    return await response.json(); // Parse and return the response as JSON
}

// Async function to get data and log it
async function getData() {
    try {
        const data = await fetchData('https://api.example.com/data'); // Fetch data and wait for the result
        console.log("Fetched data:", data); // Output: Fetched data
    } catch (err) {
        console.error("Error:", err.message); // Log any errors that occur
    }
}

// Call the getData function to execute it
getData();
