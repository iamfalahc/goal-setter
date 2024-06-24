const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000;  

const app = express();

// Middleware to parse JSON
app.use(express.json());

// Use the routes defined in goalRoutes.js
app.use("/api/goals", require("./routes/goalRoutes"));

// Define the root endpoint
app.get("/", (req, res) => {
    res.status(200).json({ message: "Hello world" });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
