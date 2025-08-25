const http = require("http");

const PORT = 3000;

const server = http.createServer((req, res) => {
  try {
    console.log(`method: ${req.method} URL: ${req.url}`);

    if (req.method === "GET" && req.url === "/") {
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("Welcome to my server!");
    } else if (req.method === "GET" && req.url === "/about") {
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("This is the about page");
    } else if (req.method === "GET" && req.url === "/contact") {
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("Contact me at: your.email@example.com");
    } else {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("404 - Page not found");
    }
  } catch (err) {
    console.error("Server error:", err);
    res.writeHead(500, { "Content-Type": "text/plain" });
    res.end("500 - Internal Server Error");
  }
});

// Catch server-level errors (like if port is busy)
server.on("error", (err) => {
  console.error("Failed to start server:", err);
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});