import http from 'http';
import { readFile } from 'fs';
import fs from 'fs'
// const fs = require('fs');
const PORT=process.env.PORT||9000;
const HOST ="localhost";
const server=http.createServer((req,res)=>{
// res.end("<h1>working fine</h1>")
if(req.url==="/"){
fs.readFile('./public/home.html', (error,data)=>{
    if(error) throw error;
res.end(data);
})
}
else if (req.url==="/about"){
    
    fs.readFile("./public/about.html",(error,data)=>{
    if(error) throw error;
    res.end(data);

})
}
else{
    res.end("404 error found !! ")
}
})

server.listen(PORT,HOST,()=>{
    console.log("connected")
})