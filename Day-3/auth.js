const auth =
  ("/admin",
  (req, res) => {
    const token = "";
    const isAdmin = token === "abc";
    if (isAdmin) {
      res.send("Welcome Admin");
    } else {
      res.status(401).send({ message: "User not found" });
    }
  });

module.exports = { auth };
