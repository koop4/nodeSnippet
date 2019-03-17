const http = require('http');

const server = http.createServer( (req, res) => {
    console.log( 'request made on', req.url)
    res.writeHead( 200, { 'Content-Type': 'application/json'} );
    const myObj = {
        name: 'Rob',
        job: 'Dev',
        age: 'too old'
    }
    res.end(JSON.stringify(myObj));
})

server.listen(3000, '127.0.0.1');
console.log('listening on port 3000');