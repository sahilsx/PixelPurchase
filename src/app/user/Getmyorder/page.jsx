
  


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
import { ToastContainer, toast } from 'react-toastify';
 import 'react-toastify/dist/ReactToastify.css';
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
        toast("Order cancelled successfully");
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
    <ToastContainer />
      <Typography variant="h4" align="center" marginTop={5} marginBottom={3} className="animate__animated animate__fadeIn ">
        My Orders
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {user.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item._id} className="animate__animated animate__fadeIn animate__delay-1s">
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
                     className="animate__animated animate__pulse"
                >
                  Cancel Order
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Dialog open={deleteDialogOpen} onClose={() => setDeleteDialogOpen(false)}  className="animate__animated animate__zoomIn">
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

      
    </>
  );
}
