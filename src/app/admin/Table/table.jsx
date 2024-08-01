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
// } from "@mui/material";
// import { useTheme } from "@mui/material/styles";
// import Box from "@mui/material/Box";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableFooter from "@mui/material/TableFooter";
// import TablePagination from "@mui/material/TablePagination";
// import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";
// import IconButton from "@mui/material/IconButton";
// import FirstPageIcon from "@mui/icons-material/FirstPage";
// import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
// import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
// import LastPageIcon from "@mui/icons-material/LastPage";
// import EditIcon from '@mui/icons-material/Edit';
// import DeleteIcon from "@mui/icons-material/Delete";
// import { toast, ToastContainer } from "react-toastify";
// import { useRouter } from 'next/navigation';

//   const theme = useTheme();
//   const { count, page, rowsPerPage, onPageChange } = props;

//   const handleFirstPageButtonClick = (event) => {
//     onPageChange(event, 0);
//   };

//   const handleBackButtonClick = (event) => {
//     onPageChange(event, page - 1);
//   };

//   const handleNextButtonClick = (event) => {
//     onPageChange(event, page + 1);
//   };

//   const handleLastPageButtonClick = (event) => {
//     onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
//   };

//   return (
//     <Box sx={{ flexShrink: 0, ml: 2.5 }}>
//       <IconButton
//         onClick={handleFirstPageButtonClick}
//         disabled={page === 0}
//         aria-label="first page"
//       >
//         {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
//       </IconButton>
//       <IconButton
//         onClick={handleBackButtonClick}
//         disabled={page === 0}
//         aria-label="previous page"
//       >
//         {theme.direction === "rtl" ? (
//           <KeyboardArrowRight />
//         ) : (
//           <KeyboardArrowLeft />
//         )}
//       </IconButton>
//       <IconButton
//         onClick={handleNextButtonClick}
//         disabled={page >= Math.ceil(count / rowsPerPage) - 1}
//         aria-label="next page"
//       >
//         {theme.direction === "rtl" ? (
//           <KeyboardArrowLeft />
//         ) : (
//           <KeyboardArrowRight />
//         )}
//       </IconButton>
//       <IconButton
//         onClick={handleLastPageButtonClick}
//         disabled={page >= Math.ceil(count / rowsPerPage) - 1}
//         aria-label="last page"
//       >
//         {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
//       </IconButton>
//     </Box>
//   );




// export default function CustomPaginationActionsTable() {
//   const [selectedProduct, setSelectedProduct] = React.useState(null);
//   const [deleteDialogOpen, setDeleteDialogOpen] = React.useState(false);
//   const [rows, setRows] = React.useState([]);
//   const [formData, setFormData] =React.useState([]);
//   const [editDialogOpen, setEditDialogOpen] = React.useState(false);
//   const [totalCount, setTotalCount] = React.useState(0);
//   const app = useRouter();
  
//   const fetchRows = async () => {
//     try {
//       const res = await fetch("/api/Products/getall", {
//         method: "GET",
//       });
//       const data = await res.json();
//       const product = data.product;
//       setRows(product);
//       setTotalCount(data.totalCount);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   React.useEffect(() => {
//     fetchRows();
//   }, []);

  


//   const handleEdit = (row) => {
//     setSelectedProduct(row);
//     setFormData(row);
//     setEditDialogOpen(true);
//   };


//   const handleEditSubmit = async () => {
//     try {
//       const response = await fetch('/api/Products/edit', {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });
//       const result = await response.json();
//       if (response.ok) {
//         // setCabFares((prevFares) =>
//         //   prevFares.map((fare) => (fare._id === formData._id ? formData : fare))
//         // );
//         setEditDialogOpen(false);
//       } else {
//         console.error(result.message);
//       }
//     } catch (error) {
//       console.error('Error updating trip:', error);
//     }
//   };










//   const setdelete = (row) => {
//     setSelectedProduct(row);
//     console.log("set", setSelectedProduct);
//     setDeleteDialogOpen(true);
//   };


//   const handleDelete = async () => {
//     try {
//       const res = await fetch("/api/Products/DeleteId", {
//         method: "DELETE",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ id: selectedProduct }),
        
//       });
//       const result = await res.json()
     
//        if (res.ok){
//         setDeleteDialogOpen(false);
//         setRows(rows.filter((row) => row._id !== selectedProduct));
//         setDeleteDialogOpen(false);
//         toast.success("item Deleted Successfully");
//         app.push("/admin/dashboard");
//       } else {
//         throw new Error("Failed to delete item");
//       }
//     } catch (error) {
//       console.error("Error deleting item:", error);
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({ ...prevData, [name]: value }));
//   };





