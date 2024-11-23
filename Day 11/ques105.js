// 5. **Round a number to a specified decimal place:**  
//    ```javascript
//    console.log(roundToDecimal(3.14159, 2)); // Output: 3.14
//    ```

function roundToDecimal(number, decimalPlaces) {
    
    // Convert the string back to a number
    return parseFloat(number.toFixed(decimalPlaces)); 
    
}

console.log(roundToDecimal(3.14159, 2)); // Output: 3.14