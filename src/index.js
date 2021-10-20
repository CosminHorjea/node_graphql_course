//express server
const express = require('express');
const app = express();
const port = 3000;
const yoMamaApiHandler = require('./api/yoMamaApiHandler');
const handleGreeting = require('./greeting');

app.get("/", (req, res) => {
  res.send("Hello World")
})

app.get("/greeting/:name?", handleGreeting);

app.get("/yoMama", yoMamaApiHandler);

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
