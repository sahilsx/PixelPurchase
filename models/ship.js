import mongoose from "mongoose";



const Ship =  mongoose.models.Ship ||
mongoose.model("Ship",{
Name:String,
Email:String,
Address:String,
Mobile:Number,
Product:String,
Price:Number,




})


export default Ship;