import React from "react";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Rating,
  Box,
  Container,
  Paper,
  Divider,
  Chip,
  IconButton,
  Breadcrumbs,
  Link,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShareIcon from "@mui/icons-material/Share";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

// Import men's fashion images (make sure these files exist in your assets)
import mensFash1 from "../../../utils/assets/images/mensfash1.jpg";
import mensFash2 from "../../../utils/assets/images/mensfash2.jpg";
import mensFash3 from "../../../utils/assets/images/mensfash3.jpg";
import mensFash4 from "../../../utils/assets/images/mensfash4.jpg";
import mensFash5 from "../../../utils/assets/images/mensfash5.jpg";
import mensFash6 from "../../../utils/assets/images/mensfash6.jpg";
import mensFash7 from "../../../utils/assets/images/mensfash7.jpg";
import mensFash8 from "../../../utils/assets/images/mensfash8.jpg";
import mensFash9 from "../../../utils/assets/images/mensfash9.jpg";
import mensFash10 from "../../../utils/assets/images/mensfash10.jpg";
import mensFash11 from "../../../utils/assets/images/mensfash11.jpg";
import mensFash12 from "../../../utils/assets/images/mensfash12.jpg";
import mensFash13 from "../../../utils/assets/images/mensfash13.jpg";
import mensFash14 from "../../../utils/assets/images/mensfash14.jpg";
import mensFash15 from "../../../utils/assets/images/mensfash15.jpg";
import ZTypography from "../../../components/ZTyptography/ztyptography";
import ZButton from "../../../components/ZButton/zbutton";
import ZToasterMsg from "../../../components/ZTosterMessage/ztostermsg";
import ZTextField from "../../../components/ZTextFeild/ztextfeild";

// Create a wrapper component to use hooks with class component
const withNavigation = (Component) => {
  return (props) => {
    const navigate = useNavigate();
    return <Component {...props} navigate={navigate} />;
  };
};

