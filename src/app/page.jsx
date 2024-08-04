// "use client";
// import * as React from "react";
// import {
//   Container,
//   TextField,
//   Typography,
//   Button,
//   Box,
//   Modal,
//   Grid,
//   Card,
//   CardActions,
//   CardContent,
//   CardMedia,
// } from "@mui/material";
// import { toast, ToastContainer } from "react-toastify";
// import { useRouter } from "next/navigation";
// import IsAuthenticated from "./user/Auth/page";
// import { ConstructionOutlined, FontDownloadOffRounded } from "@mui/icons-material";

// const logoContainerStyle = {
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
//   marginBottom: 3,
//   marginTop: 1,
// };
// const logoCircleStyle = {
//   marginTop: 5,
//   width: 45,
//   height: 45,
//   borderRadius: "50%",
//   backgroundColor: "purple",
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
//   color: "#fff",
//   marginRight: 0.5,
// };

// const logoTextStyle = {
//   marginTop: 5,
//   fontWeight: "bold",
//   fontSize: "1.5rem",
//   Color: "black",
// };
// const logoTextStyle2 = {
//  fontSize:"17px",
// fontWeight:"300"
 
// };
// const lineStyle = {
//   width: "100%",
//   height: "2px",
//   marginTop: 6,
//   backgroundColor: " black",
// };

// const textStyle = {
//   display: "flex",
//   justifyContent: "center",
//   alignItems: "center",
//   marginTop: 6,
//   fontWeight: "bolder",
// };
// const style = {
//   position: "absolute",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   width: 400,
//   bgcolor: "background.paper",
//   border: "2px solid #000",
//   boxShadow: 24,
//   p: 4,
// };
// const stylee = {
//   backgroundColor:"pink",
//   height:"300px",
//   width:"70%"
// };

// const Home = () => {
//   const [open, setOpen] = React.useState(false);
//   const [selectedProduct, setSelectedProduct] = React.useState([]);
//   const [loading , setLoading ] = React.useState(false);








//   const [Name, setName] = React.useState("");
//   const [Email, setEmail] = React.useState("");
//   const [Price, setPrice] = React.useState(0);
//   const [Address, setaddress] = React.useState("");
//   const [Mobile, setmobile] = React.useState(0);
//   const [Product, setProduct] = React.useState("");
//   //  const app =useRouter();
//   //   const token = sessionStorage.getItem("token");
//   //  React.useEffect(() => {

//   //     if (!token) {
//   //       app.push("/user/login")
//   //     }
//   //   }, [token ]);
//   //   console.log("token",token)

//   const [data, setData] = React.useState([]);

//   const getRows = async () => {
//     try {
//       const res = await fetch("/api/Products/getall", {
//         method: "GET",
//       });
//       const data = await res.json();
//       const product = data.product;
//       setData(product);

//       console.log(product);
//     } catch (error) {
//       console.log(error);
//       toast.error("server Error");
//     }
//   };

//   React.useEffect(() => {
//     getRows();
//   }, []);

// const handleClose = () => setOpen(false);
// const Handleship= async(products)=>{
//  setOpen(true)
//  setSelectedProduct(products)
//  setProduct(selectedProduct.title)
//  setPrice(selectedProduct.prize)

// }
// async function handleShipSubmit(e) {
//   try {

//     e.preventDefault();
//     // const formData = new FormData();
//     // formData.append("Name", Name);
//     // formData.append("Email", Email);
//     // formData.append("Mobile", Mobile);
//     // formData.append("Address", Address);
//     // formData.append("Product", Product);
//     // formData.append("Price", Price);






    
//     const response = await fetch('/api/order/ship', {
//       method: 'POST',
//       // body:(formData),
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//     body: JSON.stringify({"Name":Name,"Email":Email,"Mobile":Mobile,"Address":Address,"Product":Product,"Price":Price}








//     ),
//     });
//     const result = await response.json();
   
//     if (result .message === "Order Confirmed Succesfully!") {
//       toast.success("Order Confirmed Succesfully!");
//       setName("")
//       setEmail("")
//       setPrice("")
//       setProduct("")
//       setmobile("")
//       setaddress("")

//     } else {
//       console.error(result.message);
//     }
//   } catch (error) {
//     console.error('Error updating trip:', error);
//   }
// };

// const handleChange = (e) => {
//   const { name, value } = e.target;
//   setSelectedProduct((prevData) => ({ ...prevData, [name]: value }));
// };


