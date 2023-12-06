const db = require('../models/tableModel');

const dbController = {};

dbController.addProject = (req, res, next) => {
  console.log('addProject reached');
  // console.log('req body received', req.body);
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

dbController.addTechnologies = async (req, res, next) => {
  console.log('addTechnologies reached');
  // console.log('req body', req.body);
  const { technologies } = req.body;
  const techIds = [];
  try {
    for (let i = 0; i < technologies.length; i++) {
      const query = `INSERT INTO technologies (name) VALUES ('${technologies[i]}') RETURNING *;`
      const data = await db.query(query)
      // console.log(`response from ${technologies[i]} query`, data.rows);
      techIds.push(data.rows[0].tech_id)
      res.locals.techIds = techIds;
    }
    console.log('res locals techIds', res.locals.techIds);
    return next();
  } catch (err) {
      console.log(err);
      return next({
        log: `dbController.addTechnologies ERROR : ${err}`,
        message: {
            err: 'Error ocurred in db.Controller.addTechnologies.',
        },
      });
  };
};

dbController.addProjectTechnologies = async (req, res, next) => {
  console.log('addProjectTechnologies reached');
  const projectId = res.locals.projectId;
  const techIds = res.locals.techIds;
  try{
    for (let i = 0; i < techIds.length; i++) {
      const query = `INSERT INTO projecttechnologies (project_id, tech_id) VALUES ('${projectId}','${techIds[i]}') RETURNING *;`
      const data = await db.query(query)
      console.log('addPTs query response', data.rows)
    }
      
    return next();
  }
  catch(err){
    console.log(err);
    return next({
      log: `dbController.addProjectTechnologies ERROR : ${err}`,
      message: {
        err: 'Error ocurred in db.Controller.addProjectTechnologies.'
      }
    })
  } 
};

dbController.getProjects = (req, res, next) => {

}

module.exports = dbController;