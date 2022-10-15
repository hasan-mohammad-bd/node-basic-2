function errorHandler(error){
    const {name, message, stack} = error;

/*     logger.error({
        name,
        message,
        stack
    });
 */
    console.log('Internal server error!');

    console.log(message);
};

//module.export.two = function two(){
//     console.log('two');
// }


function two(){
    console.log('two');
}

module.exports.errorHandler = errorHandler;
module.exports.two = two;

/* module.exports = {
    errorHandler, 
    two
} */

console.log(module);