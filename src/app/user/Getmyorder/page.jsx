

// "use client";
// import * as React from "react";
// import PropTypes from "prop-types";
// import {
//   Button,
//   TableHead,
//   Typography,
//   Dialog,
//   DialogActions,
//   DialogContent,
//   DialogContentText,
//   DialogTitle,
//   TextField,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableFooter,
//   TablePagination,
//   TableRow,
//   Paper,
//   Box,
//   IconButton,
// } from "@mui/material";
// import { useTheme } from "@mui/material/styles";


// import DeleteIcon from "@mui/icons-material/Delete";
// import CancelIcon from "@mui/icons-material/Edit";
// import { toast, ToastContainer } from "react-toastify";
// import { useRouter } from 'next/navigation';
// export default function Myorder() {
//     const [user, setuser] = React.useState(null);
//     const [deleteDialogOpen, setDeleteDialogOpen] = React.useState(false);
//     const [cancelid,setcancelid]=React.useState(null);
//     const app = useRouter();;
//     React.useEffect(() => {
//       const fetchOrder = async () => {
//         const userId = sessionStorage.getItem("user");
//         try {
//           const queryString = new URLSearchParams({ Userid: userId }).toString();
//           const res = await fetch(`/api/user/myorder?${queryString}`);
//           if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
//           const data = await res.json();
//           console.log("orderss",data.myorder)
//           const mydata=data.myorder
//           await setuser(mydata)
//           console.log("myuser",user)
//         } catch (error) {
//           console.error("Error fetching data:", error);
//         }
//       };
//       fetchOrder();
//     }, []);
    
//     const handleDelete = async () => {
//       try {
//         const res = await fetch("/api/user/cancel", {
//           method: "DELETE",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({ id: cancelid}),
//         });
//         if (res.ok) {
//           setDeleteDialogOpen(false);
//           setuser(user.filter((users) => users._id !== cancelid));
//           toast.success("Item deleted successfully");
          
//         } else {
//           throw new Error("Failed to delete item");
//         }
//       } catch (error) {
//         console.error("Error deleting item:", error);
//       }
//     };
  
    
       
  
//     if (!user) return <Typography>Loading...</Typography>;
  
//     return (
//       <>
//        <Typography variant="h4" align="center" marginTop={5} marginBottom={3}>
//           MY ORDERS
//         </Typography>
//        <TableContainer >
//         <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
//           <TableHead>
//             <TableRow>      
//               <TableCell style={{ width: 160 }} align="right">
//                 <Typography variant="h6" fontWeight="bold">Email</Typography>
//               </TableCell>
//               <TableCell style={{ width: 160 }} align="right">
//                 <Typography variant="h6" fontWeight="bold">NAME</Typography>
//               </TableCell>
//               <TableCell style={{ width: 160 }} align="right">
//                 <Typography variant="h6" fontWeight="bold">MOBILE NO</Typography>
//               </TableCell>
//               <TableCell style={{ width: 160 }} align="right">
//                 <Typography variant="h6" fontWeight="bold">PRODUCT</Typography>
//               </TableCell>
//               <TableCell style={{ width: 160 }} align="right">
//                 <Typography variant="h6" fontWeight="bold">Price</Typography>
//               </TableCell>
//               <TableCell align="right">
//                 <Typography variant="h6" fontWeight="bold">Actions</Typography>
//               </TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {user.map((users) => (
//               <TableRow key={users._id}>
//                 <TableCell component="th" scope="row">
//                   {users.Email}
//                 </TableCell>
//                 <TableCell style={{ width: 160 }} align="right">
//                   {users.Name}
//                 </TableCell>
//                 <TableCell style={{ width: 160 }} align="right">
//                   {users.Mobile}
//                 </TableCell>
//                 <TableCell style={{ width: 160 }} align="right">
//                   {users.Product}
//                 </TableCell>
               
//                 <TableCell style={{ width: 160 }} align="right">
//                   {users.Price}
//                 </TableCell>
//                 <TableCell align="right">

//                   <Button
//                     variant="contained"
//                     color="primary"
//                     sx={{ borderRadius: 2 }}
//                     onClick={() => {
//                       setcancelid(users._id);
//                       setDeleteDialogOpen(true);
//                     }}
//                   >
//                     Cancel
//                   </Button>
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//           <TableFooter>
//             <TableRow>
//               <TablePagination
               
