"use client";
import * as React from "react";
import { Container,
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
  CircularProgress, Dialog, DialogTitle, DialogContent, DialogActions,  } from '@mui/material';
import { styled } from '@mui/material/styles';
import { ToastContainer, toast } from 'react-toastify';
 import 'react-toastify/dist/ReactToastify.css';
// import { useRouter } from 'next/router';
import 'animate.css';
// Define some dummy product data


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
// Styled components
const HeroSection = styled(Box)(({ theme }) => ({
  height: 400,
  backgroundImage: 'url(/images/hero-banner.jpg)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.primary.contrastText,
  textAlign: 'center',
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  '& > div': {
    position: 'relative',
    padding: theme.spacing(2),
  },
}));
const cardstyle={
  display: 'flex',
  flexDirection: 'column',
  borderRadius: 8,
  overflow: 'hidden',
  maxWidth: 345, // Ensures the card has a consistent width
  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)' // Soft shadow for a more modern look



}

const CategoryCard = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  padding: theme.spacing(2),
  border: `1px solid ${theme.palette.divider}`
}));

const ProductCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}));

const ProductImage = styled(CardMedia)({
  height: 400,
  width: '100%',
  objectFit: 'cover',
});

const TestimonialCard = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  border: `1px solid ${theme.palette.divider}`,
  marginBottom: theme.spacing(2),
}));

const NewsletterSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
  backgroundColor: theme.palette.grey[100],
  textAlign: 'center',
}));

