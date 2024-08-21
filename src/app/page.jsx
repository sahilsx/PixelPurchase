





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
import Main from "../app/main/main"
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
    className="animate__animated animate__fadeIn"
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
 
  
  

  return (
    <>
     
      <ToastContainer />
      <Container className="animate__animated animate__fadeIn" sx={containerStyle}>
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
          <Button  className="animate__animated animate__rubberBand  animate__infinite animate__slower animate__delay-2s" href="/mystore" variant="contained" color="primary" sx={{ borderRadius: 2 }}>
            Explore Our Store
          </Button>
        </Box>
        <Box sx={textStyle}>
          <Typography variant="h5">
            Browse our latest products tailored for your needs!
          </Typography>
        </Box>
        
      </Container>
      <Modal open={open} onClose={handleClose}>
        <Box className="animate__animated animate__zoomIn animate__slower" sx={modalStyle}>
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
      <br></br>
     <Main/>
    </>
  );
};

export default Home;

