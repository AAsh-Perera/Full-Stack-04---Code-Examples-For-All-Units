// File: mathOperations.js
// this file be used to explain how you can import modules. you can see this incation in the nodeModules.js file.
// Function to add two numbers
function add(a, b) {
    return a + b;
}

// Function to subtract two numbers
function subtract(a, b) {
    return a - b;
}

// Function to multiply two numbers
function multiply(a, b) {
    return a * b;
}

// Function to divide two numbers
function divide(a, b) {
    if (b === 0) {
        throw new Error('Division by zero is not allowed.');
    }
    return a / b;
}

// Export the functions
module.exports = {
    add,
    subtract,
    multiply,
    divide
};
