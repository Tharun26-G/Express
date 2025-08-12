const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello World!')
})

//GET all products
app.get('/api/products', (req, res) => {
    const products = [
        {id:1, name:'laptop',price:1000},
        {id:2, name:'phone',price:500},
        {id:3, name:'tablet',price:300}
    ]
    res.status(200).json({products})
})

//GET a single product
app.get('/api/products/:id', (req, res) => {
    const products = [
        {id:1, name:'laptop',price:1000},
        {id:2, name:'phone',price:500},
        {id:3, name:'tablet',price:300}
    ]
    const product = products.find(p=>p.id===parseInt(req.params.id)) // enclosed in parseInt because of id is number
    if(!product){
        return res.status(404).json({message:'Product not found'})
    }
    res.status(200).json({product})
})

//Create a New Product
app.post('/api/products', (req, res) => {
    const newProduct = {
        id: Date.now(),
        name: req.body.name,
        price: req.body.price
    }
    res.status(201).json({product: newProduct})
})

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})