const db = require('../models/linksWalletModel');

const sessionController = {};

sessionController.startSession = (req, res, next) => {
  const sessionQuery = `INSERT into cookie_sessions (cookie_id)
  VALUES ($1)
  RETURNING created_at`;

  console.log('res.locals.id= ', res.locals.id)
  console.log('id is type: ', typeof res.locals.id)
  db.query(sessionQuery, [res.locals.id])
    .then((data) => {
      console.log('New Session: ', data.rows);
      return next();
    })
    .catch((err) => {
      return next({ err });
    });
};

module.exports = sessionController;