//   const CardComponent = ({ image, price, title, description,products }) => {
//     return (
//       <Card sx={{ maxWidth: 345, margin: 2 }}>
//         <CardMedia component="img" height="140" image={image} alt={title} />
//         <CardContent>
//           <Typography gutterBottom variant="h5" component="div">
//             {title}
//           </Typography>

//           <Typography variant="body2" color="text.secondary">
//             {description}
//           </Typography>
//           <Typography gutterBottom variant="h5" component="div">
//             {price}
//           </Typography>
//         </CardContent>
//         <CardActions>
//           <Button onClick={() => Handleship(products)} size="large">Buy</Button>
//           <Button size="small">Learn More</Button>
//         </CardActions>
//       </Card>
//     );
//   };

//   return (
//     <>
      
//       <IsAuthenticated />
//       <Container  sx={stylee}>
//         <Box sx={logoContainerStyle}>
//           <Box sx={logoCircleStyle}>
//             <Typography variant="h5">PP</Typography>
//           </Box>
//           <Typography sx={logoTextStyle}>PixelPurchase</Typography>
//         </Box>
//         <Typography sx={logoTextStyle2}  align="center"  paragraph>
//           Welcome to PixelPurchase! At PixelPurchase, we believe in the power of
//           simplicity and convenience. Founded in 2024, our mission has always
//           been to bring high-quality products directly to your doorstep with
//           just a few clicks. We are passionate about making your shopping
//           experience enjoyable, seamless, and rewarding.
//         </Typography>
//         <Box
//           sx={{
//             display: "flex",
//             justifyContent: "center",
//             marginTop: 5,
//             marginBottom: 5,
//           }}
//         >
//           <Button href="/mystore" variant="contained" color="primary">
//             Get Started
//           </Button>
//         </Box>
//       </Container>

//       <Box sx={lineStyle}></Box>

//       <Box sx={textStyle}>
//         <Typography variant="h5" align="center" color="black">
//           Explore a variety of Products that suit your choice !
//         </Typography>
//       </Box>

//       <Container sx={{ py: 5 }}>
//         <Grid container spacing={4}>
//           {data.map((products, index) => (
//             <Grid item key={index} xs={12} sm={6} md={4}>
//               <CardComponent
//                 image={products.imageUrl}
//                 title={products.title}
//                 description={products.description}
//                 price={products.prize}
//                 products={products}
//               />
//             </Grid>
//           ))}
//         </Grid>
//       </Container>




//       <ToastContainer />

//       <Modal
//           open={open}
//           onClose={handleClose}
//           aria-labelledby="modal-modal-title"
//           aria-describedby="modal-modal-description"
//         >
//           <Box sx={style}>
//             <Typography variant="h5" textAlign={"center"}>
//               Buy Product
//             </Typography>
//             |
//             <form onSubmit={handleShipSubmit}>
//               <TextField
//                 margin="normal"
//                 id="filled-basic"
//                 label="Name"
//                 variant="filled"
//                 name="Name"
//                 fullWidth
//                 value={Name}
//                 onChange={(e) => {
//                   setName(e.target.value);}}
           
               
//               />
             
//              <TextField
//                 margin="normal"
//                 id="filled-basic"
//                 label="Email"
//                 variant="filled"
//                 name="Email"
//                 value={Email}
//                 fullWidth
//                 onChange={(e) => {
//                   setEmail(e.target.value);}}
//               />


//              <TextField
//                 margin="normal"
//                 id="filled-basic"
//                 label="Address"
//                 name="Address"
//                 variant="filled"
//                 fullWidth
//                 value={Address}
//                 onChange={(e) => {
//                   setaddress(e.target.value);}}
//               />








//               <TextField
//                 margin="normal"
//                 id="filled-basic"
//                 label="Mobile No."
//                 name="Mobile"
//                 type="number"
//                 variant="filled"
//                 fullWidth
//                 value={Mobile}
//                 onChange={(e) => {
//                   setmobile(parseInt(e.target.value, 10));;}}
//               />
             


//              <TextField
//                 margin="normal"
//                 id="filled-basic"
//                 label="Product"
//                 variant="filled"
//                 name="Product"
//                 fullWidth
//                 value={Product}

//               />
             
//               <TextField
//                 margin="normal"
//                 id="filled-basic"
//                 label="Product Price"
//                 name="Price"
//                 variant="filled"
//                 fullWidth
//                 type="number"
//                 value={Price}
               
