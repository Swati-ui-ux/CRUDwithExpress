
const path = require('path')


let getProducts = (req,res) => {

    res.sendFile(path.join(__dirname, "..", "views", "products.html"))
    
}

let postProducts = (req,res) => {

res.send("Add a new product")
}

let getProductWithId = (req,res) => {
    res.send(`<h1>Fetch product with id ${req.params.id}</h1>`)
}
module.exports = {getProducts,postProducts,getProductWithId}