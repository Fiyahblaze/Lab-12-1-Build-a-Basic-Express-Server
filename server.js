// DEPENDENCIES
const express = require("express");
const path = require("path");
require("dotenv").config();
const PORT = process.env.PORT
const landingRoutes = require("./routes/index.js");

// MIDDLEWARE - COMMUNICATION BETWEEN ENDPOINTS BETWEEN REQUEST AND RESPONSE
// app.use(express.json());
app.use("/", landingRoutes);


// ROUTES
app.get("/home", (req, res) => {
  res.send("This is my home page");
})
app.get("/", (req, res) => {
  res.send("This is my home page");
})
app.get("/contact", (req, res) => {
  res.send("This is my contact page");
})

// PORT
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}
