// lets learn about how to work with files using the built in file systems module.

// import the module
const fs = require('fs');

// lets read content from a file first 
const readFile = (filePath) => {
    // this is the method to read a file. it takes in a string as the file path, the charset, and callback.
    let data = fs.readFileSync(filePath, 'utf-8', (err, data) => {
            if (err) {
                // if it throws an error ex: file not found error
                console.error('Error reading the file: '. err);
                return;
            }
            // returns the content of the file.
            return data;
        });
    return data;
}


let filePath = './example.txt';
if (fs.existsSync(filePath)) {
    let fileContent = readFile(filePath);
    console.log(fileContent);
}

// now let's see how you can write to a file.
// note: this is an async function.
const writeFile = (filePath, content) => {
    // this method overwrites the file content that was allready there and then it writes the new content.
    fs.writeFile(filePath, content, 'utf-8', (err) => {
        if (err) {
            console.log('Error while writing to file: ', err);
            return;
        }
        console.log('Content was written to file.');
    });
}

// now let's see how you can append data to a file.
const appendFile = (filePath, content) => {
    // this method doesn't overwrite the file content that was allready there and instead it writes the new content at the end of the old content.
    fs.appendFile(filePath, content, 'utf-8', (err) => {
        if (err) {
            console.log('Error while appending data to file: ', err);
            return;
        }
        console.log('Content was appended to file.');
    });
}

// lets make a new directory and delete one now.

const mkrmdir = (dirName) => {
    if (fs.existsSync(dirName)) {
        console.log('Directory already exists. Removing Directory');
        fs.rmdir(dirName, (err) => {
            if (err){
                console.log('Error while removing directory: ', err);
            }
        });
        console.log('folder deleted.');
    }
    else {
        fs.mkdir(dirName, (err) => {
            if (err) {
                console.log('Error while creating directory: ', err);
            }
        });
        console.log('foler created');
    }
}

let dirName = './example-dir';
mkrmdir(dirName);