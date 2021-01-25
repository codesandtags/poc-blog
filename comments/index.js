const express = require("express");
const bodyParser = require("body-parser");
const { randomBytes } = require("crypto");

const dotenv = require("dotenv");
dotenv.config();

const app = express();
app.use(bodyParser.json());

const commentsByPostId = {};

app.get("/posts/:id/comments", (req, res) => {
  res.send(commentsByPostId[req.params.id] || []);
});

app.post("/posts/:id/comments", (req, res) => {
  const commentId = randomBytes(4).toString("hex");
  const { content } = req.body;

  const comments = commentsByPostId[req.params.id] || [];
  comments.push({ id: commentId, content: content });

  commentsByPostId[req.params.id] = comments;

  res.status(201).send(comments);
});

const PORT = process.env.PORT || 4001;
app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
