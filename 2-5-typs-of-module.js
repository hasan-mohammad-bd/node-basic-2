//core module
const http = require("http");

const server = http.createServer(function(req, res){
    console.log('the server is running'); 
})

server.listen(5000);

