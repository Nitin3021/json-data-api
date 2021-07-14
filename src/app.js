const express = require('express');
const cors = require('cors');
const jsonDataRouter = require('./routers/jsonDataRouter');

const app = express();

app.options('*', cors())
app.use(cors())
app.use(express.json())
app.use(jsonDataRouter);

module.exports = app;
