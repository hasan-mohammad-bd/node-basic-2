//is we declare any variable, the variable will be capsulated, can't be find or access by other file, to access to the variable, you need to export the file code and import it to another file to use it. 

//to export multiple items, use {} . 

const namefrom = require('./other')
var name = 'Programming hero';
console.log(global.name);

const name1 = 'Hasan'
console.log(global.name1);

console.log(namefrom);