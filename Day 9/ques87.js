// 7. **Extract domain from a URL:**  
//    ```javascript
//    console.log(extractDomain("https://www.example.com/path")); // Output: "www.example.com"
//    ```

function extractDomain(url) {
    // Use a regular expression to extract the domain from the URL
    const domainPattern = /^(?:https?:\/\/)?(?:www\.)?([^\/]+)/;

    // Match the URL against the regex pattern
    const match = url.match(domainPattern);

    // Return the captured domain or an empty string if no match is found
    return match ? match[1] : "";
}

// Example usage
console.log(extractDomain("https://www.example.com/path")); // Output: "www.example.com"
console.log(extractDomain("http://example.com")); // Output: "example.com"
console.log(extractDomain("www.example.com")); // Output: "www.example.com"
console.log(extractDomain("https://subdomain.example.com/path")); // Output: "subdomain.example.com"
