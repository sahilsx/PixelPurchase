import Product from "../../../models/product";
import connection from "../../../utils/condb";
import messageHandler from "../../../utils/feature";
const upload = multer({
  dest: "uploads/",
  limits: { fieldSize: 1024 * 1024 * 10 },
});

const handler = async (req, res) => {
  try {
    await connection();
    const _id = req.params.id;
    const product = await Product.findById(_id);

    if (!product) {
      return messageHandler(res, 404, "No Product Found");
    }

    const { title, description, prize } = req.body;

    await upload.single("image");

    const image = req.file.path;

    const uploadImg = await cloudinary.uploader.upload(image, {
      folder: "ecommerce",
    });

    if (!uploadImg) {
      return messageHandler(res, 400, "Cloudinary Error");
    }

    const imageUrl = uploadImg.secure_url;

    const updateBook = await Book.findByIdAndUpdate({
      title,
      description,
      prize,
      imageUrl,
    });

    if (updateBook) {
      messageHandler(res, 200, "Book Updated Succesfully!");
    } else {
      messageHandler(res, 400, "Some Error");
    }
  } catch (error) {
    console.log(error);
  }
};
export default handler;
