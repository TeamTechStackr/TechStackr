const db = require('../models/tableModel');

const dbController = {};

dbController.addProject = (req, res, next) => {
  console.log('addProject reached');
  console.log('req body received', req.body);
  const { name, ghLink } = req.body;
  const query = `INSERT INTO projects (name, ghlink) VALUES ('${name}', '${ghLink}') RETURNING *;` 
  db.query(query)
    .then((data) => {
      console.log('id from query response', data.rows[0].project_id)
      res.locals.projectId = data.rows[0].project_id
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

dbController.addTechnologies = (req, res, next) => {
  console.log('addTechnologies reached');
  const { technologies } = req.body;
  const techIds = [];
  for (let i = 0; i < technologies.length; i++) {
    const query = `INSERT INTO technologies (name) VALUES ${technologies[i]}`
    db.query(query)
      .then((data) => {
        console.log(data);
        return next();
      })
  }
  

};

dbController.addProjectTechnologies = (req, res, next) => {
  return next();
};

dbController.getProjects = (req, res, next) => {

}

module.exports = dbController;