//               />
             
            

//               <Button
//                 variant="contained"
//                 color="primary"
//                 type="submit"
//                 fullWidth
//                 sx={{ mt: 3, mb: 2 }}
//                 disabled={loading}
//               >
//                 Pay for Order
//               </Button>

//             </form>
//           </Box>
//         </Modal>
















//     </>
//   );
// };

// export default Home;











// "use client";
// import * as React from "react";
// import {
//   Container,
//   TextField,
//   Typography,
//   Button,
//   Box,
//   Modal,
//   Grid,
//   Card,
//   CardActions,
//   CardContent,
//   CardMedia,
//   CircularProgress
// } from "@mui/material";
// import { toast, ToastContainer } from "react-toastify";
// import { useRouter } from "next/navigation";
// import IsAuthenticated from "./user/Auth/page";
// import { ConstructionOutlined } from "@mui/icons-material";

// const logoContainerStyle = {
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
//   marginBottom: 3,
//   marginTop: 1,
// };

// const logoCircleStyle = {
//   width: 50,
//   height: 50,
//   borderRadius: "50%",
//   backgroundColor: "#3f51b5",
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
//   color: "#fff",
//   marginRight: 1,
// };

// const logoTextStyle = {
//   fontWeight: "bold",
//   fontSize: "2rem",
//   color: "#333",
// };

// const textStyle = {
//   display: "flex",
//   justifyContent: "center",
//   alignItems: "center",
//   marginTop: 6,
//   fontWeight: "bold",
//   color: "#333",
// };

// const modalStyle = {
//   position: "absolute",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   width: 400,
//   bgcolor: "background.paper",
//   border: "1px solid #ddd",
//   boxShadow: 24,
//   p: 4,
// };

// const containerStyle = {
//   backgroundColor: "#f5f5f5",
//   height: "auto",
//   padding: "3rem 1rem",
// };

// const CardComponent = ({ image, price, title, description, products, onBuy }) => (
//   <Card sx={{ maxWidth: 345, margin: 2, borderRadius: 2, boxShadow: 3 }}>
//     <CardMedia component="img" height="140" image={image} alt={title} />
//     <CardContent>
//       <Typography gutterBottom variant="h5" component="div">
//         {title}
//       </Typography>
//       <Typography variant="body2" color="text.secondary">
//         {description}
//       </Typography>
//       <Typography gutterBottom variant="h6" component="div">
//         ${price}
//       </Typography>
//     </CardContent>
//     <CardActions>
//       <Button variant="contained" color="primary" onClick={() => onBuy(products)}>
//         Buy Now
//       </Button>
//       <Button size="small" color="info">
//         Learn More
//       </Button>
//     </CardActions>
//   </Card>
// );

// const Home = () => {
//   const [open, setOpen] = React.useState(false);
//   const [selectedProduct, setSelectedProduct] = React.useState(null);
//   const [loading, setLoading] = React.useState(false);

//   const [Name, setName] = React.useState("");
//   const [Email, setEmail] = React.useState("");
//   const [Price, setPrice] = React.useState("");
//   const [Address, setAddress] = React.useState("");
//   const [Mobile, setMobile] = React.useState("");
//   const [Product, setProduct] = React.useState("");

//   const [data, setData] = React.useState([]);

//   const getRows = async () => {
//     try {
//       const res = await fetch("/api/Products/getall", {
//         method: "GET",
//       });
//       const data = await res.json();
//       setData(data.product);
//     } catch (error) {
//       toast.error("Server Error");
//     }
//   };

//   React.useEffect(() => {
//     getRows();
//   }, []);

//   const handleClose = () => setOpen(false);

//   const handleBuy = (product) => {
//     setSelectedProduct(product);
//     setOpen(true);
//     setProduct(product.title);
//     setPrice(product.prize);
//   };

