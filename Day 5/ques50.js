// 10. **Display a loading spinner during API requests:**  
//     ```javascript
//     // Shows a spinner during the API request and hides it afterward.
//     ```

 // Function to show the loading spinner
 let spinner = document.getElementById('spinner');

 function showSpinner() {
    spinner.style.display = 'block';
}

// Function to hide the loading spinner
function hideSpinner() {
    spinner.style.display = 'none';
}

// Function to simulate an API request
async function fetchData() {
    showSpinner(); // Show the spinner before the request
    try {
        // Simulate an API request with a delay
        const response = await new Promise((resolve) => {
            setTimeout(() => {
                resolve("Data fetched successfully!");
            }, 2000); // Simulate a 2-second API call
        });

        console.log(response); // Log the response
    } catch (error) {
        console.error("Error fetching data:", error);
    } finally {
        hideSpinner(); // Hide the spinner after the request is done
    }
}

// Call the fetchData function to initiate the API request
fetchData();