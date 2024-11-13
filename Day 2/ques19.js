// Q.9. **Remove a property from an object:** 

function removeProperty(obj, property) {
    // Use the delete operator to remove the specified property from the object
    delete obj[property];
    
    // Return the modified object
    return obj;
}

console.log(removeProperty({ a: 1, b: 2 }, 'a')); // Output: { b: 2 }