//   const handleShipSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     try {
//       const response = await fetch('/api/order/ship', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ Name, Email, Mobile, Address, Product, Price }),
//       });
//       const result = await response.json();
//       if (result.message === "Order Confirmed Successfully!") {
//         toast.success("Order Confirmed Successfully!");
//         setName("");
//         setEmail("");
//         setAddress("");
//         setMobile("");
//         setProduct("");
//         setPrice("");
//         setOpen(false);
//       } else {
//         toast.error(result.message);
//       }
//     } catch (error) {
//       toast.error("Error confirming order.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <>
//       <IsAuthenticated />
//       <Container sx={containerStyle}>
//         <Box sx={logoContainerStyle}>
//           <Box sx={logoCircleStyle}>
//             <Typography variant="h5">PP</Typography>
//           </Box>
//           <Typography sx={logoTextStyle}>PixelPurchase</Typography>
//         </Box>
//         <Typography variant="h6" align="center" paragraph>
//           Welcome to PixelPurchase! We aim to deliver high-quality products right to your doorstep with just a few clicks. Enjoy a seamless shopping experience with us.
//         </Typography>
//         <Box sx={{ display: "flex", justifyContent: "center", mb: 5 }}>
//           <Button href="/mystore" variant="contained" color="primary">
//             Get Started
//           </Button>
//         </Box>
//         <Box sx={textStyle}>
//           <Typography variant="h5">
//             Explore a variety of products that suit your choice!
//           </Typography>
//         </Box>
//         <Grid container spacing={4} sx={{ py: 5 }}>
//           {data.map((product, index) => (
//             <Grid item key={index} xs={12} sm={6} md={4}>
//               <CardComponent
//                 image={product.imageUrl}
//                 title={product.title}
//                 description={product.description}
//                 price={product.prize}
//                 products={product}
//                 onBuy={handleBuy}
//               />
//             </Grid>
//           ))}
//         </Grid>
//       </Container>
//       <Modal open={open} onClose={handleClose}>
//         <Box sx={modalStyle}>
//           <Typography variant="h5" textAlign="center" mb={2}>
//             Buy Product
//           </Typography>
//           <form onSubmit={handleShipSubmit}>
//             <TextField
//               margin="normal"
//               label="Name"
//               variant="filled"
//               fullWidth
//               value={Name}
//               onChange={(e) => setName(e.target.value)}
//               required
//             />
//             <TextField
//               margin="normal"
//               label="Email"
//               variant="filled"
//               fullWidth
//               value={Email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//             <TextField
//               margin="normal"
//               label="Address"
//               variant="filled"
//               fullWidth
//               value={Address}
//               onChange={(e) => setAddress(e.target.value)}
//               required
//             />
//             <TextField
//               margin="normal"
//               label="Mobile No."
//               variant="filled"
//               type="tel"
//               fullWidth
//               value={Mobile}
//               onChange={(e) => setMobile(e.target.value)}
//               required
//             />
//             <TextField
//               margin="normal"
//               label="Product"
//               variant="filled"
//               fullWidth
//               value={Product}
//               InputProps={{ readOnly: true }}
//             />
//             <TextField
//               margin="normal"
//               label="Product Price"
//               variant="filled"
//               type="number"
//               fullWidth
//               value={Price}
//               InputProps={{ readOnly: true }}
//             />
//             <Button
//               variant="contained"
//               color="primary"
//               type="submit"
//               fullWidth
//               sx={{ mt: 3 }}
//               disabled={loading}
//             >
//               {loading ? <CircularProgress size={24} /> : "Pay for Order"}
//             </Button>
//           </form>
//         </Box>
//       </Modal>
//       <ToastContainer />
//     </>
//   );
// };

// export default Home;






"use client";
import * as React from "react";
import {
  Container,
  TextField,
  Typography,
  Button,
  Box,
  Modal,
  Grid,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CircularProgress
} from "@mui/material";
import { toast, ToastContainer } from "react-toastify";
import { useRouter } from "next/navigation";
import IsAuthenticated from "./user/Auth/page";
import { motion } from "framer-motion";

const logoContainerStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: 3,
  marginTop: 1,
};

const logoCircleStyle = {
  width: 50,
  height: 50,
  borderRadius: "50%",
  backgroundColor: "#3f51b5",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#fff",
  marginRight: 1,
};

const logoTextStyle = {
  fontWeight: "bold",
  fontSize: "2rem",
  color: "#333",
};

const textStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginTop: 6,
  fontWeight: "bold",
  color: "#333",
};

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "1px solid #ddd",
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
  transition: "transform 0.3s ease",
};

const containerStyle = {
  backgroundColor: "#f5f5f5",
  height: "auto",
  padding: "3rem 1rem",
  marginTop:"20px"
};

