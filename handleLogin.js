const jwt = require('jsonwebtoken');
const findUser = require('./findUser');
const MY_SECRET_KEY = require("./config");

const handleLogin = (req, res) => {
  const body = req.body;
  const username = body.username;
  const password = body.password;

  if (findUser(username, password)) {
    const token = jwt.sign({}, MY_SECRET_KEY);
    res.status(200).send({ token });
  }
  res.status(403).send("Sorry");
};
exports.handleLogin = handleLogin;
