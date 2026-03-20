const express = require('express')
const router = express.Router()


const {getUsers,getUserWithId,postUser} = require("../controllers/usersController")



router.get("/", getUsers)
router.post("/", postUser)
router.get("/:id", getUserWithId)


module.exports = router