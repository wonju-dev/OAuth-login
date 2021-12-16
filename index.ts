import express from "express";
import { mainPageRouter } from "./routes";
const app = express();

app.listen(3000, () => {
  console.log("connected");
});

app.use("/", mainPageRouter);
