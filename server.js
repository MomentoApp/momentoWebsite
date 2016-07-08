const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const router = require('./routes');

const host = process.env.HOST || 'localhost';
const port = process.env.PORT || 3000;

app
  .use(cookieParser())
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: true }))
  .use('/', router);

app.set('view engine', 'ejs');

app.listen(port, () => {
  console.log(`Connected to ${host}:${port}`);
});

module.exports = { app };