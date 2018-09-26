var http = require("http")
// http.createServer() returns a server object which has listen function. It 
// takes port number as the argument.
// http.createServer takes a function as an argument. In our case we are passing
// an anonymous function as it's argument.
// This is asynchronus. In js, asynchronus call backs work this way:
//  The function passed as a parameter is executed by the event loop, BUT, the 
//   process doesn't wait until the function is finished to continue on to the 
//   next piece of code. Once the callback finishes its execution, it is noticed
//   by the event loop and it's sideffect is felt. 
// For instance in the below code, though onRequest is called in createServer,
// the "This is after http call" is printed even before "Request received." is 
// printed,
function onRequest(request, response){
    console.log("Request received.")
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello World");
    response.end();
}
http.createServer(onRequest).listen(8888)
console.log("This is after the http call")
