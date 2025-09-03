const express = require("express");
const wishlistRoutes = require("./routes/wishlist-routes");
const itemRoutes = require("./routes/item-routes");
const purchaseRoutes = require("./routes/purchase-routes");

const app = express();

const PORT = 3000;

app.use("/wishlist", wishlistRoutes);
app.use("/item", itemRoutes);
app.use("/purchase", purchaseRoutes);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
