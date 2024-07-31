


"use client";

import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useRouter } from 'next/navigation';
import { toast } from "react-toastify";
import Modal from "@mui/material/Modal";
import { styled } from "@mui/material/styles";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const ProfilePicture = styled(Avatar)(({ theme }) => ({
  width: theme.spacing(12),
  height: theme.spacing(12),
  marginBottom: theme.spacing(2),
}));

const UserDetails = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(1),
  color: theme.palette.text.secondary,
}));

export default function MyAccount() {
  const [user, setUser] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const router = useRouter();

  React.useEffect(() => {
    const fetchUser = async () => {
      const userId = sessionStorage.getItem("user");
      try {
        const queryString = new URLSearchParams({ id: userId }).toString();
        const res = await fetch(`/api/user/myaccount?${queryString}`);
        if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
        const data = await res.json();
        setUser(data.user);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchUser();
  }, []);

  const handleLogout = () => {
    setOpen(false);
    sessionStorage.removeItem("user");
    router.push("/login"); // Adjust the route as needed
    toast.success("Logged out successfully");
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  if (!user) return <Typography>Loading...</Typography>;

  return (
    <>
      <Container>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 4 }}>
          <ProfilePicture src={user.profilePicture || '/default-avatar.png'} alt="Profile Picture" />
          <Typography variant="h4" gutterBottom>
            {user.firstName} {user.lastName}
          </Typography>
          <UserDetails>Email: {user.email}</UserDetails>
          <UserDetails>Phone: {user.phone || 'N/A'}</UserDetails>
          <Grid container spacing={2} mt={2}>
            <Grid item xs={12} sm={6}>
              <Button fullWidth variant="contained" color="primary" onClick={handleOpen}>
                Logout
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button fullWidth variant="outlined" color="secondary" href="/edit-profile">
                Edit Profile
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Container>
      
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-title" variant="h6" component="h2">
            Confirm Logout
          </Typography>
          <Typography id="modal-description" sx={{ mt: 2 }}>
            Are you sure you want to log out?
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
            <Button onClick={handleClose} sx={{ mr: 2 }}>
              Cancel
            </Button>
            <Button variant="contained" color="primary" onClick={handleLogout}>
              Logout
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
}
