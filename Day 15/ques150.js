// 10. Using IIFE (Immediately Invoked Function Expression)

(function() {
    var localVar = 'Inside IIFE'; // Declaring a variable inside the IIFE
    console.log(localVar); // Output: 'Inside IIFE'
})();

// Attempting to access localVar outside the IIFE
// console.log(localVar); // Throws ReferenceError
