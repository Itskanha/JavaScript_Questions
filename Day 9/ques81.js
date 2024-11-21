// 1. **Validate an email address:**  
//    ```javascript
//    console.log(validateEmail("test@example.com")); // Output: true
//    ```

function validateEmail(email) {
    // Regular expression pattern for validating email addresses
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Test the provided email against the pattern
    if (emailPattern.test(email)) {
        return true; // Return true if the email matches the pattern
    } else {
        // Throw an error if the email does not match the pattern
        throw new Error("false! :- Invalid Email");
    }
}

try {
    console.log(validateEmail("test@@example.com")); // This will throw an error due to invalid format
} catch (error) {
    console.error(error.message); // Log the error message if an exception is thrown
}

