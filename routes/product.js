const express = require("express");
const data = [
  { id: 1, name: "Product 1", description: "Description 1" },
  { id: 2, name: "Product 2", description: "Description 2" },
  { id: 3, name: "Product 3", description: "Description 3" },
  { id: 4, name: "Product 4", description: "Description 4" },
];

const router = express.Router();

router.get("/", (req, res, next) => {
  res.send(data);
});

router.get("/*", (req, res, next) => {
  throw new Error("NOT Found");
});

module.exports = router;
