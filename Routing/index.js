// import http from 'http';
// const PORT=process.env.PORT||9000;
// const HOST="localhost"
// const server =http.createServer((req,res)=>{
    //to write html code //
// res.end("<h1>hello pallavi </h1>")
// if(req.url==="/"){
//     res.end("<h1>home page </h1>")
// }
// else if (req.url==="/about"){
//     res.end("<h1>about page</h1>")
// }
// else {
//     res.end("404 error found")
// }
// })

// server.listen(PORT,HOST,()=>{
//     console.log("working fine!!");
// })


////////basic routing/////


import http from "http";
import fs from "fs";
const PORT =process.env.PORT|| 8080;
const HOST ="localhost";
const server=http.createServer((req,res)=>{
// res.end("<h1>hello world</h1>")
if(req.url==="/"){
    res.end("<h1>Home Page</h1>")
}
else if (req.url==="/about"){
    res.end("<h1>About Page</h1>")
}
else {
    res.end("<h1>404 error found</h1>")
}
})

server.listen(PORT,HOST,()=>{
    console.log("working fine !! ");
})