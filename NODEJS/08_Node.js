/* URL - uniform resourse allocator

https: => protocol - set of rules which tells browser how to communticate 
www.example.com => domain - user friendly name of IP address of my server

innstall - url package 

in package.json dependencies => yha hona zrori h then if we use npm install vo khudse will install the absent 
*/

const url = require("url")
const http = require('http');
const fs = require("fs");

const myServer = http.createServer((req,res) => {
    const log = `${Date.now()} : ${req.url} new req receieved\n`;
    const myUrl = url.parse(req.url, true) // by setting true in query we are having objects
    console.log('myUrl', myUrl);
    
    fs.appendFile("log.txt", log, (err,data) => {
        switch(myUrl.pathname){
            case "/":
                res.end('HomePage');
                break;
            case "/about":
                // const qp = myUrl.query.name
                // res.end(`hi ${qp}`);

                // const search = myUrl.query.search_query;
                const search = myUrl.query.name;
                res.end("here are your res for " + search);
                // res.end("i am divyanshi vats"); // why not res.send()
                break;
            default: res.end("hey, enough scrolling")
        }
    })
})

myServer.listen(8000, ()=>{
    console.log('server started');
    
})