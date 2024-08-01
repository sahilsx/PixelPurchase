import Product from "../../../models/product";
import connection from "../../../utils/condb";
import messageHandler from "../../../utils/feature";
import Ship from "../../../models/ship";

const handler = async (req, res) => {
  try {
    await connection();
    const ship = await Ship.find();

    if (ship) {
      res.status(200).json({ message: "Products fetched Succesfully", ship });
    } else {
      messageHandler(res, 400, "Some Error");
    }
  } catch (error) {
    console.log(error);
  }
};
export default handler;