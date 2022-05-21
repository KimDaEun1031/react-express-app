require("dotenv").config();

const express = require('express');
const app = express();

const index = require('./routes/inexRouter');

app.use("/", index);

app.listen(3000, () => console.log('d'));

