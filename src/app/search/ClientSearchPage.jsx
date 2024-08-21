




// "use client";
// import * as React from "react";
// import { useSearchParams } from 'next/navigation'; // Correct hook import for Next.js 13+
// import { useEffect, useState } from 'react';
// import { Container, TextField, Typography, Button, Box, Modal, Grid, Card, CardActions, CardContent, CardMedia, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
// import { styled } from '@mui/material/styles';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import 'animate.css'; // Import animate.css

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

// const ProductCard = styled(Card)(({ theme }) => ({
//   display: 'flex',
//   flexDirection: 'column',
//   alignItems: 'center',
//   transition: 'transform 0.3s ease-in-out',
//   '&:hover': {
//     transform: 'scale(1.05)',
//   },
// }));

// const ProductImage = styled(CardMedia)({
//   height: 400,
//   width: '100%',
//   objectFit: 'cover',
// });

// const SearchPage = () => {
//   const searchParams = useSearchParams();
//   const query = searchParams.get('search'); // Get search query from URL
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [Buy, setBuy] = React.useState([]);
//   const [Name, setName] = React.useState("");
//   const [Email, setEmail] = React.useState("");
//   const [Price, setPrice] = React.useState("");
//   const [Address, setAddress] = React.useState("");
//   const [Mobile, setMobile] = React.useState("");
//   const [Product, setProduct] = React.useState("");
//   const [Userid, setUserid] = React.useState("");
//   console.log("query", query)

//   const handleBuy = (product) => {
//     setBuy(product)
//     setOpens(false)
//     setOpen(true);
//     setProduct(product.title);
//     setPrice(product.prize);
//   };

//   const handleShipSubmit = async (e) => {
//     const user = await sessionStorage.getItem("user");
//     if (user) {
//       setUserid(user)
//     }
//     e.preventDefault();
//     setLoading(true);
//     try {
//       const response = await fetch('/api/order/ship', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ Userid, Name, Email, Mobile, Address, Product, Price }),
//       });
//       const result = await response.json();
//       if (result.message === "Order Confirmed Successfully!") {
//         toast("Order Confirmed Successfully!");
//         setName("");
//         setEmail("");
//         setAddress("");
//         setMobile("");
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

//   const handleOpens = (product) => {
//     setSelectedProduct(product)
//     setOpens(true);
//   };

//   const handleCloses = () => {
//     setOpens(false);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   }

//   const [opens, setOpens] = React.useState(false);
//   const [open, setOpen] = React.useState(false);
//   const [selectedProduct, setSelectedProduct] = React.useState([]);

//   useEffect(() => {
//     if (query) {
//       // Fetch search results from your API
//       fetch(`/api/Products/search?query=${query}`)
//         .then(response => {
//           if (!response.ok) {
//             throw new Error('Network response was not ok');
//           }
//           return response.json(); // Parse the response as JSON
//         })
//         .then(data => {
//           setProducts(data);
//           console.log("data", data) // Update state with the fetched data
//           setLoading(false);
//         })
//         .catch(error => {
//           console.error('Error fetching search results:', error);
//           setLoading(false);
//         });
//     } else {
//       // Handle case where there is no query parameter
//       setProducts([]);
//       setLoading(false);
//     }
//   }, [query]);

//   return (
//     <>
//       <ToastContainer />
//       <Container>
//         <Typography variant="h6" gutterBottom>
//           Search Results for "{query}"
//         </Typography>

//         <Box my={4}>
//           <Typography variant="h6" align="center">EXPLORE MORE</Typography>
//           <Grid container spacing={4} style={{ marginTop: 20 }}>
//             {products.length > 0 ? (
//               products.map((offer) => (
//                 <Grid item xs={12} sm={6} md={4} key={offer._id} className="animate__animated animate__fadeIn">
//                   <ProductCard className="animate__animated animate__fadeIn animate__delay-1s">
//                     <ProductImage
//                       component="img"
//                       image={offer.imageUrl}
//                       alt={offer.title}
//                     />
//                     <CardContent style={{ textAlign: 'center' }}>
//                       <Typography variant="h5">{offer.title}</Typography>
//                       <Typography variant="h6">${offer.prize}</Typography>
//                       <Button
//                         variant="contained"
//                         color="primary"
//                         onClick={() => handleOpens(offer)}
//                       >
//                         View Details
//                       </Button>
//                     </CardContent>
//                   </ProductCard>
//                 </Grid>
//               ))) : (
//               <Typography variant="h6" className="animate__animated animate__fadeIn animate__delay-2s">No products found</Typography>
//             )}
//           </Grid>
//         </Box>

