var http = require("http")
// url is used to parse url strings.
var url = require("url")
// querystring is used to parse the query string for request params
var querystring = require("querystring")
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
// The function onRequest gets request and response objects everytime the http
// server gets a new request.
function start(route, handle){
    // we could have passed an entire router object to use it's route method. we don't however need to do that.
    // we only need the route method of it. so we'll pass the function only.
    function onRequest(request, response){
        // request and response are objects. this function is called whenever a request
        // is received.
        console.log("Request received.")
        var pathname = url.parse(request.url).pathname
        console.log("Request for " + pathname + "received");
        var postData = "";
        // to handle post data in a non blocking fashin, we need to add listeners. for post data
        // we need to add listerners corresponding to "data" and end.
        request.setEncoding("utf8");
        request.addListener("data", function(postDataChunk){
            postData += postDataChunk;
            console.log("Recived POST data" + postDataChunk);
        });
        request.addListener("end", function(){
            route(handle, pathname, response, postData);
        });
    }
    http.createServer(onRequest).listen(8888)
    console.log("the server is running now...")    
}

// the start_server is the name with which the start from this module will be called
// when exported.
exports.start_server = start
