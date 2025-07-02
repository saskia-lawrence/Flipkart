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

// Import images for kids fashion
import kidsFash1 from "../../../utils/assets/images/kidsfash1.jpg";
import kidsFash2 from "../../../utils/assets/images/kidsfash2.jpg";
import kidsFash3 from "../../../utils/assets/images/kidsfash3.jpg";
import kidsFash4 from "../../../utils/assets/images/kidsfash4.jpg";
import kidsFash5 from "../../../utils/assets/images/kidsfash5.jpg";
import kidsFash6 from "../../../utils/assets/images/kidsfash6.jpg";
import kidsFash7 from "../../../utils/assets/images/kidsfash7.jpg";
import kidsFash8 from "../../../utils/assets/images/kidsfash8.jpg";
import kidsFash9 from "../../../utils/assets/images/kidsfash9.jpg";
import kidsFash10 from "../../../utils/assets/images/kidsfash10.jpg";
import kidsFash11 from "../../../utils/assets/images/kidsfash11.jpg";
import kidsFash12 from "../../../utils/assets/images/kidsfash12.jpg";
import kidsFash13 from "../../../utils/assets/images/kidsfash13.jpg";
import kidsFash14 from "../../../utils/assets/images/kidsfash14.jpg";
import kidsFash15 from "../../../utils/assets/images/kidsfash15.jpg";

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

class KidsFashion extends React.Component {
  constructor(props) {
    super(props);

    const productImages = {
      1: kidsFash1,
      2: kidsFash2,
      3: kidsFash3,
      4: kidsFash4,
      5: kidsFash5,
      6: kidsFash6,
      7: kidsFash7,
      8: kidsFash8,
      9: kidsFash9,
      10: kidsFash10,
      11: kidsFash11,
      12: kidsFash12,
      13: kidsFash13,
      14: kidsFash14,
      15: kidsFash15,
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
          name: "Cute Baby Onesie",
          price: 19.99,
          rating: 4.5,
          image: productImages[1],
          reviews: 98,
          category: "Baby Fashion",
          ageGroup: "0-12 months",
        },
        {
          id: 2,
          name: "Adorable Romper Set",
          price: 24.99,
          rating: 4.3,
          image: productImages[2],
          reviews: 76,
          category: "Baby Fashion",
          ageGroup: "0-12 months",
        },
        {
          id: 3,
          name: "Soft Cotton Bodysuit",
          price: 14.99,
          rating: 4.2,
          image: productImages[3],
          reviews: 65,
          category: "Baby Fashion",
          ageGroup: "0-12 months",
        },
        {
          id: 4,
          name: "Baby Hoodie Jacket",
          price: 22.99,
          rating: 4.4,
          image: productImages[4],
          reviews: 82,
          category: "Baby Fashion",
          ageGroup: "0-12 months",
        },
        {
          id: 5,
          name: "Striped Baby Pants",
          price: 16.99,
          rating: 4.1,
          image: productImages[5],
          reviews: 54,
          category: "Baby Fashion",
          ageGroup: "0-12 months",
        },
        {
          id: 6,
          name: "Baby Animal Costume",
          price: 29.99,
          rating: 4.7,
          image: productImages[6],
          reviews: 112,
          category: "Baby Fashion",
          ageGroup: "0-12 months",
        },
        {
          id: 7,
          name: "Baby Denim Overalls",
          price: 26.99,
          rating: 4.3,
          image: productImages[7],
          reviews: 68,
          category: "Baby Fashion",
          ageGroup: "0-12 months",
        },
        {
          id: 8,
          name: "Baby Winter Jacket",
          price: 34.99,
          rating: 4.6,
          image: productImages[8],
          reviews: 94,
          category: "Baby Fashion",
          ageGroup: "0-12 months",
        },
        {
          id: 9,
          name: "Boys Graphic T-Shirt",
          price: 15.99,
          rating: 4.2,
          image: productImages[9],
          reviews: 87,
          category: "Kids Fashion",
          ageGroup: "2-8 years",
        },
        {
          id: 10,
          name: "Boys Cargo Shorts",
          price: 19.99,
          rating: 4.3,
          image: productImages[10],
          reviews: 76,
          category: "Kids Fashion",
          ageGroup: "2-8 years",
        },
        {
          id: 11,
          name: "Boys Hooded Sweatshirt",
          price: 24.99,
          rating: 4.5,
          image: productImages[11],
          reviews: 92,
          category: "Kids Fashion",
          ageGroup: "2-8 years",
        },
        {
          id: 12,
          name: "Boys Athletic Pants",
          price: 21.99,
          rating: 4.1,
          image: productImages[12],
          reviews: 63,
          category: "Kids Fashion",
          ageGroup: "2-8 years",
        },
        {
          id: 13,
          name: "Boys Denim Jeans",
          price: 27.99,
          rating: 4.4,
          image: productImages[13],
          reviews: 78,
          category: "Kids Fashion",
          ageGroup: "2-8 years",
        },
        {
          id: 14,
          name: "Boys Winter Coat",
          price: 39.99,
          rating: 4.7,
          image: productImages[14],
          reviews: 105,
          category: "Kids Fashion",
          ageGroup: "2-8 years",
        },
        {
          id: 15,
          name: "Boys Swim Trunks",
          price: 17.99,
          rating: 4.0,
          image: productImages[15],
          reviews: 58,
          category: "Kids Fashion",
          ageGroup: "2-8 years",
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
                  to="/kids-fashion"
                  flag={lable.label}
                  color="inherit"
                >
                  Kids Fashion
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
                        {selectedProduct.category}
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
                        M.R.P.: ${(selectedProduct.price * 1.5).toFixed(2)}
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
                              (selectedProduct.price * 1.5)) *
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
                        - Age Group: {selectedProduct.ageGroup}
                      </ZTypography>
                      <ZTypography flag={lable.label} mb={1}>
                        - Material: 100% Cotton (soft and hypoallergenic)
                      </ZTypography>
                      <ZTypography flag={lable.label} mb={1}>
                        - Care Instructions: Machine wash cold, gentle cycle
                      </ZTypography>
                      <ZTypography flag={lable.label}>
                        - Sizes: Available in various sizes for different ages
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
        <Card sx={{ p: 5, borderRadius: 2, boxShadow: 3, minHeight: "100vh" }}>
          <Paper elevation={0} sx={{ p: 4, borderRadius: 2 }}>
            {/* Add Back Arrow Button to Dashboard */}
            <Box sx={{ mt: -5 }}>
              <ZTypography flag={lable.mainheader} fontWeight="bold" mb={2}>
                Kids Fashion
              </ZTypography>
              <ZTypography flag={lable.subheading} mb={4}>
                Adorable outfits for babies and kids
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
                        {product.ageGroup}
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

export default withNavigation(KidsFashion);
