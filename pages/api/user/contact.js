import connection from "../../../utils/condb"
import messageHandler from "../../../utils/feature";
import contact from "../../../models/contact"




const handler = async (req,res)=>{

try{
    await connection();
const{Name,Email,Reason} =req.body
console.log(req.body)
if(Name ==="" || Email ===""||Reason ===""){
    return messageHandler(res,400,"All Credentials Required!")
}

console.log(Reason)
 const send= await contact.create({
    // Name,
    // Email,
    Reason,


})




if(send){
    
    res.status(200).json({message:"Your message has been sent SuccessFully!",});
}




}
catch(error){
    console.log(error)
}





};




export default handler;