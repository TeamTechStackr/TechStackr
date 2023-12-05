const exp = require('constants');
const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

console.log('server reached')

app.use(express.urlencoded({extended: true}));
app.use(express.json());

//handles post request
app.post('/addProject', (req, res, next) => {
    
})

//handles get request
app.get('/getProjects', (req, res, next) => {
    
})

//handle unknown routes
app.use((req, res) => {
    res.status(404).send();
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