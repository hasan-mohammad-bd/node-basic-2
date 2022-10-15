const http = require('http');
const url =require('url');
const fs = require('fs')

const server = http.createServer((req, res) =>{
    if(req.url = "/"){
        fs.readFile('data.txt', (err, data)=>{
            if(err){
                res.write('filed to read data')
                res.end()
            }
            else {
                res.write(data)
                res.end()
            }
        })
    }
})

const PORT = 5000;
server.listen(PORT)
console.log('server is running');