
const logger = require('./logger')
function sayHello(name){
    console.log("Hello " + name + " welcome to Node JS!")
}

sayHello("Tonny");
console.log("========================================");
console.log(module);
console.log("========================================");
logger.log("This is my website: " + logger.url);

module.exports.sayHello = sayHello;

/*working with node modules:

Global functions

console.log()
setTimeOut()
clearTimeOut()
setInterval()
clearInterval()

*/


