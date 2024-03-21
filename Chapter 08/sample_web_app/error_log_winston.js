

const express = require("express");
const logger = require("./logger");
const app = express();

app.get("/", (req, res, next) => { 
  logger.debug("The is landing page");
  res.status(200).send("Welcome Landing page.");
});

app.get("/mypage", (req, res, next) => {
  try {
    throw new Error("Error thrown!");
  } catch (error) {
    logger.error("Log error using winston logger");
    res.status(500).send("Error!");
  }
});

app.listen(5000, () => {
  logger.info("Server Listening On Port 3000");
});