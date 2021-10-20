const jwt = require('jsonwebtoken');
const { MY_SECRET_KEY } = require("./config");

const authMiddleware = (req, res, next) => {
  const authorization = req.headers.authorization;
  if (authorization) {
    console.log(authorization);
    const isValid = jwt.verify(authorization.replace('Bearer ', ''), MY_SECRET_KEY);
    if (isValid) {
      next();
    } else {
      res.status(403).send("Sorry");
    }
  }
  next();
};
exports.authMiddleware = authMiddleware;
