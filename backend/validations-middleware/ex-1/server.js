const express = require("express");
const app = express();
const PORT = 3000;

/** Middleware 1: Logger */
app.use((req, res, next) => {
  const ts = new Date().toISOString();
  console.log(`[${ts}] ${req.method} ${req.originalUrl}`);
  next();
});

/** Middleware 2: Request counter */
let totalRequests = 0;
app.use((req, res, next) => {
  totalRequests += 1;
  req.requestCount = totalRequests;
  next();
});

/** Routes */
app.get("/", (req, res) => {
  res.json({ message: "Welcome!", requestCount: req.requestCount });
});

app.get("/about", (req, res) => {
  res.json({ message: "About page", requestCount: req.requestCount });
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});