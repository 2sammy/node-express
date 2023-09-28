const http = require ('http')
const { readFileSync} = require('fs');

//get all files
 const homepage = readFileSync('./index.html')



const server = http.createServer((req, res)=> {
   // console.log(req.method)
   //console.log(req.url)
  
   //home page
   const url = req.url
     if(url === '/' ){
        res.writeHead(200, {'content-type':'text/html'})
    res.write(homepage)
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