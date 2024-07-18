import mongoose from "mongoose";



const Ship = mongoose.Model.Ship||
mongoose.model("Ship",{
Name:String,
Email:String,
Address:String,
Mobile:Number,
Product:String,
Price:Number,




})


export default Ship;