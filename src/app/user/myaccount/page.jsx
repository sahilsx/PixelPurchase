"use client";

import * as React from "react";
import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { toast, ToastContainer } from "react-toastify";
import { Button } from "@mui/material";
import { useRouter } from 'next/navigation';

// export default function SignIn() {
//   const handleSubmit = async (event) => {
//     try {
//       event.preventDefault();
//       const data = new FormData(event.currentTarget);

//       const email = data.get("email");
//       const password = data.get("password");

//       const res = await fetch("/api/user/login", {
//         method: "POST",

//         headers: {
//           "Content-Type": "application/json",
//         },

//         body: JSON.stringify({
//           email,
//           password,
//         }),
//       });

//       const fetchRes = await res.json();
  
//       console.log(fetchRes.user)

//       if (fetchRes.message === "Logged in succesfully") {
//         toast.success("Logged in succesfully");
//       } else {
//         toast.error(fetchRes.message);
//       }
//     } catch (error) {
//       console.log(error);
//       toast.error("Server Error");
//     }
//   };

const logoContainerStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 3,
    marginTop: 1,
  };
  const logoCircleStyle = {
    marginTop: 5,
    width: 45,
    height: 45,
    borderRadius: "50%",
    backgroundColor: "purple",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    marginRight: 0.5,
  };
  
  const logoTextStyle = {
    marginTop: 5,
    fontWeight: "bold",
    fontSize: "1.5rem",
    Color: "black",
  };
  const logoTextStyle2 = {
   fontSize:"17px",
  fontWeight:"300"
   
  };
  
  const stylee = {
    backgroundColor:"pink",
    height:"300px",
    width:"70%"
  };
  





export default function myaccount(){
    const [id, setid] = React.useState("");
    const [data, setdata] = React.useState("");


    const fetchuser = async () => {
        const user = sessionStorage.getItem("user");
        setid(user);
        console.log("myuser", user);
      
        try {
          // Build the query string with the user ID
          const queryString = new URLSearchParams({ id: user }).toString();
          const url = `/api/user/myaccount?${queryString}`;
      
          const res = await fetch(url, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          });
      
          if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
          }
      
          const sdata = await res.json();
          const datx=sdata.user
          setdata(datx);
          console.log("data", datx);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
      
      React.useEffect(() => {
        fetchuser();
      }, []);



    
    
//     const fetchuser = async () => {
//         const user = sessionStorage.getItem("user");
//   setid(user)
//   console.log("myuser",user) 
//         try {
//           const res = await fetch("/api/user/myaccount", {
//             method: "GET",
//             headers: {
//               "Content-Type": "application/json",
//             },
//             body: JSON.stringify({ id: id }),
            
//           });
//           const sdata = await res.json();
//           setdata(sdata)
//           console.log("data",sdata)
//         } catch (error) {
//           console.error("Error fetching data:", error);
//         }
//       };
    
//       React.useEffect(() => {
//         fetchuser();
//       }, []);
  return (
    <>

<Container  sx={stylee}>
        <Box sx={logoContainerStyle}>
          <Box sx={logoCircleStyle}>
            <Typography variant="h5">PP</Typography>
          </Box>
          <Typography sx={logoTextStyle}>PixelPurchase</Typography>
        </Box>
        <Typography sx={logoTextStyle2}  align="center"  >
          {data.email}
        </Typography>
        <Typography sx={logoTextStyle2}  align="center"  >
          {data.firstName}
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            marginTop: 5,
            marginBottom: 5,
          }}
        >
          <Button href="/mystore" variant="contained" color="primary">
            Logout
          </Button>
        </Box>
      </Container>
    </>
  );
}