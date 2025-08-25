const http = require("http");

const PORT = 3000;

let users = [
  { id: 1, name: "John Doe", email: "john@example.com" },
  { id: 2, name: "Jane Smith", email: "jane@example.com" }
];

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "application/json");

  if (req.method === "GET" && req.url === "/api/users") {
    res.writeHead(200);
    res.end(JSON.stringify(users));
  }
  else if (req.method === "GET" && req.url.startsWith("/api/users/")) {
    const id = parseInt(req.url.split("/")[3]);
    const user = users.find(u => u.id === id);

    if (user) {
      res.writeHead(200);
      res.end(JSON.stringify(user));
    } else {
      res.writeHead(404);
      res.end(JSON.stringify({ error: "User not found" }));
    }
  }
  else if (req.method === "POST" && req.url === "/api/users") {
    let body = "";

    req.on("data", chunk => {
      body += chunk.toString();
    });

    req.on("end", () => {
      try {
        const newUser = JSON.parse(body);

        if (!newUser.name || !newUser.email) {
          res.writeHead(400);
          return res.end(JSON.stringify({ error: "Missing name or email" }));
        }

        newUser.id = users.length ? users[users.length - 1].id + 1 : 1;
        users.push(newUser);

        res.writeHead(201);
        res.end(JSON.stringify(newUser));
      } catch (err) {
        res.writeHead(400);
        res.end(JSON.stringify({ error: "Invalid JSON" }));
      }
    });
  }
  else {
    // 404 for other routes
    res.writeHead(404);
    res.end(JSON.stringify({ error: "Route not found" }));
  }
});

server.on("error", (err) => {
  console.error("Server error:", err);
});

server.listen(PORT, () => {
  console.log(`REST API running at http://localhost:${PORT}`);
});
