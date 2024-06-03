import connection from "../../../utils/condb"
import messageHandler from "../../../utils/feature";
import Product from "../../../models/product"
import multer from "multer"
import cloudinary from "../../../utils/cloud";

const upload = multer({ dest: 'uploads/', limits: { fieldSize: 1024 * 1024 * 10 } })

const handler = async (req, res) => {
  try {
    const { title, description, prize } = req.body;
     
    if (title === "" || description === "" || prize === "") {
      return messageHandler(res, 400, "Missing Required Fields");
    }

    // Use the Multer middleware to handle file upload
    upload.single('image')(req, res, async (err) => {
      if (err) {
        // Handle the error
        console.error(err);
        return messageHandler(res, 500, "Error uploading file");
      }

      const image = req.file.path

      // Upload the image to Cloudinary
      const uploadedImage = await cloudinary.uploader.upload(image, {
        folder: "Ecommerce",
      });
      const imageUrl = uploadedImage.secure_url;

      await connection();

      let product = await Product.create({
        title,
        description,
        prize,
        imageUrl,
      });

      if (product) {
        return messageHandler(res, 201, "Product created successfully!");
      } else {
        return messageHandler(res, 500, "INTERNAL SERVER ERROR!");
      }
    });
  } catch (error) {
    console.log(error);
  }
}

export default handler;