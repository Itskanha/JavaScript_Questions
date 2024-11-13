
### Day 2: Object Manipulation
1. **Merge two objects:**  
   ```javascript
   console.log(mergeObjects({ a: 1 }, { b: 2 })); // Output: { a: 1, b: 2 }
   ```

2. **Count the number of vowels in a string:**  
   ```javascript
   console.log(countVowels("hello world")); // Output: 3
   ```

3. **Find the number of properties in an object:**  
   ```javascript
   console.log(countProperties({ a: 1, b: 2 })); // Output: 2
   ```

4. **Check if an object is empty:**  
   ```javascript
   console.log(isEmpty({})); // Output: true
   ```

5. **Get the values of an object as an array:**  
   ```javascript
   console.log(getObjectValues({ a: 1, b: 2 })); // Output: [1, 2]
   ```

6. **Get the keys of an object as an array:**  
   ```javascript
   console.log(getObjectKeys({ a: 1, b: 2 })); // Output: ["a", "b"]
   ```

7. **Convert an object to a query string:**  
   ```javascript
   console.log(objectToQueryString({ a: 1, b: 2 })); // Output: "a=1&b=2"
   ```

8. **Count occurrences of each property value in an object:**  
   ```javascript
   console.log(countValues({ a: 1, b: 2, c: 1 })); // Output: { '1': 2, '2': 1 }
   ```

9. **Remove a property from an object:**  
   ```javascript
   console.log(removeProperty({ a: 1, b: 2 }, 'a')); // Output: { b: 2 }
   ```

10. **Compare two objects for equality:**  
    ```javascript
    console.log(areObjectsEqual({ a: 1 }, { a: 1 })); // Output: true
    ```