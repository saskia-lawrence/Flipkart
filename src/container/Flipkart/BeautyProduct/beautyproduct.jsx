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

// Import images for beauty products
import beau1 from "../../../utils/assets/images/beau1.jpg";
import beau2 from "../../../utils/assets/images/beau2.jpg";
import beau3 from "../../../utils/assets/images/beau3.jpg";
import beau4 from "../../../utils/assets/images/beau4.jpg";
import beau5 from "../../../utils/assets/images/beau5.jpg";
import beau6 from "../../../utils/assets/images/beau6.jpg";
import beau7 from "../../../utils/assets/images/beau7.jpg";
import beau8 from "../../../utils/assets/images/beau8.jpg";
import beau9 from "../../../utils/assets/images/beau9.jpg";
import beau10 from "../../../utils/assets/images/beau10.jpg";
import beau11 from "../../../utils/assets/images/beau11.jpg";
import beau12 from "../../../utils/assets/images/beau12.jpg";
import beau13 from "../../../utils/assets/images/beau13.jpg";
import beau14 from "../../../utils/assets/images/beau14.jpg";
import beau15 from "../../../utils/assets/images/beau15.jpg";

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

class BeautyProduct extends React.Component {
  constructor(props) {
    super(props);

    const productImages = {
      1: beau1,
      2: beau2,
      3: beau3,
      4: beau4,
      5: beau5,
      6: beau6,
      7: beau7,
      8: beau8,
      9: beau9,
      10: beau10,
      11: beau11,
      12: beau12,
      13: beau13,
      14: beau14,
      15: beau15,
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
          name: "Hydrating Facial Serum",
          price: 34.99,
          rating: 4.8,
          image: productImages[1],
          reviews: 245,
          category: "Skincare",
          brand: "GlowLab",
          skinType: "All skin types",
          keyIngredients: "Hyaluronic Acid, Vitamin E",
        },
        {
          id: 2,
          name: "Matte Lipstick Set",
          price: 29.99,
          rating: 4.6,
          image: productImages[2],
          reviews: 187,
          category: "Makeup",
          brand: "ColorPop",
          shades: "6 trendy colors",
          finish: "Long-lasting matte",
        },
        {
          id: 3,
          name: "Anti-Aging Night Cream",
          price: 49.99,
          rating: 4.7,
          image: productImages[3],
          reviews: 312,
          category: "Skincare",
          brand: "AgeDefy",
          skinConcern: "Wrinkles, Fine lines",
          keyIngredients: "Retinol, Peptides",
        },
        {
          id: 4,
          name: "Volume Boost Mascara",
          price: 22.99,
          rating: 4.5,
          image: productImages[4],
          reviews: 156,
          category: "Makeup",
          brand: "LashQueen",
          effect: "Lengthening, Volumizing",
          waterproof: "Yes",
        },
        {
          id: 5,
          name: "Detoxifying Clay Mask",
          price: 27.99,
          rating: 4.4,
          image: productImages[5],
          reviews: 134,
          category: "Skincare",
          brand: "PureSkin",
          skinType: "Oily, Combination",
          keyIngredients: "Kaolin Clay, Charcoal",
        },
        {
          id: 6,
          name: "Nourishing Hair Oil",
          price: 19.99,
          rating: 4.6,
          image: productImages[6],
          reviews: 198,
          category: "Haircare",
          brand: "SilkHair",
          hairType: "All hair types",
          benefits: "Repair, Shine, Growth",
        },
        {
          id: 7,
          name: "CC Cream with SPF 30",
          price: 32.99,
          rating: 4.5,
          image: productImages[7],
          reviews: 231,
          category: "Makeup",
          brand: "SkinPerfect",
          coverage: "Medium",
          shades: "12 available",
        },
        {
          id: 8,
          name: "Aromatherapy Diffuser",
          price: 39.99,
          rating: 4.7,
          image: productImages[8],
          reviews: 167,
          category: "Wellness",
          brand: "ZenSpa",
          features: "LED lights, Auto shut-off",
          capacity: "200ml",
        },
        {
          id: 9,
          name: "Vitamin C Brightening Cream",
          price: 36.99,
          rating: 4.6,
          image: productImages[9],
          reviews: 203,
          category: "Skincare",
          brand: "Radiance",
          skinConcern: "Dullness, Dark spots",
          keyIngredients: "Vitamin C, Ferulic Acid",
        },
        {
          id: 10,
          name: "Makeup Brush Set",
          price: 45.99,
          rating: 4.8,
          image: productImages[10],
          reviews: 276,
          category: "Tools",
          brand: "ProArtistry",
          pieces: "12 premium brushes",
          material: "Synthetic fibers",
        },
        {
          id: 11,
          name: "Hydrating Face Mist",
          price: 18.99,
          rating: 4.3,
          image: productImages[11],
          reviews: 143,
          category: "Skincare",
          brand: "DewDrop",
          skinType: "Dry, Sensitive",
          keyIngredients: "Rose Water, Aloe Vera",
        },
        {
          id: 12,
          name: "Eyeshadow Palette",
          price: 42.99,
          rating: 4.7,
          image: productImages[12],
          reviews: 189,
          category: "Makeup",
          brand: "Chroma",
          shades: "15 versatile colors",
          finish: "Matte & Shimmer",
        },
        {
          id: 13,
          name: "Sulfate-Free Shampoo",
          price: 24.99,
          rating: 4.5,
          image: productImages[13],
          reviews: 167,
          category: "Haircare",
          brand: "PureCare",
          hairType: "Color-treated",
          benefits: "Gentle cleansing",
        },
        {
          id: 14,
          name: "CBD Infused Body Lotion",
          price: 28.99,
          rating: 4.4,
          image: productImages[14],
          reviews: 112,
          category: "Bodycare",
          brand: "CalmCare",
          skinType: "Dry, Sensitive",
          keyIngredients: "CBD, Shea Butter",
        },
        {
          id: 15,
          name: "Makeup Removing Balm",
          price: 26.99,
          rating: 4.8,
          image: productImages[15],
          reviews: 231,
          category: "Skincare",
          brand: "CleanSlate",
          skinType: "All skin types",
          benefits: "Gentle, No residue",
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
                  to="/beauty"
                  flag={lable.label}
                  color="inherit"
                >
                  Beauty Products
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
                        M.R.P.: ${(selectedProduct.price * 1.4).toFixed(2)}
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
                              (selectedProduct.price * 1.4)) *
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
                      {selectedProduct.skinType && (
                        <ZTypography flag={lable.label} mb={1}>
                          - Skin Type: {selectedProduct.skinType}
                        </ZTypography>
                      )}
                      {selectedProduct.hairType && (
                        <ZTypography flag={lable.label} mb={1}>
                          - Hair Type: {selectedProduct.hairType}
                        </ZTypography>
                      )}
                      {selectedProduct.keyIngredients && (
                        <ZTypography flag={lable.label} mb={1}>
                          - Key Ingredients: {selectedProduct.keyIngredients}
                        </ZTypography>
                      )}
                      {selectedProduct.shades && (
                        <ZTypography flag={lable.label} mb={1}>
                          - Shades: {selectedProduct.shades}
                        </ZTypography>
                      )}
                      {selectedProduct.benefits && (
                        <ZTypography flag={lable.label} mb={1}>
                          - Benefits: {selectedProduct.benefits}
                        </ZTypography>
                      )}
                      {selectedProduct.skinConcern && (
                        <ZTypography flag={lable.label}>
                          - Skin Concern: {selectedProduct.skinConcern}
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
                Beauty Products
              </ZTypography>
              <ZTypography flag={lable.subheading} mb={4}>
                Discover premium beauty and skincare
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

export default withNavigation(BeautyProduct);
