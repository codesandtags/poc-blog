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

app.post("/events", async (req, res) => {
  const { type, data } = req.body;
  logger.info(`Recieved event: [${type}]`);
  logger.info(data);

  if (type === "CommentCreated") {
    const status = data.comment.includes("orange") ? "rejected" : "approved";

    await axios
      .post(`${process.env.EVENTS_API}/events`, {
        type: "CommentModerated",
        data: {
          id: data.id,
          postId: data.postId,
          content: data.content,
          status,
        },
      })
      .catch((err) => {
        logger.error(err);
      });
  }

  res.send({ status: "OK" });
});

const PORT = process.env.PORT || 4003;
app.listen(PORT, () => {
  logger.info(`Listening on ${PORT}`);
});
