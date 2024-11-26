
### Day 15: Scoping and Hoisting
1. **Demonstrate variable scoping with `var`:**  
   ```javascript
   var x = 1;
   if (true) {
       var x = 2; // Same variable
       console.log(x); // Output: 2
   }
   console.log(x); // Output: 2
   ```

2. **Demonstrate variable scoping with `let`:**  
   ```javascript
   let y = 1;
   if (true) {
       let y = 2; // Different variable
       console.log(y); // Output: 2
   }
   console.log(y); // Output: 1
   ```

3. **Demonstrate hoisting with `var`:**  
   ```javascript
   console.log(z); // Output: undefined
   var z = 3;
 ```

4. **Demonstrate hoisting with `let`:**  
   ```javascript
   console.log(a); // Output: ReferenceError
   let a = 4;
   ```

5. **Function scope vs block scope:**  
   ```javascript
   function scopeTest() {
       var b = 5;
       if (true) {
           let b = 6; // Different variable
           console.log(b); // Output: 6
       }
       console.log(b); // Output: 5
   }
   scopeTest();
   ```

6. **Using `const` for constant values:**  
   ```javascript
   const PI = 3.14;
   console.log(PI); // Output: 3.14
   ```

7. **Reassigning a `let` variable:**  
   ```javascript
   let count = 1;
   count = 2;
   console.log(count); // Output: 2
   ```

8. **Attempting to reassign a `const` variable:**  
   ```javascript
   const MAX = 10;
   // MAX = 20; // Throws TypeError: Assignment to constant variable.
   ```

9. **Understanding the global scope:**  
   ```javascript
   var globalVar = 'Hello';
   function checkGlobal() {
       console.log(globalVar); // Output: 'Hello'
   }
   checkGlobal();
   ```

10. **Using IIFE (Immediately Invoked Function Expression):**  
    ```javascript
    (function() {
        var localVar = 'Inside IIFE';
        console.log(localVar); // Output: 'Inside IIFE'
    })();
    // console.log(localVar); // Throws ReferenceError
    ```