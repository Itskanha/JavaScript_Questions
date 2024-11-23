// 4. **Find the greatest common divisor (GCD):**  
//    ```javascript
//    console.log(gcd(48, 18)); // Output: 6
//    ```

function gcd(num1, num2){

    let gcd = 1;

    for(let i=1; i<=Math.min(num1,num2); i++){
        if(num1 % i === 0 && num2 % i === 0){
            gcd = i;
        }
    }

    return gcd;
    
}

console.log(gcd(48, 18));