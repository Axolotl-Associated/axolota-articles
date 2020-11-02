// const db = require('./models/linksWalletModel');

const cookieController = {};

cookieController.setCookie = (req, res, next) => {
  res.cookie('ssid', res.locals.id.user_id, { 
    domain: '.localhost:3000',
    path: '/',
    httpOnly: false 
  });
  return next();
};

module.exports = cookieController;

