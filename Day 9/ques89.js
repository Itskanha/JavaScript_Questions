// 9. **Check if a string is a valid hex color code:**  
//    ```javascript
//    console.log(isValidHexColor("#ff5733")); // Output: true
//    ```

function isValidHexColor(hex) {
    // Regular expression pattern to match a valid hex color code
    const hexPattern = /^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/;

    // Test the input string against the regex pattern
    return hexPattern.test(hex);
}

// Example usage
console.log(isValidHexColor("#ff5733")); // Output: true
console.log(isValidHexColor("#F00")); // Output: true (short form)
console.log(isValidHexColor("#123456")); // Output: true
console.log(isValidHexColor("#abcd")); // Output: false (invalid length)
console.log(isValidHexColor("ff5733")); // Output: false (missing '#')
console.log(isValidHexColor("#ff5733g")); // Output: false (invalid character)
