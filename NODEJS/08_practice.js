const http = require('http')
const fs = require('fs')
const url = require("url")

// const myServer = http.createServer((req,res) =>{
//     console.log(req.url);

//     switch(req.url){
//         case "/":
//             res.end("hello, i am server")
//             break;
//             case "/about":
//                 res.end("i am divu")
//                 break;
//     }

    
// })

const myServer = http.createServer((req,res) =>{
    const myUrl = url.parse(req.url, true);
    console.log(myUrl);
    

    switch(myUrl.pathname){
        case "/":
            res.end("hello, i am server")
            break;
            case "/about":
                const qp = myUrl.query.name;
                res.end(`welcome, ${qp}`)
                break;
    }

    
})


myServer.listen(8000, (req,res)=>{
    console.log('my server has started');  
})
