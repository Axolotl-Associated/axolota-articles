const db = require('../models/linksWalletModel.js');
const bcrypt = require('bcryptjs');

const userController = {};

userController.createUser = (req, res, next) => {
  const newUserQuery = `
  INSERT INTO users (email, PASSWORD)
    VALUES ($1, $2)
  RETURNING
    user_id
  `;
    console.log("body email: ", req.body.email, "body password:", req.body.password);
  // destructure email and password from req.body
  const { email, password } = req.body;
  // encrypt password
  bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash(password, salt, function(err, hash) {
      // store hash in db as password
      //query to insert a new user into the users table with email and
      db.query(newUserQuery, [email, hash])
        .then((data) => {
          console.log("Query successful: ", data.rows);
          res.locals.id = data.rows[0].user_id;
          console.log("Locals ID: ", res.locals.id);
          return next();
        })
        .catch((err) => {
          console.log("err in createUser: ", err);
        })
    })
  });
};

userController.verifyUser = (req, res, next) => {
  const verifyQuery = `SELECT * FROM users WHERE email = $1`;
  const { email, password } = req.body;
  db.query(verifyQuery, [email])
    .then((data) => {
      if (!data) {
        res.redirect('/'); 
      };
      const hash = data.rows[0].password;
      bcrypt.compare(password, hash)
        .then((response) => {
          console.log("bcrypt res: ", response)
          if (response) {
          res.locals.id = data.rows[0].user_id;
          console.log("res.locals.id = ", res.locals.id)
          return next();
          };
          res.redirect('/');
        })
        .catch((err) => {
          console.log("error: ", err)
          return next({ err });
        })
    })
};

module.exports = userController;