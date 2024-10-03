import connection from "../../../utils/condb"
import messageHandler from "../../../utils/feature"
import User from "../../../models/usermodel"
import nodemailer from "nodemailer"
import jwt from "jsonwebtoken"

const transporter = nodemailer.createTransport({
    service: "gmail",
    secure: "false",
    auth: {
      user: "itxsaaho@gmail.com",
      pass: "guvf qmgd giqy qbcs",
    },
  });

require("dotenv").config();

const handler = async (req,res)=>{
try{
const{email} =req.body
if( email ===""){
    return messageHandler(res,400,"All Credentials Required!")
}
await connection();

const user = await User.findOne({email})
if(!user){
    return messageHandler(res,400,"No User Found!")
   }
const token = jwt.sign(
    { id: user._id },
    "key",
    {
        expiresIn: '1h',
       
    }
);


const resetUrl = `http://localhost:3000//user/forgotpassword?token=${token}`;
const mailOptions = {
    from: "itxsaaho@gmail.com",
    to: `${user.email}`,
    subject: "Reset Link For Changing Password",
    text:  `You requested a password reset. Please reset your password by clicking the link: ${resetUrl}`,
  };

   await transporter.sendMail(mailOptions);

  

    res.json({ message: "mail has been sent successfully!" });



   
     





}
catch(error){
    console.log(error)
}





}
export default handler