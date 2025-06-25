import React, { useState, useEffect } from "react";
import {
  Container,
  Typography,
  Box,
  Button,
  List,
  ListItem,
  ListItemText,
  Divider,
  IconButton,
  Snackbar,
  Alert,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import { useNavigate, useLocation } from "react-router-dom";

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Load cart from location state if available (for direct navigation)
    if (location.state?.cartItems) {
      setCart(location.state.cartItems);
    } else {
      // Or load from localStorage
      const savedCart = localStorage.getItem("cart");
      if (savedCart) {
        setCart(JSON.parse(savedCart));
      }
    }
  }, [location.state]);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const calculateSubtotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleRemoveItem = (productId) => {
    setCart((prevCart) => {
      const itemToRemove = prevCart.find((item) => item.id === productId);
      if (!itemToRemove) return prevCart;

      setSnackbar({
        open: true,
        message: `${itemToRemove.name} removed from cart`,
        severity: "info",
      });

      return prevCart.filter((item) => item.id !== productId);
    });
  };

  const handleCheckout = () => {
    if (cart.length === 0) {
      setSnackbar({
        open: true,
        message: "Your cart is empty",
        severity: "warning",
      });
      return;
    }
    navigate("/payment", { state: { cart } });
  };

  const handleClearCart = () => {
    setCart([]);
    setSnackbar({
      open: true,
      message: "Cart cleared",
      severity: "info",
    });
  };

  const handleCloseSnackbar = () => {
    setSnackbar((prev) => ({ ...prev, open: false }));
  };

  const handleQuantityChange = (productId, newQuantity) => {
    if (newQuantity < 1) return;

    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  // Group items by category
  const groupedCart = cart.reduce((acc, item) => {
    const category = item.category || "Other Items";
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(item);
    return acc;
  }, {});

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography variant="h4" sx={{ fontWeight: "bold", mb: 4 }}>
        Your Shopping Cart
      </Typography>

      {cart.length === 0 ? (
        <Box textAlign="center" py={8}>
          <Typography variant="h5" gutterBottom>
            Your cart is empty
          </Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={() => navigate("/")}
          >
            Continue Shopping
          </Button>
        </Box>
      ) : (
        <>
          {Object.entries(groupedCart).map(([category, items]) => (
            <Box key={category} sx={{ mb: 4 }}>
              {category && (
                <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold" }}>
                  {category}
                </Typography>
              )}

              <List sx={{ width: "100%", bgcolor: "background.paper" }}>
                {items.map((item) => (
                  <React.Fragment key={item.id}>
                    <ListItem
                      secondaryAction={
                        <IconButton
                          edge="end"
                          aria-label="delete"
                          onClick={() => handleRemoveItem(item.id)}
                        >
                          <DeleteIcon />
                        </IconButton>
                      }
                    >
                      <ListItemText
                        primary={item.name}
                        secondary={`Price: $${item.price.toFixed(2)}`}
                        primaryTypographyProps={{ fontWeight: "medium" }}
                      />
                      <Box
                        sx={{ display: "flex", alignItems: "center", mr: 4 }}
                      >
                        <Button
                          onClick={() =>
                            handleQuantityChange(item.id, item.quantity - 1)
                          }
                          disabled={item.quantity <= 1}
                        >
                          -
                        </Button>
                        <Typography sx={{ mx: 2 }}>{item.quantity}</Typography>
                        <Button
                          onClick={() =>
                            handleQuantityChange(item.id, item.quantity + 1)
                          }
                        >
                          +
                        </Button>
                        <Typography
                          variant="body1"
                          fontWeight="bold"
                          sx={{ ml: 4 }}
                        >
                          ${(item.price * item.quantity).toFixed(2)}
                        </Typography>
                      </Box>
                    </ListItem>
                    <Divider component="li" />
                  </React.Fragment>
                ))}
              </List>
            </Box>
          ))}

          <Box
            sx={{ mt: 4, p: 3, border: "1px solid #e0e0e0", borderRadius: 1 }}
          >
            <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold" }}>
              Order Summary
            </Typography>
            <Box
              sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}
            >
              <Typography variant="body1">
                Subtotal (
                {cart.reduce((total, item) => total + item.quantity, 0)} items):
              </Typography>
              <Typography variant="body1">
                ${calculateSubtotal().toFixed(2)}
              </Typography>
            </Box>
            <Box
              sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}
            >
              <Typography variant="body1">Delivery:</Typography>
              <Typography variant="body1">FREE</Typography>
            </Box>
            <Divider sx={{ my: 2 }} />
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography variant="h6" fontWeight="bold">
                Order Total:
              </Typography>
              <Typography variant="h6" fontWeight="bold">
                ${calculateSubtotal().toFixed(2)}
              </Typography>
            </Box>
          </Box>

          <Box sx={{ mt: 4, display: "flex", justifyContent: "space-between" }}>
            <Button
              variant="outlined"
              color="error"
              onClick={handleClearCart}
              sx={{ textTransform: "uppercase", fontWeight: "bold" }}
            >
              Clear Cart
            </Button>
            <Button
              variant="contained"
              color="primary"
              size="large"
              endIcon={<ShoppingCartCheckoutIcon />}
              onClick={handleCheckout}
              sx={{ textTransform: "uppercase", fontWeight: "bold", px: 4 }}
            >
              Proceed to Checkout
            </Button>
          </Box>
        </>
      )}

      <Snackbar
        open={snackbar.open}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbar.severity}
          sx={{ width: "100%" }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default Cart;
