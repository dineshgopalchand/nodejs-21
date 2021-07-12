const http = require("http");
const { showLog } = require('./test');

http.createServer(function(request, response) {
    const url = request.url;
    // Send the HTTP header 
    // HTTP Status: 200 : OK
    // Content Type: text/plain
    // console.log(request);
    // response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.writeHead(200, { 'Content-Type': 'application/json' });

    // Send the response body as "Hello World"
    console.log(showLog());
    // response.end('Hello World\n');
    if (url == '/') {
        response.end(JSON.stringify({ 'message': 'home page' }));
    } else
    if (url == '/contact') {
        response.end(JSON.stringify({ 'message': 'contact page' }));
    }


}).listen(8081);

// Console will print the message
console.log('Server running at http://127.0.0.1:8081/');