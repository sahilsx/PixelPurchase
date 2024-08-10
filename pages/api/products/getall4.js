import Product from "../../../models/product";
import connection from "../../../utils/condb";
import messageHandler from "../../../utils/feature";

const handler = async (req, res) => {
  try {
    await connection();
    
    // Fetch products with a price below 10,000
    const products = await Product.find().where('prize').lt(40000);

    if (products.length > 0) {
      res.status(200).json({ message: "Products fetched successfully", products });
    } else {
      messageHandler(res, 404, "No products found under the specified price");
    }
  } catch (error) {
    console.log("Error fetching products:", error);
    messageHandler(res, 500, "Internal Server Error");
  }
};

export default handler;
