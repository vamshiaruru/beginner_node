var express = require("express");
var app = express();
// app.get(route, callback). basically when we receive a "get" request from
// the path specified in "route" argument, the "callback" which gets a req
// res object is triggered. we have to write seperate functiosn for post and
// delete etc.
// to tigger the same call back on all http methods, we use "app.all"
app.get("/", function (req, res){
  res.send("hi, hello world");  
});
app.listen(8888);
