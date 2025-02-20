const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fileRoutes = require('./routes/fileRoutes');
const { createTable } = require('./models/File');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());


createTable();

// Routes
app.use('/api', fileRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
