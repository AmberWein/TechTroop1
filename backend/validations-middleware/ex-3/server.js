const express = require("express");
const Ajv = require("ajv");
const app = express();
const PORT = 3000;

app.use(express.json());

const ajv = new Ajv();
const posts = [];

const postSchema = {
  type: "object",
  properties: {
    title: { type: "string", minLength: 5, maxLength: 100 },
    content: { type: "string", minLength: 10, maxLength: 1000 },
    tags: { type: "array", items: { type: "string" } }
  },
  required: ["title", "content", "tags"],
  additionalProperties: false
};
const validatePost = ajv.compile(postSchema);

app.post("/posts", (req, res) => {
  const post = req.body;
  const valid = validatePost(post);
  if (!valid) return res.status(400).json({ errors: validatePost.errors });

  const newId = posts.length ? posts[posts.length - 1].id + 1 : 1;
  const newPost = { id: newId, ...post };
  posts.push(newPost);

  res.status(201).json(newPost);
});

app.get("/posts", (req, res) => {
  res.json(posts);
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));