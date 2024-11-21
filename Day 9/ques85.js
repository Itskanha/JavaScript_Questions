// 5. **Find all occurrences of a word in a string:**  
//    ```javascript
//    console.log(findWord("The quick brown fox jumps over the lazy dog", "the")); // Output: 2
//    ```

function findWord(str, word) {
    // Create a regular expression to match the word, ignoring case
    const wordPattern = new RegExp(`\\b${word}\\b`, 'gi');

    // Use the match method to find all occurrences of the word in the string
    const matches = str.match(wordPattern);

    // Return the number of occurrences or 0 if no matches found
    return matches ? matches.length : 0;
}

// Example usage
console.log(findWord("The quick brown fox jumps over the lazy dog", "the")); // Output: 2
console.log(findWord("Hello world, hello everyone!", "hello")); // Output: 2
console.log(findWord("No occurrences here.", "test")); // Output: 0
