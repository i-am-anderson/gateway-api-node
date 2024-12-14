const express = require("express");
const mockup = require("./mockup");

const app = express();
const port = 3302;

app.get("/users", (req, res) => {
  res.status(200).send({ response: "This is the Users API!" });
});

app.get("/users/:id", (req, res) => {
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
  console.log(`Users API listening on port ${port}...`);
});
