const express = require('express');
const app = express()
const PORT = 5000
const path = require('path')
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.use(express.static(path.join(__dirname,"public")))
const productsRoute = require("./router/products")
const homeRoute = require("./router/home")
const usersRoute = require("./router/users")
// const cartRoute = require("./router/cart")

// app.use("/cart", cartRoute)


app.use("/products", productsRoute)
app.use("/", homeRoute)
app.use("/users", usersRoute)



app.use((req,res) => {
res.send("<h1>404 page not found</h1>")
})



app.listen(PORT, () => {
console.log(`Server is running ${PORT}`)
})