// 6. **Check if a string is a valid URL:**  
//    ```javascript
//    console.log(isValidURL("https://www.example.com")); // Output: true
//    ```

function isValidURL(url) {
    // Regular expression for validating a URL
    const urlPattern = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([\/\w .-]*)*\/?$/;

    // Test the input string against the regex pattern
    return urlPattern.test(url);
}

// Example usage
console.log(isValidURL("https://www.example.com")); // Output: true
console.log(isValidURL("http://example.com/path/to/page")); // Output: true
console.log(isValidURL("www.example.com")); // Output: false
console.log(isValidURL("example")); // Output: false
