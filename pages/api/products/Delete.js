import Product from "../../../models/product"
import connection from "../../../utils/condb"
import messageHandler from "../../../utils/feature"









const handler = async (req,res)=>{

try{

const _id = req.params.id

await connection();

const remove = await Product.findByIdAndDelete(_id)


if(!remove){
return messageHandler(res,500,"Internal Server error")
}
else if(remove){
    return messageHandler(res,201,"Product Removed Successfully!") 
}
}
catch(error){
console.log(error)

}


}