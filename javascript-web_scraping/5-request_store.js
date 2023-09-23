#!/usr/bin/node

const request = require('request');
const fs = require('fs');

const [url, file] = process.argv.slice(2);

if (!url || !file) {
  console.error('Usage: ./5-request_store.js <URL> <file_path>');
  process.exit(1);
}

request(url, (error, response, body) => {
  if (error) {
    console.error(error);
    process.exit(1);
  }

  fs.writeFile(file, body, 'utf-8', (err) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    console.log(`File "${file}" written successfully`);
  });
});
