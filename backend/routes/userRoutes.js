const express = require("express");

const router = express.Router();

const {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
} = require("../controllers/userController");

// GET All Users
router.get("/", getUsers);

// CREATE User
router.post("/", createUser);

// UPDATE User
router.put("/:id", updateUser);

// DELETE User
router.delete("/:id", deleteUser);

module.exports = router;