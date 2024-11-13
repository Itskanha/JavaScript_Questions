// Q.3 Anagram Check
// Write a function to check if two strings are anagrams of each other.

function checkAnagram(str1, str2) {
    // Split both strings into arrays of characters, sort them, and join back into strings
    let string1 = str1.split('').sort().join("");
    let string2 = str2.split('').sort().join("");
 
    // Compare the sorted strings
    if (string1 === string2) {
        console.log(`${str1} and ${str2} are Anagrams`); // Corrected wording
    } else {
        console.log(`${str1} and ${str2} are not Anagrams`); // Corrected wording
    }
 }
 
 // Test the function with example inputs
 checkAnagram("tea", "ate");
 