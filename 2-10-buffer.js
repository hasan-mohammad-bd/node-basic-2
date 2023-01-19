//buffer is a temporary stage of data, when data fullfil the box of the buffer, it transfer to the user.


const fs = require('fs');

const readstream = fs.createReadStream('./data.txt')

readstream.on('data', (chunk)=> {
    console.log(('....'));
    console.log(chunk);
})