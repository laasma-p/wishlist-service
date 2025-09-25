const express = require("express");
const { Wishlist, Item } = require("../models");

const router = express.Router();

router.get("/", async (req, res, next) => {
  const wishlists = await Wishlist.findAll();
  res.render("wishlists", { wishlists });
});

router.post("/", (req, res, next) => {
  // adding a wishlist
});

router.get("/:id", async (req, res, next) => {
  const wishlist = await Wishlist.findByPk(req.params.id);
  const items = await Item.findAll({ where: { wishlistId: req.params.id } });
  res.render("wishlist", { wishlist, items });
});

router.put("/:id", (req, res, next) => {
  // updating a wishlist
});

router.delete("/:id", (req, res, next) => {
  // deleting a wishlist
});

module.exports = router;
