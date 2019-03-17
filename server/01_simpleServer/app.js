const http = require('http');

const server = http.createServer( (req, res) => {
    
    console.log( 'request made on', req.url)
    
    const status = 200;
    const headers = {
        'Content-Type': 'text/plain'
    }
    res.writeHead( status, headers );
    res.end('Server is listening...');
})

server.listen(3000, '127.0.0.1');
console.log('listening on port 3000');