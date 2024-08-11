import Product from "../../../models/product";
import connection from "../../../utils/condb";

export default async function handler(req, res) {
  // Establish database connection
  await connection();
  
  // Extract query parameter from the request
  const { query } = req.query;
  console.log("Received query:", query);

  if (!query) {
    return res.status(400).json({ error: 'Query parameter is required' });
  }

  try {
    // Query products from the database that match the query parameter
    // Use a case-insensitive regular expression for partial matching
    const products = await Product.find({
      title: { $regex: new RegExp(query, 'i') } // Case-insensitive search
    });

    // Return the fetched products
    res.status(200).json(products);
  } catch (error) {
    console.error('Failed to fetch products:', error);
    res.status(500).json({ error: 'Failed to fetch products' });
  }
}
