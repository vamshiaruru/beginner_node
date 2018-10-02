let express = require("express");
let things = require("./things.js");
let app = express();
let home = require("./home.js");
// basically when ever /things is the route, the routes defined in things.js will be used
// so, for every route it'll be a good idea to write all the functions in a seperate file
// here anonymous function we are passing to app.use is called a middleware function. It is called before every request.
app.use((req, res, next)=>{
  console.log("start");
  // when next() is called, the next function is called. here the next function
  // is our route handler. After route handler, the next function is the one
  // that prints end.
  next();
});
// admittedly the above function is useless. consider this instead. 
let requestTime = (req, res, next) => {
  // basically we are adding a new field to request object
  // now this filed can be acessed in all other middle ware functions 
  // like route handlers etc.
  req.requestTime = Date.now();
  next();
};
app.use(requestTime);
app.use("/things", things);
app.use("/", home);
app.use("/home", home);
// this "*" will match all the paths. Since node matches paths from the start
// to end, if none of the above paths match, the below one definitely will.
app.all("*", (req, res)=>{res.send("This is an invalid url");});
app.listen(8888);

