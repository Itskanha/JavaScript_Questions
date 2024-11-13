// Q.1 Reverse a String
// Write a function that takes a string and returns it reversed.

function printReverse(str) {
    // Split the string into an array of characters
    let split = str.split("");
    
    // Reverse the array of characters
    let reverse = split.reverse();
    
    // Join the reversed array back into a string
    let join = reverse.join("");
    
    // Print the reversed string
    console.log(join);
}

// Call the function and pass an argument
printReverse("Kanha"); // Output: ahnaK
