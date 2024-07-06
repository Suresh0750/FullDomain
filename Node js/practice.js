

// # http request using node js
const http = require('http')

const server = http.createServer((req,res)=>{
    const url = req.url
    const method = req.method

    console.log(url,method)

    res.writeHead(200,{'contentType':'text/plain'})
    res.write('hellow')
    res.write('riyas')
    res.end()
})

server.listen(3000,()=>{
    console.log(`http://localhost:3000`)
})


// # Chache clear

    // app.use((req, res, next) => {
    //     res.set("Cache-Control", "no-store");
    //     next();
    //   });

