// Q.14 **Check if an object is empty:** 

function isEmpty(obj) {
    // Get the number of properties in the object
    let object = Object.keys(obj).length;

    // Check if the count of properties is zero
    if (object === 0) {
        return true;  // Return true if the object is empty
    } else {
        return false; // Return false if the object is not empty
    }
}

console.log(isEmpty({})); // Output: true
console.log(isEmpty({ a: 1 })); // Output: false