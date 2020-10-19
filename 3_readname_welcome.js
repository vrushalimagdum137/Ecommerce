

var http = require('http');
var url = require('url');


var server = http.createServer(function(req,res){
      var url_parts = url.parse(req.url,true); 
      var color = url_parts.query.color;
      var host = url_parts.query.host;
      res.writeHead(200,{'Content-Type':'text/html'});
      res.write("<h1 welcome style='color:"+color+"'> "+host+"</h1>");
      res.end();
      	
});

server.listen(9000);

console.log("server started on port 9000");
