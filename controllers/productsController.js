
const path = require('path')


let getProducts = (req,res) => {
    res.sendFile(path.join(__dirname, "..", "views", "products.html"))
    
}

let postProducts = (req, res) => {
    console.log("Headers",req.headers)
 console.log("body",req.body)
res.status(201).json({message:"product created successfully", product: req.body})}

let getProductWithId = (req,res) => {
    res.send(`<h1>Fetch product with id ${req.params.id}</h1>`)
}
module.exports = {getProducts,postProducts,getProductWithId}