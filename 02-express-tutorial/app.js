const http = require ('http')
const { url } = require('inspector')

const server = http.createServer((req, res)=> {
   // console.log(req.method)
   //console.log(req.url)
  
   //home page
     if(url ==='/' ){
        res.writeHead(200, {'content-type':'text/html'})
    res.write('<h2> welcome to the home page</h2>')
    res.end()

    }
    //about page
    else if(url === '/about' ) {
        res.writeHead(200, {'content-type':'text/html'})
        res.write('<h2> about the page</h2>')
        res.end()


    }
    //404
    else{
        res.writeHead(400, {'content-type':'text/html'})
        res.write('<h2> no home page</h2>')
        res.end()
    }

})

server.listen(5000)

/*
const http = require('http)
const server = http.createServer((req,res) => {
    console.log('user hit diff...)
    res.end ('home...)
})


*/ 