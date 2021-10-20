const fetch = require("node-fetch")

const yoMamaApiHandler = async (req, res) => {
  const response = await fetch("https://yomomma-api.herokuapp.com/jokes")
  const data = await response.json()

  res.send(`<h1>${data.joke}</h1>`)
}

module.exports = yoMamaApiHandler;