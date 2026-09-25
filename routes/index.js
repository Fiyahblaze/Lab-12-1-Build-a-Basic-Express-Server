// DEPENDECIES
const express = require("express");
const router = express.Router();

// Landing ROUTES
router.get("/", (req, res) => {
  res.send("This is my new landing page");
}):

module.exports = router;