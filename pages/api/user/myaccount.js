import User from "../../../models/usermodel";
import connection from "../../../utils/condb";
import messageHandler from "../../../utils/feature";







const handler = async (req, res) => {
  try {
    await connection();

    const { id } = req.query; 
    console.log("myid",id);
    const user = await User.findById(id);

    if (user) {
      res.status(200).json({ message: "user fetched Succesfully", user });
    } else {
      messageHandler(res, 400, "Some Error");
    }
  } catch (error) {
    console.log(error);
  }
};
export default handler;
