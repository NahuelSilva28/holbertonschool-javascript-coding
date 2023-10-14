const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.promises.readFile(path, 'utf-8')
      .then((fileContent) => {
        const lines = fileContent.split('\n').filter((line) => line.trim() !== '');

        const data = {};
        lines.forEach((line) => {
          const [firstName, field] = line.split(',');
          data[field] = data[field] || { count: 0, names: [] };
          data[field].count += 1;
          data[field].names.push(firstName);
        });

        console.log(`Number of students: ${lines.length}`);

        for (const [field, { count, names }] of Object.entries(data)) {
          if (Object.prototype.hasOwnProperty.call(data, field)) {
            console.log(`Number of students in ${field}: ${count}. List: ${names.join(', ')}`);
          }
        }

        resolve();
      })
      .catch(() => {
        reject(new Error('Cannot load the database'));
      });
  });
}

module.exports = countStudents;
