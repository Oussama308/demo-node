const path = require('path');

console.log(path.sep);    //related to the platform used


//join method join sequence of paths using that platform specific seperator

const filePath = path.join('/content','subfolder','test.txt');
console.log(filePath);

//resolve method return an absolute path


const absolute = path.resolve(__dirname,'content','subfolder','test.txt')
console.log(absolute);