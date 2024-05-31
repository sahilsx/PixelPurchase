import mongoose from "mongoose"


const Intern = mongoose.models.Intern ||

mongoose.model("Intern",{
name : String,
email : String,
contact : Number,
address : String,
qualification : String,
url : String,


})

export default Intern;


