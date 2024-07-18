
import connection from "../../../utils/condb";
import messageHandler from "../../../utils/feature";
import Ship from "../../../models/ship";
const handler = async (req, res) => {
  try {
    await connection();
    const {Name,Email,Address,Mobile,Product,Price } = req.body;
   

    const Order = await Ship.Create({
      Name,
      Email,
      Address,
      Mobile,
      Product,
      Price
    });

    if (Order) {
      messageHandler(res, 200, "Order Confirmed Succesfully!");
    } else {
      messageHandler(res, 400, "Some Error");
    }
  } catch (error) {
    console.log(error);
  }
};
export default handler;