//         <Dialog open={opens} onClose={handleCloses} maxWidth="md" fullWidth className="animate__animated animate__fadeIn">
//           <DialogTitle>{selectedProduct.title}</DialogTitle>
//           <DialogContent>
//             <Box display="flex" flexDirection="row">
//               {/* Big Image */}
//               <Box flexShrink={0} mr={2}>
//                 <img src={selectedProduct.imageUrl} alt={selectedProduct.title} style={{ width: '200px', height: '200px', objectFit: 'cover' }} />
//               </Box>
//               {/* Product Details */}
//               <Box flexGrow={1}>
//                 <Typography variant="h6">Price: ${selectedProduct.prize}</Typography>
//                 <Typography variant="body1">Description: {selectedProduct.description}</Typography>
//               </Box>
//             </Box>
//           </DialogContent>
//           <DialogActions>
//             <Button variant="contained" onClick={() => handleBuy(selectedProduct)} color="primary">
//               Proceed To Buy
//             </Button>
//             <Button variant="contained" onClick={handleCloses} color="primary">
//               Close
//             </Button>
//           </DialogActions>
//         </Dialog>

//         <Modal
//           open={open}
//           onClose={handleClose}
//           aria-labelledby="modal-modal-title"
//           aria-describedby="modal-modal-description"
//           className="animate__animated animate__fadeIn"
//         >
//           <Box sx={style}>
//             <Typography variant="h5" textAlign={"center"}>
//               Buy Product
//             </Typography>
//             <form onSubmit={handleShipSubmit}>
//               <TextField
//                 margin="normal"
//                 id="filled-basic"
//                 label="Name"
//                 variant="filled"
//                 name="Name"
//                 fullWidth
//                 value={Name}
//                 onChange={(e) => setName(e.target.value)}
//               />
//               <TextField
//                 margin="normal"
//                 id="filled-basic"
//                 label="Email"
//                 variant="filled"
//                 name="Email"
//                 value={Email}
//                 fullWidth
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//               <TextField
//                 margin="normal"
//                 id="filled-basic"
//                 label="Address"
//                 name="Address"
//                 variant="filled"
//                 fullWidth
//                 value={Address}
//                 onChange={(e) => setAddress(e.target.value)}
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
//                 onChange={(e) => setMobile(parseInt(e.target.value, 10))}
//               />
//               <TextField
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
//       </Container>
//     </>
//   );
// };

// export default SearchPage;




// "use client";
// import * as React from "react";
// import { useSearchParams } from 'next/navigation'; // Correct hook import for Next.js 13+
// import { useEffect, useState } from 'react';
// import { Box, Typography, Button, Grid, Card, CardContent, CardMedia, Dialog, DialogTitle, DialogContent, DialogActions, Modal, TextField } from '@mui/material';
// import { styled } from '@mui/material/styles';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import 'animate.css'; // Import animate.css

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

// const ProductCard = styled(Card)(({ theme }) => ({
//   display: 'flex',
//   flexDirection: 'column',
//   alignItems: 'center',
//   transition: 'transform 0.3s ease-in-out',
//   '&:hover': {
//     transform: 'scale(1.05)',
//   },
// }));

// const ProductImage = styled(CardMedia)({
//   height: 400,
//   width: '100%',
//   objectFit: 'cover',
// });

// const ProductDetails = () => {
//   const searchParams = useSearchParams();
//   const query = searchParams.get('search'); // Get search query from URL
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [Buy, setBuy] = React.useState([]);
//   const [Name, setName] = React.useState("");
//   const [Email, setEmail] = React.useState("");
//   const [Price, setPrice] = React.useState("");
//   const [Address, setAddress] = React.useState("");
//   const [Mobile, setMobile] = React.useState("");
//   const [Product, setProduct] = React.useState("");
//   const [Userid, setUserid] = React.useState("");
//   const [opens, setOpens] = React.useState(false);
//   const [open, setOpen] = React.useState(false);
//   const [selectedProduct, setSelectedProduct] = React.useState([]);

//   useEffect(() => {
//     if (query) {
//       // Fetch search results from your API
//       fetch(`/api/Products/search?query=${query}`)
//         .then(response => {
//           if (!response.ok) {
//             throw new Error('Network response was not ok');
//           }
//           return response.json(); // Parse the response as JSON
//         })
//         .then(data => {
//           setProducts(data);
//           console.log("data", data) // Update state with the fetched data
//           setLoading(false);
//         })
//         .catch(error => {
//           console.error('Error fetching search results:', error);
//           setLoading(false);
//         });
//     } else {
//       // Handle case where there is no query parameter
//       setProducts([]);
//       setLoading(false);
//     }
//   }, [query]);

