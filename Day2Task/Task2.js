const fs= require('fs')
console.log('start reading a file')
fs.writeFile('Input.tx','Hii Node',function (err,content){
    if(err){
        console.log('error happende during reading the file')
        return console.log(err)
    }
    console.log(content)
})
console.log('end of the file')
