const express = require('express');
const app = express()
const PORT = 5000

app.use(express.json())
const productsRoute = require("./router/products")
// const cartRoute = require("./router/cart")

app.use("/products", productsRoute)
// app.use("/cart", cartRoute)

const homeRoute = require("./router/home")
const usersRoute = require("./router/users")

app.use("/", homeRoute)
app.use("/users", usersRoute)



app.use((req,res) => {
res.send("<h1>404 page not found</h1>")
})



app.listen(PORT, () => {
console.log(`Server is running ${PORT}`)
})