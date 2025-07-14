function safeJsonParse(input) {
  try {
    return JSON.parse(input);
  } catch (error) {
    return "Invalid JSON format";
  }
}

// test cases
console.log(safeJsonParse('{"name": "John"}')); // Output: { name: 'John' }
console.log(safeJsonParse('invalid json')); // Output: "Invalid JSON format"
