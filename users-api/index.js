import express from "express";
import fetch from "node-fetch";
import mockup from "./mockup.js";
import create_user from "./create-user.js";

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

// xx. lorem ipsum
app.get("/users/discord/:discord/:webhook", (req, res) => {
  const discord = req.params.discord;
  const webhook = req.params.webhook;
  const response_ = create_user(1);

  const markdown = response_.map((item) => {
    return (
      `> **✨ User Info: ID ${item.id} ✨**\n` +
      `> :bust_in_silhouette: **Name**: ${item.name}\n` +
      `> :email: **E-mail**: ${item.email}\n` +
      `> :calendar: **Age**: ${item.age}\n` +
      `> :city_sunrise: **City**: ${item.city}\n` +
      `---` +
      `\n`
    );
  });
  const message = markdown.join("\n");

  fetch(`https://discord.com/api/webhooks/${discord}/${webhook}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      content: message,
    }),
  })
    .then((response) => {
      if (response.ok) {
        res
          .status(200)
          .send({ code: 200, response: "Message sent successfully!" });
      } else {
        res.status(500).send({
          code: 500,
          response: `Error sending message: ${res.statusText}`,
        });
      }
    })
    .catch((error) =>
      res.status(500).send({ code: 500, response: `Request error: ${error}` }),
    );
});

app.listen(port, () => {
  console.log(`Users API listening on port ${port}...`);
});
