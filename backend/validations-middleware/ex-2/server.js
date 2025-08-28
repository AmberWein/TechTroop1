const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());


const users = [
  { id: 1, name: "John" },
  { id: 2, name: "Jane" }
];

/** Middlewares */
function validateId(req, res, next) {
  const id = Number(req.params.id);
  if (isNaN(id)) {
    const err = new Error("Invalid ID format");
    err.status = 400;
    return next(err);
  }
  req.id = id;
  next();
}

function checkResourceExists(req, res, next) {
  const user = users.find(u => u.id === req.id);
  if (!user) {
    const err = new Error("User not found");
    err.status = 404;
    return next(err);
  }
  req.user = user;
  next();
}

/** Routes */
app.get("/users", (req, res) => {
  res.json(users);
});

app.get("/users/:id", validateId, checkResourceExists, (req, res) => {
  res.json(req.user);
});

app.post("/users", (req, res) => {
  const { name } = req.body;
  if (!name || typeof name !== "string") {
    return res.status(400).json({ error: "Name is required" });
  }
  const newId = users.length ? users[users.length - 1].id + 1 : 1;
  const newUser = { id: newId, name };
  users.push(newUser);
  res.status(201).json(newUser);
});

/** Error-handling middleware */
app.use((err, req, res, next) => {
  res.status(err.status || 500).json({ error: err.message });
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});