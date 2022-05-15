// const Task = require("../models/TaskModel");


const home = async (req, res) => {
  res.status(200).json({ chat: "hello world. server is up and running" });
  // res.send("server is up and running")
};


module.exports = {
  home
};
