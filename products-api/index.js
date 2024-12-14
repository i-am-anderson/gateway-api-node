const express = require("express");
const mockup = require("./mockup");

const app = express();
const port = 3301;

app.get("/products", (req, res) => {
  res.status(200).send({ response: "This is the Products API!" });
});

app.get("/products/:id", (req, res) => {
  const id = req.params.id;

  const response = mockup.find((item) => {
    return Number(item.id) === Number(id);
  });

  if (!response) {
    return res.status(204).send({ response: "No content" });
  }

  res.status(200).send({ response });
});

app.listen(port, () => {
  console.log(`Products API listening on port ${port}...`);
});
