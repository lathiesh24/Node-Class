const express = require('express');

const router = express.Router();

router.get("/", function (req, res) {
  res.send("Wiki home page");
});

router.get("/search", function (req, res) {
  res.send("About this wiki");
});

module.export = router;