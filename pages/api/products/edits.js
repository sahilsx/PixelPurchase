import Product from "../../../models/product";
import connection from "../../../utils/condb";
import messageHandler from "../../../utils/feature";
import multer from "multer"
import cloudinary from "../../../utils/cloud";
import { createRouter } from "next-connect";
// const upload = multer({ dest: 'uploads/', limits: { fieldSize: 1024 * 1024 * 10 } })


// export const config= {
//   api: {
//     bodyParser: false,
//   },
// };


// const apiRoute =createRouter({
//   onError(error, req, res) {
//     console.error(error);
//     res.status(500).json({ error: `Something went wrong! ${error.message}` });
//   },
  
// });
// apiRoute.post
 // if (!image) {
    //         return messageHandler(res, 400, "select image");
    //       }
      
          // const uploadImg = await cloudinary.uploader.upload(image, {
          //   folder: "ecommerce",
          // });
      
          // if (!uploadImg) {
          //   return messageHandler(res, 400, "Cloudinary Error");
          // }
          
          // const imageUrl = uploadImg.secure_url;
// apiRoute.use(upload.single("image"))
 const handler= (async (req, res) => {
  try {
    await connection();
    const {_id, title, description,prize,image}  = req.body;
    console.log("reqssss",req.body)
   
    console.log("id",_id)
    console.log("id",title)

    const updateBook = await Product.findByIdAndUpdate(_id,{
      title,
      description,
      prize,
      
    });

    if (updateBook) {
      messageHandler(res, 200, "Book Updated Succesfully!");
    } else {
      messageHandler(res, 400, "Some Error");
    }
  } catch (error) {
    console.log(error);
  }
});

// export default apiRoute.handler();
export default handler;




