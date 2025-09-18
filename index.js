const express = require("express");
const path = require("path");
const wishlistRoutes = require("./routes/wishlist-routes");
const itemRoutes = require("./routes/item-routes");
const purchaseRoutes = require("./routes/purchase-routes");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.static(path.join(__dirname, "public")));

const PORT = 3000;

app.use("/wishlist", wishlistRoutes);
app.use("/item", itemRoutes);
app.use("/purchase", purchaseRoutes);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
