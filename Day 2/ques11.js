//1. Merge two objects: 

// Function to merge two objects
function mergeObjects(obj1, obj2) {
    // Use the spread operator to combine properties of obj1 and obj2
    let object = { ...obj1, ...obj2 };
    
    // Return the new merged object
    return object;
}


console.log(mergeObjects({ a: 1 }, { b: 2 })); // Output: { a: 1, b: 2 }
