// Q.8. Deep Clone an Object
// Create a function that performs a deep clone of an object.

// Define the original object with properties
let original = {
    name: "Babu Bhai",
    age: 70,
};

// Create a deep clone of the original object using JSON methods
let clone = JSON.parse(JSON.stringify(original));

// Modify the properties of the cloned object
clone.name = "Raju"; // Change name in the clone
clone.age = 34;      // Change age in the clone

// Log the cloned object to the console
console.log(clone);    // Outputs: { name: "Raju", age: 34 }

// Log the original object to the console
console.log(original); // Outputs: { name: "Babu Bhai", age: 70 }