class MensFashion extends React.Component {
  constructor(props) {
    super(props);

    const productImages = {
      1: mensFash1,
      2: mensFash2,
      3: mensFash3,
      4: mensFash4,
      5: mensFash5,
      6: mensFash6,
      7: mensFash7,
      8: mensFash8,
      9: mensFash9,
      10: mensFash10,
      11: mensFash11,
      12: mensFash12,
      13: mensFash13,
      14: mensFash14,
      15: mensFash15,
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
          name: "Classic White Shirt",
          price: 39.99,
          rating: 4.5,
          image: productImages[1],
          reviews: 128,
          category: "Men's Fashion",
        },
        {
          id: 2,
          name: "Slim Fit Jeans",
          price: 59.99,
          rating: 4.2,
          image: productImages[2],
          reviews: 86,
          category: "Men's Fashion",
        },
        {
          id: 3,
          name: "Casual T-Shirt",
          price: 24.99,
          rating: 4.0,
          image: productImages[3],
          reviews: 45,
          category: "Men's Fashion",
        },
        {
          id: 4,
          name: "Formal Suit",
          price: 199.99,
          rating: 4.7,
          image: productImages[4],
          reviews: 210,
          category: "Men's Fashion",
        },
        {
          id: 5,
          name: "Sports Jacket",
          price: 79.99,
          rating: 4.3,
          image: productImages[5],
          reviews: 156,
          category: "Men's Fashion",
        },
        {
          id: 6,
          name: "Denim Jacket",
          price: 89.99,
          rating: 4.4,
          image: productImages[6],
          reviews: 92,
          category: "Men's Fashion",
        },
        {
          id: 7,
          name: "Cargo Pants",
          price: 49.99,
          rating: 4.1,
          image: productImages[7],
          reviews: 78,
          category: "Men's Fashion",
        },
        {
          id: 8,
          name: "Winter Coat",
          price: 129.99,
          rating: 4.6,
          image: productImages[8],
          reviews: 134,
          category: "Men's Fashion",
        },
        {
          id: 9,
          name: "Polo Shirt",
          price: 34.99,
          rating: 4.0,
          image: productImages[9],
          reviews: 65,
          category: "Men's Fashion",
        },
        {
          id: 10,
          name: "Leather Jacket",
          price: 159.99,
          rating: 4.8,
          image: productImages[10],
          reviews: 187,
          category: "Men's Fashion",
        },
        {
          id: 11,
          name: "Casual Sneakers",
          price: 69.99,
          rating: 4.4,
          image: productImages[11],
          reviews: 112,
          category: "Men's Fashion",
        },
        {
          id: 12,
          name: "Chinos Pants",
          price: 44.99,
          rating: 4.2,
          image: productImages[12],
          reviews: 53,
          category: "Men's Fashion",
        },
        {
          id: 13,
          name: "Business Shirt",
          price: 49.99,
          rating: 4.3,
          image: productImages[13],
          reviews: 47,
          category: "Men's Fashion",
        },
        {
          id: 14,
          name: "Hoodie Sweatshirt",
          price: 54.99,
          rating: 4.2,
          image: productImages[14],
          reviews: 89,
          category: "Men's Fashion",
        },
        {
          id: 15,
          name: "Summer Shorts",
          price: 29.99,
          rating: 4.0,
          image: productImages[15],
          reviews: 36,
          category: "Men's Fashion",
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
    const { products, selectedProduct, cart } = this.state;

    if (selectedProduct) {
      return (
        <Container maxWidth="lg" sx={{ py: 2, px: 2 }}>
          <Card
            sx={{
              p: 5,
              borderRadius: 2,
              boxShadow: 3,
              backgroundColor: "rgba(255, 255, 255, 0.9)",
              minHeight: "100vh",
              position: "relative",
            }}
          >
            {/* Header with back button and breadcrumbs */}
            <Box sx={{ mb: 3 }}>
              <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 2 }}>
                <ZTypography component={Link} href="/" color="inherit">
                  Home
                </ZTypography>
                <ZTypography
                  component={Link}
                  href="/mens-fashion"
                  color="inherit"
                >
                  Men's Fashion
                </ZTypography>
                <ZTypography color="text.primary">
                  {selectedProduct.name}
                </ZTypography>
              </Breadcrumbs>
              <IconButton
                onClick={this.handleBackToList}
                sx={{
                  position: "absolute",
                  top: 16,
                  right: 16,
                }}
              >
                <ArrowBackIcon />
              </IconButton>
            </Box>

            {/* Search Bar */}
            <Box sx={{ mb: 3 }}>
              <ZTextField
                fullWidth
                placeholder="Search products..."
                variant="outlined"
                size="small"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Box>

            <Paper elevation={0} sx={{ p: 4, borderRadius: 2 }}>
              <Grid container spacing={4}>
                {/* Left Column - Image with buttons below */}
                <Grid item xs={12} md={6}>
                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                    {/* Image */}
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
                    <Box
                      sx={{
                        display: "flex",
                        gap: 2,
                        width: "100%",
                        justifyContent: "space-between",
                      }}
                    >
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
                <Grid item xs={12} md={6} ml={15}>
                  <Box display="flex" flexDirection="column" height="100%">
                    {/* Product Info */}
                    <ZTypography variant="h4" fontWeight="bold" mb={1}>
                      {selectedProduct.name}
                    </ZTypography>

                    <Box display="flex" alignItems="center" mb={1}>
                      <ZTypography variant="body2" color="text.secondary">
                        Visit the {selectedProduct.brand || "Brand"} Store
                      </ZTypography>
                    </Box>

                    <Box display="flex" alignItems="center" mb={2}>
                      <Rating
                        value={selectedProduct.rating}
                        precision={0.5}
                        readOnly
                      />
                      <ZTypography
                        variant="body2"
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
                      <ZTypography variant="h4" color="primary" mb={1}>
                        ${selectedProduct.price.toFixed(2)}
                      </ZTypography>
                      <ZTypography
                        variant="body2"
                        color="text.secondary"
                        sx={{ textDecoration: "line-through" }}
                      >
                        M.R.P.: $
                        {selectedProduct.originalPrice?.toFixed(2) ||
                          (selectedProduct.price * 1.5).toFixed(2)}
                      </ZTypography>
                      <ZTypography
                        variant="body2"
                        color="success.main"
                        fontWeight="bold"
                      >
                        (
                        {Math.round(
                          (1 -
                            selectedProduct.price /
                              (selectedProduct.originalPrice ||
                                selectedProduct.price * 1.5)) *
                            100
                        )}
                        % off)
                      </ZTypography>
                      <ZTypography variant="body2" mt={1}>
                        Inclusive of all taxes
                      </ZTypography>
                      <ZTypography variant="body2" mt={1}>
                        EMI starts at ₹{(selectedProduct.price / 12).toFixed(0)}
                        . No Cost EMI available{" "}
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
                      <ZTypography variant="subtitle1" fontWeight="bold" mb={1}>
                        Product Details:
                      </ZTypography>
                      <ZTypography variant="body2" mb={1}>
                        - Material: 100% Cotton
                      </ZTypography>
                      <ZTypography variant="body2" mb={1}>
                        - Care Instructions: Machine wash cold
                      </ZTypography>
                      <ZTypography variant="body2">
                        - Size: Available in S, M, L, XL
                      </ZTypography>
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
        <Card
          sx={{
            p: 5,
            borderRadius: 2,
            boxShadow: 3,
            backgroundColor: "rgba(255, 255, 255, 0.9)",
            minHeight: "100vh",
            position: "relative",
          }}
        >
          {/* Add Back Arrow Button to Dashboard */}
          <Box sx={{ mb: 2 }}>
            <IconButton
              onClick={() => this.props.navigate("/dashboard")}
              sx={{
                position: "absolute",
                top: 16,
                right: 16,
              }}
            >
              <ArrowBackIcon />
            </IconButton>
          </Box>

          {/* Search Bar */}
          <Box sx={{ mb: 3 }}>
            <ZTextField
              fullWidth
              placeholder="Search products..."
              variant="outlined"
              size="small"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Box>

          <Paper elevation={0} sx={{ p: 4, mt: -7, borderRadius: 2 }}>
            <ZTypography variant="h4" fontWeight="bold" mb={2}>
              Men's Fashion
            </ZTypography>
            <ZTypography variant="subtitle1" mb={4}>
              Discover our latest collection for men
            </ZTypography>

            <Grid container spacing={10} sx={{ px: 5 }}>
              {products.map((product) => (
                <Grid key={product.id} size={4}>
                  <Card
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      backgroundColor: "rgba(255, 255, 255, 0.9)",
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
                      <ZTypography gutterBottom variant="h6" component="div">
                        {product.name}
                      </ZTypography>
                      <ZTypography variant="h6" color="text.primary">
                        ${product.price.toFixed(2)}
                      </ZTypography>
                      <Box display="flex" alignItems="center" mt={1}>
                        <Rating
                          name="read-only"
                          value={product.rating}
                          precision={0.5}
                          readOnly
                        />
                        <ZTypography
                          variant="body2"
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

export default withNavigation(MensFashion);
