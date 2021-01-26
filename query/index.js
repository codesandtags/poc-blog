const express = require("express");
const bodyParser = require("body-parser");
const expressWinston = require("express-winston");
const { winstonConfig, logger } = require("./winston-config");

const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use(expressWinston.logger(winstonConfig));

const posts = {};

app.get("/posts", (req, res) => {
  res.send(posts);
});

app.post("/events", (req, res) => {
  const { type, data } = req.body;
  logger.warn(`Recieved event: [${type}]`);

  if (type === "PostCreated") {
    const { id, title } = data;

    posts[id] = {
      id,
      title,
      comments: [],
    };
  }

  if (type === "CommentCreated") {
    const { id, comment, postId, status } = data;
    const post = posts[postId];
    post.comments.push({ id, comment, status });
  }

  if (type === "CommentUpdated") {
    const { id, comment, postId, status } = data;

    const post = posts[postId];
    const commentFound = post.comments.find((c) => c.id === id);

    if (commentFound) {
      commentFound.status = status;
      commentFound.comment = comment;
    }
  }

  res.send({});
});

const PORT = process.env.PORT || 4002;
app.listen(PORT, () => {
  logger.info(`Listening on ${PORT}`);
});