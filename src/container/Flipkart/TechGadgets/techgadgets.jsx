import React from "react";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Box,
  Container,
  Paper,
  Rating,
  Link,
  Divider,
  Chip,
  IconButton,
  Breadcrumbs,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShareIcon from "@mui/icons-material/Share";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

// Import images for tech gadgets
import tech1 from "../../../utils/assets/images/tech1.jpg";
import tech2 from "../../../utils/assets/images/tech2.jpg";
import tech3 from "../../../utils/assets/images/tech3.jpg";
import tech4 from "../../../utils/assets/images/tech4.jpg";
import tech5 from "../../../utils/assets/images/tech5.jpg";
import tech6 from "../../../utils/assets/images/tech6.jpg";
import tech7 from "../../../utils/assets/images/tech7.jpg";
import tech8 from "../../../utils/assets/images/tech8.jpg";
import tech9 from "../../../utils/assets/images/tech9.jpg";
import tech10 from "../../../utils/assets/images/tech10.jpg";
import tech11 from "../../../utils/assets/images/tech11.jpg";
import tech12 from "../../../utils/assets/images/tech12.jpg";
import tech13 from "../../../utils/assets/images/tech13.jpg";
import tech14 from "../../../utils/assets/images/tech14.jpg";
import tech15 from "../../../utils/assets/images/tech15.jpg";

import ZTypography from "../../../components/ZTyptography/ztyptography";
import ZButton from "../../../components/ZButton/zbutton";
import ZToasterMsg from "../../../components/ZTosterMessage/ztostermsg";
import { lable } from "../../../utils/constants/lables";

const withNavigation = (Component) => {
  return (props) => {
    const navigate = useNavigate();
    return <Component {...props} navigate={navigate} />;
  };
};

class TechGadgets extends React.Component {
  constructor(props) {
    super(props);

    const productImages = {
      1: tech1,
      2: tech2,
      3: tech3,
      4: tech4,
      5: tech5,
      6: tech6,
      7: tech7,
      8: tech8,
      9: tech9,
      10: tech10,
      11: tech11,
      12: tech12,
      13: tech13,
      14: tech14,
      15: tech15,
    };

    this.state = {
      cart: [],
      selectedProduct: null,
      notification: {
        show: false,
        message: "",
      },
      products: [
        {
          id: 1,
          name: "Wireless Noise-Canceling Headphones",
          price: 349.99,
          rating: 4.8,
          image: productImages[1],
          reviews: 1245,
          category: "Audio",
          brand: "SonicPro",
          batteryLife: "30 hours",
          connectivity: "Bluetooth 5.0",
          color: "Matte Black",
        },
        {
          id: 2,
          name: 'Ultra HD Smart TV 55"',
          price: 899.99,
          rating: 4.7,
          image: productImages[2],
          reviews: 876,
          category: "Television",
          brand: "VisionPlus",
          resolution: "3840 x 2160",
          features: "HDR10+, Smart OS",
        },
        {
          id: 3,
          name: "Gaming Laptop Pro",
          price: 1599.99,
          rating: 4.6,
          image: productImages[3],
          reviews: 542,
          category: "Computers",
          brand: "GameMaster",
          specs: "RTX 3070, 16GB RAM, 1TB SSD",
          processor: "Intel i7-11800H",
        },
        {
          id: 4,
          name: "Smartphone X Pro",
          price: 1099.99,
          rating: 4.9,
          image: productImages[4],
          reviews: 1568,
          category: "Mobile",
          brand: "TechPear",
          storage: "256GB",
          camera: "Triple 48MP system",
        },
        {
          id: 5,
          name: "Fitness Smartwatch",
          price: 249.99,
          rating: 4.5,
          image: productImages[5],
          reviews: 687,
          category: "Wearables",
          brand: "FitTech",
          features: "ECG, Blood oxygen, GPS",
          batteryLife: "7 days",
        },
        {
          id: 6,
          name: "4K Action Camera",
          price: 399.99,
          rating: 4.4,
          image: productImages[6],
          reviews: 432,
          category: "Camera",
          brand: "ActionShot",
          resolution: "4K/60fps",
          waterproof: "10m without case",
        },
        {
          id: 7,
          name: "Wireless Charging Stand",
          price: 59.99,
          rating: 4.3,
          image: productImages[7],
          reviews: 287,
          category: "Accessories",
          brand: "PowerUp",
          compatibility: "Qi-enabled devices",
          chargingSpeed: "15W",
        },
        {
          id: 8,
          name: "Smart Home Hub",
          price: 199.99,
          rating: 4.6,
          image: productImages[8],
          reviews: 354,
          category: "Smart Home",
          brand: "HomeConnect",
          voiceControl: "Alexa, Google Assistant",
          protocols: "Zigbee, Z-Wave",
        },
        {
          id: 9,
          name: "Professional DSLR Camera",
          price: 1499.99,
          rating: 4.7,
          image: productImages[9],
          reviews: 498,
          category: "Photography",
          brand: "PhotoPro",
          sensor: "Full-frame 24.2MP",
          video: "4K/30fps",
        },
        {
          id: 10,
          name: "Portable Bluetooth Speaker",
          price: 129.99,
          rating: 4.5,
          image: productImages[10],
          reviews: 376,
          category: "Audio",
          brand: "BoomSound",
          waterproof: "IPX7",
          batteryLife: "20 hours",
        },
        {
          id: 11,
          name: "E-Reader with Backlight",
          price: 179.99,
          rating: 4.6,
          image: productImages[11],
          reviews: 421,
          category: "Reading",
          brand: "ReadWell",
          storage: "32GB",
          screen: '6.8" 300ppi',
        },
        {
          id: 12,
          name: "Gaming Console",
          price: 499.99,
          rating: 4.8,
          image: productImages[12],
          reviews: 987,
          category: "Gaming",
          brand: "NextGen",
          storage: "1TB SSD",
          resolution: "8K ready",
        },
        {
          id: 13,
          name: "Mechanical Keyboard",
          price: 129.99,
          rating: 4.4,
          image: productImages[13],
          reviews: 254,
          category: "Accessories",
          brand: "TypeMaster",
          switches: "Cherry MX Red",
          backlight: "RGB",
        },
        {
          id: 14,
          name: "VR Headset Pro",
          price: 399.99,
          rating: 4.3,
          image: productImages[14],
          reviews: 187,
          category: "Virtual Reality",
          brand: "VirtualX",
          resolution: "2160x2160 per eye",
          fieldOfView: "110°",
        },
        {
          id: 15,
          name: "External SSD 2TB",
          price: 249.99,
          rating: 4.7,
          image: productImages[15],
          reviews: 342,
          category: "Storage",
          brand: "FastDrive",
          speed: "1050MB/s read",
          interface: "USB-C 3.2",
        },
      ],
    };
  }

