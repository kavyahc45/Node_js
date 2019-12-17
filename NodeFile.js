var http=require('http');
http.createServer(function(request, response)
{
response.setHeader('content-type', "text/html");
response.end("Hello World");
}).listen(8000);
console.log('server is running at http://127.0.0.0:8000/');