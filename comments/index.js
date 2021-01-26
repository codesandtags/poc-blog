const express = require("express");
const bodyParser = require("body-parser");
const { randomBytes } = require("crypto");
const cors = require("cors");

const expressWinston = require("express-winston");
const { winstonConfig, logger } = require("./winston-config");

const dotenv = require("dotenv");
dotenv.config();

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use(expressWinston.logger(winstonConfig));

const commentsByPostId = {};

app.get("/posts/:id/comments", (req, res) => {
  res.send(commentsByPostId[req.params.id] || []);
});

app.post("/posts/:id/comments", (req, res) => {
  const commentId = randomBytes(4).toString("hex");
  const { comment } = req.body;

  const comments = commentsByPostId[req.params.id] || [];
  comments.push({ id: commentId, comment });

  commentsByPostId[req.params.id] = comments;

  res.status(201).send(comments);
});

const PORT = process.env.PORT || 4001;
app.listen(PORT, () => {
  logger.info(`Listening on ${PORT}`);
});
