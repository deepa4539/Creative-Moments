const express = require('express')
const app = express()
var dbconnection = require('./db')
var productsRoute = require('./routes/productsRoute')
const orderRoute = require('./routes/orderRoute')
var userRoute = require('./routes/userRoute')
const bodyparser = require('body-parser')

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: 'true' }))

app.use('/api/products/', productsRoute)
app.use('/api/users/', userRoute)
app.use('/api/orders/', orderRoute)
app.get('/', (req, res) => {

    res.send('node js framework')
})

const port = 2000

app.listen(port, () => {
    console.log(`Node Js server started`)
})
