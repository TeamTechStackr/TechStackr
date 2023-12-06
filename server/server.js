const exp = require('constants');
const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

console.log('server reached')

app.use(express.urlencoded({extended: true}));
app.use(express.json());


app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

module.exports = app;