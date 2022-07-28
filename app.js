const express = require('express')
const app = express()
const port = 3000
const logger = require('./achieve/logger')
const authorize = require('./achieve/authorize')
// req => middleware => res
// to use multiple middleware functions put them in an array

// 1. use vs route
// 2. options - our / express / third party

// app.use([logger, authorize])
app.use(express.static('./ar-app'))

app.use([logger, authorize])
// api/home/about/products
// app.get('/', (req, res) => {
//  res.send('Home')
// })
// app.get('/about', (req, res) => {
//  res.send('About')
// })
// app.get('/api/products', (req, res) => {
//  res.send('Products')
// })
// app.get('/api/items', (req, res) => {
//  res.send('Items')
// })
app.listen(process.env.PORT || port, () => console.log(`Server is live`))
