// Q.7. **Convert an object to a query string:**

function objectToQueryString(obj) {
    // Create a URLSearchParams object from the given object
    let params = new URLSearchParams(obj);
    
    // Convert the URLSearchParams object to a query string
    let query = params.toString();
    
    return query; // Return the resulting query string
}

// Example usage
console.log(objectToQueryString({ a: 1, b: 2 })); // Output: "a=1&b=2"
