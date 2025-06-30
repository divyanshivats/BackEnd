// creating a http/api server

// const http = require("http"); // built int package in nodejs - by using this we can create a server

// const myServer = http.createServer((req,res) => {
//     console.log('new request recieved');
//     res.end('Hello from server')
// });

// // to handle the requests we have an handler (requestListener)

// myServer.listen(8000, () => {
//     console.log('server started');
// })

const http = require('http');
const fs = require("fs");

// const myServer2 = http.createServer((req,res) =>{
//     const log = `${Date.now()*60}: new req is recieved\n`;
//     fs.appendFile("log.txt",log, (err, data) =>{
//         res.end("hi server")
//     })
// })

// myServer2.listen(8000, ()=>{
//     console.log('server started');
    
// })

const myServer = http.createServer((req,res) => {
    const log = `${Date.now()} : ${req.url} new req receieved\n`
    console.log(req.url);
    
    fs.appendFile("log.txt", log, (err,data) => {
        switch(req.url){
            case "/":
                res.end('HomePage');
                break;
            case "/about":
                res.end("i am divyanshi vats"); // why not res.send()
                break;
            default: res.end("hey, enough scrolling")
        }
    })
})

myServer.listen(8000, ()=>{
    console.log('server started');
    
})