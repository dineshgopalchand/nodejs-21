const http = require("http");
const { showLog } = require('./test');
const port = 8081;

const server = http.createServer(function(req, res) {
    const url = req.url;
    const headers = req.headers;
    console.log(headers);
    // Send the HTTP header 
    // HTTP Status: 200 : OK
    // Content Type: text/plain
    // console.log(request);
    // response.writeHead(200, { 'Content-Type': 'text/plain' });
    res.writeHead(200, { 'Content-Type': 'application/json' });
    // Send the response body as "Hello World"
    console.log(showLog());
    // response.end('Hello World\n');
    if (url == '/') {
        if (req.method == 'GET') {
            res.end(JSON.stringify({ 'message': 'home page' }));
        }

    } else
    if (url == '/contact') {
        res.end(JSON.stringify({ 'message': 'contact page' }));
    }
});
server.listen(port, () => {
    // Console will print the message
    console.log(`Server running at http://127.0.0.1:${port}/`);
});

// // Console will print the message
// console.log('Server running at http://127.0.0.1:8081/');