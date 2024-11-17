// 2. **Fetch data from a public API:**  
//    ```javascript
//    // Logs the fetched data from the API to the console.
//    ```

// Define the API endpoint for fetching weather data
let api = "https://api.weatherapi.com/v1/current.json?key=54e7946de5af40879a651448242009&q=London";

// Fetch data from the API
fetch(api)
    .then((response) => {
        // Check if the response is OK (status in the range 200-299)
        if (!response.ok) {
            throw new Error("Network response was not ok"); // Throw an error if the response indicates failure
        } else {
            return response.json(); // Parse the JSON data if the response is OK
        }
    })
    .then((data) => {
        // Handle the parsed data here
        console.log("API data is working: " + JSON.stringify(data)); // Log the data to the console
    })
    .catch((error) => {
        // Handle any errors that occurred during the fetch
        console.error("This API data is not working: ", error); // Log the error message
    });
