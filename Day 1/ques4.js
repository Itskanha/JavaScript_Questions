// Q.4. Palindrome Check
// Create a function that checks if a given string is a palindrome.

// Function to check if a given string is a palindrome
function checkPalindrome(str) {
    // Reverse the string
    let reversedString = str.split("").reverse().join("");

    // Check if the original string is the same as the reversed string
    if (str === reversedString) {
        console.log(`${str} is a palindrome`); // Output the original string
    } else {
        console.log(`${str} is not a palindrome`); // Output the original string
    }
}

// Test the function with an example input
checkPalindrome("level"); // Should output that "level" is a palindrome
