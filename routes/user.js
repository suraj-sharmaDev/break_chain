const express = require("express");
const router = express.Router();

router.get("/:id?", (req, res) => {
  const { id } = req.params;
  res.json({ id });
});

router.post("/:id", (req, res) => {
  const { id } = req.params;
  res.send(`Adding detail for user with id  : ${id}`);
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  res.send(`Deleting detail for user with id  : ${id}`);
});

module.exports = router;
