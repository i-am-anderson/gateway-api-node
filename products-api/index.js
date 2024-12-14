const express = require("express");
const mockup = require("./mockup");

const app = express();
const port = 3301;

app.get("/products", (req, res) => {
  res.status(200).send({ code: 200, response: "This is the Products API!" });
});

app.get("/products/:id", (req, res) => {
  const id = req.params.id;

  const response = mockup.find((item) => {
    return Number(item.id) === Number(id);
  });

  if (!response) {
    return res.status(404).send({ code: 404, response: "Not found" });
  }

  res.status(200).send({ code: 200, response });
});

app.listen(port, () => {
  console.log(`Products API listening on port ${port}...`);
});
