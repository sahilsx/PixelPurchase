import Product from "../../../models/product";
import connection from "../../../utils/condb";
import messageHandler from "../../../utils/feature";
import multer from "multer"
import cloudinary from "../../../utils/cloud";
import { createRouter } from "next-connect";
const upload = multer({ dest: 'uploads/', limits: { fieldSize: 1024 * 1024 * 10 } })






export const config = {
  api: {
    bodyParser: false,
  },
};


const apiRoute = createRouter({
  onError(error, req, res) {
    console.error(error);
    res.status(500).json({ error: `Something went wrong! ${error.message}` });
  },
  onNoMatch(req, res) {
    res.status(404).json({ error: "Not Found" }); 
  },
});


apiRoute.use(upload.single("image"));

apiRoute.put(async (req, res) => {
  try {
    await connection();
    const {_id, title, description,prize,image}  = req.body;
  //  console.log("image",image)
   console.log("id",_id)
   if (!image) {
    const updateBook = await Product.findByIdAndUpdate(_id,{
      title,
      description,
      prize,
    
      
    });
    if (updateBook) {
      messageHandler(res, 200, "Book Updated Succesfully!");
    } 
    
  }

  const uploadImg = await cloudinary.uploader.upload(image, {
    folder: "ecommerce",
  });

  if (!uploadImg) {
    return messageHandler(res, 400, "Cloudinary Error");
  }
  
  const imageUrl = uploadImg.secure_url;

    const updateBook = await Product.findByIdAndUpdate(_id,{
      title,
      description,
      prize,
      imageUrl
      
    });

    if (updateBook) {
      messageHandler(res, 200, "Book Updated Succesfully!");
    } 
  } catch (error) {
    console.log(error);
  }
});

export default apiRoute.handler();
// export default handler;




