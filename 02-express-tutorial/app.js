const http = require ('http')
const { readFileSync} = require('fs');

//get all files
 const homepage = readFileSync('./navbar-app/index.html')
 const homeStyles = readFileSync('./navbar-app/styles.css')
 const homeImage = readFileSync('./navbar-app/logo.svg')
 const homeLogic = readFileSync('./navbar-app/browser-app.js')



const server = http.createServer((req, res)=> {
  
   //home page
   const url = req.url
   console.log(url)
     if(url === '/' ){
        res.writeHead(200, {'content-type':'text/html'})
    res.write(homepage)
    res.end()

    }
    //about page
    else if(url === '/about' ) {
        res.writeHead(200, {'content-type':'text/html'})
        res.write()
        res.end()


    }
    //styles
    else if(url === '/styles.css' ) {
        res.writeHead(200, {'content-type':'text/css'})
        res.write(homeStyles)
        res.end()


    }
    else if(url === '/logo.svg' ) {
        res.writeHead(200, {'content-type':'image/svg+xml'})
        res.write(homeImage)
        res.end()
    }
    else if(url === '/logo.svg' ) {
        res.writeHead(200, {'content-type':'image/svg+xml'})
        res.write(homeImage)
        res.end()


    }

    else if(url === '/browser-app.js' ) {
        res.writeHead(200, {'content-type':'text/javascript'})
        res.write(homeLogic)
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