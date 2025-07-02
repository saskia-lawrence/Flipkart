import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Box,
  List,
  ListItem,
  Divider,
  Paper,
  IconButton,
  Grid,
  Chip,
  Avatar,
  Card,
  CardContent,
  CardActions,
  Tabs,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";
import {
  ArrowBack,
  LocalShipping,
  Cancel,
  CheckCircle,
  Pending,
  Assignment,
  Payment,
  Home,
  ShoppingBag,
  Star,
  StarBorder,
} from "@mui/icons-material";
import ZToasterMsg from "../../../components/ZTosterMessage/ztostermsg";
import ZButton from "../../../components/ZButton/zbutton";
import ZTypography from "../../../components/ZTyptography/ztyptography";

const Orders = () => {
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);
  const [tabValue, setTabValue] = useState("all");
  const [openCancelDialog, setOpenCancelDialog] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [notification, setNotification] = useState({
    show: false,
    message: "",
    severity: "success",
  });

  useEffect(() => {
    const savedOrders = localStorage.getItem("orders");
    if (savedOrders) {
      setOrders(JSON.parse(savedOrders));
    }
  }, []);

  const handleCancelOrder = (orderId) => {
    const updatedOrders = orders.map((order) =>
      order.id === orderId ? { ...order, status: "cancelled" } : order
    );
    setOrders(updatedOrders);
    localStorage.setItem("orders", JSON.stringify(updatedOrders));
    setOpenCancelDialog(false);
    showNotification("Order cancelled successfully", "success");
  };

  const showNotification = (message, severity) => {
    setNotification({ show: true, message, severity });
    setTimeout(() => setNotification({ show: false, message: "" }), 3000);
  };

  const handleOpenCancelDialog = (order) => {
    setSelectedOrder(order);
    setOpenCancelDialog(true);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const getStatusChip = (status) => {
    switch (status) {
      case "processing":
        return (
          <Chip
            icon={<Pending />}
            label="Processing"
            color="warning"
            variant="outlined"
            sx={{ fontWeight: "bold" }}
          />
        );
      case "shipped":
        return (
          <Chip
            icon={<LocalShipping />}
            label="Shipped"
            color="info"
            variant="outlined"
            sx={{ fontWeight: "bold" }}
          />
        );
      case "delivered":
        return (
          <Chip
            icon={<CheckCircle />}
            label="Delivered"
            color="success"
            variant="outlined"
            sx={{ fontWeight: "bold" }}
          />
        );
      case "cancelled":
        return (
          <Chip
            icon={<Cancel />}
            label="Cancelled"
            color="error"
            sx={{ fontWeight: "bold" }}
          />
        );
      default:
        return <Chip label={status} sx={{ fontWeight: "bold" }} />;
    }
  };

  const handleBackClick = () => {
    navigate(-1);
  };

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const filteredOrders = orders.filter((order) => {
    if (tabValue === "all") return true;
    return order.status === tabValue;
  });

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        i <= rating ? (
          <Star key={i} color="primary" />
        ) : (
          <StarBorder key={i} color="primary" />
        )
      );
    }
    return stars;
  };

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
        <IconButton onClick={handleBackClick} sx={{ mr: 2 }}>
          <ArrowBack />
        </IconButton>
        <ZTypography flag="mainheader" variant="h4" fontWeight="bold">
          My Orders
        </ZTypography>
      </Box>

      <Tabs
        value={tabValue}
        onChange={handleTabChange}
        sx={{ mb: 3, borderBottom: 1, borderColor: "divider" }}
      >
        <Tab
          label={<ZTypography flag="label">All Orders</ZTypography>}
          value="all"
          icon={<ShoppingBag />}
          iconPosition="start"
        />
        <Tab
          label={<ZTypography flag="label">Processing</ZTypography>}
          value="processing"
          icon={<Pending />}
          iconPosition="start"
        />
        <Tab
          label={<ZTypography flag="label">Shipped</ZTypography>}
          value="shipped"
          icon={<LocalShipping />}
          iconPosition="start"
        />
        <Tab
          label={<ZTypography flag="label">Delivered</ZTypography>}
          value="delivered"
          icon={<CheckCircle />}
          iconPosition="start"
        />
        <Tab
          label={<ZTypography flag="label">Cancelled</ZTypography>}
          value="cancelled"
          icon={<Cancel />}
          iconPosition="start"
        />
      </Tabs>

      {filteredOrders.length === 0 ? (
        <Paper elevation={3} sx={{ p: 4, textAlign: "center" }}>
          <ZTypography flag="subheading" variant="h6" gutterBottom>
            {tabValue === "all"
              ? "You haven't placed any orders yet"
              : `No ${tabValue} orders found`}
          </ZTypography>
          <ZButton
            variant="contained"
            color="primary"
            onClick={() => navigate("/")}
            startIcon={<ShoppingBag />}
          >
            <ZTypography flag="label">Continue Shopping</ZTypography>
          </ZButton>
        </Paper>
      ) : (
        <Grid container spacing={3}>
          {filteredOrders.map((order) => (
            <Grid item xs={12} key={order.id}>
              <Card
                elevation={3}
                sx={{
                  borderRadius: 2,
                  borderLeft:
                    order.status === "delivered"
                      ? "4px solid #4caf50"
                      : order.status === "shipped"
                      ? "4px solid #2196f3"
                      : order.status === "processing"
                      ? "4px solid #ff9800"
                      : "4px solid #f44336",
                }}
              >
                <CardContent>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      mb: 2,
                    }}
                  >
                    <Box>
                      <ZTypography
                        flag="mainheader"
                        variant="h6"
                        fontWeight="bold"
                      >
                        Order #: {order.id}
                      </ZTypography>
                      <ZTypography flag="label" variant="subtitle1">
                        Placed on: {formatDate(order.date)}
                      </ZTypography>
                    </Box>
                    <Box>{getStatusChip(order.status)}</Box>
                  </Box>

                  {order.status !== "cancelled" && (
                    <Box sx={{ mb: 2 }}>
                      <ZTypography
                        flag="subheading"
                        variant="subtitle1"
                        fontWeight={500}
                      >
                        <LocalShipping
                          sx={{ verticalAlign: "middle", mr: 1 }}
                        />
                        {order.status === "delivered"
                          ? "Delivered on: "
                          : "Estimated Delivery: "}
                        {formatDate(order.deliveryDate)}
                      </ZTypography>
                      {order.trackingNumber && (
                        <ZTypography flag="value" variant="body2">
                          Tracking #: {order.trackingNumber} ({order.carrier})
                        </ZTypography>
                      )}
                    </Box>
                  )}

                  <Divider sx={{ my: 2 }} />

                  <ZTypography
                    flag="subheading"
                    variant="subtitle2"
                    gutterBottom
                    fontWeight="bold"
                  >
                    ORDER ITEMS
                  </ZTypography>
                  <TableContainer>
                    <Table>
                      <TableHead>
                        <TableRow>
                          <TableCell>
                            <ZTypography flag="label">Product</ZTypography>
                          </TableCell>
                          <TableCell align="right">
                            <ZTypography flag="label">Price</ZTypography>
                          </TableCell>
                          <TableCell align="right">
                            <ZTypography flag="label">Quantity</ZTypography>
                          </TableCell>
                          <TableCell align="right">
                            <ZTypography flag="label">Total</ZTypography>
                          </TableCell>
                          <TableCell align="right">
                            <ZTypography flag="label">Rating</ZTypography>
                          </TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {order.products.map((product) => (
                          <TableRow key={product.id}>
                            <TableCell>
                              <Box
                                sx={{ display: "flex", alignItems: "center" }}
                              >
                                <Avatar
                                  src={product.image}
                                  alt={product.name}
                                  sx={{ width: 60, height: 60, mr: 2 }}
                                />
                                <ZTypography flag="value">
                                  {product.name}
                                </ZTypography>
                              </Box>
                            </TableCell>
                            <TableCell align="right">
                              <ZTypography flag="value">
                                ${product.price.toFixed(2)}
                              </ZTypography>
                            </TableCell>
                            <TableCell align="right">
                              <ZTypography flag="value">
                                {product.quantity}
                              </ZTypography>
                            </TableCell>
                            <TableCell align="right">
                              <ZTypography flag="value">
                                ${(product.price * product.quantity).toFixed(2)}
                              </ZTypography>
                            </TableCell>
                            <TableCell align="right">
                              {product.rating ? (
                                <Box>
                                  {renderStars(product.rating)}
                                  {product.review && (
                                    <ZTypography
                                      flag="value"
                                      variant="caption"
                                      display="block"
                                    >
                                      "{product.review}"
                                    </ZTypography>
                                  )}
                                </Box>
                              ) : (
                                <ZButton
                                  size="small"
                                  variant="outlined"
                                  onClick={() =>
                                    navigate(`/review/${product.id}`)
                                  }
                                >
                                  <ZTypography flag="label">
                                    Add Review
                                  </ZTypography>
                                </ZButton>
                              )}
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>

                  <Divider sx={{ my: 2 }} />

                  <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                      <ZTypography
                        flag="subheading"
                        variant="subtitle2"
                        gutterBottom
                        fontWeight="bold"
                      >
                        SHIPPING ADDRESS
                      </ZTypography>
                      <Box
                        sx={{ display: "flex", alignItems: "center", mb: 1 }}
                      >
                        <Home sx={{ mr: 1, color: "action.active" }} />
                        <ZTypography flag="value">
                          {order.shippingAddress.name}
                        </ZTypography>
                      </Box>
                      <ZTypography flag="value">
                        {order.shippingAddress.address}
                      </ZTypography>
                      <ZTypography flag="value">
                        {order.shippingAddress.city},{" "}
                        {order.shippingAddress.zip}
                      </ZTypography>
                      <ZTypography flag="value">
                        {order.shippingAddress.country}
                      </ZTypography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <ZTypography
                        flag="subheading"
                        variant="subtitle2"
                        gutterBottom
                        fontWeight="bold"
                      >
                        PAYMENT INFORMATION
                      </ZTypography>
                      <Box
                        sx={{ display: "flex", alignItems: "center", mb: 1 }}
                      >
                        <Payment sx={{ mr: 1, color: "action.active" }} />
                        <ZTypography flag="value">
                          {order.paymentMethod}
                        </ZTypography>
                      </Box>
                      <ZTypography
                        flag="subheading"
                        variant="subtitle2"
                        gutterBottom
                        fontWeight="bold"
                        mt={2}
                      >
                        ORDER SUMMARY
                      </ZTypography>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          mb: 1,
                        }}
                      >
                        <ZTypography flag="label">Subtotal:</ZTypography>
                        <ZTypography flag="value">
                          ${(order.total - 5.99).toFixed(2)}
                        </ZTypography>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          mb: 1,
                        }}
                      >
                        <ZTypography flag="label">Shipping:</ZTypography>
                        <ZTypography flag="value">$5.99</ZTypography>
                      </Box>
                      <Divider sx={{ my: 1 }} />
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          mb: 1,
                        }}
                      >
                        <ZTypography
                          flag="subheading"
                          variant="subtitle1"
                          fontWeight="bold"
                        >
                          Total:
                        </ZTypography>
                        <ZTypography
                          flag="subheading"
                          variant="subtitle1"
                          fontWeight="bold"
                        >
                          ${order.total.toFixed(2)}
                        </ZTypography>
                      </Box>
                    </Grid>
                  </Grid>
                </CardContent>

                <CardActions
                  sx={{ justifyContent: "flex-end", p: 2, bgcolor: "grey.50" }}
                >
                  {order.status === "processing" && (
                    <ZButton
                      variant="outlined"
                      color="error"
                      startIcon={<Cancel />}
                      onClick={() => handleOpenCancelDialog(order)}
                      sx={{ mr: 2 }}
                    >
                      <ZTypography flag="label">Cancel Order</ZTypography>
                    </ZButton>
                  )}
                  {order.status === "shipped" && (
                    <ZButton
                      variant="outlined"
                      color="primary"
                      startIcon={<LocalShipping />}
                      onClick={() =>
                        window.open(
                          `https://www.${order.carrier.toLowerCase()}.com/tracking?tracknum=${
                            order.trackingNumber
                          }`,
                          "_blank"
                        )
                      }
                      sx={{ mr: 2 }}
                    >
                      <ZTypography flag="label">Track Package</ZTypography>
                    </ZButton>
                  )}
                  <ZButton
                    variant="contained"
                    color="primary"
                    startIcon={<Assignment />}
                    onClick={() => navigate(`/order/${order.id}`)}
                  >
                    <ZTypography flag="label">Order Details</ZTypography>
                  </ZButton>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}

      <Dialog
        open={openCancelDialog}
        onClose={() => setOpenCancelDialog(false)}
      >
        <DialogTitle>
          <ZTypography flag="mainheader">Cancel Order</ZTypography>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <ZTypography flag="value">
              Are you sure you want to cancel order #{selectedOrder?.id}? This
              action cannot be undone.
            </ZTypography>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <ZButton onClick={() => setOpenCancelDialog(false)}>
            <ZTypography flag="label">No, Keep It</ZTypography>
          </ZButton>
          <ZButton
            onClick={() => handleCancelOrder(selectedOrder?.id)}
            color="error"
            variant="contained"
            autoFocus
          >
            <ZTypography flag="label">Yes, Cancel Order</ZTypography>
          </ZButton>
        </DialogActions>
      </Dialog>

      <ZToasterMsg
        open={notification.show}
        message={notification.message}
        severity={notification.severity}
        onClose={() => setNotification({ ...notification, show: false })}
      />
    </Container>
  );
};

export default Orders;
