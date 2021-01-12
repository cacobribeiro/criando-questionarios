require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const controllers = require('./controllers');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use('/', controllers.initialPage);

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
