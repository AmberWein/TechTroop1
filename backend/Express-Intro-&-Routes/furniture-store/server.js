const express = require("express");
const app = express();
const PORT = 3000;

const store = [
    { name: "table", inventory: 3, price: 800 },
    { name: "chair", inventory: 16, price: 120 },
    { name: "couch", inventory: 1, price: 1200 },
    { name: "picture frame", inventory: 31, price: 70 }
]

app.get("/", (req, res) => {
  res.send("Server is up and running smoothly");
});

app.get("/priceCheck/:name", (req, res) => {
  const itemName = req.params.name.toLowerCase();
  const item = store.find(product => product.name === itemName);

  if (item) {
    res.send({ price: item.price });
  } else {
    res.send({ price: null });
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});