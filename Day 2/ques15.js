// Q.5. **Get the values of an object as an array:** 

function getObjectValues(obj) {
    // Use Object.values to get an array of the object's values
    let value = Object.values(obj);
    return value; // Return the array of values
}

// Example usage
console.log(getObjectValues({ a: 1, b: 2 })); // Output: [1, 2]
