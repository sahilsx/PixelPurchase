import ship from "../../../models/ship";
import messageHandler from "../../../utils/feature";
import connection from "../../../utils/condb";


const handler = async(req,res)=>{
    try {
await connection();
const myorder = await ship.findOne(Userid)
if(myorder){

    res.status(200).json({message:"Orders Fetched Successfully",myorder})
}
else{

messageHandler(res,400,"some error occured")

}
    }catch(error){

   console.log("error",error)

    }





}



export default handler;

