// 2. FizzBuzz
// Write a function that prints numbers from 1 to 100. For multiples of 3, 
// print "Fizz" instead of the number, and for multiples of 5, print "Buzz". 
// For numbers that are multiples of both 3 and 5, print "FizzBuzz".

function fizzBuzz() {
    // Initialize arrays to hold Fizz, Buzz, and FizzBuzz results
    let fuzz = [];      // Array to store numbers divisible by 3 (Fizz)
    let buzz = [];      // Array to store numbers divisible by 5 (Buzz)
    let fizzbuzz = [];  // Array to store numbers divisible by both 3 and 5 (FizzBuzz)

    // Loop through numbers from 1 to 100
    for (let i = 1; i <= 100; i++) {
        // Check if the number is divisible by both 3 and 5
        if (i % 3 === 0 && i % 5 === 0) {
            fizzbuzz.push(`${i} FizzBuzz`); // Add "FizzBuzz" to the fizzbuzz array
        } 
        // Check if the number is divisible by 3
        else if (i % 3 === 0) {
            fuzz.push(`${i} Fizz`); // Add "Fizz" to the fuzz array
        } 
        // Check if the number is divisible by 5
        else if (i % 5 === 0) {
            buzz.push(`${i} Buzz`); // Add "Buzz" to the buzz array
        }
    }

    // Log the results of Fizz, Buzz, and FizzBuzz
    console.log("Fuzz: ", fuzz);      // Display numbers that are Fizz
    console.log("Buzz: ", buzz);      // Display numbers that are Buzz
    console.log("FizzBuzz: ", fizzbuzz); // Display numbers that are FizzBuzz
}

// Call the fizzBuzz function to execute the logic
fizzBuzz();
