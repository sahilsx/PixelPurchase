import connection from "../../../utils/condb"
import messageHandler from "../../../utils/feature";
import contact from "../../../models/contact"




const handler = async (req,res)=>{

try{
    await connection();
const{Name,Email,Message} =req.body
console.log(req.body)
if(Name ==="" || Email ===""||Message ===""){
    return messageHandler(res,400,"All Credentials Required!")
}

console.log(Message)
 const send= await contact.create({
    Name,
    Email,
    Message,


})
console.log("HU",send.Name)
console.log("HU",send.Message)




if(send){
    
    res.status(200).json({message:"Your message has been sent SuccessFully!",send});
}




}
catch(error){
    console.log(error)
}





};




export default handler;