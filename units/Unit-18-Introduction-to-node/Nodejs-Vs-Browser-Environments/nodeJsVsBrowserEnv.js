// Welcome to Node.js

/*
Node.js is a runtime environment that basically allows you to run JavaScript code outside of a web browser. 
It is built on Chrome's V8 JavaScript engine and is commonly used for building server-side applications.
*/

// Using Node.js, we can run this JavaScript code outside of a browser.
const greet = name => {
    console.log(`Hello ${name}`);
}

greet("Ashane");

/*
In a browser, the global object is `window`. In Node.js, the global object is `global`.
The `window` object represents the browser window and provides methods and properties for interacting with the browser.
The `global` object in Node.js provides methods and properties that are available globally in the Node.js environment.
*/

// Let's take a look at the global object in Node.js

const showGlobal = () => {
    console.log(global);
}

// Uncomment the line below to see the global object in Node.js
// showGlobal();

/*
The global object in Node.js includes several useful methods and properties. Here are some examples:
*/

// setTimeout: Executes a function after a specified delay.
const sayHello = () => {
    console.log('Hello after 2 seconds');
}
setTimeout(sayHello, 2000);

// setInterval: Executes a function repeatedly with a fixed time delay between each call.
const sayHelloInterval = () => {
    console.log('Hello every 2 seconds');
}
const intervalId = setInterval(sayHelloInterval, 2000);

// clearInterval: Stops the repeated execution of a function set by setInterval.
setTimeout(() => {
    clearInterval(intervalId);
    console.log('Stopped the interval');
}, 10000);

// console: Provides a simple debugging console.
console.log('This is a log message');
console.error('This is an error message');

// process: Provides information about the current Node.js process.
console.log(`Process ID: ${process.pid}`);
console.log(`Node.js version: ${process.version}`);

// __dirname: The directory name of the current module.
console.log(`Current directory: ${__dirname}`);

// __filename: The file name of the current module.
console.log(`Current file: ${__filename}`);

/*
These are just a few examples of the global object's methods and properties in Node.js. 
The global object provides many more utilities that can be used throughout your Node.js applications.
*/