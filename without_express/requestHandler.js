// in request handlers, always use non blocking calls. Blocking calls will make
// slow the entire server because node.js is single threaded.

// example of non blocking call is child_process.exec
var exec = require("child_process").exec;
var querystring = require("querystring");

function start(response, postData){
    function sleep(milliSeconds){
        var startTime = new Date().getTime();
        while (new Date().getTime() < startTime + milliSeconds);
    }
    console.log("Request handler 'start' was called");
    // var content = "empty";
    // exec("find /", function(error, stdout, stderr){
    //     response.writeHead(200, {"Content-Type": "text/plain"})
    //     response.write(stdout);
    //     response.end();
    // });
    // note that the form action is being routed to /upload path
    var body = '<html>'+
    '<head>'+
    '<meta http-equiv="Content-Type" content="text/html; '+
    'charset=UTF-8" />'+
    '</head>'+
    '<body>'+
    '<form action="/upload" method="post">'+
    '<textarea name="text" rows="20" cols="60"></textarea>'+
    '<input type="submit" value="Submit text" />'+
    '</form>'+
    '</body>'+
    '</html>';
    // note that the content type is html.
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(body);
    response.end();
}

function upload(response, postData){
    console.log("Request handler 'upload' was called");
    response.writeHead(200, {"Content-Type": "text/plain"})
    response.write(querystring.parse(postData).text);
    response.end();
}

exports.start = start;
exports.upload = upload;
