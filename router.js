// this module will define routing application.
// that is depending on the request object, we should be able to trigger
// different request handlers. That means we need url, or get or post parameters as
// input to our functions.
// All the information is available in our request object, which is given to the onRequest 
// function and passed as parameter to http.createServer

function route(handle, pathname, response, postData){
    console.log("Routing request for " + pathname);
    if (typeof handle[pathname] === "function"){
        handle[pathname](response, postData);
    } else {
        console.log("No request handler found for this path");
        response.writeHead(404, {"Content-Type": "text/plain"});
        response.write("404 Not found");
        response.end();
    }
}

exports.route = route;