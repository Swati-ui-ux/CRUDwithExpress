const express = require('express')
const router = express.Router()


const {getUsers, createUser,getUserWithId,postUser} = require("../controllers/usersController")



router.get("/", getUsers)
router.post("/", createUser)
router.get("/:id", getUserWithId)


module.exports = router