  handleAddToCart = (product, e) => {
    e?.stopPropagation();

    // Get the current cart from localStorage
    const savedCart = localStorage.getItem("cart");
    let cart = savedCart ? JSON.parse(savedCart) : [];

    // Find if product already exists
    const existingItem = cart.find((item) => item.id === product.id);

    if (existingItem) {
      cart = cart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
    } else {
      cart = [...cart, { ...product, quantity: 1 }];
    }

    // Save to localStorage
    localStorage.setItem("cart", JSON.stringify(cart));

    // Dispatch event to notify other components
    window.dispatchEvent(new Event("cartUpdated"));

    // Show notification
    this.setState({
      notification: {
        show: true,
        message: existingItem
          ? `${product.name} quantity updated`
          : `${product.name} added to cart`,
      },
    });

    // Hide notification after 3 seconds
    setTimeout(() => {
      this.setState({ notification: { show: false, message: "" } });
    }, 3000);
  };

  handleBuyNow = (product, e) => {
    e?.stopPropagation();
    this.handleAddToCart(product, e);
    this.props.navigate("/payment", {
      state: {
        products: this.state.cart.concat({ ...product, quantity: 1 }),
        fromCart: false,
      },
    });
  };

  handleCheckout = () => {
    this.props.navigate("/payment", {
      state: {
        products: this.state.cart,
        fromCart: true,
      },
    });
  };

  handleProductClick = (product) => {
    this.setState({ selectedProduct: product });
  };

