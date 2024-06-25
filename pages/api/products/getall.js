import Product from "../../../models/product";
import connection from "../../../utils/condb";
import messageHandler from "../../../utils/feature";

const handler = async (req, res) => {
  try {
    await connection();
    const product = await Product.find();

    if (product) {
      res.status(200).json({ message: "Products fetched Succesfully", product });
    } else {
      messageHandler(res, 400, "Some Error");
    }
  } catch (error) {
    console.log(error);
  }
};
export default handler;