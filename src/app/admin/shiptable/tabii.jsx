"use client";
import * as React from "react";
import PropTypes from "prop-types";
import {
  Button,
  TableHead,
  TableRow,
  TableCell,
  Typography,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  Table,
  TableBody,
  TableContainer,
  TableFooter,
  Paper,
  IconButton,
  TablePagination,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { toast, ToastContainer } from "react-toastify";
import { useRouter } from 'next/navigation';

export default function CustomPaginationActionsTable() {
  const [selectedOrder, setSelectedOrder] = React.useState(null);
  const [deleteDialogOpen, setDeleteDialogOpen] = React.useState(false);
  const [client, setClient] = React.useState([]);
  const [formData, setFormData] = React.useState([]);
  const [editDialogOpen, setEditDialogOpen] = React.useState(false);
  const [totalCount, setTotalCount] = React.useState(0);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const app = useRouter();

  const fetchRows = async (page = 0, rowsPerPage = 10) => {
    try {
      const res = await fetch(`/api/order/getallships?page=${page}&limit=${rowsPerPage}`, {
        method: "GET",
      });
      const data = await res.json();
      const orders = data.ship;
      setClient(orders);
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
      const res = await fetch("/api/order/Deleteorder", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: selectedOrder }),
      });
      if (res.ok) {
        setDeleteDialogOpen(false);
        setClient(client.filter((item) => item._id !== selectedOrder));
        toast.success("Item deleted successfully");
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
        <Table sx={{ minWidth: 650 }} aria-label="custom pagination table">
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography variant="h6" fontWeight="bold">Email</Typography>
              </TableCell>
              <TableCell align="right">
                <Typography variant="h6" fontWeight="bold">Name</Typography>
              </TableCell>
              <TableCell align="right">
                <Typography variant="h6" fontWeight="bold">Address</Typography>
              </TableCell>
              <TableCell align="right">
                <Typography variant="h6" fontWeight="bold">Mobile</Typography>
              </TableCell>
              <TableCell align="right">
                <Typography variant="h6" fontWeight="bold">Product</Typography>
              </TableCell>
              <TableCell align="right">
                <Typography variant="h6" fontWeight="bold">Price</Typography>
              </TableCell>
              <TableCell align="right">
                <Typography variant="h6" fontWeight="bold">Actions</Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {client.map((clients) => (
              <TableRow key={clients._id}>
                <TableCell component="th" scope="row">
                  {clients.Email}
                </TableCell>
                <TableCell align="right">{clients.Name}</TableCell>
                <TableCell align="right">{clients.Address}</TableCell>
                <TableCell align="right">{clients.Mobile}</TableCell>
                <TableCell align="right">{clients.Product}</TableCell>
                <TableCell align="right">{clients.Price}</TableCell>
                <TableCell align="right">
                  <Button
                    variant="contained"
                    color="primary"
                    sx={{ borderRadius: 2 }}
                    onClick={() => handleEdit(clients)}
                  >
                    NOTIFY
                  </Button>
                  <IconButton
                    color="secondary"
                    onClick={() => {
                      setSelectedOrder(clients._id);
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
                component="td"
                count={totalCount}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>

      <Dialog
        open={deleteDialogOpen}
        onClose={() => setDeleteDialogOpen(false)}
      >
        <DialogTitle>Delete Order Details</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete this order detail?
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