//               />
//             </TableRow>
//           </TableFooter>
//         </Table>
//       </TableContainer>
  
  
  
//       <Dialog
//         open={deleteDialogOpen}
//         onClose={() => setDeleteDialogOpen(false)}
//       >
//         <DialogTitle>Cancel Order</DialogTitle>
//         <DialogContent>
//           <DialogContentText>
//             Are you sure you want to Cancel Your Order?
//           </DialogContentText>
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={() => setDeleteDialogOpen(false)} color="primary">
//             Cancel
//           </Button>
//           <Button onClick={handleDelete} color="secondary">
//             Cancel Order
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </>






  
  
  
  
      
//     );
//   }



// "use client";
// import * as React from "react";
// import PropTypes from "prop-types";
// import {
//   Button,
//   TableHead,
//   Typography,
//   Dialog,
//   DialogActions,
//   DialogContent,
//   DialogContentText,
//   DialogTitle,
//   TextField,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableFooter,
//   TablePagination,
//   TableRow,
//   Paper,
//   Box,
//   IconButton,
// } from "@mui/material";
// import { useTheme } from "@mui/material/styles";
// import DeleteIcon from "@mui/icons-material/Delete";
// import CancelIcon from "@mui/icons-material/Edit";
// import { toast, ToastContainer } from "react-toastify";
// import { useRouter } from 'next/navigation';

// export default function Myorder() {
//     const [user, setUser] = React.useState(null);
//     const [deleteDialogOpen, setDeleteDialogOpen] = React.useState(false);
//     const [cancelId, setCancelId] = React.useState(null);
//     const app = useRouter();

//     React.useEffect(() => {
//         const fetchOrder = async () => {
//             const userId = sessionStorage.getItem("user");
//             try {
//                 const queryString = new URLSearchParams({ Userid: userId }).toString();
//                 const res = await fetch(`/api/user/myorder?${queryString}`);
//                 if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
//                 const data = await res.json();
//                 setUser(data.myorder);
//             } catch (error) {
//                 console.error("Error fetching data:", error);
//             }
//         };
//         fetchOrder();
//     }, []);

//     const handleDelete = async () => {
//         try {
//             const res = await fetch("/api/user/cancel", {
//                 method: "DELETE",
//                 headers: {
//                     "Content-Type": "application/json",
//                 },
//                 body: JSON.stringify({ id: cancelId }),
//             });
//             if (res.ok) {
//                 setDeleteDialogOpen(false);
//                 setUser(user.filter((item) => item._id !== cancelId));
//                 toast.success("Order cancelled successfully");
//             } else {
//                 throw new Error("Failed to cancel order");
//             }
//         } catch (error) {
//             console.error("Error cancelling order:", error);
//         }
//     };

//     if (!user) return <Typography variant="h6" align="center" marginTop={5}>Loading...</Typography>;

//     return (
//         <>
//             <Typography variant="h4" align="center" marginTop={5} marginBottom={3}>
//                 My Orders
//             </Typography>
//             <TableContainer component={Paper} sx={{ maxWidth: 'lg', marginX: 'auto', marginBottom: 4 }}>
//                 <Table sx={{ minWidth: 650 }} aria-label="custom pagination table">
//                     <TableHead>
//                         <TableRow>
//                             <TableCell align="center">
//                                 <Typography variant="h6" fontWeight="bold">Email</Typography>
//                             </TableCell>
//                             <TableCell align="center">
//                                 <Typography variant="h6" fontWeight="bold">Name</Typography>
//                             </TableCell>
//                             <TableCell align="center">
//                                 <Typography variant="h6" fontWeight="bold">Mobile No</Typography>
//                             </TableCell>
//                             <TableCell align="center">
//                                 <Typography variant="h6" fontWeight="bold">Product</Typography>
//                             </TableCell>
//                             <TableCell align="center">
//                                 <Typography variant="h6" fontWeight="bold">Price</Typography>
//                             </TableCell>
//                             <TableCell align="center">
//                                 <Typography variant="h6" fontWeight="bold">Actions</Typography>
//                             </TableCell>
//                         </TableRow>
//                     </TableHead>
//                     <TableBody>
//                         {user.map((item) => (
//                             <TableRow key={item._id}>
//                                 <TableCell align="center">{item.Email}</TableCell>
//                                 <TableCell align="center">{item.Name}</TableCell>
//                                 <TableCell align="center">{item.Mobile}</TableCell>
//                                 <TableCell align="center">{item.Product}</TableCell>
//                                 <TableCell align="center">{item.Price}</TableCell>
//                                 <TableCell align="center">
//                                     <Button
//                                         variant="contained"
//                                         color="error"
//                                         sx={{ borderRadius: 2 }}
//                                         onClick={() => {
//                                             setCancelId(item._id);
//                                             setDeleteDialogOpen(true);
//                                         }}
//                                     >
//                                         Cancel
//                                     </Button>
//                                 </TableCell>
//                             </TableRow>
//                         ))}
//                     </TableBody>
//                     <TableFooter>
//                         <TableRow>
//                             <TablePagination
//                                 rowsPerPageOptions={[5, 10, 25]}
//                                 component="div"
//                                 count={user.length}
//                                 rowsPerPage={5}
//                                 page={0}
//                                 onPageChange={() => {}}
//                                 onRowsPerPageChange={() => {}}
//                             />
//                         </TableRow>
//                     </TableFooter>
//                 </Table>
//             </TableContainer>

