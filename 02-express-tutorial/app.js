const http = require ('http')

const server = http.createServer((req, res)=> {
    res.writeHead(200, {'content-type':'text/html'})
    res.write('<h2> welcome to the home page</h2>')
    res.end()

})

server.listen(5000)

/*
const http = require('http)
const server = http.createServer((req,res) => {
    console.log('user hit diff...)
    res.end ('home...)
})


*/ 