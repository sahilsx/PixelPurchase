import mongoose from "mongoose";



const contact =   mongoose.models.contact ||
mongoose.model("contact",{
Userid:String,
Name:String,
Email:String,
Address:String,
Mobile:Number,
Product:String,
Price:Number,




})


export default contact;