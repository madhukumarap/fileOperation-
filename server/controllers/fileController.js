const connection = require('../config/db');

// Get all files
const getAllFiles = (req, res) => {
  connection.query('SELECT * FROM files', (err, results) => {
    if (err) return res.status(500).json({ error: 'Database error' });
    res.json(results);
  });
};

module.exports = { getAllFiles };
