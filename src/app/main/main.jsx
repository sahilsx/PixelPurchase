"use client";
import * as React from "react";
import { Container, Grid, Typography, Card, CardContent, CardMedia, Button, Box, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
// import { useRouter } from 'next/router';

// Define some dummy product data
const products = [
  {
    id: 1,
    name: 'Product 1',
    description: 'This is a short description of Product 1.',
    price: '$29.99',
    image: '/images/product1.jpg'
  },
  {
    id: 2,
    name: 'Product 2',
    description: 'This is a short description of Product 2.',
    price: '$49.99',
    image: '/images/product2.jpg'
  },
  // Add more products as needed
];

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
  border: `1px solid ${theme.palette.divider}`,
}));

const ProductCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}));

const ProductImage = styled(CardMedia)({
  height: 200,
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















  const handleProductClick = (id) => {
    // router.push(`/product/${id}`);
  };

  return (
    <Container>
      {/* Hero Section */}
      <HeroSection>
        <Box>
          <Typography variant="h2">Discover Amazing Products</Typography>
          <Typography variant="h6">Find what you need at unbeatable prices</Typography>
        </Box>
      </HeroSection>

      {/* Featured Categories */}
      <Box my={4}>
      <Typography variant="h4" align="center" gutterBottom>
      Featured Categories
    </Typography>
    <Grid container spacing={4} style={{ marginTop: 20 }} >
      <Grid item xs={12} sm={6} md={4}>
        <CategoryCard sx={cardstyle}>
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
      <CategoryCard sx={cardstyle}>
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
          <CategoryCard sx={cardstyle}>
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
          <CategoryCard sx={cardstyle}>
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
          <CategoryCard sx={cardstyle}>
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
          <CategoryCard sx={cardstyle}>
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
      <Box my={4}>
        <Typography variant="h4" align="center">Best Sellers</Typography>
        <Grid container spacing={4} style={{ marginTop: 20 }}>
          {data.map((offer) => (
            <Grid item xs={12} sm={6} md={4} key={offer._id}>
              <ProductCard>
                <ProductImage
                  component="img"
                  image={offer.imageUrl}
                  alt={offer.name}
                />
                <CardContent style={{ textAlign: 'center' }}>
                  <Typography variant="h5">{offer.name}</Typography>
                  <Typography variant="body2" color="textSecondary">
                    {offer.description}
                  </Typography>
                  <Typography variant="h6">${offer.prize}</Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handleProductClick(offer)}
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
      <Box my={4}>
        <Typography variant="h4" align="center">Special Offers</Typography>
        <Grid container spacing={4} style={{ marginTop: 20 }}>
          <Grid item xs={12} md={6}>
            <Card>
              <CardMedia
                component="img"
                image="https://images.pexels.com/photos/5872348/pexels-photo-5872348.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Special Offer 1"
                style={{ height: 300, objectFit: 'cover' }}
              />
              <CardContent>
                <Typography variant="h5">Offer 1</Typography>
                <Typography variant="h6"  color="textSecondary">
                  Don’t miss out on these exclusive discounts!
                  Upto 30%OFF on Products below 30000
                </Typography>
                <Button variant="contained" color="primary" style={{ marginTop: 10 }}>
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
                style={{ height: 300, objectFit: 'cover' }}
              />
              <CardContent>
                <Typography variant="h5">Offer 2</Typography>
                <Typography variant="h6" color="textSecondary">
                  Don’t miss out on these exclusive discounts!
                  Upto 10%OFF on Products below 10000
                </Typography>
                <Button variant="contained" color="primary" style={{ marginTop: 10 }}>
                  Shop Now
                </Button>
              </CardContent>
            </Card>
          </Grid>
          {/* Add more offers as needed */}
        </Grid>
      </Box>

      {/* Customer Testimonials */}
      <Box my={4}>
        <Typography variant="h4" align="center">Customer Testimonials</Typography>
        <Grid container spacing={4} style={{ marginTop: 20 }}>
          <Grid item xs={12} md={6}>
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

      {/* Footer */}
      <Box py={4} textAlign="center" bgcolor="grey.200">
        <Typography variant="body2" color="textSecondary">
          © {new Date().getFullYear()} My PixelPurchase.com
        </Typography>
      </Box>
    </Container>
  );
}
