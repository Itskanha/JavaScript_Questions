// 6. **Convert a number to its binary representation:**  
//    ```javascript
//    console.log(toBinary(10)); // Output: "1010"
//    ```

function toBinary(number) {
    // Convert the number to its binary representation
    let binary = number.toString(2); // '2' specifies that we want the number in base 2 (binary)
    return binary; // Return the binary string
}

// Test the function with an example
console.log(toBinary(10)); // Output: "1010"

