### Day 7: Functional Programming Concepts
1. **Create a curry function:**  
   ```javascript
   console.log(curry(add)(1)(2)); // Output: 3
   ```

2. **Compose two functions:**  
   ```javascript
   console.log(compose(double, addOne)(2)); // Output: 5
   ```

3. **Implement map function:**  
   ```javascript
   console.log(map([1, 2, 3], x => x * 2)); // Output: [2, 4, 6]
   ```

4. **Implement filter function:**  
   ```javascript
   console.log(filter([1, 2, 3, 4], x => x % 2 === 0)); // Output: [2, 4]
   ```

5. **Implement reduce function:**  
   ```javascript
   console.log(reduce([1, 2, 3], (acc, x) => acc + x, 0)); // Output: 6
   ```

6. **Implement a function that returns a memoized version of a function:**  
   ```javascript
   const memoizedFib = memoize(fib);
   console.log(memoizedFib(5)); // Output: 5
   ```

7. **Implement a function to flatten an array:**  
   ```javascript
   console.log(flatten([1, [2, [3, 4]]])); // Output: [1, 2, 3, 4]
   ```

8. **Implement a function to get unique elements from an array:**  
   ```javascript
   console.log(unique([1, 2, 2, 3])); // Output: [1, 2, 3]
   ```

9. **Implement a function to check if an array contains duplicates:**  
   ```javascript
   console.log(hasDuplicates([1, 2, 3, 1])); // Output: true
   ```

10. **Implement a function to find the intersection of two arrays:**  
    ```javascript
    console.log(intersection([1, 2, 3], [2, 3, 4])); // Output: [2, 3]
    ```