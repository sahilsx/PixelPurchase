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
import { toast, ToastContainer } from "react-toastify";
import { useRouter } from "next/navigation";
import IsAuthenticated from "../user/Auth/page";
import { ConstructionOutlined } from "@mui/icons-material";


const textStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginTop: 6,
  fontWeight: "bolder",
  fontSize:"30px"
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

const Store = () => {
  const [open, setOpen] = React.useState(false);
  const [selectedProduct, setSelectedProduct] = React.useState([]);
  const [loading , setLoading ] = React.useState(false);








  const [Name, setName] = React.useState("");
  const [Email, setEmail] = React.useState("");
  const [Price, setPrice] = React.useState(0);
  const [Address, setaddress] = React.useState("");
  const [Mobile, setmobile] = React.useState(0);
  const [Product, setProduct] = React.useState("");
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
 setProduct(selectedProduct.title)
 setPrice(selectedProduct.prize)

}
async function handleShipSubmit(e) {
  try {

    e.preventDefault();
    // const formData = new FormData();
    // formData.append("Name", Name);
    // formData.append("Email", Email);
    // formData.append("Mobile", Mobile);
    // formData.append("Address", Address);
    // formData.append("Product", Product);
    // formData.append("Price", Price);






    
    const response = await fetch('/api/order/ship', {
      method: 'POST',
      // body:(formData),
                headers: {
                    'Content-Type': 'application/json',
                },
    body: JSON.stringify({"Name":Name,"Email":Email,"Mobile":Mobile,"Address":Address,"Product":Product,"Price":Price}








    ),
    });
    const result = await response.json();
   
    if (result .message === "Order Confirmed Succesfully!") {
      toast.success("Order Confirmed Succesfully!");
      setName("")
      setEmail("")
      setPrice("")
      setProduct("")
      setmobile("")
      setaddress("")

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
      

      

      <Box sx={textStyle}>
        <Typography variant="h4" align="center" color="black">
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




      <ToastContainer />

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
                value={Name}
                onChange={(e) => {
                  setName(e.target.value);}}
           
               
              />
             
             <TextField
                margin="normal"
                id="filled-basic"
                label="Email"
                variant="filled"
                name="Email"
                value={Email}
                fullWidth
                onChange={(e) => {
                  setEmail(e.target.value);}}
              />


             <TextField
                margin="normal"
                id="filled-basic"
                label="Address"
                name="Address"
                variant="filled"
                fullWidth
                value={Address}
                onChange={(e) => {
                  setaddress(e.target.value);}}
              />








              <TextField
                margin="normal"
                id="filled-basic"
                label="Mobile No."
                name="Mobile"
                type="number"
                variant="filled"
                fullWidth
                value={Mobile}
                onChange={(e) => {
                  setmobile(parseInt(e.target.value, 10));;}}
              />
             


             <TextField
                margin="normal"
                id="filled-basic"
                label="Product"
                variant="filled"
                name="Product"
                fullWidth
                value={Product}

              />
             
              <TextField
                margin="normal"
                id="filled-basic"
                label="Product Price"
                name="Price"
                variant="filled"
                fullWidth
                type="number"
                value={Price}
               
              />
             
            

              <Button
                variant="contained"
                color="primary"
                type="submit"
                fullWidth
                sx={{ mt: 3, mb: 2 }}
                disabled={loading}
              >
                Pay for Order
              </Button>

            </form>
          </Box>
        </Modal>
















    </>
  );
};

export default Store;
