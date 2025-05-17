const UserManager = require("../models/userManager");
const userManager = new UserManager();

exports.addUser = (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).send("需要用戶名稱");
  }
  const user = {
    id: Date.now().toString(),
    name,
  };
  userManager.addUser(user);
  res.status(201).send("用戶已新增");
};

exports.getAllUsers = (req, res) => {
  res.json(userManager.getAllUsers());
};

exports.deleteUser = (req, res) => {
  const { id } = req.params;
  userManager.deleteUser(id);
  res.send("用戶已刪除");
};
