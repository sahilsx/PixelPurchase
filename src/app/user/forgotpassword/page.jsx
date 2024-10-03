"use client";
import React, { useState, useEffect } from 'react';
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
import { useSearchParams } from 'next/navigation';

export default function ForgotPassword() {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const searchParams = useSearchParams();
  const token = searchParams.get('token');
  const handleSubmit = async (e) => {
    e.preventDefault();

   
    if (!newPassword || !confirmPassword) {
      setErrorMessage('Please fill out both password fields.');
      return;
    }

    if (newPassword !== confirmPassword) {
      setErrorMessage('Passwords do not match.');
      return;
    }

    if (!token) {
      setErrorMessage('No token provided.');
      return;
    }


    try {
      const res= await fetch(`/api/user/forgotpassword?token=${token}`, {
        method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        newPassword
      }),
    });
    if(res.ok){
      setSuccessMessage('Your password has been reset successfully!');
      setErrorMessage('');
      setNewPassword('');
      setConfirmPassword('');
     }else {
         console.log(res.message)
     }
    } catch (error) {
      setErrorMessage(error.response?.data?.message || 'Failed to reset password.');
    }
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ padding: 4, mt: 8 }}>
        <Typography variant="h4" gutterBottom align="center">
          Reset Your Password
        </Typography>

        <Typography variant="body1" gutterBottom align="center">
          Enter your new password below.
        </Typography>

        {successMessage && <Alert severity="success">{successMessage}</Alert>}
        {errorMessage && <Alert severity="error">{errorMessage}</Alert>}

        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 4 }}>
          <TextField
            fullWidth
            label="New Password"
            variant="outlined"
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
            sx={{ mb: 3 }}
          />

          <TextField
            fullWidth
            label="Confirm New Password"
            variant="outlined"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            sx={{ mb: 3 }}
          />

          <Grid container justifyContent="center">
            <Button type="submit" variant="contained" color="primary">
              Reset Password
            </Button>
          </Grid>
        </Box>
      </Paper>
    </Container>
  );
}
