#!/usr/bin/node

const request = require('request');
const apiUrl = process.argv[2];

request(apiUrl, (error, response, body) => {
  if (!error) {
    const films = JSON.parse(body).results;
    const characterId = 18;
    const count = films.reduce((total, film) => {
      if (film.characters.includes(`https://swapi-api.hbtn.io/api/people/${characterId}/`)) {
        return total + 1;
      }
      return total;
    }, 0);
    console.log(count);
  }
});
