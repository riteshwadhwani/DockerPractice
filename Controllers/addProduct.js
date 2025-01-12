const Product = require("../Models/Product.js");

const addProduct = async(req,res)=>{
    //destructure
    // const name = req.body.name;
    // const description = req.body.description;
    const {name,description} = req.body;

   try {
    const createdProduct = new Product({name,description});
    await createdProduct.save();
   } catch (error) {
    console.log(error)
   }

    console.log(req.body);
    res.status(201).json({
        success:true,
        message:"Product added successfully"
    })
}

module.exports = addProduct;