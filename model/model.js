const mongoose = require("mongoose");
const model = mongoose.model;
const Schema = mongoose.Schema;

const UrlSchema = new Schema({
  originalUrl: { type: String },
  shortUrl: { type: String },
});

const url = mongoose.model("urls", UrlSchema);
module.exports = url;
