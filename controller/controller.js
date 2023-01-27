const express = require("express");
const Url = require("../model/model");

exports.getUser = async (req, res) => {
  try {
    const user = await Url.find();
    console.log(Url);
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ error: error });
  }
};

exports.getPost = (req, res) => {
  try {
    const user = Url.create(req.body);
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ error: error });
  }
};

exports.createUrl = async (req, res) => {
  let stringId = (Math.random() + 1).toString(36).substring(7);

  const createdUrl = await Url.create({
    orignalUrl: req.body.orignalUrl,
    shortUrl: stringId,
  });
  res.send(createdUrl);
};
exports.deleteUrl = async (req, res) => {
  try {
    const id = req.params.id;
    const deleteurl = await Data.findByIdAndDelete(id);
    res.status(200).json(deleteurl);
  } catch (error) {
    res.status(404).json(error.message);
  }
};
