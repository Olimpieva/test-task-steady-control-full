const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');

const routes = require('./routes');
const cors = require('./middlewares/cors');
const errorHandler = require('./middlewares/error-determinant');

const { PORT = 3001 } = process.env;
const DB_URL = 'mongodb://mongo:27017/citizensdb';

mongoose.connect(DB_URL);

const app = express();

app.use(express.json());
app.use(express.urlencoded());
app.use(cookieParser());
app.use(cors);

app.use(routes);

app.use(errorHandler);

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`App listening on port ${PORT}`);
});
