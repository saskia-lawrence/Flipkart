import React from "react";
import { useLocation } from "react-router-dom";
import {
  Container,
  Typography,
  Box,
  Button,
  List,
  ListItem,
  Divider,
  Paper,
  TextField,
  Grid,
} from "@mui/material";
import PaymentIcon from "@mui/icons-material/Payment";

const Payment = () => {
  const { state } = useLocation();
  const products = state?.products || [];
  const fromCart = state?.fromCart || false;

  const calculateTotal = () => {
    return products.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>
        Checkout
      </Typography>

      <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
        <Typography variant="h6" gutterBottom>
          Order Summary
        </Typography>
        <List>
          {products.map((item) => (
            <ListItem key={item.id} divider>
              <Box display="flex" justifyContent="space-between" width="100%">
                <Typography>
                  {item.name} (x{item.quantity})
                </Typography>
                <Typography>
                  ${(item.price * item.quantity).toFixed(2)}
                </Typography>
              </Box>
            </ListItem>
          ))}
        </List>

        <Divider sx={{ my: 2 }} />

        <Typography variant="h6" textAlign="right">
          Total: ${calculateTotal().toFixed(2)}
        </Typography>
      </Paper>

      <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
        <Typography variant="h6" gutterBottom>
          Shipping Information
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="First Name" variant="outlined" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="Last Name" variant="outlined" />
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth label="Address" variant="outlined" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="City" variant="outlined" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="Zip Code" variant="outlined" />
          </Grid>
        </Grid>
      </Paper>

      <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
        <Typography variant="h6" gutterBottom>
          Payment Method
        </Typography>
        <TextField
          fullWidth
          label="Card Number"
          variant="outlined"
          sx={{ mb: 2 }}
        />
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField fullWidth label="Expiry Date" variant="outlined" />
          </Grid>
          <Grid item xs={6}>
            <TextField fullWidth label="CVV" variant="outlined" />
          </Grid>
        </Grid>
      </Paper>

      <Box textAlign="center">
        <Button
          variant="contained"
          color="primary"
          size="large"
          startIcon={<PaymentIcon />}
        >
          Place Order
        </Button>
      </Box>
    </Container>
  );
};

export default Payment;
