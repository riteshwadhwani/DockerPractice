const express = require("express");
const addProduct = require("../Controllers/addProduct.js")
const deleteProduct = require("../Controllers/deleteProduct.js")
const getProduct = require("../Controllers/getProduct.js")
const updateProduct = require("../Controllers/updateProduct.js")


const router  = express.Router();

router.get("/getProducts",getProduct);
router.put("/updateProduct",updateProduct);
router.delete("/deleteProduct",deleteProduct);
router.post("/addProduct",addProduct);

module.exports = router;

