// 5. **Function scope vs block scope:**  


function scopeTest() {
    var b = 5; // Function-scoped variable
    console.log("Inside function, before block:", b); // Output: 5
    
    if (true) {
        let b = 6; // Block-scoped variable, different from the function-scoped b
        console.log("Inside block:", b); // Output: 6
    }
    
    console.log("Inside function, after block:", b); // Output: 5
}

scopeTest();
