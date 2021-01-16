const express = require("express");
const app = express();

const { user, section } = require("./routes");

// middleware for routes
app.use("/user", user);
app.use("/section", section);

app.get("/", (req, res, next) => {
  res.send("Hello World");
});

app.listen(3000, () => {
  console.log("server started");
});
