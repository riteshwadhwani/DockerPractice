
const deleteProduct =(req,res)=>{
    console.log(req.body);

    res.status(301).json({
        success:true,
        message:"Deleted Successfully!!"

    })
}

module.exports = deleteProduct;