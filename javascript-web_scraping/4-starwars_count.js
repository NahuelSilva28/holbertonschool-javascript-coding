#!/usr/bin/node

const request = require('request');
const url = 'http://localhost:3000/';

request(url, (error, response, body) => {
  if (!error) {
    const films = JSON.parse(body);
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
