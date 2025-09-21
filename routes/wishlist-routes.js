const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
  res.render("wishlists");
});

router.post("/", (req, res, next) => {
  // adding a wishlist
});

router.get("/:id", (req, res, next) => {
  res.render("wishlist");
});

router.put("/:id", (req, res, next) => {
  // updating a wishlist
});

router.delete("/:id", (req, res, next) => {
  // deleting a wishlist
});

module.exports = router;
