const express = require('express')
// const path = require('path')
const app = express()
const { products } = require('./data')
// setup static and middleware
// app.use(express.static('./navbar-app'))

// app.get('/', (req, res) => {
//  //  res.sendFile(path.join(__dirname, './navbar-app/index.html'))
//  res.sendFile(path.resolve(__dirname, './navbar-app/index.html'))
// })

app.get('/', (req, res) => {
 res.send('<h1> Home Page </h1><a href="/api/products"> products </a>')
 res.json(products)
})
app.get('/api/products', (req, res) => {
 const newProducts = products.map((product) => {
  const { id, name, image } = product
  return { id, name, image }
 })
 res.json(newProducts)
})
app.get('/api/products/:productID', (req, res) => {
 //  console.log(req)
 //  console.log(req.params)
 const { productID } = req.params
 const singleProduct = products.find(
  (product) => product.id === Number(productID)
 )
 if (!singleProduct) {
  return res.status(404).send('Product Does Not Exist')
 }
 return res.json(singleProduct)
})

app.get('/api/products/:productID/reviews/:reviewID', (req, res) => {
 console.log(req.params)
})
app.get('/api/v1/query', (req, res) => {
 console.log(req.query)
 const { search, limit } = req.query
 let sortedProducts = [...products]

 if (search) {
  sortedProducts = sortedProduct.filter((product) => {
   return product.name.startsWith(search)
  })
 }
 if (limit) {
  sortedProducts = sortedProducts.slice(0, Number(limit))
 }
 if (sortedProducts.length < 1) {
  return res.status(200).json({ success: true, data: [] })
 }
 res.status(200).json(sortedProducts)
})
// app.all('*', (req, res) => {
//  res.status(404).send('resource not found')
// })
app.listen(5000, () => {
 console.log('server is listening')
})
// app.get
// app.post
// app.post
// app.delete
// app.use: middleware
// app.listen

// res.send()
// res.write()
// res.end()
