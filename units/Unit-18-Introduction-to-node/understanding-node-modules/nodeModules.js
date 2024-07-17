// ---------------- Modules and Require ------------------------


// Import the math operations module
const mathOperations = require('./mathOperations.js'); 

// Use the imported functions
const num1 = 10;
const num2 = 5;

console.log(`Addition: ${num1} + ${num2} = ${mathOperations.add(num1, num2)}`);
console.log(`Subtraction: ${num1} - ${num2} = ${mathOperations.subtract(num1, num2)}`);
console.log(`Multiplication: ${num1} * ${num2} = ${mathOperations.multiply(num1, num2)}`);
console.log(`Division: ${num1} / ${num2} = ${mathOperations.divide(num1, num2)}`);


// now let's talk about destructured imports. this is usefull when you want to only import one object from a large module.

// Destructured import of specific functions from the mathOperations module
const { add, subtract } = require('./mathOperations.js');

// Use the imported functions
const num3 = 13;
const num4 = 19;

console.log(`Addition: ${num3} + ${num4} = ${add(num1, num2)}`);
console.log(`Subtraction: ${num3} - ${num4} = ${subtract(num1, num2)}`);


// ------------------ importing built in modules -------------------


// Import the built-in fs module for this example.
const fs = require('fs');

// Read the content of the file asynchronously
fs.readFile('./example.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading the file:', err);
        return;
    }
    console.log('File content:', data);

    // Modify the content
    const newData = data + '\nThis is additional content.';

    // Write the modified content back to the file
    fs.writeFile('./example.txt', newData, 'utf8', (err) => {
        if (err) {
            console.error('Error writing to the file:', err);
            return;
        }
        console.log('File has been updated.');
    });
});