const http = require('http');
const fs = require('fs');
   
const server = http.createServer( (req, res) => {
    console.log( 'request made on', req.url)

    if(req.url === '/home' || req.url === '/') {
        res.writeHead( 200, { 'Content-Type': 'text/html'} );
        fs.createReadStream(__dirname + '/index.html').pipe(res);
    }
    else if(req.url === '/contact') {
        res.writeHead( 200, { 'Content-Type': 'text/html'} );
        fs.createReadStream(__dirname + '/contact.html').pipe(res);
    }
    else if(req.url === '/api/rob') {
        res.writeHead( 200, { 'Content-Type': 'application/json'} );
        const myObj = {
            name: 'Rob',
            job: 'Dev',
            age: 'too old'
        }
        res.end(JSON.stringify(myObj));
    } else {
        res.writeHead( 200, { 'Content-Type': 'text/html'} );
        fs.createReadStream(__dirname + '/404.html').pipe(res);
    }
})

server.listen(3000, '127.0.0.1');
console.log('listening on port 3000');