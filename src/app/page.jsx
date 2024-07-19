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
} from "@mui/material";

import { useRouter } from "next/navigation";
import IsAuthenticated from "./user/Auth/page";

const logoContainerStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: 3,
  marginTop: 7,
};
const logoCircleStyle = {
  marginTop: 5,
  width: 45,
  height: 45,
  borderRadius: "50%",
  backgroundColor: "purple",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#fff",
  marginRight: 0.5,
};

const logoTextStyle = {
  marginTop: 5,
  fontWeight: "bold",
  fontSize: "1.5rem",
  Color: "black",
};
const lineStyle = {
  width: "100%",
  height: "2px",
  marginTop: 6,
  backgroundColor: " black",
};

const textStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginTop: 6,
  fontWeight: "bolder",
};
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Home = () => {
  const [open, setOpen] = React.useState(false);
  const [selectedProduct, setSelectedProduct] = React.useState([]);
  const [loading , setLoading ] = React.useState(false);
  //  const app =useRouter();
  //   const token = sessionStorage.getItem("token");
  //  React.useEffect(() => {

  //     if (!token) {
  //       app.push("/user/login")
  //     }
  //   }, [token ]);
  //   console.log("token",token)

  const [data, setData] = React.useState([]);

  const getRows = async () => {
    try {
      const res = await fetch("/api/Products/getall", {
        method: "GET",
      });
      const data = await res.json();
      const product = data.product;
      setData(product);

      console.log(product);
    } catch (error) {
      console.log(error);
      toast.error("server Error");
    }
  };

  React.useEffect(() => {
    getRows();
  }, []);

const handleClose = () => setOpen(false);
const Handleship= async(products)=>{
 setOpen(true)
 setSelectedProduct(products)
 


}
async function handleShipSubmit(e) {
  try {
    e.preventDefault();
    const response = await fetch('/api/order/ship', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(selectedProduct),
    });
    const result = await response.json();
    console.log("result",result)
    if (response.ok) {
     
    } else {
      console.error(result.message);
    }
  } catch (error) {
    console.error('Error updating trip:', error);
  }
};

const handleChange = (e) => {
  const { name, value } = e.target;
  setSelectedProduct((prevData) => ({ ...prevData, [name]: value }));
};


  const CardComponent = ({ image, price, title, description,products }) => {
    return (
      <Card sx={{ maxWidth: 345, margin: 2 }}>
        <CardMedia component="img" height="140" image={image} alt={title} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>

          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            {price}
          </Typography>
        </CardContent>
        <CardActions>
          <Button onClick={() => Handleship(products)} size="large">Buy</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    );
  };

  return (
    <>
      <IsAuthenticated />
      <Container maxWidth="md" sx={{}}>
        <Box sx={logoContainerStyle}>
          <Box sx={logoCircleStyle}>
            <Typography variant="h5">PP</Typography>
          </Box>
          <Typography sx={logoTextStyle}>PixelPurchase</Typography>
        </Box>
        <Typography variant="h5" align="center" color="textSecondary" paragraph>
          Welcome to PixelPurchase! At PixelPurchase, we believe in the power of
          simplicity and convenience. Founded in 2024, our mission has always
          been to bring high-quality products directly to your doorstep with
          just a few clicks. We are passionate about making your shopping
          experience enjoyable, seamless, and rewarding.
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            marginTop: 2,
            marginBottom: 2,
          }}
        >
          <Button variant="contained" color="primary">
            Get Started
          </Button>
        </Box>
      </Container>

      <Box sx={lineStyle}></Box>

      <Box sx={textStyle}>
        <Typography variant="h5" align="center" color="black">
          Explore a variety of Products that suit your choice !
        </Typography>
      </Box>

      <Container sx={{ py: 5 }}>
        <Grid container spacing={4}>
          {data.map((products, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <CardComponent
                image={products.imageUrl}
                title={products.title}
                description={products.description}
                price={products.prize}
                products={products}
              />
            </Grid>
          ))}
        </Grid>
      </Container>






      <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography variant="h5" textAlign={"center"}>
              Buy Product
            </Typography>
            |
            <form onSubmit={handleShipSubmit}>
              <TextField
                margin="normal"
                id="filled-basic"
                label="Name"
                variant="filled"
                name="Name"
                fullWidth
                onChange={handleChange}
           
               
              />
             
             <TextField
                margin="normal"
                id="filled-basic"
                label="Email"
                variant="filled"
                name="Email"
                fullWidth
                onChange={handleChange}
              />


             <TextField
                margin="normal"
                id="filled-basic"
                label="Address"
                name="Address"
                variant="filled"
                fullWidth
                onChange={handleChange}
              />








              <TextField
                margin="normal"
                id="filled-basic"
                label="Mobile No."
                name="Mobile"
                type="number"
                variant="filled"
                fullWidth
                onChange={handleChange}
              />
             


             <TextField
                margin="normal"
                id="filled-basic"
                label="Product"
                variant="filled"
                name="Product"
                fullWidth
                value={selectedProduct.title}
                onChange={handleChange}
              />
             
              <TextField
                margin="normal"
                id="filled-basic"
                label="Product Price"
                name="Price"
                variant="filled"
                fullWidth
                type="number"
                value={selectedProduct.prize}
                onChange={handleChange}
              />
             
            

              <Button
                variant="contained"
                color="primary"
                type="submit"
                fullWidth
                sx={{ mt: 3, mb: 2 }}
                disabled={loading}
              >
                Buy Product
              </Button>

            </form>
          </Box>
        </Modal>
















    </>
  );
};

export default Home;
