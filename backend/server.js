const express = require("express");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000;
const { errorHandler } = require("./middleware/errorMiddleware");

const app = express();

// Middleware to parse JSON and URL-encoded payloads
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Use the routes defined in goalRoutes.js
app.use("/api/goals", require("./routes/goalRoutes"));

// Define the root endpoint
app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello world" });
});

// Error handling middleware - must be defined correctly in errorMiddleware.js
app.use(errorHandler);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