//   const handleBuy = (product) => {
//     setBuy(product)
//     setOpens(false)
//     setOpen(true);
//     setProduct(product.title);
//     setPrice(product.prize);
//   };

//   const handleShipSubmit = async (e) => {
//     e.preventDefault();
//     const user = await sessionStorage.getItem("user");
//     if (user) {
//       setUserid(user)
//     }
//     setLoading(true);
//     try {
//       const response = await fetch('/api/order/ship', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ Userid, Name, Email, Mobile, Address, Product, Price }),
//       });
//       const result = await response.json();
//       if (result.message === "Order Confirmed Successfully!") {
//         toast("Order Confirmed Successfully!");
//         setName("");
//         setEmail("");
//         setAddress("");
//         setMobile("");
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

//   const handleOpens = (product) => {
//     setSelectedProduct(product)
//     setOpens(true);
//   };

//   const handleCloses = () => {
//     setOpens(false);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   }

//   return (
//     <>
//       <ToastContainer />
//       <Box my={4}>
//         <Typography variant="h6" align="center">EXPLORE MORE</Typography>
//         <Grid container spacing={4} style={{ marginTop: 20 }}>
//           {products.length > 0 ? (
//             products.map((offer) => (
//               <Grid item xs={12} sm={6} md={4} key={offer._id} className="animate__animated animate__fadeIn">
//                 <ProductCard className="animate__animated animate__fadeIn animate__delay-1s">
//                   <ProductImage
//                     component="img"
//                     image={offer.imageUrl}
//                     alt={offer.title}
//                   />
//                   <CardContent style={{ textAlign: 'center' }}>
//                     <Typography variant="h5">{offer.title}</Typography>
//                     <Typography variant="h6">${offer.prize}</Typography>
//                     <Button
//                       variant="contained"
//                       color="primary"
//                       onClick={() => handleOpens(offer)}
//                     >
//                       View Details
//                     </Button>
//                   </CardContent>
//                 </ProductCard>
//               </Grid>
//             ))) : (
//             <Typography variant="h6" className="animate__animated animate__fadeIn animate__delay-2s">No products found</Typography>
//           )}
//         </Grid>
//       </Box>

//       <Dialog open={opens} onClose={handleCloses} maxWidth="md" fullWidth className="animate__animated animate__fadeIn">
//         <DialogTitle>{selectedProduct.title}</DialogTitle>
//         <DialogContent>
//           <Box display="flex" flexDirection="row">
//             {/* Big Image */}
//             <Box flexShrink={0} mr={2}>
//               <img src={selectedProduct.imageUrl} alt={selectedProduct.title} style={{ width: '200px', height: '200px', objectFit: 'cover' }} />
//             </Box>
//             {/* Product Details */}
//             <Box flexGrow={1}>
//               <Typography variant="h6">Price: ${selectedProduct.prize}</Typography>
//               <Typography variant="body1">Description: {selectedProduct.description}</Typography>
//             </Box>
//           </Box>
//         </DialogContent>
//         <DialogActions>
//           <Button variant="contained" onClick={() => handleBuy(selectedProduct)} color="primary">
//             Proceed To Buy
//           </Button>
//           <Button variant="contained" onClick={handleCloses} color="primary">
//             Close
//           </Button>
//         </DialogActions>
//       </Dialog>

//       <Modal
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="modal-modal-title"
//         aria-describedby="modal-modal-description"
//         className="animate__animated animate__fadeIn"
//       >
//         <Box sx={style}>
//           <Typography variant="h5" textAlign={"center"}>
//             Buy Product
//           </Typography>
//           <form onSubmit={handleShipSubmit}>
//             <TextField
//               margin="normal"
//               id="filled-basic"
//               label="Name"
//               variant="filled"
//               name="Name"
//               fullWidth
//               value={Name}
//               onChange={(e) => setName(e.target.value)}
//             />
//             <TextField
//               margin="normal"
//               id="filled-basic"
//               label="Email"
//               variant="filled"
//               name="Email"
//               value={Email}
//               fullWidth
//               onChange={(e) => setEmail(e.target.value)}
//             />
//             <TextField
//               margin="normal"
//               id="filled-basic"
//               label="Address"
//               name="Address"
//               variant="filled"
//               fullWidth
//               value={Address}
//               onChange={(e) => setAddress(e.target.value)}
//             />
//             <TextField
//               margin="normal"
//               id="filled-basic"
//               label="Mobile No."
//               name="Mobile"
//               type="number"
//               variant="filled"
//               fullWidth
//               value={Mobile}
//               onChange={(e) => setMobile(parseInt(e.target.value, 10))}
//             />
//             <TextField
//               margin="normal"
//               id="filled-basic"
//               label="Product"
//               variant="filled"
//               name="Product"
//               fullWidth
//               value={Product}
//             />
//             <TextField
//               margin="normal"
//               id="filled-basic"
//               label="Product Price"
//               name="Price"
//               variant="filled"
//               fullWidth
//               type="number"
//               value={Price}
//             />
//             <Button
//               variant="contained"
//               color="primary"
//               type="submit"
//               fullWidth
//               sx={{ mt: 3, mb: 2 }}
//               disabled={loading}
//             >
//               Pay for Order
//             </Button>
//           </form>
//         </Box>
//       </Modal>
//     </>
//   );
// };

