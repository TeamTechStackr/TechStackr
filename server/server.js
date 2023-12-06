const exp = require('constants');
const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();
const PORT = 3000;
const dbController = require('./controllers/dbController');

app.use(express.urlencoded({extended: true}));
app.use(express.json());

// app.use(cors({
//     origin: 'http://localhost:8080',
//     methods: ['GET', 'POST'],
//     allowedHeaders: ['Content-Type', 'Authorization']
// }));

// app.use(express.static(path.resolve(__dirname, '../src')));

//handles post request
app.post('/addProject', dbController.addProject, (req, res, next) => {
    return res.status(200).json('records added (maybe, who knows)')
});

//handles get request
app.get('/getProjects', (req, res, next) => {
    
});

//handle unknown routes
app.use((req, res) => {
    res.status(404).send('page was not found!!!!!!!');
});

//global error handler
app.use((err, req, res, next) => {
    const defaultErr = {
      log: 'Express error handler caught unknown middleware error',
      status: 500,
      message: { err: 'An error occurred' },
    };
    const errorObj = Object.assign({}, defaultErr, err);
    console.log(errorObj.log);
    return res.status(errorObj.status).json(errorObj.message);
});
  
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

module.exports = app;