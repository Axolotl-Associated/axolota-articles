const db = require('../models/linksWalletModel.js');
const bcrypt = require('bcryptjs');

const userController = {};

userController.createUser = (req, res, next) => {
  const newUserQuery = `
  INSERT INTO users (email, PASSWORD)
    VALUES ($1, $2)
  RETURNING
    email
  `;
    console.log("body email: ", req.body.email, "body password:", req.body.password);
  // destructure email and password from req.body
  const { email, password } = req.body;
  // encrypt password
  bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash(password, salt, function(err, hash) {
      // store hash in db as password
      //query to insert a new user into the users table with email and
      db.query(newUserQuery, [email, password])
        .then((data) => {
          console.log("Query successful: ", data.rows);
          return next();
        })
        .catch((err) => {
          console.log("err in createUser: ", err);
        })
    })
  });
};

module.exports = userController;