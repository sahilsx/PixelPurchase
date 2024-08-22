

"use client";
import * as React from "react";
import PropTypes from "prop-types";
import {
  Button,
  TableHead,
  Typography,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  Modal,
  TablePagination,
  TableRow,
  Paper,
  Box,
  IconButton,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import LastPageIcon from "@mui/icons-material/LastPage";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { toast, ToastContainer } from "react-toastify";
import { useRouter } from "next/navigation";
import { json } from "react-router-dom";

// Custom pagination actions component
function TablePaginationActions(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

export default function CustomPaginationActionsTable() {
  const [selectedProduct, setSelectedProduct] = React.useState(null);
  const [image, setimageFile] = React.useState(null);
  const [deleteDialogOpen, setDeleteDialogOpen] = React.useState(false);
  const [rows, setRows] = React.useState([]);
  const [array, setarray] = React.useState([]);
  const [formData, setFormData] = React.useState({});
  const [_id, setid] = React.useState();
  const [description, setdescription] = React.useState();
  const [prize, setprize] = React.useState();
  const [formDatas, setFormDatas] = React.useState({});
  const [editDialogOpen, setEditDialogOpen] = React.useState(false);
  const [totalCount, setTotalCount] = React.useState(0);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
 
  const app = useRouter();

  const fetchRows = async (page = 0, rowsPerPage = 10) => {
    try {
      const res = await fetch(
        `/api/products/getall?page=${page}&limit=${rowsPerPage}`,
        {
          method: "GET",
        }
      );
      const data = await res.json();
      const products = data.product;
      setRows(products);
      setTotalCount(data.totalCount);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  React.useEffect(() => {
    fetchRows(page, rowsPerPage);
  }, [page, rowsPerPage,]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
    fetchRows(newPage, rowsPerPage,);
  };

  const handleImage = (e) => {
    const file = e.target.files?.[0]; // incoming selected file ....first one
    const reader = new FileReader(); // creating an instance of file reader
    reader.readAsDataURL(file);
    reader.onload = () => {
      if (reader.readyState === 2) {
        setimageFile(reader.result);
      }
    };
  }
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
    fetchRows(0, parseInt(event.target.value, 10));
  };

  const handleEdit = (row) => {
    setSelectedProduct(row);
    setFormData(row);
    setEditDialogOpen(true);
  };


  




  const handleEditSubmit = async (e) => {
    try {
      e.preventDefault();
      // const formDatas= new FormData();
      // formDatas.append("_id", formData._id);
      // formDatas.append("title", formData.title);
      // formDatas.append("description",formData.description);
      // formDatas.append("prize", formData.prize);

    //   const [formDatas, setFormDatas] = React.useState({
    //     _id:formData._id,
    //     title: formData.title,
    //    description:formData.description,
    //      prize:formData. prize 
    //  });
    //  console.log(formDatas._id)
    //  console.log("forms",formDatas)
      // if (imageFile) {
      //   formDatas.append("image", imageFile); 
      //   const response = await fetch("/api/products/edits", {
      //     method: "PUT",
         
      //     body:formDatas,
         
      //     // No need to set Content-Type header when using FormData
      //   });
    
      //   const result = await response.json();
      //   // Append image file if present
      // }
      setid(formData._id)
      setdescription(formData.description)
      setprize(formData.prize)
      if(image){
        const final ={
          ...formDatas,
         image,
         _id,
         description,
         prize,

        }
        const response = await fetch("/api/products/edits", {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(final),
          // body:formDatas,
          // No need to set Content-Type header when using FormData
        });
    
        const result = await response.json();
    
        if (response.ok) {
          setEditDialogOpen(false);
          
          toast("Item edited successfully");
          
        } else {
          console.error("Server error:", result.message);
        }
      } 



      const final ={
        ...formDatas,
       _id,
       description,
       prize,

      }
      const response = await fetch("/api/products/edits", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(final),
        // body:formDatas,
        // No need to set Content-Type header when using FormData
      });
  
      const result = await response.json();
  
      if (response.ok) {
        setEditDialogOpen(false);
        
        toast("Item edited successfully");
        
      } else {
        console.error("Server error:", result.message);
      }
    } catch (error) {
      console.error("Error in handleEditSubmit:", error);
    }
  };
  










  const handleDelete = async () => {
    try {
      const res = await fetch("/api/products/DeleteId", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: selectedProduct._id }),
      });
      if (res.ok) {
        setDeleteDialogOpen(false);
        setRows(rows.filter((row) => row._id !== selectedProduct._id));
        toast.success("Item deleted successfully");
        app.push("/admin/dashboard");
      } else {
        throw new Error("Failed to delete item");
      }
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <>
      <ToastContainer />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography
                  style={{ width: 160 }}
                  variant="h6"
                  fontWeight="bold"
                >
                  ID
                </Typography>
              </TableCell>
              <TableCell style={{ width: 160 }} align="right">
                <Typography variant="h6" fontWeight="bold">
                  Title
                </Typography>
              </TableCell>
              <TableCell style={{ width: 160 }} align="right">
                <Typography variant="h6" fontWeight="bold">
                  Description
                </Typography>
              </TableCell>
              <TableCell style={{ width: 160 }} align="right">
                <Typography variant="h6" fontWeight="bold">
                  Price
                </Typography>
              </TableCell>
              <TableCell style={{ width: 160 }} align="right">
                <Typography variant="h6" fontWeight="bold">
                  Image
                </Typography>
              </TableCell>
              <TableCell align="right">
                <Typography variant="h6" fontWeight="bold">
                  Actions
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row._id}>
                <TableCell component="th" scope="row">
                  {row._id}
                </TableCell>
                <TableCell style={{ width: 160 }} align="right">
                  {row.title}
                </TableCell>
                <TableCell style={{ width: 160 }} align="right">
                  {row.description}
                </TableCell>
                <TableCell style={{ width: 160 }} align="right">
                  {row.prize}
                </TableCell>
                <TableCell style={{ width: 60 }} align="right">
                  <img src={row.imageUrl} alt="" height={100} />
                </TableCell>
                <TableCell align="right">
                  <IconButton color="primary" onClick={() => handleEdit(row)}>
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    color="secondary"
                    onClick={() => {
                      setSelectedProduct(row);
                      setDeleteDialogOpen(true);
                    }}
                  >
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                count={totalCount}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                ActionsComponent={TablePaginationActions}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>

      {/* <Dialog open={editDialogOpen} onClose={() => setEditDialogOpen(false)}>
        <DialogTitle>Edit Product</DialogTitle>
        <DialogContent>
          <DialogContentText>Edit the details of the Product below.</DialogContentText>
          <TextField
            margin="dense"
            label="Title"
            type="text"
            name="title"
            fullWidth
            value={formData.title || ''}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            label="Description"
            type="text"
            name="description"
            fullWidth
            value={formData.description || ''}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            label="Price"
            type="text"
            name="prize"
            fullWidth
            value={formData.prize || ''}
            onChange={handleChange}
          />














        </DialogContent>
        <DialogActions>
          <Button onClick={() => setEditDialogOpen(false)} color="primary">
            Cancel
          </Button>
          <Button onClick={handleEditSubmit} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog> */}
 
      {/* <Dialog open={editDialogOpen} onClose={() => setEditDialogOpen(false)}>
        <DialogTitle>Edit Product</DialogTitle>
        <DialogContent>
        
          <TextField
            autoFocus
            margin="dense"
            label="Title"
            fullWidth
            variant="outlined"
            value={formData.title || ""}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            label="Description"
            fullWidth
            variant="outlined"
            value={formData.description || ""}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            label="Price"
            type="number"
            fullWidth
            variant="outlined"
            value={formData.prize || ""}
            onChange={handleChange}
          />
          <input
            accept="image/*"
            id="image-upload"
            type="file"
            onChange={handleImage}
          />
          {formData.imageUrl && (
            <img src={formData.imageUrl} alt="Preview" height={100} />
          )}
       
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={() => setEditDialogOpen(false)}>
            Cancel
          </Button>
          <Button variant="contained"onClick={handleEditSubmit} >
            Save
          </Button>
         
        </DialogActions>
       
      </Dialog>  */}




<Modal
  open={editDialogOpen} onClose={() => setEditDialogOpen(false)}
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
    <form onSubmit={handleEditSubmit}>
    <TextField
            margin="dense"
            label="Title"
            type="text"
            name="title"
            fullWidth
            value={formData.title || ''}
            onChange={handleChange}
          />
      <TextField
        margin="normal"
         name="description"
        label="Product Description"
        variant="outlined"
        fullWidth
        multiline
        rows={4}
        value={formData.description}
        onChange={handleChange}
      />

      <TextField
        margin="normal"
         name="prize"
        label="Product Price"
        variant="outlined"
        fullWidth
        type="number"
        value={formData.prize}
        onChange={handleChange}
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
       
      >
        { "Add Product"}
      </Button>
    </form>
  </Box>
</Modal>













    
      <Dialog
        open={deleteDialogOpen}
        onClose={() => setDeleteDialogOpen(false)}
      >
        <DialogTitle>Delete Product</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete this product?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDeleteDialogOpen(false)} color="primary">
            Cancel
          </Button>
          <Button onClick={handleDelete} color="secondary">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
