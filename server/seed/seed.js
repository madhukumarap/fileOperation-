const connection = require('../config/db');

const data = [
  { path: "Home/Picture.jpg", size: 4555, dateCreated: new Date(), dateModified: new Date(), parentPath: "Home" },
  { path: "Home/Documents", size: 100000, dateCreated: new Date(), dateModified: new Date(), parentPath: "Home" },
];

const insertData = () => {
  const query = `INSERT INTO files (path, size, dateCreated, dateModified, parentPath) VALUES ?`;
  const values = data.map(item => [item.path, item.size, item.dateCreated, item.dateModified, item.parentPath]);

  connection.query(query, [values], (err, results) => {
    if (err) {
      console.error('Error inserting data:', err);
    } else {
      console.log('Data inserted successfully');
    }
  });
};

insertData();
