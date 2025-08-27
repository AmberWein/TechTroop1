const express = require("express");
const app = express();
const PORT = 3000;
const path = require("path");

const store = [
    { name: "table", inventory: 3, price: 800 },
    { name: "chair", inventory: 16, price: 120 },
    { name: "couch", inventory: 1, price: 1200 },
    { name: "picture frame", inventory: 31, price: 70 }
]

// app.use(express.static("dist"));
app.get("/", (req, res) => {
//   res.send("Server is up and running smoothly");
res.sendFile(path.join(__dirname, "dist", "index.html"));
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

app.get("/buy/:name", (req, res) => {
  const itemName = req.params.name.toLowerCase();
  const item = store.find(product => product.name === itemName);

  if (!item) {
    return res.send({ error: "Item not found" });
  }

  if (item.inventory > 0) {
    item.inventory -= 1;
    res.send(item);
  } else {
    res.send({ message: "Sorry, this item is out of stock." });
  }
});

app.get("/sale", (req, res) => {
  const isAdmin = req.query.admin === "true";

  if (isAdmin) {
    store.forEach(item => {
      if (item.inventory > 10) {
        item.price = item.price / 2;
      }
    });
  }

  res.send(store);
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});