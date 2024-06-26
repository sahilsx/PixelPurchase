import Product from "../../../models/product";
import connection from "../../../utils/condb";
import messageHandler from "../../../utils/feature";
import { createRouter } from "next-connect";
import isAuthenticated from "../../utils/auth";
const apiRoute = createRouter({
  onError(error, req, res) {
    console.error(error);
    res.status(500).json({ error: `Something went wrong! ${error.message}` });
  },
  onNoMatch(req, res) {
    res.status(404).json({ error: "Not Found" }); 
  },
});



apiRoute.use(isAuthenticated);
const handler = async (req, res) => {
  try {
    await connection();

    const _id = req.params.id;
    const product = await Product.findById(_id);

    if (product) {
      res.status(200).json({ message: "Product fetched Succesfully", product });
    } else {
      messageHandler(res, 400, "Some Error");
    }
  } catch (error) {
    console.log(error);
  }
};
export default handler;
