const express = require('express');
const app = express();
const port = 3000;
const yoMamaApiHandler = require('./api/yoMamaApiHandler');
const handleGreeting = require('./greeting');
const { authMiddleware } = require("./authMiddleware");
const { handleLogin } = require("./handleLogin");
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello World")
})

app.post("/login", handleLogin)

app.get("/greeting/:name?", authMiddleware, handleGreeting);

app.get("/yoMama", authMiddleware, yoMamaApiHandler);

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

