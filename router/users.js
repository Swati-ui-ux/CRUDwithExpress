const express = require('express')
const router = express.Router()

router.get("/", (req, res) => {
   
    res.send("<h1>Fetch all users</h1>")
})

router.post("/", (req, res) => {
    res.send(" Add a new user.")
})

router.get("/:id", (req, res) => {
    res.send(`Fetch user with id ${req.params.id}`)
    
})

module.exports = router