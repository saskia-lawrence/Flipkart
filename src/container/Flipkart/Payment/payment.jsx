import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Container,
  Box,
  List,
  ListItem,
  Divider,
  Paper,
  IconButton,
  Grid,
  Stepper,
  ListItemAvatar,
  Avatar,
  Step,
  StepLabel,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
  CircularProgress,
} from "@mui/material";
import PaymentIcon from "@mui/icons-material/Payment";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ZTextField from "../../../components/ZTextFeild/ztextfeild";
import ZTypography from "../../../components/ZTyptography/ztyptography";
import ZButton from "../../../components/ZButton/zbutton";
import ZToasterMsg from "../../../components/ZTosterMessage/ztostermsg";

const steps = ["Order Summary", "Shipping Information", "Payment"];

const Payment = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const [shippingInfo, setShippingInfo] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
  });

  const [paymentInfo, setPaymentInfo] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    cardType: "",
  });

  const [errors, setErrors] = useState({
    shipping: {},
    payment: {},
  });

  const getCartFromStorage = () => {
    try {
      const cartData = localStorage.getItem("cart");
      if (
        !cartData ||
        cartData === "undefined" ||
        cartData === "null" ||
        cartData.trim() === ""
      ) {
        return [];
      }
      const parsed = JSON.parse(cartData);
      return Array.isArray(parsed) ? parsed : [];
    } catch (e) {
      console.error("Cart parsing error:", e);
      return [];
    }
  };

  const [products, setProducts] = useState([]);
  const [fromCart, setFromCart] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const cartProducts = getCartFromStorage();

        if (state?.products) {
          setProducts(state.products);
          setFromCart(state.fromCart || false);
        } else if (cartProducts.length > 0) {
          setProducts(cartProducts);
          setFromCart(true);
        } else {
          navigate(fromCart ? "/cart" : "/");
        }
      } catch (err) {
        setError("Failed to load cart data");
        console.error("Initialization error:", err);
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, [state, navigate]);

  const calculateTotal = () => {
    if (!Array.isArray(products)) return 0;
    return products.reduce(
      (total, item) => total + (item.price || 0) * (item.quantity || 1),
      0
    );
  };

  const handleNext = () => {
    if (validateCurrentStep()) {
      setActiveStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prev) => prev - 1);
  };

  const handleBackClick = () => {
    navigate(-1);
  };

  const validateCurrentStep = () => {
    if (activeStep === 1) return validateShippingInfo();
    if (activeStep === 2) return validatePaymentInfo();
    return true;
  };

  const validateShippingInfo = () => {
    const newErrors = {};
    let isValid = true;

    if (!shippingInfo.firstName.trim()) {
      newErrors.firstName = "First name is required";
      isValid = false;
    }

    if (!shippingInfo.lastName.trim()) {
      newErrors.lastName = "Last name is required";
      isValid = false;
    }

    if (!shippingInfo.address.trim()) {
      newErrors.address = "Address is required";
      isValid = false;
    }

    if (!shippingInfo.city.trim()) {
      newErrors.city = "City is required";
      isValid = false;
    }

    if (!shippingInfo.state.trim()) {
      newErrors.state = "State is required";
      isValid = false;
    }

    if (!shippingInfo.country.trim()) {
      newErrors.country = "Country is required";
      isValid = false;
    }

    if (!shippingInfo.zipCode.trim()) {
      newErrors.zipCode = "Zip code is required";
      isValid = false;
    } else if (!/^[1-9][0-9]{5}$/.test(shippingInfo.zipCode)) {
      newErrors.zipCode = "Invalid zip code format";
      isValid = false;
    }

    setErrors((prev) => ({ ...prev, shipping: newErrors }));
    return isValid;
  };

  const validatePaymentInfo = () => {
    const newErrors = {};
    let isValid = true;

    if (!paymentInfo.cardNumber.trim()) {
      newErrors.cardNumber = "Card number is required";
      isValid = false;
    } else if (!/^\d{16}$/.test(paymentInfo.cardNumber.replace(/\s/g, ""))) {
      newErrors.cardNumber = "Invalid card number (16 digits required)";
      isValid = false;
    }

    if (!paymentInfo.expiryDate.trim()) {
      newErrors.expiryDate = "Expiry date is required";
      isValid = false;
    } else if (!/^(0[1-9]|1[0-2])\/?([0-9]{2})$/.test(paymentInfo.expiryDate)) {
      newErrors.expiryDate = "Invalid format (MM/YY)";
      isValid = false;
    }

    if (!paymentInfo.cvv.trim()) {
      newErrors.cvv = "CVV is required";
      isValid = false;
    } else if (!/^\d{3,4}$/.test(paymentInfo.cvv)) {
      newErrors.cvv = "Invalid CVV (3-4 digits)";
      isValid = false;
    }

    if (!paymentInfo.cardType) {
      newErrors.cardType = "Card type is required";
      isValid = false;
    }

    setErrors((prev) => ({ ...prev, payment: newErrors }));
    return isValid;
  };

  const handleShippingChange = (e) => {
    const { name, value } = e.target;
    setShippingInfo((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors.shipping[name]) {
      setErrors((prev) => ({
        ...prev,
        shipping: { ...prev.shipping, [name]: undefined },
      }));
    }
  };

  const handlePaymentChange = (e) => {
    const { name, value } = e.target;
    let formattedValue = value;

    if (name === "cardNumber") {
      formattedValue =
        value
          .replace(/\s/g, "")
          .match(/.{1,4}/g)
          ?.join(" ")
          .substr(0, 19) || "";
    } else if (name === "expiryDate") {
      formattedValue = value
        .replace(/\D/g, "")
        .replace(/^(\d{2})/, "$1/")
        .substr(0, 5);
    }

    setPaymentInfo((prev) => ({
      ...prev,
      [name]: formattedValue || value,
    }));

    if (errors.payment[name]) {
      setErrors((prev) => ({
        ...prev,
        payment: { ...prev.payment, [name]: undefined },
      }));
    }
  };

  const handlePlaceOrder = async () => {
    if (!validatePaymentInfo()) return;

    if (!products || products.length === 0) {
      setError("No products to order");
      return;
    }

    try {
      localStorage.removeItem("cart");
      window.dispatchEvent(new Event("cartUpdated"));

      const orderData = {
        products: products.map((p) => ({
          id: p.id || `temp-${Math.random().toString(36).substr(2, 9)}`,
          name: p.name || "Unknown Product",
          price: p.price || 0,
          quantity: p.quantity || 1,
          image: p.image || "",
        })),
        fromCart,
        shippingInfo,
        paymentInfo: {
          ...paymentInfo,
          cardNumber: paymentInfo.cardNumber
            ? `•••• •••• •••• ${paymentInfo.cardNumber.slice(-4)}`
            : "•••• •••• •••• ••••",
        },
        timestamp: new Date().toISOString(),
      };

      navigate("/orderconfirmation", {
        state: orderData,
      });
    } catch (err) {
      setError(err.message || "Failed to place order");
      console.error("Order error:", err);
    }
  };

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
            <ZTypography flag="subheading" variant="h6" gutterBottom>
              Order Summary
            </ZTypography>
            <List>
              {products.map((item) => (
                <ListItem key={item.id || Math.random()} divider>
                  <ListItemAvatar>
                    <Avatar
                      src={item.image}
                      alt={item.name}
                      sx={{ width: 56, height: 56, mr: 2 }}
                      variant="rounded"
                    />
                  </ListItemAvatar>
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    width="100%"
                  >
                    <ZTypography flag="value">
                      {item.name || "Product"} (x{item.quantity || 1})
                    </ZTypography>
                    <ZTypography flag="value">
                      ${((item.price || 0) * (item.quantity || 1)).toFixed(2)}
                    </ZTypography>
                  </Box>
                </ListItem>
              ))}
            </List>
            <Divider sx={{ my: 2 }} />
            <ZTypography flag="subheading" variant="h6" textAlign="right">
              Total: ${calculateTotal().toFixed(2)}
            </ZTypography>
          </Paper>
        );
      case 1:
        return (
          <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
            <ZTypography flag="subheading" variant="h6" gutterBottom>
              Shipping Information
            </ZTypography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <ZTextField
                  label={<ZTypography flag="label">First Name</ZTypography>}
                  name="firstName"
                  value={shippingInfo.firstName}
                  onChange={handleShippingChange}
                  error={!!errors.shipping.firstName}
                  helperText={errors.shipping.firstName}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <ZTextField
                  label={<ZTypography flag="label">Last Name</ZTypography>}
                  name="lastName"
                  value={shippingInfo.lastName}
                  onChange={handleShippingChange}
                  error={!!errors.shipping.lastName}
                  helperText={errors.shipping.lastName}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <ZTextField
                  label={<ZTypography flag="label">Address</ZTypography>}
                  name="address"
                  value={shippingInfo.address}
                  onChange={handleShippingChange}
                  error={!!errors.shipping.address}
                  helperText={errors.shipping.address}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <ZTextField
                  label={<ZTypography flag="label">City</ZTypography>}
                  name="city"
                  value={shippingInfo.city}
                  onChange={handleShippingChange}
                  error={!!errors.shipping.city}
                  helperText={errors.shipping.city}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <ZTextField
                  label={<ZTypography flag="label">Zip Code</ZTypography>}
                  name="zipCode"
                  value={shippingInfo.zipCode}
                  onChange={handleShippingChange}
                  error={!!errors.shipping.zipCode}
                  helperText={errors.shipping.zipCode}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <ZTextField
                  label={<ZTypography flag="label">State</ZTypography>}
                  name="state"
                  value={shippingInfo.state}
                  onChange={handleShippingChange}
                  error={!!errors.shipping.state}
                  helperText={errors.shipping.state}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <ZTextField
                  label={<ZTypography flag="label">Country</ZTypography>}
                  name="country"
                  value={shippingInfo.country}
                  onChange={handleShippingChange}
                  error={!!errors.shipping.country}
                  helperText={errors.shipping.country}
                  fullWidth
                />
              </Grid>
            </Grid>
          </Paper>
        );
      case 2:
        return (
          <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
            <ZTypography flag="subheading" variant="h6" gutterBottom>
              Payment Method
            </ZTypography>
            <FormControl
              fullWidth
              sx={{ mb: 2 }}
              error={!!errors.payment.cardType}
            >
              <InputLabel>
                <ZTypography flag="label">Card Type</ZTypography>
              </InputLabel>
              <Select
                label={<ZTypography flag="label">Card Type</ZTypography>}
                name="cardType"
                value={paymentInfo.cardType}
                onChange={handlePaymentChange}
              >
                <MenuItem value="visa">
                  <ZTypography flag="value">Visa</ZTypography>
                </MenuItem>
                <MenuItem value="mastercard">
                  <ZTypography flag="value">Mastercard</ZTypography>
                </MenuItem>
                <MenuItem value="amex">
                  <ZTypography flag="value">American Express</ZTypography>
                </MenuItem>
                <MenuItem value="discover">
                  <ZTypography flag="value">Discover</ZTypography>
                </MenuItem>
              </Select>
              {errors.payment.cardType && (
                <FormHelperText>
                  <ZTypography flag="error">
                    {errors.payment.cardType}
                  </ZTypography>
                </FormHelperText>
              )}
            </FormControl>
            <ZTextField
              label={<ZTypography flag="label">Card Number</ZTypography>}
              name="cardNumber"
              value={paymentInfo.cardNumber}
              onChange={handlePaymentChange}
              error={!!errors.payment.cardNumber}
              helperText={errors.payment.cardNumber}
              placeholder="1234 5678 9012 3456"
              fullWidth
              sx={{ mb: 2 }}
            />
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <ZTextField
                  label={<ZTypography flag="label">Expiry Date</ZTypography>}
                  name="expiryDate"
                  value={paymentInfo.expiryDate}
                  onChange={handlePaymentChange}
                  error={!!errors.payment.expiryDate}
                  helperText={errors.payment.expiryDate}
                  placeholder="MM/YY"
                  fullWidth
                />
              </Grid>
              <Grid item xs={6}>
                <ZTextField
                  label={<ZTypography flag="label">CVV</ZTypography>}
                  name="cvv"
                  value={paymentInfo.cvv}
                  onChange={handlePaymentChange}
                  error={!!errors.payment.cvv}
                  helperText={errors.payment.cvv}
                  placeholder="123"
                  fullWidth
                />
              </Grid>
            </Grid>
          </Paper>
        );
      default:
        return null;
    }
  };

  if (isLoading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <ZToasterMsg
        open={!!error}
        severity="error"
        message={error}
        onClose={() => setError(null)}
      />

      <IconButton
        onClick={handleBackClick}
        sx={{ position: "absolute", top: 16, right: 16 }}
      >
        <ArrowBackIcon />
      </IconButton>

      <ZTypography flag="mainheader" variant="h4" gutterBottom>
        Checkout
      </ZTypography>

      <Stepper activeStep={activeStep} sx={{ mb: 4 }}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>
              <ZTypography flag="label">{label}</ZTypography>
            </StepLabel>
          </Step>
        ))}
      </Stepper>

      {getStepContent(activeStep)}

      <Box sx={{ display: "flex", justifyContent: "center" }}>
        {activeStep !== 0 && (
          <ZButton onClick={handleBack} sx={{ mr: 2 }}>
            <ZTypography flag="label">Back</ZTypography>
          </ZButton>
        )}
        {activeStep !== steps.length - 1 ? (
          <ZButton variant="contained" onClick={handleNext}>
            <ZTypography flag="label">Next</ZTypography>
          </ZButton>
        ) : (
          <ZButton
            variant="contained"
            color="primary"
            size="large"
            startIcon={<PaymentIcon />}
            onClick={handlePlaceOrder}
          >
            <ZTypography flag="label">Place Order</ZTypography>
          </ZButton>
        )}
      </Box>
    </Container>
  );
};

export default Payment;
