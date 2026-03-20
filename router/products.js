const express = require('express')
const { getProducts, postProducts, getProductWithId } = require('../controllers/productsController')
const router = express.Router()



router.get("/",getProducts)
router.post("/", postProducts)
router.get("/:id", getProductWithId)



module.exports = router