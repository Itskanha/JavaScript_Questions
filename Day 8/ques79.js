// 9. **Find the index of an element in an array:**  
//     ```javascript
//     console.log(findIndex([1, 2, 3], 2)); // Output: 1

function findIndex(arr, target){
    for(let i=0; i<arr.length + 1; i++){
        if(arr[i] === target){
            return i;
        }
    }
    return -1;
}

console.log(findIndex([1, 2, 3], 2)); // Output: 1