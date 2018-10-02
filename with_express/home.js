var express = require("express");
var router = express.Router()

router.get("/", function(req, res){
  res.send("</b> You are in home </b>");
});

module.exports = router;
