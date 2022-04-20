const   {readFile, writeFile} = require('fs')

readFile('./data/text1.txt', 'utf8', (err, result)=>{
    if (err){
        console.log(err)
    }
    const result1 = result; 
    readFile('./data/text2.txt', 'utf8', (err, result)=>{
        if (err){
            console.log(err)
        }
        const result2 = result; 
        writeFile('./data/out.txt', 
    `The total text is ${result1}, ${result2}`,
    (err, result)=>{
        if (err){
            console.log(err)
        }
        console.log(result)
    }
    )
    })
    
})


