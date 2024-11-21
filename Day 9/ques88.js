// 8. **Validate a phone number format:**  
//    ```javascript
//    console.log(validatePhoneNumber("(123) 456-7890")); // Output: true
//    ```

function validatePhoneNumber(phoneNumber) {
    // Regular expression pattern to match a standard phone number format
    const phonePattern = /^\(\d{3}\) \d{3}-\d{4}$/;

    // Test the input phone number against the regex pattern
    return phonePattern.test(phoneNumber);
}

// Example usage
console.log(validatePhoneNumber("(123) 456-7890")); // Output: true
console.log(validatePhoneNumber("123-456-7890")); // Output: false
console.log(validatePhoneNumber("(123)456-7890")); // Output: false
console.log(validatePhoneNumber("(123) 456 7890")); // Output: false
