import express from "express";
import path from "path";

const indexRouter = express.Router();

indexRouter.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

export { indexRouter };
