


"use client";

import * as React from "react";
import {
  Box,
  Button,
  Container,
  Modal,
  TextField,
  Typography,
  Grid,
  Card,
  CardContent,
  IconButton,
} from "@mui/material";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DataTable from "../Table/table";
import ShipTable from "../shiptable/tabii";
import IsaAuthenticated from "../aAuth/page";
import { Add as AddIcon } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";
import UserTable from"../getusers/usertable";
const AdminDashboard = () => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const [title, setTitle] = React.useState("");
  const [description, setDesciption] = React.useState("");
  const [prize, setPrice] = React.useState("");
  const [image, setImage] = React.useState(null);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleImage = (e) => {
    const file = e.target.files?.[0]; // incoming selected file ....first one
    const reader = new FileReader(); // creating an instance of file reader
    reader.readAsDataURL(file);
    reader.onload = () => {
      if (reader.readyState === 2) {
        setImage(reader.result);
      }
    };
  };

  async function handleSubmit(e) {
    try {
      setLoading(true);
      e.preventDefault();

      const formData = new FormData();
      formData.append("title", title);
      formData.append("description", description);
      formData.append("prize", prize);
      formData.append("image", image);
      console.log("formss",formData)

      const res = await fetch("/api/products/Product", {
        
        body: formData,
      });

      const data = await res.json();
      console.log("data", data);

      if (data.message === "Product saved Successfully") {
        toast("Product saved Successfully");
        setTitle("");
        setDesciption("");
        setPrice("");
        setImage(null);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Some Error, Kindly Try again");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <IsaAuthenticated />
      <ToastContainer />
      <Container maxWidth="lg" sx={{ marginTop: 4, marginBottom: 4 }}>
        <Typography variant="h3" align="center" gutterBottom>
          Admin Dashboard
        </Typography>

        <Box display="flex" justifyContent="center" mb={4}>
          <Button
            variant="contained"
            color="primary"
            startIcon={<AddIcon />}
            onClick={handleOpen}
            sx={{ boxShadow: 3 }}
          >
            Add Product
          </Button>
        </Box>

        <Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box
    sx={{
      margin: "30px auto",
      width: { xs: '90%', sm: 500 }, // Responsive width
      borderRadius: 2,
      boxShadow: 10,
      backgroundColor: "white",
      padding: 4, // Added padding inside the modal for better spacing
    }}
  >
    <Typography variant="h5" textAlign="center" mb={3}>
      Add Product
    </Typography>
    <form onSubmit={handleSubmit}>
      <TextField
        margin="normal"
        label="Product Title"
        variant="outlined"
        fullWidth
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        sx={{ mb: 2, ml: 2, mr: 2 }} // Added margin-left and margin-right
      />

      <TextField
        margin="normal"
        label="Product Description"
        variant="outlined"
        fullWidth
        multiline
        rows={4}
        value={description}
        onChange={(e) => setDesciption(e.target.value)}
        sx={{ mb: 2, ml: 2, mr: 2 }} // Added margin-left and margin-right
      />

      <TextField
        margin="normal"
        label="Product Price"
        variant="outlined"
        fullWidth
        type="number"
        value={prize}
        onChange={(e) => setPrice(e.target.value)}
        sx={{ mb: 2, ml: 2, mr: 2 }} // Added margin-left and margin-right
      />
      <Box mb={2}>
        <input
          accept="image/*"
          id="image-upload"
          type="file"
          onChange={handleImage}
          style={{ display: 'none' }}
        />
        <label htmlFor="image-upload">
          <Button
            variant="contained"
            component="span"
            color="secondary"
            sx={{ width: '100%' }}
          >
            Upload Image
          </Button>
        </label>
        {/* {image && <img src={image} alt="Selected" width={100} />} */}
      </Box>

      <Button
        variant="contained"
        color="primary"
        type="submit"
        fullWidth
        sx={{ mt: 2 }}
        disabled={loading}
      >
        {loading ? "Adding..." : "Add Product"}
      </Button>
    </form>
  </Box>
</Modal>


        <Typography variant="h4" align="center" marginBottom={3}>
          Product List
        </Typography>
        <Card sx={{ mb: 3 }}>
          <CardContent>
            <DataTable />
          </CardContent>
        </Card>

        <Typography variant="h4" align="center" marginTop={5} marginBottom={3}>
          Order List
        </Typography>
        <Card>
          <CardContent>
            <ShipTable />
          </CardContent>
        </Card>

        <Typography variant="h4" align="center" marginTop={5} marginBottom={3}>
          User List
        </Typography>
        <Card>
          <CardContent>
            <UserTable />
          </CardContent>
        </Card>





      </Container>
    </>
  );
};

export default AdminDashboard;
