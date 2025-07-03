import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  Container,
  Box,
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
  Divider,
} from "@mui/material";
import {
  ArrowBack,
  LocalShipping,
  Cancel,
  CheckCircle,
  Pending,
  Assignment,
  ShoppingBag,
  Star,
  StarBorder,
} from "@mui/icons-material";
import ZToasterMsg from "../../../components/ZTosterMessage/ztostermsg";
import ZButton from "../../../components/ZButton/zbutton";
import ZTypography from "../../../components/ZTyptography/ztyptography";

const Orders = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const newOrderId = state?.newOrderId || null;

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
      const parsedOrders = JSON.parse(savedOrders);

      // Deduplicate by order ID (keep only the last entry of each ID)
      const orderMap = new Map();
      for (let i = parsedOrders.length - 1; i >= 0; i--) {
        const order = parsedOrders[i];
        if (!orderMap.has(order.id)) {
          orderMap.set(order.id, order);
        }
      }

      // Optional: persist only unique orders back to localStorage
      const uniqueOrders = Array.from(orderMap.values()).reverse();
      localStorage.setItem("orders", JSON.stringify(uniqueOrders));
      setOrders(uniqueOrders);
    }
  }, []);

  useEffect(() => {
    if (newOrderId) {
      showNotification(`Order ${newOrderId} placed successfully!`, "success");
    }
  }, [newOrderId]);

  const showNotification = (message, severity) => {
    setNotification({ show: true, message, severity });
    setTimeout(() => setNotification({ show: false, message: "" }), 3000);
  };

  const handleCancelOrder = (orderId) => {
    const updatedOrders = orders.map((order) =>
      order.id === orderId ? { ...order, status: "cancelled" } : order
    );
    setOrders(updatedOrders);
    localStorage.setItem("orders", JSON.stringify(updatedOrders));
    setOpenCancelDialog(false);
    showNotification("Order cancelled successfully", "success");
  };

  const handleOpenCancelDialog = (order) => {
    setSelectedOrder(order);
    setOpenCancelDialog(true);
  };

  const handleBackClick = () => navigate(-1);

  const handleTabChange = (_, newValue) => setTabValue(newValue);

  const formatDate = (dateString) =>
    new Date(dateString).toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });

  const filteredOrders =
    tabValue === "all"
      ? orders
      : orders.filter((order) => order.status === tabValue);

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
        {[
          { label: "All Orders", value: "all", icon: <ShoppingBag /> },
          { label: "Processing", value: "processing", icon: <Pending /> },
          { label: "Shipped", value: "shipped", icon: <LocalShipping /> },
          { label: "Delivered", value: "delivered", icon: <CheckCircle /> },
          { label: "Cancelled", value: "cancelled", icon: <Cancel /> },
        ].map(({ label, value, icon }) => (
          <Tab
            key={value}
            label={<ZTypography flag="label">{label}</ZTypography>}
            value={value}
            icon={icon}
            iconPosition="start"
          />
        ))}
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
                  border:
                    order.id === newOrderId ? "3px solid #1976d2" : undefined,
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
                      mb: 2,
                    }}
                  >
                    <Box>
                      <ZTypography flag="mainheader" fontWeight="bold">
                        Order #: {order.id}
                      </ZTypography>
                      <ZTypography flag="label">
                        Placed on: {formatDate(order.date)}
                      </ZTypography>
                    </Box>
                    {getStatusChip(order.status)}
                  </Box>

                  {order.status !== "cancelled" && (
                    <ZTypography flag="subheading" sx={{ mb: 2 }}>
                      <LocalShipping sx={{ mr: 1 }} />
                      {order.status === "delivered"
                        ? "Delivered on: "
                        : "Estimated Delivery: "}
                      {formatDate(order.deliveryDate)}
                    </ZTypography>
                  )}

                  <Divider sx={{ my: 2 }} />

                  <ZTypography flag="subheading" fontWeight="bold">
                    ORDER ITEMS
                  </ZTypography>

                  <TableContainer>
                    <Table>
                      <TableHead>
                        <TableRow>
                          <TableCell>Product</TableCell>
                          <TableCell align="right">Price</TableCell>
                          <TableCell align="right">Qty</TableCell>
                          <TableCell align="right">Total</TableCell>
                          <TableCell align="right">Rating</TableCell>
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
                              ${product.price.toFixed(2)}
                            </TableCell>
                            <TableCell align="right">
                              {product.quantity}
                            </TableCell>
                            <TableCell align="right">
                              ${(product.price * product.quantity).toFixed(2)}
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
                      <ZTypography flag="value">
                        {order.shippingAddress.name},{" "}
                        {order.shippingAddress.address},{" "}
                        {order.shippingAddress.city},{" "}
                        {order.shippingAddress.zip},{" "}
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
                      <ZTypography flag="value">
                        {order.paymentMethod}
                      </ZTypography>
                      <Divider sx={{ my: 1 }} />
                      <ZTypography flag="label">
                        Total: ${order.total.toFixed(2)}
                      </ZTypography>
                    </Grid>
                  </Grid>
                </CardContent>

                <CardActions
                  sx={{ justifyContent: "flex-end", bgcolor: "grey.50" }}
                >
                  {order.status === "processing" && (
                    <ZButton
                      variant="outlined"
                      color="error"
                      onClick={() => handleOpenCancelDialog(order)}
                    >
                      <ZTypography flag="label">Cancel Order</ZTypography>
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
        <DialogTitle>Cancel Order</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to cancel order #{selectedOrder?.id}?
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
