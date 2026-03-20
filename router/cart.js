const express = require('express')
const router = express.Router()

router.get("/:userId", (req, res) => {
       const id = req.params.userId
res.send(`Fetch the cart item for a specific user id id ${id}`)
})
router.post("/:userid", (req, res) => {
    let id = req.params.userid
    
    console.log(req)
res.send(`Adding product to cart for user with ID: userId ${id}`)
})

module.exports = router