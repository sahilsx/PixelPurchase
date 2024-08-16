// pages/contact.js
"use client";
import { Container, Typography, TextField, Button, Box, Grid } from '@mui/material';
import { useState } from 'react';
import { styled } from '@mui/material/styles';

// Styled components
const FormContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[3],
}));

const InputField = styled(TextField)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

export default function Contact() {
  const [Name, setname] = useState();
  const [Email, setemail] = useState();
  const [Reason, setmessage] = useState();
  const [submitted, setSubmitted] = useState(false);

  

  const handleSubmit = async (event) => {
    event.preventDefault();
    const res = await fetch("/api/user/contact", {
        method: "Post",
        headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({Name,Email,Reason,}),
        
       
      });
      if (res.Message=="Your message has been sent SuccessFully!") {
    setSubmitted(true);
   setname(""),
   setemail(""),
   setmessage("")
    
      }
  };

  return (
    <Container maxWidth="md">
         <Typography marginTop={4} backgroundColor="pink" color="black" variant="h4" component="h1" align="center" gutterBottom>
         Contact Us
      </Typography>
      <FormContainer marginTop={4}  justifyContent="center">
      {/* <Typography backgroundColor="pink" color="black" variant="h4" component="h1" align="center" gutterBottom>
      We’d love to hear from you!
      </Typography> */}
       
        {submitted && (
          <Typography variant="body1" color="success.main" gutterBottom>
            Thank you for your message. We will get back to you soon!
          </Typography>
        )}
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <InputField
                fullWidth
                label="Name"
                name="Name"
                variant="outlined"
                required
                value={Name}
                onChange={(e) => setname(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputField
                fullWidth
                label="Email"
                name="email"
                type="email"
                variant="outlined"
                required
                value={Email}
                onChange={(e) => setemail(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <InputField
                fullWidth
                label="Message"
                name="message"
                variant="outlined"
                multiline
                rows={4}
                required
                value={Reason}
                onChange={(e) => setmessage(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
              >
                Send Message
              </Button>
            </Grid>
          </Grid>
        </form>
      </FormContainer>
    </Container>
  );
}
