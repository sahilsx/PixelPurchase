

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

import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from "@mui/icons-material/Delete";
import { toast, ToastContainer } from "react-toastify";
import { useRouter } from 'next/navigation';
export default function Myorder() {
    const [user, setuser] = React.useState(null);
   
    const app = useRouter();;
    React.useEffect(() => {
      const fetchOrder = async () => {
        const userId = sessionStorage.getItem("user");
        try {
          const queryString = new URLSearchParams({ Userid: userId }).toString();
          const res = await fetch(`/api/user/myorder?${queryString}`);
          if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
          const data = await res.json();
          console.log("orderss",data.myorder)
          const mydata=data.myorder
          await setuser(mydata)
          console.log("myuser",user)
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
      fetchOrder();
    }, []);
    
    
    
       
  
    if (!user) return <Typography>Loading...</Typography>;
  
    return (
      <>
       <Typography variant="h4" align="center" marginTop={5} marginBottom={3}>
          MY ORDERS
        </Typography>
       <TableContainer >
        <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
          <TableHead>
            <TableRow>      
              <TableCell style={{ width: 160 }} align="right">
                <Typography variant="h6" fontWeight="bold">Email</Typography>
              </TableCell>
              <TableCell style={{ width: 160 }} align="right">
                <Typography variant="h6" fontWeight="bold">NAME</Typography>
              </TableCell>
              <TableCell style={{ width: 160 }} align="right">
                <Typography variant="h6" fontWeight="bold">MOBILE NO</Typography>
              </TableCell>
              <TableCell style={{ width: 160 }} align="right">
                <Typography variant="h6" fontWeight="bold">PRODUCT</Typography>
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
            {user.map((users) => (
              <TableRow key={users._id}>
                <TableCell component="th" scope="row">
                  {users.Email}
                </TableCell>
                <TableCell style={{ width: 160 }} align="right">
                  {users.Name}
                </TableCell>
                <TableCell style={{ width: 160 }} align="right">
                  {users.Mobile}
                </TableCell>
                <TableCell style={{ width: 160 }} align="right">
                  {users.Product}
                </TableCell>
               
                <TableCell style={{ width: 160 }} align="right">
                  {users.Price}
                </TableCell>
                <TableCell align="right">
                  <IconButton color="primary" onClick={() => handleEdit(users)}>
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    color="secondary"
                    onClick={() => {
                      setSelectedProduct(users);
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
               
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
  
  
  
  
  
  
  
  
      </>
    );
  }
  