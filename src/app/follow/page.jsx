








"use client"; // Ensure this line is at the top for Next.js app directory with React 18 and client-side features

import { Container, Grid, Typography, IconButton, Tooltip, Paper } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

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
      <Paper elevation={3} sx={{ padding: 4, textAlign: 'center' }}>
        <Typography variant="h4" gutterBottom>
          Follow Us
        </Typography>
        <Typography variant="body1" paragraph>
          Stay connected with us on social media and through email. Follow our profiles to get the latest updates!
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {socialLinks.map((social) => (
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

