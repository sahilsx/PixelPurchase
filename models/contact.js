import mongoose from "mongoose";



const contact =   mongoose.models.contact ||
mongoose.model("contact",{
Message:String,
Name:String,
Email:String,





})


export default contact;
