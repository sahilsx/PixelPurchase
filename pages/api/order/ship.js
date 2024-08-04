
import connection from "../../../utils/condb";
import messageHandler from "../../../utils/feature";
import Ship from "../../../models/ship";
const handler = async (req, res) => {
  try {
    await connection();
    const {Userid,Name, Email, Address, Mobile, Product, Price } =req.body;
    console.log("body",req.body)
    if (Userid =="" || Name =="" ||   Email =="" ||Address =="" ||Mobile ==""  ||Product == ""  ||Price == "") {
      return messageHandler(res, 400, "All details of Shipment Required");
    }
console.log("userid",Userid);
    const Order =  await Ship.create({
      Userid,
      Name,
      Email,
      Address,
      Mobile,
      Product,
      Price
    });
    console.log("order",Order)

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
