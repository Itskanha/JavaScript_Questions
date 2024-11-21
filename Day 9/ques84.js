// 4. **Replace all spaces with underscores in a string:**  
//    ```javascript
//    console.log(replaceSpaces("Hello World")); // Output: "Hello_World"
//    ```

function replaceSpaces(str) {
    // Use the replace method with a regular expression to match all spaces
    return str.replace(/ /g, "_");
}

// Example usage
console.log(replaceSpaces("Hello World")); // Output: "Hello_World"
console.log(replaceSpaces("Replace all spaces")); // Output: "Replace_all_spaces"