const CardComponent = ({ image, price, title, description, products, onBuy }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.3 }}
  >
    <Card sx={{ maxWidth: 345, margin: 2, borderRadius: 2, boxShadow: 3 }}>
      <CardMedia component="img" height="140" image={image} alt={title} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          ${price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" color="primary" onClick={() => onBuy(products)}>
          Buy Now
        </Button>
        <Button size="small" color="info">
          Learn More
        </Button>
      </CardActions>
    </Card>
  </motion.div>
);

const Home = () => {
  const [open, setOpen] = React.useState(false);
  const [selectedProduct, setSelectedProduct] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  const [Name, setName] = React.useState("");
  const [Email, setEmail] = React.useState("");
  const [Price, setPrice] = React.useState("");
  const [Address, setAddress] = React.useState("");
  const [Mobile, setMobile] = React.useState("");
  const [Product, setProduct] = React.useState("");
  const [Userid, setUserid] = React.useState("");

  const [data, setData] = React.useState([]);
 
  const getRows = async () => {
    try {

      const res = await fetch("/api/Products/getall", {
        method: "GET",
      });
      const data = await res.json();
      setData(data.product);
    } catch (error) {
      toast.error("Server Error");
    }
  };

  React.useEffect(() => {
    getRows();
  }, []);

  const handleClose = () => setOpen(false);

  const handleBuy = (product) => {
    setSelectedProduct(product);
    setOpen(true);
    setProduct(product.title);
    setPrice(product.prize);
  };

  const handleShipSubmit = async (e) => {
    const user= await sessionStorage.getItem("user");
    if(user){
      setUserid(user)
  
    }
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch('/api/order/ship', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ Userid,Name, Email, Mobile, Address, Product, Price }),
      });
      const result = await response.json();
      if (result.message === "Order Confirmed Successfully!") {
        toast.success("Order Confirmed Successfully!");
        setName("");
        setEmail("");
        setAddress("");
        setMobile("");
        setProduct("");
        setPrice("");
        setOpen(false);
      } else {
        toast.error(result.message);
      }
    } catch (error) {
      toast.error("Error confirming order.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <IsAuthenticated />
      <Container sx={containerStyle}>
        <Box sx={logoContainerStyle}>
          <Box sx={logoCircleStyle}>
            <Typography variant="h5">PP</Typography>
          </Box>
          <Typography sx={logoTextStyle}>PixelPurchase</Typography>
        </Box>
        <Typography variant="h6" align="center" paragraph>
          Welcome to PixelPurchase! Discover a world of high-quality products with just a few clicks. Our mission is to make shopping effortless and enjoyable for you.
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center", mb: 5 }}>
          <Button href="/mystore" variant="contained" color="primary" sx={{ borderRadius: 2 }}>
            Explore Our Store
          </Button>
        </Box>
        <Box sx={textStyle}>
          <Typography variant="h5">
            Browse our latest products tailored for your needs!
          </Typography>
        </Box>
        <Grid container spacing={4} sx={{ py: 5 }}>
          {data.map((product, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <CardComponent
                image={product.imageUrl}
                title={product.title}
                description={product.description}
                price={product.prize}
                products={product}
                onBuy={handleBuy}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
      <Modal open={open} onClose={handleClose}>
        <Box sx={modalStyle}>
          <Typography variant="h5" textAlign="center" mb={2}>
            Purchase Confirmation
          </Typography>
          <form onSubmit={handleShipSubmit}>
            <TextField
              margin="normal"
              label="Name"
              variant="filled"
              fullWidth
              value={Name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <TextField
              margin="normal"
              label="Email"
              variant="filled"
              fullWidth
              value={Email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <TextField
              margin="normal"
              label="Address"
              variant="filled"
              fullWidth
              value={Address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
            <TextField
              margin="normal"
              label="Mobile No."
              variant="filled"
              type="tel"
              fullWidth
              value={Mobile}
              onChange={(e) => setMobile(e.target.value)}
              required
            />
            <TextField
              margin="normal"
              label="Product"
              variant="filled"
              fullWidth
              value={Product}
              InputProps={{ readOnly: true }}
            />
            <TextField
              margin="normal"
              label="Product Price"
              variant="filled"
              type="number"
              fullWidth
              value={Price}
              InputProps={{ readOnly: true }}
            />
            <Button
              variant="contained"
              color="primary"
              type="submit"
              fullWidth
              sx={{ mt: 3 }}
              disabled={loading}
            >
              {loading ? <CircularProgress size={24} /> : "Confirm Purchase"}
            </Button>
          </form>
        </Box>
      </Modal>
      <ToastContainer />
    </>
  );
};

export default Home;
