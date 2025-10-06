const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

const dealers = [
  { id: 1, name: "Dealer A", productId: 1, price: 550 },
  { id: 2, name: "Dealer B", productId: 1, price: 580 },
  { id: 3, name: "Dealer C", productId: 2, price: 400 },
  { id: 4, name: "Dealer D", productId: 3, price: 120 },
];

app.get("/", (req, res) => {
  res.send("Dealer Pricing Microservice is running!");
});

app.get("/dealers", (req, res) => {
  res.json(dealers);
});

app.get("/dealers/:productId", (req, res) => {
  const productId = parseInt(req.params.productId);
  const productDealers = dealers.filter(d => d.productId === productId);
  res.json(productDealers);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
