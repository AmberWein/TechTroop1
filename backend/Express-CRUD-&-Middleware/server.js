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

app.post("/sentence", (req, res) => {
  const { sentence } = req.body;

  if (!sentence || typeof sentence !== "string") {
    return res.status(400).send({ error: "Please provide a valid sentence" });
  }

  const words = sentence.toLowerCase().split(/\s+/); // split by spaces
  let numNewWords = 0;
  let numOldWords = 0;

  words.forEach(word => {
    if (wordCounter[word]) {
      wordCounter[word] += 1;
      numOldWords += 1;
    } else {
      wordCounter[word] = 1;
      numNewWords += 1;
    }
  });

  res.send({
    text: `Added ${numNewWords} words, ${numOldWords} already existed`,
    currentCount: -1
  });
});