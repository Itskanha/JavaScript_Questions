// 2. **Count the number of vowels in a string:**  

function countVowels(str) {
    // Define a string containing both lowercase and uppercase vowels
    let vowels = "aeiouAEIOU"; 
    let count = 0; // Initialize a counter for vowels

    // Loop through each character in the input string
    for (let char of str) {
        // Check if the character is a vowel
        if (vowels.includes(char)) {
            count++; // Increment the count if it's a vowel
        }
    }

    return count; // Return the total count of vowels
}

// Example usage
console.log(countVowels("hello world")); // Output: 3
console.log(countVowels("Hello World")); // Output: 3