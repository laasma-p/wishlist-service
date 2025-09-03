const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
  // getting all items
});

router.post("/", (req, res, next) => {
  // adding an item
});

router.get("/:id", (req, res, next) => {
  // getting a specific item
});

router.put("/:id", (req, res, next) => {
  // updating an item
});

router.delete("/:id", (req, res, next) => {
  // deleting an item
});

module.exports = router;
