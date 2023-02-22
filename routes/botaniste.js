const express = require('express');
const router  = express.Router();
const botanisteController = require('../controllers/botaniste');

const app = require('express')()
const bodyParser = require('body-parser')
const multer = require('multer') // v1.0.5
const upload = multer() // for parsing multipart/form-data

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencode

router.get('/botaniste', botanisteController.getAllBotaniste);
router.post('/botaniste',  upload.array(), botanisteController.newBotaniste);

module.exports = router; // export to use in main.js