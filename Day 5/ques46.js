// 6. **Retry fetching data upon failure:**  
//    ```javascript
//    // Retries the fetch operation and logs the result or error message.
//    ```

async function fetchData(retries = 3) { // Default to 3 retries
    let api = "https://jsonplaceholder.typicode.com/users/1";

    // Function to attempt fetching data
    let attemptFetch = async () => {
        let response = await fetch(api);

        if (!response.ok) {
            throw new Error(response.status); // Throw error if response is not ok
        } else {
            return response.json(); // Return the parsed JSON data
        }
    };

    // Loop to retry fetching data
    for (let i = 0; i < retries; i++) {
        try {
            let data = await attemptFetch(); // Try to fetch data
            console.log("Fetched data:", data); // Log fetched data
            return; // Exit function on success
        } catch (error) {
            console.error("Error fetching data:", error.message); // Log error message
            // If this was the last attempt, log that max retries were reached
            if (i === retries - 1) {
                console.error("Max retries reached. Could not fetch data.");
            }
        }
    }
}

// Call the fetchData function to execute it
fetchData();
