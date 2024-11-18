// 10. **Use try/catch to handle parsing JSON safely:**  
//     ```javascript
//     // Returns null and logs an error message if parsing fails.
//     ```


function safeJsonParse(jsonString) {
    try {
        return JSON.parse(jsonString); // Attempt to parse the JSON string
    } catch (error) {
        console.error("Error parsing JSON:", error.message); // Log the error message
        return null; // Return null if parsing fails
    }
}

// Example usage
const validJson = '{"name": "Kanha", "age": 23}';
const invalidJson = '{"name": "Kanha", age: 23}'; // Missing quotes around 'age'

const parsedValid = safeJsonParse(validJson);
console.log("Parsed valid JSON:", parsedValid); // Logs the parsed object

const parsedInvalid = safeJsonParse(invalidJson);
console.log("Parsed invalid JSON:", parsedInvalid); // Logs null
