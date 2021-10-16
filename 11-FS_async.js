const {readFile,writeFile} = require('fs') //if we don't provide the utf encoding we get the buffer

console.log('start');
readFile('./content/first.txt','utf8',(err,result)=>{
    if(err){
        console.log(err);
        return;
    }
    const first = result;
    readFile('./content/second.txt','utf8',(err,result)=>{
        if(err){
            console.log(err);
            return;
        }
        const second = result;
        writeFile(
            './content/result-async.txt',
            `Here is the result : ${first},${second}`,{flag:'a'},
            (err,result)=>{
                if(err){
                    console.log(err);
                    return;
                }
                console.log('done with this trask');
            }
        )
     
    })
})
console.log('starting an other task');

//console >> start 
            //starting other task
            // done with this task
//when one userv commes to do this task node ofload task ,node keep serve other user


//when tasks take a lot of time we should use callbacks ... async await
