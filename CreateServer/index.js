//how to create your own server -http module

// import http from 'http';
// const PORT = process.env.PORT || 9000;
// const HOST = "localhost";
// const server=http.createServer((req,res)=>{
//     res.end("server running on port")

// })

// server.listen(PORT,HOST,()=>{
//     console.log("working fine!!");
// })

// console.log("pdak");
// console.log("hsiojhiogdj");
// console.log("ahdjhaik");


import http from "http";
const PORT=process.env.PORT||9000;
const HOST ="localhost";
const server=http.createServer((req,res)=>{
res.end("getting response from server")
})

server.listen(PORT,HOST,()=>{
    console.log("working");

})