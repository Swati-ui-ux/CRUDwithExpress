const express = require('express')
const { showCartWithUserId, addProductToCart } = require('../controllers/cartController')
const router = express.Router()

router.get("/:userId", showCartWithUserId)
router.post("/:userId",addProductToCart)

module.exports = router