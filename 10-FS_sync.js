//interacting with file system
//tow way to do it Async non-blocking or Sync blocking

const {readFileSync,writeFileSync} = require('fs')

//read from file system require tow params path and encoding(to make node how to decode it)
console.log('start');

const first = readFileSync('./content/first.txt','utf8')
const second = readFileSync('./content/second.txt','utf8')

// console.log(first,second);
//write in file need tow params first is the file where we want to write (created if not exist) and second what we want to  write
//if file exist node gonna overwrite it 

writeFileSync(
    './content/result-sync.txt',
    `Here is the result : ${first},${second}`,{flag:'a'}
)

console.log('done with this tastk');
console.log('starting the next one');


//node read this code synchronosly imagine if we have 10 user and on euser take a long time in one task this block other user
 
