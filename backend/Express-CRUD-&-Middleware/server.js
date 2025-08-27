const express = require("express");
const app = express();
const PORT = 3000;

app.get("/sanity", (req, res) => {
  res.send("Server is up and running");
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});

const wordCounter = {};

app.get("/word/:word", (req, res) => {
  const word = req.params.word.toLowerCase();
  const count = wordCounter[word] || 0;
  res.send({ count });
});

app.use(express.json());

app.post("/word", (req, res) => {
  const { word } = req.body;

  if (!word || typeof word !== "string") {
    return res.status(400).send({ error: "Please provide a valid word" });
  }

  const lowerWord = word.toLowerCase();
  if (wordCounter[lowerWord]) {
    wordCounter[lowerWord] += 1;
  } else {
    wordCounter[lowerWord] = 1;
  }

  res.send({
    text: `Added ${lowerWord}`,
    currentCount: wordCounter[lowerWord]
  });
});