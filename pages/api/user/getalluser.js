import User from "../../../models/usermodel";
import connection  from "../../../utils/condb";
import messageHandler from "../../../utils/feature";







const handler=async(req,res)=>{
await connection();
try{
const users = await User.find();

if (users) {
    res.status(200).json({ message: "users fetched Succesfully", users });
  } else {
    messageHandler(res, 400, "Some Error");
  }
} catch (error) {
  console.log(error);
}
};
export default handler;






