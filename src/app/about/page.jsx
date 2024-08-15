// pages/about.js
"use client";
// import React from 'react';
// import { Container, Typography, Box, Grid, Paper } from '@mui/material';
// import { styled } from '@mui/material/styles';

// const DeveloperImage = styled("img")({
//   width: '100%',
//   height: 'auto',
//   borderRadius: '8px',
// });

// const AboutContainer = styled(Container)({
//   marginTop: '40px',
//   marginBottom: '40px',
// });

// const SectionTitle = styled(Typography)({
//   marginBottom: '20px',
//   fontWeight: 'bold',
// });

// const SectionContent = styled(Typography)({
//   marginBottom: '20px',
//   lineHeight: '1.6',
// });

// export default function About() {
//   return (
//     <AboutContainer>
//       <Grid container spacing={4}>
//         <Grid item xs={12} md={6}>
//           <SectionTitle variant="h4">About the Developer</SectionTitle>
//           <SectionContent variant="body1">
//             Hello! I'm a passionate developer with a vision to create amazing web applications that solve real-world problems. With a focus on delivering high-quality, scalable, and user-friendly applications, I leverage modern technologies and best practices to ensure exceptional results.
//           </SectionContent>
//           <SectionTitle variant="h4">Technologies Used</SectionTitle>
//           <SectionContent variant="body1">
//             This project utilizes a range of powerful technologies and tools to build robust and efficient applications:
//             <ul>
//               <li>Next.js: A React framework for server-side rendering and static site generation.</li>
//               <li>Material-UI: A popular React UI framework that provides a set of components and styles.</li>
//               <li>NodeMailer: A module for sending emails from Node.js applications.</li>
//               <li>Cloudinary: A cloud-based service for managing and delivering images and videos.</li>
//               <li>Multer: A middleware for handling file uploads in Node.js.</li>
//               <li>ES6: Modern JavaScript syntax for cleaner and more efficient code.</li>
//               <li>MongoDB: A NoSQL database for flexible and scalable data storage.</li>
//             </ul>
//           </SectionContent>
//         </Grid>
//         <Grid item xs={12} md={6}>
//           <Paper elevation={3} sx={{ padding: 2 }}>
//             <DeveloperImage
//               src="https://images.pexels.com/photos/5935738/pexels-photo-5935738.jpeg?auto=compress&cs=tinysrgb&w=600"
//               alt="Developer Image"
//             />
//           </Paper>
//         </Grid>
//       </Grid>
//     </AboutContainer>
//   );
// }
// pages/about.js
// 






// pages/about.js
// import React from 'react';
// import { Container, Typography, Box, Grid, Paper } from '@mui/material';
// import { styled } from '@mui/material/styles';

// const DeveloperImage = styled('img')({
//   width: '100%',
//   height:"400px",
//   borderRadius: '8px',
// });

// const AboutContainer = styled(Container)({
//   marginTop: '40px',
//   marginBottom: '40px',
// });

// const SectionTitle = styled(Typography)({
//   marginBottom: '20px',
//   fontWeight: 'bold',
// });

// const SectionContent = styled(Typography)({
//   marginBottom: '20px',
//   lineHeight: '1.6',
// });

// const DeveloperSection = styled(Box)({
//   display: 'flex',
//   flexDirection: 'row',
//   alignItems: 'center',
//   marginBottom: '40px',
//   gap: '20px',
// });

// const TextSection = styled(Box)({
//   flex: 1,
// });

// const ImageSection = styled(Box)({
//   flex: 1,
// });

