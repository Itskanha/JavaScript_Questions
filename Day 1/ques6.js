// Q.6. Find the Missing Number
// Given an array of integers from 1 to `n`, find the missing number in the array.

function findMissingNum(arrNum) {
    // Determine n based on the largest number in the array
    const n = Math.max(...arrNum); // Get the maximum number in the array
    let numSum = 0;

    // Calculate the expected sum of numbers from 1 to n
    for (let i = 1; i <= n; i++) {
        numSum += i; // Sum of the first n natural numbers
    }

    // Calculate the actual sum of the numbers in the array
    const arrSum = arrNum.reduce((accumulator, current) => accumulator + current, 0);

    // The missing number is the difference between the expected and actual sums
    const missingNumber = numSum - arrSum;

    console.log("Missing Number:", missingNumber);
    console.log("Expected Sum:", numSum);
    console.log("Actual Sum:", arrSum);
}

// Test the function
findMissingNum([1, 2, 3, 4, 6, 7, 8, 9, 10]);
