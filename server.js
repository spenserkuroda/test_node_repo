var http = require('http');

http.createServer(function (req, res) {
  res.on('data', function(thing) {

    console.dir(thing);
    res.end();
  });
    
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(req.url); //write a response to the client
    res.end(); //end the response
    console.log('touched the server');
}).listen(8080); //the server object listens on port 8080



console.log('still works')

