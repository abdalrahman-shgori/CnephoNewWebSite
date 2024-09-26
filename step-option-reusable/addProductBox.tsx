import React from "react";

import { Box, Button, Grid, Switch, Typography } from '@mui/material';

export default function AddProductBox({
  setAddProductsActive,
  addProductsActive
}: any) {

  return (
    <>
      <Box
        sx={{
          border: 1,
          borderColor: 'grey.300',
          borderRadius: 2,
          p: 3,
          mb: 2,
          display: addProductsActive ? "none" : "flex",
          flexDirection: 'column',
          alignItems: 'flex-start',
          marginTop: "50px",
        }}
      >
        <Typography variant="h6" sx={{ mb: 2 }}>
          Product options and variations
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          Add product options like size and color for your customers to choose from on the product page. You can also offer extras that can be added to the product, for example, gift wrapping.
        </Typography>
        <Button variant="contained" color="primary"
          onClick={setAddProductsActive}
          sx={{
            alignSelf: 'start',
            borderRadius: "16px",

          }}>
          Add a product option
        </Button>
      </Box>
    </>
  )
}