








"use client"; // Ensure this line is at the top for Next.js app directory with React 18 and client-side features

import { Container, Grid, Typography, IconButton, Tooltip, Paper } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import 'animate.css'; // Import animate.css

const FollowUsPage = () => {
  const socialLinks = [
    {
      platform: 'Instagram',
      icon: <InstagramIcon />,
      url: 'https://instagram.com/_sahil.altaf?igshid=NzZlODBkYWE4Ng==',
    },
    {
      platform: 'Facebook',
      icon: <FacebookIcon />,
      url: 'https://www.facebook.com/itx.saaho',
    },
    {
      platform: 'Gmail',
      icon: <EmailIcon />,
      url: 'mailto:itxsaaho@gmail.com',
    },
    {
      platform: 'WhatsApp',
      icon: <WhatsAppIcon />,
      url: 'https://wa.me/7780922090',
    },
  ];

  return (
    <Container component="main" maxWidth="md" sx={{ mt: 8, mb: 4 }}>
      <Paper elevation={3} sx={{ padding: 4, textAlign: 'center' }} className="animate__animated animate__fadeIn animate__delay-1s">
        <Typography variant="h4" gutterBottom className="animate__animated animate__fadeIn animate__delay-2s">
          Follow Us
        </Typography>
        <Typography variant="body1" paragraph className="animate__animated animate__fadeIn animate__delay-3s">
          Stay connected with us on social media and through email. Follow our profiles to get the latest updates!
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {socialLinks.map((social, index) => (
            <Grid item key={social.platform}>
              <Tooltip title={`Follow us on ${social.platform}`} arrow>
                <IconButton
                  component="a"
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: '#555',
                    '&:hover': {
                      color: '#1976d2',
                    },
                    fontSize: '2.5rem',
                  }}
                  className={`animate__animated animate__bounceIn animate__delay-${index + 4}s`} // Add animation class
                >
                  {social.icon}
                </IconButton>
              </Tooltip>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Container>
  );
};

export default FollowUsPage;
