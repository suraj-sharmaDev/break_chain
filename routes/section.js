const express = require("express");
const router = express.Router();

router.get("/:id", (req, res) => {
  const { id } = req.params;
  res.send(`Getting detail for section with ids  : ${id}`);
});

router.post("/:id", (req, res) => {
  const { id } = req.params;
  res.send(`Adding detail for section with id  : ${id}`);
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  res.send(`Deleting detail for section with id  : ${id}`);
});

module.exports = router;
