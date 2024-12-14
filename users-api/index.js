const express = require("express");
const mockup = require("./mockup");
const create_user = require("./create-user");

const app = express();
const port = 3302;

app.get("/users", (req, res) => {
  res.status(200).send({ code: 200, response: "This is the Users API!" });
});

app.get("/users/create/:qty", (req, res) => {
  const qty = req.params.qty;
  const response = create_user(qty);

  res.status(200).send({ code: 200, response });
});

app.get("/users/:id", (req, res) => {
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
  console.log(`Users API listening on port ${port}...`);
});
