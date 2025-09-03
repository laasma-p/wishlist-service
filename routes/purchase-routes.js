const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
  // getting all purchases
});

router.post("/", (req, res, next) => {
  // adding a purchase
});

router.get("/:id", (req, res, next) => {
  // getting a specific purchase
});

module.exports = router;
