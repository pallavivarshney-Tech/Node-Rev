//how to create a server//////
import http from 'http';
import {readFile} from 'fs'
import fs from "fs";
const PORT= process.env.PORT||9000;
const HOST ="localhost";
const server=http.createServer((req,res)=>{
// res.end("<h1>server created FIRST !!</h1>")
if(req.url==="/"){
    fs.readFile('./Publ/hoo.html',(error,data)=>{
        if(error) throw error
        res.end(data)
    })
}
if(req.url==="/about"){
    fs.readFile('./publ/aboo.html',(error,data)=>{
        if(error) throw error
        res.end(data)
    })
}
else{
    res.end("<h1>404 error found</h1>")
}
})
// if(req.url==="/"){
//     res.end("<h1>home page</h1>")
// }
// else if (req.url==="/about"){
//     res.end("<h1>About page</h1>")

// }
// else {
//     res.end("<h1>404 error found</h1>")
// }
// })

server.listen(PORT,HOST,()=>{
    console.log("connected");
})
