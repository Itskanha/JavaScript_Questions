// 10. **Use async/await with error handling:**  


// Function to fetch data from an API
async function fetchData(url) {
    const response = await fetch(url); // Await the fetch operation
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`); // Handle HTTP errors
    }
    return await response.json(); // Parse JSON response
}

// Async function to fetch data asynchronously and handle errors
async function fetchDataAsync() {
    try {
        const data = await fetchData('https://api.example.com/data'); // Await the fetchData call
        console.log(data); // Output the fetched data
    } catch (err) {
        console.log("Error:", err.message); // Handle any errors
    }
}

// Call the async function
fetchDataAsync(); // Output: Fetched data or error message