// import connection from "../../../utils/condb"
// import messageHandler from "../../../utils/feature";
// import multer from "multer"
// import cloudinary from "../../../utils/cloud";
// import { createRouter } from "next-connect";
// import Product from "../../../models/product";


// const upload = multer({ dest: 'uploads/', limits: { fieldSize: 1024 * 1024 * 10 } })


// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };


// const apiRoute = createRouter({
//   onError(error, req, res) {
//     console.error(error);
//     res.status(500).json({ error: `Something went wrong! ${error.message}` });
//   },
//   onNoMatch(req, res) {
//     res.status(404).json({ error: "Not Found" }); 
//   },
// });


// apiRoute.use(upload.single("image"));
// apiRoute.post(async (req, res) => {
//   try {
//     connection();

//     const { title,  description, prize, image } = req.body;
//     console.log(req.body)

//     if (title === "" ||   description === "" || prize === "") {
//       return messageHandler(res, 400, "All details of product Required");
//     }

//     if (!image) {
//       return messageHandler(res, 400, "select image");
//     }

//     const uploadImg = await cloudinary.uploader.upload(image, {
//       folder: "ecommerce",
//     });

//     if (!uploadImg) {
//       return messageHandler(res, 400, "Cloudinary Error");
//     }
    
//     const imageUrl = uploadImg.secure_url;
//     console.log("price",prize)
//     const product = await  Product.create({
//       title,
//       description,
//       prize,
//       imageUrl,
//     });
//     console.log(product)

//     if (product) {
//       return messageHandler(res, 201, "Product saved Succesfully");
//     } else {
//       return messageHandler(res, 200, "Some Error!");
//     }
//   } catch (error) {
//     console.log(error);
//     return messageHandler(res, 500, "server Error");
//   }
// });

// export default apiRoute.handler();




import connection from "../../../utils/condb";
import messageHandler from "../../../utils/feature";
import multer from "multer";
import cloudinary from "../../../utils/cloud";
import { createRouter } from "next-connect";
import Product from "../../../models/product";

// Configure multer for file uploads
// const upload = multer({ dest: 'uploads/', limits: { fileSize: 1024 * 1024 * 10 } });

// // Disable default body parser for file uploads
// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };

const apiRoute = createRouter({
  onError(error, req, res) {
    console.error(error);
    res.status(500).json({ error: `Something went wrong! ${error.message}` });
  },
  onNoMatch(req, res) {
    res.status(404).json({ error: "Not Found" }); 
  },
});

// // Use multer middleware for handling file uploads
// // apiRoute.use(upload.single("image"));

apiRoute.post(async (req, res) => {
  try {
    connection();

    const { title, description, prize } = req.body;
    const { file } = req; // Access the uploaded file

    if (!title || !description || !prize) {
      return messageHandler(res, 400, "All details of product required");
    }

    if (!file) {
      return messageHandler(res, 400, "Image is required");
    }

    // Upload image to Cloudinary
    const uploadImg = await cloudinary.uploader.upload(file.path, {
      folder: "ecommerce",
    });

    if (!uploadImg) {
      return messageHandler(res, 400, "Cloudinary upload error");
    }

    const imageUrl = uploadImg.secure_url;

    // Create a new product
    const product = await Product.create({
      title,
      description,
      prize,
      imageUrl,
    });

    if (product) {
      return messageHandler(res, 201, "Product saved successfully");
    } else {
      return messageHandler(res, 500, "Failed to save product");
    }
  } catch (error) {
    console.log(error);
    return messageHandler(res, 500, "Server error");
  }
});

export default apiRoute.handler();
