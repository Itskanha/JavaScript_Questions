// 2. **Catch errors and return a default value:**  
//    ```javascript
//    // Returns null if JSON parsing fails.
//    ```

// Function to safely parse JSON and return a default value if parsing fails
function safeJsonParse(jsonString) {
    try {
        // Attempt to parse the JSON string
        return JSON.parse(jsonString);
    } catch (error) {
        // Return null if JSON parsing fails
        return null;
    }
}

// Example usage
const validJson = '{"name": "Alice", "age": 30}';
const invalidJson = "{name: 'Alice', age: 30}"; // Invalid JSON format

const parsedValid = safeJsonParse(validJson);
console.log(parsedValid); // Output: { name: 'Alice', age: 30 }

const parsedInvalid = safeJsonParse(invalidJson);
console.log(parsedInvalid); // Output: null

