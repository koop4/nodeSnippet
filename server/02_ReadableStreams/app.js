const http = require('http');
const fs = require('fs');

const readableStream = fs.createReadStream(__dirname + '/lorem.txt', 'utf8');

readableStream.on('data', (chunk) => {
    console.log('\n\n\n\n################\n\n\n\n: ', chunk);
})

const server = http.createServer( (req, res) => {
    console.log( 'request made on', req.url)
    res.writeHead( 200, { 'Content-Type': 'text/plain'} );
    res.end('Server is listening...');
})

server.listen(3000, '127.0.0.1');
console.log('listening on port 3000');