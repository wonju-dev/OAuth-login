import express from "express";
import path from "path";
import axios from "axios";

const indexRouter = express.Router();

indexRouter.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

indexRouter.get("/callback", async (req, res) => {
  const { code } = req.query;
  const { data } = await axios.post(`https://github.com/login/oauth/access_token?client_id=${process.env.GITHUB_CLIENT_ID}&client_secret=${process.env.GITHUB_SECRET_KEY}&code=${code}`);

  const searchParams = new URLSearchParams(data);
  const accessToken = searchParams.get("access_token");

  console.log(accessToken);

  const response = await axios.get("https://api.github.com/user", {
    headers: {
      Authorization: `bearer ${accessToken}`,
    },
  });
  res.send(response.data);
});

export { indexRouter };
