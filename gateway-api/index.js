const express = require("express");
const httpProxy = require("express-http-proxy");
const app = express();
const port = 3300;
const { USERS_API_URL, PRODUCTS_API_URL } = require("./URLs");

const usersServiceproxy = httpProxy(USERS_API_URL);
const productsServiceproxy = httpProxy(PRODUCTS_API_URL);

app.get("/", (req, res) => {
  res.status(200).send({ code: 200, response: "This is the Geteway API!" });
});

app.get("/users", (req, res, next) => {
  usersServiceproxy(req, res, next);
});

app.get("/users/create/:qty", (req, res, next) => {
  usersServiceproxy(req, res, next);
});

app.get("/users/:id", (req, res, next) => {
  usersServiceproxy(req, res, next);
});

app.get("/products", (req, res, next) => {
  productsServiceproxy(req, res, next);
});

app.get("/products/:id", (req, res, next) => {
  productsServiceproxy(req, res, next);
});

app.use((req, res) => {
  res.status(404).send({ code: 404, error: "Route not found!" });
});

app.listen(port, () => {
  console.log(`API Gateway listening on port ${port}...`);
});