// export default function About() {
//   return (
//     <AboutContainer>
//       {/* Developer Section */}
//       <DeveloperSection>
//         <TextSection>
//           <SectionTitle variant="h4">About the Developer</SectionTitle>
//           <SectionContent variant="body1">
//             <Typography variant="h5">Sahil Altaf</Typography>
//             <Typography variant="body1" paragraph>
//               Sahil Altaf is a passionate Full Stack Developer with expertise in a variety of modern technologies. With a keen interest in building scalable and efficient applications, Sahil has honed skills in:
//             </Typography>
//             <ul>
//               <li><strong>Next.js</strong>: React framework for server-side rendering and static site generation.</li>
//               <li><strong>React.js</strong>: JavaScript library for building user interfaces.</li>
//               <li><strong>Express.js</strong>: Web application framework for Node.js.</li>
//               <li><strong>Material-UI</strong>: React UI framework with a comprehensive set of components.</li>
//               <li><strong>Tailwind CSS</strong>: Utility-first CSS framework for rapid UI development.</li>
//               <li><strong>HTML</strong>: Standard markup language for creating web pages.</li>
//               <li><strong>CSS</strong>: Style sheet language used for describing the presentation of a document written in HTML.</li>
//               <li><strong>React Redux</strong>: Predictable state container for JavaScript apps, commonly used with React.</li>
//               <li><strong>MongoDB</strong>: NoSQL database for flexible and scalable data storage.</li>
//               <li><strong>MySQL</strong>: Relational database management system for structured data.</li>
//             </ul>
//             <Typography variant="body1" paragraph>
//               Sahil’s goal is to leverage these technologies to build high-quality applications that provide exceptional user experiences.
//             </Typography>
//           </SectionContent>
//         </TextSection>
//         <ImageSection>
//           <Paper elevation={3} sx={{ padding: 0 }}>
//             <DeveloperImage
//               src="https://res.cloudinary.com/dfi2vbznv/image/upload/v1723732226/C360_20240623-203418-53_w8950a.jpg"
//               alt="Developer Image"
//               width={100}
//               height={200}
//             />
//           </Paper>
//         </ImageSection>
//       </DeveloperSection>

//       {/* App and Technology Details */}
//       <Grid container spacing={4}>
//         <Grid item xs={12} md={6}>
//           <SectionTitle variant="h4">About Our App</SectionTitle>
//           <SectionContent variant="body1">
//             Welcome to our app, where you can find mobile phones at unbeatable prices! Our platform is designed to help you discover the best deals on mobile phones with exclusive offers and discounts. Whether you're looking for budget-friendly options or premium models, we've got you covered. Our mission is to make mobile phone shopping easier and more affordable for everyone.
//           </SectionContent>
//           <SectionTitle variant="h4">Technologies Used</SectionTitle>
//           <SectionContent variant="body1">
//             To deliver this exceptional shopping experience, our app leverages a range of modern technologies:
//             <ul>
//               <li><strong>Next.js:</strong> A React framework for server-side rendering and static site generation.</li>
//               <li><strong>Material-UI:</strong> A React UI framework providing a comprehensive set of components and styles.</li>
//               <li><strong>NodeMailer:</strong> A module for sending emails from Node.js applications.</li>
//               <li><strong>Cloudinary:</strong> A cloud-based service for managing and delivering images and videos.</li>
//               <li><strong>Multer:</strong> Middleware for handling file uploads in Node.js.</li>
//               <li><strong>ES6:</strong> Modern JavaScript syntax for cleaner and more efficient code.</li>
//               <li><strong>MongoDB:</strong> A NoSQL database for flexible and scalable data storage.</li>
//             </ul>
//           </SectionContent>
//         </Grid>
//         <Grid item xs={12} md={6}>
          
//         </Grid>
//       </Grid>
//     </AboutContainer>
//   );
// }





// pages/about.js
import React from 'react';
import { Container, Typography, Box, Grid, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

// Styled components
const DeveloperImage = styled('img')({
  width: '100%',
  maxWidth: '500px',  // Medium size image
//   height: 'auto',
  height: "500px",

borderRadius: '',
    // Rounded image
//   objectFit: 'cover',  // Ensures image covers the rounded area without distortion
});

const AboutContainer = styled(Container)({
  marginTop: '40px',
  marginBottom: '40px',
});

const SectionTitle = styled(Typography)({
  marginBottom: '20px',
  fontWeight: 'bold',
});

const SectionContent = styled(Typography)({
  marginBottom: '20px',
  lineHeight: '1.6',
});

const DeveloperSection = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  marginBottom: '40px',
  gap: '20px',
});