//   return (
//     <>
//       <ToastContainer />
//       <TableContainer component={Paper}>
//         <Table sx={{ minWidth: 500,}} aria-label="custom pagination table">
//           <TableBody>
//             {rows.map((row) => (
//               <TableRow key={row._id}>
//                 <TableCell component="th" scope="row">
//                   {row._id}
//                 </TableCell>
//                 <TableCell style={{ width: 160 }} align="right">
//                   {row.title}
//                 </TableCell>
//                 <TableCell style={{ width: 160 }} align="right">
//                   {row.description}
//                 </TableCell>
//                 <TableCell align="right">
//                 <IconButton color="primary" onClick={() => handleEdit(row)}>
//                     <EditIcon />
//                   </IconButton>
//                   <IconButton
//                     color="secondary"
//                     onClick={() => setdelete(row._id)}
//                   >
//                     <DeleteIcon />
//                   </IconButton>
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//           <TableFooter>
//             <TableRow>
//             </TableRow>
//           </TableFooter>
//         </Table>
//       </TableContainer>








//       <Dialog open={editDialogOpen} onClose={() => setEditDialogOpen(false)}>
//         <DialogTitle>Edit Product</DialogTitle>
//         <DialogContent>
//           <DialogContentText>Edit the details of the Product below.</DialogContentText>
//           <TextField
//             margin="dense"
//             label="title"
//             type="text"
//             name="title"
//             fullWidth
//             value={formData.title}
//             onChange={handleChange}
//           />
//           <TextField
//             margin="dense"
//             label="description"
//             type="text"
//             name="description"
//             fullWidth
//             value={formData.description}
//             onChange={handleChange}
//           />
//           <TextField
//             margin="dense"
//             label="prize"
//             type="text"
//             name="prize"
//             fullWidth
//             value={formData.prize}
//             onChange={handleChange}
//           />

         
         
         
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={() => setEditDialogOpen(false)} color="primary">
//             Cancel
//           </Button>
//           <Button onClick={handleEditSubmit} color="primary">
//             Save
//           </Button>
//         </DialogActions>
//       </Dialog>















//       <Dialog
//         open={deleteDialogOpen}
//         onClose={() => setDeleteDialogOpen(false)}
//       >
//         <DialogTitle>Delete Product</DialogTitle>
//         <DialogContent>
//           <DialogContentText>
//             Are you sure you want to Product this trip?
//           </DialogContentText>
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={() => setDeleteDialogOpen(false)} color="primary">
//             Cancel
//           </Button>
//           <Button onClick={handleDelete} color="secondary">
//             Delete
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </>
//   );
// }





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
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from "@mui/icons-material/Delete";
import { toast, ToastContainer } from "react-toastify";
import { useRouter } from 'next/navigation';

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
  const [deleteDialogOpen, setDeleteDialogOpen] = React.useState(false);
  const [rows, setRows] = React.useState([]);
  const [formData, setFormData] = React.useState({});
  const [editDialogOpen, setEditDialogOpen] = React.useState(false);
  const [totalCount, setTotalCount] = React.useState(0);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const app = useRouter();

  const fetchRows = async (page = 0, rowsPerPage = 10) => {
    try {
      const res = await fetch(`/api/Products/getall?page=${page}&limit=${rowsPerPage}`, {
        method: "GET",
      });
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
  }, [page, rowsPerPage]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
    fetchRows(newPage, rowsPerPage);
  };

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

  const handleEditSubmit = async () => {
    try {
      const response = await fetch('/api/Products/edit', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      if (response.ok) {
        setEditDialogOpen(false);
      } else {
        console.error(result.message);
      }
    } catch (error) {
      console.error('Error updating item:', error);
    }
  };

  const handleDelete = async () => {
    try {
      const res = await fetch("/api/Products/DeleteId", {
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
                <Typography style={{ width: 160 }} variant="h6" fontWeight="bold">ID</Typography>
              </TableCell>
              <TableCell style={{ width: 160 }} align="right">
                <Typography variant="h6" fontWeight="bold">Title</Typography>
              </TableCell>
              <TableCell style={{ width: 160 }} align="right">
                <Typography variant="h6" fontWeight="bold">Description</Typography>
              </TableCell>
              <TableCell style={{ width: 160 }} align="right">
                <Typography variant="h6" fontWeight="bold">Price</Typography>
              </TableCell>
              <TableCell align="right">
                <Typography variant="h6" fontWeight="bold">Actions</Typography>
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

      <Dialog open={editDialogOpen} onClose={() => setEditDialogOpen(false)}>
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
      </Dialog>

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
