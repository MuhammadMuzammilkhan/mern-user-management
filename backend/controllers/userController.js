const User = require("../models/User");

// ==========================================
// GET ALL USERS
// GET /api/users
// ==========================================
const getUsers  = async (req, res) => {
  try {
    const users = await User.find().sort({ createdAt: -1 });

    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch users",
      error: error.message,
    });
  }
};

// ==========================================
// CREATE NEW USER
// POST /api/users
// ==========================================
const createUser = async (req, res) => {
  try {
    const { name, email, phone, city } = req.body;

    // Basic Validation
    if (!name || !email || !phone || !city) {
      return res.status(400).json({
        message: "All fields are required.",
      });
    }

    // Check Duplicate Email
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        message: "Email already exists.",
      });
    }

    // Save User
    const newUser = await User.create({
      name,
      email,
      phone,
      city,
    });

    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({
      message: "Failed to create user",
      error: error.message,
    });
  }
};

// ==========================================
// UPDATE USER
// PUT /api/users/:id
// ==========================================
const updateUser = async (req, res) => {
  try {
    const { id } = req.params;

    const { name, email, phone, city } = req.body;

    const updatedUser = await User.findByIdAndUpdate(
      id,
      {
        name,
        email,
        phone,
        city,
      },
      {
        new: true,
        runValidators: true,
      }
    );

    if (!updatedUser) {
      return res.status(404).json({
        message: "User not found.",
      });
    }

    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({
      message: "Failed to update user",
      error: error.message,
    });
  }
};

// ==========================================
// DELETE USER
// DELETE /api/users/:id
// ==========================================
const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedUser = await User.findByIdAndDelete(id);

    if (!deletedUser) {
      return res.status(404).json({
        message: "User not found.",
      });
    }

    res.status(200).json({
      message: "User deleted successfully.",
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to delete user",
      error: error.message,
    });
  }
};

module.exports = {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
};