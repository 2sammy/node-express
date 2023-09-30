const express = require('express')
const app = express()
const logger = require('./logger')
const authorize = require('./authorize')

//middleware
app.use([logger, authorize])

app.get('/', logger, (req, res) => {
    res.send('hello sam, welcome home')
})

app.get('/about', (req, res) => {
    res.send('about  sam')
})
app.get('/api/products', (req, res) => {
    res.send('products')
})
app.get('/api/items', (req, res) => {
    res.send('items')
})





app.listen(5000, () => {
    console.log('server is listening on port 5000')
})