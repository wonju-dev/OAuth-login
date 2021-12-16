import express from "express";
import path from "path";
import { indexRouter } from "./routes";

const app = express();

app.listen(3000, () => console.log("connected"));

app.use(express.static(path.join(__dirname, "public")));
app.use("/", indexRouter);
