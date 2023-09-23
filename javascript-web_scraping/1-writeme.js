#!/usr/bin/node

const fs = require('fs');

const [filePath, contentToWrite] = process.argv.slice(2);

if (!filePath || !contentToWrite) {
  console.error('Usage: ./1-writeme.js <file_path> "<content>"');
  process.exit(1);
}

fs.writeFileSync(filePath, contentToWrite, 'utf-8');
console.log('File written successfully');
