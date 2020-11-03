// const db = require('./models/linksWalletModel');

const cookieController = {};

cookieController.setCookie = (req, res, next) => {
  res.cookie('ssid', res.locals.id, { 
    httpOnly: true 
  });
  return next();
};

module.exports = cookieController;

