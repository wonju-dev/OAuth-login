import express from "express";

const mainPageRouter = express.Router();

mainPageRouter.get("/", (req, res, next) => {
  res.send("welcome to index page");
});

export default mainPageRouter;
