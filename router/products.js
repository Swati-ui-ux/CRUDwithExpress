const express = require('express')
const router = express.Router()

router.get("/", (req, res) => {
    res.send("<h1>Fetch all products</h1>")
})
router.post("/", (req, res)=> {
res.send("Add a new product")
})

router.get("/:id", (req, res) => {
   
    res.send(`<h1>Fetch product with id ${req.params.id}</h1>`)
   
})



module.exports = router