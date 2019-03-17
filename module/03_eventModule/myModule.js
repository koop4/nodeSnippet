var sayHi = () => {
    console.log('hi');
}

var sayBye = () => {
    console.log('Bye');
}

module.exports = {
    sayHi,
    sayBye
}

/* 
//this works too
module.exports.sayHi = sayHi;
module.exports.sayBye = sayBye;
*/
