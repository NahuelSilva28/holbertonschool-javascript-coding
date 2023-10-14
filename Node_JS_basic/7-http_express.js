const express = require('express');
const fs = require('fs').promises;

const app = express();
const port = 1245;

async function readStudentsData(path) {
  try {
    const data = await fs.readFile(path, 'utf8');
    const lines = data.split('\n').slice(1).filter((line) => line.trim() !== '');

    const studentsByField = {};

    lines.forEach((line) => {
      const [firstName, , , field] = line.split(',');

      if (!studentsByField[field]) {
        studentsByField[field] = [];
      }

      studentsByField[field].push(firstName);
    });

    const results = [`Number of students: ${lines.length}`];
    const fields = Object.keys(studentsByField);

    fields.forEach((field) => {
      const students = studentsByField[field];
      const count = students.length;
      const list = students.join(', ');
      results.push(`Number of students in ${field}: ${count}. List: ${list}`);
    });

    return results;
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  const path = process.argv[2];
  readStudentsData(path)
    .then((data) => {
      res.send(`This is the list of our students\n${data.join('\n')}`);
    })
    .catch((err) => {
      res.send(`This is the list of our students\n${err.message}`);
    });
});

app.listen(port);

module.exports = app;
