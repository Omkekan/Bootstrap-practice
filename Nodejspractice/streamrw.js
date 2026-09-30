const fs = require('fs');
const path = require('path');

const inputPath = path.join(__dirname, 'writeStreamData4.txt');
const outputPath = path.join(__dirname, 'writeStreamData5.txt');

let myreadStream = fs.createReadStream(inputPath, "utf-8");
let mywriteStream = fs.createWriteStream(outputPath);

// Handle read errors (like missing files)
myreadStream.on('error', (err) => {
    console.error("Read Error:", err.message);
});

// Handle write errors
mywriteStream.on('error', (err) => {
    console.error("Write Error:", err.message);
});

// Safely pipe the data
myreadStream.pipe(mywriteStream);