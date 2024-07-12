


const fs = require('fs')

const path = 'Node js/info.txt'

fs.writeFile(path,'hello world pranav',(err,data)=>{
 
    if(err){
        console.log(`err\n ${err}`)
    }else{
        console.log(data)
    }
})

fs.appendFile(path,'\n hellow developer',(err,data)=>{
    if(err){
        console.log(err)
    }else{
        console.log(data)
    }
})

fs.readFile(path,(err,data)=>{
    if(err){
        console.log(`read file ${err}`)
    }else{
        console.log(`read file \n ${data}`)
    }
})


fs.unlink('delete.txt',(err,data)=>{  // evey think is working
    if(err){
        console.log(`unlink ${err}`)
    }else{
        console.log(`unlink ${data}`)
    }
})

fs.stat(path,"Documentation.txt",(err,data)=>{
    if(err){
        console.log('stat\n',err)
    }else{
        console.log('statS\n',data)
    }
})