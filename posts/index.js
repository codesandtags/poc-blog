const express = require("express");
const bodyParser = require("body-parser");
const { randomBytes } = require("crypto");
const expressWinston = require("express-winston");
const { winstonConfig, logger } = require("./winston-config");

const cors = require("cors");
const axios = require("axios");
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

app.post("/posts", async (req, res) => {
  const id = randomBytes(4).toString("hex");
  const { title } = req.body;

  posts[id] = {
    id,
    title,
  };

  await axios
    .post(`${process.env.EVENTS_API}/events`, {
      type: "PostCreated",
      data: { id, title },
    })
    .catch((err) => {
      logger.error(err);
    });

  res.status(201).send(posts[id]);
});

app.post("/events", (req, res) => {
  const { type } = req.body;
  logger.warn(`Recieved event: [${type}]`);

  res.send({});
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  logger.info(`Listening on ${PORT}`);
});
