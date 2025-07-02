// OrderConfirmation.js
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  Container,
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
import ZTypography from "../../../components/ZTyptography/ztyptography";

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
          <ZTypography flag="mainheader" variant="h4" gutterBottom>
            Order Placed Successfully!
          </ZTypography>
          <ZTypography flag="subheading" variant="body1">
            Thank you for your purchase
          </ZTypography>
        </Box>

        {/* Order Summary Section */}
        <Box sx={{ mb: 4 }}>
          <ZTypography flag="mainheader" variant="h6" gutterBottom>
            Order Summary
          </ZTypography>
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
                  <ZTypography flag="subheading" variant="body1">
                    {item.name}
                  </ZTypography>
                  <ZTypography flag="label" variant="body2">
                    Quantity: {item.quantity}
                  </ZTypography>
                </Box>
                <ZTypography flag="subheading" variant="body1">
                  ${(item.price * item.quantity).toFixed(2)}
                </ZTypography>
              </ListItem>
            ))}
          </List>
          <Divider sx={{ my: 2 }} />
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <ZTypography flag="mainheader" variant="h6">
              Order Total:
            </ZTypography>
            <ZTypography flag="mainheader" variant="h6">
              ${calculateTotal().toFixed(2)}
            </ZTypography>
          </Box>
        </Box>

        {/* Shipping Information */}
        <Box sx={{ mb: 4 }}>
          <ZTypography flag="mainheader" variant="h6" gutterBottom>
            Shipping Information
          </ZTypography>
          <ZTypography flag="value">
            {shippingInfo.firstName} {shippingInfo.lastName}
          </ZTypography>
          <ZTypography flag="value">{shippingInfo.address}</ZTypography>
          <ZTypography flag="value">
            {shippingInfo.city}, {shippingInfo.state} {shippingInfo.zipCode}
          </ZTypography>
          <ZTypography flag="value">{shippingInfo.country}</ZTypography>
        </Box>

        {/* Payment Information */}
        <Box sx={{ mb: 4 }}>
          <ZTypography flag="mainheader" variant="h6" gutterBottom>
            Payment Method
          </ZTypography>
          <ZTypography flag="value">
            {paymentInfo?.cardType
              ? `${
                  paymentInfo.cardType.charAt(0).toUpperCase() +
                  paymentInfo.cardType.slice(1)
                } ending in ${paymentInfo.cardNumber?.slice(-4) || "****"}`
              : "Payment information not available"}
          </ZTypography>
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
            <ZTypography flag="label">Continue Shopping</ZTypography>
          </Button>
          <Button
            variant="outlined"
            startIcon={<ShoppingCartCheckoutIcon />}
            onClick={() => navigate("/orders")}
            sx={{ px: 4 }}
          >
            <ZTypography flag="label">View Order History</ZTypography>
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default OrderConfirmation;
