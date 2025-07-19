const express = require("express");
const app = express();
const port = 3000;

app.use("/admin", (req, res, next) => {
  console.log("executig auth");
  const token = "xyz";
  const isAdminAuth = token === "xyz";
  if (!isAdminAuth) {
    res.status(401).send("unauthorized acess");
  } else {
    next();
  }
});

app.get("/admin/getall", (req, res) => {
  res.send("Hello from admin");
});

app.listen(port, () => {
  console.log("listeninggg");
});
