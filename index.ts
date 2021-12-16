import express from "express";
import path from "path";
import { indexRouter } from "./routes";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.listen(Number(process.env.PORT), () => console.log("connected"));
app.use(express.static(path.join(__dirname, "public")));
app.use("/", indexRouter);