  componentDidMount() {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      this.setState({ cart: JSON.parse(savedCart) });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.cart !== this.state.cart) {
      localStorage.setItem("cart", JSON.stringify(this.state.cart));
    }
  }

  handleBackToList = () => {
    this.setState({ selectedProduct: null });
  };

  getCartItemCount = () => {
    return this.state.cart.reduce((total, item) => total + item.quantity, 0);
  };

  render() {
    const { products, selectedProduct } = this.state;

    if (selectedProduct) {
      return (
        <Container maxWidth="lg" sx={{ py: 2, px: 2 }}>
          <Card
            sx={{ p: 5, borderRadius: 2, boxShadow: 3, minHeight: "100vh" }}
          >
            {/* Header with back button and breadcrumbs */}
            <Box sx={{ mb: 3 }}>
              <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 2 }}>
                <ZTypography
                  component={Link}
                  to="/"
                  flag={lable.label}
                  color="inherit"
                >
                  Home
                </ZTypography>
                <ZTypography
                  component={Link}
                  to="/tech-gadgets"
                  flag={lable.label}
                  color="inherit"
                >
                  Tech Gadgets
                </ZTypography>
                <ZTypography flag={lable.label} color="text.primary">
                  {selectedProduct.name}
                </ZTypography>
              </Breadcrumbs>
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: 140,
                right: 160,
              }}
            >
              <IconButton onClick={this.handleBackToList}>
                <ArrowBackIcon />
              </IconButton>
            </Box>

            <Paper elevation={0} sx={{ p: 4, borderRadius: 2 }}>
              <Grid container spacing={10}>
                {/* Left Column - Image with buttons below */}
                <Grid item xs={12} md={6}>
                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <CardMedia
                      component="img"
                      image={selectedProduct.image}
                      alt={selectedProduct.name}
                      sx={{
                        width: "100%",
                        height: "auto",
                        maxHeight: "500px",
                        borderRadius: 2,
                        objectFit: "contain",
                        mb: 3,
                      }}
                    />

                    {/* Action Buttons */}
                    <Box sx={{ display: "flex", gap: 2, width: "100%" }}>
                      <ZButton
                        variant="contained"
                        color="primary"
                        startIcon={<ShoppingCartIcon />}
                        onClick={(e) =>
                          this.handleAddToCart(selectedProduct, e)
                        }
                        sx={{ py: 2, flex: 1 }}
                      >
                        Add to Cart
                      </ZButton>
                      <ZButton
                        variant="contained"
                        color="secondary"
                        startIcon={<FlashOnIcon />}
                        onClick={(e) => this.handleBuyNow(selectedProduct, e)}
                        sx={{ py: 2, flex: 1 }}
                      >
                        Buy Now
                      </ZButton>
                    </Box>
                  </Box>
                </Grid>

                {/* Right Column - Product Details */}
                <Grid item xs={12} md={6}>
                  <Box display="flex" flexDirection="column" height="100%">
                    {/* Product Info */}
                    <ZTypography
                      flag={lable.mainheader}
                      fontWeight="bold"
                      mb={1}
                    >
                      {selectedProduct.name}
                    </ZTypography>

                    <Box display="flex" alignItems="center" mb={1}>
                      <ZTypography flag={lable.label} color="text.secondary">
                        Brand: {selectedProduct.brand}
                      </ZTypography>
                    </Box>

                    <Box display="flex" alignItems="center" mb={2}>
                      <Rating
                        value={selectedProduct.rating}
                        precision={0.5}
                        readOnly
                      />
                      <ZTypography
                        flag={lable.label}
                        color="text.secondary"
                        ml={1}
                      >
                        ({selectedProduct.reviews} ratings)
                      </ZTypography>
                    </Box>

                    {/* Favorite and Share Buttons */}
                    <Box display="flex" gap={1} mb={3}>
                      <IconButton aria-label="add to favorites" color="primary">
                        <FavoriteBorderIcon />
                      </IconButton>
                      <IconButton aria-label="share" color="primary">
                        <ShareIcon />
                      </IconButton>
                    </Box>

                    {/* Pricing */}
                    <Box mb={3}>
                      <ZTypography
                        flag={lable.mainheader}
                        color="primary"
                        mb={1}
                      >
                        ${selectedProduct.price.toFixed(2)}
                      </ZTypography>
                      <ZTypography
                        flag={lable.label}
                        color="text.secondary"
                        sx={{ textDecoration: "line-through" }}
                      >
                        M.R.P.: ${(selectedProduct.price * 1.25).toFixed(2)}
                      </ZTypography>
                      <ZTypography
                        flag={lable.label}
                        color="success.main"
                        fontWeight="bold"
                      >
                        (
                        {Math.round(
                          (1 -
                            selectedProduct.price /
                              (selectedProduct.price * 1.25)) *
                            100
                        )}
                        % off)
                      </ZTypography>
                      <ZTypography flag={lable.label} mt={1}>
                        Inclusive of all taxes
                      </ZTypography>
                      <ZTypography flag={lable.label} mt={1}>
                        EMI starts at ₹{(selectedProduct.price / 12).toFixed(0)}
                        . No Cost EMI available
                      </ZTypography>

                      <Chip
                        label="Bestseller"
                        color="primary"
                        size="small"
                        sx={{ mb: 2, mt: 5 }}
                      />
                    </Box>

                    <Divider sx={{ my: 2 }} />

                    {/* Product Details */}
                    <Box sx={{ mb: 3 }}>
                      <ZTypography
                        flag={lable.subheading}
                        fontWeight="bold"
                        mb={1}
                      >
                        Product Details:
                      </ZTypography>
                      <ZTypography flag={lable.label} mb={1}>
                        - Category: {selectedProduct.category}
                      </ZTypography>
                      {selectedProduct.specs && (
                        <ZTypography flag={lable.label} mb={1}>
                          - Specifications: {selectedProduct.specs}
                        </ZTypography>
                      )}
                      {selectedProduct.batteryLife && (
                        <ZTypography flag={lable.label} mb={1}>
                          - Battery Life: {selectedProduct.batteryLife}
                        </ZTypography>
                      )}
                      {selectedProduct.resolution && (
                        <ZTypography flag={lable.label} mb={1}>
                          - Resolution: {selectedProduct.resolution}
                        </ZTypography>
                      )}
                      {selectedProduct.features && (
                        <ZTypography flag={lable.label} mb={1}>
                          - Features: {selectedProduct.features}
                        </ZTypography>
                      )}
                      {selectedProduct.storage && (
                        <ZTypography flag={lable.label}>
                          - Storage: {selectedProduct.storage}
                        </ZTypography>
                      )}
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Paper>
          </Card>

          {/* Toast Notification */}
          <ZToasterMsg
            open={this.state.notification.show}
            message={this.state.notification.message}
            severity="success"
            onClose={() =>
              this.setState({ notification: { show: false, message: "" } })
            }
          />
        </Container>
      );
    }

    return (
      <Container maxWidth="xl" sx={{ px: 3 }}>
        <Card sx={{ p: 5, borderRadius: 2, boxShadow: 3, minHeight: "100vh" }}>
          <Paper elevation={0} sx={{ p: 4, borderRadius: 2 }}>
            {/* Add Back Arrow Button to Dashboard */}
            <Box sx={{ mt: -5 }}>
              <ZTypography flag={lable.mainheader} fontWeight="bold" mb={2}>
                Tech Gadgets
              </ZTypography>
              <ZTypography flag={lable.subheading} mb={4}>
                Cutting-edge technology for your digital life
              </ZTypography>
            </Box>

            <Box
              sx={{
                position: "absolute",
                top: 120,
                right: 160,
              }}
            >
              <IconButton onClick={() => this.props.navigate("/dashboard")}>
                <ArrowBackIcon />
              </IconButton>
            </Box>

            <Grid container spacing={10} sx={{ px: 5 }}>
              {products.map((product) => (
                <Grid key={product.id} size={4}>
                  <Card
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      boxShadow: 2,
                      transition: "transform 0.3s",
                      "&:hover": {
                        transform: "scale(1.03)",
                        boxShadow: 3,
                        cursor: "pointer",
                      },
                    }}
                    onClick={() => this.handleProductClick(product)}
                  >
                    <CardMedia
                      component="img"
                      height="300"
                      image={product.image}
                      alt={product.name}
                      sx={{ objectFit: "cover" }}
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <ZTypography flag={lable.subheading} gutterBottom>
                        {product.name}
                      </ZTypography>
                      <ZTypography flag={lable.label} color="text.secondary">
                        {product.brand}
                      </ZTypography>
                      <ZTypography flag={lable.subheading} color="text.primary">
                        ${product.price.toFixed(2)}
                      </ZTypography>
                      <Box display="flex" alignItems="center" mt={1}>
                        <Rating
                          value={product.rating}
                          precision={0.5}
                          readOnly
                        />
                        <ZTypography
                          flag={lable.label}
                          color="text.secondary"
                          ml={1}
                        >
                          ({product.reviews} reviews)
                        </ZTypography>
                      </Box>
                    </CardContent>
                    <CardActions>
                      <ZButton
                        size="small"
                        color="primary"
                        variant="outlined"
                        startIcon={<ShoppingCartIcon />}
                        fullWidth
                        onClick={(e) => {
                          e.stopPropagation();
                          this.handleAddToCart(product, e);
                        }}
                      >
                        Add to Cart
                      </ZButton>
                      <ZButton
                        size="small"
                        color="secondary"
                        variant="contained"
                        startIcon={<FlashOnIcon />}
                        sx={{ ml: 1 }}
                        fullWidth
                        onClick={(e) => {
                          e.stopPropagation();
                          this.handleBuyNow(product, e);
                        }}
                      >
                        Buy Now
                      </ZButton>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Paper>
        </Card>
      </Container>
    );
  }
}

export default withNavigation(TechGadgets);
