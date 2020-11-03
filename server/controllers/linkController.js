const db = require('../models/linksWalletModel');

const linkController = {};

linkController.addLinks = (req, res, next) => {
  const addLinkQuery = `
    INSERT INTO links (title, url, description, priority, user_id)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING title`;

  const id = req.cookies.ssid;
  const { title, url, description, priority } = req.body;
  const values = [title, url, description, priority, id];

// need funtionality to delete links and to change priority
// would also like to create categories e.g. videos, coding articles, news articles

// adds link to database
  db.query(addLinkQuery, values)
    .then((data) => {
      console.log("link was added: ", data.rows[0]);
      return next();
    })
    .catch((err) => {
      return next({err});
    })
};

// sends top 3 to fontend for display upon loading dashboard
linkController.getTop3 = (req, res, next) => {
  const id = req.cookies.ssid;
  const top3LinksQuery = `
    SELECT * FROM links
    WHERE user_id = $1 AND priority = 'high'
    LIMIT 3
  `;

  db.query(top3LinksQuery, [id])
    .then((data) => {
      res.locals.top3 = data.rows;
      return next()
    })
    .catch((err) => next({err}));
};


// get links by priority for dropdown menus
linkController.getLinks = (req, res, next) => {
  const id = req.cookies.ssid;
  const { priority } = req.params;

  const getLinksQuery = `
    SELECT * FROM links
    WHERE user_id = $1 AND priority = $2
  `;

  db.query(getLinksQuery, [id, priority])
    .then((data) => {
      res.locals.links = data.rows;
      return next()
    })
    .catch((err) => next({err}));
}
module.exports = linkController;