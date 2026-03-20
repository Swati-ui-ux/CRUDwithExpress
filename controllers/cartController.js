// router.get("/:userId", (req, res) => {
//        const id = req.params.userId
// res.send(`Fetch the cart item for a specific user id id ${id}`)
// })
// router.post("/:userid", (req, res) => {
//     let id = req.params.userid
    
//     console.log(req)
// res.send(`Adding product to cart for user with ID: userId ${id}`)
// })



let showCartWithUserId = (req, res) => {
    const id = req.params.userId
res.send(`Fetch the cart item for a specific user id id ${id}`)
}

let addProductToCart = (req, res) => {
    let id = req.params.userId
    
res.send(`Adding product to cart for user with ID: userId ${id}`)   
}

module.exports = {showCartWithUserId,addProductToCart}  
