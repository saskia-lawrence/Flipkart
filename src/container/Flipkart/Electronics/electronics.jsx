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

// Import images for electronics and gadgets
import gadg1 from "../../../utils/assets/images/gadg1.jpg";
import gadg2 from "../../../utils/assets/images/gadg2.jpg";
import gadg3 from "../../../utils/assets/images/gadg3.jpg";
import gadg4 from "../../../utils/assets/images/gadg4.jpg";
import gadg5 from "../../../utils/assets/images/gadg5.jpg";
import gadg6 from "../../../utils/assets/images/gadg6.jpg";
import gadg7 from "../../../utils/assets/images/gadg7.jpg";
import gadg8 from "../../../utils/assets/images/gadg8.jpg";
import gadg9 from "../../../utils/assets/images/gadg9.jpg";
import gadg10 from "../../../utils/assets/images/gadg10.jpg";
import gadg11 from "../../../utils/assets/images/gadg11.jpg";
import gadg12 from "../../../utils/assets/images/gadg12.jpg";
import gadg13 from "../../../utils/assets/images/gadg13.jpg";
import gadg14 from "../../../utils/assets/images/gadg14.jpg";
import gadg15 from "../../../utils/assets/images/gadg15.jpg";

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

class Electronics extends React.Component {
  constructor(props) {
    super(props);

    const productImages = {
      1: gadg1,
      2: gadg2,
      3: gadg3,
      4: gadg4,
      5: gadg5,
      6: gadg6,
      7: gadg7,
      8: gadg8,
      9: gadg9,
      10: gadg10,
      11: gadg11,
      12: gadg12,
      13: gadg13,
      14: gadg14,
      15: gadg15,
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
          name: "Wireless Bluetooth Earbuds",
          price: 79.99,
          rating: 4.6,
          image: productImages[1],
          reviews: 245,
          category: "Audio",
          brand: "SoundMaster",
          batteryLife: "8 hours",
          color: "Black",
        },
        {
          id: 2,
          name: "Smart Fitness Band",
          price: 49.99,
          rating: 4.3,
          image: productImages[2],
          reviews: 187,
          category: "Wearables",
          brand: "FitTech",
          features: "Heart rate monitor, Sleep tracking",
        },
        {
          id: 3,
          name: "4K Ultra HD Smart TV",
          price: 699.99,
          rating: 4.8,
          image: productImages[3],
          reviews: 312,
          category: "Televisions",
          brand: "VisionPlus",
          screenSize: "55 inch",
        },
        {
          id: 4,
          name: "Gaming Laptop",
          price: 1299.99,
          rating: 4.7,
          image: productImages[4],
          reviews: 156,
          category: "Computers",
          brand: "GameMaster",
          specs: "16GB RAM, 1TB SSD, RTX 3060",
        },
        {
          id: 5,
          name: "Wireless Charging Pad",
          price: 29.99,
          rating: 4.2,
          image: productImages[5],
          reviews: 98,
          category: "Accessories",
          brand: "PowerUp",
          compatibility: "Qi-enabled devices",
        },
        {
          id: 6,
          name: "Smartphone Pro Max",
          price: 999.99,
          rating: 4.9,
          image: productImages[6],
          reviews: 421,
          category: "Mobile Phones",
          brand: "Pear",
          storage: "256GB",
        },
        {
          id: 7,
          name: "Noise Cancelling Headphones",
          price: 199.99,
          rating: 4.5,
          image: productImages[7],
          reviews: 276,
          category: "Audio",
          brand: "SoundMaster",
          batteryLife: "30 hours",
        },
        {
          id: 8,
          name: "Smart Home Hub",
          price: 149.99,
          rating: 4.4,
          image: productImages[8],
          reviews: 134,
          category: "Smart Home",
          brand: "HomeConnect",
          compatibility: "Works with Alexa & Google",
        },
        {
          id: 9,
          name: "Digital SLR Camera",
          price: 899.99,
          rating: 4.7,
          image: productImages[9],
          reviews: 198,
          category: "Photography",
          brand: "PhotoPro",
          resolution: "24.2MP",
        },
        {
          id: 10,
          name: "Portable Bluetooth Speaker",
          price: 89.99,
          rating: 4.3,
          image: productImages[10],
          reviews: 167,
          category: "Audio",
          brand: "BoomSound",
          waterproof: "IPX7",
        },
        {
          id: 11,
          name: "Smart Watch Pro",
          price: 249.99,
          rating: 4.6,
          image: productImages[11],
          reviews: 231,
          category: "Wearables",
          brand: "TechWear",
          features: "ECG, Blood oxygen monitor",
        },
        {
          id: 12,
          name: 'Tablet 10.5"',
          price: 349.99,
          rating: 4.4,
          image: productImages[12],
          reviews: 143,
          category: "Tablets",
          brand: "Pear",
          storage: "128GB",
        },
        {
          id: 13,
          name: "Wireless Keyboard & Mouse",
          price: 59.99,
          rating: 4.1,
          image: productImages[13],
          reviews: 87,
          category: "Computer Accessories",
          brand: "TypeFast",
          connectivity: "Bluetooth 5.0",
        },
        {
          id: 14,
          name: "VR Headset",
          price: 299.99,
          rating: 4.3,
          image: productImages[14],
          reviews: 112,
          category: "Gaming",
          brand: "VirtualX",
          compatibility: "PC & Mobile",
        },
        {
          id: 15,
          name: "External SSD 1TB",
          price: 129.99,
          rating: 4.7,
          image: productImages[15],
          reviews: 203,
          category: "Storage",
          brand: "FastDrive",
          speed: "1050MB/s",
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
                  to="/electronics"
                  flag={lable.label}
                  color="inherit"
                >
                  Electronics
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
                        M.R.P.: ${(selectedProduct.price * 1.2).toFixed(2)}
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
                              (selectedProduct.price * 1.2)) *
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
                      {selectedProduct.batteryLife && (
                        <ZTypography flag={lable.label} mb={1}>
                          - Battery Life: {selectedProduct.batteryLife}
                        </ZTypography>
                      )}
                      {selectedProduct.screenSize && (
                        <ZTypography flag={lable.label} mb={1}>
                          - Screen Size: {selectedProduct.screenSize}
                        </ZTypography>
                      )}
                      {selectedProduct.storage && (
                        <ZTypography flag={lable.label} mb={1}>
                          - Storage: {selectedProduct.storage}
                        </ZTypography>
                      )}
                      {selectedProduct.features && (
                        <ZTypography flag={lable.label} mb={1}>
                          - Features: {selectedProduct.features}
                        </ZTypography>
                      )}
                      {selectedProduct.specs && (
                        <ZTypography flag={lable.label} mb={1}>
                          - Specifications: {selectedProduct.specs}
                        </ZTypography>
                      )}
                      {selectedProduct.color && (
                        <ZTypography flag={lable.label} mb={1}>
                          - Color: {selectedProduct.color}
                        </ZTypography>
                      )}
                      {selectedProduct.compatibility && (
                        <ZTypography flag={lable.label}>
                          - Compatibility: {selectedProduct.compatibility}
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
                Electronics & Gadgets
              </ZTypography>
              <ZTypography flag={lable.subheading} mb={4}>
                Discover the latest tech and gadgets
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

export default withNavigation(Electronics);
