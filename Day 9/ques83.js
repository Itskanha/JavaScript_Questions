// 3. **Check if a string contains only letters:**  
//    ```javascript
//    console.log(isOnlyLetters("HelloWorld")); // Output: true
//    ```

function isOnlyLetters(str) {
    // Regular expression to match strings containing only letters (case insensitive)
    const lettersPattern = /^[A-Za-z]+$/;

    // Test the input string against the regex pattern
    return lettersPattern.test(str);
}

// Example usage
console.log(isOnlyLetters("HelloWorld")); // Output: true
console.log(isOnlyLetters("Hello World!")); // Output: false
console.log(isOnlyLetters("1234")); // Output: false
console.log(isOnlyLetters("Hello123")); // Output: false