// export default ProductDetails;

"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams } from 'next/navigation'; // Correct hook import for Next.js 13+
import { Box, Typography, Button, Grid, Card, CardContent, CardMedia, Dialog, DialogTitle, DialogContent, DialogActions, Modal, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'animate.css'; // Import animate.css

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

const ProductCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.05)',
  },
}));

const ProductImage = styled(CardMedia)({
  height: 400,
  width: '100%',
  objectFit: 'cover',
});

const ClientSearchPage = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get('search'); // Get search query from URL
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [Buy, setBuy] = React.useState([]);
  const [Name, setName] = React.useState("");
  const [Email, setEmail] = React.useState("");
  const [Price, setPrice] = React.useState("");
  const [Address, setAddress] = React.useState("");
  const [Mobile, setMobile] = React.useState("");
  const [Product, setProduct] = React.useState("");
  const [Userid, setUserid] = React.useState("");
  const [opens, setOpens] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [selectedProduct, setSelectedProduct] = React.useState([]);

  useEffect(() => {
    if (query) {
      // Fetch search results from your API
      fetch(`/api/products/search?query=${query}`)
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json(); // Parse the response as JSON
        })
        .then(data => {
          setProducts(data);
          console.log("data", data); // Update state with the fetched data
          setLoading(false);
        })
        .catch(error => {
          console.error('Error fetching search results:', error);
          setLoading(false);
        });
    } else {
      // Handle case where there is no query parameter
      setProducts([]);
      setLoading(false);
    }
  }, [query]);

  const handleBuy = (product) => {
    setBuy(product);
    setOpens(false);
    setOpen(true);
    setProduct(product.title);
    setPrice(product.prize);
  };

  const handleShipSubmit = async (e) => {
    e.preventDefault();
    let userId;
  if (typeof window !== 'undefined') {
    userId = sessionStorage.getItem("user");
  }

  if (userId) {
    setUserid(userId);
  }
    setLoading(true);
    try {
      const response = await fetch('/api/order/ship', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ Userid, Name, Email, Mobile, Address, Product, Price }),
      });
      const result = await response.json();
      if (result.message === "Order Confirmed Successfully!") {
        toast("Order Confirmed Successfully!");
        setName("");
        setEmail("");
        setAddress("");
        setMobile("");
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

  const handleOpens = (product) => {
    setSelectedProduct(product);
    setOpens(true);
  };

  const handleCloses = () => {
    setOpens(false);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <ToastContainer />
      <Box my={4}>
        <Typography variant="h6" align="center">EXPLORE MORE</Typography>
        <Grid container spacing={4} style={{ marginTop: 20 }}>
          {products.length > 0 ? (
            products.map((offer) => (
              <Grid item xs={12} sm={6} md={4} key={offer._id} className="animate__animated animate__fadeIn">
                <ProductCard className="animate__animated animate__fadeIn animate__delay-1s">
                  <ProductImage
                    component="img"
                    image={offer.imageUrl}
                    alt={offer.title}
                  />
                  <CardContent style={{ textAlign: 'center' }}>
                    <Typography variant="h5">{offer.title}</Typography>
                    <Typography variant="h6">${offer.prize}</Typography>
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
            ))
          ) : (
            <Typography variant="h6" className="animate__animated animate__fadeIn animate__delay-2s">No products found</Typography>
          )}
        </Grid>
      </Box>

      <Dialog open={opens} onClose={handleCloses} maxWidth="md" fullWidth className="animate__animated animate__fadeIn">
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

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="animate__animated animate__fadeIn"
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
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              margin="normal"
              id="filled-basic"
              label="Email"
              variant="filled"
              name="Email"
              value={Email}
              fullWidth
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              margin="normal"
              id="filled-basic"
              label="Address"
              name="Address"
              variant="filled"
              fullWidth
              value={Address}
              onChange={(e) => setAddress(e.target.value)}
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
              onChange={(e) => setMobile(parseInt(e.target.value, 10))}
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

export default ClientSearchPage;
