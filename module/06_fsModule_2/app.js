const fs = require('fs');

// sync create and remove dir

fs.mkdirSync('myNewDir');
fs.rmdirSync('myNewDir');

// Async create and remove dir
fs.mkdir('myNewDirAsync', (_) => { console.log('dir created') } );
fs.rmdir('myNewDirAsync', (_) => { console.log('dir removed') } );