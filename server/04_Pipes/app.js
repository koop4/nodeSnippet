const http = require('http');
const fs = require('fs');



const server = http.createServer( (req, res) => {
    console.log( 'request made on', req.url)
    res.writeHead( 200, { 'Content-Type': 'text/plain'} );
    const readableStream = fs.createReadStream(__dirname + '/lorem.txt', 'utf8');
    readableStream.pipe(res);
})

server.listen(3000, '127.0.0.1');
console.log('listening on port 3000');