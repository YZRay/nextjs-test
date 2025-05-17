const express = require("express");
const userController = require("../controllers/userManager");
const router = express.Router();

router.post("/users", userController.addUser);
router.get("/users", userController.getAllUsers);
router.delete("/users/:id", userController.deleteUser);

module.exports = router;
