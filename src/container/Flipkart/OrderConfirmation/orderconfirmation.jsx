// OrderConfirmation.js
import React, { useEffect } from "react";
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
  ListItemAvatar,
  Avatar,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import HomeIcon from "@mui/icons-material/Home";
import { useNavigate } from "react-router-dom";

const OrderConfirmation = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { products = [], shippingInfo = {}, paymentInfo = {} } = state || {};

  const calculateTotal = () => {
    return products.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const handleContinueShopping = () => {
    navigate("/dashboard");
  };

  // OrderConfirmation.js - Add this inside the component, before the return statement
  useEffect(() => {
    if (state && state.products && state.products.length > 0) {
      const newOrder = {
        id: `ORD-${Math.floor(Math.random() * 1000000)}`,
        date: new Date().toISOString(),
        products: state.products,
        status: "processing",
        deliveryDate: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
        total: calculateTotal(),
        shippingAddress: state.shippingInfo,
        paymentMethod: state.paymentInfo?.cardType
          ? `${
              state.paymentInfo.cardType.charAt(0).toUpperCase() +
              state.paymentInfo.cardType.slice(1)
            } ending in ${state.paymentInfo.cardNumber?.slice(-4) || "****"}`
          : "Payment information not available",
        trackingNumber: `TRK${Math.floor(Math.random() * 1000000000)}`,
        carrier: ["FedEx", "UPS", "USPS"][Math.floor(Math.random() * 3)],
      };

      const existingOrders = JSON.parse(localStorage.getItem("orders") || "[]");

      const updatedOrders = [newOrder, ...existingOrders];

      localStorage.setItem("orders", JSON.stringify(updatedOrders));
    }
  }, [state]);

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            mb: 4,
          }}
        >
          <CheckCircleIcon color="success" sx={{ fontSize: 80, mb: 2 }} />
          <Typography variant="h4" gutterBottom>
            Order Placed Successfully!
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Thank you for your purchase
          </Typography>
        </Box>

        {/* Order Summary Section */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
            Order Summary
          </Typography>
          <List>
            {products.map((item) => (
              <ListItem key={item.id} divider>
                <ListItemAvatar>
                  <Avatar
                    src={item.image}
                    alt={item.name}
                    sx={{ width: 56, height: 56, mr: 2 }}
                    variant="rounded"
                  />
                </ListItemAvatar>
                <Box sx={{ flexGrow: 1 }}>
                  <Typography variant="body1" fontWeight="medium">
                    {item.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Quantity: {item.quantity}
                  </Typography>
                </Box>
                <Typography variant="body1" fontWeight="bold">
                  ${(item.price * item.quantity).toFixed(2)}
                </Typography>
              </ListItem>
            ))}
          </List>
          <Divider sx={{ my: 2 }} />
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="h6" fontWeight="bold">
              Order Total:
            </Typography>
            <Typography variant="h6" fontWeight="bold">
              ${calculateTotal().toFixed(2)}
            </Typography>
          </Box>
        </Box>

        {/* Shipping Information */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
            Shipping Information
          </Typography>
          <Typography>
            {shippingInfo.firstName} {shippingInfo.lastName}
          </Typography>
          <Typography>{shippingInfo.address}</Typography>
          <Typography>
            {shippingInfo.city}, {shippingInfo.state} {shippingInfo.zipCode}
          </Typography>
          <Typography>{shippingInfo.country}</Typography>
        </Box>

        {/* Payment Information */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
            Payment Method
          </Typography>
          <Typography>
            {paymentInfo?.cardType
              ? `${
                  paymentInfo.cardType.charAt(0).toUpperCase() +
                  paymentInfo.cardType.slice(1)
                } ending in ${paymentInfo.cardNumber?.slice(-4) || "****"}`
              : "Payment information not available"}
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 2,
            mt: 4,
          }}
        >
          <Button
            variant="contained"
            color="primary"
            startIcon={<HomeIcon />}
            onClick={handleContinueShopping}
            sx={{ px: 4 }}
          >
            Continue Shopping
          </Button>
          <Button
            variant="outlined"
            startIcon={<ShoppingCartCheckoutIcon />}
            onClick={() => navigate("/orders")}
            sx={{ px: 4 }}
          >
            View Order History
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default OrderConfirmation;
