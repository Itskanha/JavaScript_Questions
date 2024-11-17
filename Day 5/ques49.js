// 9. **Load multiple images using promises:**  
//    ```javascript
//    // Logs the URLs of successfully loaded images or errors for failed loads.
//    ```


async function loadImage(url) {
    return await new Promise((resolve, reject) => {
        const img = new Image(); // Create a new image element

        // Set up event listeners for load and error events
        img.onload = () => resolve(url); // Resolve the promise with the URL on success
        img.onerror = () => reject(new Error(`Failed to load image: ${url}`)); // Reject on error

        img.src = url; // Set the image source to trigger the load
    });
}

// Function to load multiple images
async function loadImages(urls) {
    // Map each URL to a promise returned by loadImage
    const promises = urls.map(loadImage);

    // Use Promise.all to handle multiple promises
    return await Promise.allSettled(promises);
}

// Array of image URLs to load
const imageUrls = [
    'https://example.com/image1.jpg',
    'https://example.com/image2.jpg',
    'https://example.com/image3.jpg' // Replace with valid URLs
];

// Load the images and handle the results
loadImages(imageUrls)
    .then(results => {
        // Log the URLs of successfully loaded images and errors for failed loads
        results.forEach(result => {
            if (result.status === 'fulfilled') {
                console.log(`Successfully loaded: ${result.value}`);
            } else {
                console.error(result.reason.message);
            }
        });
    });
