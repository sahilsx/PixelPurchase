// app/search/page.tsx
import React from 'react';
import { Suspense } from 'react';
import ClientSearchPage from './ClientSearchPage'; // Ensure the path is correct
import { Container, Typography } from '@mui/material';

const SearchPage = () => {
  return (
    <Container>
      <Typography variant="h6" gutterBottom>
        Search Results
      </Typography>

      <Suspense fallback={<div>Loading...</div>}>
        <ClientSearchPage />
      </Suspense>
    </Container>
  );
};

export default SearchPage;
