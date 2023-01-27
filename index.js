const express = require("express");
const connect = require("./database");
const cors = require("cors");
const authRouter = require("./router/auth");
const urlRouter = require("./router/route");
const router = require("./router/post");

require("dotenv").config();

const PORT = process.env.PORT;

const port = 8100;
const app = express();
app.use(cors());
app.use(express.json());
connect();

app.use("/auth", authRouter);
app.use("/link", urlRouter);
app.use("/test", router);

app.listen(port || 8100, () => {
  console.log(`listening port on http://localhost:${port}`);
});
