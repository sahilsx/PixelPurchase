import connection from "../../../utils/condb"
import messageHandler from "../../../utils/feature";
import Intern from "../../../models/intern"






const handler = async (req,res)=>{
try{

const{name,email,contact,address,qualification}= req.body

if(name ==="" || email ==="" ||contact ==="" || address ==="" || qualification==="" ){
return messageHandler(res,400,"Missing Required Fields");
}

await connection();

let intern = await Intern.create({
name,
email,
contact,
address,
qualification,


});

if(intern){
return messageHandler(res,201,"Intern Request Sent Successfully!")

}
else{
    return messageHandler (res,500,"INTERNAL SERVER ERROR!")
}




}catch(error){
console.log(error)

}


}



export default handler;