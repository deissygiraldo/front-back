require("dotenv").config();// require for the library to read the .env file
const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const app = express();

const config = require('./config');
const api = require('./API');

app.use(express.static("public"));
app.use(cors());
app.use(express.json());
app.use('/api', api);
app.use('/api/v1', api);

const moongooseConfig = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
};
mongoose.connect(config.dbConnectionString, moongooseConfig);

app.listen(config.port, () => {
  console.log('Servidor iniciado ...');
});
