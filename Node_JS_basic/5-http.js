const http = require('http');
const { countStudents } = require('./3-read_file_async');

const PORT = 1245;
const HOST = 'localhost';

const app = http.createServer((req, res) => {
  if (req.url === '/') {
    res.setHeader('Content-Type', 'text/plain');
    res.statusCode = 200;
    res.end('Hello Holberton School!\n');
  } else if (req.url === '/students') {
    res.setHeader('Content-Type', 'text/plain');
    res.statusCode = 200;
    res.write('This is the list of our students\n');

    countStudents(process.argv[2])
      .then((data) => {
        res.write(data);
        res.end();
      })
      .catch((error) => {
        res.end(error.message);
      });
  } else {
    res.setHeader('Content-Type', 'text/plain');
    res.statusCode = 404;
    res.end('Not Found\n');
  }
});

app.listen(PORT, HOST, () => {
  process.stdout.write(`Server listening at -> http://${HOST}:${PORT}\n`);
});

module.exports = app;
