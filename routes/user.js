const express = require("express");
const data = [
  { id: 1, name: "John", age: 25 },
  { id: 2, name: "Sai", age: 30 },
  { id: 3, name: "Zaw", age: 33 },
  { id: 4, name: "Test", age: 40 },
];

const router = express.Router();

router.get("/", (req, res, next) => {
  res.send(data);
});

module.exports = router;
