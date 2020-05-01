var http = require('http');

var basicServer = http.createServer(handleRequest);

const port = 4000;

handleRequest(req, res){
    res.end();
}


basicServer.listen(port, (){
    
    console.log("Server listening http://127.0.0.1:", port);
});
