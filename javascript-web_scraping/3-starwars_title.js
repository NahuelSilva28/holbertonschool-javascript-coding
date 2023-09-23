#!/usr/bin/node

const request = require('request');
const episodeNumber = process.argv[2];

if (!episodeNumber) {
  console.error('Usage: ./3-starwars_title.js <episode_number>');
  process.exit(1);
}

const url = `https://swapi-api.hbtn.io/api/films/${episodeNumber}`;

request(url, (error, response, body) => {
  if (!error && response.statusCode === 200) {
    console.log(JSON.parse(body).title);
  } else {
    console.error(error || `Error: Status code ${response ? response.statusCode : 'Unknown'}`);
    process.exit(1);
  }
});
