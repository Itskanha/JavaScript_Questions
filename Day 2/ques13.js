// Q.3. **Find the number of properties in an object:** 

function countProperties(obj) {
    // Use Object.keys to get an array of the object's property names
    // and calculate the length of that array to find the number of properties
    let object = Object.keys(obj).length; 
    
    console.log(obj)
    return object; // Return the count of properties
}

console.log(countProperties({ a: 1, b: 2, c:3 })); // Output: 2