const TextSection = styled(Box)({
  flex: 1,
});

const ImageSection = styled(Box)({
  flex: 1,
  display: 'flex',
  justifyContent: 'center',  // Center the image horizontally
});

export default function About() {
  return (
    <AboutContainer>
      {/* Developer Section */}
      <DeveloperSection>
        <TextSection>
          <SectionTitle variant="h4">About the Developer</SectionTitle>
          <SectionContent variant="body1">
            <Typography variant="h5">Sahil Altaf</Typography>
            <Typography variant="body1" paragraph>
              Sahil Altaf is a passionate Full Stack Developer with expertise in a variety of modern technologies. With a keen interest in building scalable and efficient applications, Sahil has honed skills in:
            </Typography>
            <ul>
              <li><strong>Next.js</strong>: React framework for server-side rendering and static site generation.</li>
              <li><strong>React.js</strong>: JavaScript library for building user interfaces.</li>
              <li><strong>Express.js</strong>: Web application framework for Node.js.</li>
              <li><strong>Material-UI</strong>: React UI framework with a comprehensive set of components.</li>
              <li><strong>Tailwind CSS</strong>: Utility-first CSS framework for rapid UI development.</li>
              <li><strong>HTML</strong>: Standard markup language for creating web pages.</li>
              <li><strong>CSS</strong>: Style sheet language used for describing the presentation of a document written in HTML.</li>
              <li><strong>React Redux</strong>: Predictable state container for JavaScript apps, commonly used with React.</li>
              <li><strong>MongoDB</strong>: NoSQL database for flexible and scalable data storage.</li>
              <li><strong>MySQL</strong>: Relational database management system for structured data.</li>
            </ul>
            <Typography variant="body1" paragraph>
              Sahil’s goal is to leverage these technologies to build high-quality applications that provide exceptional user experiences.
            </Typography>
          </SectionContent>
        </TextSection>
        <ImageSection>

         
            <DeveloperImage
              src="https://res.cloudinary.com/dfi2vbznv/image/upload/v1723732226/C360_20240623-203418-53_w8950a.jpg"
              alt="Developer Image"
            />
         
        </ImageSection>
      </DeveloperSection>

      {/* App and Technology Details */}
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <SectionTitle variant="h4">About Our App</SectionTitle>
          <SectionContent variant="body1">
            Welcome to our app, where you can find mobile phones at unbeatable prices! Our platform is designed to help you discover the best deals on mobile phones with exclusive offers and discounts. Whether you're looking for budget-friendly options or premium models, we've got you covered. Our mission is to make mobile phone shopping easier and more affordable for everyone.
          </SectionContent>
          <SectionTitle variant="h4">Technologies Used</SectionTitle>
          <SectionContent variant="body1">
            To deliver this exceptional shopping experience, our app leverages a range of modern technologies:
            <ul>
              <li><strong>Next.js:</strong> A React framework for server-side rendering and static site generation.</li>
              <li><strong>Material-UI:</strong> A React UI framework providing a comprehensive set of components and styles.</li>
              <li><strong>NodeMailer:</strong> A module for sending emails from Node.js applications.</li>
              <li><strong>Cloudinary:</strong> A cloud-based service for managing and delivering images and videos.</li>
              <li><strong>Multer:</strong> Middleware for handling file uploads in Node.js.</li>
              <li><strong>ES6:</strong> Modern JavaScript syntax for cleaner and more efficient code.</li>
              <li><strong>MongoDB:</strong> A NoSQL database for flexible and scalable data storage.</li>
            </ul>
          </SectionContent>
        </Grid>
        <Grid item xs={12} md={6}>
          
        </Grid>
      </Grid>
    </AboutContainer>
  );
}
