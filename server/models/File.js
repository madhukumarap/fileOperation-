const connection = require('../config/db');

const createTable = () => {
  const query = `
    CREATE TABLE IF NOT EXISTS files (
      id INT AUTO_INCREMENT PRIMARY KEY,
      path VARCHAR(255) NOT NULL,
      size INT NOT NULL,
      dateCreated DATETIME NOT NULL,
      dateModified DATETIME,
      parentPath VARCHAR(255)
    );
  `;
  connection.query(query, (err) => {
    if (err) {
      console.error('Error creating table:', err);
    }
  });
};

module.exports = { createTable };
