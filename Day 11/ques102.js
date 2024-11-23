// 2. **Check if a number is prime:**  
//    ```javascript
//    console.log(isPrime(7)); // Output: true
//    ```

function isPrime(num) {
    // Check if the number is less than or equal to 1
    if (num <= 1) {
        return `${num} is not a Prime :- ${false}`;
    }

    // Check if the number is 2 (the only even prime number)
    if (num === 2) {
        return `${num} is a Prime :- ${true}`;
    }

    // Check for factors from 2 to the square root of num
    for (let i = 2; i <= Math.sqrt(num); i++) {
        // If num is divisible by any number in this range, it's not prime
        if (num % i === 0) {
            return `${num} is not a Prime :- ${false}`;
        }    
    }

    // If no factors were found, num is prime
    return `${num} is a Prime :- ${true}`;
}

// Example usage: Check if 11 is a prime number
console.log(isPrime(11)); // Output: 11 is a Prime :- true