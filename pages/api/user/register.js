import connection from "../../../utils/condb"
import messageHandler from "../../../utils/feature";
import User from "../../../models/usermodel"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"




const reghandler = async (req,res)=>{
// if (req.method !== "post"){
//     return messageHandler(res,400,"Only post methods are Allowed!")
// }
try{
  
const{firstName,lastName,email,password} =req.body
if(firstName ==="" || lastName ==="" || email ===""|| password ===""){
    return messageHandler(res,400,"All Credentials Required!")
}
await connection();

let user = await User.findOne({email})


if(user){
 return messageHandler(res,400,"User Already EXists!")
}
const Hashpass = await bcrypt.hash(password, 10)
user = await User.create({
firstName,
lastName,
email,
password:Hashpass
// firstName: "sahil",
// lastName : "bhat",
// email: "sahil123@gmail.com",
// password: "12345"

})




if(user){
    const token = await jwt.sign({id:user._id},"mylatimlamangaranchu");
    res.status(200).json({message:"User Created SuccessFully!",user,token});
}




}
catch(error){
    console.log(error)
}





};




export default reghandler;