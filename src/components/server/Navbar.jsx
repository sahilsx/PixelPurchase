import React from 'react';
import { Container, Typography, Button, Card, CardContent, Grid } from '@mui/material';
// import { makeStyles } from '@mui/styles';

const Navbar = () => {
  return (
    <Container maxWidth="md">
    <div className="silla">
      <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
        Internship Opportunities
      </Typography>
      <Typography variant="h5" align="center" color="textSecondary" paragraph>
        Explore a variety of internships that suit your career interests.
      </Typography>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px',
        marginBottom:"20px"
       }}>
        <Button variant="contained" color="primary"    >
          Get Started
        </Button>
      </div>
    </div>
    <Grid container spacing={4} className="{classes.cardGrid}">
      <Grid item key={1} xs={12} sm={6} md={4}>
        <Card className="">
          <CardContent className="">
            <Typography gutterBottom variant="h5" component="h2">
              Web Development
            </Typography>
            <Typography>
              Work on cutting-edge web technologies and frameworks.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item key={2} xs={12} sm={6} md={4}>
        <Card className="">
          <CardContent className="">
            <Typography gutterBottom variant="h5" component="h2">
              Data Science
            </Typography>
            <Typography>
              Analyze data to extract meaningful insights and drive decision-making.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item key={3} xs={12} sm={6} md={4}>
        <Card className="">
          <CardContent className="">
            <Typography gutterBottom variant="h5" component="h2">
              Marketing
            </Typography>
            <Typography>
              Develop marketing strategies to increase brand awareness.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  </Container>
);
};
 

export default Navbar