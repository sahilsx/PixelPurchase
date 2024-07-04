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
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableFooter from "@mui/material/TableFooter";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import LastPageIcon from "@mui/icons-material/LastPage";
import DeleteIcon from "@mui/icons-material/Delete";
import { toast, ToastContainer } from "react-toastify";
import { useRouter } from 'next/navigation';
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

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

export default function CustomPaginationActionsTable() {
  const [selectedProduct, setSelectedProduct] = React.useState(null);
  const [deleteDialogOpen, setDeleteDialogOpen] = React.useState(false);
  const [rows, setRows] = React.useState([]);
  const [totalCount, setTotalCount] = React.useState(0);
  const app = useRouter();
  // const emptyRows =
  //   rowsPerPage - Math.min(rowsPerPage, totalCount - page * rowsPerPage);

  const fetchRows = async () => {
    try {
      const res = await fetch("/api/Products/getall", {
        method: "GET",
      });
      const data = await res.json();
      const product = data.product;
      setRows(product);
      setTotalCount(data.totalCount);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  React.useEffect(() => {
    fetchRows();
  }, []);

  // const handleChangePage = (event, newPage) => {
  //   setPage(newPage);
  // };

  // const handleChangeRowsPerPage = (event) => {
  //   setRowsPerPage(parseInt(event.target.value, 10));
  //   setPage(0);
  // };
  const setdelete = (row) => {
    setSelectedProduct(row);
    console.log("set", setSelectedProduct);
    setDeleteDialogOpen(true);
  };

  const handleDelete = async () => {
    try {
      const res = await fetch("/api/Products/DeleteId", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: selectedProduct }),
        
      });
      const response = await res.json()
     
      if (response.message === "Product Removed Successfully!") {
       
        setRows(rows.filter((row) => row._id !== id));
        setDeleteDialogOpen(false);
        toast.success(`Deleted item with ID: ${id}`);
        app.push("/admin/dashboard");
      } else {
        throw new Error("Failed to delete item");
      }
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  return (
    <>
      <ToastContainer />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 500,}} aria-label="custom pagination table">
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
                <TableCell align="right">
                  <IconButton
                    color="secondary"
                    onClick={() => setdelete(row._id)}
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
                rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
                colSpan={4}
                count={totalCount}
                ActionsComponent={TablePaginationActions}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>

      <Dialog
        open={deleteDialogOpen}
        onClose={() => setDeleteDialogOpen(false)}
      >
        <DialogTitle>Delete Trip</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete this trip?
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
