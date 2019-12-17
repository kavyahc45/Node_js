// const express= require ('express')
// const app=express();
// app.listen (3000,()=>{
//     console.log('your server started')
// }
// )

const fs= require('fs')
console.log('start reading a file')
fs.readFile('input.text','utf-8',function (err,content){
    if(err){
        console.log('error happende')
        return console.log(err)
    }
    console.log(content)
})
console.log('end of the file')
