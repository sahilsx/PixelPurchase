import mongoose from "mongoose"


const Product = mongoose.models.Product ||

mongoose.model("Product",{
title : String,
description : String,
prize: Number,
imageUrl: String,
 


})

export default Product;


