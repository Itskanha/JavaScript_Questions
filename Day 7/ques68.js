// 8. **Implement a function to get unique elements from an array:**  
//    ```javascript
//    console.log(unique([1, 2, 2, 3])); // Output: [1, 2, 3]
//    ```

function unique(array){
    return array.filter((value, index, self) => self.indexOf(value) === index);
}

console.log(unique([1, 2, 2, 3])); // Output: [1, 2, 3]4