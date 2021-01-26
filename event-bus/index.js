const express = require("express");
const bodyParser = require("body-parser");
const expressWinston = require("express-winston");
const { winstonConfig, logger } = require("./winston-config");

const axios = require("axios");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
app.use(bodyParser.json());

app.use(expressWinston.logger(winstonConfig));

app.post("/events", (req, res) => {
  const event = req.body;

  axios.post(`${process.env.POSTS_API}/events`, event);
  axios.post(`${process.env.COMMENTS_API}/events`, event);
  axios.post(`${process.env.QUERY_API}/events`, event);

  res.send({ status: "OK" });
});

const PORT = process.env.PORT || 4005;
app.listen(PORT, () => {
  logger.info(`Listening on ${PORT}`);
});
