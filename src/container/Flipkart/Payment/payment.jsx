import React, { useState } from "react";
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
} from "@mui/material";
import PaymentIcon from "@mui/icons-material/Payment";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ZTypography from "../../../components/ZTyptography/ztyptography";
import ZTextField from "../../../components/ZTextFeild/ztextfeild";
import ZButton from "../../../components/ZButton/zbutton";

const steps = ["Order Summary", "Shipping Information", "Payment"];

const Payment = () => {
  const { state } = useLocation();
  const products = state?.products || [];
  const fromCart = state?.fromCart || false;
  const [activeStep, setActiveStep] = useState(0);
  const navigate = useNavigate();

  // Form state
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

  const calculateTotal = () => {
    return products.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const handleNext = () => {
    if (validateCurrentStep()) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleBackClick = () => {
    navigate(-1);
  };

  const validateCurrentStep = () => {
    if (activeStep === 1) {
      return validateShippingInfo();
    } else if (activeStep === 2) {
      return validatePaymentInfo();
    }
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

    setErrors({ ...errors, shipping: newErrors });
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

    setErrors({ ...errors, payment: newErrors });
    return isValid;
  };

  const handleShippingChange = (e) => {
    const { name, value } = e.target;
    setShippingInfo({
      ...shippingInfo,
      [name]: value,
    });

    if (errors.shipping[name]) {
      setErrors({
        ...errors,
        shipping: { ...errors.shipping, [name]: undefined },
      });
    }
  };

  const handlePaymentChange = (e) => {
    const { name, value } = e.target;

    if (name === "cardNumber") {
      const formattedValue =
        value
          .replace(/\s/g, "")
          .match(/.{1,4}/g)
          ?.join(" ")
          .substr(0, 19) || "";
      setPaymentInfo({
        ...paymentInfo,
        [name]: formattedValue,
      });
    } else if (name === "expiryDate") {
      const formattedValue = value
        .replace(/\D/g, "")
        .replace(/^(\d{2})/, "$1/")
        .substr(0, 5);
      setPaymentInfo({
        ...paymentInfo,
        [name]: formattedValue,
      });
    } else {
      setPaymentInfo({
        ...paymentInfo,
        [name]: value,
      });
    }

    if (errors.payment[name]) {
      setErrors({
        ...errors,
        payment: { ...errors.payment, [name]: undefined },
      });
    }
  };

  const handlePlaceOrder = () => {
    if (validatePaymentInfo()) {
      localStorage.removeItem("cart");
      window.dispatchEvent(new Event("cartUpdated"));
      navigate("/orderconfirmation", {
        state: {
          products,
          fromCart,
          shippingInfo,
          paymentInfo: {
            ...paymentInfo,
            cardNumber: `•••• •••• •••• ${paymentInfo.cardNumber.slice(-4)}`,
          },
        },
      });
    }
  };

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
            <ZTypography variant="h6" gutterBottom>
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
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    width="100%"
                  >
                    <ZTypography>
                      {item.name} (x{item.quantity})
                    </ZTypography>
                    <ZTypography>
                      ${(item.price * item.quantity).toFixed(2)}
                    </ZTypography>
                  </Box>
                </ListItem>
              ))}
            </List>
            <Divider sx={{ my: 2 }} />
            <ZTypography variant="h6" textAlign="right">
              Total: ${calculateTotal().toFixed(2)}
            </ZTypography>
          </Paper>
        );
      case 1:
        return (
          <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
            <ZTypography variant="h6" gutterBottom>
              Shipping Information
            </ZTypography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <ZTextField
                  fullWidth
                  label="First Name"
                  name="firstName"
                  value={shippingInfo.firstName}
                  onChange={handleShippingChange}
                  error={!!errors.shipping.firstName}
                  helperText={errors.shipping.firstName}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <ZTextField
                  fullWidth
                  label="Last Name"
                  name="lastName"
                  value={shippingInfo.lastName}
                  onChange={handleShippingChange}
                  error={!!errors.shipping.lastName}
                  helperText={errors.shipping.lastName}
                />
              </Grid>
              <Grid item xs={12}>
                <ZTextField
                  fullWidth
                  label="Address"
                  name="address"
                  value={shippingInfo.address}
                  onChange={handleShippingChange}
                  error={!!errors.shipping.address}
                  helperText={errors.shipping.address}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <ZTextField
                  fullWidth
                  label="City"
                  name="city"
                  value={shippingInfo.city}
                  onChange={handleShippingChange}
                  error={!!errors.shipping.city}
                  helperText={errors.shipping.city}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <ZTextField
                  fullWidth
                  label="Zip Code"
                  name="zipCode"
                  value={shippingInfo.zipCode}
                  onChange={handleShippingChange}
                  error={!!errors.shipping.zipCode}
                  helperText={errors.shipping.zipCode}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <ZTextField
                  fullWidth
                  label="State"
                  name="state"
                  value={shippingInfo.state}
                  onChange={handleShippingChange}
                  error={!!errors.shipping.state}
                  helperText={errors.shipping.state}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <ZTextField
                  fullWidth
                  label="Country"
                  name="country"
                  value={shippingInfo.country}
                  onChange={handleShippingChange}
                  error={!!errors.shipping.country}
                  helperText={errors.shipping.country}
                />
              </Grid>
            </Grid>
          </Paper>
        );
      case 2:
        return (
          <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
            <ZTypography variant="h6" gutterBottom>
              Payment Method
            </ZTypography>
            <FormControl
              fullWidth
              sx={{ mb: 2 }}
              error={!!errors.payment.cardType}
            >
              <InputLabel>Card Type</InputLabel>
              <Select
                label="Card Type"
                name="cardType"
                value={paymentInfo.cardType}
                onChange={handlePaymentChange}
              >
                <MenuItem value="visa">Visa</MenuItem>
                <MenuItem value="mastercard">Mastercard</MenuItem>
                <MenuItem value="amex">American Express</MenuItem>
                <MenuItem value="discover">Discover</MenuItem>
              </Select>
              {errors.payment.cardType && (
                <FormHelperText>{errors.payment.cardType}</FormHelperText>
              )}
            </FormControl>
            <ZTextField
              fullWidth
              label="Card Number"
              name="cardNumber"
              value={paymentInfo.cardNumber}
              onChange={handlePaymentChange}
              sx={{ mb: 2 }}
              error={!!errors.payment.cardNumber}
              helperText={errors.payment.cardNumber}
              placeholder="1234 5678 9012 3456"
            />
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <ZTextField
                  fullWidth
                  label="Expiry Date"
                  name="expiryDate"
                  value={paymentInfo.expiryDate}
                  onChange={handlePaymentChange}
                  error={!!errors.payment.expiryDate}
                  helperText={errors.payment.expiryDate}
                  placeholder="MM/YY"
                />
              </Grid>
              <Grid item xs={6}>
                <ZTextField
                  fullWidth
                  label="CVV"
                  name="cvv"
                  value={paymentInfo.cvv}
                  onChange={handlePaymentChange}
                  error={!!errors.payment.cvv}
                  helperText={errors.payment.cvv}
                  placeholder="123"
                />
              </Grid>
            </Grid>
          </Paper>
        );
      default:
        throw new Error("Unknown step");
    }
  };

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <IconButton
        onClick={handleBackClick}
        sx={{
          position: "absolute",
          top: 16,
          right: 16,
        }}
      >
        <ArrowBackIcon />
      </IconButton>
      <ZTypography variant="h4" gutterBottom>
        Checkout
      </ZTypography>

      <Stepper activeStep={activeStep} sx={{ mb: 4 }}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      {getStepContent(activeStep)}

      <Box sx={{ display: "flex", justifyContent: "center" }}>
        {activeStep !== 0 && (
          <ZButton onClick={handleBack} sx={{ mr: 2 }}>
            Back
          </ZButton>
        )}
        {activeStep !== steps.length - 1 ? (
          <ZButton variant="contained" onClick={handleNext}>
            Next
          </ZButton>
        ) : (
          <ZButton
            variant="contained"
            color="primary"
            size="large"
            startIcon={<PaymentIcon />}
            onClick={handlePlaceOrder}
          >
            Place Order
          </ZButton>
        )}
      </Box>
    </Container>
  );
};

export default Payment;
