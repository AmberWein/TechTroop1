const express = require("express");
const app = express();
const PORT = 3000;

app.get("/sanity", (req, res) => {
  res.send("Server is up and running");
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});

const wordCounter = {};  // track word counts

app.get("/word/:word", (req, res) => {
  const word = req.params.word.toLowerCase();
  const count = wordCounter[word] || 0;
  res.send({ count });
});