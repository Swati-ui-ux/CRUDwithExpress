
const path = require('path')
const { sendResponse } = require('../utils/response')


let getProducts = (req,res) => {
    res.sendFile(path.join(__dirname, "..", "views", "products.html"))
    
}

let postProducts = (req, res) => {
   return sendResponse(res,req.body,201)
}

let getProductWithId = (req,res) => {
    res.send(`<h1>Fetch product with id ${req.params.id}</h1>`)
}
module.exports = {getProducts,postProducts,getProductWithId}