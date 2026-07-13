require('node:dns/promises').setServers(['8.8.8.8', '1.1.1.1']);
// Import Required Packages
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

// Import Database Connection
const connectDB = require("./config/db");

// Import Routes
const userRoutes = require("./routes/userRoutes");

// Load Environment Variables
dotenv.config();

// Connect to MongoDB
connectDB();

// Create Express Application
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Home Route
app.get("/", (req, res) => {
  res.status(200).json({
    message: "User Management API is Running Successfully",
  });
});

// User Routes
app.use("/api/users", userRoutes);

// Handle Invalid Routes
app.use((req, res) => {
  res.status(404).json({
    message: "Route Not Found",
  });
});

// Start Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
