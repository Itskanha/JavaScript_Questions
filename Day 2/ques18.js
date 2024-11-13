// Q.8. **Count occurrences of each property value in an object:**  


function countValues(obj) {
    const counts = {}; // Initialize an empty object to hold the counts

    // Loop through each property in the object
    for (let key in obj) {
        const value = obj[key]; // Get the value of the current property
        
        // If the value is not yet a key in counts, initialize it to 0
        if (!counts[value]) {
            counts[value] = 0;
        }
        
        // Increment the count for this value
        counts[value]++;
    }

    return counts; // Return the object containing counts of each value
}


console.log(countValues({ a: 1, b: 2, c: 1 })); // Output: { '1': 2, '2': 1 }
