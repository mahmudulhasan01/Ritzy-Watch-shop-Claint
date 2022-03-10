import { Box, Container, Grid } from "@material-ui/core";
import React from "react";
import Product from "./Product";

const Products = () => {
  return (
    <Container>
      <h1 className="text-center m-4">Our Collections</h1>
      <Box>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {Array.from(Array(6)).map((_, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Product></Product>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Products;
