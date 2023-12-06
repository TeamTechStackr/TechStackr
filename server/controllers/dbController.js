const db = require('../models/tableModel');

const dbController = {};

dbController.addProject = (req, res, next) => {
  console.log('addProject reached');
  const query = `INSERT INTO projects (name, ghlink) VALUES ('TechStackr', 'https://github.com/TeamTechStackr/TechStackr/tree/main');` 
  db.query(query)
    .then((data) => {
      console.log(data)
      return next();
    })
      .catch((err) => {
          console.log(err);
          next({
              log: `dbController.addProject ERROR : ${err}`,
              message: {
                  err: 'Error ocurred in db.Controller.addProject.',
              },
          });
  });
};

dbController.getProjects = (req, res, next) => {

}

module.exports = dbController;