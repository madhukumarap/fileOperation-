const express = require('express');
const { getAllFiles } = require('../controllers/fileController');

const router = express.Router();

router.get('/files', getAllFiles);

module.exports = router;
