const fs = require('fs');

function countStudents(path) {
  try {
    const fileContent = fs.readFileSync(path, 'utf-8');
    const lines = fileContent.split('\n').filter((line) => line.trim() !== '');

    const data = {};
    lines.forEach((line) => {
      const [firstName, field] = line.split(',');
      data[field] = data[field] || { count: 0, names: [] };
      data[field].count += 1; // Fixed the '++' operator
      data[field].names.push(firstName);
    });

    console.log(`Number of students: ${lines.length}`);

    // Use Object.keys(data) to iterate over properties
    Object.keys(data).forEach((field) => {
      console.log(`Number of students in ${field}: ${data[field].count}. List: ${data[field].names.join(', ')}`);
    });
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
