import Product from "../../../models/product";
import connection from "../../../utils/condb";
import messageHandler from "../../../utils/feature";






const handler = async (req, res) => {
    try {
      await connection();
  
      // Extract search query from request query parameters
      const { search = "" } = req.query;
  
      // Create a filter object for MongoDB query
      const filter = {
        $or: [
          { title: { $regex: search, $options: "i" } }, // Case-insensitive search by title
          { description: { $regex: search, $options: "i" } } // Case-insensitive search by description
        ]
      };
  
      // Fetch products based on the constructed filter
      const products = await Product.find(filter);
  
      if (products.length > 0) {
        res.status(200).json({ message: "Products fetched successfully", products });
      } else {
        messageHandler(res, 404, "No products found matching the search criteria");
      }
    } catch (error) {
      console.error("Error fetching products:", error);
      messageHandler(res, 500, "Internal Server Error");
    }
  };
  
  export default handler;