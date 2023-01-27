const express = require("express");
const {
  getUser,
  createUrl,
  deleteUrl,
} = require("../controller/controller");

const urlRouter = express.Router();

urlRouter.get("/", getUser);
urlRouter.post("/", createUrl);
urlRouter.delete("/:id", deleteUrl);

module.exports = urlRouter;
