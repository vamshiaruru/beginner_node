var express = require("express");
var router = express.Router()

router.get("/", function(req, res, next){
  res.send("</b> You are in home </b>");
  console.log(req.requestTime);
});
router.get("/:id", (req,res)=>{res.send(`you entered ${req.params.id}`);});
router.get("/:name/:id", (req, res)=>{
  res.end(`${req.params.name}:${req.params.id}`); 
});
module.exports = router;
