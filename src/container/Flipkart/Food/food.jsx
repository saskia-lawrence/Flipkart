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

// Import images for food products
import food1 from "../../../utils/assets/images/food1.jpg";
import food2 from "../../../utils/assets/images/food2.jpg";
import food3 from "../../../utils/assets/images/food3.jpg";
import food4 from "../../../utils/assets/images/food4.jpg";
import food5 from "../../../utils/assets/images/food5.jpg";
import food6 from "../../../utils/assets/images/food6.jpg";
import food7 from "../../../utils/assets/images/food7.jpg";
import food8 from "../../../utils/assets/images/food8.jpg";
import food9 from "../../../utils/assets/images/food9.jpg";
import food10 from "../../../utils/assets/images/food10.jpg";
import food11 from "../../../utils/assets/images/food11.jpg";
import food12 from "../../../utils/assets/images/food12.jpg";
import food13 from "../../../utils/assets/images/food13.jpg";
import food14 from "../../../utils/assets/images/food14.jpg";
import food15 from "../../../utils/assets/images/food15.jpg";

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

class Food extends React.Component {
  constructor(props) {
    super(props);

    const productImages = {
      1: food1,
      2: food2,
      3: food3,
      4: food4,
      5: food5,
      6: food6,
      7: food7,
      8: food8,
      9: food9,
      10: food10,
      11: food11,
      12: food12,
      13: food13,
      14: food14,
      15: food15,
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
          name: "Organic Whole Grain Bread",
          price: 5.99,
          rating: 4.7,
          image: productImages[1],
          reviews: 156,
          category: "Bakery",
          brand: "Nature's Harvest",
          weight: "500g",
          ingredients: "Organic whole wheat flour, water, yeast, salt",
          dietaryInfo: "Vegan, No preservatives",
        },
        {
          id: 2,
          name: "Extra Virgin Olive Oil",
          price: 12.99,
          rating: 4.8,
          image: productImages[2],
          reviews: 245,
          category: "Pantry",
          brand: "Mediterranean Gold",
          volume: "500ml",
          origin: "Italy",
          acidity: "<0.5%",
        },
        {
          id: 3,
          name: "Grass-Fed Beef Steak",
          price: 18.99,
          rating: 4.6,
          image: productImages[3],
          reviews: 187,
          category: "Meat",
          brand: "Pasture Raised",
          weight: "400g",
          cut: "Ribeye",
          aging: "21 days",
        },
        {
          id: 4,
          name: "Organic Free-Range Eggs",
          price: 6.49,
          rating: 4.5,
          image: productImages[4],
          reviews: 203,
          category: "Dairy & Eggs",
          brand: "Happy Hens",
          quantity: "12 eggs",
          size: "Large",
          certification: "USDA Organic",
        },
        {
          id: 5,
          name: "Fresh Strawberries",
          price: 4.99,
          rating: 4.4,
          image: productImages[5],
          reviews: 167,
          category: "Produce",
          brand: "Berry Best",
          weight: "1lb",
          origin: "Local farm",
          organic: true,
        },
        {
          id: 6,
          name: "Artisan Dark Chocolate",
          price: 8.99,
          rating: 4.7,
          image: productImages[6],
          reviews: 189,
          category: "Snacks",
          brand: "Cocoa Masters",
          weight: "100g",
          cocoaContent: "70%",
          ingredients: "Cocoa beans, cane sugar, cocoa butter",
        },
        {
          id: 7,
          name: "Cold-Pressed Juice",
          price: 7.49,
          rating: 4.3,
          image: productImages[7],
          reviews: 134,
          category: "Beverages",
          brand: "Pure Press",
          flavor: "Green Detox",
          volume: "500ml",
          ingredients: "Kale, apple, celery, lemon, ginger",
        },
        {
          id: 8,
          name: "Gourmet Coffee Beans",
          price: 14.99,
          rating: 4.8,
          image: productImages[8],
          reviews: 276,
          category: "Beverages",
          brand: "Morning Brew",
          weight: "1lb",
          roast: "Medium",
          origin: "Colombia",
        },
        {
          id: 9,
          name: "Organic Quinoa",
          price: 9.99,
          rating: 4.5,
          image: productImages[9],
          reviews: 142,
          category: "Grains",
          brand: "Ancient Harvest",
          weight: "1kg",
          cookingTime: "15 mins",
          proteinContent: "14g per 100g",
        },
        {
          id: 10,
          name: "Wild-Caught Salmon Fillet",
          price: 22.99,
          rating: 4.7,
          image: productImages[10],
          reviews: 198,
          category: "Seafood",
          brand: "Ocean's Best",
          weight: "500g",
          origin: "Alaska",
          omega3: "High",
        },
        {
          id: 11,
          name: "Greek Yogurt",
          price: 5.49,
          rating: 4.6,
          image: productImages[11],
          reviews: 231,
          category: "Dairy",
          brand: "Hellenic Farms",
          weight: "500g",
          fatContent: "5%",
          probiotic: "Contains live cultures",
        },
        {
          id: 12,
          name: "Organic Almond Butter",
          price: 11.99,
          rating: 4.5,
          image: productImages[12],
          reviews: 167,
          category: "Pantry",
          brand: "Nutty Goodness",
          weight: "350g",
          ingredients: "100% organic almonds",
          sugarFree: true,
        },
        {
          id: 13,
          name: "Fresh Basil Pesto",
          price: 6.99,
          rating: 4.4,
          image: productImages[13],
          reviews: 112,
          category: "Condiments",
          brand: "Italian Touch",
          weight: "200g",
          ingredients: "Basil, olive oil, pine nuts, garlic, parmesan",
          preservatives: "None",
        },
        {
          id: 14,
          name: "Gluten-Free Pasta",
          price: 7.99,
          rating: 4.3,
          image: productImages[14],
          reviews: 98,
          category: "Pantry",
          brand: "Pasta Lovers",
          weight: "400g",
          ingredients: "Brown rice flour, quinoa flour",
          cookingTime: "8-10 mins",
        },
        {
          id: 15,
          name: "Organic Avocados",
          price: 3.99,
          rating: 4.5,
          image: productImages[15],
          reviews: 203,
          category: "Produce",
          brand: "Green Gold",
          quantity: "3 avocados",
          ripeness: "Ready to eat",
          origin: "Mexico",
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
                  to="/food"
                  flag={lable.label}
                  color="inherit"
                >
                  Food
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
                      {selectedProduct.weight && (
                        <ZTypography flag={lable.label} mb={1}>
                          - Weight: {selectedProduct.weight}
                        </ZTypography>
                      )}
                      {selectedProduct.quantity && (
                        <ZTypography flag={lable.label} mb={1}>
                          - Quantity: {selectedProduct.quantity}
                        </ZTypography>
                      )}
                      {selectedProduct.ingredients && (
                        <ZTypography flag={lable.label} mb={1}>
                          - Ingredients: {selectedProduct.ingredients}
                        </ZTypography>
                      )}
                      {selectedProduct.origin && (
                        <ZTypography flag={lable.label} mb={1}>
                          - Origin: {selectedProduct.origin}
                        </ZTypography>
                      )}
                      {selectedProduct.dietaryInfo && (
                        <ZTypography flag={lable.label}>
                          - Dietary Info: {selectedProduct.dietaryInfo}
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
                Fresh Food & Groceries
              </ZTypography>
              <ZTypography flag={lable.subheading} mb={4}>
                Premium quality food products for your table
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

export default withNavigation(Food);
