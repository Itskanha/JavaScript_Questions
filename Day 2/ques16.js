// Q.6. **Get the keys of an object as an array:**  

function getObjectKeys(obj) {
    // Use Object.keys to get an array of the object's property names (keys)
    let keys = Object.keys(obj);
    return keys; // Return the array of keys
}

console.log(getObjectKeys({ a: 1, b: 2 })); // Output: ["a", "b"]
