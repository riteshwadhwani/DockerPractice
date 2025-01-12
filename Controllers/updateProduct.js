

const updateProduct = (req,res)=>{
    console.log(req.body);

    res.status(200).json({
        success:true,
        message:"Updated Successfully!!"

    })
}

module.exports = updateProduct;