export default function Home() {
//   const router = useRouter();

const [opens, setOpens] = React.useState(false); 
const [open, setOpen] = React.useState(false);
  const [selectedProduct, setSelectedProduct] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [Buy, setBuy] = React.useState([]);
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

      const res = await fetch("/api/products/getall");
      const data = await res.json();
      setData(data.product);
    } catch (error) {
      toast.error("Server Error");
    }
  };

  React.useEffect(() => {
    getRows();
  }, []);
  

  const handleOpens = (product) => {
    setSelectedProduct(product)
    setOpens(true);
  };

  const handleCloses = () => {
    setOpens(false);
    
  };








 const handleClose = ()=>{
setOpen(false);








 }









 


  const handleBuy = (product) => {
    setBuy(product)
    setOpens(false)
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
        setName("");
        setEmail("");
        setAddress("");
        setMobile("");
        setProduct("");
        setPrice("");
      if (result.message === "Order Confirmed Successfully!") {
        toast("Order Confirmed Successfully!");
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
   
    <Container marginTop="30">
      {/* Hero Section */}
      <HeroSection className="animate__animated animate__fadeIn animate__infinite animate__slower" >
        <Box>
          <Typography variant="h2">Discover Amazing Products</Typography>
          <Typography variant="h6">Find what you need at unbeatable prices</Typography>
        </Box>
      </HeroSection>

<br backgroundColor="black"></br>
      {/* Featured Categories */}
      <Box    my={4} marginTop={5}>
      <Typography  padding={3} backgroundColor="black" fontWeight={200} color="pink" variant="h4" align="center" gutterBottom>
      Featured Categories
    </Typography>
    <Grid container spacing={4} style={{ marginTop: 20 }} >
      <Grid item xs={12} sm={6} md={4}>
        <CategoryCard className="animate__animated animate__bounceIn  animate__slower" sx={cardstyle}>
          <CardMedia
            component="img"
             image="https://th.bing.com/th/id/R.58d492e2f26df7e9a2fe246f3d363bcd?rik=lEE3WSbO7gG2wg&riu=http%3a%2f%2ftechbeat.com%2fwp-content%2fuploads%2f2013%2f01%2fSmartphone.jpg&ehk=BATf99yB2LxHH7UUWn9DEZqXzIr073JGrX4o%2bhPNHGM%3d&risl=&pid=ImgRaw&r=0"
            alt="Category 1"
            style={{
              height: 300,
              objectFit: 'cover'
            }}
          />
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Mobile phones under 10000
            </Typography>
            <Button
              href="/categories/below10"
              variant="contained"
              color="primary"
              style={{ marginTop: 16, borderRadius: 4 }}
            >
              Shop Now
            </Button>
          </CardContent>
        </CategoryCard>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
      <CategoryCard className="animate__animated animate__bounceIn  animate__slower" sx={cardstyle}>
          <CardMedia
            component="img"
            image="https://th.bing.com/th/id/OIP.pU8gpXE0grJ-rtrZ5c_r6wHaE1?w=1200&h=784&rs=1&pid=ImgDetMain"
            alt="Category 2"
            style={{
              height: 300,
              objectFit: 'cover'
            }}
          />
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Mobile phones under 20000
            </Typography>
            <Button
            href="/categories/below20"
              variant="contained"
              color="primary"
              style={{ marginTop: 16, borderRadius: 4 }}
            >
              Shop Now
            </Button>
          </CardContent>
        </CategoryCard>
      </Grid>
    
          <Grid item xs={12} sm={6} md={4}>
          <CategoryCard className="animate__animated animate__bounceIn  animate__slower" sx={cardstyle}>
          <CardMedia
            component="img"
            image="https://th.bing.com/th/id/OIP.vAk69qVGkALQFeKXrvsZQQHaHa?rs=1&pid=ImgDetMain"
            alt="Category 2"
            style={{
              height: 300,
              objectFit: 'cover'
            }}
          />
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Mobile phones under 30000
            </Typography>
            <Button
               href="/categories/below30"
              variant="contained"
              color="primary"
              style={{ marginTop: 16, borderRadius: 4 }}
            >
              Shop Now
            </Button>
          </CardContent>
        </CategoryCard>
           
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
          <CategoryCard className="animate__animated animate__bounceIn  animate__slower" sx={cardstyle}>
          <CardMedia
            component="img"
            image="https://th.bing.com/th/id/OIP.p5xLlkQOKxRB1JNUayB2iAHaHa?w=600&h=600&rs=1&pid=ImgDetMain"
            alt="Category 2"
            style={{
              height: 300,
              objectFit: 'cover'
            }}
          />
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Mobile phones under 40000
            </Typography>
            <Button
               href="/categories/below40"
              variant="contained"
              color="primary"
              style={{ marginTop: 16, borderRadius: 4 }}
            >
              Shop Now
            </Button>
          </CardContent>
        </CategoryCard>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
          <CategoryCard className="animate__animated animate__bounceIn  animate__slower" sx={cardstyle}>
          <CardMedia
            component="img"
            image="https://th.bing.com/th/id/OIP.ICKF52VZXd_SIUlGxzwtvAHaE9?rs=1&pid=ImgDetMain"
            alt="Category 2"
            style={{
              height: 300,
              objectFit: 'cover'
            }}
          />
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Mobile phones under 50000
            </Typography>
            <Button
             href="/categories/below50"
              variant="contained"
              color="primary"
              style={{ marginTop: 16, borderRadius: 4 }}
            >
              Shop Now
            </Button>
          </CardContent>
        </CategoryCard>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
          <CategoryCard className="animate__animated animate__bounceIn  animate__slower" sx={cardstyle}>
          <CardMedia
            component="img"
            image="https://i.redd.it/2ab8vwlktjv41.jpg"
            alt="Category 2"
            style={{
              height: 300,
              objectFit: 'cover'
            }}
          />
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Mobile phones under 60000
            </Typography>
            <Button
             href="/categories/below60"
              variant="contained"
              color="primary"
              style={{ marginTop: 16, borderRadius: 4 }}
            >
              Shop Now
            </Button>
          </CardContent>
        </CategoryCard>
          </Grid>
         
          
          {/* Add more categories as needed */}
        </Grid>
      </Box>

      {/* Best Sellers */}
      <Box  my={4} marginTop={5}>
        <Typography  padding={3} backgroundColor="black" fontWeight={200} color="pink" variant="h4" align="center">Trendindg Products</Typography>
        <Grid paddingLeft={2} paddingBottom={3} paddingRight={2} container spacing={4} style={{ marginTop: 20 }}>
          {data.map((offer) => (
            <Grid item xs={12} sm={6} md={4} key={offer._id}>
              <ProductCard>
                <ProductImage
                  component="img"
                  image={offer.imageUrl}
                  alt={offer.title}
                />
                <CardContent style={{ textAlign: 'center' }}>
                  <Typography variant="h5">{offer.title}</Typography>
                  <Typography >${offer.prize}</Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handleOpens(offer)}
                  >
                    View Details
                  </Button>
                </CardContent>
              </ProductCard>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Special Offers */}
      <Box className="animate__animated animate__pulse  animate__slower"  backgroundColor="brown" my={4}>
        <Typography padding={3} backgroundColor="black"  fontWeight={200} color="white" variant="h4" align="center">Special Offers</Typography>
        <Grid  paddingLeft={5} paddingBottom={3} paddingRight={5} container spacing={4} style={{ marginTop: 10 }}>
          <Grid item xs={12} md={6}>
            <Card>
              <CardMedia
                component="img"
                image="https://images.pexels.com/photos/5872348/pexels-photo-5872348.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Special Offer 1"
                style={{ height: 400, objectFit: 'cover' }}
              />
              <CardContent>
                <Typography variant="h5"> </Typography>
                <Typography variant="h6"  color="">
                  Don’t miss out on these exclusive discounts!
                  Upto 30%OFF on Products below 30000
                </Typography>
                <Button href="/categories/below30"  variant="contained" color="primary" style={{ marginTop: 10 }}>
                  Shop Now
                </Button>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card>
              <CardMedia
                component="img"
                image="https://images.pexels.com/photos/5935738/pexels-photo-5935738.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Special Offer 2"
                style={{ height: 400, objectFit: 'cover' }}
              />
              <CardContent>
                <Typography variant="h5"></Typography>
                <Typography variant="h6" color="">
                  Don’t miss out on these exclusive discounts!
                  Upto 10%OFF on Products below 10000
                </Typography>
                <Button href="/categories/below10"  variant="contained" color="primary" style={{ marginTop: 10 }}>
                  Shop Now
                </Button>
              </CardContent>
            </Card>
          </Grid>
          {/* Add more offers as needed */}
        </Grid>
      </Box>

      {/* Customer Testimonials */}
      <Box className="animate__animated animate__swing animate__infinite animate__slower" backgroundColor="white"  my={4}>
        <Typography padding={3} backgroundColor="black" fontWeight={200} color="pink" variant="h4" align="center">Customer Testimonials</Typography>
        <Grid  container spacing={4} style={{ marginTop: 20 }}>
          <Grid  item xs={12} md={6}>
            <TestimonialCard>
              <Typography variant="h6">John Doe</Typography>
              <Typography variant="body2" color="textSecondary">
                "This is the best e-commerce site I've ever used. The products are top quality and the service is excellent!"
              </Typography>
            </TestimonialCard>
          </Grid>
          <Grid item xs={12} md={6}>
            <TestimonialCard>
              <Typography variant="h6">Jane Smith</Typography>
              <Typography variant="body2" color="textSecondary">
                "I had a fantastic shopping experience. Fast delivery and great customer support. Highly recommend!"
              </Typography>
            </TestimonialCard>
          </Grid>
          {/* Add more testimonials as needed */}
        </Grid>
      </Box>

      {/* Newsletter Signup */}
      <NewsletterSection>
        <Typography variant="h4">Subscribe to Our Newsletter</Typography>
        <Typography variant="body1" color="textSecondary" style={{ marginBottom: 20 }}>
          Stay updated with the latest news and special offers.
        </Typography>
        <TextField
          label="Enter your email"
          variant="outlined"
          fullWidth
          style={{ marginBottom: 20 }}
        />
        <Button variant="contained" color="primary">
          Subscribe
        </Button>
      </NewsletterSection>



      <Dialog open={opens} onClose={handleCloses} maxWidth="md" fullWidth    className="animate__animated animate__fadeIn  animate__slower"
        >
    <DialogTitle>{selectedProduct.title}</DialogTitle>
    <DialogContent>
      <Box display="flex" flexDirection="row">
        {/* Big Image */}
        <Box flexShrink={0} mr={2}>
          <img src={selectedProduct.imageUrl} alt={selectedProduct.title} style={{ width: '200px', height: '200px', objectFit: 'cover' }} />
        </Box>
        {/* Product Details */}
        <Box flexGrow={1}>
          <Typography variant="h6">Price: ${selectedProduct.prize}</Typography>
          <Typography variant="body1">Description: {selectedProduct.description}</Typography>
         
        </Box>
      </Box>
    </DialogContent>
    <DialogActions>
    <Button variant="contained" onClick={() => handleBuy(selectedProduct)} color="primary">
        Proceed To Buy
      </Button>
      <Button variant="contained" onClick={handleCloses} color="primary">
        Close
      </Button>
    </DialogActions>
  </Dialog>


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
                  setAddress(e.target.value);}}
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
                  setMobile(parseInt(e.target.value, 10));;}}
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








      {/* Footer */}
      <Box py={4} textAlign="center" bgcolor="grey.200">
        <Typography variant="body2" color="textSecondary">
          © {new Date().getFullYear()} My PixelPurchase.com
        </Typography>
      </Box>
    </Container>


  

    </>







);










  
}








