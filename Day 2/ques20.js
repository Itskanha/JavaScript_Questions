// Q.10. **Compare two objects for equality:**

function areObjectsEqual(obj1, obj2) {
    // Check if both inputs are objects
    if (typeof obj1 !== 'object' || obj1 === null || typeof obj2 !== 'object' || obj2 === null) {
        return false; // If not, they are not equal
    }

    // Get the keys of both objects
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    // Check if they have the same number of keys
    if (keys1.length !== keys2.length) {
        return false; // Not equal if key lengths differ
    }

    // Check each key and value for equality
    for (let key of keys1) {
        // If the value is an object, recursively check for equality
        if (typeof obj1[key] === 'object' && obj1[key] !== null) {
            if (!areObjectsEqual(obj1[key], obj2[key])) {
                return false; // Not equal if nested objects differ
            }
        } else if (obj1[key] !== obj2[key]) {
            return false; // Not equal if primitive values differ
        }
    }

    return true; // Objects are equal
}

console.log(areObjectsEqual({ a: 1 }, { a: 1 })); // Output: true