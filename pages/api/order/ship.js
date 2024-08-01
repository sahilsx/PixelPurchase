
import connection from "../../../utils/condb";
import messageHandler from "../../../utils/feature";
import Ship from "../../../models/ship";
const handler = async (req, res) => {
  try {
    await connection();
    const {Name, Email, Address, Mobile, Product, Price } =req.body;
    console.log("body",req.body)
    if (Name =="" ||   Email =="" ||Address =="" ||Mobile ==""  ||Product == ""  ||Price == "") {
      return messageHandler(res, 400, "All details of Shipment Required");
    }

    const Order = await Ship.create({
      Name,
      Email,
      Address,
      Mobile,
      Product,
      Price
    });

    if (Order) {
      messageHandler(res, 200, "Order Confirmed Successfully!");
    } else {
      messageHandler(res, 400, "Some Error");
    }
  } catch (error) {
    console.log(error);
  }
};
export default handler;
