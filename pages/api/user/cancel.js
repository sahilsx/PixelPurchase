import ship from "../../../models/ship"
import connection from "../../../utils/condb";
import messageHandler from "../../../utils/feature";

const handler = async (req, res) => {
  try {
    const {id} = req.body;
    console.log(id);

    await connection();

    const remove = await ship.findByIdAndDelete(id);

    if (!remove) {
      return messageHandler(res, 500, "Internal Server error");
    } else if (remove) {
      return messageHandler(res, 201, "Order Canceled Successfully!");
    }
  } catch (error) {
    console.log(error);
  }
};



export default handler;