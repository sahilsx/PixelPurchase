import connection from "../../../utils/condb"
import messageHandler from "../../../utils/feature"
import User from "../../../models/usermodel"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import cookie from "cookie";


require("dotenv").config();

const handler = async (req,res)=>{
// if (req.method !== "post"){
//     return messageHandler(res,400,"Only post methods are Allowed!")
// }
try{
const{email, password} =req.body
if( email ===""|| password ===""){
    return messageHandler(res,400,"All Credentials Required!")
}
await connection();

const user = await User.findOne({email})


if(!user){
 return messageHandler(res,400,"No User Found!")


}
console.log(password)
console.log(user.password)
const comparepass = await bcrypt.compare(password,user.password);

if(!comparepass){
    return messageHandler(res,400,"Incorrect Password!")
}


const token = await jwt.sign({userId:user._id},"mylatimlamangaranchu");



if (token) {
           
    res.setHeader(
        "Set-Cookie",
        cookie.serialize("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV !== "development",
            maxAge: 60 * 60 * 24, 
            sameSite: "strict",
            path: '/', 
        })
    );

   
         
    const response =  res.status(200).json({ message: "Logged in succesfully", user, token});
    return response;
}


// if(token){

//     res.status(200).json({message:"Logged in succesfully",user,token});
// }




}
catch(error){
    console.log(error)
}





}
export default handler