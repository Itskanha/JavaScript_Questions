// 10. **Replace all digits in a string with asterisks:**  
//     ```javascript
//     console.log(replaceDigits("My number is 12345")); // Output: "My number is *****"
//     ```

function replaceDigits(str) {
    // Use the replace method with a regular expression to match all digits
    return str.replace(/\d/g, "*");
}

// Example usage
console.log(replaceDigits("My number is 12345")); // Output: "My number is *****"
console.log(replaceDigits("Call me at 555-1234")); // Output: "Call me at ****-****"
console.log(replaceDigits("No digits here!")); // Output: "No digits here!"
