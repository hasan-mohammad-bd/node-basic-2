const http = require('http');
const url =require('url');


const server = http.createServer((req, res)=> {
    res.end('hello node.js')
    const address_url = 'http://localhost:5000/contact?name=me&country=bangldesh'
    const parsed_url = url.parse(address_url,true)
    const queryObject = parsed_url.query
    console.log(queryObject);

}
)
const PORT = 5000;
server.listen(PORT);
console.log('server is running at port 5000');
