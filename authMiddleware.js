const jwt = require('jsonwebtoken');
const MY_SECRET_KEY = require("./config");

const authMiddleware = (req, res, next) => {
  const authorization = req.headers.authorization;
  if (authorization) {
    try {
      console.log("Auth: " + MY_SECRET_KEY);
      const token = authorization.split(" ")[1];
      const decoded = jwt.verify(token, MY_SECRET_KEY);
      next();
    } catch (err) {
      res.status(401).json({
        message: "Invalid token"
      });
    }
  }
};
exports.authMiddleware = authMiddleware;
