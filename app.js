const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();
const productRouter = require("./routes/product");
const userRouter = require("./routes/user");

app.use("/css", express.static(path.join(__dirname, "assets", "css")));

app.use("/product", productRouter);

app.use("/user", userRouter);

app.get("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("*", (req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "404.html"));
});

app.get("*", (req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "404.html"));
});

app.use((err, req, res, next) => {
  res.status(500).send("Something broke!");
});

app.listen(3000, () => console.log("running on 3000"));
