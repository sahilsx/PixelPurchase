// // pages/contact.js
// "use client";
// import { Container, Typography, TextField, Button, Box, Grid } from '@mui/material';
// import { useState } from 'react';
// import { styled } from '@mui/material/styles';

// // Styled components
// const FormContainer = styled(Box)(({ theme }) => ({
//   padding: theme.spacing(4),
//   backgroundColor: theme.palette.background.paper,
//   borderRadius: theme.shape.borderRadius,
//   boxShadow: theme.shadows[3],
// }));

// const InputField = styled(TextField)(({ theme }) => ({
//   marginBottom: theme.spacing(2),
// }));

// export default function Contact() {
//   const [Name, setname] = useState();
//   const [Email, setemail] = useState();
//   const [Message, setmessage] = useState();
//   const [submitted, setSubmitted] = useState(false);

  

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     const res = await fetch("/api/user/contact", {
//         method: "Post",
//         headers: {
//               "Content-Type": "application/json",
//             },
//             body: JSON.stringify({Name,Email,Message,}),
        
       
//       });
//     if (res.ok) {
//     setSubmitted(true);
//    setname(""),
//    setemail(""),
//    setmessage("")
    
//       }
//   };

//   return (
//     <Container maxWidth="md">
//          <Typography marginTop={4} backgroundColor="pink" color="black" variant="h4" component="h1" align="center" gutterBottom>
//          Contact Us
//       </Typography>
//       <FormContainer marginTop={4}  justifyContent="center">
//       {/* <Typography backgroundColor="pink" color="black" variant="h4" component="h1" align="center" gutterBottom>
//       We’d love to hear from you!
//       </Typography> */}
       
//         {submitted && (
//           <Typography variant="body1" color="success.main" gutterBottom>
//             Thank you for your message. We will get back to you soon!
//           </Typography>
//         )}
//         <form onSubmit={handleSubmit}>
//           <Grid container spacing={2}>
//             <Grid item xs={12} sm={6}>
//               <InputField
//                 fullWidth
//                 label="Name"
//                 name="Name"
//                 variant="outlined"
//                 required
//                 value={Name}
//                 onChange={(e) => setname(e.target.value)}
//               />
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <InputField
//                 fullWidth
//                 label="Email"
//                 name="email"
//                 type="email"
//                 variant="outlined"
//                 required
//                 value={Email}
//                 onChange={(e) => setemail(e.target.value)}
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <InputField
//                 fullWidth
//                 label="Message"
//                 name="message"
//                 variant="outlined"
//                 multiline
//                 rows={4}
//                 required
//                 value={Message}
//                 onChange={(e) => setmessage(e.target.value)}
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <Button
//                 type="submit"
//                 variant="contained"
//                 color="primary"
//                 fullWidth
//               >
//                 Send Message
//               </Button>
//             </Grid>
//           </Grid>
//         </form>
//       </FormContainer>
//     </Container>
//   );
// }



"use client";

import { Container, Typography, TextField, Button, Box, Grid } from '@mui/material';
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import 'animate.css'; // Import animate.css

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
  const [Name, setName] = useState('');
  const [Email, setEmail] = useState('');
  const [Message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const res = await fetch("/api/user/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ Name, Email, Message }),
    });
    if (res.ok) {
      setSubmitted(true);
      setName('');
      setEmail('');
      setMessage('');
    }
  };

  return (
    <Container maxWidth="md">
      <Typography
        marginTop={4}
        backgroundColor="pink"
        color="black"
        variant="h4"
        component="h1"
        align="center"
        gutterBottom
        className="animate__animated animate__fadeIn animate__delay-1s" // Add animation class
      >
        Contact Us
      </Typography>
      <FormContainer
        marginTop={4}
        className="animate__animated animate__fadeIn animate__delay-2s" // Add animation class
      >
        {submitted && (
          <Typography
            variant="body1"
            color="success.main"
            gutterBottom
            className="animate__animated animate__fadeIn animate__delay-3s" // Add animation class
          >
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
                onChange={(e) => setName(e.target.value)}
                className="animate__animated animate__fadeIn animate__delay-4s" // Add animation class
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
                onChange={(e) => setEmail(e.target.value)}
                className="animate__animated animate__fadeIn animate__delay-5s" // Add animation class
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
                value={Message}
                onChange={(e) => setMessage(e.target.value)}
                className="animate__animated animate__fadeIn animate__delay-6s" // Add animation class
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                className="animate__animated animate__bounceIn" // Add animation class
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
