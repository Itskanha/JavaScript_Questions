// 2. **Extract all numbers from a string:**  
//    ```javascript
//    console.log(extractNumbers("There are 3 apples and 5 oranges.")); // Output: [3, 5]
//    ```

function extractNumbers(str) {
    // Regular expression pattern to find all sequences of digits
    let numbersPattern = /\d+/g;

    // Use the match method to find all matches in the input string
    let match = str.match(numbersPattern);

    // Convert the matches to numbers or return an empty array if no matches are found
    return match ? match.map(Number) : [];
}

// Example usage
console.log(extractNumbers("There are 3 apples and 5 oranges.")); // Output: [3, 5]
