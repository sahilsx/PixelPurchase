import mongoose from "mongoose";



const Ship =   mongoose.models.Ship ||
mongoose.model("Ship",{
Userid:String,
Name:String,
Email:String,
Address:String,
Mobile:Number,
Product:String,
Price:Number,




})


export default Ship;
