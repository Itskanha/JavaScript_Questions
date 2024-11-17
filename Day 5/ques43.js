// 3. **Handle multiple promises with `Promise.all()`:**  
//    ```javascript
//    // Logs the data from both API calls as an array.
//    ```

// Define two API endpoints for fetching weather data
let api1 = "https://api.weatherapi.com/v1/current.json?key=54e7946de5af40879a651448242009&q=London";
let api2 = "https://api.weatherapi.com/v1/current.json?key=54e7946de5af40879a651448242009&q=New York";

// Create an array of fetch promises
let promises = [
    fetch(api1), // First API call
    fetch(api2)  // Second API call
];

// Use Promise.all to handle both API calls
Promise.all(promises)
    .then((responses) => {
        // Check if all responses are OK
        return Promise.all(responses.map(response => {
            if (!response.ok) {
                throw new Error("One or more network responses were not ok");
            }
            return response.json(); // Parse JSON from each response
        }));
    })
    .then((data) => {
        // Handle the array of parsed data from both API calls
        console.log("API data from both calls:", data); // Logs the data as an array
    })
    .catch((error) => {
        // Handle any errors that occurred during the fetch or processing
        console.error("Error fetching API data:", error);
    });
