
import User from "../../../models/usermodel";
import connection from "../../../utils/condb";
import messageHandler from "../../../utils/feature";


const handler = async (req, res) => {
  try {
    await connection();
    const {_id, firstName, lastName, email } = req.body;

    const updateprofile = await User.findByIdAndUpdate({_id},{
        firstName,
        lastName,
        email,
      
    });

    if (updateprofile) {
      messageHandler(res, 200, "profile Updated Succesfully!");
    } else {
      messageHandler(res, 400, "Some Error");
    }
  } catch (error) {
    console.log(error);
  }
};
export default handler;
