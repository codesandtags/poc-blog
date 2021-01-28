const express = require("express");
const bodyParser = require("body-parser");
const expressWinston = require("express-winston");
const { winstonConfig, logger } = require("./winston-config");
const axios = require("axios");
const { handleEvent } = require("./src/handler");

const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use(expressWinston.logger(winstonConfig));

const posts = {};

const fetchEvents = async () => {
  const response = await axios.get(`${process.env.EVENTS_API}/events`);
  const events = response.data || [];

  logger.info("The events are: ");
  logger.warn(JSON.stringify(events));

  for (const event of events) {
    const { type, data } = event;

    handleEvent(type, data, posts);
  }
};

app.get("/posts", (req, res) => {
  res.send(posts);
});

app.post("/events", (req, res) => {
  const { type, data } = req.body;
  logger.warn(`Recieved event: [${type}]`);

  handleEvent(type, data, posts);

  res.send({});
});

const PORT = process.env.PORT || 4002;
app.listen(PORT, () => {
  logger.info(`Listening on ${PORT}`);

  fetchEvents();
});
