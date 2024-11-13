// Q.7  Array Chunking
// Write a function that splits an array into chunks of a specified size.

function chunkArray(array, size) {
    const chunks = []; // Array to hold the chunks

    for (let i = 0; i < array.length; i += size) {
        // Slice the array from the current index to the current index + size
        chunks.push(array.slice(i, i + size));
    }

    return chunks; // Return the array of chunks
}

// Test the function
console.log(chunkArray([1, 2, 3, 4, 5, 6], 2)); 
