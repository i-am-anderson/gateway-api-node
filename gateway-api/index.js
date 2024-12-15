import express from "express";
import httpProxy from "express-http-proxy";
const app = express();
const port = 3300;
import { USERS_API_URL, PRODUCTS_API_URL } from "./URLs.js";

const usersServiceproxy = httpProxy(USERS_API_URL);
const productsServiceproxy = httpProxy(PRODUCTS_API_URL);

app.get("/", (req, res) => {
  res.status(200).send({ code: 200, response: "This is the Gateway API!" });
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

app.get("/users/discord/:discord/:webhook", (req, res, next) => {
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
