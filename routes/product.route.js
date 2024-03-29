const express = require("express");
const {getProducts,getProduct,createProduct,updateProduct,deleteProduct}=require("../controllers/product.controller")
const router=express.Router()

router.get("/",getProducts);
router.get("/:id",getProduct);
router.post("/",createProduct)
router.post("/:id",updateProduct)
router.post("/:id",deleteProduct)

module.exports=router