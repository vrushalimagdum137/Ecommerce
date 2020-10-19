var http = require('http');

var server=http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello from Node JS!');
});
server.listen(9000);
console.log("server started on port 9000");