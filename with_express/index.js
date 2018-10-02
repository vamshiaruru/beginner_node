var express = require("express");
var things = require("./things.js");
var app = express();
var home = require("./home.js");
// basically when ever /things is the route, the routes defined in things.js will be used
// so, for every route it'll be a good idea to write all the functions in a seperate file
app.use("/things", things);
app.use("/", home);
app.use("/home", home);
app.listen(8888);
