"use client";
"use client";

import { useSearchParams } from 'next/navigation'; // Correct hook import for Next.js 13+
import { useEffect, useState } from 'react';

import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';

const SearchPage = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get('search'); // Get search query from URL
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  console.log("query",query)

  useEffect(() => {
    if (query) {
      // Fetch search results from your API
      fetch(`/api/Products/search?query=${query}`)
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json(); // Parse the response as JSON
        })
        .then(data => {
          setProducts(data); 
          console.log("data",data)// Update state with the fetched data
          setLoading(false);
        })
        .catch(error => {
          console.error('Error fetching search results:', error);
          setLoading(false);
        });
    } else {
      // Handle case where there is no query parameter
      setProducts([]);
      setLoading(false);
    }
  }, [query]);

  if (loading) {
    return <Typography variant="h6">Loading...</Typography>;
  }

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Search Results for "{query}"
      </Typography>
      <Grid container spacing={4}>
        {products.length > 0 ? (
          products.map(product => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <Card>
                <CardMedia
                  component="img"
                  height="140"
                  image={product.imageUrl} // Ensure product.image is the correct field
                  alt={product.title}
                />
                <CardContent>
                <Typography variant="h4">{product.title}</Typography>
                  <Typography variant="h6">{product.description}</Typography>
                  <Typography variant="body2" color="textSecondary">
                    ${product.prize}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">
                    View
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))
        ) : (
          <Typography margintop="3" variant="h6">No products found</Typography>
        )}
      </Grid>
    </Container>
  );
};

export default SearchPage;













