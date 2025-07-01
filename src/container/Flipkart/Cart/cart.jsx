import React, { useState, useEffect } from "react";
import {
  Container,
  Card,
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Divider,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import { useNavigate, useLocation } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import emptycart from "../../../utils/assets/images/emptycart.jpg";
import ZTypography from "../../../components/ZTyptography/ztyptography";
import ZButton from "../../../components/ZButton/zbutton";
import ZToasterMsg from "../../../components/ZTosterMessage/ztostermsg";

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [toaster, setToaster] = useState({
    open: false,
    message: "",
    severity: "success",
  });
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.state?.cartItems) {
      setCart(location.state.cartItems);
    } else {
      const savedCart = localStorage.getItem("cart");
      if (savedCart) {
        setCart(JSON.parse(savedCart));
      }
    }
  }, [location.state]);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    window.dispatchEvent(new Event("cartUpdated"));

    if (location.state?.onCartUpdate) {
      location.state.onCartUpdate();
    }
  }, [cart, location.state]);

  const calculateSubtotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleRemoveItem = (productId) => {
    setCart((prevCart) => {
      const itemToRemove = prevCart.find((item) => item.id === productId);
      if (!itemToRemove) return prevCart;

      setToaster({
        open: true,
        message: `${itemToRemove.name} removed from cart`,
        severity: "info",
      });

      return prevCart.filter((item) => item.id !== productId);
    });
  };

  const handleCheckout = () => {
    if (cart.length === 0) {
      setToaster({
        open: true,
        message: "Your cart is empty",
        severity: "warning",
      });
      return;
    }
    navigate("/payment", {
      state: {
        products: cart,
        fromCart: true,
      },
    });
  };

  const handleClearCart = () => {
    setCart([]);
    setToaster({
      open: true,
      message: "Cart cleared",
      severity: "info",
    });
  };

  const handleCloseToaster = () => {
    setToaster((prev) => ({ ...prev, open: false }));
  };

  const handleQuantityChange = (productId, newQuantity) => {
    if (newQuantity < 1) return;

    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const handleBackClick = () => {
    navigate(-1);
  };

  const handleContinueShopping = () => {
    navigate("/dashboard");
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
    <Container maxWidth="md" sx={{ py: 1 }}>
      <Card
        sx={{
          p: { xs: 2, md: 5 },
          borderRadius: 4,
          boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)",
          backgroundColor: "rgba(255, 255, 255, 0.95)",
          minHeight: "100vh",
          position: "relative",
        }}
      >
        <IconButton
          onClick={handleBackClick}
          sx={{
            position: "absolute",
            top: 16,
            right: 16,
            backgroundColor: "rgba(0, 0, 0, 0.04)",
            "&:hover": {
              backgroundColor: "rgba(0, 0, 0, 0.08)",
            },
          }}
        >
          <ArrowBackIcon />
        </IconButton>

        {cart.length > 0 ? (
          <>
            <ZTypography variant="h4" sx={{ mb: 4, fontWeight: "bold" }}>
              Your Shopping Cart
              <ShoppingBasketIcon sx={{ ml: 2, verticalAlign: "middle" }} />
            </ZTypography>

            {Object.entries(groupedCart).map(([category, items]) => (
              <Box key={category} sx={{ mb: 4 }}>
                {category && (
                  <ZTypography
                    variant="h6"
                    sx={{
                      mb: 2,
                      fontWeight: "bold",
                      color: "primary.main",
                      textTransform: "uppercase",
                      letterSpacing: "1px",
                    }}
                  >
                    {category}
                  </ZTypography>
                )}

                <List
                  sx={{
                    width: "100%",
                    bgcolor: "background.paper",
                    borderRadius: 2,
                  }}
                >
                  {items.map((item) => (
                    <React.Fragment key={item.id}>
                      <ListItem
                        sx={{
                          transition: "all 0.3s ease",
                          "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.02)" },
                        }}
                        secondaryAction={
                          <IconButton
                            edge="end"
                            aria-label="delete"
                            onClick={() => handleRemoveItem(item.id)}
                            sx={{
                              color: "error.main",
                              "&:hover": {
                                backgroundColor: "rgba(255, 0, 0, 0.08)",
                              },
                            }}
                          >
                            <DeleteIcon />
                          </IconButton>
                        }
                      >
                        <ListItemAvatar>
                          <Avatar
                            src={item.image}
                            alt={item.name}
                            sx={{
                              width: 80,
                              height: 80,
                              mr: 3,
                              borderRadius: 2,
                            }}
                            variant="rounded"
                          />
                        </ListItemAvatar>
                        <ListItemText
                          primary={
                            <ZTypography
                              variant="subtitle1"
                              fontWeight="medium"
                              sx={{ mb: 1 }}
                            >
                              {item.name}
                            </ZTypography>
                          }
                          secondary={
                            <ZTypography variant="body2">
                              ${item.price.toFixed(2)}
                            </ZTypography>
                          }
                          sx={{ flex: "1 1 auto" }}
                        />
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            mr: 4,
                            minWidth: 150,
                          }}
                        >
                          <ZButton
                            onClick={() =>
                              handleQuantityChange(item.id, item.quantity - 1)
                            }
                            disabled={item.quantity <= 1}
                            sx={{
                              minWidth: 32,
                              height: 32,
                              borderRadius: "50%",
                            }}
                          >
                            -
                          </ZButton>
                          <ZTypography
                            sx={{ mx: 2, minWidth: 24, textAlign: "center" }}
                          >
                            {item.quantity}
                          </ZTypography>
                          <ZButton
                            onClick={() =>
                              handleQuantityChange(item.id, item.quantity + 1)
                            }
                            sx={{
                              minWidth: 32,
                              height: 32,
                              borderRadius: "50%",
                            }}
                          >
                            +
                          </ZButton>
                          <ZTypography
                            variant="body1"
                            fontWeight="bold"
                            sx={{ ml: 4, minWidth: 80, textAlign: "right" }}
                          >
                            ${(item.price * item.quantity).toFixed(2)}
                          </ZTypography>
                        </Box>
                      </ListItem>
                      <Divider component="li" />
                    </React.Fragment>
                  ))}
                </List>
              </Box>
            ))}

            {/* Order Summary */}
            <Box
              sx={{ mt: 4, p: 3, border: "1px solid #e0e0e0", borderRadius: 2 }}
            >
              <ZTypography
                variant="h6"
                sx={{ mb: 2, fontWeight: "bold", color: "primary.main" }}
              >
                Order Summary
              </ZTypography>

              {/* Product Images Preview */}
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 1,
                  mb: 2,
                  justifyContent: "center",
                }}
              >
                {cart.map((item) => (
                  <Avatar
                    key={item.id}
                    src={item.image}
                    alt={item.name}
                    sx={{ width: 48, height: 48, border: "2px solid white" }}
                  />
                ))}
              </Box>

              <Box
                sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}
              >
                <ZTypography variant="body1">
                  Subtotal (
                  {cart.reduce((total, item) => total + item.quantity, 0)}{" "}
                  items):
                </ZTypography>
                <ZTypography variant="body1" fontWeight="medium">
                  ${calculateSubtotal().toFixed(2)}
                </ZTypography>
              </Box>

              {/* ... other summary elements ... */}

              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <ZTypography variant="h6" fontWeight="bold">
                  Order Total:
                </ZTypography>
                <ZTypography
                  variant="h6"
                  fontWeight="bold"
                  color="primary.main"
                >
                  ${calculateSubtotal().toFixed(2)}
                </ZTypography>
              </Box>
            </Box>

            <Box
              sx={{
                mt: 4,
                display: "flex",
                justifyContent: "space-between",
                gap: 2,
              }}
            >
              <ZButton
                variant="outlined"
                color="error"
                onClick={handleClearCart}
                sx={{
                  textTransform: "uppercase",
                  fontWeight: "bold",
                  px: 4,
                  py: 1.5,
                }}
              >
                Clear Cart
              </ZButton>
              <ZButton
                variant="contained"
                color="primary"
                size="large"
                endIcon={<ShoppingCartCheckoutIcon />}
                onClick={handleCheckout}
                sx={{
                  textTransform: "uppercase",
                  fontWeight: "bold",
                  px: 4,
                  py: 1.5,
                }}
              >
                Proceed to Checkout
              </ZButton>
            </Box>
          </>
        ) : (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              height: "70vh",
            }}
          >
            <img
              src={emptycart}
              alt="Empty cart"
              style={{ width: "300px", maxWidth: "100%" }}
            />
            <ZTypography variant="h5" sx={{ mb: 2, fontWeight: "bold" }}>
              Your Cart is Empty
            </ZTypography>
            <ZTypography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
              Looks like you haven't added anything to your cart yet.
            </ZTypography>
            <ZButton
              variant="contained"
              color="primary"
              size="large"
              onClick={handleContinueShopping}
              lable="Continue Shopping"
              sx={{ px: 6, py: 1.5, fontWeight: "bold" }}
            >
              Continue Shopping
            </ZButton>
          </Box>
        )}

        <ZToasterMsg
          open={toaster.open}
          message={toaster.message}
          severity={toaster.severity}
          onClose={handleCloseToaster}
        />
      </Card>
    </Container>
  );
};

export default Cart;
