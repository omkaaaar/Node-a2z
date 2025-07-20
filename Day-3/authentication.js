const express = require("express");
const app = express();
const port = 3000;
const { auth } = require("./auth");

app.get("/admin/getall", auth, (req, res) => {
  res.send("Hello from admin");
});

// ! handlin errors if some error occurs without us knowing
app.use((err, req, res, next) => {
  if (err) {
    res.status(500).send({ message: "Something is wong bud" });
  }
});

app.listen(port, () => {
  console.log("listeninggg");
});
