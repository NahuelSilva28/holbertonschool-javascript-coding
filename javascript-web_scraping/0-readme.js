#!/usr/bin/node
const fs = require('fs').promises;

const filePath = process.argv[2];

if (!filePath) {
  console.error('Usage: node 0-readme.js <file_path>');
} else {
  fs.readFile(filePath, 'utf-8')
    .then(console.log)
    .catch(console.error);
}
