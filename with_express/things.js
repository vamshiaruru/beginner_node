var express = require("express");
var router = express.Router();

router.get("/", function(req, res){
  res.send("Get route for /");  
});
router.post("/", function(req, res){
  res.send("post route for/");
});
module.exports = router;
