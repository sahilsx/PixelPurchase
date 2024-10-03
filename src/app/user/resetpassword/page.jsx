"use client";
import React, { useState } from 'react';
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  Grid,
  Paper,
  Alert,
} from '@mui/material';

export default function ResetPassword() {
  const [email, setEmail] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    try {
    e.preventDefault();

    if (!email) {
      setErrorMessage('Please enter your email.');
      return;
    }
   
    const res = await fetch("/api/user/reset", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        email
      }),
    });
    const response = await res.json()
   if(res.ok){
      setSuccessMessage(`Password reset link sent to ${email}`);
     
      setEmail('');}
      else{
        setErrorMessage(response.message);
        setEmail('');
        console.log(response.message);
      }
    } catch (error) {
      setErrorMessage('Failed to send reset link.');
    }
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ padding: 4, mt: 8 }}>
        <Typography variant="h4" gutterBottom align="center">
          Reset Password
        </Typography>

        <Typography variant="body1" gutterBottom align="center">
          Enter your email address, and we’ll send you a link to reset your password.
        </Typography>

        {successMessage && <Alert severity="success">{successMessage}</Alert>}
        {errorMessage && <Alert severity="error">{errorMessage}</Alert>}

        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 4 }}>
          <TextField
            fullWidth
            label="Email Address"
            variant="outlined"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            sx={{ mb: 3 }}
          />
          <Grid container justifyContent="center">
            <Button type="submit" variant="contained" color="primary">
              Send Reset Link
            </Button>
          </Grid>
        </Box>
      </Paper>
    </Container>
  );
}
