const express = require("express");
const { Wishlist } = require("../models");

const router = express.Router();

router.get("/", async (req, res, next) => {
  const wishlists = await Wishlist.findAll();
  res.render("wishlists", { wishlists });
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