//             <Dialog open={deleteDialogOpen} onClose={() => setDeleteDialogOpen(false)}>
//                 <DialogTitle>Cancel Order</DialogTitle>
//                 <DialogContent>
//                     <DialogContentText>
//                         Are you sure you want to cancel this order?
//                     </DialogContentText>
//                 </DialogContent>
//                 <DialogActions>
//                     <Button onClick={() => setDeleteDialogOpen(false)} color="primary">
//                         Cancel
//                     </Button>
//                     <Button onClick={handleDelete} color="error">
//                         Confirm Cancellation
//                     </Button>
//                 </DialogActions>
//             </Dialog>

//             <ToastContainer />
//         </>
//     );
// }

  


"use client";
import * as React from "react";
import PropTypes from "prop-types";
import {
  Button,
  Card,
  CardContent,
  CardActions,
  Typography,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Box,
  Grid,
  Paper,
} from "@mui/material";
import { toast, ToastContainer } from "react-toastify";
import { useRouter } from 'next/navigation';

export default function Myorder() {
  const [user, setUser] = React.useState(null);
  const [deleteDialogOpen, setDeleteDialogOpen] = React.useState(false);
  const [cancelId, setCancelId] = React.useState(null);
  const app = useRouter();

  React.useEffect(() => {
    const fetchOrder = async () => {
      const userId = sessionStorage.getItem("user");
      try {
        const queryString = new URLSearchParams({ Userid: userId }).toString();
        const res = await fetch(`/api/user/myorder?${queryString}`);
        if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
        const data = await res.json();
        setUser(data.myorder);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchOrder();
  }, []);

  const handleDelete = async () => {
    try {
      const res = await fetch("/api/user/cancel", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: cancelId }),
      });
      if (res.ok) {
        setDeleteDialogOpen(false);
        setUser(user.filter((item) => item._id !== cancelId));
        toast.success("Order cancelled successfully");
      } else {
        throw new Error("Failed to cancel order");
      }
    } catch (error) {
      console.error("Error cancelling order:", error);
    }
  };

  if (!user) return <Typography variant="h6" align="center" marginTop={5}>Loading...</Typography>;

  return (
    <>
      <Typography variant="h4" align="center" marginTop={5} marginBottom={3}>
        My Orders
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {user.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item._id}>
            <Card variant="outlined" sx={{ boxShadow: 3 }}>
              <CardContent>
                <Typography variant="h6" component="div" fontWeight="bold">
                  Email: {item.Email}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Name: {item.Name}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Mobile No: {item.Mobile}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Product: {item.Product}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Price: {item.Price}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  variant="contained"
                  color="error"
                  onClick={() => {
                    setCancelId(item._id);
                    setDeleteDialogOpen(true);
                  }}
                >
                  Cancel Order
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Dialog open={deleteDialogOpen} onClose={() => setDeleteDialogOpen(false)}>
        <DialogTitle>Cancel Order</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to cancel this order?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDeleteDialogOpen(false)} color="primary">
            Cancel
          </Button>
          <Button onClick={handleDelete} color="error">
            Confirm Cancellation
          </Button>
        </DialogActions>
      </Dialog>

      <ToastContainer />
    </>
  );
}
