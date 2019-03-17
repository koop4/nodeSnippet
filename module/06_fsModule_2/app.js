const fs = require('fs');

// sync version
const readFomFile = fs.readFileSync(__dirname+'/simple.txt', 'utf8')
console.log(readFomFile);
console.log('done!')
fs.writeFileSync(__dirname+'/written.txt', 'My new file');

// async version
fs.readFile(__dirname+'/simple.txt', 'utf8', (err, data) => {
    if(err) {
        console.log('There was a problem');
    }
    else {
        fs.writeFile(__dirname+'/writtenAsync.txt', data, (_) => {
            console.log('written!')
        });
        console.log('i am probably still writing ...')
    }
});

console.log('i am probably still reading ...')




