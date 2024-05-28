import connection from "../../../utils/condb"
import messageHandler from ("../../utils/feature")
import User from "../../../models/usermodel"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"




const handler = async (req,res)=>{
if (req.method !== "post"){
    return messageHandler(res,400,"Only post methods are Allowed!")
}
try{
const{email,password} =req.body
if( email ===""|| password ===""){
    return messageHandler(res,400,"All Credentials Required!")
}
await connection();

const user = await User.findOne({email})


if(!user){
 return messageHandler(res,400,"No User Found!")


}
const comparepass = await bcrypt.compare(password, user.password)
if(!comparepass){
    return messageHandler(res,400,"Incorrect Password!")
}


const token = await jwt.sign({id:user._id},"mylatimlamangaranchu");

if(token){

    res.status(200).json({message:"Logged in succesfully",user,token});
}




}
catch(error){
    console.log(error)
}





}
export default handler